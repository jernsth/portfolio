import { SiteHeader } from "@/components/SiteHeader";

export default function Page() {
    return (
            <div className="flex flex-1 flex-col">
                <SiteHeader title="About Me" editable={false} editActive={false} setEditActive={() => {}} />
                <section className="px-4 py-12">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-4xl font-extrabold text-primary mb-4">About Me</h1>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            If you’ve made it this far, chances are you’re curious not just about my professional path — but about me as a person. So let’s dive into a more personal question:
                            <br className="hidden md:inline" /> <strong>Who am I?</strong>
                        </p>
                    </div>

                    <div className="mt-12 max-w-3xl mx-auto text-center border-t pt-12">
                        <h2 className="text-3xl font-bold text-primary mb-4">Football</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            One of my greatest passions is football. I’ve been playing the game since I could walk — and I still do, with varying degrees of success, for a local club.
                            <br />
                            I&#39;m also a proud supporter of
                            <span className="font-extrabold bg-gradient-to-r from-blue-700 via-sky-500 to-blue-400 bg-clip-text text-transparent ml-1 animate-gradient">
                                FC Schalke 04
                            </span>, the legendary club from Gelsenkirchen, Germany.
                        </p>
                    </div>

                    <div className="mt-12 max-w-3xl mx-auto text-center border-t pt-12">
                        <h2 className="text-3xl font-bold text-primary mb-4">Fitness</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            While I may not be a complete fitness fanatic, I do enjoy staying active. As a result of that, I do spend my fair share of time in the gym. In my opinion, going to the gym is the best way to calm down after a stressful day or week.
                        </p>
                    </div>

                </section>

            </div>
    );
}