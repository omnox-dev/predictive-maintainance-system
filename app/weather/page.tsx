import React from 'react';
import Sidebar from "@/components/layout/Sidebar";

export default function WeatherContext() {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
            <Sidebar />

            <main className="flex-1 overflow-y-auto bg-background-dark max-w-7xl mx-auto w-full p-4 md:p-8 lg:p-12 flex flex-col gap-8">
                {/* Page Header */}
                <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2 border-b border-[#234836]/50">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Weather & Environment Context</h1>
                        <p className="text-[#92c9ad] text-base font-normal max-w-2xl">Real-time environmental monitoring and predictive analytics for Alpha Sector Solar Array.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#193326] border border-[#234836]">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                            <span className="text-xs font-medium text-[#92c9ad]">Live Updates</span>
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2 bg-[#234836] hover:bg-[#32674d] text-white text-sm font-bold rounded-lg transition-colors">
                            <span className="material-symbols-outlined text-[18px]">download</span>
                            Export Data
                        </button>
                    </div>
                </header>

                {/* Current Conditions Grid */}
                <section className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white flex items-center gap-2">
                            <span className="material-symbols-outlined text-primary">sensors</span>
                            Current Telemetry
                        </h2>
                        <span className="text-xs text-[#92c9ad]">Last updated: 2 mins ago</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                        {/* Temperature Card */}
                        <div className="bg-[#193326] border border-[#234836] p-5 rounded-xl flex flex-col gap-4 relative overflow-hidden group hover:border-[#32674d] transition-all">
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all"></div>
                            <div className="flex items-start justify-between z-10">
                                <div className="bg-[#234836] p-2 rounded-lg text-primary">
                                    <span className="material-symbols-outlined">device_thermostat</span>
                                </div>
                                <span className="text-xs font-bold px-2 py-1 rounded bg-[#234836] text-[#13ec80]">Trending Up</span>
                            </div>
                            <div className="flex flex-col gap-1 z-10">
                                <span className="text-[#92c9ad] text-sm font-medium">Ambient Temperature</span>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-bold text-white">24°C</span>
                                    <span className="text-sm text-[#92c9ad]">/ 75°F</span>
                                </div>
                            </div>
                        </div>
                        {/* Irradiance Card */}
                        <div className="bg-[#193326] border border-[#234836] p-5 rounded-xl flex flex-col gap-4 relative overflow-hidden group hover:border-[#32674d] transition-all">
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-yellow-500/5 rounded-full blur-2xl group-hover:bg-yellow-500/10 transition-all"></div>
                            <div className="flex items-start justify-between z-10">
                                <div className="bg-[#234836] p-2 rounded-lg text-yellow-400">
                                    <span className="material-symbols-outlined">light_mode</span>
                                </div>
                                <span className="text-xs font-bold px-2 py-1 rounded bg-[#234836] text-[#13ec80]">Optimal</span>
                            </div>
                            <div className="flex flex-col gap-1 z-10">
                                <span className="text-[#92c9ad] text-sm font-medium">Solar Irradiance</span>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-bold text-white">850</span>
                                    <span className="text-sm text-[#92c9ad]">W/m²</span>
                                </div>
                            </div>
                        </div>
                        {/* Wind Speed Card */}
                        <div className="bg-[#193326] border border-[#234836] p-5 rounded-xl flex flex-col gap-4 relative overflow-hidden group hover:border-[#32674d] transition-all">
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-all"></div>
                            <div className="flex items-start justify-between z-10">
                                <div className="bg-[#234836] p-2 rounded-lg text-blue-400">
                                    <span className="material-symbols-outlined">air</span>
                                </div>
                                <span className="text-xs font-bold px-2 py-1 rounded bg-[#234836] text-[#92c9ad]">Normal</span>
                            </div>
                            <div className="flex flex-col gap-1 z-10">
                                <span className="text-[#92c9ad] text-sm font-medium">Wind Speed</span>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-bold text-white">12</span>
                                    <span className="text-sm text-[#92c9ad]">km/h NW</span>
                                </div>
                            </div>
                        </div>
                        {/* Humidity Card */}
                        <div className="bg-[#193326] border border-[#234836] p-5 rounded-xl flex flex-col gap-4 relative overflow-hidden group hover:border-[#32674d] transition-all">
                            <div className="absolute -right-4 -top-4 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all"></div>
                            <div className="flex items-start justify-between z-10">
                                <div className="bg-[#234836] p-2 rounded-lg text-cyan-400">
                                    <span className="material-symbols-outlined">humidity_percentage</span>
                                </div>
                                <span className="text-xs font-bold px-2 py-1 rounded bg-[#234836] text-[#92c9ad]">Dry</span>
                            </div>
                            <div className="flex flex-col gap-1 z-10">
                                <span className="text-[#92c9ad] text-sm font-medium">Humidity</span>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-bold text-white">45%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Correlation & Forecast Section */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {/* Main Chart */}
                    <div className="xl:col-span-2 flex flex-col bg-[#193326] border border-[#234836] rounded-xl overflow-hidden">
                        <div className="p-6 border-b border-[#234836] flex flex-wrap gap-4 justify-between items-center">
                            <div>
                                <h3 className="text-lg font-bold text-white">Efficiency vs. Temperature Correlation</h3>
                                <p className="text-sm text-[#92c9ad]">Analyzing thermal degradation impact on output</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-primary"></span>
                                <span className="text-xs text-white">Efficiency</span>
                                <span className="inline-flex items-center justify-center w-3 h-3 rounded-full bg-[#92c9ad] ml-2"></span>
                                <span className="text-xs text-white">Temp</span>
                            </div>
                        </div>
                        <div className="p-6 flex flex-col gap-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-3xl font-bold text-white tracking-tight">-2.5%</p>
                                    <p className="text-sm text-[#92c9ad]">Efficiency loss per +10°C over baseline</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-bold text-red-500">-0.8%</p>
                                    <p className="text-sm text-[#92c9ad]">Last 24 Hours Impact</p>
                                </div>
                            </div>
                            <div className="relative w-full h-64 mt-2">
                                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                                    <div className="w-full h-px bg-[#234836]"></div>
                                    <div className="w-full h-px bg-[#234836]"></div>
                                    <div className="w-full h-px bg-[#234836]"></div>
                                    <div className="w-full h-px bg-[#234836]"></div>
                                    <div className="w-full h-px bg-[#234836]"></div>
                                </div>
                                <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                    <defs>
                                        <linearGradient id="weatherChartGrad" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#13ec80" stopOpacity="0.2"></stop>
                                            <stop offset="100%" stopColor="#13ec80" stopOpacity="0"></stop>
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,60 Q20,55 40,40 T80,30 T100,50 L100,100 L0,100 Z" fill="url(#weatherChartGrad)"></path>
                                    <path d="M0,60 Q20,55 40,40 T80,30 T100,50" fill="none" stroke="#13ec80" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                                    <path d="M0,70 Q25,60 50,20 T100,30" fill="none" stroke="#92c9ad" strokeDasharray="2,2" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                                </svg>
                            </div>
                            <div className="flex justify-between text-xs text-[#92c9ad] font-mono mt-2">
                                <span>00:00</span><span>04:00</span><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>24:00</span>
                            </div>
                        </div>
                    </div>

                    {/* 7-Day Generation Forecast */}
                    <div className="flex flex-col bg-[#193326] border border-[#234836] rounded-xl overflow-hidden">
                        <div className="p-6 border-b border-[#234836]">
                            <h3 className="text-lg font-bold text-white">7-Day Generation Forecast</h3>
                            <p className="text-sm text-[#92c9ad]">Predicted output based on weather</p>
                        </div>
                        <div className="flex-1 overflow-y-auto p-2">
                            {[
                                { day: "Today", mon: "Mon", icon: "sunny", temp: "28°C", gw: "1.2 GW", w: "90%", color: "bg-primary" },
                                { day: "Tue", mon: "Oct 24", icon: "cloud", temp: "22°C", gw: "0.8 GW", w: "65%", color: "bg-[#92c9ad]" },
                                { day: "Wed", mon: "Oct 25", icon: "rainy", temp: "19°C", gw: "0.4 GW", w: "30%", color: "bg-[#92c9ad]" },
                                { day: "Thu", mon: "Oct 26", icon: "partly_cloudy_day", temp: "24°C", gw: "0.9 GW", w: "75%", color: "bg-[#92c9ad]" },
                                { day: "Fri", mon: "Oct 27", icon: "sunny", temp: "29°C", gw: "1.3 GW", w: "95%", color: "bg-[#92c9ad]" },
                            ].map((d, i) => (
                                <div key={i} className={`flex items-center justify-between p-3 rounded-lg ${i === 0 ? 'bg-[#234836]/50 border border-[#32674d]/30' : 'hover:bg-[#234836]/30'}`}>
                                    <div className="flex items-center gap-3">
                                        <div className="flex flex-col w-12 text-center">
                                            <span className={`text-xs font-bold ${i === 0 ? 'text-primary' : 'text-white'}`}>{d.day}</span>
                                            <span className="text-[10px] text-[#92c9ad] uppercase">{d.mon}</span>
                                        </div>
                                        <span className="material-symbols-outlined text-yellow-400">{d.icon}</span>
                                        <span className="text-sm font-bold text-white">{d.temp}</span>
                                    </div>
                                    <div className="flex flex-col items-end gap-1 w-24">
                                        <span className={`text-xs font-bold ${i === 0 ? 'text-white' : 'text-[#92c9ad]'}`}>{d.gw}</span>
                                        <div className="w-full h-1.5 bg-[#11221a] rounded-full overflow-hidden">
                                            <div className={`h-full ${d.color}`} style={{ width: d.w }}></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Wind Analysis & Alerts */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
                    <div className="bg-[#193326] border border-[#234836] rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-white mb-1">Wind Vector Analysis</h3>
                            <p className="text-sm text-[#92c9ad] mb-4">Current direction favors Sector B turbines.</p>
                            <div className="flex flex-col gap-3">
                                <div className="flex justify-between items-center text-sm border-b border-[#234836] pb-2">
                                    <span className="text-[#92c9ad]">Avg Velocity</span>
                                    <span className="text-white font-mono">12.4 km/h</span>
                                </div>
                                <div className="flex justify-between items-center text-sm border-b border-[#234836] pb-2">
                                    <span className="text-[#92c9ad]">Gust Peak</span>
                                    <span className="text-white font-mono">18.2 km/h</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-[#92c9ad]">Direction</span>
                                    <span className="text-white font-mono">315° (NW)</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-40 h-40 flex-shrink-0">
                            <div className="absolute inset-0 rounded-full border-2 border-[#234836]"></div>
                            <div className="absolute inset-2 rounded-full border border-[#234836] border-dashed"></div>
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 bg-[#193326] px-1 text-[10px] text-[#92c9ad] font-bold">N</div>
                            <div className="absolute inset-0 flex items-center justify-center rotate-[-45deg]">
                                <div className="w-1 h-16 bg-gradient-to-t from-transparent to-primary rounded-full relative">
                                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[8px] border-b-primary"></div>
                                </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full z-10"></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#193326] border border-[#234836] rounded-xl p-6 flex flex-col">
                        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                            <span className="material-symbols-outlined text-orange-500">warning</span>
                            Active Environmental Alerts
                        </h3>
                        <div className="flex flex-col gap-3">
                            <div className="flex gap-3 p-3 bg-red-500/10 border-l-4 border-red-500 rounded-r-lg">
                                <span className="material-symbols-outlined text-red-500 text-lg mt-0.5">thunderstorm</span>
                                <div>
                                    <h4 className="text-sm font-bold text-white">Storm Front Approaching</h4>
                                    <p className="text-xs text-[#92c9ad] mt-1">Expected impact in 4 hours. Automated panel stowing sequence recommended.</p>
                                </div>
                            </div>
                            <div className="flex gap-3 p-3 bg-yellow-500/10 border-l-4 border-yellow-500 rounded-r-lg">
                                <span className="material-symbols-outlined text-yellow-500 text-lg mt-0.5">wb_sunny</span>
                                <div>
                                    <h4 className="text-sm font-bold text-white">UV Index High</h4>
                                    <p className="text-xs text-[#92c9ad] mt-1">Maintenance crews require additional heat protection gear.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
