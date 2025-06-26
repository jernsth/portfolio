"use client";

import * as React from "react";


import { Card } from "@/components/ui/card";

import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiMysql,
    SiPython,
    SiC,
    SiDocker,
    SiGit,
    SiPrometheus,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";


import 'swiper/css';
import "swiper/css/autoplay";
import { motion } from "framer-motion";

const skills = [
    // --- Frontend ---
    {
        title: "React",
        logo: <SiReact size={24} />,
    },
    {
        title: "Next.js",
        logo: <SiNextdotjs size={24} />,
    },
    {
        title: "TypeScript",
        logo: <SiTypescript size={24} />,
    },
    {
        title: "JavaScript",
        logo: <SiJavascript size={24} />,
    },
    {
        title: "HTML",
        logo: <SiHtml5 size={24} />,
    },
    {
        title: "CSS",
        logo: <SiCss3 size={24} />,
    },
    {
        title: "Tailwind CSS",
        logo: <SiTailwindcss size={24} />,
    },

    // --- Backend ---
    {
        title: "Node.js",
        logo: <SiNodedotjs size={24} />,
    },
    {
        title: "Express",
        logo: <SiExpress size={24} />,
    },
    {
        title: "MongoDB",
        logo: <SiMongodb size={24} />,
    },
    {
        title: "SQL",
        logo: <SiMysql size={24} />,
    },
    {
        title: "Python",
        logo: <SiPython size={24} />,
    },
    {
        title: "Java",
        logo: <FaJava size={24} />,
    },
    {
        title: "C/C++",
        logo: <SiC size={24} />,
    },
    {
        title: "REST",
        logo: <span className="text-xs font-semibold px-2 py-1 rounded bg-gray-200 text-gray-700">API</span>,
    },

    // --- DevOps ---
    {
        title: "Docker",
        logo: <SiDocker size={24} />,
    },
    {
        title: "Git",
        logo: <SiGit size={24} />,
    },
    {
        title: "Prometheus",
        logo: <SiPrometheus size={24} />,
    },
];


export default function Skills() {
    return (
        <motion.div
            initial={{opacity: 0, x:0, y: 100}}
            animate={{opacity: 1, x:0, y: 0}}
            transition={{duration: 0.8, ease: "easeOut", delay:1.9}}
            className="mx-auto flex max-w-sm md:max-w-2xl"
        >
        <div className="max-w-sm md:max-w-2xl mx-auto mt-16 text-center">
            <h2 className="text-2xl font-semibold text-primary mb-6">Skills</h2>
            <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill, index) => (
                    <motion.div
                        initial={{opacity: 0, x:0, y: 100}}
                        animate={{opacity: 1, x:0, y: 0}}
                        transition={{duration: 0.8, ease: "easeOut", delay: 2 + index * 0.05}}
                        key={skill.title}
                    >
                        <Card key={skill.title} className="flex-row items-center justify-center p-4 gap-2 shadow-lg rounded-2xl transition-transform duration-200 ease-in-out hover:scale-[1.05] hover:shadow-lg">
                            { skill.logo }
                            <p>
                                {skill.title}
                            </p>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>
        </motion.div>
    );
}