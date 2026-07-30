import Image from "next/image";
import { PROFILE, SOCIALS } from "@/data/profile";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Reveal from "../ui/Reveal";

export default function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-20 py-20">
      <Section>
        <Reveal>
          <Heading command="cat about.txt" title="" />
        </Reveal>
        <Reveal>
          <div className="grid sm:grid-cols-[220px_1fr] gap-8 items-start">
            <div className="relative w-full aspect-[4/5] sm:aspect-square rounded-2xl overflow-hidden border border-neutral-800">
              <Image
                src={PROFILE.avatar}
                alt={`Foto de ${PROFILE.name}`}
                fill
                sizes="220px"
                className="object-cover"
                preload
                fetchPriority="high"
              />
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
                {PROFILE.name}
              </h2>
              <p className="text-neutral-400 mb-4">{PROFILE.focus}</p>

              <div className="flex items-center gap-2 mb-6">
                {SOCIALS.map((s) => (

                  <a key={s.label}
                    href={s.href}
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-full border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-emerald-400 hover:border-emerald-400/40 transition-colors"
                  >
                    <s.icon className="w-4 h-4" aria-hidden="true" />
                  </a>
                ))}
              </div>

              <p className="text-neutral-300 leading-relaxed max-w-3xl">
                {PROFILE.bio}
              </p>
            </div>
          </div>
        </Reveal>
      </Section>
    </section>
  );
}