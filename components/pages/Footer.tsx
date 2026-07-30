"use client";
import { ArrowUp } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Footer() {
    const year = new Date().getFullYear();
    const handleNavigate = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <footer className="border-t border-neutral-800 py-10">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
                <div className="flex items-center gap-2 font-mono text-sm text-neutral-400">
                    <span>© {year} {PROFILE.nameComplete}. Todos los derechos reservados.</span>
                </div>
                <button
                    onClick={() => handleNavigate('inicio')}
                    className="inline-flex items-center gap-2 font-mono text-sm text-neutral-400 hover:text-neutral-300 transition-colors"
                >
                    $ cd ~
                    <ArrowUp className="w-4 h-4 text-emerald-400" aria-hidden="true" />
                </button>
            </div>
        </footer >
    );
}