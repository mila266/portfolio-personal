import { LucideIcon, Boxes, Code2, Server, Database, Accessibility, Award, GraduationCap } from "lucide-react";
import { MdSecurity } from "react-icons/md";

export type Certification = {
  title: string;
  institution: string;
  date: string;
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
  credentialUrl?: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Programa: No-Code Builders",
    institution: "Inspira Tech",
    date: "Jul 2026",
    icon: Code2,
    credentialUrl: undefined,
  },
   {
    title: "Fundamentos de ISO 27001: sistema de gestión de seguridad de la información",
    institution: "UNI CTIC - PIT",
    date: "Jun 2026",
    icon: MdSecurity,
    credentialUrl: undefined,
  },
  {
    title: "Python Essentials 1",
    institution: "Cisco Networking Academy",
    date: "May 2026",
    icon: Code2,
    credentialUrl: "https://www.credly.com/badges/600cda4b-b34a-4bc2-924b-e39ee65e4882/public_url",
  },
  {
    title: "Hult Prize UPN 2026",
    institution: "Hult Prize Foundation",
    date: "Feb 2026",
    icon: Award,
    credentialUrl: undefined,
  },
  {
    title: "C Essentials 1",
    institution: "Cisco Networking Academy",
    date: "Oct 2025",
    icon: Code2,
    credentialUrl: "https://www.credly.com/badges/9864e47f-9dd7-4238-9cd9-47ade28dae58/public_url",
  },
  {
    title: "Introduction to Cybersecurity",
    institution: "Cisco Networking Academy",
    date: "2023",
    icon: MdSecurity,
    credentialUrl: "https://www.credly.com/badges/2ae1af5f-c619-4168-ba8c-a074abcf8037/public_url",
  }
  

];

export { Award };