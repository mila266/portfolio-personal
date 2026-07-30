import { StackTag } from "./stacks";

export type Project = {
  title: string;
  description: string;
  images: string[];
  tags: StackTag[];
  demoUrl?: string;
  repoUrl?: string;
  isCollaboration?: boolean;
};

export const PROJECTS: Project[] = [
  {
    title: "SARA — Plataforma Accesible de Emergencia",
    description:
      "Plataforma que facilita comunicación, ayuda y rescate en situaciones críticas para personas con discapacidad, con alertas SOS, mapa de refugios accesibles y red de voluntarios.",
    images: ["/projects/sara.png"],
    tags: ["React", "Next.js", "TypeScript", "PostgreSQL"],
    isCollaboration: true,
    repoUrl: "",
  },
  {
    title: "DentalAPP",
    description:
      "Plataforma odontológica para reservar citas de pacientes y gestionar horarios, personal y categorías de los servicios odontológicos.",
    images: ["/projects/app-dental-user-login.png","/projects/app-dental-personal-login.png"],
    tags: ["React", "Node.js", "TypeScript", "Firebase"],
    isCollaboration: false,
    demoUrl: "https://dentalapp-orpin.vercel.app/personal-login",
  },
  {
    title: "Personal Portafolio Page",
    description:
      "Landing page optimizada con arquitectura de componentes reutilizables, diseño responsivo y optimización SEO.",
    images: ["/projects/Portafolio-personal.png"],
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    isCollaboration: false,
    demoUrl: "",
  }
];