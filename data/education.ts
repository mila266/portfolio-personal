import { type StackTag } from "./stacks";
import { SoftSkill } from "./skills";

export type EducationEntry = {
    year: string;
    institution: string;
    role: string;
    period: string;
    description: string;
    tags: StackTag[];
    softSkills?: SoftSkill[];
    logo?: string;
};

export const EDUCATION: EducationEntry[] = [
    {
        year: "2023",
        institution: "Universidad Privada del Norte (UPN)",
        role: "Ingeniería de Sistemas Computacionales",
        period: "2023 – actualidad",
        description:
            "Estudiante de ciclos superiores con formación en algoritmia, estructuras de datos, modelado de software y gestión de bases de datos. Preparada para el diseño y optimización de soluciones tecnológicas eficientes.",
        tags: [],
        logo: "/logos/upn.svg",
    },
    {
        year: "2023",
        institution: "Instituto de Formación Empresarial y Extensión Profesional",
        role: "Programadora Web Full Stack / Soporte TI",
        period: "Ene 2023 – Dic 2025",
        description:
            "Desarrollo y mantenimiento de páginas web y módulos empresariales. Gestión de dominios, hosting y plataformas. Elaboración de documentación técnica y apoyo en la supervisión de practicantes.",
        tags: ["PHP", "JavaScript", "CodeIgniter", "MySQL", "Wordpress"],
        logo: "/logos/ifeep.svg",
    },
    {
        year: "2022",
        institution: "Oficina Nacional de Procesos Electorales (ONPE)",
        role: "Coordinadora de Local de Votación",
        period: "Sept – Oct 2022",
        description:
            "Gestioné un equipo durante las elecciones municipales, asignando responsabilidades, supervisión directa del personal a cargo y resolución de imprevistos en tiempo real, garantizando el cumplimiento de los protocolos establecidos.",
        tags: [],
        softSkills: ["Gestión de equipo", "Coordinación operativa", "Cumplimiento de protocolos", "Trabajo bajo presión"],
        logo: "/logos/onpe.svg",
    },
    {
        year: "2022",
        institution: "FAP ESMAR (Escuela de Supervisores en el Mar)",
        role: "Prácticas Preprofesionales",
        period: "Set 2022 – Dic 2022",
        description:
            "Prácticas preprofesionales exigidas por el IESTPFFAA (módulos 1 y 2): gestión y soporte de tecnologías de la información y comunicación, y desarrollo de software con gestión de bases de datos.",
        tags: ["PHP", "MySQL", "JavaScript"],
        logo: "/logos/esmar.svg",
    },
    {
        year: "2022",
        institution: "Fuerza Aérea del Perú ESMAR — Departamento de Comunicaciones",
        role: "Apoyo Administrativo",
        period: "Dic 2021 – Jun 2022",
        description:
            "Apoyo administrativo en el Departamento de Comunicaciones durante mi servicio.",
        tags: [],
        logo: "/logos/esmar.svg",
    },
    {
        year: "2019",
        institution: "IESTPFFAA - Instituto Fuerzas Armadas",
        role: "Egresada, Computación e Informática",
        period: "Ago 2019 – Dic 2022",
        description:
            "Formación técnica enfocada en desarrollo web, soporte informático y gestión de sistemas. Base sólida en programación que respalda mi capacidad para implementar soluciones digitales prácticas y eficientes.",
        tags: ["PHP", "JavaScript", "MySQL", "Android Studio"],
        logo: "/logos/iestpffaa.svg",
    },
];