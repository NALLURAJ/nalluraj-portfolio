import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Award } from "lucide-react";
import { credentials, skills } from "../data";
import { Reveal, Section } from "./ui";

const ease = [0.2, 0.8, 0.2, 1];
const everything = skills.flatMap((g) => g.items);

// two bands of every tool, drifting in opposite directions
function Marquee() {
  const half = Math.ceil(everything.length / 2);
  const rows = [everything.slice(0, half), everything.slice(half)];
  return (
    <div className="marquee-mask relative -mx-5 mb-16 space-y-3 overflow-hidden md:-mx-8">
      {rows.map((row, r) => (
        <div key={r} className="marquee-track" style={{ animationDirection: r ? "reverse" : "normal" }}>
          {[...row, ...row].map((item, i) => (
            <span key={i} className="flex items-center gap-6 pr-6 font-display text-3xl font-semibold md:text-5xl">
              <span className={i % 3 === 1 ? "grad-text" : "text-ink/15"}>{item}</span>
              <span className="grad-bg h-2 w-2 rounded-full opacity-60" />
            </span>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState(0);
  const g = skills[active];

  return (
    <Section id="skills" label="04 · Skills" title="Technical skills">
      <Marquee />

      <div className="grid gap-8 md:grid-cols-[20rem_1fr] md:gap-12">
        {/* group list */}
        <Reveal as="ul" className="border-t border-line">
          {skills.map((s, i) => (
            <li key={s.group} className="relative border-b border-line">
              <span
                className={`grad-bg absolute bottom-[-1px] left-0 h-[2px] transition-all duration-700 ${
                  active === i ? "w-full" : "w-0"
                }`}
              />
              <button
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className="group flex w-full items-baseline gap-4 py-4 text-left"
              >
                <span
                  className={`font-display text-2xl font-semibold transition-colors duration-500 ${
                    active === i ? "grad-text" : "text-line group-hover:text-muted"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`flex-1 text-lg font-medium transition-all duration-500 ${
                    active === i ? "translate-x-1 text-ink" : "text-muted group-hover:text-ink"
                  }`}
                >
                  {s.group}
                </span>
                <span className="label">{s.items.length}</span>
              </button>
            </li>
          ))}
        </Reveal>

        {/* active group */}
        <Reveal className="card relative min-h-[18rem] overflow-hidden p-8 md:p-10">
          <div className="grad-bg pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-20 blur-3xl" />
          <AnimatePresence mode="wait">
            <motion.span
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease }}
              aria-hidden
              className="pointer-events-none absolute -bottom-10 right-4 select-none font-display text-[10rem] font-semibold leading-none text-ink/[0.05] md:text-[13rem]"
            >
              {String(active + 1).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={g.group}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease }}
              className="relative"
            >
              <p className="label">
                <span className="grad-text">{String(active + 1).padStart(2, "0")}</span> / {String(skills.length).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-display text-3xl font-semibold tracking-tight md:text-4xl">{g.group}</h3>
              <p className="mt-3 max-w-xl text-muted">{g.blurb}</p>

              <motion.div
                initial="hidden"
                animate="show"
                variants={{ show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } } }}
                className="mt-8 flex flex-wrap gap-2.5"
              >
                {g.items.map((item) => (
                  <motion.span
                    key={item}
                    variants={{
                      hidden: { opacity: 0, y: 10, scale: 0.95 },
                      show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease } },
                    }}
                    className="skill-pill"
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>

      <Reveal className="mt-16">
        <p className="label mb-5">Certifications & recognition</p>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-3">
        {credentials.map((c, i) => {
          const body = (
            <>
              <div className="grad-bg flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-ongrad">
                <Award size={18} />
              </div>
              <div className="min-w-0">
                <h3 className="flex items-center gap-1 font-semibold">
                  {c.title} {c.link && <ArrowUpRight size={14} className="shrink-0 text-muted" />}
                </h3>
                <p className="text-sm text-muted">{c.by}</p>
              </div>
            </>
          );
          return (
            <Reveal key={c.title} delay={i * 0.08}>
              {c.link ? (
                <a href={c.link} target="_blank" rel="noreferrer" className="card card-hover flex h-full gap-4 p-5">
                  {body}
                </a>
              ) : (
                <div className="card flex h-full gap-4 p-5">{body}</div>
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
