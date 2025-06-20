import {Timeline, TimelineItem} from "@/components/Timeline";

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
        <Timeline items={educationItems} title="Education" />
    );
}