import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { ProjectCard, type ProjectCardProps } from "@/components/shared/ProjectCard";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Selected projects by Jonas Hermsen — web applications and templates built with Next.js, Tailwind CSS and friends.",
};

const projects: ProjectCardProps[] = [
    {
        title: "Landing Page for Small Businesses",
        description:
            "A customizable landing page template for small businesses, with sections for services, testimonials and contact — ready to adapt and ship.",
        image: "/images/kmu-example.png",
        href: "/projects/kmu-template",
        tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    },
];

export default function Page() {
    return (
        <div className="flex flex-1 flex-col">
            <SiteHeader title="Projects" />

            <main className="px-4 py-16 md:py-24">
                <header className="mx-auto max-w-3xl text-center">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                        Work
                    </p>
                    <h1 className="text-3xl font-bold sm:text-4xl">Projects</h1>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        Things I have built or helped build. Some of them are live — check the
                        <span className="text-foreground"> Try it out </span>
                        section in the sidebar for interactive demos.
                    </p>
                </header>

                <div className="mx-auto mt-14 max-w-5xl">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project) => (
                            <ProjectCard key={project.href} {...project} />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
