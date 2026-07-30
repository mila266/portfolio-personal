"use client";

import { Mail } from "lucide-react";
import { SiGithub } from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { PROFILE } from "@/data/profile";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Reveal from "../ui/Reveal";

export default function Contact() {

    return (
        <section id="contacto" className="py-20 border-t border-neutral-800 bg-neutral-900/20">
            <Section>
                <Reveal>
                    <Heading
                        command="./contact"
                        title="Contacto"
                        description="¿Tienes un proyecto o una idea? Escríbeme ."
                    />
                </Reveal>

                <div className="grid md:grid-cols-3 gap-4">
                    <Reveal>
                        <a
                            href={`mailto:${PROFILE.email}`}
                            className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 hover:border-emerald-400/40 transition-colors"
                        >
                            <span className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-emerald-400">
                                <Mail className="w-5 h-5" aria-hidden="true" />
                            </span>
                            <div>
                                <p className="font-mono text-xs text-neutral-400">email</p>
                                <p className="text-sm font-medium">{PROFILE.email}</p>
                            </div>
                        </a>
                    </Reveal><Reveal>
                        <a
                            href={PROFILE.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 hover:border-emerald-400/40 transition-colors"
                        >
                            <span className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-emerald-400">
                                <SiGithub className="w-5 h-5" aria-hidden="true" />
                            </span>
                            <div>
                                <p className="font-mono text-xs text-neutral-400">github</p>
                                <p className="text-sm font-medium">{PROFILE.github.replace("https://github.com/", "/")}</p>
                            </div>
                        </a>
                    </Reveal><Reveal>
                        <a
                            href={PROFILE.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 rounded-xl border border-neutral-800 bg-neutral-900/40 p-4 hover:border-emerald-400/40 transition-colors"
                        >
                            <span className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-emerald-400">
                                <FaLinkedin className="w-5 h-5" aria-hidden="true" />
                            </span>
                            <div>
                                <p className="font-mono text-xs text-neutral-400">linkedin</p>
                                <p className="text-sm font-medium">{PROFILE.linkedin.replace("https://www.linkedin.com/in/", "/")}</p>
                            </div>
                        </a></Reveal>
                </div>
            </Section>

        </section >
    );
}