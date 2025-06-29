"use client";

import { motion } from "framer-motion";
import { ProfileIntro } from "./ProfileIntro";
import { ProjectsIntro } from "./ProjectsIntro";
import { useIsMobile } from "@/hooks/use-mobile";
import { SocialsIntro } from "./SocialsIntro";

export function IntroMotion() {
    const isMobile = useIsMobile();

    if (isMobile === undefined) return null; // Or a loading spinner

    return (
        <div className="flex flex-col items-center gap-6 mt-10 px-4">
            <div className="flex flex-row justify-center items-start gap-x-10 w-full max-w-6xl">
                <motion.div
                    initial={{opacity: 0, x: isMobile ? 0 : 30, y: -50}}
                    animate={{opacity: 1, x: isMobile ? 0 : 30, y: 0}}
                    transition={{duration: 0.6, ease: "easeOut"}}
                    className="max-w-sm md:max-w-xl w-full"
                >
                    <ProfileIntro />
                </motion.div>

                <motion.div
                    initial={{opacity: 0, x: 120}}
                    animate={{opacity: 1, x: 100}}
                    transition={{duration: 0.6, ease: "easeOut", delay: 0.4}}
                    className="w-[200px] h-[100px] relative lg:block hidden"
                >
                    <ProjectsIntro />
                </motion.div>
            </div>
            <div
                className="max-w-xl"
            >
                <SocialsIntro />
            </div>
        </div>
    );
}

