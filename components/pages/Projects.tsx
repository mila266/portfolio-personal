"use client";

import { PROJECTS } from "@/data/projects";
import ProjectImage from "@/components/ui/ProjectImage";
import StackIcon from "@/components/ui/StackIcon";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Reveal from "../ui/Reveal";
import Card from "../ui/Card";

export default function Projects() {

    return (
        <section id="proyectos" className="py-20">
            <Section>
                <Reveal>
                    <Heading command="ls ./projects" title="Proyectos y Colaboraciones" />
                </Reveal>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {PROJECTS.map((project, index) => (
                        <Reveal key={project.title} delay={index * 100} className="h-full">

                            <Card as="article" key={project.title} padding="none" hover="lift" fullHeight className="overflow-hidden flex flex-col">
                                <div className="relative aspect-video bg-neutral-800">
                                    <ProjectImage
                                        images={project.images}
                                        title={project.title}
                                        priority={index === 0}
                                    />
                                </div>

                                <div className="p-5 flex flex-col flex-1">
                                    <h3 className="font-semibold mb-2">{project.title}</h3>
                                    {project.isCollaboration && (
                                        <span className="text-xs font-mono px-2 py-0.5 rounded-full border border-emerald-400/40 text-emerald-400 mr-auto mt-2 mb-2">
                                            Colaboración
                                        </span>
                                    )}
                                    <p className="text-sm text-neutral-400 mb-4">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <StackIcon key={tag} tag={tag} />
                                        ))}
                                    </div>

                                    <div className="mt-auto flex gap-2">
                                        {
                                            project.demoUrl && (
                                                <a href={project.demoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm border border-emerald-400/40 text-emerald-400 rounded px-3 py-1.5 hover:bg-emerald-400/10"
                                                >
                                                    Demo
                                                </a>
                                            )
                                        }
                                        {
                                            project.repoUrl && (
                                                <a href={project.repoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-sm border border-neutral-800 text-neutral-300 rounded px-3 py-1.5 hover:bg-neutral-800"
                                                >
                                                    Repo
                                                </a>
                                            )
                                        }
                                    </div>
                                </div>
                            </Card>
                        </Reveal>
                    ))}
                </div>
                {
                    PROJECTS.length === 0 && (
                        <p className="text-center text-neutral-500 py-10 font-mono text-sm">
                            No hay proyectos.
                        </p>
                    )
                }
            </Section>
        </section >
    );
}