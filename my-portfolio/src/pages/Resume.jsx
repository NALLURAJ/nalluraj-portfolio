// src/pages/Resume.jsx
import { motion } from "framer-motion";
import { FileText, Download, GraduationCap, Award, Briefcase } from "lucide-react";
import resumeFile from "../assets/resume.pdf"; // ✅ make sure your resume.pdf is in src/assets

export default function Resume() {
  const highlights = [
    {
      title: "Education",
      icon: <GraduationCap className="w-6 h-6 text-blue-400" />,
      details: [
        "M.Sc Applied Data Science (Upcoming) – University of Victoria, Canada",
        "B.Tech Computer Science & Engineering – Karunya Institute of Technology",
      ],
      glow: "rgba(59,130,246,0.8)", // blue glow
    },
    {
      title: "Key Skills",
      icon: <Briefcase className="w-6 h-6 text-green-400" />,
      details: [
        "Python, Data Science, Machine Learning",
        "SQL, Tableau, Power BI",
        "Problem Solving & Team Collaboration",
      ],
      glow: "rgba(34,197,94,0.8)", // green glow
    },
    {
      title: "Achievements",
      icon: <Award className="w-6 h-6 text-yellow-400" />,
      details: [
        "IEEE Conference Paper on Zero-Trust Framework for IoT",
        "Hackathon Finalist – KHacks 2023",
        "Global Security Conference – Nullcon 2023",
      ],
      glow: "rgba(250,204,21,0.8)", // yellow glow
    },
  ];

  return (
    <div className="min-h-screen text-white px-6 py-12">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-12 
                   bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 
                   bg-clip-text text-transparent drop-shadow-lg"
      >
        My Resume
      </motion.h1>

      {/* Resume Preview Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden 
                   backdrop-blur-md bg-gray-900/40 border border-cyan-400/30 
                   shadow-lg"
        style={{
          boxShadow: "0 0 15px rgba(34,211,238,0.6), 0 0 40px rgba(34,211,238,0.3)",
        }}
      >
        {/* Embedded Resume Preview */}
        <iframe
          src={resumeFile}
          title="Resume Preview"
          className="w-full h-[600px] rounded-2xl"
        ></iframe>
      </motion.div>

      {/* Buttons */}
      <div className="flex justify-center gap-6 mt-10">
        {/* View Resume */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={resumeFile}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 rounded-lg 
                     bg-blue-500/30 hover:bg-blue-500/50 text-blue-300 
                     shadow-md transition-all"
        >
          <FileText className="w-5 h-5" /> View Fullscreen
        </motion.a>

        {/* Download Resume */}
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={resumeFile}
          download="Nalluraj_Resume.pdf"
          className="flex items-center gap-2 px-6 py-3 rounded-lg 
                     bg-green-500/30 hover:bg-green-500/50 text-green-300 
                     shadow-md transition-all"
        >
          <Download className="w-5 h-5" /> Download Resume
        </motion.a>
      </div>

      {/* Quick Highlights */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-3xl font-bold text-center mt-20 mb-12 
                   bg-gradient-to-r from-cyan-400 to-blue-500 
                   bg-clip-text text-transparent drop-shadow-lg"
      >
        Quick Highlights
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {highlights.map((section, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, y: -5 }}
            animate={{
              boxShadow: [
                `0 0 10px ${section.glow}`,
                `0 0 25px ${section.glow}`,
                `0 0 10px ${section.glow}`,
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative bg-gray-900/40 backdrop-blur-md p-6 rounded-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              {section.icon}
              <h3 className="text-xl font-semibold text-cyan-300">{section.title}</h3>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {section.details.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
