# AI Learning Portfolio｜開發紀錄 (Development Record)

這份文件記錄專案開發進度，並作為 ChatGPT、Codex、Gemini、Antigravity、OpenCode 等 Agent 的交接文件。

## 中文摘要

- 原「機器學習前十大演算法互動學習網站」已確認作為 AI Learning Portfolio 的技術母體。
- 原有十大演算法、收藏、進度、測驗與 AI 助教功能必須保留。
- 已建立完整轉型規格、P0 任務與 Agent 開發規範。
- 下一步由 Codex 執行 `ALP-P0-001`～`ALP-P0-005`，建立 Course Registry、教學頁與 Demo Adapter。

## 1. 專案定位

- **新名稱**：AI Learning Portfolio｜AI 學習作品集與教學網站
- **原名稱**：ML Algorithm Tutor｜機器學習前十大演算法互動學習網站
- **技術母體**：Next.js、TypeScript、Tailwind CSS、Next.js API Routes
- **核心目標**：把分散的課程作業轉為新手友善、可操作、可測驗、可追溯原始碼的教學型作品集。

## 2. 既有功能基線

以下功能不得在轉型過程退化：

- 十大機器學習演算法資料與教學頁
- 首頁、演算法詳細頁、關於頁
- 搜尋、分類與難度篩選
- 收藏與 `/favorites`
- 學習進度與 `/progress`
- 單課測驗與 `/quiz`
- AI 助教與 API 串接 / fallback
- RWD 與 Tailwind UI

## 3. 2026-07-15｜AI Learning Portfolio 轉型啟動

### 已完成

- [x] 盤點 GitHub 帳號下的課程作業 Repository。
- [x] 確認本 Repository 最適合作為教學平台母體。
- [x] 建立分支 `feat/ai-learning-portfolio-platform`。
- [x] 建立 `docs/specs/AI_Learning_Portfolio_SPEC_v1_0.md`。
- [x] 建立 `docs/tasks/ALP-P0-001_to_005_platform_foundation.md`。
- [x] 更新 `AGENT.md`，加入 P0 任務、驗收與禁止事項。

### 來源 Repository 範圍

1. `L2DOC1-github`
2. `hw3-cosmos-text2image`
3. `L4`
4. `machinelearningHw05`
5. `machinelearningHw6`
6. `machinelearningHw6-2`
7. `L12`
8. `L13_SVM`
9. `hw07`
10. `cwa_scraper`
11. `scrape_movie`
12. `scrape_weather`
13. `2026-DjangoBlog`
14. `L20-Ensemble-Model`

## 4. 目前進度

**目前階段：P0 ready_for_development**

### 待執行

- [ ] `ALP-P0-001`：Course / Project / Demo Schema。
- [ ] `ALP-P0-002`：14 個作業的 Registry。
- [ ] `ALP-P0-003`：品牌、導航與首頁資訊架構。
- [ ] `ALP-P0-004`：六段式教學頁模板。
- [ ] `ALP-P0-005`：Demo Adapter 與 fallback。
- [ ] 三門示範課：線性迴歸、SVM Kernel Trick、CWA OpenData。
- [ ] 建立 `docs/km/AI_Learning_Portfolio_P0.md`。

## 5. 下一個 Agent 的指令

請依序閱讀：

1. `AGENT.md`
2. `docs/specs/AI_Learning_Portfolio_SPEC_v1_0.md`
3. `docs/tasks/ALP-P0-001_to_005_platform_foundation.md`
4. 本文件

接著盤點目前 main 分支真實程式結構，完成 P0 任務。不要依賴舊 README 中可能過時的前後端路徑，不得刪除既有演算法、收藏、進度、測驗與 AI 助教功能。

完成後：

- 執行 lint、typecheck、test、build。
- 更新本文件狀態與驗證證據。
- 建立 KM 技術文件。
- 建立 PR，列出架構決策、異動、測試結果、限制與下一步。

---

## 6. 歷史開發紀錄摘要

截至 2026-06-09，原 ML Algorithm Tutor 已完成：

- 十大演算法靜態資料與 API
- 首頁、詳細頁、收藏、進度、綜合測驗
- Tailwind UI 與互動動畫
- AI 助教與 Gemini SDK 整合
- AGENT / GEMINI 協作文件
- 建置與基本驗證

詳細歷史可由 Git commit 與 2026-07-15 前版本的本文件追溯。
