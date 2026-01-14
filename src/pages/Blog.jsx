// src/pages/Blog.jsx
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  PlayCircle,
  Rocket,
  Database,
  BarChart,
  Cpu,
} from "lucide-react";

export default function Blog() {
  // 🔹 Part 1: Learning Sources
  const categories = [
    {
      title: " YouTube Learning",
      items: [
        {
          name: "3Blue1Brown",
          desc: "Deep, visual explanations of math & statistics.",
          link: "https://www.youtube.com/@3blue1brown",
          icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
          glow: "rgba(59,130,246,0.7)",
        },
        {
          name: "CodeBasics",
          desc: "Step-by-step tutorials on DSA & Python.",
          link: "https://www.youtube.com/@codebasics",
          icon: <BookOpen className="w-8 h-8 text-green-400" />,
          glow: "rgba(34,197,94,0.7)",
        },
        {
          name: "Data Engineering Videos (Tamil)",
          desc: "Practical data concepts in Tamil (Recommended).",
          link: "https://www.youtube.com/@dataengineeringvideos",
          icon: <PlayCircle className="w-8 h-8 text-yellow-400" />,
          glow: "rgba(250,204,21,0.7)",
        },
        {
          name: "Krish Naik",
          desc: "Hands-on tutorials in Data Science & ML.",
          link: "https://www.youtube.com/@krishnaik06",
          icon: <GraduationCap className="w-8 h-8 text-purple-400" />,
          glow: "rgba(168,85,247,0.7)",
        },
      ],
    },
    {
      title: " Online Courses & Platforms",
      items: [
        {
          name: "freeCodeCamp",
          desc: "Python & Data Science free crash courses.",
          link: "https://www.freecodecamp.org/learn",
          icon: <BookOpen className="w-8 h-8 text-pink-400" />,
          glow: "rgba(236,72,153,0.7)",
        },
        {
          name: "Python Institute",
          desc: "Python fundamentals & certification prep.",
          link: "https://pythoninstitute.org/",
          icon: <GraduationCap className="w-8 h-8 text-indigo-400" />,
          glow: "rgba(99,102,241,0.7)",
        },
        {
          name: "IBM Data Science Orientation",
          desc: "Intro to Data Science tools & ecosystem.",
          link: "https://www.coursera.org/learn/what-is-datascience",
          icon: <Rocket className="w-8 h-8 text-blue-500" />,
          glow: "rgba(59,130,246,0.7)",
        },
        {
          name: "MyGreatLearning",
          desc: "Python for Beginners fundamentals.",
          link: "https://www.mygreatlearning.com/",
          icon: <GraduationCap className="w-8 h-8 text-orange-400" />,
          glow: "rgba(251,146,60,0.7)",
        },
      ],
    },
  ];

// 🔹 Part 2: Roadmap Timeline
const roadmap = [
  {
    step: "Step 1 – Programming Foundations",
    desc: "Learn Python (syntax, OOP, scripting) and practice with small projects.",
    icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
    link: "https://docs.python.org/3/tutorial/",
    glow: "rgba(59,130,246,0.8)", // blue
  },
  {
    step: "Step 2 – Mathematics & Statistics",
    desc: "Linear Algebra, Probability, and Statistics for ML.",
    icon: <BarChart className="w-8 h-8 text-green-400" />,
    link: "https://www.youtube.com/@3blue1brown",
    glow: "rgba(34,197,94,0.8)", // green
  },
  {
    step: "Step 3 – Data Structures & Algorithms",
    desc: "Learn arrays, trees, graphs, DP. Practice on platforms like LeetCode.",
    icon: <Cpu className="w-8 h-8 text-purple-400" />,
    link: "https://leetcode.com/",
    glow: "rgba(168,85,247,0.8)", // purple
  },
  {
    step: "Step 4 – Data Handling",
    desc: "SQL for databases, plus Excel, PowerBI, Tableau for analysis & dashboards.",
    icon: <Database className="w-8 h-8 text-yellow-400" />,
    link: "https://www.sqltutorial.org/",
    glow: "rgba(250,204,21,0.8)", // yellow
  },
  {
    step: "Step 5 – Python for Data Science",
    desc: "Master NumPy, Pandas, Matplotlib, Seaborn for analysis & visualization.",
    icon: <GraduationCap className="w-8 h-8 text-orange-400" />,
    link: "https://www.youtube.com/@krishnaik06",
    glow: "rgba(251,146,60,0.8)", // orange
  },
  {
    step: "Step 6 – Machine Learning",
    desc: "Supervised & Unsupervised algorithms, model evaluation with Scikit-learn.",
    icon: <Cpu className="w-8 h-8 text-red-400" />,
    link: "https://scikit-learn.org/",
    glow: "rgba(239,68,68,0.8)", // red
  },
  {
    step: "Step 7 – Projects",
    desc: "Build real-world projects (prediction, analysis, dashboards). Push to GitHub.",
    icon: <Rocket className="w-8 h-8 text-cyan-400" />,
    link: "https://github.com/NALLURAJ",
    glow: "rgba(34,211,238,0.8)", // cyan
  },
  {
    step: "Step 8 – Advanced Topics",
    desc: "Deep Learning (TensorFlow, PyTorch), NLP, and Computer Vision.",
    icon: <Cpu className="w-8 h-8 text-pink-400" />,
    link: "https://www.tensorflow.org/",
    glow: "rgba(236,72,153,0.8)", // pink
  },
  {
    step: "Step 9 – Soft Skills & Reports",
    desc: "Report writing, research papers, presentations, communication & teamwork.",
    icon: <GraduationCap className="w-8 h-8 text-teal-400" />,
    link: "https://www.investopedia.com/terms/s/soft-skills.asp",
    glow: "rgba(45,212,191,0.8)", // teal
  },
];

  const neonGlow = "rgba(0, 191, 255, 0.9)"; // Neon Cyan/Blue

  return (
    <div className="min-h-screen text-white px-6 py-12">
{/* Section 1: How I Learned */}
<motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-5xl font-extrabold text-center mb-16 
             bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 
             bg-clip-text text-transparent drop-shadow-lg"
>
  How I Learned
</motion.h1>

<div className="space-y-16 max-w-6xl mx-auto mb-24">
  {categories.map((cat, idx) => (
    <div key={idx}>
      <h2 className="text-2xl font-semibold mb-8 text-cyan-300 drop-shadow-md text-center">
        {cat.title}
      </h2>

      {/* Animate grid container */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.2, // delay between boxes
            },
          },
        }}
      >
        {cat.items.map((src, i) => (
          <motion.a
            key={i}
            href={src.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, y: -5 }}
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            animate={{
              boxShadow: [
                `0 0 5px ${neonGlow}`,
                `0 0 20px ${neonGlow}`,
                `0 0 5px ${neonGlow}`,
              ],
            }}
            className="relative p-6 rounded-2xl backdrop-blur-md 
                       bg-gray-900/40 shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-3">
              {src.icon}
              <h3 className="text-xl font-semibold">{src.name}</h3>
            </div>
            <p className="text-gray-300">{src.desc}</p>
          </motion.a>
        ))}
      </motion.div>
    </div>
  ))}
</div>


{/* Section 2: Roadmap Timeline */}
<motion.h1
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-5xl font-extrabold text-center mb-16 
             bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 
             bg-clip-text text-transparent drop-shadow-lg"
>
  Roadmap for Data Science Learners
</motion.h1>

<div className="max-w-4xl mx-auto relative border-l-2 border-cyan-400/40">
  {roadmap.map((item, index) => (
    <motion.a
      key={index}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: index * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 120,
        damping: 15,
      }}
      viewport={{ once: true }}
      className="mb-12 ml-8 block relative"
    >
      {/* Icon with static glow once placed */}
      <motion.span
        initial={{ scale: 0, rotate: -180 }}
        whileInView={{ scale: 1, rotate: 0 }}
        transition={{
          duration: 0.6,
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
        viewport={{ once: true }}
        className="absolute -left-6 flex items-center justify-center 
                   w-12 h-12 bg-gray-900 rounded-full border border-gray-700"
        style={{
          boxShadow: `0 0 15px ${item.glow}, 0 0 30px ${item.glow}`,
        }}
      >
        {item.icon}
      </motion.span>

      {/* Content */}
      <div className="pl-16">
        <h3 className="text-xl font-semibold text-cyan-300 drop-shadow-md">
          {item.step}
        </h3>
        <p className="text-gray-400">{item.desc}</p>
      </div>
    </motion.a>
  ))}
</div>

    </div>
  );
}
