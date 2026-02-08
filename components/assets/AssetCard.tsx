import React from 'react';
import Link from 'next/link';

interface AssetCardProps {
    id: string;
    location: string;
    type: 'wind' | 'solar' | 'battery';
    status: 'healthy' | 'warning' | 'critical';
    healthScore: number;
    trend: number;
    history: number[]; // Array of values 0-1 for sparkline
    lastUpdate: string;
}

export default function AssetCard({ id, location, type, status, healthScore, trend, history, lastUpdate }: AssetCardProps) {
    let statusColor = "bg-green-100 text-green-700 border-green-200 dark:bg-primary/20 dark:text-primary dark:border-primary/30";
    let statusLabel = "Healthy";
    let borderColor = "border-slate-200 dark:border-[#234836] hover:border-primary/50 dark:hover:border-primary/50";
    let shadowColor = "hover:shadow-primary/5";
    let icon = "wind_power";

    if (type === "solar") icon = "solar_power";
    if (type === "battery") icon = "battery_charging_full";

    if (status === "warning") {
        statusColor = "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-500/20 dark:text-yellow-400 dark:border-yellow-500/30";
        statusLabel = "Warning";
        borderColor = "border-yellow-500/50 dark:border-yellow-500/30";
        shadowColor = "hover:shadow-yellow-500/10";
    } else if (status === "critical") {
        statusColor = "bg-red-100 text-red-600 border-red-200 dark:bg-red-500/20 dark:text-red-400 dark:border-red-500/30";
        statusLabel = "Critical";
        borderColor = "border-red-500/50 dark:border-red-500/30";
        shadowColor = "hover:shadow-red-500/10";
    }

    const trendIcon = trend >= 0 ? "arrow_upward" : "arrow_downward";
    const trendColor = status === "critical" ? "text-red-500" : (status === "warning" ? "text-yellow-500" : "text-primary");

    return (
        <div className={`group relative bg-white dark:bg-card-dark border ${borderColor} rounded-xl p-5 hover:shadow-lg ${shadowColor} hover:-translate-y-1 transition-all duration-300`}>
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-[#11221a] flex items-center justify-center text-slate-600 dark:text-text-subtle">
                        <span className="material-symbols-outlined">{icon}</span>
                    </div>
                    <div>
                        <h3 className="font-bold text-slate-900 dark:text-white">{id}</h3>
                        <p className="text-xs text-slate-500 dark:text-text-subtle">{location}</p>
                    </div>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${statusColor}`}>
                    {statusLabel}
                </span>
            </div>

            <div className="flex items-end gap-2 mb-4">
                <span className="text-4xl font-black text-slate-900 dark:text-white">{healthScore}%</span>
                <span className={`text-sm font-medium ${trendColor} mb-1.5 flex items-center`}>
                    <span className="material-symbols-outlined text-[16px] mr-0.5">{trendIcon}</span>
                    {Math.abs(trend)}%
                </span>
            </div>

            {/* Sparkline */}
            <div className="flex items-end gap-1 h-8 mb-4 w-full opacity-60">
                {history.map((val, i) => {
                    let barColor = "bg-primary/20";
                    if (status === "critical") barColor = "bg-red-500/20";
                    if (status === "warning") barColor = "bg-yellow-500/20";

                    // Highlight last bar
                    if (i === history.length - 1) {
                        if (status === "critical") barColor = "bg-red-500";
                        else if (status === "warning") barColor = "bg-yellow-500";
                        else barColor = "bg-primary";
                    }

                    return (
                        <div key={i} className={`flex-1 rounded-sm ${barColor}`} style={{ height: `${val * 100}%` }}></div>
                    );
                })}
            </div>

            <div className="flex items-center justify-between border-t border-slate-100 dark:border-[#234836] pt-4 mt-auto">
                <span className="text-xs font-medium text-slate-400 dark:text-text-subtle/70">Last update: {lastUpdate}</span>
                <Link href={`/assets/${id}`} className="text-sm font-bold text-slate-900 dark:text-white hover:text-primary dark:hover:text-primary flex items-center gap-1 transition-colors">
                    Analyze <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </Link>
            </div>
        </div>
    );
}
