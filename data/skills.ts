import { Crown, UsersRound, Workflow, Timer, ShieldCheck } from "lucide-react";
import { StackTag } from "./stacks";

export type StackCategory = "Lenguaje" | "Frontend" | "Backend" | "Base de datos";

export type SoftSkill =
  | "Liderazgo"
  | "Gestión de equipo"
  | "Coordinación operativa"
  | "Trabajo bajo presión"
  | "Cumplimiento de protocolos";

export type StackItem = {
  name: StackTag;
  category: StackCategory;
};

export const STACK: StackItem[] = [
  { name: "PHP", category: "Lenguaje" },
  { name: "JavaScript", category: "Lenguaje" },
  { name: "TypeScript", category: "Lenguaje" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Laravel", category: "Backend" },
  { name: "CodeIgniter", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "PostgreSQL", category: "Base de datos" },
  { name: "MySQL", category: "Base de datos" },
  { name: "Supabase", category: "Base de datos" },
];

export const SOFT_SKILL_ICONS: Record<SoftSkill, React.ComponentType<{ className?: string }>> = {
  Liderazgo: Crown,
  "Gestión de equipo": UsersRound,
  "Coordinación operativa": Workflow,
  "Trabajo bajo presión": Timer,
  "Cumplimiento de protocolos": ShieldCheck,
};