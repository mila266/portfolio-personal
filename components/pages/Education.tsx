"use client";

import { EDUCATION, type EducationEntry } from "@/data/education";
import StackIcon from "@/components/ui/StackIcon";
import { InstitutionLogo } from '../ui/InstitutionLogo'
import Section from "../ui/Section";
import SoftSkillIcon from "../ui/SkillIcon";
import Heading from "../ui/Heading";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";

export default function Education() {
  const groupedByYear = EDUCATION.reduce<Record<string, EducationEntry[]>>(
    (acc, entry) => {
      if (!acc[entry.year]) acc[entry.year] = [];
      acc[entry.year].push(entry);
      return acc;
    },
    {}
  );

  const years = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <section id="educacion" className="py-20">
      <Section>
        <Reveal>
          <Heading command="cat education-and-experiences.log" title="Educación y Experiencia" />
        </Reveal>
        <div className="space-y-10">
          {years.map((year, index) => (
            <Reveal key={year} delay={index * 100}>
              <div>
                <span className="inline-block mb-4 rounded-md border border-neutral-700 px-3 py-1 font-mono text-sm font-bold">
                  {year}
                </span>

                <div className="space-y-4">
                  {groupedByYear[year].map((entry) => (
                    <Card key={entry.institution + entry.role} clickable padding="sm" hover="border">
                      <div className="flex items-start gap-3 mb-3">
                        <InstitutionLogo entry={entry} />

                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-baseline justify-between gap-2">
                            <h3 className="font-semibold text-lg">{entry.institution}</h3>
                            <span className="font-mono text-xs text-neutral-400">
                              {entry.period}
                            </span>
                          </div>
                          <p className="text-emerald-400 text-sm">{entry.role}</p>
                        </div>
                      </div>

                      <p className="text-neutral-400 text-sm mb-4">
                        {entry.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {entry.tags.map((tag) => (
                          <StackIcon key={tag} tag={tag} />
                        ))}
                        {entry.softSkills?.map((skill) => (
                          <SoftSkillIcon key={skill} skill={skill} />
                        ))}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </section>
  );
}