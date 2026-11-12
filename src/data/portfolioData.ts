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
  avatarPath: "/krish-shah.jpg",
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
    id: "cafecanopy",
    title: "CafeCanopy",
    tagline: "Modern Restaurant POS & Real-Time Kitchen Display System (Odoo x Parul Finalist)",
    category: "Flagship Platform",
    role: "Full-Stack Architect & Core Developer (Finalist Team)",
    date: "2026",
    featuredOrder: 4,
    summary: "Built for the Odoo x Parul Hackathon final round after being selected as a virtual round finalist prototype. A comprehensive restaurant management and Point-of-Sale (POS) platform featuring a dual-panel checkout register, real-time WebSocket kitchen display dispatching (KDS), dynamic QR-based UPI payment processing, and multi-floor table seating.",
    problem: "High-volume cafés and restaurants struggle with disjointed checkout systems, manual paper kitchen slips, order transmission delays, and cumbersome split payments.",
    solution: "CafeCanopy delivers sub-second order dispatching to kitchen staff via WebSockets (Socket.io), automated dynamic QR codes scaling to exact checkout bill amounts for instant UPI payment, and an interactive multi-floor table seating visualizer.",
    myContribution: "Co-architected the full-stack system, engineered the real-time WebSocket event layer for instant POS-to-kitchen ticket synchronization, built the dynamic UPI QR engine, and developed PostgreSQL schemas.",
    verifiedTech: ["React", "TypeScript", "Vite", "Tailwind CSS", "Recharts", "Node.js", "Express", "Socket.io", "PostgreSQL", "Cloudinary"],
    features: [
      "Real-time Kitchen Display System (KDS): Sub-second order broadcast via WebSockets from cashier registers directly to kitchen chef screens.",
      "Dynamic QR-Based UPI Payments: Automatically generates precise checkout bill amount QR codes with merchant UPI identifiers.",
      "Unified POS Checkout Terminal: Category-based product catalog, instant search, dynamic cart modifications, and live table assignment.",
      "Multi-Floor Space Management: Interactive table layout and occupancy tracker for Main Floor and Rooftop Canopy dining spaces.",
      "Role-Based Access Control (RBAC): Dedicated, secure interfaces for Admin, Cashier, Chef, and Customer views.",
      "Hackathon Finalist Prototype: Engineered and showcased as the finalist project at the Odoo x Parul Hackathon."
    ],
    architecture: {
      overview: "Real-time bidirectional event architecture pairing front-of-house POS registers with kitchen screens over WebSockets.",
      steps: [
        { title: "POS Checkout Terminal", desc: "Cashier assigns table, configures order items, and initiates payment selection." },
        { title: "WebSocket Kitchen Sync", desc: "Socket.io broadcasts order payload in real time to the Kitchen Display System." },
        { title: "Dynamic UPI QR Engine", desc: "Renders exact bill payment QR code for instant UPI settlement." },
        { title: "PostgreSQL Ledger", desc: "Records transaction receipts, updates table status, and feeds sales analytics." }
      ]
    },
    metrics: [
      { label: "Hackathon Track", value: "Odoo x Parul Finalist" },
      { label: "Kitchen Sync", value: "Real-Time WebSockets" },
      { label: "Payment Method", value: "Dynamic UPI QR Engine" }
    ],
    githubUrl: "https://github.com/Krish-065/CafeCanopy"
  },
  {
    id: "ecourt",
    title: "eCourt",
    tagline: "AI Legal Operating System for India — Live Docket Tracking & Statutory RAG",
    category: "AI & GovTech",
    role: "AI Microservices & Full-Stack Architect",
    date: "2026",
    featuredOrder: 5,
    summary: "A production-grade AI Legal Operating System engineered for Indian jurisprudence. Unites automated 16-digit CNR case docket tracking across 3,000+ Indian courts, zero-hallucination statutory RAG grounded in the Constitution, BNS 2023, BNSS 2023, BSA 2023, and cryptographic client evidence vaults.",
    problem: "Litigants and advocates struggle with fragmented eCourts portals, delayed cause lists, dense legal language, and the major legislative transition from IPC/CrPC to the Bharatiya Nyaya Sanhita (BNS 2023).",
    solution: "A unified judicial intelligence suite offering automated CNR docket polling, statutory RAG with IPC/BNS concordance cross-mapping, role-specialized AI legal agents, and tamper-evident SHA-256 evidence logs.",
    myContribution: "Engineered the FastAPI Python microservice, implemented pgvector statutory embeddings for BNS/BNSS/BSA concordance mapping, and developed the Next.js/Tailwind client interfaces.",
    verifiedTech: ["Next.js 14", "TypeScript", "FastAPI (Python 3.11)", "Node.js", "PostgreSQL 16", "pgvector", "AES-256-GCM", "Tailwind CSS"],
    features: [
      "Live eCourts Docket & CNR Tracking: Automated 16-digit CNR case lookup across 3,000+ District and High Courts in India.",
      "Anti-Hallucination Statutory RAG: Vector search tethered strictly to active Bare Acts and reported Supreme Court precedents.",
      "New Criminal Laws 2023 Cross-Mapping: Complete concordance cross-mapping between old IPC/CrPC provisions and new BNS, BNSS, and BSA statutes.",
      "Role-Specialized Legal Agents: Dedicated workflows for Citizen Legal Advisory, Advocate Co-Counsel petition drafting, and Corporate Compliance.",
      "Cryptographic Evidence Vault: Chronological tamper-evident incident log secured with SHA-256 hashes and AES-256-GCM encryption."
    ],
    architecture: {
      overview: "Decoupled microservice architecture with Next.js frontend, Node.js docket tracking gateway, and FastAPI vector search service.",
      steps: [
        { title: "16-Digit CNR Scraper", desc: "Queries national court portals to fetch cause lists, bench details, and interim orders." },
        { title: "Statutory RAG (pgvector)", desc: "Vector similarity search across indexed Constitution and 2023 criminal law codes." },
        { title: "Legal Prompt Gating", desc: "Strict anti-hallucination guardrails citing specific statutory clauses and ratio decidendi." },
        { title: "Tamper-Evident Ledger", desc: "Stores evidentiary documentation with cryptographic SHA-256 verification timestamps." }
      ]
    },
    metrics: [
      { label: "Court Coverage", value: "3,000+ Indian Courts" },
      { label: "Statutory Scope", value: "BNS, BNSS, BSA & Constitution" },
      { label: "Vector Search", value: "PostgreSQL + pgvector" }
    ],
    githubUrl: "https://github.com/Krish-065/Ecourt"
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
      { name: "LLM, RAG & Legal NLP", context: "Statutory embeddings, pgvector, and legal RAG reasoning" },
      { name: "Time-Series ML", context: "Predictive volume modeling with 95% confidence intervals" }
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
      { name: "Next.js (App Router)", context: "Server components, static & dynamic SSR architectures" },
      { name: "Vite", context: "Lightning-fast build tooling and modern frontend bundling" },
      { name: "Tailwind CSS", context: "Design systems, responsive editorial layouts, custom utility layers" },
      { name: "Framer Motion", context: "Choreographed page transitions, gesture interactions, staggered reveals" },
      { name: "HTML5 Canvas 2D", context: "Interactive mathematical graphs and physics particle engines" }
    ]
  },
  {
    category: "Backend Engineering & APIs",
    iconName: "Server",
    description: "Scalable REST APIs, real-time streaming, and microservices architecture.",
    skills: [
      { name: "FastAPI (Python)", context: "Asynchronous high-throughput ML analytics services" },
      { name: "Node.js & Express", context: "API gateways, rate limiting, JWT authentication" },
      { name: "WebSockets & Socket.io", context: "Real-time kitchen POS dispatching & market streaming" },
      { name: "RESTful API Architecture", context: "Clean decoupled microservices contracts" },
      { name: "Authentication & Security", context: "JWT tokens, Bcrypt hashing, AES-256-GCM encryption" }
    ]
  },
  {
    category: "Databases, GIS & Infrastructure",
    iconName: "Database",
    description: "Data persistence, spatial extensions, cloud clusters, and containerization.",
    skills: [
      { name: "PostgreSQL & pgvector", context: "Vector embeddings, legal RAG search, and spatial PostGIS" },
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
    id: "bluestock-fintech",
    role: "Software Development Engineer (SDE) Intern",
    organization: "Bluestock Fintech (bluestock.in)",
    period: "2026 – Present",
    type: "Internship",
    isCurrent: true,
    companyUrl: "https://bluestock.in",
    badge: "FinTech & Stock Analytics",
    highlights: [
      "Engineering core features for Bluestock Fintech’s real-time stock analytics, IPO tracking, and paper trading platforms.",
      "Developing high-performance financial chart modules and optimizing RESTful API datafeeds for active retail market participants.",
      "Collaborating directly with fintech engineering leads to implement clean, scalable TypeScript components."
    ]
  },
  {
    id: "youngbrainz-infotech",
    role: "Software Engineering Intern",
    organization: "YoungBrainz Infotech",
    period: "2025 – 2026",
    type: "Internship",
    isCurrent: false,
    companyUrl: "https://youngbrainzinfotech.com",
    badge: "Full-Stack Web Engineering",
    highlights: [
      "Engineered production full-stack web applications, built modular Express/Node.js API endpoints, and integrated relational database schemas.",
      "Collaborated across agile sprint cycles, participated in code reviews, and implemented responsive frontend interfaces with modern CSS/JavaScript.",
      "Optimized backend response times and integrated third-party REST services for commercial client deployments."
    ]
  },
  {
    id: "odoo-parul-finalist",
    role: "Full-Stack Architect & Finalist Team Member",
    organization: "Odoo x Parul Hackathon (Final Round)",
    period: "2026",
    type: "Hackathon Team",
    badge: "Hackathon Finalist",
    highlights: [
      "Selected as a finalist prototype in the virtual round and advanced to the final on-site hackathon round.",
      "Engineered CafeCanopy in the final round: a complete real-time restaurant POS and Kitchen Display System (KDS) powered by WebSockets (Socket.io), PostgreSQL, and dynamic UPI QR bill calculation."
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
    id: "hackathon-lead",
    role: "Hackathon Team Lead — Hackathon Tic Tac Toe",
    organization: "Charusat University",
    period: "2024",
    type: "Leadership & Sports",
    badge: "First Year Leadership",
    highlights: [
      "Led a 4-member team in first offline 1st-year collegiate hackathon, successfully scoping, architecting, and completing the problem statement within competitive time constraints."
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

/**
 * Dynamic helper to check internship status:
 * Automatically marks an internship as active/pursuing if isCurrent is true and today < endDate.
 * When endDate is reached or passed, it automatically transitions to "Completed Internship".
 */
export function getExperienceStatus(item: ExperienceItem): { label: string; isActive: boolean } {
  if (item.type !== 'Internship') {
    return { label: item.badge || item.period, isActive: false };
  }

  if (item.isCurrent) {
    if (item.endDate) {
      const end = new Date(item.endDate);
      const now = new Date();
      if (now > end) {
        return { label: 'Completed Internship', isActive: false };
      }
    }
    return { label: 'Active / Currently Pursuing', isActive: true };
  }

  return { label: 'Completed Internship', isActive: false };
}
