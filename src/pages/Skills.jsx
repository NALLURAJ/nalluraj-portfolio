// src/pages/Skills.jsx
import { motion } from "framer-motion";
import { Radio, HardDrive, Wand2, Workflow, BarChart, Code2 } from "lucide-react";
import pythonLogo from "../assets/python.png";
import pandasLogo from "../assets/pandas.png";
import numpyLogo from "../assets/numpy.png";
import tensorflowLogo from "../assets/tensorflow.png";
import powerbiLogo from "../assets/powerbi.png";
import tableauLogo from "../assets/tableau.png";
import excelLogo from "../assets/excel.png";

export default function Skills() {
  // Every tool below names where it was actually used, so the list is
  // checkable rather than self-assessed.
  const groups = [
    {
      title: "Ingestion & Change Data Capture",
      icon: <Radio className="w-7 h-7 text-cyan-400" />,
      accent: "border-cyan-400/40",
      items: [
        { name: "Debezium", where: "FreshRoute" },
        { name: "Apache Kafka", where: "FreshRoute" },
        { name: "Postgres logical replication", where: "FreshRoute" },
        { name: "REST API ingestion", where: "Job Market Platform" },
        { name: "ETL pipelines", where: "National Informatics Centre" },
      ],
    },
    {
      title: "Storage & Warehousing",
      icon: <HardDrive className="w-7 h-7 text-blue-400" />,
      accent: "border-blue-400/40",
      items: [
        { name: "Apache Iceberg", where: "FreshRoute" },
        { name: "Snowflake", where: "Job Market Platform" },
        { name: "PostgreSQL", where: "FreshRoute" },
        { name: "MySQL", where: "Job Market Platform" },
        { name: "AWS S3 / object storage", where: "Job Market Platform" },
      ],
    },
    {
      title: "Transformation & Modelling",
      icon: <Wand2 className="w-7 h-7 text-purple-400" />,
      accent: "border-purple-400/40",
      items: [
        { name: "dbt", where: "FreshRoute · Job Market" },
        { name: "SQL", where: "across every project" },
        { name: "Spark Structured Streaming", where: "FreshRoute" },
        { name: "Dimensional modelling & SCD Type 2", where: "FreshRoute" },
        { name: "pandas / NumPy", where: "SkillBridge · MediPredict" },
      ],
    },
    {
      title: "Orchestration & Reliability",
      icon: <Workflow className="w-7 h-7 text-teal-400" />,
      accent: "border-teal-400/40",
      items: [
        { name: "Dagster", where: "FreshRoute" },
        { name: "Apache Airflow", where: "Job Market Platform" },
        { name: "Docker & Compose", where: "FreshRoute · Job Market" },
        { name: "Data quality testing", where: "FreshRoute" },
        { name: "Unit & integration testing", where: "National Informatics Centre" },
        { name: "GitHub Actions CI", where: "FreshRoute" },
      ],
    },
    {
      title: "Analysis & Visualisation",
      icon: <BarChart className="w-7 h-7 text-yellow-400" />,
      accent: "border-yellow-400/40",
      items: [
        { name: "Trino", where: "FreshRoute" },
        { name: "Streamlit", where: "FreshRoute · Job Market · MediPredict" },
        { name: "Plotly", where: "Job Market Platform" },
        { name: "Power BI", where: "analytics coursework" },
        { name: "Tableau", where: "analytics coursework" },
        { name: "Excel", where: "analytics coursework" },
      ],
    },
    {
      title: "Languages & Foundations",
      icon: <Code2 className="w-7 h-7 text-green-400" />,
      accent: "border-green-400/40",
      items: [
        { name: "Python", where: "primary language" },
        { name: "SQL", where: "primary language" },
        { name: "MATLAB", where: "ECE 503 optimisation" },
        { name: "JavaScript / React", where: "this site" },
        { name: "Git & GitHub", where: "everywhere" },
        { name: "NLP & machine learning", where: "SkillBridge · MNIST · MediPredict" },
      ],
    },
  ];

  const professional = [
    "Agile / Scrum delivery",
    "Technical documentation",
    "Data cleaning & preprocessing",
    "Analytical problem solving",
    "Research & literature review",
    "Collaboration in small teams",
    "Presenting technical work",
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
        Skills & Toolchain
      </motion.h1>

      <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-14 leading-relaxed">
        Grouped the way a data platform is actually built, from ingestion
        through to the dashboard. Each tool names where I used it, so you can
        go and check.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {groups.map((g, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className={`bg-gray-900/50 backdrop-blur-md rounded-2xl p-6 border ${g.accent} shadow-lg`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="p-2 bg-gray-800/70 rounded-xl">{g.icon}</div>
              <h2 className="text-lg font-semibold leading-tight">{g.title}</h2>
            </div>
            <ul className="flex flex-col gap-3">
              {g.items.map((item, idx) => (
                <li key={idx} className="leading-tight">
                  <span className="text-gray-100 font-medium">{item.name}</span>
                  <span className="block text-xs text-gray-400 mt-0.5">
                    {item.where}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold text-cyan-300 drop-shadow-lg mt-20 mb-8 text-center"
      >
        Working Practices
      </motion.h2>

      <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
        {professional.map((skill, index) => (
          <span
            key={index}
            className="px-5 py-2.5 rounded-lg font-medium
                       text-gray-200 bg-gray-800/60 backdrop-blur-md
                       shadow-md border border-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>

      <div className="flex gap-8 mt-16 flex-wrap justify-center opacity-90">
        {[
          [pythonLogo, "Python"],
          [pandasLogo, "Pandas"],
          [numpyLogo, "NumPy"],
          [tensorflowLogo, "TensorFlow"],
          [powerbiLogo, "Power BI"],
          [tableauLogo, "Tableau"],
          [excelLogo, "Excel"],
        ].map(([src, alt]) => (
          <img
            key={alt}
            src={src}
            alt={alt}
            title={alt}
            className="w-14 h-14 rounded-xl shadow-md"
          />
        ))}
      </div>
    </div>
  );
}
