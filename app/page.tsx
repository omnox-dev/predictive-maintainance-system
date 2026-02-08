import React from 'react';
import Link from 'next/link';

/**
 * Landing Page
 * Converted directly from the provided HTML reference.
 */
export default function LandingPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden transition-colors duration-200">
      <div className="relative flex h-auto min-h-screen w-full flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-[#234836] px-10 py-4 bg-white dark:bg-background-dark sticky top-0 z-50">
          <div className="flex items-center gap-4 text-slate-900 dark:text-white">
            <div className="size-6 text-primary">
              <span className="material-symbols-outlined text-3xl">wind_power</span>
            </div>
            <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Predictive Maintenance</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <nav className="hidden md:flex items-center gap-9">
              <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="/dashboard">Platform</Link>
              <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="/assets">Solutions</Link>
              <Link className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary text-sm font-medium leading-normal transition-colors" href="/analytics/historical">Case Studies</Link>
              <Link className="text-primary text-sm font-bold leading-normal" href="/dashboard">Pricing</Link>
            </nav>
            <div className="flex gap-4">
              <Link className="hidden sm:flex items-center text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-primary transition-colors" href="/dashboard">Log In</Link>
              <button className="flex items-center justify-center rounded-lg px-4 py-2 bg-primary text-background-dark font-bold hover:bg-[#0fd470] transition-colors">
                Get a Demo
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1 flex flex-col items-center w-full">
          <section className="w-full flex flex-col items-center pt-20 pb-12 px-4 sm:px-10 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10"></div>
            <div className="max-w-4xl text-center flex flex-col items-center gap-6 z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-dark/50 border border-primary/20 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-primary text-xs font-bold uppercase tracking-wider">New: Turbine Health V2.0</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                Maximize Uptime for <br />
                <span className="bg-gradient-to-r from-primary to-[#2dd4bf] bg-clip-text text-transparent">Renewable Energy</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-[#92c9ad] max-w-2xl leading-relaxed">
                Harness the power of ML-driven insights to predict failures before they happen. Reduce maintenance costs by up to 30% and boost energy output.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="flex items-center justify-center gap-2 px-8 py-4 bg-primary text-background-dark rounded-xl text-lg font-bold hover:bg-[#0fd470] transition-all hover:scale-105 shadow-[0_0_20px_rgba(19,236,128,0.4)]">
                  Get a Demo
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <Link href="/dashboard" className="flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white rounded-xl text-lg font-bold hover:bg-slate-100 dark:hover:bg-[#234836] transition-colors">
                  <span className="material-symbols-outlined">dashboard</span>
                  View Dashboard
                </Link>
              </div>
            </div>

            <div className="mt-16 w-full max-w-6xl relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-teal-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-surface-dark border border-[#234836] rounded-xl overflow-hidden shadow-2xl">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#234836] bg-[#102219]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <div className="inline-block px-3 py-1 rounded bg-[#183225] text-[10px] text-slate-400 font-mono">dashboard.cleanenergy.ai</div>
                  </div>
                </div>
                <div className="p-6 grid grid-cols-12 gap-6 bg-[#102219]">
                  <div className="hidden md:block col-span-2 space-y-4">
                    <div className="h-8 w-24 bg-[#183225] rounded mb-8"></div>
                    <div className="space-y-2">
                      <div className="h-8 w-full bg-[#183225] rounded opacity-50"></div>
                      <div className="h-8 w-full bg-primary/20 border-l-2 border-primary rounded-r"></div>
                      <div className="h-8 w-full bg-[#183225] rounded opacity-50"></div>
                      <div className="h-8 w-full bg-[#183225] rounded opacity-50"></div>
                    </div>
                  </div>
                  <div className="col-span-12 md:col-span-10 grid grid-cols-3 gap-4">
                    <div className="col-span-1 bg-[#183225] p-4 rounded-lg border border-[#234836]">
                      <div className="text-xs text-slate-400 mb-2">Total Output</div>
                      <div className="text-2xl font-bold text-white">45.2 GW</div>
                      <div className="text-xs text-primary mt-1">+2.4% vs last week</div>
                    </div>
                    <div className="col-span-1 bg-[#183225] p-4 rounded-lg border border-[#234836]">
                      <div className="text-xs text-slate-400 mb-2">Active Turbines</div>
                      <div className="text-2xl font-bold text-white">124/128</div>
                      <div className="text-xs text-orange-400 mt-1">4 maintenance req</div>
                    </div>
                    <div className="col-span-1 bg-[#183225] p-4 rounded-lg border border-[#234836]">
                      <div className="text-xs text-slate-400 mb-2">Efficiency Score</div>
                      <div className="text-2xl font-bold text-white">98.5%</div>
                      <div className="text-xs text-primary mt-1">Optimal Range</div>
                    </div>
                    <div className="col-span-3 bg-[#183225] p-6 rounded-lg border border-[#234836] h-64 flex items-end justify-between gap-2 relative overflow-hidden">
                      <div className="w-full h-[40%] bg-primary/20 rounded-t"></div>
                      <div className="w-full h-[60%] bg-primary/30 rounded-t"></div>
                      <div className="w-full h-[55%] bg-primary/20 rounded-t"></div>
                      <div className="w-full h-[75%] bg-primary/40 rounded-t"></div>
                      <div className="w-full h-[90%] bg-primary/60 rounded-t shadow-[0_0_15px_rgba(19,236,128,0.2)]"></div>
                      <div className="w-full h-[85%] bg-primary/50 rounded-t"></div>
                      <div className="w-full h-[65%] bg-primary/30 rounded-t"></div>
                      <div className="absolute top-4 left-4">
                        <div className="text-sm text-white font-medium">Power Generation Forecast</div>
                        <div className="text-xs text-slate-400">Next 7 Days</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full bg-white dark:bg-[#0c1a13] py-20 px-4 sm:px-10 border-t border-slate-200 dark:border-[#234836]">
            <div className="max-w-[1200px] mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Complete Infrastructure Intelligence</h2>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                  Our platform integrates seamlessly with your existing SCADA systems to provide comprehensive monitoring and predictive capabilities.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 rounded-2xl bg-slate-50 dark:bg-surface-dark border border-slate-200 dark:border-[#234836] hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">ssid_chart</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Real-time Monitoring</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Live data streaming from thousands of sensors. visualize vibration, temperature, and output metrics with sub-second latency.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-slate-50 dark:bg-surface-dark border border-slate-200 dark:border-[#234836] hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">online_prediction</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Predictive Alerts</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Advanced ML models detect anomalies weeks in advance. Get notified about potential gearbox failures before they impact production.
                  </p>
                </div>
                <div className="p-8 rounded-2xl bg-slate-50 dark:bg-surface-dark border border-slate-200 dark:border-[#234836] hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-3xl">monitoring</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">ROI Analytics</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Track the financial impact of your maintenance decisions. Visualize saved costs and optimized energy output directly on your dashboard.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-20 px-4 sm:px-10 relative overflow-hidden">
            <div className="max-w-5xl mx-auto">
              <div className="relative bg-surface-dark rounded-3xl p-10 md:p-16 border border-[#234836]">
                <span className="material-symbols-outlined absolute top-10 left-10 text-6xl text-primary/20">format_quote</span>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <p className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
                    "Since implementing the Predictive Maintenance platform, we've reduced our unplanned downtime by <span className="text-primary font-bold">45%</span>. The ability to forecast component fatigue has completely transformed our maintenance strategy."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-slate-700 overflow-hidden border-2 border-primary">
                      <img alt="Portrait" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUZzTYsVAvkwBdSaVdvYq2DkaZ1_iM8o5fIERAvZPYSgtMQtRL9aVYaFW8Y5_KoachPVsaPAwj5YgomTaJBy0ABG9koyD3CJZxFW3-li2KE0pzXb7jxbJ6iynlkpcRcD1i5_j5i-MGi79QMB6o354PV9sEilPsGbAQ3sAJcq2YNhoaPkO_dAvhmXE-Gxnl_333uT2PdOtlK5H9KoDzgBRKLZ_kKLRX99OshlrRldCGN9ZFLgNLtNrHiCOipSQYCCR0OaoHZ4BtQ5HO" />
                    </div>
                    <div className="text-left">
                      <div className="text-lg font-bold text-white">David Chen</div>
                      <div className="text-primary text-sm font-medium">Regional Plant Manager, Helios Energy</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-16 px-4 bg-primary/5 border-t border-slate-200 dark:border-[#234836]">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Ready to optimize your fleet?</h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg mb-4">Join leading energy providers who trust our platform for critical infrastructure.</p>
              <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                <div className="relative w-full max-w-sm">
                  <input className="w-full px-5 py-4 bg-white dark:bg-background-dark border border-slate-300 dark:border-slate-600 rounded-xl text-slate-900 dark:text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Enter your work email" type="email" />
                </div>
                <button className="px-8 py-4 bg-primary text-background-dark rounded-xl text-lg font-bold hover:bg-[#0fd470] transition-colors whitespace-nowrap">
                  Start Free Trial
                </button>
              </div>
              <p className="text-xs text-slate-500 mt-2">No credit card required for trial. 14-day free access.</p>
            </div>
          </section>
        </main>

        <footer className="border-t border-slate-200 dark:border-[#234836] bg-white dark:bg-background-dark pt-16 pb-8 px-10">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 text-slate-900 dark:text-white mb-6">
                <span className="material-symbols-outlined text-3xl text-primary">wind_power</span>
                <span className="font-bold text-lg">CleanEnergy AI</span>
              </div>
              <p className="text-sm text-slate-500 leading-relaxed">
                Empowering renewable energy providers with next-generation predictive intelligence.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li><a className="hover:text-primary transition-colors" href="#">Features</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Integrations</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Security</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Blog</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li><Link className="hover:text-primary transition-colors" href="/docs">Documentation</Link></li>
                <li><a className="hover:text-primary transition-colors" href="#">API Reference</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Community</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Status</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-[1200px] mx-auto border-t border-slate-200 dark:border-[#234836] pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>© 2026 CleanEnergy AI Systems. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
              <a className="hover:text-primary transition-colors" href="#">Cookies</a>
            </div>
          </div>
        </footer>
      </div>
      <div className="fixed inset-0 pointer-events-none z-[-1] opacity-5 dark:opacity-10 bg-[url('https://placeholder.pics/svg/20')] [mask-image:linear-gradient(to_bottom,transparent,black)]"></div>
    </div>
  );
}
