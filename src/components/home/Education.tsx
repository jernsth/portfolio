"use client";

import {Timeline, TimelineItem} from "@/components/shared/Timeline";
import {motion} from "framer-motion";

const educationItems: TimelineItem[] = [
    {
        title: "Abitur - Konrad-Duden Gymnasium",
        subtitle: "Wesel, Mai 2018",
        description: "Focus: Mathematics, Computer Science, English",
        date: "2018",
        type: "education",
    },
    {
        title: "Computer Science b.Sc. - RWTH Aachen University",
        subtitle: "Aachen, Januar 2026 (expected)",
        description: "Focus: Software Engineering, System Design & Network Technologies",
        date: "2026",
        type: "education",
    },
];

export default function Education() {
    return (
        <motion.div
            initial={{opacity: 0, x:200, y: 0}}
            animate={{opacity: 1, x:0, y: 0}}
            transition={{duration: 0.8, ease: "easeOut", delay:1.4}}
            className="w-full mx-auto max-w-sm md:max-w-xl"
        >
            <Timeline items={educationItems} title="Education" />
        </motion.div>
    );
}