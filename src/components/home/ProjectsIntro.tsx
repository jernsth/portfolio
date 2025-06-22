import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function ProjectsIntro() {
    return (
        <Link href="/projects">
            <Card
                className="p-4 shadow-md rounded-xl transition-transform duration-200 ease-in-out hover:scale-105 hover:shadow-lg"
                style={{
                    width: "185px",        // eigentlich Höhe
                    height: "100px",       // eigentlich Breite
                    transform: "rotate(90deg)",
                    transformOrigin: "top left",
                }}
            >
                <CardContent className="flex items-center justify-center h-full">
                    <h1 className="text-xl font-semibold text-primary">Projects</h1>
                </CardContent>
            </Card>
        </Link>
    );
}
