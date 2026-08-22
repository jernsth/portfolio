import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { Dumbbell, Goal } from "lucide-react";

export const metadata: Metadata = {
    title: "About Me",
    description:
        "A bit about Jonas Hermsen beyond the CV — football, Schalke 04 and the gym.",
};

const sections = [
    {
        icon: Goal,
        title: "Football",
        body: (
            <>
                One of my greatest passions is football. I&rsquo;ve been playing the game since I
                could walk — and I still do, with varying degrees of success, for a local club.
                <br />
                I&rsquo;m also a proud supporter of{" "}
                <span className="animate-gradient bg-gradient-to-r from-blue-700 via-sky-500 to-blue-400 bg-clip-text font-extrabold text-transparent">
                    FC Schalke 04
                </span>
                , the legendary club from Gelsenkirchen, Germany.
            </>
        ),
    },
    {
        icon: Dumbbell,
        title: "Fitness",
        body: (
            <>
                While I may not be a complete fitness fanatic, I do enjoy staying active — which
                means I spend my fair share of time in the gym. In my opinion, it is still the best
                way to wind down after a stressful day or week.
            </>
        ),
    },
];

export default function Page() {
    return (
        <div className="flex flex-1 flex-col">
            <SiteHeader title="About Me" />

            <main className="px-4 py-16 md:py-24">
                <header className="mx-auto max-w-2xl text-center">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                        Off the clock
                    </p>
                    <h1 className="text-3xl font-bold sm:text-4xl">Who am I?</h1>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                        If you&rsquo;ve made it this far, chances are you&rsquo;re curious not just
                        about my professional path — but about the person behind it. So here is the
                        shorter, less formal version.
                    </p>
                </header>

                <div className="mx-auto mt-14 grid max-w-3xl gap-6 sm:grid-cols-2">
                    {sections.map(({ icon: Icon, title, body }) => (
                        <section
                            key={title}
                            className="rounded-xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md"
                        >
                            <span className="flex size-10 items-center justify-center rounded-lg bg-brand-subtle text-accent-foreground">
                                <Icon className="size-5" />
                            </span>
                            <h2 className="mt-4 text-xl font-semibold">{title}</h2>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {body}
                            </p>
                        </section>
                    ))}
                </div>
            </main>
        </div>
    );
}
