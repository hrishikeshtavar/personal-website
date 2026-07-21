/**
 * Project content for the Projects section (components/sections/projects-section.tsx).
 *
 * This is a curated subset of hrishikeshtavar's GitHub repos, not the full
 * list — coursework placeholders, forks, and superseded repos are left out.
 * Keeping content here (rather than inline in JSX) means adding or editing
 * a project is a data change, not a markup change.
 */
export type Project = {
  slug: string;
  title: string;
  badge: string;
  description: string;
  stack: string[];
  highlight?: string;
  category: "Product" | "AI & Machine Learning" | "Data & Statistics";
  githubUrl: string;
  liveUrl?: string;
};

// Featured: flagship, real-world-deployed or headline-quality work.
export const FEATURED_PROJECTS: Project[] = [
  {
    slug: "simulearning",
    title: "SimuLearning (IoTLMS)",
    badge: "Live product · Co-founder",
    description:
      "A multi-tenant learning platform teaching IoT and embedded systems in K-12 schools — in-browser code labs, video lessons with AI-generated multilingual subtitles, gamified assessments, and QR-verifiable completion certificates, white-labeled per school.",
    stack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Docker"],
    category: "Product",
    githubUrl: "https://github.com/hrishikeshtavar/IoTLMS",
    liveUrl: "https://www.simulearning.ai",
  },
  {
    slug: "invixa-ai",
    title: "Invixa AI",
    badge: "Founder · Technical Lead",
    description:
      "Company site for the Google Cloud–backed invoice fraud detection platform I co-founded and lead as Technical Lead — winner of the Google Cloud × NatWest Hackathon Grand Final and part of the NatWest Accelerator.",
    stack: ["Next.js", "TypeScript", "GCP"],
    category: "Product",
    githubUrl: "https://github.com/hrishikeshtavar/invixa.ai-website",
    liveUrl: "https://invixa-ai-website.vercel.app",
  },
  {
    slug: "gem-rag",
    title: "GeM Tender Intelligence (RAG)",
    badge: "MSc project",
    description:
      "A retrieval-augmented generation system letting Indian tech companies query government e-marketplace (GeM) tender requirements with cited answers — hybrid BM25 + dense retrieval, HyDE, and cross-encoder reranking.",
    stack: ["Python", "Groq", "ChromaDB", "BM25"],
    highlight: "52.7% → 86.7% retrieval precision",
    category: "AI & Machine Learning",
    githubUrl: "https://github.com/hrishikeshtavar/GeM-Rag",
  },
];

// More projects: broader portfolio grid.
export const MORE_PROJECTS: Project[] = [
  {
    slug: "cosmogenics-agent-pipeline",
    title: "Self-Correcting Multi-Agent Pipeline",
    badge: "GDPval benchmark task",
    description:
      "A four-agent AI system automating a real sales-strategy planning task, architected against silent arithmetic errors and schema drift — with a self-correction loop and 22-criterion rubric scoring.",
    stack: ["Python", "Claude", "Pydantic", "openpyxl"],
    highlight: "100/100 rubric score",
    category: "AI & Machine Learning",
    githubUrl: "https://github.com/hrishikeshtavar/cosmogenics-agent-pipeline",
  },
  {
    slug: "applied-ai-ml-portfolio",
    title: "Applied AI/ML Task Portfolio",
    badge: "10 tasks",
    description:
      "Ten independent applied-AI tasks spanning classical ML, deep learning, NLP, tabular foundation models, and LLM prompt-engineering — built for breadth across the current applied-AI toolkit.",
    stack: ["PyTorch", "scikit-learn", "Gemini", "TabPFN", "Gradio"],
    category: "AI & Machine Learning",
    githubUrl: "https://github.com/hrishikeshtavar/applied-ai-ml-portfolio",
  },
  {
    slug: "loan-risk-segmentation",
    title: "Loan Risk Segmentation & Default Prediction",
    badge: "50K loans",
    description:
      "Unsupervised risk-tier segmentation (PCA + K-Means) on 50,000 loan applications, paired with a PyTorch default-prediction model evaluated by risk segment rather than in aggregate.",
    stack: ["R", "Python", "PyTorch", "scikit-learn"],
    category: "Data & Statistics",
    githubUrl: "https://github.com/hrishikeshtavar/loan-risk-segmentation",
  },
  {
    slug: "b2b-data-warehouse",
    title: "FreshLink B2B: Data Warehouse & BI",
    badge: "Kimball star schema",
    description:
      "An OLTP-to-star-schema data warehouse for a wholesale food distributor, with synthetic data calibrated against real UK food-industry benchmarks and Tableau dashboards on margin, wastage, and seasonal demand.",
    stack: ["SQL", "SQLite", "Python", "Tableau"],
    category: "Data & Statistics",
    githubUrl: "https://github.com/hrishikeshtavar/b2b-data-warehouse",
  },
  {
    slug: "credit-application-prediction",
    title: "Credit Application Propensity Model",
    badge: "Retention targeting",
    description:
      "A binary classifier identifying which bank customers are likely to apply for credit, enabling proactive retention outreach in place of reactive processing.",
    stack: ["Python", "scikit-learn", "XGBoost", "SMOTE"],
    highlight: "0.85 AUC · 0.73 Recall",
    category: "Data & Statistics",
    githubUrl: "https://github.com/hrishikeshtavar/credit_application_prediction",
  },
  {
    slug: "household-podcast-regression",
    title: "Household Spending & Podcast Listenership",
    badge: "R · regression",
    description:
      "Two independent regression case studies — what drives household food spending in England, and what drives daily podcast listenership — testing when interaction effects are actually justified by the data.",
    stack: ["R", "ggplot2", "car", "lmtest"],
    category: "Data & Statistics",
    githubUrl:
      "https://github.com/hrishikeshtavar/household_expenditure_podcast_analysis",
  },
  {
    slug: "underground-temperature-analysis",
    title: "London Underground Temperature Analysis",
    badge: "Hypothesis testing",
    description:
      "A statistical analysis of Underground carriage temperatures (2013–2024) — outlier detection, Welch's t-test, and effect sizes — to inform where to pilot new air-cooling infrastructure.",
    stack: ["R", "tidyverse", "ggplot2"],
    category: "Data & Statistics",
    githubUrl:
      "https://github.com/hrishikeshtavar/underground-temperature-analysis",
  },
  {
    slug: "covid-19-data-analysis",
    title: "COVID-19 Data Analysis",
    badge: "Early project",
    description:
      "Exploratory analysis correlating COVID-19 case data with the World Happiness Report across countries.",
    stack: ["Python", "pandas"],
    category: "Data & Statistics",
    githubUrl: "https://github.com/hrishikeshtavar/covid_19_data_analysis",
  },
];

export const ALL_PROJECTS = [...FEATURED_PROJECTS, ...MORE_PROJECTS];
