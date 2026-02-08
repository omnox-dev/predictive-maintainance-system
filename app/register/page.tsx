"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import JapaneseDoorTransition from '@/components/ui/JapaneseDoorTransition';

export default function RegisterPage() {
    const [isExiting, setIsExiting] = useState(false);
    const router = useRouter();

    const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
        e.preventDefault();
        setIsExiting(true);
        // Wait for the door animation (approx 1500ms + buffer)
        setTimeout(() => {
            router.push(path);
        }, 1600);
    };

    return (
        <JapaneseDoorTransition isExiting={isExiting}>
            <div className="min-h-screen w-full flex bg-[#11221a] text-white relative overflow-hidden font-display">
                {/* Background Effects */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3b82f6]/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute inset-0 bg-[url('https://placeholder.pics/svg/20')] opacity-5 pointer-events-none"></div>

                {/* Left Panel: Visual */}
                <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-16 border-r border-[#234836]/50 bg-[#1a3328]/30 backdrop-blur-sm order-2">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined text-3xl">bolt</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight">EcoPulse AI</span>
                    </div>

                    <div className="relative z-10">
                        <h1 className="text-5xl font-black leading-[1.1] mb-6">
                            Start Optimizing <br />
                            <span className="text-primary">Today</span>
                        </h1>
                        <ul className="space-y-4 text-lg text-[#92c9ad]">
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                14-Day Free Trial
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                Full Access to ML Models
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">check_circle</span>
                                Dedicated Support Team
                            </li>
                        </ul>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-[#587c6a]">
                        <span>© 2026 EcoPulse AI</span>
                        <span>•</span>
                        <span>Privacy Policy</span>
                    </div>
                </div>

                {/* Right Panel: Register Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-16 relative order-1">
                    <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-[#92c9ad] hover:text-white transition-colors text-sm font-bold">
                        <span className="material-symbols-outlined text-lg">arrow_back</span>
                        Back to Home
                    </Link>

                    <div className="max-w-md w-full">
                        <div className="text-center lg:text-left mb-10">
                            <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
                            <p className="text-[#92c9ad]">Join thousands of energy providers enhancing their fleet.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-white uppercase tracking-wider">First Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3.5 bg-[#1a3328] border border-[#234836] rounded-xl text-white placeholder-[#587c6a] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-white uppercase tracking-wider">Last Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3.5 bg-[#1a3328] border border-[#234836] rounded-xl text-white placeholder-[#587c6a] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white uppercase tracking-wider">Work Email</label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3.5 bg-[#1a3328] border border-[#234836] rounded-xl text-white placeholder-[#587c6a] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="name@company.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white uppercase tracking-wider">Password</label>
                                <input
                                    type="password"
                                    className="w-full px-4 py-3.5 bg-[#1a3328] border border-[#234836] rounded-xl text-white placeholder-[#587c6a] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                    placeholder="Create a strong password"
                                />
                                <p className="text-xs text-[#587c6a]">Must be at least 8 characters long.</p>
                            </div>

                            <div className="pt-2">
                                <Link href="/dashboard" className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-[#11221a] rounded-xl text-lg font-black hover:bg-[#0fd470] transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(19,236,128,0.2)]">
                                    Create Account
                                    <span className="material-symbols-outlined">person_add</span>
                                </Link>
                            </div>
                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-[#92c9ad] text-sm">
                                Already have an account?{' '}
                                <Link
                                    href="/login"
                                    onClick={(e) => handleNavigation(e, '/login')}
                                    className="text-primary font-bold hover:underline"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </JapaneseDoorTransition>
    );
}
