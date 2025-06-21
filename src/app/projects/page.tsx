import {SiteHeader} from "@/components/SiteHeader";

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
                <div className="mt-12 max-w-3xl mx-auto text-center border-t pt-12">
                    Nothing to see here yet, but stay tuned for updates!
                </div>
            </section>
        </div>
    );
}