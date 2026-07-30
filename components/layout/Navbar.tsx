"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/nav";
import { useActiveSection } from "@/hooks/activeSection";

export default function Navbar() {
  const active = useActiveSection(NAV_ITEMS.map((i) => i.id));
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 items-center gap-1 rounded-full border border-neutral-800 bg-neutral-950/70 backdrop-blur-md px-2 py-2 font-mono text-sm">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavigate(item.id)}
            className={`rounded-full px-3 py-1.5 transition-colors ${
              active === item.id
                ? "bg-emerald-400 text-neutral-950"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="md:hidden fixed top-0 inset-x-0 z-50 flex items-center justify-between px-4 py-3 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <span className="font-mono text-sm text-emerald-400">~/{active}</span>
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Abrir menú"
          className="w-9 h-9 rounded-md border border-neutral-800 flex items-center justify-center text-neutral-200"
        >
          <Menu className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-neutral-950/98 backdrop-blur-sm flex flex-col p-6">
          <div className="flex justify-between items-center mb-8">
            <span className="font-mono text-sm text-neutral-500">./menu.sh</span>
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar menú"
              className="w-9 h-9 rounded-md border border-neutral-800 flex items-center justify-center text-neutral-200"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <nav className="flex flex-col gap-2 font-mono">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-left px-4 py-3 rounded-lg transition-colors ${
                  active === item.id
                    ? "bg-emerald-400/10 text-emerald-400"
                    : "text-neutral-300 hover:bg-neutral-900"
                }`}
              >
                <span className="text-neutral-600 mr-2">$</span>
                cd ~/{item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}