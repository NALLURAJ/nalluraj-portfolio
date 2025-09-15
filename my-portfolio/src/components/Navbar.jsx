// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Folder,
  Cpu,
  Award,
  BookOpen,
  FileText,
  Mail,
} from "lucide-react";
import profilePic from "../assets/profile.jpg";
import githubLogo from "../assets/github.png";
import leetcodeLogo from "../assets/leetcode.png";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/", icon: Home },
    { name: "About", path: "/about", icon: User },
    { name: "Projects", path: "/projects", icon: Folder },
    { name: "Skills", path: "/skills", icon: Cpu },
    { name: "Certifications", path: "/certifications", icon: Award },
    { name: "Blog", path: "/blog", icon: BookOpen },
    { name: "Resume", path: "/resume", icon: FileText },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <div className="relative h-screen w-screen flex overflow-hidden dark:bg-gray-900 dark:text-white">
      {/* Sidebar */}
      <motion.aside
        animate={{ width: sidebarOpen ? 256 : 80 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
        className="fixed top-0 left-0 h-full bg-blue-950/90 dark:bg-gray-800/90 backdrop-blur-md
                   border-r border-blue-900/50 dark:border-gray-700 shadow-xl flex flex-col z-20"
      >
       {/* Profile (hidden when collapsed) */}
<AnimatePresence>
  {sidebarOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center px-4 py-6"
    >
      <img
        src={profilePic}
        alt="Nalluraj"
        className="w-20 h-20 rounded-full border-2 border-blue-400 shadow-lg mb-4 object-cover"
      />
      <h1
        className="text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 
                   bg-clip-text text-transparent drop-shadow-md"
      >
        Nalluraj
      </h1>
      <p className="mt-1 text-sm font-medium text-blue-200/90 dark:text-gray-300 italic">
        Aspiring Data Scientist
      </p>
    </motion.div>
  )}
</AnimatePresence>


        {/* Nav Links (spread evenly with flex-1) */}
        <nav className="flex-1 flex flex-col justify-evenly px-2">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            const Icon = link.icon;
            return (
              <motion.div
                key={link.name}
                whileHover={{ x: 5 }}
                className="relative"
              >
                <Link
                  to={link.path}
                  className={`group flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-blue-700/40 text-blue-300 font-medium border-l-4 border-blue-400 shadow-[0_0_15px_rgba(0,191,255,0.8)]"
                      : "text-blue-200/80 hover:bg-blue-800/40 hover:text-white dark:hover:bg-gray-700"
                  }`}
                >
                  <Icon
                    className={`${
                      sidebarOpen ? "w-5 h-5" : "w-7 h-7"
                    } transition-all duration-300`}
                  />
                  <AnimatePresence>
                    {sidebarOpen && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {link.name}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Footer Widgets (always visible toggle) */}
        <div className="px-4 py-6 space-y-3">
          {sidebarOpen && (
            <>
              <a
                href="https://github.com/NALLURAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-900/50 dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-blue-800/80 dark:hover:bg-gray-600 transition"
              >
                <img src={githubLogo} alt="GitHub" className="w-6 h-6 rounded-full" />
                <span className="text-blue-200 dark:text-gray-300 text-sm">GitHub</span>
              </a>
              <a
                href="https://leetcode.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-900/50 dark:bg-gray-700 rounded-full p-2 shadow-md hover:bg-blue-800/80 dark:hover:bg-gray-600 transition"
              >
                <img src={leetcodeLogo} alt="LeetCode" className="w-6 h-6 rounded-full" />
                <span className="text-blue-200 dark:text-gray-300 text-sm">LeetCode</span>
              </a>
            </>
          )}

          {/* Theme Toggle - always visible */}
          <div className="flex justify-center">
            <ThemeToggle collapsed={!sidebarOpen} />

          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main
        className={`relative z-10 flex-1 overflow-y-auto 
        bg-gradient-to-br from-blue-950/80 via-blue-900/80 to-blue-950/80
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        text-white transition-all duration-500 ease-in-out ${
          sidebarOpen ? "ml-64" : "ml-20"
        }`}
      >
        {/* Toggle Button */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute top-4 left-4 bg-blue-800/70 dark:bg-gray-700 hover:bg-blue-700 dark:hover:bg-gray-600 p-2 rounded-full shadow-md border border-blue-600 dark:border-gray-500 z-30 transition-all"
        >
          {sidebarOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
        </button>

        <div className="p-6 lg:p-8">{children}</div>
      </main>
    </div>
  );
}
