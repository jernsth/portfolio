import { Card, CardTitle } from "@/components/ui/card";
import Image from 'next/image'

type SkillCardProps = {
    title: string;
    logo: string;
}
export function SkillCard({ title, logo } : SkillCardProps) {
    return (
        <Card className="inline-flex items-center space-x-3 p-2 hover:shadow-lg transition w-auto max-w-max">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10">
                <Image
                    width={100}
                    height={100}
                    src={logo}
                    alt={`${title} logo`}
                    className="object-contain"
                />
            </div>
            <CardTitle className="text-base leading-none flex items-center">{title}</CardTitle>
        </Card>
    );
}