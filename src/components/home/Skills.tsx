"use client";

import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

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
    SiPhp,
    SiSymfony,
    SiPostgresql,
    SiKubernetes,
    SiGraphql,
    SiNginx
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { SiSpring } from "@icons-pack/react-simple-icons";

// --- TYPESCRIPT INTERFACES ---
export interface SkillItem {
    title: string;
    logo: React.ReactNode;
}

export interface LayoutData {
    pos: THREE.Vector3;
    rot: THREE.Euler;
}

interface AnimatedItemProps {
    item: SkillItem;
    targetPos: THREE.Vector3;
    targetRot: THREE.Euler;
}

interface SkillsProps {
    items?: SkillItem[];
}

const LAYOUTS = ['Table', 'Sphere', 'Helix', 'Grid'] as const;

// --- DATEN ---
const skills: SkillItem[] = [
    { title: "React", logo: <SiReact size={24} /> },
    { title: "Next.js", logo: <SiNextdotjs size={24} /> },
    { title: "TypeScript", logo: <SiTypescript size={24} /> },
    { title: "JavaScript", logo: <SiJavascript size={24} /> },
    { title: "PHP", logo: <SiPhp size={24} /> },
    { title: "Symfony", logo: <SiSymfony size={24} /> },
    { title: "HTML", logo: <SiHtml5 size={24} /> },
    { title: "CSS", logo: <SiCss3 size={24} /> },
    { title: "Tailwind CSS", logo: <SiTailwindcss size={24} /> },
    { title: "Spring Boot", logo: <SiSpring size={24} /> },
    { title: "Node.js", logo: <SiNodedotjs size={24} /> },
    { title: "Express", logo: <SiExpress size={24} /> },
    { title: "MongoDB", logo: <SiMongodb size={24} /> },
    { title: "PostgreSQL", logo: <SiPostgresql size={24} /> },
    { title: "SQL", logo: <SiMysql size={24} /> },
    { title: "Python", logo: <SiPython size={24} /> },
    { title: "Java", logo: <FaJava size={24} /> },
    { title: "C/C++", logo: <SiC size={24} /> },
    { title: "REST", logo: <span className="rounded bg-secondary px-2 py-1 text-xs font-semibold text-secondary-foreground">API</span> },
    { title: "GraphQL", logo: <SiGraphql size={24} /> },
    { title: "Docker", logo: <SiDocker size={24} /> },
    { title: "Kubernetes", logo: <SiKubernetes size={24} /> },
    { title: "Nginx", logo: <SiNginx size={24} /> },
    { title: "Git", logo: <SiGit size={24} /> },
    { title: "Prometheus", logo: <SiPrometheus size={24} /> },
];

// --- LOGIK ---
const calculateLayouts = (count: number): LayoutData[][] => {
    const table: LayoutData[] = [];
    const sphere: LayoutData[] = [];
    const helix: LayoutData[] = [];
    const grid: LayoutData[] = [];

    const vector = new THREE.Vector3();
    const dummyObject = new THREE.Object3D();

    for (let i = 0; i < count; i++) {
        // 1. TABLE (5 Spalten, sehr eng)
        const tableX = (i % 5) * 5 - 10;
        const tableY = -Math.floor(i / 5) * 5 + 10;
        table.push({ pos: new THREE.Vector3(tableX, tableY, 0), rot: new THREE.Euler(0, 0, 0) });

        // 2. SPHERE (Radius auf 12, invertiert)
        const phi = Math.acos(-1 + (2 * i) / count);
        const theta = Math.sqrt(count * Math.PI) * phi;
        vector.setFromSphericalCoords(12, phi, theta);
        dummyObject.position.copy(vector);
        dummyObject.lookAt(0, 0, 0);
        dummyObject.rotation.y += Math.PI; // Invertiert die Drehung, damit die Karten nach außen zeigen
        sphere.push({ pos: vector.clone(), rot: dummyObject.rotation.clone() });

        // 3. HELIX (Radius 12, y-Abstand 0.5 - Geringere Steigung)
        const helixTheta = i * 0.5 + Math.PI;
        const helixY = -(i * 0.5) + 6; // Steigung reduziert und neu zentriert
        vector.setFromCylindricalCoords(12, helixTheta, helixY);
        dummyObject.position.copy(vector);
        dummyObject.lookAt(0, dummyObject.position.y, 0);
        dummyObject.rotation.y += Math.PI;
        helix.push({ pos: vector.clone(), rot: dummyObject.rotation.clone() });

        // 4. GRID (3x3 Gitter, sehr eng)
        const gridX = ((i % 3) * 10) - 10;
        const gridY = (-(Math.floor(i / 3) % 3) * 10) + 10;
        const gridZ = (Math.floor(i / 9)) * 10 - 10;
        grid.push({ pos: new THREE.Vector3(gridX, gridY, gridZ), rot: new THREE.Euler(0, 0, 0) });
    }

    return [table, sphere, helix, grid];
};

// --- KOMPONENTEN ---
const AnimatedItem = ({ item, targetPos, targetRot }: AnimatedItemProps) => {
    const ref = useRef<THREE.Group>(null);
    const targetQuat = useMemo(() => new THREE.Quaternion(), []);

    const initialPos = useMemo(() => new THREE.Vector3(
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50,
        (Math.random() - 0.5) * 50
    ), []);
    const initialRot = useMemo(() => new THREE.Euler(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
    ), []);

    useFrame((state, delta) => {
        if (!ref.current) return;
        // Beschleunigte Animation
        ref.current.position.lerp(targetPos, 6 * delta);
        targetQuat.setFromEuler(targetRot);
        ref.current.quaternion.slerp(targetQuat, 6 * delta);

        // Sorgt für kontinuierliches Rendering, um Unschärfe zu vermeiden
        state.invalidate();
    });

    return (
        <group ref={ref} position={initialPos} rotation={initialRot}>
            <Html transform center>
                {/* Theme-aware: the card used to be hardcoded dark and was unreadable in light mode. */}
                <div className="flex size-40 cursor-pointer select-none flex-col items-center justify-center gap-4 rounded-xl border border-border bg-card/85 text-card-foreground shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-brand/50 hover:bg-accent">
                    <div className="scale-[2.2] text-brand">{item.logo}</div>
                    <div className="text-center text-lg font-semibold">{item.title}</div>
                </div>
            </Html>
        </group>
    );
};

export default function Skills({ items = skills }: SkillsProps) {
    const [layoutIdx, setLayoutIdx] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Delay so the canvas does not fight the hero animation for the main thread.
        const timer = setTimeout(() => setIsMounted(true), 1200);
        return () => clearTimeout(timer);
    }, []);

    const layouts = useMemo(() => calculateLayouts(items.length), [items.length]);
    const currentLayout = layouts[layoutIdx];

    return (
        <section className="w-full">
            <div className="mx-auto mb-6 w-full max-w-3xl px-4 text-center">
                <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                    Toolbox
                </p>
                <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">Tech Stack</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                    The languages, frameworks and tools I work with. Drag to rotate, scroll to zoom,
                    or switch the arrangement below.
                </p>
            </div>

            <div className="relative h-[440px] w-full sm:h-[560px]">
                {!isMounted ? (
                    <div className="size-full" aria-hidden />
                ) : (
                    <>
                        <Canvas camera={{ position: [0, 0, 35], fov: 50 }} dpr={[1, 2]}>
                            <ambientLight intensity={0.4} />
                            <pointLight position={[10, 10, 10]} intensity={0.6} />
                            <OrbitControls
                                enableDamping
                                dampingFactor={0.05}
                                minDistance={25}
                                maxDistance={60}
                            />

                            {items.map((item, i) => (
                                <AnimatedItem
                                    key={item.title}
                                    item={item}
                                    targetPos={currentLayout[i].pos}
                                    targetRot={currentLayout[i].rot}
                                />
                            ))}
                        </Canvas>

                        <div className="pointer-events-none absolute inset-x-0 bottom-4 z-10 flex justify-center">
                            <div
                                role="tablist"
                                aria-label="Skill layout"
                                className="pointer-events-auto flex gap-1 rounded-full border border-border bg-card/80 p-1 shadow-lg backdrop-blur-md"
                            >
                                {LAYOUTS.map((name, idx) => (
                                    <button
                                        key={name}
                                        role="tab"
                                        aria-selected={layoutIdx === idx}
                                        onClick={() => setLayoutIdx(idx)}
                                        className={[
                                            "rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-200",
                                            "focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50",
                                            layoutIdx === idx
                                                ? "bg-brand text-brand-foreground shadow-sm"
                                                : "text-muted-foreground hover:bg-accent hover:text-foreground",
                                        ].join(" ")}
                                    >
                                        {name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
