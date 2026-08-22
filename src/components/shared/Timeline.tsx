"use client";

import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export interface TimelineItem {
    title: string;
    /** Company or institution, rendered next to the role. */
    org?: string;
    /** Time period, e.g. "Dec 2025 – Present". */
    period: string;
    location?: string;
    description: string;
    /** Short bullet points — the part recruiters actually scan. */
    highlights?: string[];
    /** Tech chips shown at the bottom of the card. */
    tags?: string[];
    type: "work" | "education";
    /** Renders a live dot on the node and a "Current" badge. */
    current?: boolean;
}

interface TimelineProps {
    items: TimelineItem[];
    title?: string;
    /** Small label above the heading, e.g. "Where I've worked". */
    eyebrow?: string;
}

export function Timeline({ items, title = "Timeline", eyebrow }: TimelineProps) {
    return (
        <section className="mx-auto w-full max-w-3xl px-4">
            <div className="mb-10">
                {eyebrow && (
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                        {eyebrow}
                    </p>
                )}
                <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">{title}</h2>
            </div>

            <div className="relative">
                {/* Rail: fades out at the bottom so the list doesn't end on a hard stop. */}
                <div
                    aria-hidden
                    className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-brand/50 via-border to-transparent"
                />

                <ol className="space-y-8">
                    {items.map((item, idx) => {
                        const Icon = item.type === "work" ? Briefcase : GraduationCap;

                        return (
                            <motion.li
                                key={`${item.title}-${item.period}`}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: idx * 0.08 }}
                                className="relative pl-12"
                            >
                                <span
                                    className={[
                                        "absolute left-0 top-1 flex size-8 items-center justify-center rounded-full border bg-card",
                                        item.current
                                            ? "border-brand/60 text-brand pulse-ring"
                                            : "border-border text-muted-foreground",
                                    ].join(" ")}
                                >
                                    <Icon className="size-4" />
                                </span>

                                <div className="group rounded-xl border border-border bg-card/70 p-5 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md">
                                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                                        <h3 className="text-base font-semibold text-foreground sm:text-lg">
                                            {item.title}
                                        </h3>
                                        {item.org && (
                                            <span className="text-base font-medium text-brand sm:text-lg">
                                                @ {item.org}
                                            </span>
                                        )}
                                        {item.current && (
                                            <Badge className="ml-auto bg-brand-subtle text-accent-foreground">
                                                Current
                                            </Badge>
                                        )}
                                    </div>

                                    <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                                        <span className="font-mono text-xs tracking-tight">{item.period}</span>
                                        {item.location && (
                                            <span className="inline-flex items-center gap-1">
                                                <MapPin className="size-3" />
                                                {item.location}
                                            </span>
                                        )}
                                    </div>

                                    <p className="mt-3 text-sm leading-relaxed text-foreground/90">
                                        {item.description}
                                    </p>

                                    {item.highlights && item.highlights.length > 0 && (
                                        <ul className="mt-3 space-y-1.5">
                                            {item.highlights.map((highlight) => (
                                                <li
                                                    key={highlight}
                                                    className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                                                >
                                                    <span
                                                        aria-hidden
                                                        className="mt-[0.5em] size-1 shrink-0 rounded-full bg-brand/70"
                                                    />
                                                    {highlight}
                                                </li>
                                            ))}
                                        </ul>
                                    )}

                                    {item.tags && item.tags.length > 0 && (
                                        <div className="mt-4 flex flex-wrap gap-1.5">
                                            {item.tags.map((tag) => (
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
                            </motion.li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}
