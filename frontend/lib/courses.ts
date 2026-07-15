export type CourseStatus = "available" | "planned";
export type DemoKind = "external" | "repository" | "coming-soon";

export interface CourseSection {
  title: string;
  items: string[];
}

export interface CourseQuiz {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface PortfolioCourse {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  level: "入門" | "基礎" | "進階";
  status: CourseStatus;
  sourceRepo: string;
  sourceUrl: string;
  technologies: string[];
  duration: string;
  featured: boolean;
  learningGoals: string[];
  plainExplanation: string;
  analogy: string;
  workflow: string[];
  codeHighlights: CourseSection[];
  challenge: string[];
  quiz: CourseQuiz;
  demo: {
    kind: DemoKind;
    url?: string;
    label: string;
    note: string;
  };
}

const courses: PortfolioCourse[] = [
  {
    id: "ALP-ML-001",
    slug: "linear-regression-for-beginners",
    title: "用一條線看懂資料趨勢",
    subtitle: "從散點、殘差到離群值，第一次理解線性迴歸",
    category: "機器學習基礎",
    level: "入門",
    status: "available",
    sourceRepo: "gshan1209-cell/L4",
    sourceUrl: "https://github.com/gshan1209-cell/L4",
    technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib", "Streamlit"],
    duration: "約 25 分鐘",
    featured: true,
    learningGoals: [
      "看懂 X、Y 與迴歸線分別代表什麼",
      "理解斜率、截距與雜訊的白話意義",
      "知道殘差如何幫助我們找出離群值",
      "能說明模型預測不等於真實答案"
    ],
    plainExplanation:
      "線性迴歸會在一群資料點中找出一條最能代表整體趨勢的直線。這條線不是硬要穿過每個點，而是讓所有點與直線的總體距離盡可能小。",
    analogy:
      "想像班上每位同學的讀書時間與考試成績。每個人狀況不同，但我們仍可以畫出一條大致趨勢線，觀察讀書時間增加時，成績通常怎麼變化。",
    workflow: [
      "產生或載入 X、Y 資料",
      "切分特徵與目標欄位",
      "使用 LinearRegression 訓練模型",
      "取得預測值 Y_pred",
      "計算 residual 與 abs_residual",
      "找出殘差最大的 Top K 離群值"
    ],
    codeHighlights: [
      {
        title: "模型訓練",
        items: [
          "fit() 讓模型從資料中估計斜率與截距",
          "predict() 使用學到的規則產生預測值",
          "random seed 讓同一組示範可以重現"
        ]
      },
      {
        title: "離群值判讀",
        items: [
          "residual = 真實值 - 預測值",
          "abs_residual 越大，代表該點離趨勢線越遠",
          "離群值不一定是錯誤，也可能是重要例外"
        ]
      }
    ],
    challenge: [
      "調高雜訊，觀察迴歸線是否仍穩定",
      "改變資料筆數，比較少量與大量資料的差異",
      "思考房價、銷售額或溫度資料能否直接使用直線預測"
    ],
    quiz: {
      question: "某資料點的 abs_residual 很大，最合理的解釋是什麼？",
      options: ["它一定是輸入錯誤", "它離模型趨勢線較遠", "模型一定完全失效", "它的 X 值一定最大"],
      answer: "它離模型趨勢線較遠",
      explanation: "絕對殘差代表真實值與模型預測值之間的距離；距離大表示這個點較不符合目前的線性趨勢。"
    },
    demo: {
      kind: "repository",
      url: "https://github.com/gshan1209-cell/L4",
      label: "查看原始作業與執行方式",
      note: "目前先保留原 Streamlit 作業作為來源，後續會把互動控制直接嵌入中央網站。"
    }
  },
  {
    id: "ALP-ML-002",
    slug: "svm-kernel-trick-3d",
    title: "把平面摺成立體",
    subtitle: "用 2D、3D 與互動參數看懂 SVM Kernel Trick",
    category: "機器學習視覺化",
    level: "基礎",
    status: "available",
    sourceRepo: "gshan1209-cell/L13_SVM",
    sourceUrl: "https://github.com/gshan1209-cell/L13_SVM",
    technologies: ["Python", "SVM", "Manim", "Plotly", "Streamlit"],
    duration: "約 35 分鐘",
    featured: true,
    learningGoals: [
      "理解為何有些資料無法用直線分開",
      "用幾何方式理解特徵映射",
      "認識 C 與 gamma 對決策邊界的影響",
      "區分教學用 3D 圖與真實 RBF 無限維特徵空間"
    ],
    plainExplanation:
      "當兩群資料在平面上纏在一起時，SVM 可以利用核函數比較資料之間的關係，等效地在更高維空間找到可分割的方式，再把結果投影回原本的平面。",
    analogy:
      "桌面上有紅色與藍色磁鐵混在一起，拿一把直尺很難分開；若把部分磁鐵墊高，就可能用一片水平紙板輕鬆分成上下兩層。",
    workflow: [
      "建立同心圓非線性資料",
      "先觀察線性模型無法有效分割",
      "用 z = x² + y² 示範升維概念",
      "訓練 RBF SVM",
      "顯示決策邊界、間隔與支持向量",
      "調整 C、gamma 與 noise 觀察過擬合"
    ],
    codeHighlights: [
      {
        title: "核函數參數",
        items: [
          "C 越大，模型越努力分對訓練資料",
          "gamma 越大，單一資料點的影響範圍越小",
          "參數過大可能產生崎嶇、只記住訓練資料的邊界"
        ]
      },
      {
        title: "視覺化分工",
        items: [
          "Manim 負責概念動畫",
          "Matplotlib 負責模型靜態分析",
          "Plotly + Streamlit 負責互動探索"
        ]
      }
    ],
    challenge: [
      "把 kernel 改成 linear，比較同心圓資料的結果",
      "將 gamma 調到很大，觀察邊界是否形成小氣泡",
      "提高 noise，再比較低 C 與高 C 的差異"
    ],
    quiz: {
      question: "為什麼 Kernel Trick 對非線性資料有幫助？",
      options: ["它會刪除所有雜訊", "它讓資料能在更合適的特徵空間被分割", "它永遠只使用一條直線", "它不需要任何資料"],
      answer: "它讓資料能在更合適的特徵空間被分割",
      explanation: "核函數讓模型能有效比較高維特徵空間中的資料關係，進而形成原空間中的非線性邊界。"
    },
    demo: {
      kind: "external",
      url: "https://seanlinesvm.streamlit.app/",
      label: "開啟 SVM 互動 Demo",
      note: "外部 Streamlit 服務可能需要數秒喚醒；中央網站保留來源 Repo 與教學說明作為備援。"
    }
  },
  {
    id: "ALP-DATA-001",
    slug: "cwa-open-data-first-api",
    title: "第一次呼叫政府開放資料 API",
    subtitle: "用中央氣象署資料學會金鑰、請求、JSON 與錯誤處理",
    category: "資料工程入門",
    level: "入門",
    status: "available",
    sourceRepo: "gshan1209-cell/cwa_scraper",
    sourceUrl: "https://github.com/gshan1209-cell/cwa_scraper",
    technologies: ["Python", "REST API", "JSON", "環境變數", "CWA OpenData"],
    duration: "約 30 分鐘",
    featured: true,
    learningGoals: [
      "知道 API 是系統交換資料的窗口",
      "理解 API Key 為什麼不能直接寫進 GitHub",
      "能閱讀基本 JSON 結構",
      "知道正式資料失敗時應如何顯示錯誤或備援資料"
    ],
    plainExplanation:
      "API 就像資料服務的點餐窗口。程式送出資料集代碼、格式與授權資訊，伺服器確認後回傳 JSON 或 XML，程式再把結果存檔或轉成畫面。",
    analogy:
      "到圖書館櫃台填索書單：資料集代碼是書號、API Key 是借書證、JSON 是館員交給你的標準資料盒。",
    workflow: [
      "申請並安全保存 CWA API Key",
      "組合資料集代碼與查詢參數",
      "送出 HTTP 請求",
      "檢查狀態碼與錯誤訊息",
      "解析 JSON 或 XML",
      "以時間戳記保存下載結果"
    ],
    codeHighlights: [
      {
        title: "安全設定",
        items: [
          ".env 只放在本機或部署平台的秘密設定",
          ".env.example 只保留欄位名稱，不放真實金鑰",
          "前端公開變數不能存放私人 API Key"
        ]
      },
      {
        title: "可靠性",
        items: [
          "針對逾時、授權失敗與資料格式錯誤提供清楚訊息",
          "保留資料集代碼與下載時間方便追蹤",
          "正式網站可使用 mock fallback 避免整頁無法展示"
        ]
      }
    ],
    challenge: [
      "把輸出格式從 JSON 改成 XML",
      "更換為今明 36 小時天氣資料集",
      "將下載結果轉成城市天氣卡片"
    ],
    quiz: {
      question: "為什麼不應把真實 API Key 直接提交到 GitHub？",
      options: ["會讓 JSON 變小", "可能被他人盜用並消耗額度", "Python 無法讀取字串", "GitHub 不支援文字檔"],
      answer: "可能被他人盜用並消耗額度",
      explanation: "公開 Repo 中的秘密很容易被自動掃描工具找到，可能造成資料濫用、額度消耗甚至帳號風險。"
    },
    demo: {
      kind: "repository",
      url: "https://github.com/gshan1209-cell/cwa_scraper",
      label: "查看下載器原始碼",
      note: "此課程先以安全的流程圖與程式架構教學呈現，不會要求訪客輸入你的正式 API Key。"
    }
  },
  ...[
    ["ALP-AI-001", "ai-story-player", "AI 圖文故事播放器", "生成式 AI", "gshan1209-cell/L2DOC1-github"],
    ["ALP-AI-002", "cosmos-text-to-image", "Cosmos 文字生成圖片", "生成式 AI", "gshan1209-cell/hw3-cosmos-text2image"],
    ["ALP-ML-003", "ml-top-ten-algorithms", "機器學習十大演算法", "機器學習基礎", "gshan1209-cell/machinelearningHw05"],
    ["ALP-ML-004", "crisp-dm-regression", "CRISP-DM 迴歸專案流程", "機器學習專案", "gshan1209-cell/machinelearningHw6"],
    ["ALP-ML-005", "startup-profit-prediction", "新創公司利潤預測", "機器學習專案", "gshan1209-cell/machinelearningHw6-2"],
    ["ALP-VIS-001", "manim-stock-course", "Manim 台股視覺動畫", "資料視覺化", "gshan1209-cell/L12"],
    ["ALP-ML-006", "feature-selection", "Boston Housing 特徵選擇", "機器學習進階", "gshan1209-cell/hw07"],
    ["ALP-WEB-001", "movie-scraping", "電影資料爬蟲", "網頁資料工程", "gshan1209-cell/scrape_movie"],
    ["ALP-WEB-002", "weather-dashboard", "農事天氣儀表板", "全端應用", "gshan1209-cell/scrape_weather"],
    ["ALP-WEB-003", "django-blog", "Django Blog 入門", "網站後端", "gshan1209-cell/2026-DjangoBlog"],
    ["ALP-ML-007", "ensemble-income-model", "Ensemble 收入分類模型", "機器學習進階", "gshan1209-cell/L20-Ensemble-Model"]
  ].map(([id, slug, title, category, sourceRepo]) => ({
    id,
    slug,
    title,
    subtitle: "原始作業已完成盤點，等待依統一六段式教學模板轉製。",
    category,
    level: "基礎" as const,
    status: "planned" as const,
    sourceRepo,
    sourceUrl: `https://github.com/${sourceRepo}`,
    technologies: [],
    duration: "規劃中",
    featured: false,
    learningGoals: [],
    plainExplanation: "課程內容建置中。",
    analogy: "課程內容建置中。",
    workflow: [],
    codeHighlights: [],
    challenge: [],
    quiz: {
      question: "課程內容建置中",
      options: [],
      answer: "",
      explanation: ""
    },
    demo: {
      kind: "coming-soon" as const,
      label: "等待轉製",
      note: "來源 Repository 已登錄，後續將補上白話教學、互動 Demo、測驗與延伸挑戰。"
    }
  }))
];

export function getCourses(): PortfolioCourse[] {
  return courses;
}

export function getCourse(slug: string): PortfolioCourse | undefined {
  return courses.find((course) => course.slug === slug);
}

export function getAvailableCourses(): PortfolioCourse[] {
  return courses.filter((course) => course.status === "available");
}

export function getFeaturedCourses(): PortfolioCourse[] {
  return courses.filter((course) => course.featured && course.status === "available");
}

export function getCourseCategories(): string[] {
  return Array.from(new Set(courses.map((course) => course.category)));
}
