// components/ExperienceEducation.tsx

export default function Experience() {
    return (
        <section className="max-w-3xl mx-auto mt-12 px-4 space-y-12 text-foreground">
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-primary">Experience</h2>
                <ul className="space-y-6">
                    <li>
                        <h3 className="text-lg font-medium">Fullstack Developer – m3connect GmbH</h3>
                        <p className="text-sm text-muted-foreground">Jan 2022 – Present</p>
                        <p className="mt-1 text-base">
                            Building scalable web applications using React, Next.js, and Node.js. Currently the lead
                            developer
                            of a WebUI project for a 5G-Core.
                        </p>
                    </li>
                    <li>
                        <h3 className="text-lg font-medium">Frontend Intern – Webify</h3>
                        <p className="text-sm text-muted-foreground">Jun 2021 – Dec 2021</p>
                        <p className="mt-1 text-base">
                            Developed responsive UIs and contributed to design systems using Tailwind CSS and Figma
                            prototypes.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
}
