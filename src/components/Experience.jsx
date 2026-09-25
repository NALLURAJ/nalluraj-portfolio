import { experience } from "../data";
import { Reveal, Section } from "./ui";

export default function Experience() {
  return (
    <Section id="experience" label="03 · Experience" title="Professional experience">
      <ol className="relative ml-2 border-l border-line">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.org + job.when} delay={i * 0.1} className="relative mb-10 pl-8 last:mb-0">
            <span className="grad-bg absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full ring-4 ring-bg" />
            <div className="card card-hover p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="flex items-center gap-3 text-xl font-semibold">
                  {job.role}
                  {job.current && (
                    <span className="grad-bg rounded-full px-2.5 py-0.5 text-xs font-medium text-ongrad">Current</span>
                  )}
                </h3>
                <span className="label">{job.when}</span>
              </div>
              <p className="mt-1 text-muted">
                {job.org} · {job.where}
              </p>
              {job.points.length > 0 && (
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-3">
                    <span className="grad-bg mt-2 h-1.5 w-1.5 shrink-0 rounded-full" />
                    {pt}
                  </li>
                ))}
              </ul>
              )}
            </div>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
