import { GraduationCap, Accessibility, Sparkles, Mail } from "lucide-react";
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'

export const PROFILE = {
  name: "Milagros Cáceres",
  nickname: "milacaceres",
  nameComplete: "Milagros Nancy Cáceres Anculle",
  role: "Full Stack Developer",
  focus: "Implementación de IA · Desarrollo de software · Gestión de proyectos",
  location: "Lima · Perú",
  shortBio: "Full Stack Developer con 3+ años de experiencia. Ahora enfocada en IA y gestión de proyectos.",
  bio: "Soy Milagros Cáceres, estudiante de Ingeniería de Sistemas Computacionales en la UPN y desarrolladora Full Stack con más de 3 años de experiencia construyendo aplicaciones web reales: PHP, Laravel, CodeIgniter, JavaScript y React. He desarrollado y mantenido sistemas empresariales completos, incluyendo gestión de módulos, dominios y plataformas; me interesa la implementación de IA en productos reales y la gestión de proyectos. Busco seguir construyendo software que resuelva problemas reales, sin perder de vista a las personas que lo van a usar.",
  avatar: "/foto.jpg",
  skills: [
    "PHP · Laravel · CodeIgniter",
    "JavaScript · TypeScript · React",
    "PostgreSQL · MySQL",
  ],
  email: "milagros.ncaceres.a@gmail.com",
  github: "https://github.com/mila266",
  linkedin: "https://www.linkedin.com/in/milagros-caceres-anculle",
};

export const SOCIALS = [
  { href: PROFILE.github, icon: SiGithub, label: "GitHub" },
  { href: PROFILE.linkedin, icon: FaLinkedin, label: "LinkedIn" },
  { href: `mailto:${PROFILE.email}`, icon: Mail, label: "Email" },
];

export const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    label: "Ingeniería de Sistemas",
    text: "Formación en algoritmia, bases de datos y arquitectura de software.",
  },
  {
    icon: Accessibility,
    label: "Accesibilidad primero",
    text: "WCAG AA y navegación por teclado como base, no como extra.",
  },
  {
    icon: Sparkles,
    label: "Soluciones de principio a fin",
    text: "Del modelo de datos al frontend, con la misma atención al detalle.",
  },
];
