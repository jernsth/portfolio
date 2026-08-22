"use client";

import { Timeline, TimelineItem } from "@/components/shared/Timeline";

const educationItems: TimelineItem[] = [
    {
        title: "B.Sc. Computer Science",
        org: "RWTH Aachen University",
        period: "Expected Oct 2026",
        location: "Aachen, Germany",
        description:
            "Studying computer science alongside working full time, with a focus on how systems are designed rather than only how they are coded.",
        highlights: [
            "Focus areas: Software Engineering, System Design and Network Technologies.",
        ],
        type: "education",
        current: true,
    },
    {
        title: "Abitur",
        org: "Konrad-Duden-Gymnasium",
        period: "May 2018",
        location: "Wesel, Germany",
        description:
            "Secondary school diploma with advanced courses in the subjects that pointed me towards software.",
        highlights: ["Advanced courses: Mathematics, Computer Science and English."],
        type: "education",
    },
];

export default function Education() {
    return <Timeline items={educationItems} title="Education" eyebrow="Background" />;
}
