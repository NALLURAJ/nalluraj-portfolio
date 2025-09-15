// src/pages/About.jsx
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Laptop,
  Award,
  Globe,
  Cpu,
  Brain,
  Rocket,
} from "lucide-react";
import profilePic from "../assets/profile.jpg";
import { useState, useEffect } from "react";

export default function About() {
  const timeline = [
    {
      year: "2019 - 2021",
      title: "12th Grade",
      place: "C.E.O.A Matriculation School",
      icon: <GraduationCap className="w-8 h-8 text-pink-400" />,
      color: "rgba(236,72,153,0.9)", // pink glow
    },
    {
      year: "2021 - 2025",
      title: "B.Tech in Computer Science Engineering",
      place: "Karunya Institute of Technology and Sciences",
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
      color: "rgba(59,130,246,0.9)", // blue glow
    },
    {
      year: "2024",
      title: "Software Developer Intern",
      place: "National Informatics Centre, India",
      icon: <Laptop className="w-8 h-8 text-green-500" />,
      color: "rgba(34,197,94,0.9)", // green glow
    },
    {
      year: "2025",
      title: "Certifications",
      place: "Python, Data Science Bootcamp 2025 (in progress)",
      icon: <Award className="w-8 h-8 text-yellow-400" />,
      color: "rgba(245,158,11,0.9)", // amber/gold glow
    },
    {
      year: "2026",
      title: "Masters in Applied Data Science",
      place: "University of Victoria, Canada (Jan 2026)",
      icon: <Globe className="w-8 h-8 text-purple-500" />,
      color: "rgba(168,85,247,0.9)", // purple glow
    },
  ];

  const phrases = [
    "experimenting with data",
    "solving real-world problems",
    "exploring and analyzing",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

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
        About Me
      </motion.h1>

      {/* Profile + Intro */}
      <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
        {/* Profile Pic */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-6"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 blur-2xl opacity-40" />
          <img
            src={profilePic}
            alt="Nalluraj"
            className="relative w-44 h-44 md:w-52 md:h-52 rounded-full shadow-xl object-cover"
          />
        </motion.div>

        {/* Name + Tagline */}
        <h2
          className="text-5xl font-extrabold bg-gradient-to-r 
               from-blue-400 via-cyan-400 to-teal-400 
               bg-clip-text text-transparent drop-shadow-lg mb-2"
        >
          Nalluraj
        </h2>
        <p className="text-xl text-gray-300 font-medium mb-8">
          Aspiring MS Candidate | Data Science & AI
        </p>

        {/* Intro Paragraphs */}
        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
          <p>
            I’m a Computer Science Engineer from India with a strong foundation in
            software development and problem-solving. Over the years, I’ve cultivated
            a deep interest in <span className="text-blue-400 font-semibold">Data Science</span>{" "}
            and <span className="text-blue-400 font-semibold">Artificial Intelligence</span>, 
            where I enjoy turning complex data into meaningful insights and actionable solutions.
          </p>
          <p>
            My journey has taken me from Python development and data analysis to
            exploring real-world applications of machine learning. Currently, I’m
            preparing to pursue my <span className="text-teal-400 font-semibold">
            Masters in Applied Data Science</span> at the University of Victoria (Jan 2026),
            where I aim to push boundaries and contribute to impactful innovations in
            data-driven technologies.
          </p>
        </div>
      </div>

      {/* Tech DNA Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
        {/* Engineering Roots */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          animate={{ boxShadow: ["0 0 10px #3b82f6", "0 0 20px #3b82f6", "0 0 10px #3b82f6"] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-blue-500/20 backdrop-blur-md p-8 rounded-2xl text-center transition duration-300"
        >
          <Cpu className="w-10 h-10 mx-auto mb-4 text-blue-400 drop-shadow-md" />
          <h3 className="text-xl font-semibold text-blue-300 mb-2">Engineering Roots</h3>
          <p className="text-gray-200">Strong foundation in CS with a knack for building logical solutions.</p>
        </motion.div>

        {/* Data-Driven Mindset */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          animate={{ boxShadow: ["0 0 10px #22c55e", "0 0 20px #22c55e", "0 0 10px #22c55e"] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-green-500/20 backdrop-blur-md p-8 rounded-2xl text-center transition duration-300"
        >
          <Brain className="w-10 h-10 mx-auto mb-4 text-green-400 drop-shadow-md" />
          <h3 className="text-xl font-semibold text-green-300 mb-2">Data-Driven Mindset</h3>
          <p className="text-gray-200">Love uncovering insights from data and applying AI/ML to real-world problems.</p>
        </motion.div>

        {/* Future Explorer */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          animate={{ boxShadow: ["0 0 10px #a855f7", "0 0 20px #a855f7", "0 0 10px #a855f7"] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="bg-purple-500/20 backdrop-blur-md p-8 rounded-2xl text-center transition duration-300"
        >
          <Rocket className="w-10 h-10 mx-auto mb-4 text-purple-400 drop-shadow-md" />
          <h3 className="text-xl font-semibold text-purple-300 mb-2">Future Explorer</h3>
          <p className="text-gray-200">Heading to UVic, Canada to pursue my Masters and push DS & AI boundaries.</p>
        </motion.div>
      </div>

     {/* Timeline (full glowing line with start + arrow) */}
<div className="max-w-3xl mx-auto relative">
  {/* glowing vertical line */}
  <div
    className="absolute left-4 top-0 bottom-0 w-1"
    style={{
      transform: "translateX(-50%)",
      background: "linear-gradient(to bottom, rgba(59,130,246,1), rgba(30,64,175,0.9))", // blue gradient
      boxShadow: "0 0 20px rgba(59,130,246,0.8), 0 0 40px rgba(30,64,175,0.6), 0 0 60px rgba(29,78,216,0.5)",
    }}
  />

  {/* start glowing dot */}
  <div
    className="absolute left-4 w-5 h-5 rounded-full"
    style={{
      transform: "translate(-50%, -50%)",
      top: "0%",
      background: "radial-gradient(circle, rgba(34,211,238,1) 0%, rgba(14,165,233,0.8) 70%)",
      boxShadow: "0 0 25px rgba(34,211,238,1), 0 0 45px rgba(14,165,233,0.9)",
    }}
  />

  {/* end glowing arrow */}
  <div
    className="absolute left-4 w-0 h-0"
    style={{
      bottom: "-1rem",
      transform: "translateX(-50%)",
      borderLeft: "12px solid transparent",
      borderRight: "12px solid transparent",
      borderTop: "20px solid rgba(59,130,246,1)", // strong blue arrow
      filter: "drop-shadow(0 0 15px rgba(59,130,246,0.9)) drop-shadow(0 0 30px rgba(30,64,175,0.7))",
    }}
  />

  {/* timeline items */}
  <div className="relative pl-16">
    {timeline.map((item, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: idx * 0.25, duration: 0.6 }}
        className="mb-20 relative"
      >
        {/* glowing icon bubble */}
        <span
          className="absolute -left-8 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-12 h-12 rounded-full"
          style={{
            backgroundColor: "rgba(15,23,42,0.9)",
            boxShadow: "0 0 20px rgba(59,130,246,0.8)",
          }}
        >
          {item.icon}
        </span>

        {/* content */}
        <div className="ml-8 pl-6">
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="text-blue-200">{item.place}</p>
          <span className="text-sm text-blue-400">{item.year}</span>
        </div>
      </motion.div>
    ))}
  </div>
</div>


      {/* Core Value */}


<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="mt-20 text-center max-w-3xl mx-auto relative"
>
  <div className="relative bg-blue-900/20 backdrop-blur-lg p-8 rounded-2xl shadow-lg  border-blue-700/50">
    <p className="text-2xl md:text-3xl font-semibold leading-relaxed text-gray-200">
      “I believe the best way to learn is by&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="bg-gradient-to-r from-blue-400 via-cyan-300 to-teal-400 
                     bg-clip-text text-transparent font-extrabold text-4xl md:text-5xl"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
      .”
    </p>
  </div>
</motion.div>


    </div>
  );
}
