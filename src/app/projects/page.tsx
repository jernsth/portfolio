import {SiteHeader} from "@/components/SiteHeader";
import { SimpleCard } from "@/components/SimpleCard";

import Image from "next/image";

export default function Page() {
    return (
        <div className="flex flex-1 flex-col">
            <SiteHeader title="About Me" editable={false} editActive={false} setEditActive={() => {}} />
            <section className="px-4 py-12">
                <div className="max-w-3xl mx-auto text-center">
                    <h1 className="text-4xl font-extrabold text-primary mb-4">Projects</h1>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        This is a collection of my projects, I have been developing myself or playing a role in the development process. For some live demos, check out the Try it out section.
                        <br className="hidden md:inline" />
                    </p>
                    <p className="text-muted-foreground text-lg leading-relaxed mt-2">
                        <strong>Feel free to explore!</strong>
                    </p>
                </div>
                <div className="mt-12 border-t border-primary/10 pt-12 px-4">
                    <div className="max-w-xl mx-auto flex flex-col items-center gap-6">
                        <SimpleCard
                            title="Landing Page for Small Businesses"
                            content={
                                <div className="rounded-lg overflow-hidden shadow border border-primary/10 bg-white">
                                    <Image
                                        src="/images/kmu-example.png"
                                        alt="Landing Page for small businesses"
                                        width={400}
                                        height={300}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                            }
                            link="/projects/kmu-template"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}