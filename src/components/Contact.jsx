import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import resume from "../assets/resume.pdf";
import { profile } from "../data";
import { Reveal } from "./ui";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-page px-5 py-20 md:px-8 md:py-28">
      <Reveal className="relative overflow-hidden rounded-[2rem] p-[1.5px] grad-bg">
        <div className="relative rounded-[calc(2rem-1.5px)] bg-surface/95 px-6 py-14 text-center backdrop-blur md:px-16 md:py-20">
          <p className="label mb-4">
            <span className="grad-text">05 · Contact</span>
          </p>
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Let&rsquo;s <span className="grad-text">connect</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-muted">
            I&rsquo;m open to data analytics, data engineering and data science co-op opportunities. Email is the best way to reach me.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <Mail size={16} /> Email me
            </a>
            <button onClick={copy} className="btn-ghost">
              {copied ? <Check size={16} /> : <Copy size={16} />}
              {copied ? "Copied" : profile.email}
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1">
              LinkedIn <ArrowUpRight size={14} />
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1">
              GitHub <ArrowUpRight size={14} />
            </a>
            <a href={resume} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1">
              Résumé (PDF) <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
