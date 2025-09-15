// src/pages/Contact.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import githubLogo from "../assets/github.png";
import linkedinLogo from "../assets/linkedin.png";
import gmailLogo from "../assets/gmail.png";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const response = await fetch("https://formspree.io/f/xeoldkdk", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

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
        Let’s Connect
      </motion.h1>

      {/* Layout Split */}
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left → Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative p-8 rounded-2xl backdrop-blur-md 
                     bg-gray-900/40 border border-cyan-400/30 shadow-lg 
                     flex flex-col gap-4"
          style={{
            boxShadow: "0 0 20px rgba(34,211,238,0.5), 0 0 40px rgba(34,211,238,0.3)",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white 
                       border border-gray-600 focus:outline-none 
                       focus:ring-2 focus:ring-cyan-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white 
                       border border-gray-600 focus:outline-none 
                       focus:ring-2 focus:ring-cyan-400"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white 
                       border border-gray-600 focus:outline-none 
                       focus:ring-2 focus:ring-cyan-400"
            required
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 
                       hover:from-cyan-600 hover:to-blue-600 text-white 
                       font-semibold py-3 px-6 rounded-md transition duration-300"
          >
            Send Message
          </motion.button>

          {/* Status */}
          {status === "success" && (
            <p className="mt-2 text-green-400 font-medium">
               Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="mt-2 text-red-400 font-medium">
               Something went wrong. Try again.
            </p>
          )}
        </motion.form>

        {/* Right → Info + Socials */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center items-center text-center gap-8"
        >
          <h2 className="text-2xl font-semibold text-cyan-300 drop-shadow-md">
            Connect With Me
          </h2>
          <p className="text-gray-400 max-w-md">
            I’m always open to collaborations, internships, or just a friendly
            chat about data science, Python, and tech.  
            Let’s build something meaningful together!
          </p>

          <div className="flex gap-6">
            {/* GitHub */}
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="https://github.com/NALLURAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full 
                         bg-gradient-to-br from-gray-800 to-gray-700 shadow-md"
              style={{
                boxShadow: "0 0 15px rgba(255,255,255,0.2)",
              }}
            >
              <img
                src={githubLogo}
                alt="GitHub"
                className="w-8 h-8 object-contain"
              />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href="https://www.linkedin.com/in/247221244/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-full 
                         bg-gradient-to-br from-blue-600 to-blue-500 shadow-md"
              style={{
                boxShadow: "0 0 20px rgba(59,130,246,0.6)",
              }}
            >
              <img
                src={linkedinLogo}
                alt="LinkedIn"
                className="w-8 h-8 object-contain"
              />
            </motion.a>

            {/* Gmail */}
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="mailto:your-email@example.com"
              className="w-14 h-14 flex items-center justify-center rounded-full 
                         bg-gradient-to-br from-red-600 to-red-500 shadow-md"
              style={{
                boxShadow: "0 0 20px rgba(239,68,68,0.6)",
              }}
            >
              <img
                src={gmailLogo}
                alt="Gmail"
                className="w-8 h-8 object-contain"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
