"use client";

import React, { useEffect, useState } from 'react';

export default function JapaneseDoorTransition({ children, isExiting = false }: { children: React.ReactNode, isExiting?: boolean }) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        // Trigger animation after a brief delay to ensure render
        const timer = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const isOpen = isMounted && !isExiting;

    return (
        <div className="relative min-h-screen w-full overflow-hidden">
            {/* The Page Content */}
            <div className={`transition-opacity duration-1000 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
                {children}
            </div>

            {/* Left Door */}
            <div
                className={`fixed inset-y-0 left-0 w-1/2 bg-[#0c1a13] z-50 transition-transform duration-[1500ms] cubic-bezier(0.77, 0, 0.175, 1) border-r border-[#234836] ${isOpen ? '-translate-x-full' : 'translate-x-0'
                    }`}
                style={{ willChange: 'transform' }}
            >
                {/* Decorative pattern/texture for the door */}
                <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,#234836_0,#234836_1px,transparent_0,transparent_50%)] bg-[length:20px_20px]"></div>

                {/* Door Handle/Edge */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 h-32 w-1.5 rounded-full bg-[#234836] opacity-50"></div>
            </div>

            {/* Right Door */}
            <div
                className={`fixed inset-y-0 right-0 w-1/2 bg-[#0c1a13] z-50 transition-transform duration-[1500ms] cubic-bezier(0.77, 0, 0.175, 1) border-l border-[#234836] ${isOpen ? 'translate-x-full' : 'translate-x-0'
                    }`}
                style={{ willChange: 'transform' }}
            >
                {/* Decorative pattern/texture for the door */}
                <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(-45deg,#234836_0,#234836_1px,transparent_0,transparent_50%)] bg-[length:20px_20px]"></div>

                {/* Door Handle/Edge */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 h-32 w-1.5 rounded-full bg-[#234836] opacity-50"></div>
            </div>

            {/* Center Lock/Symbol fading out */}
            <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] transition-all duration-700 delay-100 ${isOpen ? 'opacity-0 scale-150 pointer-events-none' : 'opacity-100 scale-100'
                }`}>
                <div className="size-16 rounded-full bg-[#1a3328] border border-[#234836] flex items-center justify-center shadow-[0_0_30px_rgba(19,236,128,0.2)]">
                    <span className="material-symbols-outlined text-3xl text-primary animate-pulse">lock_open</span>
                </div>
            </div>
        </div>
    );
}
