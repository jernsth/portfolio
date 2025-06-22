import { SiteHeader } from "@/components/SiteHeader";

export default function Page() {
    return (
        <div className="flex flex-col min-h-screen">
            <SiteHeader
                title="Example Landing Page for Small Businesses"
                editable={false}
                editActive={false}
                setEditActive={() => {}}
            />

            <main className="flex flex-col items-center justify-center px-6 py-12 text-primary text-center">
                <div className="max-w-2xl">
                    <h1 className="text-3xl font-bold mb-4">Your Digital Start – Simplified</h1>
                    <p className="text-lg leading-relaxed mb-6 text-primary/80">
                        I’ve implemented a customizable landing page for small businesses, built with Next.js and Tailwind CSS.
                        The template adapts easily to your business needs and includes key sections like services, testimonials, and a contact form — everything you need to get started online.
                    </p>
                    <a
                        href="https://kmu-template.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-primary px-5 py-2 rounded-lg shadow hover:bg-primary/10 transition"
                    >
                        View Live Demo
                    </a>
                </div>
            </main>
        </div>
    );
}
