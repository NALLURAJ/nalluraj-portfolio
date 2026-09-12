// src/pages/Home.jsx
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import { Database, Layers } from "lucide-react";

export default function Home() {
  // Two platforms, two architectures. This replaces the old third-party news
  // feed: it needs no API key, never breaks on someone else's rate limit,
  // and the space now shows my work instead of somebody else's headlines.
  const building = [
    {
      title: "FreshRoute — CDC Lakehouse",
      shape: "Streaming",
      icon: <Database className="w-8 h-8 text-cyan-400" />,
      line:
        "Captures every row change from a live Postgres write-ahead log and rebuilds the business from it — including the full order state machine, which the source table never stores.",
      stack: ["Debezium", "Kafka", "Spark", "Iceberg", "dbt", "Trino", "Dagster"],
      href: "https://github.com/NALLURAJ/freshroute-cdc-lakehouse",
      accent: "border-cyan-400/30 hover:border-cyan-400/60",
    },
    {
      title: "Job Market Intelligence",
      shape: "Batch",
      icon: <Layers className="w-8 h-8 text-blue-400" />,
      line:
        "Ingests tech job postings across North America, normalises them through an OLTP layer into Snowflake, and extracts 50+ skills from free-text descriptions.",
      stack: ["Python", "AWS S3", "MySQL", "Snowflake", "dbt", "Airflow", "Streamlit"],
      href: "https://github.com/NALLURAJ/job-market-pipeline",
      accent: "border-blue-400/30 hover:border-blue-400/60",
    },
  ];

  return (
    <div className="min-h-screen text-white px-6 py-12">
      {/* Hero */}
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
        >
          I&rsquo;m{" "}
          <span className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent drop-shadow-lg">
            Nalluraj Babu
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-2xl md:text-3xl font-semibold mb-6
                     bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400
                     bg-clip-text text-transparent animate-gradient tracking-wide"
        >
          Data Engineering &amp; Analytics | M.Sc Applied Data Science, UVic
        </motion.h2>

        <ReactTyped
          strings={[
            "I build data pipelines",
            "Change data capture with Debezium and Kafka",
            "Lakehouses on Iceberg, dbt and Trino",
            "Orchestration with Airflow and Dagster",
            "Turning messy source systems into answers",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className="text-lg md:text-xl text-blue-300 font-semibold"
        />

        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Data engineer in training, currently doing my M.Sc in Applied Data
          Science at the University of Victoria. Seven months building ETL
          pipelines for a public-sector platform serving 10,000+ users at
          India&apos;s National Informatics Centre, and two end-to-end data
          platforms of my own &mdash; one batch, one streaming change data
          capture. Looking for a data engineering or analytics co-op.
        </p>

        <div className="mt-8 flex gap-4 justify-center">
          <Link
            to="/projects"
            className="px-6 py-3 bg-blue-500 text-white rounded-xl shadow-lg hover:bg-blue-600 transition"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-gray-800 border border-gray-600 rounded-xl hover:bg-gray-700 transition"
          >
            Contact Me
          </Link>
        </div>

        {/* Credentials worth seeing before anyone scrolls */}
        <div className="mt-10 flex flex-wrap gap-3 justify-center text-sm">
          <a
            href="https://ieeexplore.ieee.org/document/11013281/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-purple-500/15 border border-purple-400/30 text-purple-200 hover:bg-purple-500/25 transition"
          >
            IEEE published author
          </a>
          <a
            href="https://cp.certmetrics.com/amazon/en/public/verify/credential/212c4daddbfa45178a127897ed34afc5"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-orange-500/15 border border-orange-400/30 text-orange-200 hover:bg-orange-500/25 transition"
          >
            AWS Certified Cloud Practitioner
          </a>
          <Link
            to="/resume"
            className="px-4 py-2 rounded-full bg-cyan-500/15 border border-cyan-400/30 text-cyan-200 hover:bg-cyan-500/25 transition"
          >
            Résumé
          </Link>
        </div>
      </div>

      {/* What I'm building + chatbot */}
      <div className="mt-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[62%_38%] gap-10">
        <div>
          <h2 className="text-2xl font-bold text-cyan-300 drop-shadow-lg mb-6 text-center lg:text-left">
            What I&rsquo;m building
          </h2>

          <div className="flex flex-col gap-6">
            {building.map((p, i) => (
              <motion.a
                key={i}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                whileHover={{ scale: 1.01 }}
                className={`block bg-gray-900/50 backdrop-blur-md p-6 rounded-2xl border ${p.accent} shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-800/70 rounded-xl shrink-0">
                    {p.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3 className="text-lg font-semibold">{p.title}</h3>
                      <span className="text-xs uppercase tracking-wider text-gray-400">
                        {p.shape}
                      </span>
                    </div>
                    <p className="text-gray-300 text-sm mt-2 leading-relaxed">
                      {p.line}
                    </p>
                    <div className="flex gap-2 flex-wrap mt-4">
                      {p.stack.map((t) => (
                        <span
                          key={t}
                          className="bg-black/40 text-gray-300 px-2 py-1 rounded-md text-xs"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="mt-6 text-center lg:text-left">
            <Link
              to="/projects"
              className="text-cyan-300 hover:text-cyan-200 underline underline-offset-4 text-sm"
            >
              All six projects →
            </Link>
          </div>
        </div>

        {/* Chatbot */}
        <div className="w-full text-center">
          <h2 className="text-2xl font-bold text-cyan-300 drop-shadow-lg mb-6">
            Ask Me Anything
          </h2>
          <iframe
            src="https://www.chatbase.co/chatbot-iframe/tfyL0jUP2LzEAlxWW2EAW"
            width="100%"
            style={{ height: "500px" }}
            title="AI Chatbot"
            className="rounded-xl shadow-xl border-0"
          />
        </div>
      </div>
    </div>
  );
}
