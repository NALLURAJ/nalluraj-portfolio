// src/components/DynamicBackground.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function DynamicBackground() {
  const [isDark, setIsDark] = useState(false);

  // 🔹 Detect theme mode
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => observer.disconnect();
  }, []);

  const blocks = Array.from({ length: 7 });

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Gradient Blobs → visible in both themes */}
      <motion.div
        className="absolute w-[28rem] h-[28rem] rounded-full blur-[120px] bg-purple-400/30"
        animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "20%", left: "10%" }}
      />
      <motion.div
        className="absolute w-[24rem] h-[24rem] rounded-full blur-[120px] bg-blue-400/30"
        animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "60%", left: "65%" }}
      />

      {/* Floating Glowing Blocks → visible in both themes */}
      {blocks.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-28 h-28 rounded-xl"
          style={{
            top: `${Math.random() * 75}%`,
            left: `${Math.random() * 75}%`,
            backgroundColor: isDark
              ? "rgba(0, 0, 0, 0.3)" // dark background for neon effect
              : "rgba(59,130,246,0.2)", // light blue glass for light mode
            boxShadow: isDark
              ? `
                0 0 30px rgba(0,255,255,0.9),
                0 0 60px rgba(255,0,255,0.7),
                0 0 100px rgba(0,150,255,0.6)
              `
              : "0 0 20px rgba(59,130,246,0.4)",
          }}
          animate={{
            x: [0, Math.random() * 80 - 40, 0],
            y: [0, Math.random() * 80 - 40, 0],
            scale: [1, 1.1, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 10 + Math.random() * 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
