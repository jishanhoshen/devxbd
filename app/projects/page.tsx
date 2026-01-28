'use client';

import AnimatedContent from "@/components/animated-content";
import SectionTitle from "@/components/section-title";
import { FolderGit2Icon, ExternalLinkIcon } from "lucide-react";

export default function Page() {
    const projects = [
        {
            title: "E-Commerce Web Application",
            description: "A full-stack e-commerce platform with product management, cart, checkout, and admin dashboard.",
            tech: ["React", "Laravel", "MySQL"],
            link: "#"
        },
        {
            title: "ERP & Accounting System",
            description: "Multi-tenant ERP system with accounting modules, ledgers, reports, and role-based access control.",
            tech: ["Laravel", "React", "Redux"],
            link: "#"
        },
        {
            title: "Real-Time Chat Application",
            description: "Real-time messaging system with authentication, notifications, and live updates.",
            tech: ["Node.js", "Socket.IO", "Redis"],
            link: "#"
        },
        {
            title: "Portfolio & Business Websites",
            description: "Modern, responsive websites for personal brands and small businesses.",
            tech: ["Next.js", "Tailwind CSS"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-7xl mx-auto py-32">
                {/* Section Title */}
                <SectionTitle
                    icon={FolderGit2Icon}
                    title="Projects"
                    subtitle="A selection of projects I’ve worked on, showcasing real-world solutions and clean architecture."
                />

                {/* Projects Grid */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <AnimatedContent
                            key={index}
                            delay={index * 0.1}
                            className="p-6 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
                        >
                            <h3 className="text-lg font-semibold text-zinc-900">
                                {project.title}
                            </h3>

                            <p className="mt-2 text-zinc-600">
                                {project.description}
                            </p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tech.map((item, i) => (
                                    <span
                                        key={i}
                                        className="text-xs px-3 py-1 rounded-full bg-orange-50 text-orange-600 border border-orange-200"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            {/* Project Link */}
                            <a
                                href={project.link}
                                className="inline-flex items-center gap-2 mt-6 text-orange-500 font-medium hover:underline"
                            >
                                View Project
                                <ExternalLinkIcon size={16} />
                            </a>
                        </AnimatedContent>
                    ))}
                </div>
            </div>
        </section>
    );
}
