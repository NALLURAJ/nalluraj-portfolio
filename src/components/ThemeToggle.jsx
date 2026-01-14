// src/components/ThemeToggle.jsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ collapsed = false }) {
  // ✅ Default to dark mode ON first load
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // width of container – knob size – padding
  const knobTravel = collapsed ? 16 : 32;

  return (
    <motion.button
      onClick={() => setDarkMode(!darkMode)}
      className={`relative ${collapsed ? "w-12 h-6" : "w-16 h-8"}
        flex items-center rounded-full p-1 transition-colors
        ${darkMode ? "bg-indigo-600" : "bg-cyan-400"}`}
    >
      {/* Sliding knob */}
      <motion.div
        animate={{ x: darkMode ? knobTravel : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`${
          collapsed ? "w-5 h-5" : "w-6 h-6"
        } rounded-full bg-white shadow-md flex items-center justify-center`}
      >
        {darkMode ? (
          <Moon className={`${collapsed ? "w-3 h-3" : "w-4 h-4"} text-indigo-700`} />
        ) : (
          <Sun className={`${collapsed ? "w-3 h-3" : "w-4 h-4"} text-yellow-500`} />
        )}
      </motion.div>
    </motion.button>
  );
}
 