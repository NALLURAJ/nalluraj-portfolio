// Everything the site says lives here, so updating the portfolio means
// editing this file and nothing else.

export const profile = {
  name: "Nalluraj Babu",
  role: "Data Analyst · Data Engineer",
  location: "Victoria, BC",
  status: "Open to co-op opportunities",
  email: "nallurajbabu1924@gmail.com",
  github: "https://github.com/NALLURAJ",
  linkedin: "https://www.linkedin.com/in/247221244/",
  intro:
    "M.Eng candidate in Applied Data Science at the University of Victoria, with industry experience building ETL pipelines at India's National Informatics Centre. I design data warehouses, run rigorous statistical analysis, and build the services and dashboards that put the results in front of decision makers.",
};

export const about = [
  "I'm a data professional with a computer science background and a focus on analytics engineering. At the National Informatics Centre, Ministry of Home Affairs, I built features, automated tests and ETL pipelines for a public-sector platform serving more than 10,000 users.",
  "I'm now completing an M.Eng in Applied Data Science at the University of Victoria. My work spans the full analytics lifecycle: modelling source data into tested warehouses, answering business questions with sound statistical methods, and delivering the results through APIs, dashboards and LLM-based tools.",
];

export const focus = [
  {
    title: "Analytics engineering",
    text: "Modelling raw source data into tested, documented warehouses with dbt and SQL, so every metric has one definition.",
  },
  {
    title: "Statistics & forecasting",
    text: "Hypothesis tests, regression and time-series forecasts, reported with confidence intervals, baselines and limitations.",
  },
  {
    title: "Applied ML & LLMs",
    text: "Cost-aware models and LLM tools that are evaluated against known answers before anyone relies on them.",
  },
];

export const education = [
  {
    school: "University of Victoria",
    degree: "M.Eng, Applied Data Science (Graduate Co-op)",
    when: "2026 – present",
    note: "Coursework: Optimization for Machine Learning (A+), Algorithms and Data Models (A+), Data Mining, Pattern Recognition",
  },
  {
    school: "Karunya Institute of Technology and Sciences",
    degree: "B.Tech, Computer Science and Engineering",
    when: "2021 – 2025",
    note: "Coimbatore, India",
  },
];

// category drives the filter tabs on the Work section.
// problem / approach / result are what the expanded view shows.
export const projects = [
  {
    title: "ShipSignal",
    subtitle: "E-commerce analytics, forecasting & LLM assistant",
    category: "Analytics",
    team: "Solo",
    year: "2026",
    problem:
      "Does late delivery cost a marketplace its repeat customers, and can a business user get answers from the warehouse without writing SQL?",
    approach:
      "Modelled ~100k Olist orders into a PostgreSQL + dbt star schema with 46 data tests. Answered four business questions with proportion tests, logistic and OLS regression, and a SARIMA forecast against a seasonal-naive baseline. Built a natural-language-to-SQL assistant with read-only guardrails, served through FastAPI and Streamlit.",
    results: [
      "Late first order: 1.22% reorder vs 1.80% on time (95% CI −0.92 to −0.24 pp, p = 0.004)",
      "Each day late costs ~0.06 review stars; ~80% of orders 8+ days late get 1–2 stars",
      "Assistant accuracy 27/40 → 35/40 across four prompt versions on a known-answer benchmark",
    ],
    tags: ["PostgreSQL", "dbt", "statsmodels", "FastAPI", "Streamlit", "Ollama", "pytest", "GitHub Actions"],
    link: "https://github.com/NALLURAJ/shipsignal",
  },
  {
    title: "ThresholdX",
    subtitle: "Cost-aware ensemble optimisation for churn",
    category: "ML & Research",
    team: "Team of 3 · ECE 569A",
    year: "2026",
    problem:
      "In churn, missing a leaving customer costs far more than a wasted retention offer, so optimising for accuracy optimises the wrong thing.",
    approach:
      "Replaced a stacking ensemble's meta-classifier with simulated annealing that searches model weights and the decision threshold together to minimise business cost, with a Bayesian network for the least certain cases. Then swapped the flat cost for a dollar-based, per-customer value rule.",
    results: [
      "Searching the threshold cut cost from 668 to 635; the best cutoff sits near 0.32, not 0.5",
      "Reported honestly that a single tuned logistic regression (594) beat the full ensemble",
      "Profit-based decision rule: +$12,926 net profit over 5 splits (95% CI $9,254 to $16,597)",
    ],
    tags: ["Python", "scikit-learn", "Simulated annealing", "Bayesian networks", "Cost-sensitive learning"],
    link: "https://github.com/NALLURAJ/ThresholdX",
  },
  {
    title: "FreshRoute",
    subtitle: "Change-data-capture lakehouse",
    category: "Data Engineering",
    problem:
      "Build analytics for a grocery marketplace without ever querying the application database.",
    approach:
      "Streamed row-level changes from Postgres's write-ahead log with Debezium and Kafka, processed them with Spark into Apache Iceberg, modelled with dbt, queried through Trino and orchestrated with Dagster.",
    results: [
      "Rebuilds the full order state machine from a table that only stores the current status",
      "Measures how much a day's revenue moves after close as late refunds arrive",
    ],
    tags: ["Debezium", "Kafka", "Spark", "Iceberg", "dbt", "Trino", "Dagster", "Docker"],
    link: "https://github.com/NALLURAJ/freshroute-cdc-lakehouse",
  },
  {
    title: "Job Market Intelligence",
    subtitle: "Batch pipeline for tech hiring data",
    category: "Data Engineering",
    problem: "Which skills and salaries are employers across North America actually asking for?",
    approach:
      "Ingested job postings into a MySQL OLTP layer, staged them in S3, loaded Snowflake with dbt models, scheduled with Airflow and surfaced the results in Streamlit.",
    results: [
      "Extracts 50+ technical and soft skills from free-text descriptions",
      "Duplicate prevention on every warehouse load",
    ],
    tags: ["Python", "MySQL", "AWS S3", "Snowflake", "dbt", "Airflow", "Streamlit"],
    link: "https://github.com/NALLURAJ/job-market-pipeline",
  },
  {
    title: "SkillBridge",
    subtitle: "NLP skill extraction",
    category: "ML & Research",
    team: "Team of 5 · UVic Data Mining",
    year: "2026",
    problem:
      "Match Canadian job postings to a national skills taxonomy so labour-market data can be joined across sources.",
    approach:
      "Built the skill extractor over 53,906 postings and 2,364 skills, comparing keyword, TF-IDF and Sentence-BERT models, and hand-labelled 100 postings as a gold standard.",
    results: [
      "Showed the training labels matched human judgement at only F1 0.33, which capped every model",
    ],
    tags: ["Python", "NLP", "Sentence-BERT", "TF-IDF", "Evaluation design"],
    link: "https://github.com/NALLURAJ/-NLP-skill-extraction-pipelin",
  },
  {
    title: "Airtime Fairness in Wi-Fi 6",
    subtitle: "802.11ax OFDMA scheduling",
    category: "ML & Research",
    team: "Team of 2 · UVic Wireless Networks",
    year: "2026",
    problem: "Does Wi-Fi 6's OFDMA still suffer the classic 802.11b performance anomaly, where slow clients drag everyone down?",
    approach: "Reproduced the anomaly in ns-3, measured default 802.11ax OFDMA, then implemented and tested an airtime-deficit scheduler.",
    results: [
      "Default OFDMA still inherits the anomaly (airtime Jain index 0.49)",
      "Airtime-deficit scheduler reached 0.86 and raised throughput 77%",
    ],
    tags: ["ns-3", "Python", "Network simulation"],
    link: null,
  },
  {
    title: "Zero Trust IDPS for IoT",
    subtitle: "IEEE conference paper, 2025",
    category: "ML & Research",
    year: "2025",
    problem: "Intrusion detection and prevention that fits resource-constrained IoT networks.",
    approach:
      "Designed a framework around continuous verification, least privilege and micro-segmentation at device and network level, evaluated on the TON_IoT and BoT-IoT datasets.",
    results: ["Presented and published at an IEEE international conference"],
    tags: ["Security", "IoT", "Zero Trust", "IEEE"],
    link: "https://github.com/NALLURAJ/IoT-ZeroTrust-Framework",
    paper: "https://ieeexplore.ieee.org/document/11013281/",
  },
  {
    title: "MNIST with Gabor, PCA & Kernel Ridge",
    subtitle: "Optimization for Machine Learning",
    category: "ML & Research",
    problem: "Beat the course's HOG + softmax baseline on handwritten digit classification.",
    approach:
      "40-filter Gabor feature bank, PCA to 200 components, then kernel ridge regression, with training statistics applied to the test set so nothing leaks.",
    results: ["99.09% test accuracy on 10,000 images, against a 98.04% baseline"],
    tags: ["MATLAB", "Gabor filters", "PCA / SVD", "Kernel methods"],
    link: "https://github.com/NALLURAJ/mnist-gabor-pca-krr",
  },
  {
    title: "MediPredict",
    subtitle: "Health risk prediction app",
    category: "ML & Research",
    problem: "Give non-technical users a quick risk check for common conditions.",
    approach:
      "Trained one classifier per condition on public healthcare datasets and served them in a single Streamlit interface.",
    results: ["Predicts diabetes, heart disease and Parkinson's risk from user-entered indicators"],
    tags: ["Python", "scikit-learn", "Streamlit"],
    link: "https://github.com/NALLURAJ/MediPredict",
  },
];

export const experience = [
  {
    role: "Teaching Assistant",
    org: "ECE 355: Microprocessor-Based Systems, University of Victoria",
    where: "Victoria, BC",
    when: "Sep 2026 – Dec 2026",
    current: true,
    points: [],
  },
  {
    role: "Teaching Assistant",
    org: "ECE 216: Electricity and Magnetism, University of Victoria",
    where: "Victoria, BC",
    when: "May 2026 – Aug 2026",
    points: [],
  },
  {
    role: "Software Developer Intern",
    org: "National Informatics Centre, Ministry of Home Affairs",
    where: "New Delhi, India",
    when: "Dec 2024 – Jun 2025",
    points: [
      "Built features in Java and Spring Boot for a public-sector platform used by 10,000+ people, in a team of five",
      "Wrote the unit and integration tests that took the platform to 95% coverage before release",
      "Built ETL pipelines for real-time data processing and maintained SQL Server schemas",
      "Code reviews, documentation and technical specs in Agile/Scrum sprints",
    ],
  },
  {
    role: "Volunteer",
    org: "Cook Street Community Centre",
    where: "Victoria, BC",
    when: "Apr 2026 – Sep 2026",
    points: ["Helped run community programs and events, and worked in the kitchen"],
  },
];

export const skills = [
  {
    group: "Languages",
    blurb: "Python and SQL every day; the rest when the job calls for it.",
    items: ["Python", "SQL", "Java", "R", "MATLAB", "Bash", "JavaScript"],
  },
  {
    group: "Analytics & statistics",
    blurb: "Answering business questions with tests, models and forecasts that come with confidence intervals.",
    items: ["Hypothesis testing", "Regression", "SARIMA forecasting", "Cohort analysis", "Power BI", "Tableau", "Streamlit", "Plotly"],
  },
  {
    group: "Data engineering",
    blurb: "Batch and streaming pipelines, modelled and tested before anything reaches a dashboard.",
    items: ["dbt", "ETL / ELT", "Star schema & SCD2", "Data quality tests", "Airflow", "Dagster", "Kafka", "Spark"],
  },
  {
    group: "Databases & cloud",
    blurb: "Relational stores, cloud warehouses and lakehouse tables, all running in containers.",
    items: ["PostgreSQL", "MySQL", "SQL Server", "Snowflake", "Apache Iceberg", "AWS S3", "Docker"],
  },
  {
    group: "AI & ML",
    blurb: "Classical ML and LLM tools, evaluated against known answers before they're trusted.",
    items: ["LLM prompting", "RAG", "LLM evaluation", "Guardrails", "scikit-learn", "Sentence-BERT", "pandas"],
  },
  {
    group: "Engineering practice",
    blurb: "Tested, reviewed and reproducible code shipped through CI.",
    items: ["FastAPI", "pytest", "GitHub Actions", "Git", "Code review", "Agile / Scrum"],
  },
];

export const credentials = [
  {
    title: "AWS Certified Cloud Practitioner",
    by: "Amazon Web Services · 2026",
    link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/212c4daddbfa45178a127897ed34afc5",
  },
  {
    title: "IEEE international conference paper",
    by: "Zero Trust intrusion detection for IoT · 2025",
    link: "https://ieeexplore.ieee.org/document/11013281/",
  },
  {
    title: "Data Science Foundations",
    by: "IBM · 2024",
    link: null,
  },
];
