import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
    title: "Landing Page for Small Businesses",
    description:
        "A customizable Next.js and Tailwind CSS landing page template for small businesses.",
};

const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"];

export default function Page() {
    return (
        <div className="flex min-h-screen flex-col">
            <SiteHeader title="Landing Page for Small Businesses" />

            <main className="px-4 py-16 md:py-24">
                <div className="mx-auto max-w-3xl">
                    <Link
                        href="/projects"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-brand"
                    >
                        <ArrowLeft className="size-4" />
                        Back to projects
                    </Link>

                    <p className="mt-8 mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                        Project
                    </p>
                    <h1 className="text-3xl font-bold sm:text-4xl">
                        Your Digital Start &mdash; Simplified
                    </h1>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                        {stack.map((tech) => (
                            <Badge
                                key={tech}
                                variant="secondary"
                                className="font-normal text-muted-foreground"
                            >
                                {tech}
                            </Badge>
                        ))}
                    </div>

                    <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                        I built a customizable landing page for small businesses with Next.js and
                        Tailwind CSS. The template adapts easily to different businesses and ships
                        with the sections that actually matter — services, testimonials and a
                        contact form — so a company can get online without a full custom build.
                    </p>

                    <div className="mt-8">
                        <Button asChild className="bg-brand text-brand-foreground hover:bg-brand/90">
                            <a
                                href="https://kmu-template.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View live demo
                                <ExternalLink />
                            </a>
                        </Button>
                    </div>

                    <div className="mt-12 overflow-hidden rounded-xl border border-border shadow-sm">
                        <Image
                            src="/images/kmu-example.png"
                            alt="Screenshot of the small business landing page template"
                            width={1200}
                            height={750}
                            className="h-auto w-full object-cover"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}
