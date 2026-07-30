import { Code2, Layout, Server, Database } from "lucide-react";
import { STACK, type StackCategory } from "@/data/skills";
import StackIcon from "@/components/ui/StackIcon";
import Heading from "../ui/Heading";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";

const CATEGORY_META: Record<StackCategory, { icon: typeof Code2; label: string }> = {
  Lenguaje: { icon: Code2, label: "Lenguajes" },
  Frontend: { icon: Layout, label: "Frontend" },
  Backend: { icon: Server, label: "Backend" },
  "Base de datos": { icon: Database, label: "Bases de datos" },
};

const CATEGORY_ORDER: StackCategory[] = ["Lenguaje", "Frontend", "Backend", "Base de datos"];

export default function TechSkills() {
  const grouped = CATEGORY_ORDER.map((category) => ({
    category,
    items: STACK.filter((s) => s.category === category),
  })).filter((g) => g.items.length > 0);

  return (
    <section id="skills" className="scroll-mt-20 py-20 px-4 border-y border-neutral-800 bg-neutral-900/20">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <Heading command="ls --stack" title="Stack técnico" />
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          {grouped.map((group, index) => {
            const meta = CATEGORY_META[group.category];
            return (
              <Reveal key={group.category} delay={index * 100} className="h-full">
                <Card
                  padding="md" clickable hover="lift">

                  <div className="flex items-center gap-2 mb-5">
                    <span className="w-9 h-9 rounded-md bg-neutral-800 flex items-center justify-center text-emerald-400">
                      <meta.icon className="w-4 h-4" />
                    </span>
                    <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-neutral-400">
                      {meta.label}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <StackIcon key={item.name} tag={item.name} />
                    ))}
                  </div>

                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}