// components/ExperienceEducation.tsx
import { Timeline, TimelineItem } from "@/components/shared/Timeline";

const experienceItems: TimelineItem[] = [
    {
        title: "Fullstack Developer – m3connect GmbH",
        subtitle: "June 2020 – Present",
        description: "Building scalable web applications using React, Next.js and Node.js. Currently the lead developer of a WebUI project for a 5G-Core.",
        date: "2020",
        type: "work",
    },
];

export default function Experience() {
    return (
        <Timeline items={experienceItems} title="Experience" />
    );
}
