import React from 'react';

export default function AssetFilters() {
    return (
        <aside className="w-full lg:w-72 flex-shrink-0 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-[#234836] bg-white dark:bg-[#11221a] p-6 lg:h-[calc(100vh-65px)] lg:sticky lg:top-[65px] overflow-y-auto">
            <div className="flex flex-col gap-6">
                <div>
                    <h3 className="text-xl font-bold mb-4 dark:text-white">Filters</h3>

                    {/* Search */}
                    <div className="relative mb-6">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                            <span className="material-symbols-outlined text-[20px]">search</span>
                        </div>
                        <input
                            className="w-full pl-10 pr-4 py-2.5 bg-slate-100 dark:bg-[#1c3629] border-none rounded-lg text-sm focus:ring-2 focus:ring-primary dark:text-white placeholder-slate-500 dark:placeholder-text-subtle"
                            placeholder="Search Asset ID..."
                            type="text"
                        />
                    </div>

                    {/* Asset Type */}
                    <div className="mb-6">
                        <label className="block text-xs font-bold text-slate-500 dark:text-text-subtle uppercase tracking-wider mb-3">Asset Type</label>
                        <div className="space-y-2">
                            {[
                                { label: "Wind Turbines", count: 842 },
                                { label: "Solar Arrays", count: 315 },
                                { label: "Battery Storage", count: 91 }
                            ].map((type) => (
                                <label key={type.label} className="flex items-center gap-3 cursor-pointer group">
                                    <div className="relative flex items-center">
                                        <input defaultChecked className="peer h-5 w-5 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-[#1c3629] text-primary focus:ring-primary/50 focus:ring-offset-0 checked:bg-primary checked:border-primary transition-all" type="checkbox" />
                                    </div>
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-200 group-hover:text-primary transition-colors">{type.label}</span>
                                    <span className="ml-auto text-xs text-slate-400 dark:text-slate-500 bg-slate-100 dark:bg-[#1c3629] px-2 py-0.5 rounded-full">{type.count}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Status */}
                    <div className="mb-6">
                        <label className="block text-xs font-bold text-slate-500 dark:text-text-subtle uppercase tracking-wider mb-3">Status</label>
                        <div className="flex flex-col gap-2">
                            <button className="flex items-center justify-between w-full px-3 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary dark:text-primary text-sm font-medium">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                    Healthy
                                </div>
                                <span className="material-symbols-outlined text-[16px]">check</span>
                            </button>
                            <button className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-[#1c3629] text-slate-600 dark:text-slate-300 text-sm font-medium transition-colors group">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
                                    Warning
                                </div>
                            </button>
                            <button className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-[#1c3629] text-slate-600 dark:text-slate-300 text-sm font-medium transition-colors group">
                                <div className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-red-500"></span>
                                    Critical
                                </div>
                            </button>
                        </div>
                    </div>

                    {/* Health Range */}
                    <div>
                        <label className="block text-xs font-bold text-slate-500 dark:text-text-subtle uppercase tracking-wider mb-3">Health Range</label>
                        <div className="px-1">
                            <input className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary" max="100" min="0" type="range" defaultValue="0" />
                            <div className="flex justify-between text-xs text-slate-500 dark:text-text-subtle mt-2">
                                <span>0%</span>
                                <span>100%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
