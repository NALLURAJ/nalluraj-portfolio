import { motion } from "framer-motion";
import { Database, Layers, Brain, Cpu, Shield, LineChart } from "lucide-react";

export default function Projects() {
  const featured = [
    {
      title: "FreshRoute — CDC Lakehouse",
      kind: "Data Engineering",
      desc:
        "An online grocery marketplace and the analytics platform for it, where the platform is never allowed to query the application database — it learns about the business only by reading Postgres's write-ahead log.",
      highlight:
        "Reconstructs the full order state machine from a table that only ever stores the current status, and measures how much a day's revenue moves after the day closes as late refunds arrive.",
      tags: ["Debezium", "Kafka", "Spark", "Apache Iceberg", "dbt", "Trino", "Dagster", "Docker"],
      icon: <Database className="w-10 h-10 text-cyan-400" />,
      color: "from-cyan-500/20 to-cyan-900/10",
      link: "https://github.com/NALLURAJ/freshroute-cdc-lakehouse",
    },
    {
      title: "Job Market Intelligence Platform",
      kind: "Data Engineering",
      desc:
        "End-to-end batch pipeline ingesting tech job postings across North America, normalising them through an OLTP layer into a cloud warehouse, and surfacing salary and skill analytics.",
      highlight:
        "Extracts 50+ technical and soft skills from free-text job descriptions, with duplicate prevention on every warehouse load.",
      tags: ["Python", "AWS S3", "MySQL", "Snowflake", "dbt", "Airflow", "Streamlit"],
      icon: <Layers className="w-10 h-10 text-blue-400" />,
      color: "from-blue-500/20 to-blue-900/10",
      link: "https://github.com/NALLURAJ/job-market-pipeline",
    },
    {
      title: "SkillBridge — NLP Skill Extraction",
      kind: "Data Mining · CSC 503",
      desc:
        "My component of a five-person project joining four Canadian labour-market datasets — LinkedIn postings, the federal Job Bank, the OaSIS skills taxonomy and COPS occupational projections.",
      highlight:
        "Evaluated against a silver standard of LinkedIn tags and a gold standard of 100 hand-annotated postings, with frozen splits and ablations kept intact.",
      tags: ["Python", "NLP", "Annotation Protocol", "Ablation Studies"],
      icon: <Brain className="w-10 h-10 text-purple-400" />,
      color: "from-purple-500/20 to-purple-900/10",
      link: "https://github.com/NALLURAJ/-NLP-skill-extraction-pipelin",
    },
    {
      title: "MNIST — Gabor, PCA & Kernel Ridge",
      kind: "Optimization for ML · ECE 503",
      desc:
        "Digit classification replacing the course's HOG and softmax baseline with a 40-filter Gabor bank, PCA to 200 components, and kernel ridge regression.",
      highlight:
        "99.09% on the 10,000-image test set, against a 98.04% baseline — with training statistics applied to the test set so no information leaks into the transform.",
      tags: ["MATLAB", "Gabor Filters", "PCA / SVD", "Kernel Methods"],
      icon: <Cpu className="w-10 h-10 text-teal-400" />,
      color: "from-teal-500/20 to-teal-900/10",
      link: "https://github.com/NALLURAJ/mnist-gabor-pca-krr",
    },
    {
      title: "MediPredict",
      kind: "Machine Learning",
      desc:
        "A Streamlit application predicting risk for Diabetes, Heart Disease and Parkinson's from user-entered health indicators, using models trained on public healthcare datasets.",
      highlight:
        "Multi-model interface built for non-technical users, with each condition served by its own trained classifier.",
      tags: ["Python", "scikit-learn", "Streamlit", "Jupyter"],
      icon: <LineChart className="w-10 h-10 text-green-400" />,
      color: "from-green-500/20 to-green-900/10",
      link: "https://github.com/NALLURAJ/MediPredict",
    },
    {
      title: "Zero Trust IDPS for IoT",
      kind: "Published Research",
      desc:
        "Intrusion detection and prevention for resource-constrained IoT environments, operationalising continuous verification, least privilege and micro-segmentation at device and network level.",
      highlight:
        "Prototyped on Raspberry Pi gateways and ESP32 nodes, evaluated against TON_IoT and BoT-IoT. Published at IEEE.",
      tags: ["Zero Trust", "IDPS", "Raspberry Pi", "TON_IoT", "IEEE"],
      icon: <Shield className="w-10 h-10 text-orange-400" />,
      color: "from-orange-500/20 to-orange-900/10",
      link: "https://github.com/NALLURAJ/IoT-ZeroTrust-Framework",
      paper: "https://ieeexplore.ieee.org/document/11013281/",
    },
  ];

  return (
    <div className="min-h-screen text-white px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-6
                   bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400
                   bg-clip-text text-transparent drop-shadow-lg"
      >
        Projects
      </motion.h1>

      <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-14 leading-relaxed">
        Two production-shaped data platforms, and the coursework and research
        behind them. Each one links to the repository, with the architecture
        and the trade-offs written up rather than summarised.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-10">
        {featured.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            whileHover={{ scale: 1.02 }}
            className={`bg-gradient-to-br ${proj.color} backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-gray-700/50 transition-all duration-300 flex flex-col`}
          >
            <div className="flex items-center gap-4 mb-3">
              <div className="p-3 bg-gray-800/60 rounded-full shrink-0">
                {proj.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold leading-tight">
                  {proj.title}
                </h3>
                <span className="text-xs uppercase tracking-wider text-cyan-300/80">
                  {proj.kind}
                </span>
              </div>
            </div>

            <p className="text-gray-300 text-sm mb-3 leading-relaxed">
              {proj.desc}
            </p>

            <p className="text-gray-400 text-sm mb-4 leading-relaxed border-l-2 border-cyan-400/40 pl-3">
              {proj.highlight}
            </p>

            <div className="flex gap-2 flex-wrap mb-5 mt-auto">
              {proj.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-black/40 text-gray-300 px-2 py-1 rounded-md text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap">
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-blue-500/30 hover:bg-blue-500/50 rounded-lg text-sm text-blue-200 transition-colors"
              >
                View on GitHub →
              </a>
              {proj.paper && (
                <a
                  href={proj.paper}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-orange-500/20 hover:bg-orange-500/40 rounded-lg text-sm text-orange-200 transition-colors"
                >
                  Read the IEEE paper →
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <p className="text-center text-gray-400 text-sm max-w-2xl mx-auto">
        Further coursework and smaller utilities are on{" "}
        <a
          href="https://github.com/NALLURAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4"
        >
          GitHub
        </a>
        .
      </p>
    </div>
  );
}
