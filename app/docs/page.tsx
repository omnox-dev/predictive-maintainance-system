import React from 'react';
import Sidebar from "@/components/layout/Sidebar";

export default function DocsPage() {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display transition-colors duration-200">
            <Sidebar />

            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#234836] px-10 py-4 bg-white dark:bg-background-dark sticky top-0 z-50">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-[#92c9ad]">
                        <span>Documentation</span>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <span className="text-slate-900 dark:text-white font-medium">Technical Overview</span>
                    </div>
                    <div className="flex gap-2">
                        <button className="flex items-center justify-center overflow-hidden rounded-lg h-10 w-10 bg-slate-100 dark:bg-[#234836] hover:bg-slate-200 transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border border-white/10"></div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto py-8 px-4 sm:px-10 lg:px-20 scroll-smooth">
                    <div className="w-full max-w-[1200px] flex flex-col gap-10 mx-auto">
                        {/* Hero Section */}
                        <section className="flex flex-col gap-4 border-b border-slate-200 dark:border-[#234836] pb-8">
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider border border-primary/20">Version 1.0</span>
                                <span className="text-slate-500 dark:text-slate-400 text-sm">Last updated: Oct 2026</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">Technical Documentation</h1>
                            <p className="text-lg text-slate-600 dark:text-[#92c9ad] max-w-3xl leading-relaxed">
                                Technical overview, system architecture, and machine learning methodology for the EcoPulse Predictive Intelligence System.
                            </p>
                            <div className="flex gap-4 pt-2">
                                <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-background-dark rounded-lg text-sm font-bold hover:bg-[#0fd470] transition-colors shadow-[0_0_15px_rgba(19,236,128,0.3)]">
                                    <span className="material-symbols-outlined text-[20px]">download</span>
                                    Download Tech Report
                                </button>
                            </div>
                        </section>

                        {/* System Architecture */}
                        <section>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined">hub</span>
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">System Architecture</h2>
                            </div>
                            <div className="bg-white dark:bg-[#183225] border border-slate-200 dark:border-[#234836] rounded-xl p-6 md:p-10 shadow-sm relative overflow-hidden">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
                                    {[
                                        { title: "IoT Collection", icon: "sensors", desc: "Vibration & Temp (MQTT)" },
                                        { title: "Data Pipeline", icon: "database", desc: "PostgreSQL + Pandas" },
                                        { title: "Inference Engine", icon: "memory", desc: "Scikit-Learn / TensorFlow" },
                                        { title: "Dashboard UI", icon: "monitoring", desc: "Real-time Monitoring" },
                                    ].map((step, i) => (
                                        <React.Fragment key={i}>
                                            <div className="flex flex-col items-center text-center gap-4 w-full md:w-1/4">
                                                <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-[#234836] border border-slate-200 dark:border-primary/30 flex items-center justify-center text-slate-700 dark:text-primary shadow-lg">
                                                    <span className="material-symbols-outlined text-3xl">{step.icon}</span>
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-slate-900 dark:text-white mb-1">{step.title}</h3>
                                                    <p className="text-xs text-slate-500 dark:text-slate-400">{step.desc}</p>
                                                </div>
                                            </div>
                                            {i < 3 && <div className="hidden md:flex flex-1 h-[2px] bg-slate-200 dark:bg-[#234836] relative">
                                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-slate-300 dark:bg-primary"></div>
                                            </div>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* Content Grid: ML Models & Dataset */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <section className="flex flex-col gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded bg-primary/10 text-primary"><span className="material-symbols-outlined">psychology</span></div>
                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">ML Models Used</h2>
                                </div>
                                <div className="flex flex-col gap-4">
                                    {[
                                        { title: "Random Forest Classifier", type: "Classification", desc: "Categorizes failure types (Gearbox vs Generator) based on sensor patterns.", metrics: [{ l: "Accuracy", v: "94.2%" }, { l: "F1-Score", v: "0.91" }, { l: "Latency", v: "45ms" }] },
                                        { title: "LSTM Network", type: "Forecasting", desc: "Long Short-Term Memory network for time-series forecasting of Remaining Useful Life.", metrics: [{ l: "RMSE", v: "0.034" }, { l: "Lookback", v: "168h" }, { l: "Latency", v: "120ms" }] },
                                    ].map((model, i) => (
                                        <div key={i} className="group bg-white dark:bg-[#183225] border border-slate-200 dark:border-[#234836] hover:border-primary/50 p-5 rounded-xl transition-all shadow-sm">
                                            <div className="flex justify-between items-start mb-3">
                                                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-primary">{model.title}</h3>
                                                <span className="px-2 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded uppercase">{model.type}</span>
                                            </div>
                                            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">{model.desc}</p>
                                            <div className="flex gap-6 text-xs font-medium border-t border-slate-100 dark:border-[#234836] pt-3">
                                                {model.metrics.map((m, j) => <div key={j} className="flex flex-col"><span className="text-slate-400 mb-0.5">{m.l}</span><span className="text-slate-900 dark:text-white text-base">{m.v}</span></div>)}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="flex flex-col gap-6">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 rounded bg-primary/10 text-primary"><span className="material-symbols-outlined">dataset</span></div>
                                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Dataset Description</h2>
                                </div>
                                <div className="bg-white dark:bg-[#183225] border border-slate-200 dark:border-[#234836] rounded-xl p-6 shadow-sm flex-1">
                                    <div className="mb-6">
                                        <div className="text-sm font-bold text-slate-400 uppercase tracking-wide mb-1">Source</div>
                                        <div className="text-lg text-slate-900 dark:text-white font-medium">NREL Western Wind Data Set</div>
                                    </div>
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr className="border-b border-slate-200 dark:border-[#234836]">
                                                <th className="py-3 text-xs font-bold text-slate-400 uppercase tracking-wider">Feature</th>
                                                <th className="py-3 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Freq</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm text-slate-700 dark:text-slate-200">
                                            {["Generator Temp", "Blade Pitch Angle", "Rotor Speed", "Vibration X/Y/Z", "Active Power"].map(f => (
                                                <tr key={f} className="border-b border-slate-100 dark:border-[#234836]/50">
                                                    <td className="py-3 font-medium">{f}</td>
                                                    <td className="py-3 text-right font-mono text-xs">10 min</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </section>
                        </div>

                        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
                            <div className="bg-slate-100 dark:bg-[#183225]/50 border border-slate-200 dark:border-[#234836] p-6 rounded-xl">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="material-symbols-outlined text-primary">target</span>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Project Scope</h3>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">Focuses on identifying gearbox failures in offshore turbines. Aims to reduce downtime costs by 15% via 2-week early warnings.</p>
                            </div>
                            <div className="bg-slate-100 dark:bg-[#183225]/50 border border-slate-200 dark:border-[#234836] p-6 rounded-xl">
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="material-symbols-outlined text-amber-500">warning</span>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Limitations</h3>
                                </div>
                                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">Requires 6 months of historical data. Latency ~200ms. Noise from storm conditions can affect vibration sensing.</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
        </div>
    );
}
