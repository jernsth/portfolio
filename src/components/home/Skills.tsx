"use client";

import * as React from "react";
import Image from "next/image";

import { Card } from "@/components/ui/card";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";

import 'swiper/css';
import "swiper/css/autoplay";

const skills = [
    {
        title: "React",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    },
    {
        title: "Next.js",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    },
    {
        title: "TypeScript",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    },
    {
        title: "Node.js",
        logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    },
    {
        title: "Docker",
        logo: "/images/moby-logo.png",
    },
    {
        title: "Git",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
    },
    {
        title: "Prometheus",
    },
    {
        title: "Python",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    }
];

export default function Skills() {
    return (
        <section className="max-w-3xl mx-auto mt-16 px-4 text-center">
            <h2 className="text-2xl font-semibold text-primary">Skills</h2>
    <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        }}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
        }}
    >
        {skills.map((skill, index) => (
            <SwiperSlide key={index}>
                <Card className="mt-4 justify-center items-center max-w-sm mx-auto shadow-lg rounded-2xl border border-primary/10 aspect-[5/5] flex flex-col">
                    {skill.logo ? (
                        <Image className="min-w-16 min-h-16"
                            src={skill.logo}
                            alt={skill.title}
                            width={64}
                            height={64}
                        />
                    ) : (
                        <div className="w-16 h-16 rounded-full bg-primary-10 flex items-center justify-center text-primary/65 font-bold text-xl border-2 border-primary shadow-sm">
                            {skill.title.charAt(0).toUpperCase()}
                        </div>
                    )}
                        <span className="text-base font-medium">{skill.title}</span>
                    </Card>
            </SwiperSlide>
        ))}
    </Swiper>
        </section>
    );
}