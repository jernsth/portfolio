import * as React from "react";
import Image from "next/image";

import { Card } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

const skills = [
    {
        title: "React",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
        title: "Next.js",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    },
    {
        title: "TypeScript",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    },
    {
        title: "Node.js",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
        title: "Docker",
        logo: "/images/moby-logo.png",
    },
    {
        title: "Git",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    },
    {
        title: "Prometheus",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Prometheus_logo.svg",
    },
    {
        title: "Python",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    }
];

export default function Skills() {
    return (
        <section className="max-w-3xl mx-auto mt-16 px-4 text-center">
            <h2 className="text-2xl font-semibold text-primary">Skills</h2>
            <Carousel className="w-full max-w-xs mx-auto mt-8">
                <CarouselContent className="gap-x-1"> {/* optional spacing between items */}
                    {skills.map((skill, index) => (
                        <CarouselItem key={index} className="basis-1/2">
                            <div className="p-2">
                                <Card className="min-h-38 flex flex-col items-center justify-center p-2 shadow-sm space-y-2">
                                    <Image
                                        src={skill.logo}
                                        alt={`${skill.title} logo`}
                                        width={64}
                                        height={64}
                                        className="object-contain"
                                    />
                                    <span className="text-base font-medium">{skill.title}</span>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </section>
    );
}