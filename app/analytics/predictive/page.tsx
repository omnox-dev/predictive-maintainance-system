import React from 'react';
import Sidebar from "@/components/layout/Sidebar";

export default function PredictiveInsights() {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
            <Sidebar />

            <main className="flex-1 overflow-y-auto w-full max-w-[1440px] mx-auto p-4 lg:p-8 flex flex-col gap-6">
                {/* Breadcrumb & Header */}
                <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap gap-2 items-center text-sm">
                        <a className="text-[#92c9ad] hover:text-white transition-colors" href="#">Fleet Overview</a>
                        <span className="text-[#92c9ad] material-symbols-outlined text-[16px]">chevron_right</span>
                        <a className="text-[#92c9ad] hover:text-white transition-colors" href="#">Wind Farm A</a>
                        <span className="text-[#92c9ad] material-symbols-outlined text-[16px]">chevron_right</span>
                        <span className="text-white font-semibold">Turbine T-104</span>
                        <span className="ml-4 px-2 py-0.5 rounded text-xs font-bold bg-emerald-900 text-emerald-400 border border-emerald-700/50 flex items-center gap-1">
                            <span className="material-symbols-outlined text-[14px]">check_circle</span> ONLINE
                        </span>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">Predictive Analysis: Turbine T-104</h1>
                            <p className="text-[#92c9ad] mt-1 text-sm md:text-base">Real-time ML inference model v4.2 • Last updated 2 mins ago</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 bg-[#234836] hover:bg-[#2f5e46] text-white rounded-lg transition-colors text-sm font-bold">
                                <span className="material-symbols-outlined text-[18px]">download</span>
                                Report
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-[#0fd671] text-black rounded-lg transition-colors text-sm font-bold shadow-[0_0_15px_rgba(19,236,128,0.3)]">
                                <span className="material-symbols-outlined text-[18px]">build</span>
                                Schedule Maintenance
                            </button>
                        </div>
                    </div>
                </div>

                {/* KPI Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    {/* Risk Card */}
                    <div className="relative overflow-hidden rounded-xl p-6 bg-gradient-to-br from-[#2a1a1a] to-[#1a1111] border border-red-900/50 shadow-lg group hover:border-red-500/50 transition-colors">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <span className="material-symbols-outlined text-[64px] text-red-500">warning</span>
                        </div>
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <p className="text-red-200 text-sm font-medium uppercase tracking-wider mb-1">Failure Risk Level</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-black text-red-500">HIGH</span>
                                    <span className="text-xl font-bold text-red-400">87%</span>
                                </div>
                            </div>
                            <div className="mt-4 pt-4 border-t border-red-900/30">
                                <div className="flex items-center gap-2 text-red-300 text-sm font-medium">
                                    <span className="material-symbols-outlined text-[18px]">trending_up</span>
                                    +15% since last week
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Time to Failure */}
                    <div className="relative overflow-hidden rounded-xl p-6 bg-surface-dark border border-[#32674d] shadow-lg">
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <p className="text-[#92c9ad] text-sm font-medium uppercase tracking-wider mb-1">Est. Time to Failure</p>
                                <span className="text-3xl font-bold text-white">~48 Hours</span>
                            </div>
                            <div className="mt-4 pt-4 border-t border-[#32674d]/50">
                                <div className="w-full bg-[#11221a] rounded-full h-2">
                                    <div className="bg-red-500 h-2 rounded-full animate-pulse" style={{ width: "15%" }}></div>
                                </div>
                                <p className="text-xs text-[#92c9ad] mt-2 text-right">Critical window approaching</p>
                            </div>
                        </div>
                    </div>
                    {/* Efficiency Drop */}
                    <div className="relative overflow-hidden rounded-xl p-6 bg-surface-dark border border-[#32674d] shadow-lg">
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <p className="text-[#92c9ad] text-sm font-medium uppercase tracking-wider mb-1">Projected Efficiency Drop</p>
                                <span className="text-3xl font-bold text-yellow-400">-12.4%</span>
                            </div>
                            <div className="mt-4 pt-4 border-t border-[#32674d]/50 flex items-center gap-2">
                                <span className="material-symbols-outlined text-yellow-400 text-[20px]">bolt</span>
                                <span className="text-sm text-white">Output reduced to 1.8MW</span>
                            </div>
                        </div>
                    </div>
                    {/* Revenue Impact */}
                    <div className="relative overflow-hidden rounded-xl p-6 bg-surface-dark border border-[#32674d] shadow-lg">
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <p className="text-[#92c9ad] text-sm font-medium uppercase tracking-wider mb-1">Daily Revenue Impact</p>
                                <span className="text-3xl font-bold text-white">-$4,200</span>
                            </div>
                            <div className="mt-4 pt-4 border-t border-[#32674d]/50">
                                <p className="text-sm text-[#92c9ad]">Based on current spot price</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area: Forecast & Explainability */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {/* Timeline Chart Section */}
                    <div className="xl:col-span-2 flex flex-col bg-surface-dark rounded-xl border border-[#32674d] overflow-hidden">
                        <div className="p-6 border-b border-[#32674d] flex flex-wrap justify-between items-center gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                    <span className="material-symbols-outlined text-primary">timeline</span>
                                    Asset Health Forecast
                                </h3>
                                <p className="text-sm text-[#92c9ad]">Predicted health score degradation over next 14 days</p>
                            </div>
                            <div className="flex bg-[#11221a] p-1 rounded-lg border border-[#32674d]">
                                <button className="px-3 py-1 rounded text-xs font-medium text-[#92c9ad] hover:text-white transition-colors">7D</button>
                                <button className="px-3 py-1 rounded text-xs font-bold bg-[#234836] text-white shadow-sm">14D</button>
                                <button className="px-3 py-1 rounded text-xs font-medium text-[#92c9ad] hover:text-white transition-colors">30D</button>
                            </div>
                        </div>
                        <div className="relative p-6 h-[400px] flex flex-col justify-end">
                            <div className="absolute inset-x-6 top-12 bottom-12 flex flex-col justify-between pointer-events-none">
                                <div className="w-full h-px bg-[#32674d]/30"></div>
                                <div className="w-full h-px bg-[#32674d]/30"></div>
                                <div className="w-full h-px bg-[#32674d]/30"></div>
                                <div className="w-full h-px bg-[#32674d]/30"></div>
                                <div className="w-full h-px bg-[#32674d]/30"></div>
                            </div>
                            <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                <defs>
                                    <linearGradient id="chartGradientForecast" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="#13ec80" stopOpacity="0.2"></stop>
                                        <stop offset="100%" stopColor="#13ec80" stopOpacity="0"></stop>
                                    </linearGradient>
                                    <linearGradient id="lineGradientForecast" x1="0" x2="1" y1="0" y2="0">
                                        <stop offset="0%" stopColor="#13ec80"></stop>
                                        <stop offset="60%" stopColor="#13ec80"></stop>
                                        <stop offset="100%" stopColor="#ef4444"></stop>
                                    </linearGradient>
                                </defs>
                                <path d="M0,20 C20,22 40,30 60,60 C70,75 85,85 100,90 V100 H0 Z" fill="url(#chartGradientForecast)"></path>
                                <path d="M0,20 C20,22 40,30 60,60 C70,75 85,85 100,90" fill="none" stroke="url(#lineGradientForecast)" strokeLinecap="round" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                                <line stroke="#92c9ad" strokeDasharray="2,1" strokeWidth="0.2" x1="45" x2="45" y1="0" y2="100"></line>
                                <circle className="animate-pulse" cx="60" cy="60" fill="#ef4444" r="1.5"></circle>
                            </svg>
                            <div className="absolute left-[45%] top-4 -translate-x-1/2 bg-[#11221a]/80 backdrop-blur px-2 py-1 rounded text-[10px] text-[#92c9ad] border border-[#32674d]">
                                NOW
                            </div>
                            <div className="absolute left-[60%] top-[55%] translate-x-2 bg-red-900/80 backdrop-blur px-3 py-2 rounded border border-red-500/50 shadow-lg">
                                <p className="text-[10px] text-red-200 font-bold uppercase tracking-wide mb-1">Critical Threshold</p>
                                <p className="text-xs text-white font-bold">Nov 14 • 08:00 AM</p>
                                <p className="text-[10px] text-red-300">Health Score &lt; 40</p>
                            </div>
                        </div>
                    </div>

                    {/* Root Cause Analysis section */}
                    <div className="xl:col-span-1 flex flex-col bg-surface-dark rounded-xl border border-[#32674d] overflow-hidden">
                        <div className="p-6 border-b border-[#32674d]">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <span className="material-symbols-outlined text-[#92c9ad]">psychology</span>
                                Root Cause Analysis
                            </h3>
                            <p className="text-sm text-[#92c9ad]">Top factors contributing to risk (SHAP)</p>
                        </div>
                        <div className="p-6 flex flex-col gap-6 overflow-y-auto max-h-[400px]">
                            {[
                                { label: "Vibration (Bearing 3)", val: 85, shap: "+0.42", color: "bg-red-500", icon: "vibration", textColor: "text-red-400" },
                                { label: "Gearbox Oil Temp", val: 60, shap: "+0.28", color: "bg-orange-400", icon: "thermostat", textColor: "text-orange-400" },
                                { label: "Rotor Speed", val: 35, shap: "+0.15", color: "bg-yellow-400", icon: "wind_power", textColor: "text-yellow-400" },
                            ].map((factor, idx) => (
                                <div key={idx} className="group">
                                    <div className="flex justify-between items-end mb-2">
                                        <div className="flex items-center gap-2">
                                            <span className={`material-symbols-outlined ${factor.textColor} text-[18px]`}>{factor.icon}</span>
                                            <span className="text-sm font-bold text-white">{factor.label}</span>
                                        </div>
                                        <span className={`text-xs font-mono ${factor.textColor} font-bold`}>{factor.shap} SHAP</span>
                                    </div>
                                    <div className="w-full bg-[#11221a] rounded-full h-2 overflow-hidden">
                                        <div className={`${factor.color} h-full rounded-full`} style={{ width: `${factor.val}%` }}></div>
                                    </div>
                                </div>
                            ))}

                            <div className="group">
                                <div className="flex justify-between items-end mb-2">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary text-[18px]">water_drop</span>
                                        <span className="text-sm font-bold text-white">Hydraulic Pressure</span>
                                    </div>
                                    <span className="text-xs font-mono text-primary font-bold">-0.05 SHAP</span>
                                </div>
                                <div className="w-full bg-[#11221a] rounded-full h-2 overflow-hidden relative">
                                    <div className="absolute left-0 w-full h-full flex items-center">
                                        <div className="w-px h-full bg-[#32674d] absolute left-1/2"></div>
                                    </div>
                                    <div className="bg-primary h-full rounded-full ml-auto mr-auto opacity-40" style={{ width: "10%" }}></div>
                                </div>
                            </div>
                            <button className="mt-2 text-xs text-primary font-bold uppercase tracking-wide hover:underline text-left">View all 24 features</button>
                        </div>
                    </div>
                </div>

                {/* Recommended Actions Footer */}
                <div className="rounded-xl border border-[#32674d] bg-[#1a2c24]/50 backdrop-blur p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                            <span className="material-symbols-outlined">lightbulb</span>
                        </div>
                        <div>
                            <h4 className="text-white font-bold">AI Recommendation</h4>
                            <p className="text-sm text-[#92c9ad]">Inspect Main Bearing #3 for lubrication failure. Schedule downtime within 24 hours to prevent cascading gearbox damage.</p>
                        </div>
                    </div>
                    <div className="flex gap-3 shrink-0">
                        <button className="px-4 py-2 rounded-lg border border-[#32674d] text-white hover:bg-[#234836] text-sm font-bold transition-colors">Dismiss</button>
                        <button className="px-4 py-2 rounded-lg bg-white text-black hover:bg-gray-200 text-sm font-bold transition-colors">Create Work Order</button>
                    </div>
                </div>
            </main>
        </div>
    );
}
