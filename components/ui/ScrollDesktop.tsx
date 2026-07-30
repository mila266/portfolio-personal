"use client";

import { NAV_ITEMS } from "@/data/nav";
import { useActiveSection } from "@/hooks/activeSection";

export default function ScrollDesktop() {
  const active = useActiveSection(NAV_ITEMS.map((i) => i.id));

  const handleNavigate = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
      {NAV_ITEMS.map((item) => {
        const isActive = active === item.id;
        return (
          <button
            key={item.id}
            onClick={() => handleNavigate(item.id)}
            aria-label={`Ir a ${item.label}`}
            className="group flex items-center justify-end"
          >
            <span className="mr-2 max-w-0 group-hover:max-w-[120px] overflow-hidden whitespace-nowrap text-xs font-mono text-neutral-400 transition-all duration-300">
              {item.label}
            </span>
            <span
              className={`w-2.5 h-2.5 rounded-full border transition-all ${
                isActive
                  ? "bg-emerald-400 border-emerald-400 scale-125"
                  : "bg-transparent border-neutral-600 group-hover:border-neutral-400"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}