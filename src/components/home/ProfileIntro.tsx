"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SocialsIntro } from "./SocialsIntro";

const rise = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
};

const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

export function ProfileIntro() {
    return (
        <motion.section
            variants={container}
            initial="hidden"
            animate="show"
            className="brand-glow relative mx-auto flex w-full max-w-3xl flex-col items-center gap-8 px-4 text-center md:flex-row md:items-center md:gap-10 md:text-left"
        >
            <motion.div
                variants={rise}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative size-32 shrink-0 sm:size-36"
            >
                <div className="relative size-full overflow-hidden rounded-full border border-border ring-4 ring-brand/15">
                    <Image
                        src="/images/profile_picture.jpeg"
                        alt="Jonas Hermsen"
                        fill
                        sizes="144px"
                        priority
                        className="object-cover"
                    />
                </div>
            </motion.div>

            <div className="flex flex-col items-center md:items-start">
                <motion.h1
                    variants={rise}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-wrap items-center justify-center gap-x-2 text-3xl font-bold sm:text-4xl md:justify-start"
                >
                    <span>Hi, I am</span>
                    <span className="text-gradient-brand">Jonas</span>
                    <span className="wave-hover origin-bottom-right">👋</span>
                </motion.h1>

                <motion.p
                    variants={rise}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mt-2 text-base font-medium text-brand sm:text-lg"
                >
                    Backend Developer &amp; Cybersecurity Enthusiast
                </motion.p>

                <motion.p
                    variants={rise}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
                >
                    I build and run backend systems — Java, Spring Boot and microservices — and I
                    care just as much about what happens to them in production as about the code
                    itself. Currently at m3connect in Aachen while finishing my CS degree at RWTH.
                </motion.p>

                <motion.div
                    variants={rise}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground"
                >
                    <MapPin className="size-4 text-brand" />
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.google.com/maps/@50.7761163,6.0836072,14.5z"
                        className="transition-colors hover:text-foreground"
                    >
                        Aachen, Germany
                    </a>
                </motion.div>

                <motion.div
                    variants={rise}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mt-6 flex flex-wrap items-center justify-center gap-3 md:justify-start"
                >
                    <Button
                        asChild
                        className="group bg-brand text-brand-foreground hover:bg-brand/90"
                    >
                        <Link href="/projects">
                            View Projects
                            <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline">
                        <a href="mailto:jonashermsen@gmx.de">Get in touch</a>
                    </Button>
                    <SocialsIntro />
                </motion.div>
            </div>
        </motion.section>
    );
}
