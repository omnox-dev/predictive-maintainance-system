import React from 'react';

const alerts = [
    {
        title: "Turbine A-4 Vibration",
        time: "10m ago",
        description: "Gearbox vibration exceeds threshold > 4.5mm/s.",
        type: "critical",
        icon: "error"
    },
    {
        title: "Inverter Efficiency Drop",
        time: "1h ago",
        description: "Solar Array B output dropped 15% unexpectedly.",
        type: "warning",
        icon: "warning"
    },
    {
        title: "Scheduled Maintenance",
        time: "3h ago",
        description: "Grid connection check completed for Sector C.",
        type: "info",
        icon: "info"
    },
    {
        title: "Temp Spike",
        time: "4h ago",
        description: "Transformer T-2 temperature critical.",
        type: "critical",
        icon: "thermostat"
    }
];

export default function RecentAlerts() {
    return (
        <div className="flex flex-col rounded-xl border border-slate-200 dark:border-[#234836] bg-white dark:bg-[#1a3328] shadow-sm">
            <div className="border-b border-slate-200 dark:border-[#234836] p-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Recent Alerts</h3>
            </div>

            <div className="flex flex-col gap-4 p-6 overflow-y-auto max-h-[350px]">
                {alerts.map((alert, index) => {
                    let styles = {
                        bg: "bg-blue-500/5",
                        border: "border-blue-500/10",
                        text: "text-blue-500",
                        time: "text-blue-400"
                    };

                    if (alert.type === "critical") {
                        styles = {
                            bg: "bg-red-500/5",
                            border: "border-red-500/10",
                            text: "text-red-500",
                            time: "text-red-400"
                        };
                    } else if (alert.type === "warning") {
                        styles = {
                            bg: "bg-orange-500/5",
                            border: "border-orange-500/10",
                            text: "text-orange-500",
                            time: "text-orange-400"
                        };
                    }

                    return (
                        <div key={index} className={`flex gap-4 rounded-lg p-3 border ${styles.bg} ${styles.border}`}>
                            <div className={`mt-1 ${styles.text}`}>
                                <span className="material-symbols-outlined text-[20px]">{alert.icon}</span>
                            </div>
                            <div className="flex flex-1 flex-col">
                                <div className="flex justify-between">
                                    <p className="text-sm font-bold text-slate-900 dark:text-white">{alert.title}</p>
                                    <span className={`text-xs ${styles.time}`}>{alert.time}</span>
                                </div>
                                <p className="text-xs text-slate-500 dark:text-text-subtle mt-1">{alert.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="p-4 border-t border-slate-200 dark:border-[#234836] text-center">
                <button className="text-sm font-medium text-primary hover:text-white transition-colors">View All Alerts</button>
            </div>
        </div>
    );
}
