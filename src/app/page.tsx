import {SiteHeader} from "@/components/SiteHeader";
import {IntroMotion} from "@/components/home/IntroMotion";
import Experience from "@/components/home/Experience";
import Education from "@/components/home/Education";
import Skills from "@/components/home/Skills";

function Page() {
    return (
            <div className="flex flex-1 flex-col">
                <SiteHeader title="Home" editable={false} editActive={false} setEditActive={() => {}} />
                <IntroMotion />
                <div>
                    <Experience />
                    <Education />
                </div>
                <Skills/>
            </div>
    );
}

export default Page;