import React from 'react';
import Link from 'next/link';

export default function GuidePage() {
    return (
        <div className="bg-slate-50 text-slate-900 font-display selection:bg-primary selection:text-slate-900 min-h-screen flex flex-col">
            <header className="flex items-center justify-between border-b border-slate-200 px-10 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-4 text-slate-900">
                    <div className="size-6 text-primary">
                        <span className="material-symbols-outlined text-3xl font-semibold">wind_power</span>
                    </div>
                    <h2 className="text-lg font-extrabold leading-tight tracking-tight">EcoPulse AI</h2>
                </div>
                <div className="flex flex-1 justify-end gap-8">
                    <nav className="hidden md:flex items-center gap-9">
                        <Link className="text-slate-600 hover:text-slate-900 text-sm font-semibold transition-colors" href="/">Platform</Link>
                        <Link className="text-slate-600 hover:text-slate-900 text-sm font-semibold transition-colors" href="/docs">Docs</Link>
                        <Link className="text-slate-600 hover:text-slate-900 text-sm font-semibold transition-colors" href="/assets">Assets</Link>
                        <span className="text-primary font-bold text-sm">Guide</span>
                    </nav>
                    <div className="flex gap-4">
                        <Link className="hidden sm:flex items-center text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors" href="/dashboard">Log In</Link>
                        <button className="flex items-center justify-center rounded-lg px-4 py-2 bg-primary text-slate-900 font-bold hover:bg-[#0fd470] transition-all shadow-sm">
                            Get a Demo
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-1 flex flex-col items-center w-full">
                <section className="w-full flex flex-col items-center pt-24 pb-16 px-4 sm:px-10 relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[700px] bg-primary/10 rounded-full blur-[140px] -z-10"></div>
                    <div className="max-w-4xl text-center flex flex-col items-center gap-8 z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-slate-800 text-xs font-bold uppercase tracking-widest">New: Turbine Health V2.0</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-900">
                            Maximize Uptime for <br />
                            <span className="text-[#0fd470]">Renewable Energy</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed">
                            Harness the power of ML-driven insights to predict failures before they happen. Reduce maintenance costs by up to 30% and boost energy output.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-slate-900 rounded-xl text-lg font-extrabold hover:bg-[#0fd470] transition-all hover:-translate-y-0.5 shadow-lg shadow-primary/20">
                                Get a Demo
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                            <Link href="/dashboard" className="flex items-center justify-center gap-2 px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-xl text-lg font-bold hover:bg-slate-50 transition-all shadow-sm">
                                <span className="material-symbols-outlined">dashboard</span>
                                View Dashboard
                            </Link>
                        </div>
                    </div>

                    <div className="mt-20 w-full max-w-6xl relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-teal-500/20 rounded-3xl blur-2xl opacity-50"></div>
                        <div className="relative bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
                            <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50/50">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                    <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                                </div>
                                <div className="flex-1 text-center font-mono text-[10px] text-slate-400">dashboard.ecopulse.ai</div>
                            </div>
                            <div className="p-6 grid grid-cols-12 gap-6">
                                <div className="hidden md:block col-span-2 space-y-4 border-r border-slate-100 pr-4">
                                    <div className="h-4 w-20 bg-slate-100 rounded mb-8"></div>
                                    <div className="space-y-4">
                                        <div className="h-3 w-full bg-slate-100 rounded"></div>
                                        <div className="h-3 w-full bg-primary/20 border-r-2 border-primary rounded-l-sm"></div>
                                        <div className="h-3 w-full bg-slate-100 rounded"></div>
                                    </div>
                                </div>
                                <div className="col-span-12 md:col-span-10 grid grid-cols-3 gap-6">
                                    {[
                                        { l: "Output", v: "45.2 GW" },
                                        { l: "Active", v: "124/128" },
                                        { l: "Efficiency", v: "98.5%" },
                                    ].map((s, i) => (
                                        <div key={i} className="p-5 bg-white border border-slate-100 rounded-xl shadow-sm">
                                            <div className="text-[10px] font-bold text-slate-400 uppercase mb-2">{s.l}</div>
                                            <div className="text-2xl font-black">{s.v}</div>
                                        </div>
                                    ))}
                                    <div className="col-span-3 h-64 bg-slate-50 rounded-xl border border-slate-100 relative p-6 flex flex-col justify-end">
                                        <div className="flex items-end justify-between gap-2 h-full">
                                            {[40, 60, 55, 75, 90, 85, 65].map((h, i) => (
                                                <div key={i} className={`w-full bg-primary/30 rounded-t-lg transition-all ${i === 4 ? 'bg-primary shadow-lg h-[90%]' : ''}`} style={{ height: `${h}%` }}></div>
                                            ))}
                                        </div>
                                        <div className="absolute top-6 left-6">
                                            <div className="text-sm font-bold">Generation Forecast</div>
                                            <div className="text-[10px] text-slate-500">Next 7 Days</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full bg-white py-24 px-4 sm:px-10 border-y border-slate-100">
                    <div className="max-w-[1200px] mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6">Complete Intelligence</h2>
                            <p className="text-slate-600 text-lg max-w-2xl mx-auto">Seamless integration with your existing infrastructure.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                            {[
                                { t: "Live Stats", i: "ssid_chart" },
                                { t: "Predictive", i: "online_prediction" },
                                { t: "ROI Analysis", i: "monitoring" },
                            ].map((f, i) => (
                                <div key={i} className="p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1 bg-white">
                                    <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined text-4xl">{f.i}</span>
                                    </div>
                                    <h3 className="text-2xl font-black mb-4">{f.t}</h3>
                                    <p className="text-slate-600 leading-relaxed text-sm">Advanced ML models detect anomalies weeks in advance. Get notified before failures impact production.</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-white border-t border-slate-100 pt-16 pb-8 px-10">
                <div className="max-w-[1200px] mx-auto grid grid-cols-4 gap-12 mb-12">
                    <div className="col-span-4 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="material-symbols-outlined text-3xl text-primary font-bold">wind_power</span>
                            <span className="font-black text-xl">EcoPulse</span>
                        </div>
                        <p className="text-sm text-slate-500">Empowering energy providers with next-gen predictive intelligence.</p>
                    </div>
                    {["Platform", "Company", "Resources"].map(t => (
                        <div key={t} className="col-span-2 md:col-span-1">
                            <h4 className="font-black text-sm uppercase tracking-widest mb-6">{t}</h4>
                            <ul className="space-y-4 text-sm text-slate-500 font-semibold">
                                <li><a href="#" className="hover:text-primary transition-colors">Link One</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Link Two</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Link Three</a></li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="max-w-[1200px] mx-auto border-t border-slate-100 pt-8 flex justify-between items-center text-slate-400 text-xs font-bold">
                    <p>© 2024 EcoPulse. Built for the future.</p>
                    <div className="flex gap-8">
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
