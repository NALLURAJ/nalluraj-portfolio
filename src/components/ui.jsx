import { motion } from "framer-motion";

// fade + lift in when scrolled into view, once
export function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </Tag>
  );
}

export function Section({ id, label, title, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-page px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <p className="label mb-3">
          <span className="grad-text">{label}</span>
        </p>
        <h2 className="section-title mb-12">{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}

export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="blob h-[46vw] w-[46vw] -left-[12vw] -top-[10vw]"
        style={{ background: "rgb(var(--blob-a))", animation: "drift-a 26s ease-in-out infinite" }}
      />
      <div
        className="blob h-[40vw] w-[40vw] -right-[10vw] top-[20vh]"
        style={{ background: "rgb(var(--blob-b))", animation: "drift-b 32s ease-in-out infinite" }}
      />
      <div
        className="blob h-[36vw] w-[36vw] left-[25vw] top-[70vh]"
        style={{ background: "rgb(var(--blob-c))", animation: "drift-c 38s ease-in-out infinite" }}
      />
    </div>
  );
}
