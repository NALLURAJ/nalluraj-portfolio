import { Github, Linkedin, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative max-w-5xl mx-auto mt-16 px-6">
      <div
        className="relative rounded-2xl bg-blue-950/40 backdrop-blur-md 
                   border border-blue-800/50 shadow-lg overflow-hidden"
      >
        {/* Glowing Top Border */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r 
                        from-blue-400 via-cyan-400 to-teal-400 blur-sm"></div>

        {/* Content */}
        <div className="px-6 py-8 text-center space-y-6">
          {/* Social Links */}
          <div className="flex justify-center gap-8">
            <a
              href="https://github.com/NALLURAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Github className="w-6 h-6 text-blue-400 hover:text-white" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Linkedin className="w-6 h-6 text-cyan-400 hover:text-white" />
            </a>
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform"
            >
              <Code className="w-6 h-6 text-yellow-400 hover:text-white" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
              Nalluraj Babu
            </span>{" "}
            | All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
