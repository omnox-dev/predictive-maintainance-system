"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import JapaneseDoorTransition from '@/components/ui/JapaneseDoorTransition';

export default function LoginPage() {
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
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#234836]/20 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>
                <div className="absolute inset-0 bg-[url('https://placeholder.pics/svg/20')] opacity-5 pointer-events-none"></div>

                {/* Left Panel: Visual */}
                <div className="hidden lg:flex w-1/2 relative flex-col justify-between p-16 border-r border-[#234836]/50 bg-[#1a3328]/30 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-primary/20 text-primary flex items-center justify-center">
                            <span className="material-symbols-outlined text-3xl">wind_power</span>
                        </div>
                        <span className="font-bold text-xl tracking-tight">EcoPulse AI</span>
                    </div>

                    <div className="relative z-10">
                        <h1 className="text-5xl font-black leading-[1.1] mb-6">
                            Predictive Intelligence for <br />
                            <span className="text-primary">Critical Infrastructure</span>
                        </h1>
                        <p className="text-[#92c9ad] text-lg max-w-md leading-relaxed">
                            Access real-time telemetry, forecast component failures, and optimize your renewable energy fleet with our advanced ML models.
                        </p>

                        <div className="mt-12 flex gap-4">
                            <div className="p-4 rounded-xl bg-[#11221a] border border-[#234836] shadow-xl w-64">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs text-[#92c9ad] font-bold uppercase tracking-wider">System Health</span>
                                    <span className="text-primary text-xs font-bold">LIVE</span>
                                </div>
                                <div className="flex items-end gap-2 mb-2">
                                    <span className="text-3xl font-black text-white">98.5%</span>
                                    <span className="text-xs text-primary mb-1.5">▲ Optimal</span>
                                </div>
                                <div className="w-full h-1.5 bg-[#234836] rounded-full overflow-hidden">
                                    <div className="h-full bg-primary w-[98.5%] shadow-[0_0_10px_#13ec80]"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-[#587c6a]">
                        <span>© 2026 EcoPulse AI</span>
                        <span>•</span>
                        <span>Privacy Policy</span>
                        <span>•</span>
                        <span>Terms of Service</span>
                    </div>
                </div>

                {/* Right Panel: Login Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-16 relative">
                    <Link href="/" className="absolute top-8 right-8 flex items-center gap-2 text-[#92c9ad] hover:text-white transition-colors text-sm font-bold">
                        Back to Home
                        <span className="material-symbols-outlined text-lg">close</span>
                    </Link>

                    <div className="max-w-md w-full">
                        <div className="text-center lg:text-left mb-10">
                            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                            <p className="text-[#92c9ad]">Enter your credentials to access the dashboard.</p>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-white uppercase tracking-wider">Email Address</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-[#587c6a]">mail</span>
                                    </div>
                                    <input
                                        type="email"
                                        className="w-full pl-12 pr-4 py-3.5 bg-[#1a3328] border border-[#234836] rounded-xl text-white placeholder-[#587c6a] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="name@company.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <label className="text-sm font-bold text-white uppercase tracking-wider">Password</label>
                                    <a href="#" className="text-xs font-bold text-primary hover:underline">Forgot Password?</a>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <span className="material-symbols-outlined text-[#587c6a]">lock</span>
                                    </div>
                                    <input
                                        type="password"
                                        className="w-full pl-12 pr-4 py-3.5 bg-[#1a3328] border border-[#234836] rounded-xl text-white placeholder-[#587c6a] focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                        placeholder="••••••••"
                                    />
                                    <button type="button" className="absolute inset-y-0 right-0 pr-4 flex items-center text-[#587c6a] hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">visibility</span>
                                    </button>
                                </div>
                            </div>

                            <div className="pt-2">
                                <Link href="/dashboard" className="w-full flex items-center justify-center gap-2 py-4 bg-primary text-[#11221a] rounded-xl text-lg font-black hover:bg-[#0fd470] transition-all hover:scale-[1.02] shadow-[0_0_20px_rgba(19,236,128,0.2)]">
                                    Sign In
                                    <span className="material-symbols-outlined">login</span>
                                </Link>
                            </div>
                        </form>

                        <div className="mt-8 text-center">
                            <p className="text-[#92c9ad] text-sm">
                                Don't have an account?{' '}
                                <Link
                                    href="/register"
                                    onClick={(e) => handleNavigation(e, '/register')}
                                    className="text-primary font-bold hover:underline"
                                >
                                    Request Access
                                </Link>
                            </p>
                        </div>

                        <div className="mt-12 pt-8 border-t border-[#234836] flex flex-col gap-4">
                            <button className="w-full flex items-center justify-center gap-3 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-slate-100 transition-colors">
                                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
                                Sign in with Google
                            </button>
                            <button className="w-full flex items-center justify-center gap-3 py-3 bg-[#000] text-white border border-[#234836] rounded-xl font-bold hover:bg-[#1a1a1a] transition-colors">
                                <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub" className="w-5 h-5 invert" />
                                Sign in with GitHub
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </JapaneseDoorTransition>
    );
}
