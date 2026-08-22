import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface ProjectCardProps {
    title: string;
    description: string;
    image: string;
    href: string;
    tags?: string[];
}

export function ProjectCard({ title, description, image, href, tags }: ProjectCardProps) {
    return (
        <Link
            href={href}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card/70 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
        >
            <div className="relative aspect-16/10 overflow-hidden border-b border-border bg-muted">
                <Image
                    src={image}
                    alt={`${title} preview`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-foreground">{title}</h3>
                    <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                </div>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {description}
                </p>

                {tags && tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                        {tags.map((tag) => (
                            <Badge
                                key={tag}
                                variant="secondary"
                                className="font-normal text-muted-foreground"
                            >
                                {tag}
                            </Badge>
                        ))}
                    </div>
                )}
            </div>
        </Link>
    );
}
