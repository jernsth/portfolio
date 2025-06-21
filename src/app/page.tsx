import {SiteHeader} from "@/components/SiteHeader";
import ProfileIntro from "@/components/ProfileIntro";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

function Page() {
    return (
            <div className="flex flex-1 flex-col">
                <SiteHeader title="Home" editable={false} editActive={false} setEditActive={() => {}} />
                <ProfileIntro />
                <div>
                    <Experience />
                    <Education />
                </div>
                <Skills/>
            </div>
    );
}

export default Page;