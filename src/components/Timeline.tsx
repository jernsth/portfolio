// components/Timeline.tsx

import { Briefcase, GraduationCap } from "lucide-react";

export interface TimelineItem {
    title: string;
    subtitle: string;
    description: string;
    date: string;
    type: "work" | "education";
}

interface TimelineProps {
    items: TimelineItem[];
    title?: string;
}

export function Timeline({ items, title = "Timeline" }: TimelineProps) {
    return (
        <section className="max-w-3xl mx-auto mt-16 px-4 text-center">
            <h2 className="text-2xl font-semibold text-primary mb-8">{title}</h2>
            <div className="relative border-l-2 border-border pl-6 space-y-10 text-left">
                {items.map((item, idx) => {
                    const Icon = item.type === "work" ? Briefcase : GraduationCap;

                    return (
                        <div key={idx} className="relative">
              <span
                  className="absolute -left-[40px] bg-background text-primary p-1 rounded-full border border-border">
                <Icon className="w-5 h-5"/>
              </span>
                            <div>
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
                                <p className="mt-1 text-base text-foreground">{item.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}