import React from 'react';
import Sidebar from "@/components/layout/Sidebar";
import Link from 'next/link';

export default function AssetDetail({ params }: { params: { id: string } }) {
    // Mock data based on ID - in real app would fetch from API
    const assetId = "T-402";

    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
            <Sidebar />

            <main className="flex-1 flex flex-col md:flex-row h-full overflow-hidden">
                {/* Left/Main Column (Scrollable) */}
                <div className="flex-1 flex flex-col overflow-y-auto p-4 md:p-6 lg:p-8 gap-6">
                    {/* Breadcrumbs & Title Area */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-wrap gap-2 items-center text-sm">
                            <Link className="text-[#637588] dark:text-text-subtle font-medium hover:underline" href="/assets">Fleet</Link>
                            <span className="material-symbols-outlined text-[16px] text-[#637588] dark:text-text-subtle">chevron_right</span>
                            <a className="text-[#637588] dark:text-text-subtle font-medium hover:underline" href="#">Wind Farm A</a>
                            <span className="material-symbols-outlined text-[16px] text-[#637588] dark:text-text-subtle">chevron_right</span>
                            <span className="text-[#111418] dark:text-white font-bold">Turbine #{assetId}</span>
                        </div>
                        <div className="flex flex-wrap justify-between items-end gap-4">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-black tracking-tight text-[#111418] dark:text-white mb-2">Turbine {assetId} - North Sector</h1>
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-primary/20 text-green-700 dark:text-primary border border-primary/30">
                                        <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                                        Online
                                    </span>
                                    <span className="text-[#637588] dark:text-text-subtle text-sm">Location: 45.12° N, 93.21° W</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg border border-[#e5e7eb] dark:border-[#234836] bg-white dark:bg-[#162c21] text-[#111418] dark:text-white hover:bg-[#f0f2f4] dark:hover:bg-[#234836] transition-colors text-sm font-bold">
                                    <span className="material-symbols-outlined text-[20px]">history</span>
                                    Past 24h
                                </button>
                                <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-primary text-[#0a2e1e] hover:bg-opacity-90 transition-colors text-sm font-bold shadow-[0_0_15px_rgba(19,236,128,0.3)]">
                                    <span className="material-symbols-outlined text-[20px]">build</span>
                                    Schedule Maintenance
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* KPI Cards Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                        {/* Health Gauge */}
                        <div className="bg-white dark:bg-[#162c21] rounded-xl p-6 border border-[#e5e7eb] dark:border-[#234836] shadow-sm relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-6xl text-primary">ecg_heart</span>
                            </div>
                            <h3 className="text-[#637588] dark:text-text-subtle text-sm font-bold uppercase tracking-wider mb-4">Asset Health Score</h3>
                            <div className="flex items-center gap-6">
                                <div className="relative size-24 flex-shrink-0">
                                    {/* SVG Gauge Background */}
                                    <svg className="size-full -rotate-90 transform" viewBox="0 0 36 36">
                                        <path className="text-[#e5e7eb] dark:text-[#234836]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="100, 100" strokeWidth="3"></path>
                                        <path className="text-primary drop-shadow-[0_0_4px_rgba(19,236,128,0.5)]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="88, 100" strokeWidth="3"></path>
                                    </svg>
                                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                                        <span className="text-2xl font-black dark:text-white text-[#111418]">88</span>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <p className="text-xs text-[#637588] dark:text-text-subtle">Status: <span className="text-primary font-bold">Good</span></p>
                                    <p className="text-xs text-[#637588] dark:text-text-subtle">Vs Last Week: <span className="text-primary font-bold">+2%</span></p>
                                    <div className="mt-2 text-xs text-[#637588] dark:text-text-subtle bg-[#f0f2f4] dark:bg-[#234836] px-2 py-1 rounded">No critical faults</div>
                                </div>
                            </div>
                        </div>

                        {/* Failure Probability */}
                        <div className="bg-white dark:bg-[#162c21] rounded-xl p-6 border border-[#e5e7eb] dark:border-[#234836] shadow-sm flex flex-col justify-between relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-6xl text-[#fa5538]">warning</span>
                            </div>
                            <div>
                                <h3 className="text-[#637588] dark:text-text-subtle text-sm font-bold uppercase tracking-wider mb-1">Failure Probability</h3>
                                <p className="text-xs text-[#637588] dark:text-text-subtle">Next 30 Days</p>
                            </div>
                            <div className="flex items-end gap-3 mt-4">
                                <span className="text-4xl font-black text-[#111418] dark:text-white">4.2%</span>
                                <div className="flex items-center text-[#fa5538] dark:text-[#ff6b6b] bg-[#fff5f5] dark:bg-[#3d1a1a] px-2 py-1 rounded-lg mb-1 text-xs font-bold">
                                    <span className="material-symbols-outlined text-[14px] mr-1">trending_down</span>
                                    -1.5%
                                </div>
                            </div>
                            <div className="w-full bg-[#e5e7eb] dark:bg-[#234836] rounded-full h-1.5 mt-4">
                                <div className="bg-primary h-1.5 rounded-full" style={{ width: "4.2%" }}></div>
                            </div>
                        </div>

                        {/* Remaining Useful Life */}
                        <div className="bg-white dark:bg-[#162c21] rounded-xl p-6 border border-[#e5e7eb] dark:border-[#234836] shadow-sm flex flex-col justify-between relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <span className="material-symbols-outlined text-6xl text-blue-400">calendar_month</span>
                            </div>
                            <h3 className="text-[#637588] dark:text-text-subtle text-sm font-bold uppercase tracking-wider">Remaining Useful Life</h3>
                            <div className="flex items-baseline gap-2 mt-2">
                                <span className="text-4xl font-black text-[#111418] dark:text-white">412</span>
                                <span className="text-sm font-medium text-[#637588] dark:text-text-subtle">Days</span>
                            </div>
                            <div className="mt-4 flex gap-2">
                                <div className="flex flex-col flex-1 gap-1">
                                    <span className="text-[10px] uppercase text-[#637588] dark:text-text-subtle font-bold">Main Bearing</span>
                                    <div className="w-full bg-[#e5e7eb] dark:bg-[#234836] rounded-full h-1">
                                        <div className="bg-primary h-1 rounded-full" style={{ width: "85%" }}></div>
                                    </div>
                                </div>
                                <div className="flex flex-col flex-1 gap-1">
                                    <span className="text-[10px] uppercase text-[#637588] dark:text-text-subtle font-bold">Gearbox</span>
                                    <div className="w-full bg-[#e5e7eb] dark:bg-[#234836] rounded-full h-1">
                                        <div className="bg-yellow-400 h-1 rounded-full" style={{ width: "65%" }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Charts Section */}
                    <div className="bg-white dark:bg-[#162c21] rounded-xl border border-[#e5e7eb] dark:border-[#234836] shadow-sm flex-1 flex flex-col min-h-[400px]">
                        <div className="flex items-center justify-between p-4 border-b border-[#e5e7eb] dark:border-[#234836]">
                            <div className="flex items-center gap-4">
                                <h3 className="text-[#111418] dark:text-white font-bold text-lg">Sensor Telemetry</h3>
                                <div className="hidden sm:flex bg-[#f0f2f4] dark:bg-[#234836] rounded-lg p-1">
                                    <button className="px-3 py-1 rounded bg-white dark:bg-[#102219] text-xs font-bold text-[#111418] dark:text-white shadow-sm">All</button>
                                    <button className="px-3 py-1 rounded hover:bg-white/50 dark:hover:bg-[#102219]/50 text-xs font-medium text-[#637588] dark:text-text-subtle">Voltage</button>
                                    <button className="px-3 py-1 rounded hover:bg-white/50 dark:hover:bg-[#102219]/50 text-xs font-medium text-[#637588] dark:text-text-subtle">Current</button>
                                    <button className="px-3 py-1 rounded hover:bg-white/50 dark:hover:bg-[#102219]/50 text-xs font-medium text-[#637588] dark:text-text-subtle">Temp</button>
                                </div>
                            </div>
                            <button className="text-[#637588] dark:text-text-subtle hover:text-[#111418] dark:hover:text-white">
                                <span className="material-symbols-outlined">more_horiz</span>
                            </button>
                        </div>
                        <div className="flex-1 p-6 flex flex-col gap-8">
                            {/* Voltage Chart Row */}
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-end">
                                    <div className="flex items-center gap-2">
                                        <span className="size-2 rounded-full bg-primary"></span>
                                        <span className="text-sm font-medium text-[#111418] dark:text-white">Voltage Output</span>
                                    </div>
                                    <span className="text-lg font-bold text-[#111418] dark:text-white">692V</span>
                                </div>
                                <div className="h-24 w-full relative">
                                    {/* Background Grid Lines */}
                                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                        <div className="border-t border-[#e5e7eb] dark:border-[#234836] border-dashed"></div>
                                        <div className="border-t border-[#e5e7eb] dark:border-[#234836] border-dashed"></div>
                                        <div className="border-t border-[#e5e7eb] dark:border-[#234836] border-dashed"></div>
                                    </div>
                                    {/* Chart Line */}
                                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                        <defs>
                                            <linearGradient id="voltageGradient" x1="0" x2="0" y1="0" y2="1">
                                                <stop offset="0%" stopColor="#13ec80" stopOpacity="0.2"></stop>
                                                <stop offset="100%" stopColor="#13ec80" stopOpacity="0"></stop>
                                            </linearGradient>
                                        </defs>
                                        <path d="M0,50 Q10,45 20,55 T40,40 T60,60 T80,45 T100,50 V100 H0 Z" fill="url(#voltageGradient)"></path>
                                        <path d="M0,50 Q10,45 20,55 T40,40 T60,60 T80,45 T100,50" fill="none" stroke="#13ec80" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                                        <circle className="dark:stroke-[#162c21]" cx="60" cy="60" fill="#13ec80" r="3" stroke="white" strokeWidth="2"></circle>
                                    </svg>
                                </div>
                            </div>
                            {/* Current Chart Row */}
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-end">
                                    <div className="flex items-center gap-2">
                                        <span className="size-2 rounded-full bg-blue-400"></span>
                                        <span className="text-sm font-medium text-[#111418] dark:text-white">Current (Amps)</span>
                                    </div>
                                    <span className="text-lg font-bold text-[#111418] dark:text-white">1200A</span>
                                </div>
                                <div className="h-24 w-full relative">
                                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                        <div className="border-t border-[#e5e7eb] dark:border-[#234836] border-dashed"></div>
                                        <div className="border-t border-[#e5e7eb] dark:border-[#234836] border-dashed"></div>
                                        <div className="border-t border-[#e5e7eb] dark:border-[#234836] border-dashed"></div>
                                    </div>
                                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                        <defs>
                                            <linearGradient id="currentGradient" x1="0" x2="0" y1="0" y2="1">
                                                <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.2"></stop>
                                                <stop offset="100%" stopColor="#60a5fa" stopOpacity="0"></stop>
                                            </linearGradient>
                                        </defs>
                                        <path d="M0,60 Q25,58 50,62 T100,60 V100 H0 Z" fill="url(#currentGradient)"></path>
                                        <path d="M0,60 Q25,58 50,62 T100,60" fill="none" stroke="#60a5fa" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                                    </svg>
                                </div>
                            </div>
                            {/* Temp Chart Row */}
                            <div className="flex flex-col gap-2">
                                <div className="flex justify-between items-end">
                                    <div className="flex items-center gap-2">
                                        <span className="size-2 rounded-full bg-orange-400"></span>
                                        <span className="text-sm font-medium text-[#111418] dark:text-white">Internal Temp</span>
                                    </div>
                                    <span className="text-lg font-bold text-[#111418] dark:text-white">45°C</span>
                                </div>
                                <div className="h-24 w-full relative">
                                    <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                        <div className="border-t border-[#e5e7eb] dark:border-[#234836] border-dashed"></div>
                                        <div className="border-t border-[#e5e7eb] dark:border-[#234836] border-dashed"></div>
                                        <div className="border-t border-[#e5e7eb] dark:border-[#234836] border-dashed"></div>
                                    </div>
                                    <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                        <defs>
                                            <linearGradient id="tempGradient" x1="0" x2="0" y1="0" y2="1">
                                                <stop offset="0%" stopColor="#fb923c" stopOpacity="0.2"></stop>
                                                <stop offset="100%" stopColor="#fb923c" stopOpacity="0"></stop>
                                            </linearGradient>
                                        </defs>
                                        <path d="M0,30 L20,35 L40,32 L60,45 L80,48 L100,50 V100 H0 Z" fill="url(#tempGradient)"></path>
                                        <path d="M0,30 L20,35 L40,32 L60,45 L80,48 L100,50" fill="none" stroke="#fb923c" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                                    </svg>
                                </div>
                            </div>
                            {/* Time Axis */}
                            <div className="flex justify-between px-2 text-xs text-[#637588] dark:text-text-subtle font-bold uppercase tracking-wider">
                                <span>00:00</span>
                                <span>04:00</span>
                                <span>08:00</span>
                                <span>12:00</span>
                                <span>16:00</span>
                                <span>20:00</span>
                                <span>23:59</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column / Side Panel (Weather) */}
                <div className="w-full md:w-80 lg:w-96 flex-shrink-0 bg-white dark:bg-[#11221a] border-l border-[#e5e7eb] dark:border-[#234836] p-4 md:p-6 overflow-y-auto">
                    <h3 className="text-[#111418] dark:text-white text-lg font-bold mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary">cloud</span>
                        Weather Correlation
                    </h3>
                    {/* Live Weather Widget */}
                    <div className="bg-[#f0f2f4] dark:bg-[#162c21] rounded-xl p-6 mb-6">
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex flex-col">
                                <span className="text-sm font-medium text-[#637588] dark:text-text-subtle">Current Conditions</span>
                                <span className="text-3xl font-black text-[#111418] dark:text-white mt-1">18°C</span>
                                <span className="text-xs text-[#637588] dark:text-text-subtle mt-1">Feels like 16°C</span>
                            </div>
                            <span className="material-symbols-outlined text-5xl text-[#637588] dark:text-text-subtle">partly_cloudy_day</span>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-1 text-[#637588] dark:text-text-subtle text-xs uppercase font-bold">
                                    <span className="material-symbols-outlined text-[16px]">air</span>
                                    Wind
                                </div>
                                <span className="text-xl font-bold text-[#111418] dark:text-white">12 m/s</span>
                                <span className="text-xs text-primary font-medium">NW Direction</span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <div className="flex items-center gap-1 text-[#637588] dark:text-text-subtle text-xs uppercase font-bold">
                                    <span className="material-symbols-outlined text-[16px]">water_drop</span>
                                    Humidity
                                </div>
                                <span className="text-xl font-bold text-[#111418] dark:text-white">64%</span>
                            </div>
                        </div>
                    </div>

                    {/* Mini Chart: Power vs Wind */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-[#111418] dark:text-white text-sm font-bold">Power Curve Correlation</h4>
                        <div className="bg-white dark:bg-[#162c21] border border-[#e5e7eb] dark:border-[#234836] rounded-xl p-4 h-64 relative">
                            {/* Axes Labels */}
                            <div className="absolute left-2 top-2 text-[10px] text-[#637588] dark:text-text-subtle">Power (kW)</div>
                            <div className="absolute right-2 bottom-2 text-[10px] text-[#637588] dark:text-text-subtle">Wind (m/s)</div>
                            {/* Scatter Plot Simulation */}
                            <div className="w-full h-full relative p-4">
                                {/* Ideal Curve */}
                                <svg className="absolute inset-0 w-full h-full p-4 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                    <path className="opacity-50" d="M0,100 C20,100 30,80 50,40 C70,10 90,5 100,5" fill="none" stroke="#637588" strokeDasharray="4,4" strokeWidth="1"></path>
                                </svg>
                                {/* Data Points */}
                                <div className="absolute left-[10%] bottom-[10%] size-2 rounded-full bg-primary/60"></div>
                                <div className="absolute left-[15%] bottom-[12%] size-2 rounded-full bg-primary/60"></div>
                                <div className="absolute left-[25%] bottom-[20%] size-2 rounded-full bg-primary/60"></div>
                                <div className="absolute left-[35%] bottom-[45%] size-2 rounded-full bg-primary/60"></div>
                                <div className="absolute left-[45%] bottom-[65%] size-2 rounded-full bg-primary/60"></div>
                                <div className="absolute left-[55%] bottom-[80%] size-2 rounded-full bg-primary/60"></div>
                                <div className="absolute left-[65%] bottom-[88%] size-2 rounded-full bg-primary/60"></div>
                                <div className="absolute left-[75%] bottom-[92%] size-2 rounded-full bg-primary/60"></div>
                                {/* Outlier */}
                                <div className="absolute left-[60%] bottom-[60%] size-2 rounded-full bg-red-500 animate-pulse border border-red-200"></div>
                            </div>
                        </div>
                        <div className="text-xs text-[#637588] dark:text-text-subtle leading-relaxed">
                            <span className="text-red-500 font-bold">• Outlier Detected:</span> Turbine underperforming at 14m/s wind speed relative to theoretical power curve. Possible blade pitch misalignment.
                        </div>
                    </div>

                    {/* Alert Log Mini */}
                    <div className="mt-8">
                        <h4 className="text-[#111418] dark:text-white text-sm font-bold mb-3">Recent Weather Alerts</h4>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-3 items-start p-3 rounded-lg bg-[#fff5f5] dark:bg-[#3d1a1a] border border-red-100 dark:border-red-900/30">
                                <span className="material-symbols-outlined text-red-500 text-sm mt-0.5">thunderstorm</span>
                                <div>
                                    <p className="text-xs font-bold text-[#111418] dark:text-white">High Wind Gusts</p>
                                    <p className="text-[10px] text-[#637588] dark:text-text-subtle mt-0.5">2 hours ago • &gt;25m/s gusts detected</p>
                                </div>
                            </div>
                            <div className="flex gap-3 items-start p-3 rounded-lg bg-blue-50 dark:bg-[#1a2333] border border-blue-100 dark:border-blue-900/30">
                                <span className="material-symbols-outlined text-blue-500 text-sm mt-0.5">ac_unit</span>
                                <div>
                                    <p className="text-xs font-bold text-[#111418] dark:text-white">Icing Risk</p>
                                    <p className="text-[10px] text-[#637588] dark:text-text-subtle mt-0.5">Yesterday • Temp &lt; 0°C with high humidity</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
