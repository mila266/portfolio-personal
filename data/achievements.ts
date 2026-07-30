export type Achievement = {
  title: string;
  date: string;
  result: string;
  description: string;
  tags: string[];
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    title: "Hackathon Latam 48h",
    date: "2024",
    result: "2° lugar · 80+ equipos",
    description:
      "Lideré un equipo de 4 desarrollando una plataforma de donaciones para refugios de animales en 48 horas.",
    tags: ["Laravel", "React", "PostgreSQL"],
  },
  {
    title: "Concurso Universitario de Software Libre",
    date: "2023",
    result: "1er lugar · Categoría accesibilidad",
    description:
      "Desarrollamos una herramienta educativa accesible para estudiantes con discapacidad visual.",
    tags: ["React", "TypeScript", "Node.js"],
  },
];