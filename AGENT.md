# AI Agent 協作指南 (Agent Collaboration Guide)

這份文件用於指引 ChatGPT、Codex、Gemini、Antigravity、OpenCode 等 AI Agent 在本專案中協作與開發。

## 1. 核心開發原則

- **遵守現有架構**：以目前實際程式碼為準；本專案核心為 Next.js、TypeScript、Tailwind CSS 與 Next.js API Routes。不得只依賴過時 README 推測目錄。
- **先讀上下文**：開始前必須讀取 `DEVELOPMENT_RECORD.md` 與目前任務指定的規格書。
- **保護既有功能**：原有十大機器學習演算法、收藏、進度、測驗與 AI 助教不得發生 regression。
- **漸進式修改**：先建立通用骨架，再逐一導入作業，不得一次大搬家。
- **內容與程式分離**：課程內容使用 MDX / JSON Registry；新增課程不得要求修改核心頁面。
- **不刪原始作業**：其他 GitHub Repository 是來源證據與獨立 Demo，不得因中央整合而刪除。
- **安全優先**：不得提交 API Key、Token、密碼、私有資料或私有 Repository 內容。
- **開發階段跳過正式部署**：先完成本機功能、測試與 Preview 所需設定；正式 Production 部署不列為阻塞條件。

## 2. 任務執行流程

1. 讀取 `AGENT.md`。
2. 讀取 `DEVELOPMENT_RECORD.md`。
3. 讀取指定規格書與任務文件。
4. 盤點目前真實目錄、套件與測試指令。
5. 以最小影響範圍實作。
6. 執行 lint、typecheck、test、build 與內容驗證。
7. 更新 `DEVELOPMENT_RECORD.md`。
8. 建立或更新 `docs/km/` 技術文件。
9. 在 PR 說明中提供異動、測試證據、限制與下一步。

## 3. 與使用者的溝通

- 使用親切、專業的繁體中文。
- 結論與重要結果放在最前面。
- 小問題直接修正；影響架構或資料安全的大問題，建立規格與任務再處理。
- 每次交付提供可驗證方式。
- 不要求使用者重複提供已存在於 Repository 或對話中的資訊。

## 4. AI Learning Portfolio 轉型任務

### 4.1 專案定位

本 Repository 將由「機器學習前十大演算法互動學習網站」升級為：

> **AI Learning Portfolio｜AI 學習作品集與教學網站**

中央網站整合分散的課程作業，每個主題以新手友善方式重新設計，兼具個人作品集、教學網站與原始作業證據鏈。

### 4.2 必讀規格

- `docs/specs/AI_Learning_Portfolio_SPEC_v1_0.md`

### 4.3 目前執行批次

- **Epic**：`ALP-P0｜平台骨架與資料盤點`
- **分支**：`feat/ai-learning-portfolio-platform`
- **優先級**：P0
- **狀態**：ready_for_development

### 4.4 P0 任務

- [ ] `ALP-P0-001`：建立 Course、Project、Demo 的 TypeScript 型別與 Zod Schema。
- [ ] `ALP-P0-002`：建立 `content/registry.json`，先盤點 14 個來源 Repository。
- [ ] `ALP-P0-003`：建立新品牌、導航與首頁資訊架構，但保留原十大演算法入口。
- [ ] `ALP-P0-004`：建立六段式教學頁共用模板：用途、原理、Demo、程式、測驗、挑戰。
- [ ] `ALP-P0-005`：建立 Demo Adapter，支援 `native`、`iframe`、`external`、`video`、`snapshot` 與 fallback。

### 4.5 第一輪示範課程

- [ ] L4｜用一條線看懂資料趨勢：簡單線性迴歸。
- [ ] L13｜把平面摺成立體：SVM Kernel Trick。
- [ ] CWA｜第一次呼叫政府 OpenData API。

### 4.6 完成標準

- `/courses` 可顯示課程列表、搜尋與基本篩選。
- `/courses/[slug]` 可渲染六段式教學內容。
- 新增課程只需新增 Registry / MDX / Quiz 資料。
- Demo 失效時顯示 fallback，不造成整頁錯誤。
- 原有 `/favorites`、`/progress`、`/quiz` 與演算法頁仍可使用。
- `npm run lint`、`npm run typecheck`、`npm run test`、`npm run build` 通過；若既有專案缺某指令，需補齊或在 PR 說明替代驗證方式。
- 更新 `DEVELOPMENT_RECORD.md` 與 `docs/km/AI_Learning_Portfolio_P0.md`。

## 5. 禁止事項

- 不得刪除原十大演算法資料與頁面。
- 不得把 14 個 Repository 的全部原始碼直接複製進本專案。
- 不得在元件中硬編碼完整課程清單。
- 不得讓 AI 自動產生內容直接標示為 `published`。
- 不得在公開內容中揭露私有 Repository、憑證或個資。
- 不得為了 Demo 在 Vercel 執行長時間模型訓練、爬蟲或 Manim 渲染。

## 6. PR 交付格式

PR 說明必須包含：

1. 任務代碼。
2. 變更摘要。
3. 架構決策。
4. 異動檔案。
5. 測試指令與結果。
6. 截圖或可驗證路徑。
7. 已知限制。
8. 下一個任務建議。
