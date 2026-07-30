import { CERTIFICATIONS } from "@/data/certifications";
import { ExternalLink, Award, Link2Off } from "lucide-react";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Card from "../ui/Card";
import Reveal from "../ui/Reveal";

export default function Certifications() {
    return (
        <section id="certificaciones" className="py-20 border-y border-neutral-800 bg-neutral-900/20">
            <Section>
                <Reveal>
                    <Heading command="ls ./certs" title="Certificaciones" />
                </Reveal>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {CERTIFICATIONS.map((cert, index) => {
                        const Icon = cert.icon ?? Award;

                        const cardContent = (
                            <Reveal delay={index * 100} className="h-full">
                                <Card padding="sm" hover="lift" clickable fullHeight>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center text-emerald-400">
                                            <Icon className="w-5 h-5" aria-hidden="true" />
                                        </span>
                                        {cert.credentialUrl ? (
                                            <ExternalLink className="w-4 h-4 text-neutral-500" aria-hidden="true" />
                                        ) : (
                                            <Link2Off className="w-4 h-4 text-neutral-500" aria-hidden="true" />
                                        )}
                                    </div>
                                    <h3 className="font-semibold mb-1">{cert.title}</h3>
                                    <p className="text-sm text-neutral-400">{cert.institution}</p>
                                    <p className="mt-auto pt-4 font-mono text-xs text-emerald-400/70">
                                        {cert.date}
                                    </p>
                                </Card>
                            </Reveal>
                        );

                        return cert.credentialUrl ? (

                            <a key={cert.title}
                                href={cert.credentialUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Ver certificado de ${cert.title} (abre en nueva pestaña)`}
                                className="block h-full"
                            >
                                {cardContent}
                            </a>
                        ) : (
                            <div key={cert.title}>{cardContent}</div>
                        );
                    })}
                </div>
            </Section>
        </section>
    );
}