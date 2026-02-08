import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#11221a] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden font-display">
            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="absolute inset-0 bg-[url('https://placeholder.pics/svg/20')] opacity-5 pointer-events-none"></div>

            <div className="max-w-md w-full text-center relative z-10">
                <div className="mb-8 relative inline-block">
                    {/* Glitchy 404 text */}
                    <h1 className="text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary to-[#1a3328] tracking-tighter opacity-80">
                        404
                    </h1>
                    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-9xl font-black text-primary opacity-30 animate-ping duration-1000">
                        404
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        Signal Lost
                    </div>

                    <h2 className="text-3xl font-bold text-white">
                        Connection Terminated
                    </h2>

                    <p className="text-[#92c9ad] text-lg leading-relaxed">
                        The telemetry endpoint you are trying to reach does not exist or has been decommissioned.
                    </p>

                    <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/"
                            className="group flex items-center justify-center gap-2 px-6 py-3 bg-[#1a3328] border border-[#234836] text-white rounded-xl font-bold hover:bg-[#234836] hover:border-primary/50 transition-all"
                        >
                            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
                            Return to Base
                        </Link>
                        <Link
                            href="/dashboard"
                            className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-[#11221a] rounded-xl font-black hover:bg-[#0fd470] transition-colors shadow-[0_0_20px_rgba(19,236,128,0.3)]"
                        >
                            <span className="material-symbols-outlined">dashboard</span>
                            Open Dashboard
                        </Link>
                    </div>
                </div>
            </div>

            {/* Decorative Matrix/Code elements */}
            <div className="absolute bottom-10 left-10 font-mono text-[10px] text-[#234836] hidden md:block select-none">
                <div>ERR_CONNECTION_REFUSED</div>
                <div>Trace: 0x8293A...F4</div>
                <div>Node: UNKNOWN</div>
            </div>
        </div>
    );
}
