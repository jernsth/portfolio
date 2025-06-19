// components/ProfileIntro.tsx
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function ProfileIntro() {
    return (
        <Card className="max-w-xl mx-auto mt-10 p-6 shadow-lg rounded-2xl">
            <CardContent className="flex items-center gap-6">
                <div className="w-34 h-34 relative rounded-full overflow-hidden border-2>">
                    <Image
                        src="/images/profile_picture.jpeg"

                        alt="Profile picture"
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-primary">Hi, I am Jonas</h1>
                    <p className="text-muted-foreground mt-1">Fullstack Developer & Cybersecurity Enthusiast</p>
                </div>
            </CardContent>
        </Card>
    );
}