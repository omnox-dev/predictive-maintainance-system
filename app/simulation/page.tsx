import React from 'react';
import Sidebar from "@/components/layout/Sidebar";

export default function SimulationMode() {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
            <Sidebar />

            <div className="flex flex-1 overflow-hidden">
                {/* LEFT COLUMN: Controls */}
                <aside className="w-full max-w-[420px] flex flex-col border-r border-[#234836] bg-[#11221a] overflow-y-auto z-10">
                    <div className="p-6 border-b border-[#234836]">
                        <h1 className="text-2xl font-bold text-white mb-2">Simulation Controls</h1>
                        <p className="text-[#92c9ad] text-sm">Manipulate sensor inputs to observe predictive outcomes on the ML model.</p>
                    </div>

                    <div className="p-6 border-b border-[#234836] space-y-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-[#92c9ad]">Environmental Inputs</h3>
                            <span className="px-2 py-0.5 rounded text-[10px] bg-primary/20 text-primary font-bold">LIVE</span>
                        </div>

                        {[
                            { label: "Ambient Temp", val: "24°C", icon: "thermostat", min: -20, max: 50, curr: 24, unit: "°C" },
                            { label: "Wind Speed", val: "12 m/s", icon: "air", min: 0, max: 35, curr: 12, unit: " m/s" },
                        ].map((input, idx) => (
                            <div key={idx} className="group">
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-medium text-white flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#92c9ad] text-lg">{input.icon}</span>
                                        {input.label}
                                    </label>
                                    <span className="text-primary font-mono text-sm">{input.val}</span>
                                </div>
                                <input className="w-full h-2 bg-[#234836] rounded-lg appearance-none cursor-pointer accent-primary" max={input.max} min={input.min} type="range" defaultValue={input.curr} />
                            </div>
                        ))}
                    </div>

                    <div className="p-6 border-b border-[#234836] space-y-6">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="text-sm font-bold uppercase tracking-wider text-[#92c9ad]">Operational Stress</h3>
                            <span className="px-2 py-0.5 rounded text-[10px] bg-primary/20 text-primary font-bold">ACTIVE</span>
                        </div>

                        <div className="group">
                            <div className="flex justify-between mb-2">
                                <label className="text-sm font-medium text-white flex items-center gap-2">
                                    <span className="material-symbols-outlined text-[#92c9ad] text-lg">cyclone</span>
                                    Rotor RPM
                                </label>
                                <span className="text-red-500 font-mono text-sm font-bold">18.5 RPM</span>
                            </div>
                            <input className="w-full h-2 bg-[#234836] rounded-lg appearance-none cursor-pointer accent-red-500" max="25" min="0" type="range" defaultValue="18.5" />
                        </div>

                        {[
                            { label: "Vibration (Hz)", val: "45 Hz", icon: "vibration", min: 0, max: 100, curr: 45 },
                            { label: "Voltage Output", val: "690 V", icon: "electric_bolt", min: 600, max: 750, curr: 690 },
                        ].map((input, idx) => (
                            <div key={idx} className="group">
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm font-medium text-white flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[#92c9ad] text-lg">{input.icon}</span>
                                        {input.label}
                                    </label>
                                    <span className="text-primary font-mono text-sm">{input.val}</span>
                                </div>
                                <input className="w-full h-2 bg-[#234836] rounded-lg appearance-none cursor-pointer accent-primary" max={input.max} min={input.min} type="range" defaultValue={input.curr} />
                            </div>
                        ))}
                    </div>

                    <div className="p-6 mt-auto">
                        <button className="w-full bg-primary hover:bg-[#0fd671] text-[#11221a] font-bold py-3 px-4 rounded-xl shadow-[0_0_20px_rgba(19,236,128,0.3)] transition-all flex items-center justify-center gap-2 mb-3">
                            <span className="material-symbols-outlined">play_circle</span>
                            Run Scenario
                        </button>
                        <button className="w-full bg-[#193326] hover:bg-[#234836] text-white font-medium py-3 px-4 rounded-xl border border-[#234836] transition-all flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined">restart_alt</span>
                            Reset to Baseline
                        </button>
                    </div>
                </aside>

                {/* RIGHT COLUMN: Visualization */}
                <main className="flex-1 flex flex-col bg-background-dark overflow-y-auto relative">
                    <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(#13ec80 1px, transparent 1px), linear-gradient(90deg, #13ec80 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>

                    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 z-10">
                        <div className="bg-[#193326] border border-[#234836] rounded-xl p-4 flex items-center justify-between">
                            <div>
                                <p className="text-[#92c9ad] text-xs font-medium uppercase mb-1">Health Score</p>
                                <div className="flex items-end gap-2">
                                    <span className="text-3xl font-bold text-white">92%</span>
                                    <span className="text-primary text-sm font-medium mb-1">Optimal</span>
                                </div>
                            </div>
                            <div className="size-12 rounded-full border-4 border-primary/20 border-t-primary flex items-center justify-center">
                                <span className="material-symbols-outlined text-primary">check</span>
                            </div>
                        </div>

                        <div className="bg-[#193326] border border-[#234836] rounded-xl p-4 flex items-center justify-between relative overflow-hidden group">
                            <div className="absolute inset-0 bg-red-500/10 animate-pulse hidden group-hover:block"></div>
                            <div>
                                <p className="text-[#92c9ad] text-xs font-medium uppercase mb-1">Failure Probability (48h)</p>
                                <div className="flex items-end gap-2">
                                    <span className="text-3xl font-bold text-red-500">High</span>
                                    <span className="text-red-500 text-sm font-medium mb-1">+12%</span>
                                </div>
                            </div>
                            <div className="size-12 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                                <span className="material-symbols-outlined">warning</span>
                            </div>
                        </div>

                        <div className="bg-[#193326] border border-[#234836] rounded-xl p-4 flex items-center justify-between">
                            <div>
                                <p className="text-[#92c9ad] text-xs font-medium uppercase mb-1">RUL Prediction</p>
                                <div className="flex items-end gap-2">
                                    <span className="text-3xl font-bold text-white">342</span>
                                    <span className="text-[#92c9ad] text-sm font-medium mb-1">Days</span>
                                </div>
                            </div>
                            <div className="size-12 rounded-full bg-[#234836] flex items-center justify-center text-[#92c9ad]">
                                <span className="material-symbols-outlined">schedule</span>
                            </div>
                        </div>
                    </div>

                    <div className="px-6 pb-4 flex-1 flex flex-col min-h-[400px] z-10">
                        <div className="bg-[#193326] border border-[#234836] rounded-xl p-6 flex flex-col h-full shadow-lg">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                                        <span className="size-2 rounded-full bg-primary animate-pulse"></span>
                                        Real-time ML Response
                                    </h2>
                                    <p className="text-sm text-[#92c9ad]">Predictive failure analysis based on current simulation inputs.</p>
                                </div>
                                <div className="flex gap-2">
                                    <div className="flex items-center gap-2 px-3 py-1 bg-[#11221a] rounded border border-[#234836]">
                                        <span className="size-2 rounded-full bg-primary"></span>
                                        <span className="text-xs text-white">Baseline</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1 bg-[#11221a] rounded border border-[#234836]">
                                        <span className="size-2 rounded-full bg-red-500"></span>
                                        <span className="text-xs text-white">Predicted Failure</span>
                                    </div>
                                </div>
                            </div>

                            <div className="relative flex-1 w-full bg-[#11221a] rounded-lg overflow-hidden border border-[#234836]">
                                <svg className="absolute inset-0 w-full h-full pl-10 pr-4 py-4 overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                    <defs>
                                        <linearGradient id="simGradPrimary" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#13ec80" stopOpacity="0.2"></stop>
                                            <stop offset="100%" stopColor="#13ec80" stopOpacity="0"></stop>
                                        </linearGradient>
                                        <linearGradient id="simGradDanger" x1="0" x2="0" y1="0" y2="1">
                                            <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3"></stop>
                                            <stop offset="100%" stopColor="#ef4444" stopOpacity="0"></stop>
                                        </linearGradient>
                                    </defs>
                                    <path d="M0,50 Q25,50 50,45 T100,48 L100,100 L0,100 Z" fill="url(#simGradPrimary)"></path>
                                    <path d="M0,50 Q25,50 50,45 T100,48" fill="none" stroke="#13ec80" strokeDasharray="4 4" strokeWidth="1" vectorEffect="non-scaling-stroke"></path>
                                    <path d="M0,55 Q25,55 50,30 T100,10 L100,100 L0,100 Z" fill="url(#simGradDanger)"></path>
                                    <path d="M0,55 Q25,55 50,30 T100,10" fill="none" stroke="#ef4444" strokeWidth="2" vectorEffect="non-scaling-stroke"></path>
                                </svg>
                                <div className="absolute left-10 right-4 bottom-0 h-6 flex justify-between text-[10px] text-[#92c9ad] items-center">
                                    <span>00:00</span><span>04:00</span><span>08:00</span><span>12:00</span><span>16:00</span><span>20:00</span><span>24:00</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-6 pb-6 z-10 h-64 shrink-0">
                        <div className="bg-[#193326] border border-[#234836] rounded-xl p-0 flex flex-col overflow-hidden">
                            <div className="px-4 py-3 border-b border-[#234836] bg-[#11221a]/50 flex justify-between items-center">
                                <h3 className="text-sm font-bold text-white uppercase tracking-wide">System Log</h3>
                            </div>
                            <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs">
                                <div className="flex gap-3 text-[#92c9ad]"><span className="opacity-50">[14:32:05]</span><span>Simulation started. Baseline loaded.</span></div>
                                <div className="flex gap-3 text-white"><span className="text-[#92c9ad] opacity-50">[14:32:45]</span><span>User Input: <span className="text-primary">Wind Speed</span> increased to 12m/s.</span></div>
                                <div className="flex gap-3 text-yellow-500"><span className="text-[#92c9ad] opacity-50">[14:33:10]</span><span>Warning: Vibration detected above threshold (45Hz).</span></div>
                                <div className="flex gap-3 text-red-500 font-bold bg-red-500/5 p-1 rounded -mx-1"><span className="text-[#92c9ad] opacity-50 font-normal">[14:33:22]</span><span>CRITICAL: Bearing failure predicted within 48h.</span></div>
                            </div>
                        </div>
                        <div className="bg-[#193326] border border-[#234836] rounded-xl p-4 flex gap-4">
                            <div className="w-1/2 flex flex-col justify-center">
                                <h3 className="text-sm font-bold text-white uppercase tracking-wide mb-4">Affected Components</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-2 rounded bg-[#11221a] border border-[#234836]">
                                        <div className="flex items-center gap-2"><div className="size-2 rounded-full bg-red-500 animate-pulse"></div><span className="text-sm text-white">Main Bearing</span></div>
                                        <span className="text-xs text-red-500 font-bold">CRITICAL</span>
                                    </div>
                                    <div className="flex items-center justify-between p-2 rounded bg-[#11221a] border border-[#234836]">
                                        <div className="flex items-center gap-2"><div className="size-2 rounded-full bg-yellow-500"></div><span className="text-sm text-white">Gearbox</span></div>
                                        <span className="text-xs text-yellow-500 font-bold">WARNING</span>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2 relative flex items-center justify-center bg-[#11221a] rounded-lg border border-[#234836] overflow-hidden">
                                <div className="absolute top-[30%] left-[40%] size-6 rounded-full bg-red-500/30 flex items-center justify-center animate-ping"></div>
                                <div className="absolute top-[30%] left-[40%] size-3 rounded-full bg-red-500 border border-white"></div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
