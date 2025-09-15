// src/pages/Certifications.jsx
import { motion } from "framer-motion";
import { Award, BookOpen, Globe, Rocket, Shield, Terminal } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      title: "Python Programming Fundamentals",
      org: "MyGreatLearning",
      icon: <Award className="w-8 h-8 text-blue-400" />,
      status: "Completed",
      color: "from-blue-500/20 via-blue-400/10 to-transparent",
      glow: "rgba(59,130,246,0.8)", // blue glow
    },
    {
      title: "Data Science Foundations",
      org: "IBM",
      icon: <Award className="w-8 h-8 text-green-400" />,
      status: "Completed",
      color: "from-green-500/20 via-green-400/10 to-transparent",
      glow: "rgba(34,197,94,0.8)", // green glow
    },
    {
      title: "Data Science Bootcamp 2025",
      org: "DataCamp",
      icon: <BookOpen className="w-8 h-8 text-yellow-400" />,
      status: "In Progress",
      color: "from-yellow-500/20 via-yellow-400/10 to-transparent",
      glow: "rgba(250,204,21,0.8)", // yellow glow
    },
  ];

  const achievements = [
    {
      title: "IEEE Conference Paper",
      desc: "Presented research on Zero-Trust Framework for IoT IDPS",
      icon: <Globe className="w-8 h-8 text-purple-400" />,
      link: "https://ieeexplore.ieee.org/document/11013281/",
      color: "from-purple-500/20 via-purple-400/10 to-transparent",
      glow: "rgba(168,85,247,0.8)", // purple glow
    },
    {
      title: "Nullcon 2023",
      desc: "Attended global security conference",
      icon: <Shield className="w-8 h-8 text-red-400" />,
      link: "https://nullcon.net/",
      color: "from-red-500/20 via-red-400/10 to-transparent",
      glow: "rgba(239,68,68,0.8)", // red glow
    },
  ];

  const hackathons = [
    {
      title: "KHacks 2023",
      desc: "Hackathon by Karunya University",
      icon: <Rocket className="w-8 h-8 text-yellow-400" />,
      color: "from-yellow-500/20 via-yellow-400/10 to-transparent",
      glow: "rgba(250,204,21,0.8)", // yellow glow
    },
    {
      title: "LeetCode DSA Practice",
      desc: "Solved algorithm & data structure challenges",
      icon: <Terminal className="w-8 h-8 text-cyan-400" />,
      color: "from-cyan-500/20 via-cyan-400/10 to-transparent",
      glow: "rgba(34,211,238,0.8)", // cyan glow
    },
  ];

  const futurePlans = [
    { title: "AWS Cloud Practitioner" },
    { title: "Tableau / Power BI" },
    { title: "Advanced Machine Learning" },
  ];

  return (
    <div className="min-h-screen text-white px-6 py-12">
      {/* Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-extrabold text-center mb-16 
                   bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 
                   bg-clip-text text-transparent drop-shadow-lg"
      >
        Certifications & Achievements
      </motion.h1>

      {/* Certifications */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {certifications.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            animate={{
              boxShadow: [
                `0 0 10px ${item.glow}`,
                `0 0 25px ${item.glow}`,
                `0 0 10px ${item.glow}`,
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className={`relative bg-gradient-to-br ${item.color} 
                        backdrop-blur-md p-6 rounded-2xl transition-all duration-300`}
            style={{ backgroundColor: "rgba(17,25,40,0.3)" }}
          >
            <div className="flex flex-col items-center text-center relative">
              {item.icon}
              <h2 className="mt-4 text-xl font-semibold">{item.title}</h2>
              <p className="text-gray-400">{item.org}</p>
              <span
                className={`mt-3 text-sm px-3 py-1 rounded-full ${
                  item.status === "Completed"
                    ? "bg-green-600/20 text-green-400"
                    : "bg-yellow-600/20 text-yellow-400"
                }`}
              >
                {item.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Achievements */}
      <h2 className="text-2xl font-bold text-cyan-300 drop-shadow-lg mb-8 text-center">
        Research & Conferences
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
        {achievements.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            animate={{
              boxShadow: [
                `0 0 10px ${item.glow}`,
                `0 0 25px ${item.glow}`,
                `0 0 10px ${item.glow}`,
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className={`relative bg-gradient-to-br ${item.color} 
                        backdrop-blur-md p-6 rounded-2xl transition-all duration-300`}
            style={{ backgroundColor: "rgba(17,25,40,0.3)" }}
          >
            <div className="flex items-center gap-4 relative">
              {item.icon}
              <div>
                <h3 className="text-lg font-semibold text-blue-300">
                  {item.title}
                </h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Hackathons */}
      <h2 className="text-2xl font-bold text-cyan-300 drop-shadow-lg mb-8 text-center">
        Hackathons & Practice
      </h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
        {hackathons.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            animate={{
              boxShadow: [
                `0 0 10px ${item.glow}`,
                `0 0 25px ${item.glow}`,
                `0 0 10px ${item.glow}`,
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className={`relative bg-gradient-to-br ${item.color} 
                        backdrop-blur-md p-6 rounded-2xl transition-all duration-300`}
            style={{ backgroundColor: "rgba(17,25,40,0.3)" }}
          >
            <div className="flex items-center gap-4 relative">
              {item.icon}
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Future Plans */}
      <h2 className="text-2xl font-bold text-cyan-300 drop-shadow-lg mb-8 text-center">
        Future Learning Plans
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 max-w-5xl mx-auto">
        {futurePlans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
            className="flex-1 text-center px-6"
          >
            {/* Top Accent Line with Glow */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 10px rgba(34,211,238,0.6)", // cyan glow
                  "0 0 25px rgba(34,211,238,0.9)",
                  "0 0 10px rgba(34,211,238,0.6)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="h-1 w-12 mx-auto mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
            ></motion.div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-200 mb-2">
              {plan.title}
            </h3>

            {/* Subtle underline */}
            <div className="w-10 mx-auto border-b border-gray-600"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
