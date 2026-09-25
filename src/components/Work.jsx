import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, FileText, Plus } from "lucide-react";
import { projects } from "../data";
import { Reveal, Section } from "./ui";

const tabs = ["All", "Analytics", "Data Engineering", "ML & Research"];
const ease = [0.2, 0.8, 0.2, 1];

function Detail({ p }) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.45, ease }}
      className="overflow-hidden"
    >
      <div className="grid gap-8 pb-10 pt-2 md:grid-cols-3 md:pl-24">
        <div>
          <p className="label mb-3">The problem</p>
          <p className="leading-relaxed text-muted">{p.problem}</p>
        </div>
        <div>
          <p className="label mb-3">What I built</p>
          <p className="leading-relaxed text-muted">{p.approach}</p>
        </div>
        <div>
          <p className="label mb-3">Results</p>
          <ul className="space-y-3">
            {p.results.map((r) => (
              <li key={r} className="flex gap-3 leading-relaxed">
                <span className="grad-bg mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full" />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 md:col-span-3">
          <div className="flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
          <div className="flex gap-3">
            {p.link && (
              <a href={p.link} target="_blank" rel="noreferrer" className="btn-ghost !py-2">
                View code <ArrowUpRight size={15} />
              </a>
            )}
            {p.paper && (
              <a href={p.paper} target="_blank" rel="noreferrer" className="btn-ghost !py-2">
                Read paper <FileText size={15} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function Row({ p, index, open, onToggle }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <motion.li
      layout="position"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease }}
      className="group relative border-b border-line"
    >
      {/* gradient line that sweeps in on hover / when open */}
      <span
        className={`grad-bg absolute bottom-[-1px] left-0 h-[2px] transition-all duration-700 ${
          open ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />

      <button
        onClick={onToggle}
        aria-expanded={open}
        className="grid w-full grid-cols-[3.5rem_1fr_auto] items-center gap-4 py-7 text-left md:grid-cols-[5rem_1fr_19rem_3rem] md:gap-6"
      >
        <span
          className={`font-display text-3xl font-semibold transition-colors duration-500 md:text-5xl ${
            open ? "grad-text" : "text-line group-hover:text-muted"
          }`}
        >
          {num}
        </span>

        <span className="min-w-0">
          <span className="block font-display text-2xl font-semibold tracking-tight transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">
            {p.title}
          </span>
          <span className="mt-1 block text-muted">{p.subtitle}</span>
        </span>

        <span className="hidden text-right md:block">
          <span className="label block">{p.category}</span>
          {(p.team || p.year) && (
            <span className="mt-1 block text-sm text-muted">
              {[p.team, p.year].filter(Boolean).join(" · ")}
            </span>
          )}
        </span>

        <span
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-500 ${
            open ? "grad-bg rotate-45 border-transparent text-ongrad" : "border-line group-hover:border-g2/60"
          }`}
        >
          <Plus size={18} />
        </span>
      </button>

      <AnimatePresence initial={false}>{open && <Detail p={p} />}</AnimatePresence>
    </motion.li>
  );
}

export default function Work() {
  const [tab, setTab] = useState("All");
  const [openTitle, setOpenTitle] = useState(projects[0].title);
  const list = projects.filter((p) => tab === "All" || p.category === tab);

  return (
    <Section id="work" label="02 · Work" title="Selected projects">
      <Reveal className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative rounded-full px-4 py-1.5 text-sm transition-colors ${
                tab === t ? "text-ongrad" : "border border-line text-muted hover:text-ink"
              }`}
            >
              {tab === t && (
                <motion.span
                  layoutId="tab-pill"
                  className="grad-bg absolute inset-0 -z-10 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {t}
            </button>
          ))}
        </div>
        <p className="label">
          {list.length} project{list.length === 1 ? "" : "s"} · click a row to expand
        </p>
      </Reveal>

      <ul className="border-t border-line">
        <AnimatePresence mode="popLayout" initial={false}>
          {list.map((p, i) => (
            <Row
              key={p.title}
              p={p}
              index={i}
              open={openTitle === p.title}
              onToggle={() => setOpenTitle((cur) => (cur === p.title ? null : p.title))}
            />
          ))}
        </AnimatePresence>
      </ul>
    </Section>
  );
}
