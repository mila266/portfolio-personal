import { useState } from "react";
import { type EducationEntry } from "@/data/education";
import { GraduationCap } from "lucide-react";

export function InstitutionLogo({ entry }: { entry: EducationEntry }) {
  const [error, setError] = useState(false);

  if (!entry.logo || error) {
    return (
      <div className="w-9 h-9 rounded-md bg-neutral-800 flex items-center justify-center text-neutral-500 shrink-0">
        <GraduationCap className="w-4 h-4" />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={entry.logo}
      alt={`Logo de ${entry.institution}`}
      className="w-9 h-9 rounded-md object-contain bg-white/5 p-1 shrink-0"
      onError={() => setError(true)}
    />
  );
}