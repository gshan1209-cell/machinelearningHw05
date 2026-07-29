# ALP-P0-001～005｜AI Learning Portfolio 平台骨架任務

## 任務摘要

將現有「機器學習前十大演算法互動學習網站」升級為可持續整合多份課程作業的教學型作品集平台。本任務只建立平台骨架與三門示範課，不進行全量原始碼搬移。

## 勾稽規格

- 規格書：`docs/specs/AI_Learning_Portfolio_SPEC_v1_0.md`
- Agent 規範：`AGENT.md`
- 開發分支：`feat/ai-learning-portfolio-platform`
- Epic：`ALP-P0`

## 任務清單

### ALP-P0-001｜內容 Schema

建立：

- `CourseMetadata`
- `CourseSection`
- `SourceRepository`
- `DemoConfig`
- `QuizConfig`
- `LearningPath`

使用 TypeScript 型別與 Zod 驗證。Schema 需支援版本、發布狀態、難度、預估時間、標籤、來源 Repository、Demo 與 fallback。

### ALP-P0-002｜Course Registry

建立 `content/registry.json`，納入：

1. L2DOC1-github
2. hw3-cosmos-text2image
3. L4
4. machinelearningHw05
5. machinelearningHw6
6. machinelearningHw6-2
7. L12
8. L13_SVM
9. hw07
10. cwa_scraper
11. scrape_movie
12. scrape_weather
13. 2026-DjangoBlog
14. L20-Ensemble-Model

每筆至少包含：slug、標題、白話摘要、分類、難度、技術標籤、來源 Repo、Demo 模式、發布狀態。

### ALP-P0-003｜品牌與導航

- 對外名稱改為 `AI Learning Portfolio`。
- 首頁保留原十大演算法精選入口。
- 新增課程、學習路線、作品集、進度、收藏、測驗、關於等導航。
- 手機版導覽可正常操作。

### ALP-P0-004｜六段式教學模板

每門課固定支援：

1. 用途
2. 白話原理
3. Demo
4. 程式解析
5. 小測驗
6. 延伸挑戰

建立 `/courses` 與 `/courses/[slug]`。

### ALP-P0-005｜Demo Adapter

支援：

- `native`
- `iframe`
- `external`
- `video`
- `snapshot`

外部 Demo 必須延遲載入，且任何錯誤均顯示 fallback。

## 三門示範課

- `linear-regression`：來源 L4。
- `svm-kernel-trick`：來源 L13_SVM。
- `cwa-open-data`：來源 cwa_scraper。

每門課需完整包含六段式內容與至少三題測驗。

## 驗收標準

- [ ] Course Registry 通過 Schema 驗證。
- [ ] `/courses` 可搜尋與篩選。
- [ ] 三門示範課可正常顯示。
- [ ] Demo 失效可顯示 fallback。
- [ ] 原有十大演算法、收藏、進度、測驗功能不退化。
- [ ] RWD 無明顯破版。
- [ ] lint、typecheck、test、build 通過或有明確替代驗證紀錄。
- [ ] `DEVELOPMENT_RECORD.md` 已更新。
- [ ] 已建立 `docs/km/AI_Learning_Portfolio_P0.md`。

## Codex 執行指令

請先讀取 `AGENT.md`、`DEVELOPMENT_RECORD.md`、`docs/specs/AI_Learning_Portfolio_SPEC_v1_0.md` 與本任務。盤點 main 的真實目錄後，以最小影響方式完成 ALP-P0-001～005。不要刪除原有演算法功能，不要複製其他 Repository 的完整原始碼。完成後建立 PR，附測試證據、畫面路徑、已知限制與下一步。
