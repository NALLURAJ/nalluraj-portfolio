import { motion, useScroll, useSpring } from "framer-motion";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import { Background } from "./components/ui";
import { profile } from "./data";

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <>
      <motion.div style={{ scaleX: progress }} className="grad-bg fixed inset-x-0 top-0 z-[60] h-[2px] origin-left" />
      <Background />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Skills />
        <Contact />
      </main>

      <footer className="mx-auto flex max-w-page flex-wrap items-center justify-between gap-3 px-5 pb-10 text-sm text-muted md:px-8">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a href="#top" className="link-underline">
          Back to top ↑
        </a>
      </footer>
    </>
  );
}
