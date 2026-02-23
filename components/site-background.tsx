"use client";

import { useEffect, useState } from "react";
import { RandomObjects } from "@/components/random-objects";

export function SiteBackground() {
    const [fadeOpacity, setFadeOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Start fading at 100px, fully black at 600px
            const scrollY = window.scrollY;
            const startFade = 100;
            const endFade = 600;

            if (scrollY <= startFade) {
                setFadeOpacity(0);
            } else if (scrollY >= endFade) {
                setFadeOpacity(1);
            } else {
                setFadeOpacity((scrollY - startFade) / (endFade - startFade));
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll(); // Initialize

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Base Global Background Color */}
            <div className="fixed inset-0 min-h-screen w-full bg-black z-[-2]" />

            {/* Top radial gradient (ambient lighting) */}
            <div
                className="pointer-events-none fixed top-0 left-0 w-full h-[100vh] z-[-1]"
                style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(59, 130, 246, 0.35) 0%, rgba(147, 51, 234, 0.15) 50%, transparent 80%)'
                }}
                aria-hidden
            />

            {/* Floating 3D Objects */}
            <RandomObjects />

            {/* Scroll-triggered Black Overlay */}
            <div
                className="pointer-events-none fixed inset-0 w-full h-[100vh] bg-black z-[2]"
                style={{ opacity: fadeOpacity }}
                aria-hidden
            />
        </>
    );
}
