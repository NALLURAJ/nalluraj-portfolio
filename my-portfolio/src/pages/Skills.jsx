// src/pages/Skills.jsx
import { motion } from "framer-motion";
import { Database, Brain, Code, BarChart, FileSpreadsheet } from "lucide-react";
import pythonLogo from "../assets/python.png";
import pandasLogo from "../assets/pandas.png";
import numpyLogo from "../assets/numpy.png";
import tensorflowLogo from "../assets/tensorflow.png";
import powerbiLogo from "../assets/powerbi.png";
import tableauLogo from "../assets/tableau.png";
import excelLogo from "../assets/excel.png";

export default function Skills() {
  const skills = [
    { name: "Python", level: 90 },
    { name: "SQL", level: 95 },
    { name: "Machine Learning", level: 80 },
    { name: "Data Visualization", level: 90 },
    { name: "Power BI", level: 95 },
    { name: "Tableau", level: 85 },
    { name: "Excel", level: 95 },
    { name: "Git/GitHub", level: 95 },
    { name: "NLP", level: 75 },        // 👈 added
    { name: "Statistics", level: 75 }, // 👈 added
  ];

  const softSkills = [
    "Problem Solving",
    "Analytical Thinking",
    "Collaboration & Teamwork",
    "Report Writing & Documentation",
    "Data Cleaning & Preprocessing",
    "Research & Literature Review",
    "Adaptability & Continuous Learning",
    "Presentation Skills",
  ];

  return (
    <div className="min-h-screen text-white px-6 py-12 ">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-extrabold text-center mb-8 
                   bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 
                   bg-clip-text text-transparent drop-shadow-lg"
      >
        Skills & Expertise
      </motion.h1>

      <p className="text-lg md:text-xl text-center text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
  A blend of programming, data analysis and professional skills developed
  through projects, internship, and my academic journey.
</p>


      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full mx-auto">
        {/* Left: Circular icons */}
        <div className="flex flex-col gap-8 items-center md:items-start">
          {/* Programming */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 10px rgba(59,130,246,0.4)",
                "0 0 30px rgba(59,130,246,0.8)",
                "0 0 10px rgba(59,130,246,0.4)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 rounded-full bg-gray-800/70 backdrop-blur-md flex items-center justify-center"
          >
            <Code className="w-12 h-12 text-blue-400" />
          </motion.div>

          {/* Database */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 10px rgba(34,197,94,0.4)",
                "0 0 30px rgba(34,197,94,0.8)",
                "0 0 10px rgba(34,197,94,0.4)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 rounded-full bg-gray-800/70 backdrop-blur-md flex items-center justify-center"
          >
            <Database className="w-12 h-12 text-green-400" />
          </motion.div>

          {/* AI/ML */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 10px rgba(168,85,247,0.4)",
                "0 0 30px rgba(168,85,247,0.8)",
                "0 0 10px rgba(168,85,247,0.4)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 rounded-full bg-gray-800/70 backdrop-blur-md flex items-center justify-center"
          >
            <Brain className="w-12 h-12 text-purple-400" />
          </motion.div>

          {/* Visualization */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 10px rgba(250,204,21,0.4)",
                "0 0 30px rgba(250,204,21,0.8)",
                "0 0 10px rgba(250,204,21,0.4)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 rounded-full bg-gray-800/70 backdrop-blur-md flex items-center justify-center"
          >
            <BarChart className="w-12 h-12 text-yellow-400" />
          </motion.div>

          {/* Spreadsheet */}
          <motion.div
            animate={{
              boxShadow: [
                "0 0 10px rgba(20,184,166,0.4)",
                "0 0 30px rgba(20,184,166,0.8)",
                "0 0 10px rgba(20,184,166,0.4)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-24 h-24 rounded-full bg-gray-800/70 backdrop-blur-md flex items-center justify-center"
          >
            <FileSpreadsheet className="w-12 h-12 text-teal-400" />
          </motion.div>
        </div>

        {/* Right: Progress Bars */}
        <div className="flex flex-col gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="w-full"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="flex justify-between mb-3">
                <span className="font-bold text-blue-400 text-lg">
                  {skill.name}
                </span>
                <span className="text-gray-400 text-lg">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.2, delay: index * 0.3 }}
                  className="bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 h-4 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

{/* Professional Skills */}
<motion.h2
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  className="text-3xl font-bold text-cyan-300 drop-shadow-lg mt-24 mb-10 text-center"
>
  Professional & Applied Skills
</motion.h2>

{/* Skill Tags */}
<div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
  {softSkills.map((skill, index) => (
    <motion.a
      key={index}
      href={`https://www.google.com/search?q=${encodeURIComponent(
        skill + " in Data Science"
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      className="relative px-6 py-3 rounded-lg font-medium text-lg cursor-pointer
                 text-gray-200 bg-gray-800/60 backdrop-blur-md 
                 shadow-md border border-gray-700
                 hover:text-white hover:bg-gray-700/70 
                 transition-all duration-300"
    >
      {skill}
    </motion.a>
  ))}
</div>



      {/* Logos */}
      <div className="flex gap-8 mt-16 flex-wrap justify-center">
        <img
          src={pythonLogo}
          alt="Python"
          className="w-16 h-16 rounded-xl shadow-md"
        />
        <img
          src={pandasLogo}
          alt="Pandas"
          className="w-16 h-16 rounded-xl shadow-md"
        />
        <img
          src={numpyLogo}
          alt="NumPy"
          className="w-16 h-16 rounded-xl shadow-md"
        />
        <img
          src={tensorflowLogo}
          alt="TensorFlow"
          className="w-16 h-16 rounded-xl shadow-md"
        />
        <img
          src={powerbiLogo}
          alt="Power BI"
          className="w-16 h-16 rounded-xl shadow-md"
        />
        <img
          src={tableauLogo}
          alt="Tableau"
          className="w-16 h-16 rounded-xl shadow-md"
        />
        <img
          src={excelLogo}
          alt="Excel"
          className="w-16 h-16 rounded-xl shadow-md"
        />
      </div>
    </div>
  );
}
