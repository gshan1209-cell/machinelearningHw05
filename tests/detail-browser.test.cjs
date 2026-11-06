// Regressions caught: summary-only details, stale async responses, masked failures,
// unsafe HTML rendering, missing quiz content, and broken keyboard/mobile use.
const {test,before,after}=require('node:test');
const assert=require('node:assert/strict');
const {chromium}=require('playwright');
const fs=require('node:fs');const path=require('node:path');
const base=process.env.ML_BASE_URL||'http://127.0.0.1:8875';
const algorithms=JSON.parse(fs.readFileSync(path.join(__dirname,'..','algorithms.json'),'utf8'));
let browser;
before(async()=>{browser=await chromium.launch({channel:'chrome',headless:true});});
after(async()=>{await browser?.close();});
async function openPage(options={}) {
 const page=await browser.newPage(options);page.setDefaultTimeout(3000);
 await page.goto(base);await page.locator('.card').first().waitFor();return page;
}
for(const item of algorithms) test(`${item.slug}: summary card opens faithful full notes and all quiz questions`,async()=>{
 const page=await openPage();try{
  await page.locator(`[data-slug="${item.slug}"]`).click();
  await page.waitForFunction(text=>document.getElementById('detail-summary').textContent===text,item.description,{timeout:2000});
  assert.equal(await page.locator('#detail-summary').innerText(),item.description);
  for(const [key,id] of [['how_it_works','detail-works'],['use_cases','detail-uses'],['pros','detail-pros'],['cons','detail-cons']])
   assert.deepEqual(await page.locator(`#${id} li`).allTextContents(),item[key]);
  assert.equal(await page.locator('#detail-quiz > li').count(),item.quiz.length);
  for(const [i,q] of item.quiz.entries()) {
   const entry=page.locator('#detail-quiz > li').nth(i);
   assert.ok((await entry.innerText()).includes(q.question));
   assert.deepEqual(await entry.locator('ol li').allTextContents(),q.options);
   await entry.locator('summary').click();
   assert.ok((await entry.innerText()).includes(q.answer));
   assert.ok((await entry.innerText()).includes(q.explanation));
  }
  await page.keyboard.press('Escape');assert.equal(await page.locator('dialog').isVisible(),false);
 }finally{await page.close();}
});
test('failed detail request shows honest error and retry recovers',async()=>{
 const page=await openPage();try{
  let fail=true;await page.route('**/api/algorithms/linear-regression',route=>fail?route.fulfill({status:503,body:'Unavailable'}):route.continue());
  await page.locator('[data-slug="linear-regression"]').click();
  await page.getByRole('status').filter({hasText:'Could not load'}).waitFor();
  assert.equal(await page.locator('#detail-notes').isVisible(),false);
  fail=false;await page.getByRole('button',{name:'Retry'}).click();
  await page.waitForFunction(()=>document.getElementById('detail-summary').textContent.startsWith('線性回歸是'));
 }finally{await page.close();}
});
test('malformed summary-shaped detail is rejected instead of displayed as complete',async()=>{
 const page=await openPage();try{
  await page.route('**/api/algorithms/linear-regression',route=>route.fulfill({json:{slug:'linear-regression',name_en:'Linear Regression'}}));
  await page.locator('[data-slug="linear-regression"]').click();
  await page.getByRole('status').filter({hasText:'Could not load'}).waitFor();
  assert.equal(await page.locator('#detail-notes').isVisible(),false);
 }finally{await page.close();}
});
test('a response from a closed dialog cannot replace the next algorithm',async()=>{
 const page=await openPage();try{
  let release;let ready;const requested=new Promise(r=>ready=r);const blocked=new Promise(r=>release=r);
  await page.route('**/api/algorithms/linear-regression',async route=>{ready();await blocked;await route.continue();});
  await page.locator('[data-slug="linear-regression"]').click();await requested;
  await page.keyboard.press('Escape');
  await page.locator('[data-slug="logistic-regression"]').click();
  await page.waitForFunction(()=>document.getElementById('detail-summary').textContent.startsWith('邏輯回歸'));
  release();await page.waitForResponse(r=>r.url().endsWith('/api/algorithms/linear-regression'));
  assert.equal(await page.locator('#detail-title').innerText(),'Logistic Regression');
  assert.ok((await page.locator('#detail-summary').innerText()).startsWith('邏輯回歸'));
 }finally{await page.close();}
});
test('detail strings render as text and do not create markup',async()=>{
 const page=await openPage();try{
  const item={...algorithms[0],how_it_works:['<img src=x onerror="window.injected=true">']};
  await page.route('**/api/algorithms/linear-regression',route=>route.fulfill({json:item}));
  await page.locator('[data-slug="linear-regression"]').click();
  await page.waitForFunction(()=>document.getElementById('detail-works').textContent.includes('<img'));
  assert.equal(await page.locator('#detail-works img').count(),0);
  assert.equal(await page.evaluate(()=>window.injected),undefined);
 }finally{await page.close();}
});
test('mobile search keyboard opening and full notes fit the viewport',async()=>{
 const page=await openPage({viewport:{width:390,height:844},isMobile:true,hasTouch:true});try{
  await page.locator('#search').fill('Linear Regression');assert.equal(await page.locator('.card').count(),1);
  await page.locator('.card').focus();await page.keyboard.press('Enter');
  await page.waitForFunction(()=>document.getElementById('detail-summary').textContent.startsWith('線性回歸是'));
  assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  const rect=await page.locator('dialog').boundingBox();assert.ok(rect.x>=0&&rect.x+rect.width<=390);
 }finally{await page.close();}
});
