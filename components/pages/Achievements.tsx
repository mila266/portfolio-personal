import { ACHIEVEMENTS } from "@/data/achievements";
import { Trophy, Calendar, CheckCircle2 } from "lucide-react";
import Section from "../ui/Section";

export default function Achievements() {
  return (
    <section id="logros" className="py-20">
      <Section>
        <p className="font-mono text-sm text-emerald-400 mb-2">
          $ git log --achievements
        </p>
        <h2 className="text-3xl font-bold mb-8">Actividades y logros</h2>

        <ol className="relative pl-8 space-y-8">
          <span className="absolute left-3 top-2 bottom-2 w-px bg-neutral-800" />

          {ACHIEVEMENTS.map((item) => (
            <li key={item.title} className="relative">
              <span className="absolute -left-8 top-1 w-6 h-6 rounded-full border border-emerald-400/40 bg-neutral-950 flex items-center justify-center text-emerald-400">
                <Trophy className="w-3 h-3" aria-hidden="true" />
              </span>

              <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs text-emerald-400/70">
                    <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                    {item.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-2.5 py-0.5 font-mono text-xs text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" aria-hidden="true" />
                    {item.result}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-neutral-400 mb-4">
                  {item.description}
                </p>

                <ul className="flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded border border-neutral-800 px-2 py-0.5 font-mono text-xs text-neutral-400"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Section>
    </section>
  );
}