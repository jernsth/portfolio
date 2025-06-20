import { AppSidebar } from "@/components/app-sidebar"
import { SidebarProvider } from "@/components/ui/sidebar"
import {SiteHeader} from "@/components/SiteHeader";
import ProfileIntro from "@/components/ProfileIntro";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Skills from "@/components/Skills";

function Page() {
    return (
        <SidebarProvider
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 72)",
                    "--header-height": "calc(var(--spacing) * 12)",
                } as React.CSSProperties
            }
        >
            <AppSidebar />

            <div className="flex flex-1 flex-col">
                <SiteHeader title="Home" editable={false} editActive={false} setEditActive={() => {}} />
                <ProfileIntro />
                <div>
                    <Experience />
                    <Education />
                </div>
                <Skills/>
            </div>
        </SidebarProvider>
    );
}

export default Page;