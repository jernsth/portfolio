import { SiteHeader } from "@/components/SiteHeader";
import { ProfileIntro } from "@/components/home/ProfileIntro";
import Experience from "@/components/home/Experience";
import Education from "@/components/home/Education";
import Skills from "@/components/home/Skills";

export default function Page() {
    return (
        <div className="flex flex-1 flex-col">
            <SiteHeader title="Home" />

            <main className="flex flex-col gap-20 py-16 md:gap-28 md:py-24">
                <ProfileIntro />

                <div className="mx-auto w-full max-w-3xl px-4">
                    <div className="section-rule" />
                </div>

                <div className="flex flex-col gap-20">
                    <Experience />
                    <Education />
                </div>

                <Skills />
            </main>
        </div>
    );
}
