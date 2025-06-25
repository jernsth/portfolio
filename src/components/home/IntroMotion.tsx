"use client";

import { motion } from "framer-motion";
import { ProfileIntro } from "./ProfileIntro";
import { ProjectsIntro } from "./ProjectsIntro";
import { useIsMobile } from "@/hooks/use-mobile";

export function IntroMotion() {
    const isMobile = useIsMobile();

    if (isMobile === undefined) return null; // Or a loading spinner

    return (
        <div className="flex flex-row justify-center items-start gap-10 mt-10">
            <motion.div
                initial={{ opacity: 0, x: isMobile ? 0 : 20, y: -50 }}
                animate={{ opacity: 1, x: isMobile ? 0 : 20, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="max-w-xl"
            >
                <ProfileIntro />
            </motion.div>

            {!isMobile && (
                <motion.div
                    initial={{ opacity: 0, x: 120 }}
                    animate={{ opacity: 1, x: 90 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                    className="w-[200px] h-[100px] relative"
                >
                    <ProjectsIntro />
                </motion.div>
            )}
        </div>
    );
}

