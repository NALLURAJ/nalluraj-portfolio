// src/components/DynamicBackgroundDark.jsx
import { motion } from "framer-motion";

export default function DynamicBackgroundDark() {
  const trails = Array.from({ length: 20 }); // fewer, but brighter & thicker

  return (
    <div className="absolute top-20 left-20 w-40 h-40 bg-white z-50">
      {trails.map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[4px] rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${150 + Math.random() * 200}px`, // longer
            background: `linear-gradient(90deg,
              rgba(255,255,255,0) 0%,
              rgba(255,255,255,0.9) 30%,
              rgba(0,191,255,0.9) 60%,
              rgba(138,43,226,0.8) 100%)`,
            boxShadow: "0 0 25px rgba(0,191,255,0.9), 0 0 50px rgba(138,43,226,0.8)", // neon outer glow
            filter: "blur(0.5px)",
          }}
          animate={{
            x: [0, -400, 0],
            y: [0, Math.random() * 100 - 50, 0], // diagonal drift
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
