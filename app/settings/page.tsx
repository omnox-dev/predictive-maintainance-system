import React from 'react';
import Sidebar from "@/components/layout/Sidebar";

export default function SystemSettings() {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
            <Sidebar />

            <main className="flex-1 flex flex-col h-full overflow-hidden relative">
                <header className="h-16 flex items-center justify-between px-6 border-b border-[#234836] bg-[#11221a]/95 backdrop-blur z-10 shrink-0">
                    <div className="flex items-center gap-2 text-sm text-[#92c9ad]">
                        <span>Settings</span>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <span className="text-white font-medium">Configuration</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="text-[#92c9ad] hover:text-white transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>
                        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 border border-white/10"></div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto p-6 md:p-10">
                    <div className="max-w-5xl mx-auto space-y-8 pb-20">
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">System Configuration</h1>
                                <p className="text-[#92c9ad] max-w-2xl">Manage predictive maintenance model parameters, alert thresholds, and data source connections.</p>
                            </div>
                            <div className="flex gap-3">
                                <button className="px-4 py-2 rounded-lg bg-[#234836] text-white text-sm font-medium hover:bg-[#2f5c45] transition-colors">Discard Changes</button>
                                <button className="px-4 py-2 rounded-lg bg-primary text-[#11221a] text-sm font-bold hover:bg-[#10d673] transition-colors shadow-[0_0_15px_rgba(19,236,128,0.3)]">Save Configuration</button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            <div className="lg:col-span-2 space-y-6">
                                <div className="bg-[#1a3326] rounded-xl p-6 border border-[#234836] shadow-lg">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-[#234836] rounded-lg">
                                            <span className="material-symbols-outlined text-primary">tune</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white">Threshold Tuning</h3>
                                            <p className="text-xs text-[#92c9ad]">Define boundaries for system alerts.</p>
                                        </div>
                                    </div>
                                    <div className="space-y-8">
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-end">
                                                <label className="text-sm font-medium text-white">Warning Threshold</label>
                                                <span className="text-primary font-mono bg-[#11221a] px-2 py-1 rounded text-sm">75%</span>
                                            </div>
                                            <div className="relative w-full h-2 bg-[#11221a] rounded-full">
                                                <div className="absolute h-full bg-yellow-500/80 rounded-full" style={{ width: "75%" }}></div>
                                                <input className="absolute w-full h-full opacity-0 cursor-pointer z-10" max="100" min="0" type="range" defaultValue="75" />
                                                <div className="absolute w-4 h-4 bg-white rounded-full shadow top-1/2 -translate-y-1/2 -ml-2 pointer-events-none" style={{ left: "75%" }}></div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-end">
                                                <label className="text-sm font-medium text-white">Critical Alert Threshold</label>
                                                <span className="text-primary font-mono bg-[#11221a] px-2 py-1 rounded text-sm">92%</span>
                                            </div>
                                            <div className="relative w-full h-2 bg-[#11221a] rounded-full">
                                                <div className="absolute h-full bg-red-500/80 rounded-full" style={{ width: "92%" }}></div>
                                                <input className="absolute w-full h-full opacity-0 cursor-pointer z-10" max="100" min="0" type="range" defaultValue="92" />
                                                <div className="absolute w-4 h-4 bg-white rounded-full shadow top-1/2 -translate-y-1/2 -ml-2 pointer-events-none" style={{ left: "92%" }}></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#1a3326] rounded-xl p-6 border border-[#234836] shadow-lg">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-[#234836] rounded-lg"><span className="material-symbols-outlined text-primary">graphic_eq</span></div>
                                            <div>
                                                <h3 className="text-lg font-bold text-white">Alert Sensitivity</h3>
                                                <p className="text-xs text-[#92c9ad]">Adjust noise reduction filters.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-4">
                                            <label className="text-sm font-medium text-white block">Model Sensitivity</label>
                                            <input className="w-full h-2 bg-[#11221a] rounded-lg appearance-none cursor-pointer accent-primary" max="3" min="1" step="1" type="range" defaultValue="2" />
                                            <div className="flex justify-between w-full px-1 text-[10px] text-[#92c9ad] uppercase font-bold">
                                                <span>Robust</span><span>Balanced</span><span>Sensitive</span>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-sm font-medium text-white block">Smoothing Window (mins)</label>
                                            <div className="flex gap-2">
                                                <button className="flex-1 py-2 bg-[#11221a] border border-[#234836] rounded text-xs text-white">15m</button>
                                                <button className="flex-1 py-2 bg-primary text-[#11221a] font-bold rounded text-xs">30m</button>
                                                <button className="flex-1 py-2 bg-[#11221a] border border-[#234836] rounded text-xs text-white">60m</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="bg-[#1a3326] rounded-xl p-6 border border-[#234836] shadow-lg sticky top-6">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-[#234836] rounded-lg"><span className="material-symbols-outlined text-primary">model_training</span></div>
                                        <div>
                                            <h3 className="text-lg font-bold text-white">Model Refresh</h3>
                                            <p className="text-xs text-[#92c9ad]">Retraining configuration.</p>
                                        </div>
                                    </div>
                                    <div className="bg-[#11221a] rounded-lg p-4 mb-6 border border-[#234836] space-y-2">
                                        <div className="flex justify-between text-xs"><span className="text-[#92c9ad]">Last Trained</span><span className="text-white font-bold">2 hrs ago</span></div>
                                        <div className="flex justify-between text-xs"><span className="text-[#92c9ad]">Version</span><span className="text-primary font-mono font-bold">v3.5.2</span></div>
                                    </div>
                                    <button className="w-full py-2.5 rounded-lg bg-white text-[#11221a] text-sm font-bold hover:bg-gray-100 transition-colors">Retrain Model Now</button>
                                </div>

                                <div className="bg-gradient-to-br from-[#1a3326] to-[#11221a] rounded-xl p-6 border border-[#234836] shadow-lg">
                                    <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider opacity-80">Health Check</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">check_circle</span><span className="text-sm text-white">API Gateway Operational</span></div>
                                        <div className="flex items-center gap-3"><span className="material-symbols-outlined text-yellow-500 text-lg">warning</span><span className="text-sm text-white">Storage Usage at 85%</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
