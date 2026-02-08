import Sidebar from "@/components/layout/Sidebar";
import KPICard from "@/components/dashboard/KPICard";
import PowerChart from "@/components/dashboard/PowerChart";
import RecentAlerts from "@/components/dashboard/RecentAlerts";
import AssetHeatmap from "@/components/dashboard/AssetHeatmap";

export default function DashboardPage() {
    return (
        <div className="flex h-screen w-full overflow-hidden bg-background-dark text-white font-display transition-colors">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-background-dark">
                <div className="mx-auto flex max-w-7xl flex-col gap-8">

                    {/* Header */}
                    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">System Overview</h2>
                            <p className="text-slate-500 dark:text-text-subtle mt-1">Real-time monitoring of renewable assets & predictive insights.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex bg-white dark:bg-[#1a3328] px-3 py-2 text-sm text-slate-600 dark:text-text-subtle items-center gap-2 rounded-lg border border-slate-200 dark:border-[#234836]">
                                <span className="material-symbols-outlined text-[20px]">calendar_today</span>
                                <span>Feb 08, 2026</span>
                            </div>
                            <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-[#11221a] hover:bg-opacity-90 transition-colors shadow-[0_0_15px_rgba(19,236,128,0.3)]">
                                <span className="material-symbols-outlined text-[20px]">download</span>
                                Export Report
                            </button>
                        </div>
                    </header>

                    {/* KPI Cards */}
                    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        <KPICard
                            title="Health Score"
                            value="94%"
                            trend="+1.2%"
                            trendLabel="vs last week"
                            trendPositive={true}
                        >
                            <div className="relative size-12 flex items-center justify-center">
                                <svg className="size-full -rotate-90" viewBox="0 0 36 36">
                                    <path className="text-slate-200 dark:text-[#234836]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
                                    <path className="text-primary" strokeDasharray="94, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                                <span className="absolute material-symbols-outlined text-xl text-primary">ecg_heart</span>
                            </div>
                        </KPICard>

                        <KPICard
                            title="Total Output"
                            value="1.2 GW"
                            trend="5.0%"
                            trendLabel="above prediction"
                            trendPositive={true}
                            icon="offline_bolt"
                            iconColor="text-yellow-500"
                            iconBg="bg-yellow-500/10"
                        />

                        <KPICard
                            title="Efficiency"
                            value="+2.4%"
                            trend="0.8%"
                            trendLabel="deviation rate"
                            trendPositive={true}
                            icon="speed"
                            iconColor="text-blue-500"
                            iconBg="bg-blue-500/10"
                        />

                        <KPICard
                            title="Active Alerts"
                            value={<>3 <span className="text-lg font-normal text-red-500">Critical</span></>}
                            icon="warning"
                            iconColor="text-red-500 animate-pulse"
                            iconBg="bg-red-500/10"
                            customTrend={
                                <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-400 dark:text-[#587c6a]">
                                    <span className="text-red-500 font-bold">Action Required</span>
                                    <span>- Check Turbines</span>
                                </div>
                            }
                        />
                    </section>

                    {/* Main Chart Area & Sidebar */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                        <PowerChart />
                        <RecentAlerts />
                    </div>

                    {/* Asset Health Heatmap */}
                    <AssetHeatmap />

                </div>
            </main>
        </div>
    );
}
