"use client";

// components/ExperienceEducation.tsx
import { Timeline, TimelineItem } from "@/components/shared/Timeline";
import {motion} from "framer-motion";

const experienceItems: TimelineItem[] = [
    {
        title: "Backend Developer – m3connect GmbH",
        subtitle: "December 2025 – present",
        description: "Building scalable web applications using React, Next.js and Node.js. Currently the lead developer of a WebUI project for a 5G-Core.",
        date: "2024",
        type: "work",
    },
    {
        title: "Fullstack Developer – m3connect GmbH",
        subtitle: "December 2024 – December 2025",
        description: "Building scalable web applications using React, Next.js and Node.js. Currently the lead developer of a WebUI project for a 5G-Core.",
        date: "2024",
        type: "work",
    },
    {
        title: "Network Specialist",
        subtitle: "June 2020 – December 2024",
        description: "Building scalable web applications using React, Next.js and Node.js. Currently the lead developer of a WebUI project for a 5G-Core.",
        date: "2020",
        type: "work",
    },
];

export default function Experience() {
    return (
        <motion.div
            initial={{opacity: 0, x:-200, y: 0}}
            animate={{opacity: 1, x:0, y: 0}}
            transition={{duration: 0.8, ease: "easeOut", delay:1.4}}
            className="w-full mx-auto max-w-sm md:max-w-2xl"
        >
            <Timeline items={experienceItems} title="Experience" />
        </motion.div>
    );
}
