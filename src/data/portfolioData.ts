import { Project, ResearchModel, SkillGroup, ExperienceItem, CertificationItem, LeetCodeStats, GitHubStats } from '../types';

export const personalInfo = {
  name: "Krish Shah",
  roleTitle: "AI/ML Engineer + Software Developer + Entrepreneur",
  headline: "Building intelligent systems. Turning ideas into impact.",
  secondaryBio: "I’m Krish Shah — an AI/ML engineer, software developer, and entrepreneur pursuing my B.Tech in Information Technology at Charusat University. I build intelligent applications, engineer practical software products, and transform complex technical ideas into reliable, real-world solutions.",
  email: "krishshah8201@gmail.com",
  phone: "+91 96247 48201",
  location: "Anand & Ahmedabad, Gujarat, India",
  university: "Charusat University (DEPSTAR)",
  degree: "Bachelor of Technology in Information Technology",
  graduationYear: "2024 – 2028",
  cgpa: "7.50 / 10.0 (up to 4th Sem)",
  availability: "Open to AI/ML & Full-Stack Engineering roles, research collaborations, and entrepreneurial ventures.",
  resumePath: "/Krish_Shah_Resume.pdf",
  portfolioUrl: "https://krishshah.tech",
  socialLinks: {
    github: "https://github.com/Krish-065",
    linkedin: "https://www.linkedin.com/in/krishshah065/",
    leetcode: "https://leetcode.com/u/krish_-_24/",
    coursera: "https://www.coursera.org/organizations/charusat/my-learning?myLearningTab=CERTIFICATES",
    email: "mailto:krishshah8201@gmail.com"
  }
};

export const verifiedLeetCode: LeetCodeStats = {
  username: "krish_-_24",
  totalSolved: 132,
  easy: 54,
  medium: 71,
  hard: 7,
  badge: "50 Days Badge 2026",
  badgeIcon: "https://assets.leetcode.com/static_assets/others/50_1080_1080.png",
  profileUrl: "https://leetcode.com/u/krish_-_24/"
};

export const verifiedGitHub: GitHubStats = {
  username: "Krish-065",
  publicRepos: 18,
  profileUrl: "https://github.com/Krish-065",
  topLanguages: ["Python", "TypeScript", "JavaScript", "Jupyter Notebook", "C++", "Java"]
};

export const featuredProjects: Project[] = [
  {
    id: "stocksoperator",
    title: "StocksOperator",
    tagline: "The Trader's Proving Ground — Quantitative Paper Trading & Market Simulation Engine",
    category: "Flagship Platform",
    role: "Founder & Full-Stack Quant Developer",
    date: "2026 – Present",
    isFlagship: true,
    featuredOrder: 1,
    summary: "A quantitative finance and trading technology platform engineered for disciplined market simulation, backtesting, strategy building, and market analytics across equities, crypto, and derivatives.",
    problem: "Retail traders and algorithmic researchers routinely lose capital due to lack of risk discipline, absence of historical validation tools, and fragmented market intelligence before risking live money.",
    solution: "StocksOperator provides a comprehensive simulated trading environment with simulated capital, streaming tick data, automated strategy backtesting, market replay mechanics, and multi-asset screening.",
    myContribution: "Architected the complete full-stack product, designed the quantitative backtesting simulation pipelines, implemented high-performance charting workflows, and designed the UI/UX.",
    verifiedTech: ["React", "TypeScript", "Node.js", "Python Quant Services", "WebSockets", "Lightweight Charts", "REST APIs"],
    features: [
      "Simulated Capital Engine: Zero-risk execution environment supporting equities, commodities, and digital assets.",
      "Algorithmic Backtesting Suite: Evaluate quantitative parameter combinations across multi-year historical bars.",
      "Market Replay Simulator: Replay past trading sessions bar-by-bar to review execution decisions without hindsight bias.",
      "Technical Market Screener: Real-time filtering by volume spikes, momentum breakouts, moving average crosses, and volatility.",
      "Strict Honesty Note: Designed strictly as a paper-trading, strategy validation, and educational analytics platform without unverified live-capital claims."
    ],
    architecture: {
      overview: "Decoupled web client interfacing with low-latency market data streams and asynchronous Python backtesting workers.",
      steps: [
        { title: "Market Data Ingestion", desc: "Aggregates multi-source historical and tick-level quotes through normalized schema pipelines." },
        { title: "Strategy Backtesting Worker", desc: "Asynchronous Python worker computes returns, maximum drawdown, Sharpe ratio, and trade win-rates." },
        { title: "Execution Engine Simulator", desc: "Simulates orders with configurable commission structures, limit order matching, and slippage buffers." },
        { title: "Client Visualization Layer", desc: "React frontend with canvas-accelerated candlestick charts and interactive strategy parameter controls." }
      ]
    },
    metrics: [
      { label: "Asset Classes", value: "Multi-Asset (Equities, Forex, Crypto)" },
      { label: "Execution Mode", value: "Simulated Paper-Trading" },
      { label: "Validation Engine", value: "Historical Replay & Backtest" }
    ],
    liveUrl: "https://stocksoperator.com",
    githubUrl: "https://github.com/Krish-065"
  },
  {
    id: "bhoomisetu",
    title: "BhoomiSetu",
    tagline: "AI-Powered Land Record Digitization & Geospatial Cadastral Validation Platform",
    category: "AI & GovTech",
    role: "Lead Full-Stack & GIS Engineer (SIH 2026)",
    date: "2026",
    featuredOrder: 2,
    summary: "A production-grade GovTech platform built for Smart India Hackathon 2026 (Problem Statement #18). Converts faded, multilingual legacy revenue records into structured, validated digital profiles linked to GIS cadastral parcels.",
    problem: "Across India, legacy land records exist in fragile, handwritten regional registers (Devanagari, Gujarati, Marathi) plagued by transcription errors, boundary disputes, and absence of spatial verification.",
    solution: "BhoomiSetu integrates computer-vision document pre-processing, multilingual Indic OCR, deterministic revenue syntax rules, human-in-the-loop split-screen review, and PostGIS cadastral polygon matching with 14-digit ULPIN tracking.",
    myContribution: "Engineered the full-stack architecture, integrated the multilingual OCR pipeline and bounding box extraction, developed the split-screen officer verification UI, and connected PostGIS cadastral layers with Leaflet mapping.",
    verifiedTech: ["TypeScript", "Python", "PostGIS 16", "PostgreSQL", "FastAPI", "React", "Docker", "Leaflet GIS"],
    features: [
      "Multilingual Indic OCR: Extracts text from English, Hindi/Devanagari, and Gujarati historical revenue land records.",
      "16 Legal Revenue Entities: Structured extraction of owner names, survey numbers, khata identifiers, parcel areas, and dispute tags.",
      "Visual Bounding Box Traceability: Every extracted field is visually pinned to its exact coordinates on the original scanned document.",
      "Deterministic Validation Rules: Automated syntax checking, area unit conversions, and dispute flags before officer sign-off.",
      "Cadastral GIS Mapping: Matches verified survey numbers directly against official GeoJSON / PostGIS cadastral polygons to project real-world parcel boundaries with 14-digit ULPIN."
    ],
    architecture: {
      overview: "End-to-end pipeline from raw scanned PDF/image to human-validated spatial cadastral record.",
      steps: [
        { title: "Vision Deskew & Preprocess", desc: "Adaptive thresholding, contrast normalization, and deskewing of low-resolution scanned paper." },
        { title: "Indic OCR & Entity Extraction", desc: "Extracts 16 revenue attributes with confidence scores and pixel bounding boxes." },
        { title: "Deterministic Rule Engine", desc: "Validates area calculations, survey syntax, and flags encumbrance conflicts." },
        { title: "Officer Audit & Cadastral Match", desc: "Split-screen human review triggers PostGIS query to render real-world land parcel on Leaflet." }
      ]
    },
    metrics: [
      { label: "Hackathon Track", value: "Smart India Hackathon 2026 (#18)" },
      { label: "Entity Extraction", value: "16 Revenue Fields" },
      { label: "Spatial Database", value: "PostGIS 16 / GeoJSON" }
    ],
    githubUrl: "https://github.com/Krish-065/BhoomiSetu"
  },
  {
    id: "futureskills-ai",
    title: "FutureSkills AI",
    tagline: "AI Job Market Intelligence & Predictive Analytics Platform",
    category: "Predictive Analytics",
    role: "Full-Stack & ML Pipeline Engineer",
    date: "2026",
    featuredOrder: 3,
    summary: "A data-driven analytics platform aggregating global tech hiring demand, analyzing regional compensation ranges, and projecting 14-month hiring trajectory using statistical machine learning models.",
    problem: "Developers, students, and educators face rapidly evolving AI skill requirements with sparse forward-looking visibility into market compensation and real hiring velocity.",
    solution: "A decoupled microservices platform combining real-time job aggregation pipelines, interactive Recharts visualizations, and a Python forecasting engine computing 95% confidence intervals.",
    myContribution: "Developed the React/Vite analytics dashboard, implemented the Node.js/Express API Gateway with query caching, and built the FastAPI analytics service executing time-series linear regression models.",
    verifiedTech: ["React", "Vite", "Recharts", "Node.js", "Express", "FastAPI (Python)", "MongoDB Atlas", "Scikit-Learn"],
    features: [
      "AI Skill Demand Distribution: Real-time frequency mapping across Python, SQL, Machine Learning, Deep Learning, and Cloud ecosystems.",
      "Global Salary Intelligence: Compensation distributions categorized by experience level, role family, and geographic region.",
      "14-Month Predictive ML Forecast: Linear regression time-series forecasting model projecting future hiring volumes with 95% confidence boundaries.",
      "Decoupled Microservice Architecture: High-speed Node.js API Gateway handling auth and caching, delegating heavy analytical math to FastAPI."
    ],
    architecture: {
      overview: "Microservices design with separated edge UI, caching API gateway, database cluster, and dedicated Python compute service.",
      steps: [
        { title: "Frontend Dashboard", desc: "Vite + React interface rendering responsive KPIs and Recharts time-series graphs." },
        { title: "Node API Gateway", desc: "Express server managing JWT auth, request rate limiting, and 30-second query caching." },
        { title: "MongoDB Atlas Cluster", desc: "Stores sanitized, structured multi-country job postings and skill taxonomies." },
        { title: "Python Analytics Service", desc: "FastAPI service executing aggregation pipelines and scikit-learn forecasting models." }
      ]
    },
    metrics: [
      { label: "Forecast Horizon", value: "14-Month Forecast (95% CI)" },
      { label: "Frontend Host", value: "Vercel (Live)" },
      { label: "Architecture", value: "Decoupled Microservices" }
    ],
    liveUrl: "https://future-skills-ai.vercel.app",
    githubUrl: "https://github.com/Krish-065/FutureSkills-AI"
  },
  {
    id: "harborline",
    title: "Harborline",
    tagline: "AI-Powered Maritime Port Operations Intelligence & Berthing Optimization",
    category: "Maritime Intelligence",
    role: "Core ML & Optimization Engineer (Team BugHunters)",
    date: "2026",
    featuredOrder: 4,
    summary: "Built for the IBM Bob AI Hackathon by team BugHunters. Combines live AIS vessel tracking with XGBoost congestion forecasting (24h, 48h, 72h) and Google OR-Tools CP-SAT for automated berth and crane scheduling across major Indian ports.",
    problem: "Port shift supervisors at major Indian ports (JNPA, Mundra, Chennai, Kandla, Vizag) react to bottleneck congestion only after lengthy vessel queues form, costing millions in demurrage.",
    solution: "Harborline streams real-time AIS vessel telemetry, predicts congestion pressure up to 72 hours ahead using XGBoost trained on IMF PortWatch data, and solves optimal berth-crane schedules using constraint programming.",
    myContribution: "Collaborated on the machine learning pipeline, constraint solver optimization logic with Google OR-Tools CP-SAT, and frontend dashboard components.",
    verifiedTech: ["Python", "FastAPI", "React", "Vite", "Google OR-Tools CP-SAT", "XGBoost", "Scikit-Learn", "AISStream.io", "IBM Bob MCP"],
    features: [
      "72-Hour Congestion Forecasting: XGBoost time-series model predicting port bottleneck risk at 24h, 48h, and 72h intervals.",
      "Live AIS Maritime Telemetry: Real-time vessel positions, headings, speeds, and anchoring statuses over 5 key Indian maritime hubs.",
      "Berth & Crane Constraint Solver: Google OR-Tools CP-SAT algorithm assigns incoming vessels to berths and cranes to minimize turnaround latency.",
      "Disruption What-If Simulator: Real-time impact simulation for crane mechanical failures, adverse weather, and delayed arrivals.",
      "IBM Bob MCP Integration: Natural-language operations assistant enabling shift supervisors to query port status and trigger re-optimization."
    ],
    architecture: {
      overview: "Real-time streaming pipeline feeding a predictive XGBoost layer and a mathematical CP-SAT constraint solver.",
      steps: [
        { title: "Live AIS Ingestion", desc: "Continuous WebSocket stream from AISStream.io bounded to Indian coastal port zones." },
        { title: "IMF PortWatch Model", desc: "Trained XGBoost model classifies congestion probability from historical port dwell patterns." },
        { title: "CP-SAT Constraint Solver", desc: "Google OR-Tools optimizes non-overlapping berth windows and crane allocation schedules." },
        { title: "Supervisor Ops Dashboard", desc: "Interactive operations view with disruption simulator and 72-hour planning exports." }
      ]
    },
    metrics: [
      { label: "Target Ports", value: "5 Major Indian Ports" },
      { label: "Prediction Window", value: "24h / 48h / 72h Ahead" },
      { label: "Hackathon", value: "IBM Bob AI Hackathon" }
    ],
    githubUrl: "https://github.com/Krish-065/-Harborline-bob-ai-hackathon-BugHunters"
  },
  {
    id: "airlens",
    title: "AirLens",
    tagline: "Hyper-Local Visual Air Quality Intelligence & Ground-Truth Verification",
    category: "Environmental AI",
    role: "Full-Stack Engineer & Interactive UI Architect",
    date: "2026",
    featuredOrder: 5,
    summary: "An environmental intelligence platform bridging abstract AQI numbers with visual reality. Combines real-time sensor data from the World Air Quality Index (WAQI) with geolocated, community-contributed visual pollution evidence.",
    problem: "Official sensor networks report raw numbers like 'AQI 160', but numbers alone fail to illustrate localized smoke, garbage burns, or industrial haze that sensors often miss.",
    solution: "A crowdsourced platform capturing geolocated visual evidence paired with official WAQI telemetry, presented through a responsive interface with interactive physics particles and frosted glass aesthetics.",
    myContribution: "Architected the full-stack system, implemented interactive canvas physics (smoke particle cursor tracking), developed the Express REST API with PostgreSQL/Prisma, and integrated WAQI telemetry.",
    verifiedTech: ["TypeScript", "React", "Vite", "Tailwind CSS", "Framer Motion", "GSAP", "Node.js", "Express", "PostgreSQL", "Prisma ORM", "WAQI API", "Cloudinary"],
    features: [
      "Visual Ground-Truth Capture: Users upload geolocated photographic evidence of ambient air quality, smoke, and smog.",
      "WAQI Telemetry Integration: Real-time air quality index data with spatial interpolation across uncovered regions.",
      "Interactive Smoke Particle Physics: Canvas-rendered dynamic particulate animation reacting to user cursor movement.",
      "Curated Community Feed: Moderation workflow and image storage powered by Cloudinary and PostgreSQL.",
      "Responsive Glassmorphic UI: Editorial dark-accented environmental aesthetics engineered with Tailwind CSS and Framer Motion."
    ],
    architecture: {
      overview: "Dual-source system merging physical sensor telemetry with crowdsourced media assets.",
      steps: [
        { title: "WAQI Telemetry Polling", desc: "Fetches station readings, PM2.5, PM10, and atmospheric parameters by lat/lng." },
        { title: "Media Upload & Geotagging", desc: "Cloudinary image optimization paired with PostgreSQL spatial coordinates." },
        { title: "Particle Simulation Canvas", desc: "Custom HTML5 Canvas renders particle turbulence mapped to regional AQI severity." },
        { title: "Community Verification Feed", desc: "Prisma-backed queries stream verified visual reports for municipal transparency." }
      ]
    },
    metrics: [
      { label: "Data Source", value: "WAQI Global Sensor Network" },
      { label: "Media Pipeline", value: "Cloudinary CDN" },
      { label: "Database ORM", value: "PostgreSQL & Prisma" }
    ],
    githubUrl: "https://github.com/Krish-065/Airlens"
  }
];

export const researchModels: ResearchModel[] = [
  {
    id: "stage-net",
    title: "STAGE-Net: Spatio-Temporal Attention Graph Engine",
    badge: "Regime-Adaptive Mixture-of-Experts",
    objective: "Investigate whether multi-relational market topology combined with regime-adaptive Mixture-of-Experts (MoE) can identify predictive structure across the NSE NIFTY 50 universe under varying market volatility regimes.",
    methodology: [
      "Dynamic Spatio-Temporal Graph Attention (GAT) to capture cross-asset correlation and sector-spillover dynamics across Banking, IT, Conglomerates, Metals, and Auto.",
      "Multi-Scale Feature Bank: Hurst Exponent (long-memory persistence), Bayesian Technical Indicators, and multi-scale momentum.",
      "Multi-Agent Sentiment Engine: Bull/Bear adversarial scoring modeled with asymmetric temporal decay curves.",
      "Stacking & Decision Layer: XGBoost stacked generalization with dynamic MoE gating that adapts model weights based on detected market volatility regimes.",
      "Realistic Backtest & Scalper Engine: Explicit modeling of execution slippage, bid-ask spread friction, and transaction commission costs."
    ],
    keyComponents: [
      "module_a_technical.py — Bayesian Technicals & Hurst Exponent",
      "module_gat.py — Spatio-Temporal Graph Attention Network",
      "module_c_sentiment.py — Adversarial Sentiment Decay Engine",
      "module_d_xgboost.py & fusion_layer.py — MoE Regime Stacking",
      "retail_scalper_engine.py — Slippage-adjusted backtest simulator"
    ],
    limitationsAndLearnings: [
      "Financial markets exhibit extreme non-stationarity: patterns that yield high in-sample correlation often decay rapidly in out-of-sample forward walks.",
      "Graph attention weights become unstable during sudden macroeconomic shocks (interest rate decisions, geopolitical surprises), requiring conservative risk throttling.",
      "Empirical takeaway: Complex GNNs without strict temporal regularization easily overfit noise. Regime-adaptive gating helps mitigate, but does not eliminate, out-of-sample performance degradation."
    ],
    repoUrl: "https://github.com/Krish-065/Experiment-for-stock-prediction"
  },
  {
    id: "model-2-multimodal",
    title: "Model 2: Multimodal Daily Temporal Market Pipeline",
    badge: "TCN + LSTM + GDELT Financial NLP (2019 – 2026)",
    objective: "Evaluate whether fusing multi-asset OHLCV data with global macro indices, commodities, FX, cryptocurrency indicators, and GDELT financial news sentiment can predict short-horizon equity direction without temporal leakage.",
    methodology: [
      "49-Stock Indian Equity Universe tracked across a 7-year daily timeframe (2019-01-01 to 2026-08-25).",
      "Macro Factor Ingestion: NIFTY 50, S&P 500, crude oil, gold, US Treasury yields, USD/INR FX, and major crypto assets.",
      "GDELT Financial News Engineering: Stock-level daily news volume, mean sentiment, positive/negative news count, rolling sentiment intensity, and predicted news impact scoring.",
      "Deep Temporal Architecture: Temporal Convolutional Network (TCN) paired with Bidirectional LSTM and multi-task prediction heads.",
      "Multi-Task Targets: Predicting 1-day, 3-day, 5-day continuous returns alongside 1-day and 5-day binary price direction.",
      "Strict Chronological Validation: Temporal splits (Train -> Validation -> Test) preserving absolute forward-time boundaries to eliminate lookahead bias."
    ],
    keyComponents: [
      "GDELT News Scraper & Aggregator Pipeline",
      "Temporal Convolutional Network (TCN) dilated residual blocks",
      "Multi-Task Head Loss Function (Combined MSE + Binary Cross-Entropy)",
      "Chronological Out-of-Sample Evaluation Engine"
    ],
    limitationsAndLearnings: [
      "News sentiment signals introduce significant noise: high volume of neutral or recycled PR wires dilutes genuine alpha signals.",
      "Short-horizon return prediction (1-day) suffers from near-martingale behavior in highly liquid large-cap stocks; 3-day and 5-day multi-task heads demonstrated more stable directional conviction.",
      "Strict chronological splits revealed that models without macroeconomic normalization struggled during transition quarters."
    ],
    repoUrl: "https://github.com/Krish-065/researchmodels"
  },
  {
    id: "model-1-baseline",
    title: "Model 1: Cross-Sectional Equity Ranking Baseline",
    badge: "LightGBM + Factor Models + Temporal Convolution",
    objective: "Establish a rigorous scientific baseline across classical factor models, gradient-boosted trees, and early deep temporal networks on a 49-stock Indian universe.",
    methodology: [
      "Comparative benchmarking across LightGBM, Fama-French inspired factor models, cross-sectional momentum, TCN, and Model Ensembles.",
      "Metrics evaluated: Sharpe Ratio, Compound Annual Growth Rate (CAGR), Maximum Drawdown, and Top-1 / Top-5 quintile selection performance."
    ],
    keyComponents: [
      "Cross-Sectional Stock Ranking Pipeline",
      "LightGBM Quant Hyperparameter Tuning",
      "Portfolio Quintile Performance Evaluator"
    ],
    limitationsAndLearnings: [
      "Gradient-boosted decision trees (LightGBM) consistently outperformed deep neural networks on tabular factor data when feature count was below 80.",
      "Provided the benchmark baseline that justified building the multimodal Model 2 and the graph-based STAGE-Net architectures."
    ],
    repoUrl: "https://github.com/Krish-065/researchmodels"
  }
];

export const secondaryProjects: Project[] = [
  {
    id: "nyaymitra",
    title: "NyayMitra Backend",
    tagline: "AI-Powered Legal Assistant for Indian Jurisprudence & Case Strategy Room",
    category: "AI & GovTech",
    role: "Backend Engineer",
    date: "2026",
    summary: "Backend service powering an Indian legal assistant featuring general conversational queries on Indian statutory law and a specialized Pro Case Strategy Room for structured argument preparation.",
    problem: "Legal research in India is hindered by dense, convoluted statutory texts and scattered case references that take paralegals hours to parse.",
    solution: "A Node.js/Express service providing structured prompts, context handling, and case strategy endpoints for legal inquiries.",
    myContribution: "Architected the Express server, built middleware for query handling, structured case modeling schemas, and integrated API endpoints.",
    verifiedTech: ["JavaScript", "Node.js", "Express", "REST APIs"],
    features: [
      "Statutory Legal Chatbot: Context-aware query processing for Indian legal codes.",
      "Pro Case Strategy Room: Endpoints supporting structured legal case analysis and defense strategy structuring.",
      "Clean Modular Structure: Express middleware, routes, and models ready for secure client consumption."
    ],
    githubUrl: "https://github.com/Krish-065/nyaymitra-backend"
  },
  {
    id: "sales-analyzer",
    title: "Sales Trend Analyzer",
    tagline: "Exploratory Data Analysis & Visual Business Trend Modeling",
    category: "Exploratory ML",
    role: "Data Analyst & Python Developer",
    date: "2025",
    summary: "An exploratory data analysis pipeline for Superstore retail data crunching statistical metrics, evaluating regional profitability, and visualizing customer purchasing trends.",
    problem: "Retail managers often lack automated visual summaries to identify which product sub-categories and regions drive profit versus which produce margin erosion.",
    solution: "A complete Jupyter Notebook pipeline that cleans raw sales records, calculates statistical aggregations, and outputs publication-ready trend graphics.",
    myContribution: "Wrote all data wrangling, outlier detection, statistical summarization, and matplotlib/seaborn visualization code.",
    verifiedTech: ["Python", "Jupyter Notebook", "Pandas", "Matplotlib", "Seaborn"],
    features: [
      "Monthly Sales Trend Analysis: Time-series curve mapping seasonality peaks across calendar years.",
      "Regional Profitability Breakdown: Cross-tabulated visual charts identifying geographic performance variance.",
      "Data Sanitation: Cleaning missing values, normalizing currency formats, and parsing date dimensions."
    ],
    githubUrl: "https://github.com/Krish-065/Sales-analyzer"
  },
  {
    id: "space-data-science",
    title: "Learning Data Science with Space",
    tagline: "Real-World Astronomical & SpaceX Telemetry Analytics",
    category: "Exploratory ML",
    role: "Data Science Student & Researcher",
    date: "2026",
    summary: "A sequence of applied data science notebooks analyzing SpaceX launch telemetry, orbital parameters, and satellite data using web scraping, SQL databases, and statistical visualizations.",
    problem: "Bridging textbook data science theory with messy, real-world aerospace datasets containing missing telemetry and mixed formats.",
    solution: "Constructed an end-to-end learning pipeline: from REST API ingestion and BeautifulSoup scraping to SQLite querying and classification.",
    myContribution: "Built the API scrapers, designed SQL analytical queries, and implemented exploratory visualizations for rocket stage reusability factors.",
    verifiedTech: ["Python", "Jupyter Notebook", "SQLite", "BeautifulSoup", "Pandas", "SpaceX API"],
    features: [
      "SpaceX API Data Collection: Automated extraction of launch payloads, core reuse counts, and landing pad coordinates.",
      "SQLite Analytical Queries: SQL-based aggregations identifying landing success rates by launch site.",
      "Web Scraping Telemetry: Parsing launch manifest tables from unstructured HTML web pages."
    ],
    githubUrl: "https://github.com/Krish-065/Learning-Data-Science-with-Space"
  },
  {
    id: "ml-learning-projects",
    title: "ML Projects Learning Laboratory",
    tagline: "Foundational Machine Learning, NLP & Hyperparameter Tuning Experiments",
    category: "Exploratory ML",
    role: "Practitioner & Author",
    date: "2026",
    summary: "A collection of machine learning mini-projects covering exploratory analysis, regression, classification, GridSearchCV hyperparameter tuning, and NLP emotion detection.",
    problem: "Establishing solid practical mastery of classical machine learning algorithms from first principles through varied empirical datasets.",
    solution: "Authored 5 modular project notebooks testing regression (Ford car prices, insurance costs), classification (Titanic survival, heart disease), and NLP emotion categorization.",
    myContribution: "Authored all notebooks, performed feature engineering, tuned hyperparameters using cross-validation, and documented empirical findings.",
    verifiedTech: ["Python", "Jupyter Notebook", "Scikit-Learn", "NLTK", "Pandas", "NumPy"],
    features: [
      "NLP Emotion Classification: Text preprocessing, tokenization, stopword removal, and sentiment vectorization.",
      "Hyperparameter Optimization: Systematic hyperparameter searches using GridSearchCV with 5-fold cross-validation.",
      "Model Comparison Suite: Benchmarked Logistic Regression, KNN, Naive Bayes, and Random Forests across identical datasets."
    ],
    githubUrl: "https://github.com/Krish-065/ML-projects"
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    iconName: "Code2",
    description: "Core languages used across backend systems, quant research pipelines, and web applications.",
    skills: [
      { name: "Python", context: "Primary language for ML, research models, and FastAPI services" },
      { name: "TypeScript", context: "Production type-safe frontend and full-stack development" },
      { name: "JavaScript (ES6+)", context: "Node.js backends and browser scripting" },
      { name: "C++", context: "Data structures, algorithms, and performance coursework" },
      { name: "Java", context: "Object-oriented software engineering coursework" },
      { name: "SQL", context: "Relational database querying and PostGIS spatial analysis" }
    ]
  },
  {
    category: "AI, Machine Learning & Research",
    iconName: "BrainCircuit",
    description: "Deep learning frameworks, graph networks, classical ML, and quantitative modeling.",
    skills: [
      { name: "PyTorch & PyTorch Geometric", context: "GAT, GNN, and heterogeneous graph neural models" },
      { name: "Scikit-Learn", context: "Supervised pipelines, cross-validation, regression, classification" },
      { name: "XGBoost & LightGBM", context: "Gradient boosting for tabular time-series & port congestion" },
      { name: "TCN (Temporal Convolutional Networks)", context: "Temporal market modeling without leakage" },
      { name: "GNN & Spatio-Temporal Attention", context: "Cross-asset correlation and sector spillovers (STAGE-Net)" },
      { name: "LLM, RAG & FinNLP", context: "GDELT news sentiment extraction and MCP assistants" },
      { name: "Google OR-Tools CP-SAT", context: "Constraint programming for berth-crane optimization" }
    ]
  },
  {
    category: "Data Science & Quantitative Analytics",
    iconName: "BarChart3",
    description: "Data manipulation, statistical analysis, financial engineering, and visualization.",
    skills: [
      { name: "Pandas & NumPy", context: "High-dimensional financial and tabular data wrangling" },
      { name: "Matplotlib & Seaborn", context: "Publication-ready statistical research figures" },
      { name: "Recharts & Chart.js", context: "Interactive real-time frontend charts" },
      { name: "Time-Series Forecasting", context: "Linear regression with confidence intervals, ARIMA/GARCH basics" },
      { name: "Financial Backtesting", context: "Sharpe ratio, drawdown modeling, slippage simulation" },
      { name: "GDELT News Pipeline", context: "Daily macro and equity sentiment engineering" }
    ]
  },
  {
    category: "Frontend Development",
    iconName: "Layout",
    description: "Modern, responsive, accessible web engineering and interactive user experiences.",
    skills: [
      { name: "React (v18+)", context: "Component architecture, hooks, custom state management" },
      { name: "Vite", context: "Lightning-fast build tooling and modern frontend bundling" },
      { name: "Tailwind CSS", context: "Design systems, responsive editorial layouts, custom utility layers" },
      { name: "Framer Motion", context: "Choreographed page transitions, gesture interactions, staggered reveals" },
      { name: "HTML5 Canvas 2D", context: "Interactive mathematical graphs and physics particle engines" },
      { name: "Responsive UI/UX", context: "Mobile-first, accessible, semantic HTML architecture" }
    ]
  },
  {
    category: "Backend Engineering & APIs",
    iconName: "Server",
    description: "Scalable REST APIs, real-time streaming, and microservices architecture.",
    skills: [
      { name: "FastAPI (Python)", context: "Asynchronous high-throughput ML analytics services" },
      { name: "Node.js & Express", context: "API gateways, rate limiting, JWT authentication" },
      { name: "WebSockets", context: "Real-time market tick streaming and AIS telemetry" },
      { name: "RESTful API Architecture", context: "Clean decoupled microservices contracts" },
      { name: "Authentication & Security", context: "JWT tokens, Bcrypt hashing, CORS, route protection" },
      { name: "Model Context Protocol (MCP)", context: "LLM tooling integration (IBM Bob)" }
    ]
  },
  {
    category: "Databases, GIS & Infrastructure",
    iconName: "Database",
    description: "Data persistence, spatial extensions, cloud clusters, and containerization.",
    skills: [
      { name: "PostgreSQL & PostGIS 16", context: "Spatial cadastral polygon storage and spatial indexing" },
      { name: "MongoDB Atlas", context: "Document database for job market analytics" },
      { name: "Prisma ORM", context: "Type-safe database querying and schema migrations" },
      { name: "SQLite", context: "Embedded databases and lightweight analytical pipelines" },
      { name: "Docker & Containerization", context: "Multi-service container setups and deployment recipes" },
      { name: "Git & GitHub", context: "Branching workflows, version control, open-source repositories" },
      { name: "Vercel & Render", context: "CI/CD deployment for full-stack web and backend services" }
    ]
  }
];

export const experienceItems: ExperienceItem[] = [
  {
    id: "sports-coordinator",
    role: "University Sports Coordinator & National Athlete",
    organization: "Charusat University",
    period: "2025 – Present",
    type: "Leadership & Sports",
    badge: "University Leadership & National Selection",
    highlights: [
      "Selected consistently for both consecutive years for the All India University Team (National Level Competition) representing Charusat University in Basketball.",
      "Serve as official University Sports Coordinator, organizing inter-college athletic tournaments, managing scheduling logistics, and fostering competitive athletic discipline across student cohorts."
    ]
  },
  {
    id: "hackathon-bughunters",
    role: "Core ML & Optimization Engineer — Team BugHunters",
    organization: "IBM Bob AI Hackathon",
    period: "2026",
    type: "Hackathon Team",
    badge: "Maritime Logistics AI",
    highlights: [
      "Co-engineered Harborline with teammates Aubaid Ahmed Saiyed, Abdulkadir Nursumar, and Ansh Patel.",
      "Integrated XGBoost 72-hour port congestion forecasting with Google OR-Tools CP-SAT berth-crane constraint optimization for 5 major Indian commercial ports.",
      "Connected live AIS vessel feeds via AISStream.io and built natural-language operational planning interfaces via IBM Bob MCP."
    ]
  },
  {
    id: "sih-bhoomisetu",
    role: "Lead Full-Stack & GIS Engineer — BhoomiSetu",
    organization: "Smart India Hackathon 2026 (Problem Statement #18)",
    period: "2026",
    type: "Hackathon Team",
    badge: "GovTech & Geospatial Validation",
    highlights: [
      "Engineered an AI-driven land-record digitization pipeline converting scanned Indic-language revenue records into validated digital profiles.",
      "Matched verified survey numbers against PostGIS cadastral polygon layers to render parcel boundaries on Leaflet with 14-digit ULPIN tracking.",
      "Built a split-screen officer audit interface ensuring human-in-the-loop validation without synthetic coordinate fabrication."
    ]
  },
  {
    id: "hackathon-lead",
    role: "Hackathon Team Lead — Hackathon Tic Tac Toe",
    organization: "Charusat University",
    period: "2024",
    type: "Leadership & Sports",
    badge: "First Year Leadership",
    highlights: [
      "Led a 4-member team in first offline 1st-year collegiate hackathon, successfully scoping, architecting, and completing the problem statement within competitive time constraints."
    ]
  },
  {
    id: "future-industry-role",
    role: "Upcoming AI/ML Engineering & Software Internship",
    organization: "Industry / Tech Startup [Placeholder for upcoming placement]",
    period: "Summer 2026 / Forward",
    type: "Professional Role Placeholder",
    isPlaceholder: true,
    badge: "Available for Hire",
    highlights: [
      "Currently seeking high-impact summer/semester engineering internships where I can contribute deep learning pipelines, scalable backend microservices, or quant software.",
      "Ready to deploy production React/TypeScript frontends, FastAPI/Node backends, and PyTorch ML models to solve real commercial challenges."
    ]
  }
];

export const certificationItems: CertificationItem[] = [
  {
    id: "hkust-software-eng",
    title: "Software Engineering Specialization",
    issuer: "The Hong Kong University of Science and Technology (HKUST)",
    platform: "Coursera",
    verified: true,
    skillsLearned: [
      "Software Development Lifecycle (SDLC)",
      "Agile Methodologies & Scrum",
      "Software Architecture & Design Patterns",
      "Testing, Quality Assurance & CI/CD"
    ]
  },
  {
    id: "vivibha-research",
    title: "National Research Paper Writing Presentation",
    issuer: "VIVIBHA (National Research Platform)",
    platform: "National Academic Forum",
    verified: true,
    skillsLearned: [
      "Scientific Literature Review",
      "Empirical Methodology Formulation",
      "Quantitative Data Presentation",
      "Peer-Reviewed Academic Communication"
    ]
  },
  {
    id: "charusat-coursera-placeholder-1",
    title: "Coursera University Learning Track Certificate",
    issuer: "Charusat University / Coursera Partner Institution",
    platform: "Coursera (Charusat Organization)",
    verified: false,
    isPlaceholder: true,
    skillsLearned: [
      "Specialized Coursework Certificate",
      "Editable Placeholder — Input exact certificate title & verification link",
      "To update: Edit src/data/portfolioData.ts"
    ]
  }
];

export const educationData = {
  institution: "Charusat University (DEPSTAR - Devang Patel Institute of Advance Technology and Research)",
  degree: "Bachelor of Technology (B.Tech) in Information Technology",
  location: "Anand, Gujarat, India",
  duration: "2024 – 2028 (Expected)",
  cgpa: "7.50 / 10.0 (up to 4th Semester)",
  semesterHistory: [
    { sem: "Semester 1", sgpa: "8.11" },
    { sem: "Semester 2", sgpa: "7.25" },
    { sem: "Semester 3", sgpa: "7.27" },
    { sem: "Semester 4", sgpa: "7.36" }
  ],
  coreSubjects: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java, C++, Python)",
    "Relational Database Management Systems (SQL)",
    "Document Databases (MongoDB)",
    "Web Technologies (HTML5, CSS3, JavaScript ES6+)",
    "Data Engineering & Practical Labs"
  ]
};

