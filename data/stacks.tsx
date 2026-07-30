import {
  SiPhp,
  SiLaravel,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiNextdotjs,
  SiFirebase,
  SiSupabase,
  SiAndroidstudio,
  SiWordpress,
  SiTailwindcss
} from "react-icons/si";
import { Code2 } from "lucide-react";

export type StackTag =
  | "Laravel"
  | "React"
  | "Node.js"
  | "Next.js"
  | "PHP"
  | "CodeIgniter"
  | "TypeScript"
  | "PostgreSQL"
  | "MySQL"
  | "Express"
  | "JavaScript"
  | "Supabase"
  | "Wordpress"
  | "Tailwind"
  | "Android Studio"
  | "Firebase";

export const STACK_ICONS: Record<StackTag, React.ComponentType<{ className?: string }>> = {
  PHP: SiPhp,
  Laravel: SiLaravel,
  CodeIgniter: Code2, 
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Node.js": SiNodedotjs,
  "Next.js": SiNextdotjs,
  Express: SiExpress,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  Firebase: SiFirebase,
  Supabase: SiSupabase,
  Wordpress: SiWordpress,
  Tailwind: SiTailwindcss,
  "Android Studio": SiAndroidstudio,
};

