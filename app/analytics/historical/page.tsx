import React from 'react';
import Sidebar from "@/components/layout/Sidebar";

export default function HistoricalAnalytics() {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
            <Sidebar />

            <main className="flex-1 overflow-y-auto">
                <div className="flex flex-col gap-6 p-4 md:p-8 max-w-7xl mx-auto">
                    {/* Header Section */}
                    <header className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div className="flex flex-col gap-1">
                            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">Historical Analytics</h2>
                            <p className="text-slate-500 dark:text-[#92c9ad] text-base">Long-term performance review for Sector 7 Wind Farm</p>
                        </div>
                        <div className="flex flex-wrap items-center gap-3">
                            <button className="inline-flex items-center justify-center h-10 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">
                                <span className="material-symbols-outlined text-lg mr-2">calendar_today</span>
                                Last 12 Months
                            </button>
                            <div className="h-6 w-px bg-slate-200 dark:bg-slate-700 mx-1 hidden md:block"></div>
                            <button className="inline-flex items-center justify-center h-10 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-white/5 text-slate-700 dark:text-slate-200 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-white/10 transition-colors">
                                <span className="material-symbols-outlined text-lg mr-2">download</span>
                                Export CSV
                            </button>
                            <button className="inline-flex items-center justify-center h-10 px-4 rounded-lg bg-primary text-background-dark text-sm font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-colors">
                                <span className="material-symbols-outlined text-lg mr-2">picture_as_pdf</span>
                                Export PDF
                            </button>
                        </div>
                    </header>

                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="relative overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-white/5 p-6 shadow-sm">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-2 bg-emerald-100 dark:bg-emerald-500/10 rounded-lg text-emerald-600 dark:text-emerald-400">
                                    <span className="material-symbols-outlined">timer_off</span>
                                </div>
                                <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                                    -12% vs last year
                                </span>
                            </div>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Downtime Reduced</p>
                            <h3 className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">145 Hours</h3>
                        </div>
                        <div className="relative overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-white/5 p-6 shadow-sm">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-2 bg-primary/20 dark:bg-primary/10 rounded-lg text-emerald-700 dark:text-primary">
                                    <span className="material-symbols-outlined">trending_up</span>
                                </div>
                                <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-primary/10 px-2 py-1 text-xs font-medium text-emerald-700 dark:text-primary">
                                    +2.4% vs last year
                                </span>
                            </div>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Avg. Efficiency</p>
                            <h3 className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">98.2%</h3>
                        </div>
                        <div className="relative overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-white/5 p-6 shadow-sm">
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-2 bg-blue-100 dark:bg-blue-500/10 rounded-lg text-blue-600 dark:text-blue-400">
                                    <span className="material-symbols-outlined">savings</span>
                                </div>
                                <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                                    +15% vs last year
                                </span>
                            </div>
                            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Est. Cost Savings</p>
                            <h3 className="mt-1 text-3xl font-bold text-slate-900 dark:text-white">$450k</h3>
                        </div>
                    </div>

                    {/* Charts Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div className="rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-white/5 p-6 shadow-sm flex flex-col h-[400px]">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Monthly Efficiency Trends</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Output performance across all turbines</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
                                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Efficiency %</span>
                                </div>
                            </div>
                            <div className="flex-1 w-full relative">
                                <div className="absolute inset-0 flex flex-col justify-between text-xs text-slate-400 dark:text-slate-500">
                                    <div className="flex w-full items-center"><span className="w-8">100%</span><div className="flex-1 h-px bg-slate-100 dark:bg-white/5 ml-2"></div></div>
                                    <div className="flex w-full items-center"><span className="w-8">95%</span><div className="flex-1 h-px bg-slate-100 dark:bg-white/5 ml-2"></div></div>
                                    <div className="flex w-full items-center"><span className="w-8">90%</span><div className="flex-1 h-px bg-slate-100 dark:bg-white/5 ml-2"></div></div>
                                    <div className="flex w-full items-center"><span className="w-8">85%</span><div className="flex-1 h-px bg-slate-100 dark:bg-white/5 ml-2"></div></div>
                                    <div className="flex w-full items-center"><span className="w-8">80%</span><div className="flex-1 h-px bg-slate-100 dark:bg-white/5 ml-2"></div></div>
                                </div>
                                <svg className="absolute inset-0 h-full w-full pl-10 pb-6 pt-2" preserveAspectRatio="none" viewBox="0 0 100 100">
                                    <defs>
                                        <linearGradient id="effGrad" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#13ec80" stopOpacity="0.2"></stop>
                                            <stop offset="100%" stopColor="#13ec80" stopOpacity="0"></stop>
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,100 L0,30 L10,25 L20,28 L30,15 L40,18 L50,10 L60,12 L70,8 L80,15 L90,10 L100,20 L100,100 Z" fill="url(#effGrad)"></path>
                                    <path d="M0,30 L10,25 L20,28 L30,15 L40,18 L50,10 L60,12 L70,8 L80,15 L90,10 L100,20" fill="none" stroke="#13ec80" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                                </svg>
                                <div className="absolute bottom-0 left-10 right-0 flex justify-between text-xs text-slate-400 dark:text-slate-500 font-medium pt-2">
                                    <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-white/5 p-6 shadow-sm flex flex-col h-[400px]">
                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Impact Analysis</h3>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">Prevented vs Actual Failures</p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-primary"></span>
                                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Prevented</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                                        <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Actual</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 w-full relative flex items-end justify-between px-2 gap-2 pb-6 pt-4">
                                <div className="absolute inset-0 flex flex-col justify-between text-xs text-slate-400 dark:text-slate-500 pointer-events-none pb-6">
                                    <div className="w-full h-px bg-slate-100 dark:bg-white/5 border-t border-dashed border-slate-200 dark:border-white/10"></div>
                                    <div className="w-full h-px bg-slate-100 dark:bg-white/5 border-t border-dashed border-slate-200 dark:border-white/10"></div>
                                    <div className="w-full h-px bg-slate-100 dark:bg-white/5 border-t border-dashed border-slate-200 dark:border-white/10"></div>
                                    <div className="w-full h-px bg-slate-100 dark:bg-white/5 border-t border-dashed border-slate-200 dark:border-white/10"></div>
                                </div>
                                {[60, 45, 75, 80, 55, 90, 65, 70, 50, 85, 75, 95].map((h, i) => (
                                    <div key={i} className="flex flex-col justify-end items-center gap-1 h-full w-full z-10 group">
                                        <div className="flex gap-1 items-end h-full w-full justify-center">
                                            <div className="w-2 md:w-3 bg-primary rounded-t-sm transition-all duration-500 hover:opacity-80" style={{ height: `${h}%` }}></div>
                                            <div className="w-2 md:w-3 bg-slate-300 dark:bg-slate-600 rounded-t-sm transition-all duration-500 hover:opacity-80" style={{ height: `${Math.max(5, (100 - h) / 2)}%` }}></div>
                                        </div>
                                        <span className="text-[10px] text-slate-400 dark:text-slate-500">{"JFMAMJJASOND"[i]}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Incident Log table */}
                    <div className="rounded-xl bg-surface-light dark:bg-surface-dark border border-slate-200 dark:border-white/5 overflow-hidden shadow-sm">
                        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-white/5">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Incident Log</h3>
                                <p className="text-sm text-slate-500 dark:text-slate-400">Recent maintenance events and automated resolutions</p>
                            </div>
                            <button className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                                View All History
                            </button>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm text-slate-500 dark:text-slate-400">
                                <thead className="bg-slate-50 dark:bg-white/5 text-xs uppercase text-slate-700 dark:text-slate-300">
                                    <tr>
                                        <th className="px-6 py-4 font-semibold">Date</th>
                                        <th className="px-6 py-4 font-semibold">Asset ID</th>
                                        <th className="px-6 py-4 font-semibold">Event Type</th>
                                        <th className="px-6 py-4 font-semibold">Impact</th>
                                        <th className="px-6 py-4 font-semibold">Status</th>
                                        <th className="px-6 py-4 font-semibold text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200 dark:divide-white/5">
                                    <tr className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                                        <td className="px-6 py-4 font-medium text-slate-900 dark:text-white">Oct 24, 2026</td>
                                        <td className="px-6 py-4">T-402 Alpha</td>
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-2">
                                                <span className="material-symbols-outlined text-amber-500 text-[18px]">warning</span>
                                                Vibration Spike
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">Potential Failure</td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:text-emerald-400">
                                                Auto-Resolved
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-slate-400 hover:text-primary transition-colors">
                                                <span className="material-symbols-outlined">more_vert</span>
                                            </button>
                                        </td>
                                    </tr>
                                    {/* ... more rows ... */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
