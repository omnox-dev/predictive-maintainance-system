import React from 'react';
import Sidebar from "@/components/layout/Sidebar";
import AssetFilters from "@/components/assets/AssetFilters";
import AssetCard from "@/components/assets/AssetCard";

export default function AssetExplorer() {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
            <Sidebar />

            <main className="flex-1 flex flex-col lg:flex-row h-full overflow-hidden">
                <AssetFilters />

                {/* Asset Grid Area */}
                <div className="flex-1 p-6 lg:p-10 overflow-y-auto">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8">
                        <div>
                            <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-2">Asset Overview</h1>
                            <p className="text-slate-500 dark:text-text-subtle">Monitoring <span className="text-slate-900 dark:text-white font-bold">1,248</span> active assets across 3 regions.</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="flex items-center bg-white dark:bg-[#1c3629] border border-slate-200 dark:border-[#234836] rounded-lg p-1">
                                <button className="p-1.5 rounded bg-primary text-background-dark shadow-sm">
                                    <span className="material-symbols-outlined text-[20px] block">grid_view</span>
                                </button>
                                <button className="p-1.5 rounded text-slate-500 dark:text-text-subtle hover:text-slate-900 dark:hover:text-white">
                                    <span className="material-symbols-outlined text-[20px] block">list</span>
                                </button>
                            </div>
                            <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-green-400 text-background-dark font-bold rounded-lg transition-colors">
                                <span className="material-symbols-outlined text-[20px]">add</span>
                                New Asset
                            </button>
                        </div>
                    </div>

                    {/* Stats Summary */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-white dark:bg-card-dark p-4 rounded-xl border border-slate-200 dark:border-[#234836] shadow-sm flex items-center justify-between">
                            <div>
                                <p className="text-xs text-slate-500 dark:text-text-subtle font-bold uppercase">Avg. Health</p>
                                <p className="text-2xl font-black text-slate-900 dark:text-white">94.2%</p>
                            </div>
                            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">ecg_heart</span>
                            </div>
                        </div>
                        {/* ... other stat cards ... */}
                        <div className="bg-white dark:bg-card-dark p-4 rounded-xl border border-slate-200 dark:border-[#234836] shadow-sm flex items-center justify-between">
                            <div>
                                <p className="text-xs text-slate-500 dark:text-text-subtle font-bold uppercase">Critical</p>
                                <p className="text-2xl font-black text-red-500">21</p>
                            </div>
                            <div className="h-10 w-10 rounded-full bg-red-500/20 flex items-center justify-center text-red-500">
                                <span className="material-symbols-outlined">warning</span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-card-dark p-4 rounded-xl border border-slate-200 dark:border-[#234836] shadow-sm flex items-center justify-between">
                            <div>
                                <p className="text-xs text-slate-500 dark:text-text-subtle font-bold uppercase">Warnings</p>
                                <p className="text-2xl font-black text-yellow-500">125</p>
                            </div>
                            <div className="h-10 w-10 rounded-full bg-yellow-500/20 flex items-center justify-center text-yellow-500">
                                <span className="material-symbols-outlined">error</span>
                            </div>
                        </div>
                        <div className="bg-white dark:bg-card-dark p-4 rounded-xl border border-slate-200 dark:border-[#234836] shadow-sm flex items-center justify-between">
                            <div>
                                <p className="text-xs text-slate-500 dark:text-text-subtle font-bold uppercase">Efficiency</p>
                                <p className="text-2xl font-black text-primary">+12%</p>
                            </div>
                            <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">trending_up</span>
                            </div>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6">
                        <AssetCard
                            id="T-402" location="Sector 7 • North" type="wind" status="critical" healthScore={42} trend={-12}
                            lastUpdate="2m ago" history={[0.6, 0.5, 0.4, 0.3, 0.45, 0.2, 0.15]}
                        />
                        <AssetCard
                            id="S-101" location="Sector 2 • East" type="solar" status="healthy" healthScore={98} trend={1}
                            lastUpdate="5s ago" history={[0.9, 0.92, 0.95, 0.91, 0.96, 0.98, 0.98]}
                        />
                        <AssetCard
                            id="B-05" location="Storage Hub A" type="battery" status="warning" healthScore={76} trend={0}
                            lastUpdate="12m ago" history={[0.8, 0.75, 0.7, 0.78, 0.72, 0.74, 0.76]}
                        />
                        <AssetCard
                            id="T-405" location="Sector 7 • North" type="wind" status="healthy" healthScore={99} trend={0.2}
                            lastUpdate="30s ago" history={[0.95, 0.98, 0.97, 0.99, 0.98, 0.99, 0.99]}
                        />
                        <AssetCard
                            id="S-204" location="Sector 3 • West" type="solar" status="healthy" healthScore={92} trend={0}
                            lastUpdate="4m ago" history={[0.92, 0.94, 0.93, 0.90, 0.91, 0.92, 0.92]}
                        />
                        <AssetCard
                            id="B-12" location="Storage Hub C" type="battery" status="critical" healthScore={12} trend={-45}
                            lastUpdate="1m ago" history={[0.5, 0.4, 0.35, 0.25, 0.2, 0.15, 0.12]}
                        />
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center mt-12 pb-10">
                        <nav className="flex items-center gap-1 bg-white dark:bg-[#11221a] p-1 rounded-lg border border-slate-200 dark:border-[#234836]">
                            <button className="p-2 rounded hover:bg-slate-100 dark:hover:bg-[#1c3629] text-slate-500 dark:text-text-subtle">
                                <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                            </button>
                            <button className="w-9 h-9 flex items-center justify-center rounded bg-primary text-background-dark font-bold text-sm">1</button>
                            <button className="w-9 h-9 flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-[#1c3629] text-slate-600 dark:text-slate-300 font-bold text-sm">2</button>
                            <button className="w-9 h-9 flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-[#1c3629] text-slate-600 dark:text-slate-300 font-bold text-sm">3</button>
                            <span className="w-9 h-9 flex items-center justify-center text-slate-400 dark:text-slate-600">...</span>
                            <button className="w-9 h-9 flex items-center justify-center rounded hover:bg-slate-100 dark:hover:bg-[#1c3629] text-slate-600 dark:text-slate-300 font-bold text-sm">12</button>
                            <button className="p-2 rounded hover:bg-slate-100 dark:hover:bg-[#1c3629] text-slate-500 dark:text-text-subtle">
                                <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                            </button>
                        </nav>
                    </div>
                </div>
            </main>
        </div>
    );
}
