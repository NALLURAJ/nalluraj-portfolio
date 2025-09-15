// src/pages/Home.jsx
import { motion, AnimatePresence } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
  const [allNews, setAllNews] = useState([]);
  const [visibleNews, setVisibleNews] = useState([]);
  const [index, setIndex] = useState(0);

  // Fetch Tech News
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://newsapi.org/v2/everything?q=technology&language=en&sortBy=publishedAt&pageSize=20&apiKey=a552424114cc41ddb753ed3b73645a62`
        );
        const data = await res.json();
        if (data.articles) {
          setAllNews(data.articles);
          setVisibleNews(data.articles.slice(0, 4));
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };
    fetchNews();
  }, []);

  // Rotate news every 5s
  useEffect(() => {
    if (allNews.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => {
        const nextIndex = (prev + 4) % allNews.length;
        setVisibleNews(allNews.slice(nextIndex, nextIndex + 4));
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [allNews]);

  return (
    <div className="min-h-screen text-white px-6 py-12">
      {/* Hero Section */}
      <div className="text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-white"
        >
          I’m{" "}
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
  Aspiring MS Candidate | Data Science & AI
</motion.h2>


        <ReactTyped
          strings={[
            "Data Science",
            "Artificial Intelligence",
            "Python Developer",
            "Problem Solver",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
          className="text-lg md:text-xl text-blue-300 font-semibold"
        />

        {/* Short Intro */}
        <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Passionate Computer Science Engineer from India, with hands-on
          experience in Python & AI projects.  
          About to begin my journey as a Masters student in Applied Data Science
          at the University of Victoria (Jan 2026).
        </p>

        {/* CTA buttons */}
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
      </div>

      {/* Split Section: News + Chatbot */}
      <div className="mt-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[70%_30%] gap-10">
        {/* Tech News Section */}
        <div>
          <h2 className="text-2xl font-bold text-cyan-300 drop-shadow-lg mb-6 text-center">
   Latest in Tech & AI
</h2>
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="grid sm:grid-cols-2 gap-6"
            >
              {visibleNews.length > 0 ? (
                visibleNews.map((article, i) => (
                  <motion.a
                    key={i}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    className="bg-gray-800/70 p-5 rounded-xl shadow-lg border border-gray-700 flex flex-col hover:bg-gray-700/80 transition"
                  >
                    <h3 className="text-lg font-semibold text-indigo-300 hover:text-indigo-200 transition">
  {article.title}
</h3>

                    <p className="text-gray-300 text-sm flex-1">
  {article.description?.slice(0, 100) || "Click to read more..."}
</p>

                    <span className="mt-3 text-xs text-blue-200/70">
  {article.source?.name || "Tech News"}
</span>

                  </motion.a>
                ))
              ) : (
                <div className="col-span-2 flex flex-col items-center justify-center py-12">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "linear",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-10 h-10 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 4v1m6.364 1.636l-.707.707M20 12h-1M18.364 18.364l-.707-.707M12 20v-1M5.636 18.364l.707-.707M4 12h1M5.636 5.636l.707.707"
                      />
                    </svg>
                  </motion.div>
                  <p className="mt-4 text-gray-400 animate-pulse">
                    Fetching the latest AI & Tech stories...
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

{/* Chatbot Section */}
<div className="w-full max-w-4xl mx-auto text-center">
  <h2 className="text-2xl font-bold text-cyan-300 drop-shadow-lg mb-6">
    Ask Me Anything
  </h2>
  <iframe
    src="https://www.chatbase.co/chatbot-iframe/tfyL0jUP2LzEAlxWW2EAW"
    width="100%"
    style={{ height: "500px" }}
    frameBorder="0"
    title="AI Chatbot"
    className="rounded-xl shadow-xl"
  />
</div>


      </div>
    </div>
  );
}
