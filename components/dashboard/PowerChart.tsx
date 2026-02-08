import React from 'react';

export default function PowerChart() {
    return (
        <div className="flex flex-col rounded-xl border border-slate-200 dark:border-[#234836] bg-white dark:bg-[#1a3328] p-6 shadow-sm lg:col-span-2">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">Power Output: Expected vs Actual</h3>
                    <p className="text-sm text-slate-500 dark:text-text-subtle">24h Performance Analysis (Megawatts)</p>
                </div>
                <div className="flex gap-4">
                    <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full bg-primary shadow-[0_0_8px_#13ec80]"></span>
                        <span className="text-xs font-medium text-slate-600 dark:text-text-subtle">Actual</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="h-3 w-3 rounded-full border border-dashed border-slate-400 bg-slate-400/20"></span>
                        <span className="text-xs font-medium text-slate-600 dark:text-text-subtle">Predicted</span>
                    </div>
                </div>
            </div>

            {/* Chart Visualization (SVG ported from code.html) */}
            <div className="relative h-[300px] w-full pt-4">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between text-xs text-slate-400 dark:text-[#587c6a]">
                    <div className="w-full border-b border-dashed border-slate-200 dark:border-[#234836] pb-1">1.5 GW</div>
                    <div className="w-full border-b border-dashed border-slate-200 dark:border-[#234836] pb-1">1.2 GW</div>
                    <div className="w-full border-b border-dashed border-slate-200 dark:border-[#234836] pb-1">0.9 GW</div>
                    <div className="w-full border-b border-dashed border-slate-200 dark:border-[#234836] pb-1">0.6 GW</div>
                    <div className="w-full border-b border-dashed border-slate-200 dark:border-[#234836] pb-1">0.3 GW</div>
                    <div className="w-full border-b border-slate-200 dark:border-[#234836]">0 GW</div>
                </div>

                {/* Data Lines */}
                <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 800 250">
                    {/* Predicted Line (Dashed) */}
                    <path d="M0,180 C50,180 100,100 150,110 C200,120 250,80 300,70 C350,60 400,90 450,100 C500,110 550,60 600,50 C650,40 700,50 750,40 L800,35" fill="none" opacity="0.5" stroke="#64748b" strokeDasharray="5,5" strokeWidth="2"></path>

                    {/* Actual Line (Solid Green) */}
                    <path d="M0,175 C50,170 100,90 150,100 C200,110 250,60 300,55 C350,50 400,80 450,85 C500,95 550,40 600,35 C650,30 700,45 750,30 L800,25" fill="none" filter="drop-shadow(0 0 4px rgba(19, 236, 128, 0.4))" stroke="#13ec80" strokeWidth="3"></path>

                    {/* Area under Actual */}
                    <path d="M0,175 C50,170 100,90 150,100 C200,110 250,60 300,55 C350,50 400,80 450,85 C500,95 550,40 600,35 C650,30 700,45 750,30 L800,25 V250 H0 Z" fill="url(#gradientGreen)" opacity="0.2"></path>

                    <defs>
                        <linearGradient id="gradientGreen" x1="0%" x2="0%" y1="0%" y2="100%">
                            <stop offset="0%" style={{ stopColor: "#13ec80", stopOpacity: 1 }}></stop>
                            <stop offset="100%" style={{ stopColor: "#13ec80", stopOpacity: 0 }}></stop>
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* X Axis Labels */}
            <div className="mt-2 flex justify-between text-xs font-medium text-slate-400 dark:text-text-subtle">
                <span>00:00</span>
                <span>04:00</span>
                <span>08:00</span>
                <span>12:00</span>
                <span>16:00</span>
                <span>20:00</span>
                <span>23:59</span>
            </div>
        </div>
    );
}
