"use client";

import { SiGithub } from "@icons-pack/react-simple-icons";
import { FaLinkedin } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const socials = [
    {
        label: "GitHub",
        href: "https://www.github.com/jernsth",
        icon: SiGithub,
        external: true,
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/jonas-hermsen-61b53a142/",
        icon: FaLinkedin,
        external: true,
    },
    {
        label: "Email",
        href: "mailto:jonashermsen@gmx.de",
        icon: MdMail,
        external: false,
    },
];

export function SocialsIntro() {
    return (
        <div className="flex items-center gap-1.5">
            {socials.map(({ label, href, icon: Icon, external }) => (
                <a
                    key={label}
                    href={href}
                    aria-label={label}
                    title={label}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors duration-200 hover:border-brand/40 hover:bg-accent hover:text-brand focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50"
                >
                    <Icon size={18} />
                </a>
            ))}
        </div>
    );
}
