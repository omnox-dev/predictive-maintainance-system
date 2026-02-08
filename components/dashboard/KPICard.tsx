import React from 'react';

interface KPICardProps {
    title: string;
    value: string | React.ReactNode;
    trend?: string;
    trendLabel?: string;
    trendPositive?: boolean;
    icon?: string;
    iconColor?: string;
    iconBg?: string;
    customTrend?: React.ReactNode;
    children?: React.ReactNode;
}

export default function KPICard({
    title,
    value,
    trend,
    trendLabel,
    trendPositive = true,
    icon,
    iconColor = "text-yellow-500",
    iconBg = "bg-yellow-500/10",
    customTrend,
    children
}: KPICardProps) {
    return (
        <div className="relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200 dark:border-[#234836] bg-white dark:bg-[#1a3328] p-5 shadow-sm">
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-text-subtle">{title}</p>
                    <div className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">{value}</div>
                </div>

                {children ? (
                    children
                ) : (
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${iconBg} ${iconColor}`}>
                        <span className="material-symbols-outlined">{icon}</span>
                    </div>
                )}
            </div>

            {customTrend ? (
                customTrend
            ) : (
                (trend || trendLabel) && (
                    <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-400 dark:text-[#587c6a]">
                        {trend && (
                            <span className={`flex items-center ${trendPositive ? 'text-primary' : 'text-red-500'}`}>
                                <span className="material-symbols-outlined text-sm">
                                    {trendPositive ? 'trending_up' : 'trending_down'}
                                </span>
                                {trend}
                            </span>
                        )}
                        <span>{trendLabel}</span>
                    </div>
                )
            )}
        </div>
    );
}
