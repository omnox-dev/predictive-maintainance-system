import React from 'react';
import Sidebar from "@/components/layout/Sidebar";

export default function AlertsMaintenance() {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
            <Sidebar />

            <main className="flex-1 overflow-y-auto w-full max-w-[1440px] mx-auto p-4 md:p-8 lg:p-12 flex flex-col gap-8">
                {/* Page Header */}
                <div className="flex flex-wrap justify-between items-end gap-4">
                    <div className="flex min-w-72 flex-col gap-2">
                        <h1 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">Alerts & Maintenance Center</h1>
                        <p className="text-slate-500 dark:text-[#92c9ad] text-base font-normal max-w-2xl">Monitor active alerts, predict failures, and schedule maintenance tasks to ensure optimal uptime.</p>
                    </div>
                    <div className="flex gap-3">
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-200 dark:bg-[#234836] text-slate-900 dark:text-white rounded-lg font-bold text-sm hover:bg-gray-300 dark:hover:bg-[#32674d] transition">
                            <span className="material-symbols-outlined text-[20px]">file_download</span>
                            Export Report
                        </button>
                        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-background-dark rounded-lg font-bold text-sm hover:bg-primary/90 transition shadow-[0_0_15px_rgba(19,236,128,0.3)]">
                            <span className="material-symbols-outlined text-[20px]">add</span>
                            Create Ticket
                        </button>
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="flex flex-col gap-2 rounded-xl p-6 border border-gray-200 dark:border-[#234836] bg-white dark:bg-[#193326] shadow-sm">
                        <div className="flex items-center justify-between">
                            <p className="text-slate-500 dark:text-[#92c9ad] text-sm font-medium uppercase tracking-wider">Total Active Alerts</p>
                            <span className="material-symbols-outlined text-slate-400">notifications_active</span>
                        </div>
                        <div className="flex items-end gap-3 mt-1">
                            <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">24</p>
                            <span className="text-primary text-sm font-medium bg-primary/10 px-2 py-0.5 rounded flex items-center mb-1">
                                <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span> +2%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl p-6 border border-red-200 dark:border-red-900/30 bg-red-50 dark:bg-[#193326] relative overflow-hidden shadow-sm">
                        <div className="absolute right-0 top-0 p-6 opacity-10">
                            <span className="material-symbols-outlined text-8xl text-red-500">warning</span>
                        </div>
                        <div className="flex items-center justify-between relative z-10">
                            <p className="text-red-700 dark:text-red-400 text-sm font-medium uppercase tracking-wider">Critical Failures</p>
                            <span className="material-symbols-outlined text-red-500">error</span>
                        </div>
                        <div className="flex items-end gap-3 mt-1 relative z-10">
                            <p className="text-red-700 dark:text-white text-3xl font-bold leading-tight">3</p>
                            <span className="text-red-600 dark:text-red-400 text-sm font-medium bg-red-100 dark:bg-red-900/40 px-2 py-0.5 rounded flex items-center mb-1">
                                <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span> +15%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl p-6 border border-amber-200 dark:border-amber-900/30 bg-white dark:bg-[#193326] shadow-sm">
                        <div className="flex items-center justify-between">
                            <p className="text-slate-500 dark:text-[#92c9ad] text-sm font-medium uppercase tracking-wider">Warnings</p>
                            <span className="material-symbols-outlined text-amber-500">warning_amber</span>
                        </div>
                        <div className="flex items-end gap-3 mt-1">
                            <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">12</p>
                            <span className="text-amber-600 dark:text-amber-400 text-sm font-medium bg-amber-100 dark:bg-amber-900/20 px-2 py-0.5 rounded flex items-center mb-1">
                                <span className="material-symbols-outlined text-[14px] mr-1">trending_up</span> +5%
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 rounded-xl p-6 border border-gray-200 dark:border-[#234836] bg-white dark:bg-[#193326] shadow-sm">
                        <div className="flex items-center justify-between">
                            <p className="text-slate-500 dark:text-[#92c9ad] text-sm font-medium uppercase tracking-wider">Scheduled Maint.</p>
                            <span className="material-symbols-outlined text-blue-400">calendar_month</span>
                        </div>
                        <div className="flex items-end gap-3 mt-1">
                            <p className="text-slate-900 dark:text-white text-3xl font-bold leading-tight">9</p>
                            <span className="text-primary text-sm font-medium bg-primary/10 px-2 py-0.5 rounded flex items-center mb-1">
                                <span className="material-symbols-outlined text-[14px] mr-1">trending_down</span> -2%
                            </span>
                        </div>
                    </div>
                </div>

                {/* Quick Actions / Filters */}
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <h2 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">Quick Filters</h2>
                        <div className="flex gap-2 text-sm">
                            <button className="text-slate-600 dark:text-[#92c9ad] hover:text-primary underline">Clear All</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button className="group flex items-start gap-4 rounded-lg border border-red-200 dark:border-red-900/40 bg-red-50 hover:bg-red-100 dark:bg-[#193326] dark:hover:bg-red-900/20 p-4 text-left transition-all">
                            <div className="rounded-full bg-red-100 dark:bg-red-900/40 p-2 text-red-600 dark:text-red-500 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">gpp_maybe</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Critical Alerts</h3>
                                <p className="text-slate-500 dark:text-[#92c9ad] text-sm font-normal">Immediate attention required (3)</p>
                            </div>
                        </button>
                        <button className="group flex items-start gap-4 rounded-lg border border-amber-200 dark:border-amber-900/40 bg-amber-50 hover:bg-amber-100 dark:bg-[#193326] dark:hover:bg-amber-900/20 p-4 text-left transition-all">
                            <div className="rounded-full bg-amber-100 dark:bg-amber-900/40 p-2 text-amber-600 dark:text-amber-500 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">warning</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">Warning Alerts</h3>
                                <p className="text-slate-500 dark:text-[#92c9ad] text-sm font-normal">Monitor closely (12)</p>
                            </div>
                        </button>
                        <button className="group flex items-start gap-4 rounded-lg border border-blue-200 dark:border-blue-900/40 bg-blue-50 hover:bg-blue-100 dark:bg-[#193326] dark:hover:bg-blue-900/20 p-4 text-left transition-all">
                            <div className="rounded-full bg-blue-100 dark:bg-blue-900/40 p-2 text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform">
                                <span className="material-symbols-outlined">info</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Info Alerts</h3>
                                <p className="text-slate-500 dark:text-[#92c9ad] text-sm font-normal">System notifications (9)</p>
                            </div>
                        </button>
                    </div>
                </div>

                {/* Main Data Table */}
                <div className="overflow-hidden rounded-xl border border-gray-200 dark:border-[#234836] bg-white dark:bg-[#193326] shadow-lg">
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[800px]">
                            <thead>
                                <tr className="bg-gray-50 dark:bg-[#234836]/50 border-b border-gray-200 dark:border-[#234836]">
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 dark:text-[#92c9ad] uppercase tracking-wider">Severity</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 dark:text-[#92c9ad] uppercase tracking-wider">Asset ID</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 dark:text-[#92c9ad] uppercase tracking-wider">ETTF</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 dark:text-[#92c9ad] uppercase tracking-wider w-[25%]">Recommended Action</th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 dark:text-[#92c9ad] uppercase tracking-wider">Status</th>
                                    <th className="px-6 py-4 text-right text-xs font-bold text-slate-500 dark:text-[#92c9ad] uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-[#234836]">
                                <tr className="group hover:bg-gray-50 dark:hover:bg-[#234836]/30 transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">
                                            <span className="material-symbols-outlined text-[16px]">error</span> Critical
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-slate-900 dark:text-white">WT-Alpha-04</span>
                                            <span className="text-xs text-slate-500 dark:text-[#92c9ad]">North Farm • Turbine</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="text-sm font-mono font-medium text-red-600 dark:text-red-400">48h 12m</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm font-medium text-slate-900 dark:text-white">Lubricate Bearings</div>
                                        <div className="text-xs text-slate-500 dark:text-[#92c9ad] mt-0.5 truncate max-w-[200px]">Gearbox vibration detected &gt; 5mm/s</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-medium border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                                            Open
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors">
                                                <span className="material-symbols-outlined text-[20px]">check_circle</span>
                                            </button>
                                            <button className="px-3 py-1.5 bg-primary/20 hover:bg-primary text-primary hover:text-black rounded-lg text-xs font-bold transition-all">
                                                Schedule
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {/* ... more rows could be mapped here ... */}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex items-center justify-between border-t border-gray-200 dark:border-[#234836] px-6 py-4 bg-gray-50 dark:bg-[#234836]/20">
                        <div className="text-xs text-slate-500 dark:text-[#92c9ad]">
                            Showing <span className="font-bold text-slate-900 dark:text-white">1-5</span> of <span className="font-bold text-slate-900 dark:text-white">24</span> alerts
                        </div>
                        <div className="flex gap-2">
                            <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-[#234836] text-slate-500 dark:text-[#92c9ad] disabled:opacity-50 transition-colors">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-[#234836] text-slate-500 dark:text-[#92c9ad] transition-colors">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
