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
    { title: "REST", logo: <span className="text-xs font-semibold px-2 py-1 rounded bg-gray-200 text-gray-700">API</span> },
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
                <div style={{
                    width: '160px',
                    height: '160px',
                    background: 'rgba(20, 20, 20, 0.9)',
                    border: '1px solid #444',
                    borderRadius: '12px',
                    padding: '10px',
                    color: 'white',
                    fontFamily: 'sans-serif',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
                    userSelect: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '15px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                }}
                className="hover:scale-105 hover:bg-zinc-800 hover:border-zinc-500"
                >
                    <div style={{ transform: 'scale(2.2)' }}>
                        {item.logo}
                    </div>
                    <div style={{ fontSize: '18px', fontWeight: 'bold', textAlign: 'center' }}>
                        {item.title}
                    </div>
                </div>
            </Html>
        </group>
    );
};

export default function Skills({ items = skills }: SkillsProps) {
    const [layoutIdx, setLayoutIdx] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMounted(true);
        }, 1500); // 1.2 Sekunden Delay

        return () => clearTimeout(timer); // Cleanup
    }, []);

    const layouts = useMemo(() => calculateLayouts(items.length), [items.length]);
    const currentLayout = layouts[layoutIdx];

    if (!isMounted) {
        return <div style={{ width: '100%', height: '600px', background: 'transparent', borderRadius: '16px' }} />;
    }

    return (
        <div style={{ 
            width: '100%', 
            height: '600px', 
            position: 'relative', 
            borderRadius: '16px', 
            background: 'transparent'
        }}>

            {/* UI Overlay mit höherem zIndex */}
            <div style={{
                position: 'absolute', zIndex: 5000, bottom: '20px', left: '50%', transform: 'translateX(-50%)',
                display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center', width: '100%'
            }}>
                {['Table', 'Sphere', 'Helix', 'Grid'].map((name, idx) => (
                    <button
                        key={name}
                        onClick={() => setLayoutIdx(idx)}
                        style={{
                            padding: '8px 16px', cursor: 'pointer', background: layoutIdx === idx ? '#fff' : 'rgba(51, 51, 51, 0.8)',
                            color: layoutIdx === idx ? '#000' : '#fff', border: '1px solid #555', borderRadius: '20px',
                            fontWeight: 'bold', transition: 'all 0.3s', fontSize: '14px', backdropFilter: 'blur(4px)',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
                        }}
                        className="hover:bg-gray-200 hover:text-black"
                    >
                        {name}
                    </button>
                ))}
            </div>

            <Canvas camera={{ position: [0, 0, 35], fov: 50 }}>
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
                        key={i}
                        item={item}
                        targetPos={currentLayout[i].pos}
                        targetRot={currentLayout[i].rot}
                    />
                ))}
            </Canvas>
        </div>
    );
}