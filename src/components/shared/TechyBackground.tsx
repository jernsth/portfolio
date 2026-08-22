"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from "tsparticles-engine";
import { useTheme } from "next-themes";

// Brand blue, light/dark variants. Kept as hex because tsparticles does not parse oklch().
const PARTICLE_COLOR = {
    light: "#3b5bdb",
    dark: "#8da2fb",
};

export function TechyBackground() {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    useEffect(() => {
        setMounted(true);
        const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
        const onChange = () => setReducedMotion(mql.matches);
        onChange();
        mql.addEventListener("change", onChange);
        return () => mql.removeEventListener("change", onChange);
    }, []);

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);

    const isDark = resolvedTheme === "dark";
    const color = isDark ? PARTICLE_COLOR.dark : PARTICLE_COLOR.light;

    const options = useMemo(
        () => ({
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            interactivity: {
                events: {
                    onHover: { enable: !reducedMotion, mode: "repulse" },
                    resize: true,
                },
                modes: {
                    repulse: { distance: 120, duration: 0.4 },
                },
            },
            particles: {
                color: { value: color },
                links: {
                    color,
                    distance: 160,
                    enable: true,
                    opacity: isDark ? 0.14 : 0.1,
                    width: 1,
                },
                move: {
                    direction: "none" as const,
                    enable: !reducedMotion,
                    outModes: { default: "bounce" as const },
                    random: false,
                    // Slower than a "screensaver" — the background should never pull focus.
                    speed: 0.4,
                    straight: false,
                },
                number: {
                    density: { enable: true, area: 900 },
                    value: 34,
                },
                opacity: {
                    value: { min: 0.08, max: isDark ? 0.3 : 0.22 },
                    animation: { enable: !reducedMotion, speed: 0.6, sync: false },
                },
                shape: { type: "circle" },
                size: { value: { min: 1, max: 2.4 } },
            },
            detectRetina: true,
        }),
        [color, isDark, reducedMotion],
    );

    // Avoid rendering with the wrong palette during hydration.
    if (!mounted) return null;

    return (
        <Particles
            // Re-init when the palette flips so links/particles pick up the new colour.
            key={isDark ? "dark" : "light"}
            id="tsparticles"
            init={particlesInit}
            options={options}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: -1,
            }}
        />
    );
}
