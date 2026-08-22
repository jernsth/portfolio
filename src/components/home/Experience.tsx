"use client";

import { Timeline, TimelineItem } from "@/components/shared/Timeline";

const experienceItems: TimelineItem[] = [
    {
        title: "Backend Developer",
        org: "m3connect GmbH",
        period: "Dec 2025 – Present",
        description:
            "Building and running the microservice landscape behind m3connect's connectivity platform, with Java and Spring Boot at its core.",
        highlights: [
            "Implement and extend services across a distributed Spring Boot architecture.",
            "Own maintenance, debugging and support for those services once they are in production.",
            "Work close to the infrastructure layer — containerised deployments and service-to-service communication.",
        ],
        tags: ["Java", "Spring Boot", "Microservices", "REST", "Docker"],
        type: "work",
        current: true,
    },
    {
        title: "Fullstack Developer - Working Student",
        org: "m3connect GmbH",
        period: "Dec 2024 – Dec 2025",
        description:
            "Delivered scalable web applications end to end — including an in-house 5G core and the web UI that operates it.",
        highlights: [
            "Built an in-house 5G core and a custom web UI to configure and control it.",
            "Developed React and Next.js frontends against Node.js services.",
            "Moved between frontend and backend depending on where the product needed the work.",
        ],
        tags: ["React", "Next.js", "TypeScript", "Node.js", "5G Core"],
        type: "work",
    },
    {
        title: "Network Specialist - Working Student",
        org: "m3connect GmbH",
        period: "Jun 2020 – Dec 2024",
        description:
            "Kept large network and system environments running — the operational grounding that still shapes how I build backends today.",
        highlights: [
            "Maintained and supported large-scale networks and systems in daily operation.",
            "Handled troubleshooting across the stack, from physical connectivity up to the services on top.",
            "Developed the instinct for availability and failure modes that I now design for from the start.",
        ],
        tags: ["Networking", "Systems", "Troubleshooting", "Support"],
        type: "work",
    },
];

export default function Experience() {
    return <Timeline items={experienceItems} title="Experience" eyebrow="Career" />;
}
