// components/ProfileIntro.tsx
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { MdLocationOn } from "react-icons/md";


export function ProfileIntro() {
    return (
        <Card
            className="max-w-xl w-full p-6 shadow-lg rounded-2xl transition-transform duration-200 ease-in-out hover:scale-102 hover:shadow-lg">
            <CardContent className="flex items-center gap-6">
                <div className="w-34 h-34 relative rounded-full overflow-hidden border-2">
                    <Image
                        src="/images/profile_picture.jpeg"
                        alt="Profile picture"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <div className="flex gap-2">
                        <h1 className="text-3xl font-bold text-primary">Hi, I am Jonas</h1>
                        <p className="p-0 m-0 flex justify-center text-2xl wave-hover origin-bottom-right">👋</p>
                    </div>
                    <p className="text-muted-foreground mt-1">Fullstack Developer & Cybersecurity Enthusiast</p>
                    <div className="flex items-center gap-2 text-primary, mt-2">
                        <a target="_blank" rel="noopener noreferrer"
                           href="https://www.google.com/maps/@50.7761163,6.0836072,14.5z">
                            <MdLocationOn
                                className="hover:scale-115 hover:shadow-lg cursor-pointer duration-200 ease-in-out"
                                size={24}
                            />
                        </a>
                        <p className="text-muted-foreground">
                            Aachen, Germany
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}