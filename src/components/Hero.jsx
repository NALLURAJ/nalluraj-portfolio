import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import photo from "../assets/profile.jpg";
import { profile } from "../data";

const ease = [0.2, 0.8, 0.2, 1];

export default function Hero() {
  return (
    <section id="top" className="relative mx-auto max-w-page px-5 pb-10 pt-32 md:px-8 md:pb-16 md:pt-40">
      <div className="grid items-center gap-12 md:grid-cols-[1.35fr_1fr]">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3.5 py-1.5 text-xs text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.status}
            <span className="text-line">|</span>
            <MapPin size={12} /> {profile.location}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
          >
            {profile.name.split(" ")[0]} <span className="grad-text">{profile.name.split(" ")[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease }}
            className="mt-4 font-display text-2xl font-medium text-ink/80 md:text-3xl"
          >
            {profile.role}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease }}
            className="mt-6 max-w-2xl text-xl leading-relaxed text-muted"
          >
            {profile.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="mt-9 flex flex-wrap gap-3"
          >
            <a href="#work" className="btn-primary">
              View projects <ArrowDown size={16} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="btn-ghost">
              GitHub <ArrowUpRight size={16} />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease }}
          className="relative mx-auto w-64 sm:w-72 md:w-full md:max-w-sm"
        >
          {/* rotating gradient ring */}
          <div className="absolute -inset-3 rounded-[2.2rem] opacity-80 blur-xl grad-bg" />
          <div className="relative rounded-[2rem] p-[3px] grad-bg">
            <img
              src={photo}
              alt="Nalluraj Babu"
              className="aspect-[4/5] w-full rounded-[1.85rem] object-cover"
            />
          </div>
        </motion.div>
      </div>

    </section>
  );
}
