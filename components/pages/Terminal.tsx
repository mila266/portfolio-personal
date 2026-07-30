"use client";

import { useEffect, useState } from "react";
import { PROFILE } from "@/data/profile";

type Line =
    | { type: "command"; text: string }
    | { type: "output"; text: string }
    | { type: "list"; items: string[] };

const SEQUENCE: Line[] = [
    { type: "command", text: "whoami" },
    { type: "output", text: PROFILE.role },
    { type: "command", text: "cat about.txt" },
    { type: "output", text: PROFILE.shortBio },
    { type: "command", text: "cat skills.txt" },
    { type: "list", items: PROFILE.skills },
    { type: "command", text: "./run_portfolio.sh" },
    { type: "output", text: "Portafolio cargado correctamente." },
];

const TYPE_SPEED = 35;

export default function Terminal() {
    const [visibleLines, setVisibleLines] = useState<Line[]>([]);
    const [typingText, setTypingText] = useState("");

    const handleNavigate = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        let cancelled = false;

        async function playSequence() {
            for (const line of SEQUENCE) {
                if (cancelled) return;

                if (line.type === "list") {
                    setVisibleLines((prev) => [...prev, line]);
                    await sleep(300);
                    continue;
                }

                for (let i = 0; i <= line.text.length; i++) {
                    if (cancelled) return;
                    setTypingText(line.text.slice(0, i));
                    await sleep(TYPE_SPEED);
                }

                setVisibleLines((prev) => [...prev, line]);
                setTypingText("");
                await sleep(200);
            }
        }

        playSequence();
        return () => {
            cancelled = true;
        };
    }, []);

    return (
        <section id="inicio" className="relative pt-24 pb-16 px-4">

            <div className="grid-bg absolute inset-0 pointer-events-none" />

            <div className="relative max-w-2xl mx-auto text-center">
                <span className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs font-mono text-neutral-400 mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {PROFILE.location}
                </span>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-10">
                    {PROFILE.name}
                </h1>

                <div className="text-left rounded-xl border border-neutral-800 bg-black/80 shadow-2xl overflow-hidden">
                    <div className="flex items-center gap-2 border-b border-neutral-800 bg-neutral-900/50 px-4 py-3">
                        <span className="w-3 h-3 rounded-full bg-red-500" />
                        <span className="w-3 h-3 rounded-full bg-yellow-500" />
                        <span className="w-3 h-3 rounded-full bg-green-500" />
                        <span className="ml-3 font-mono text-xs text-neutral-500">
                            {PROFILE.nickname.toLowerCase().replace(" ", "")}@dev — zsh — 80×24
                        </span>
                    </div>

                    <div className="p-5 font-mono text-sm space-y-1.5 min-h-[260px]">
                        {visibleLines.map((line, i) => (
                            <LineDisplay key={i} line={line} />
                        ))}

                        {typingText !== null && (
                            <p className="text-emerald-400">
                                {typingText}
                                <span className="animate-pulse">▋</span>
                            </p>
                        )}
                    </div>
                </div>

                <button
                    onClick={() => handleNavigate('sobre-mi')}
                    className="inline-block mt-10 font-mono text-xs text-neutral-400 hover:text-neutral-300 cursor-pointer"
                >
                    $ scroll down ↓
                </button>
            </div>
        </section>
    );
}

function LineDisplay({ line }: { line: Line }) {
    if (line.type === "command") {
        return (
            <p className="text-neutral-100">
                <span className="text-neutral-500">$ </span>
                {line.text}
            </p>
        );
    }
    if (line.type === "output") {
        return <p className="text-emerald-400 pl-4">{line.text}</p>;
    }
    return (
        <ul className="pl-4 space-y-1">
            {line.items.map((item, i) => (
                <li key={i} className="text-emerald-400/90">
                    <span className="text-neutral-500">› </span>
                    {item}
                </li>
            ))}
        </ul>
    );
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}