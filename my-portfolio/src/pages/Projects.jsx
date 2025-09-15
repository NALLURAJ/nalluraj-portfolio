import { motion } from "framer-motion";
import { Brain, Shield, Globe, Lock } from "lucide-react";

export default function Projects() {
  const featured = [
    {
      title: "MediPredict",
      desc: "AI-powered app predicting risks of Diabetes, Heart Disease, and Parkinson’s using ML models.",
      tags: ["Python", "ML", "Jupyter"],
      icon: <Brain className="w-10 h-10 text-blue-400" />,
      color: "from-blue-500/20 to-blue-900/10",
      link: "https://github.com/NALLURAJ/MediPredict",
    },
    {
      title: "IoT ZeroTrust Framework",
      desc: "Intrusion Detection & Prevention System for IoT with real-time threat analytics.",
      tags: ["IoT", "Security", "Zero Trust"],
      icon: <Shield className="w-10 h-10 text-purple-400" />,
      color: "from-purple-500/20 to-purple-900/10",
      link: "https://github.com/NALLURAJ/IoT-ZeroTrust-Framework",
    },
    {
      title: "Dynamic News Platform",
      desc: "A web-based platform delivering timely, category-based news with dynamic rendering.",
      tags: ["Node.js", "EJS", "Web Dev"],
      icon: <Globe className="w-10 h-10 text-green-400" />,
      color: "from-green-500/20 to-green-900/10",
      link: "https://github.com/NALLURAJ/News-Website",
    },
    {
      title: "User Authentication System",
      desc: "Full-stack authentication app with login/signup using Node.js, Express, MySQL, and React.",
      tags: ["Node.js", "Express", "React", "MySQL"],
      icon: <Lock className="w-10 h-10 text-yellow-400" />,
      color: "from-yellow-500/20 to-yellow-900/10",
      link: "https://github.com/NALLURAJ/User-Authentication-Login",
    },
  ];

  return (
    <div className="min-h-screen text-white px-6 py-12">
      {/* Header */}
      <motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-5xl md:text-6xl font-extrabold text-center mb-12 
             bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 
             bg-clip-text text-transparent drop-shadow-lg"
>
  Projects
</motion.h1>

      {/* Featured Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
        {featured.map((proj, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`bg-gradient-to-br ${proj.color} backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-gray-700/50 transition-all duration-300`}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gray-800/60 rounded-full">{proj.icon}</div>
              <h3 className="text-xl font-semibold">{proj.title}</h3>
            </div>
            <p className="text-gray-300 text-sm mb-3">{proj.desc}</p>
            <div className="flex gap-2 flex-wrap mb-4">
              {proj.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-black/40 text-gray-300 px-2 py-1 rounded-md text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-500/30 hover:bg-blue-500/50 rounded-lg text-sm text-blue-200 transition-colors"
            >
              View on GitHub →
            </a>
          </motion.div>
        ))}
      </div>

     {/* Mini Projects - Terminal Style */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-950/90 rounded-xl shadow-lg 
                   max-w-5xl mx-auto p-6 font-mono text-sm text-green-400
                   relative overflow-hidden"
        style={{
          boxShadow:
            "0 0 20px rgba(34,197,94,0.4), 0 0 40px rgba(34,197,94,0.2)",
        }}
      >
        {/* Glow Animation Layer */}
        <div className="absolute inset-0 rounded-xl border border-green-400/30 animate-pulse pointer-events-none"></div>

        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-4 relative z-10">
          <span className="w-3 h-3 bg-red-500 rounded-full shadow-md shadow-red-500/50"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full shadow-md shadow-yellow-500/50"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full shadow-md shadow-green-500/50"></span>
          <p className="ml-3 text-gray-400">
            nallu@portfolio: ~/mini-projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 relative z-10">
          <p>
            <span className="text-blue-400">{">"}</span> python{" "}
            <span className="text-yellow-300">expense_tracker.py</span>{" "}
            <span className="text-gray-400"># Expense Tracker CLI</span>
          </p>
          <p>
            <span className="text-blue-400">{">"}</span> python{" "}
            <span className="text-yellow-300">student_db.py</span>{" "}
            <span className="text-gray-400"># Student Database System</span>
          </p>
          <p>
            <span className="text-blue-400">{">"}</span> python{" "}
            <span className="text-yellow-300">file_organizer.py</span>{" "}
            <span className="text-gray-400"># Auto File Organizer</span>
          </p>
          <p>
            <span className="text-blue-400">{">"}</span> python{" "}
            <span className="text-yellow-300">weather_app.py</span>{" "}
            <span className="text-gray-400"># Weather App (API)</span>
          </p>
          <p>
            <span className="text-blue-400">{">"}</span> python{" "}
            <span className="text-yellow-300">quiz_app.py</span>{" "}
            <span className="text-gray-400"># JSON Quiz Game</span>
          </p>
          <p>
            <span className="text-blue-400">{">"}</span> python{" "}
            <span className="text-yellow-300">contact_book.py</span>{" "}
            <span className="text-gray-400"># Contact Manager CLI</span>
          </p>
          <p>
            <span className="text-blue-400">{">"}</span> python{" "}
            <span className="text-yellow-300">password_generator.py</span>{" "}
            <span className="text-gray-400"># Secure Password Generator</span>
          </p>
          <p>
            <span className="text-blue-400">{">"}</span> python{" "}
            <span className="text-yellow-300">todo_list.py</span>{" "}
            <span className="text-gray-400"># To-Do List CLI</span>
          </p>
          <p>
            <span className="text-blue-400">{">"}</span> python{" "}
            <span className="text-yellow-300">tic_tac_toe.py</span>{" "}
            <span className="text-gray-400"># Terminal Tic-Tac-Toe</span>
          </p>
          <p>
            <span className="text-blue-400">{">"}</span> python{" "}
            <span className="text-yellow-300">slot_machine.py</span>{" "}
            <span className="text-gray-400"># Slot Machine Game</span>
          </p>
          <p>
            <span className="text-blue-400">{">"}</span> python{" "}
            <span className="text-yellow-300">text_analyzer.py</span>{" "}
            <span className="text-gray-400"># Text Analyzer</span>
          </p>
          <p>
            <span className="text-blue-400">{">"}</span> python{" "}
            <span className="text-yellow-300">number_guess.py</span>{" "}
            <span className="text-gray-400"># Guess the Number</span>
          </p>
          <p>
            <span className="text-blue-400">{">"}</span> python{" "}
            <span className="text-yellow-300">calculator.py</span>{" "}
            <span className="text-gray-400"># Text-based Calculator</span>
          </p>
          <p>
            <span className="text-blue-400">{">"}</span> python{" "}
            <span className="text-yellow-300">adventure_game.py</span>{" "}
            <span className="text-gray-400"># Text Adventure Game</span>
          </p>

          {/* Last row with blinking caret */}
          <p>
            <span className="text-blue-400 blink-caret">{">"}</span>{" "}
            <span className="text-gray-400 italic">
              waiting for next project...
            </span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}