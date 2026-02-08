import React from 'react';

export default function AssetHeatmap() {
    // Generate sample data for 36 items
    const items = Array.from({ length: 48 }).map((_, i) => {
        // Random status
        const rand = Math.random();
        let status = "optimal";

        if (rand > 0.95) status = "critical";
        else if (rand > 0.9) status = "warning";
        else if (rand > 0.85) status = "offline";

        return { id: i, status };
    });

    // Hardcode a few for demo match
    items[3].status = "critical";
    items[8].status = "warning";
    items[26].status = "offline";

    return (
        <section className="rounded-xl border border-slate-200 dark:border-[#234836] bg-white dark:bg-[#1a3328] p-6 shadow-sm">
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Asset Health Heatmap</h3>
                    <p className="text-sm text-slate-500 dark:text-text-subtle">Real-time status of North Wind Farm (Sector A)</p>
                </div>
                <div className="flex gap-3 text-xs font-medium">
                    <div className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-[#13ec80]"></span><span className="text-slate-600 dark:text-text-subtle">Optimal</span></div>
                    <div className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-yellow-500"></span><span className="text-slate-600 dark:text-text-subtle">Warning</span></div>
                    <div className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-red-500"></span><span className="text-slate-600 dark:text-text-subtle">Critical</span></div>
                    <div className="flex items-center gap-1.5"><span className="h-3 w-3 rounded bg-slate-600"></span><span className="text-slate-600 dark:text-text-subtle">Offline</span></div>
                </div>
            </div>

            {/* Heatmap Grid */}
            <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-12 gap-2">
                {items.map((item) => {
                    let bgClass = "bg-[#13ec80]";
                    let animation = "";
                    let title = `Turbine ${item.id + 1}: Optimal`;

                    if (item.status === "critical") {
                        bgClass = "bg-red-500";
                        animation = "animate-pulse";
                        title = `Turbine ${item.id + 1}: CRITICAL`;
                    } else if (item.status === "warning") {
                        bgClass = "bg-yellow-500";
                        title = `Turbine ${item.id + 1}: Warning`;
                    } else if (item.status === "offline") {
                        bgClass = "bg-slate-600";
                        title = `Turbine ${item.id + 1}: Offline`;
                    }

                    return (
                        <div
                            key={item.id}
                            className={`aspect-square rounded ${bgClass} ${animation} hover:ring-2 hover:ring-white cursor-pointer transition-all opacity-90 hover:opacity-100`}
                            title={title}
                        ></div>
                    );
                })}
            </div>
        </section>
    );
}
