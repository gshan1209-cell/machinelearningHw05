# 舊獨立 ML 站詳情契約修補（候選）

Trello：https://trello.com/c/iHDbugqE

公開首頁 `/` 的 FastAPI 路由回傳根目錄 `web.html`。`/api/algorithms/` 只提供十項摘要；原 `openDetail` 直接讀摘要，所以原理、用途、優缺點無法顯示。完整內容原已存在於 `/api/algorithms/{slug}`，不需要更動資料檔或重建 Next.js 平台。

候選修補每次開啟才讀取詳情，確認 slug、說明、四個清單與測驗結構完整，然後顯示資料來源的原文。缺資料或非成功 HTTP 回應顯示失敗與重試，不能把摘要假裝成完整教材。請求序號與開啟中的 slug 會防止舊請求覆蓋新項目。清單和測驗使用 DOM 文字節點。測驗保留三題、原始選項與答案解釋，以原生可展開答案呈現。

開啟對話框會把焦點移到關閉按鈕。鍵盤 Enter 的預設動作原會接著啟動這個按鈕而立刻關閉；在卡片 keydown 處防止這次預設動作即可保留對話框。

## 重現與驗證

需要 Python、Node.js 及已安裝的 Google Chrome。以下從此 repository 的根目錄執行，僅操作本機。

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt httpx pytest
.\.venv\Scripts\python.exe -m pytest -q
.\.venv\Scripts\python.exe -m uvicorn main:app --host 127.0.0.1 --port 8875
```

保持服務執行，在另一個終端機：

```powershell
Set-Location tests
npm ci
npm test
```

瀏覽器預設讀取 `http://127.0.0.1:8875`；可用 `ML_BASE_URL` 指定其他本機位址。測試注入 503／不完整資料及 HTML 字串來驗證錯誤、重試和安全顯示；一般十項流程使用真實 FastAPI 與既有教材，沒有呼叫 AI 供應商。

結果：FastAPI 2/2，Chrome 15/15；沒有跳過或重試。修補前線性迴歸測試明確因說明未載入失敗。`git diff --check` PASS。根目錄此前沒有 Python 測試套件；此次 `pytest -q` 已執行全套。`frontend/` 沒有 `typecheck` 或 `test` 指令，其 lint/build 本次 NOT_RUN；該 Next.js 前端未變動且不是現有公開根路徑所用程式。

## 交付邊界

本機候選修補與公開狀態分開。未推送、開 PR、合併或部署，正式站詳情問題仍待核准後的交付。保留所有原始課程專案與 ALP 既有架構；舊站退場需另行決策。
