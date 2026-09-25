import { GraduationCap } from "lucide-react";
import { about, education, focus } from "../data";
import { Reveal, Section } from "./ui";

export default function About() {
  return (
    <Section id="about" label="01 · About" title="Profile">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5 text-lg leading-relaxed text-muted">
          {about.map((p, i) => (
            <Reveal key={i} as="p" delay={i * 0.1}>
              {p}
            </Reveal>
          ))}
        </div>

        <div className="space-y-4">
          {education.map((e, i) => (
            <Reveal key={e.school} delay={0.1 + i * 0.1} className="card card-hover p-5">
              <div className="flex items-start gap-4">
                <div className="grad-bg flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-ongrad">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <p className="label">{e.when}</p>
                  <h3 className="mt-1 font-semibold">{e.school}</h3>
                  <p className="text-sm text-muted">{e.degree}</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted">{e.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {focus.map((f, i) => (
          <Reveal key={f.title} delay={i * 0.1} className="card card-hover relative overflow-hidden p-7">
            <span className="font-display text-5xl font-semibold text-line">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 text-xl font-semibold">{f.title}</h3>
            <p className="mt-2 leading-relaxed text-muted">{f.text}</p>
            <span className="grad-bg absolute inset-x-0 bottom-0 h-[3px] opacity-70" />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
