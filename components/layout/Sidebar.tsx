"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
    { name: 'Overview', href: '/dashboard', icon: 'dashboard' },
    { name: 'Assets', href: '/assets', icon: 'wind_power' },
    { name: 'Predictive', href: '/analytics/predictive', icon: 'online_prediction' },
    { name: 'Historical', href: '/analytics/historical', icon: 'history' },
    { name: 'Weather', href: '/weather', icon: 'partly_cloudy_day' },
    { name: 'Simulation', href: '/simulation', icon: 'play_circle' },
];

const SYSTEM_ITEMS = [
    { name: 'Alerts', href: '/alerts', icon: 'notifications', badge: '3' },
    { name: 'Settings', href: '/settings', icon: 'settings' },
    { name: 'Docs', href: '/docs', icon: 'description' },
];

export default function Sidebar() {
    const pathname = usePathname();

    const isActive = (href: string) => {
        if (href === '/dashboard' && pathname === '/dashboard') return true;
        if (href !== '/dashboard' && pathname?.startsWith(href)) return true;
        return false;
    };

    const LinkItem = ({ item }: { item: any }) => {
        const active = isActive(item.href);
        return (
            <Link
                href={item.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors ${active
                    ? 'bg-[#234836] text-primary shadow-sm'
                    : 'text-text-subtle hover:bg-[#234836]/50 hover:text-white'
                    }`}
            >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="text-sm font-medium">{item.name}</span>
                {item.badge && (
                    <span className="ml-auto rounded-full bg-red-500/20 px-2 py-0.5 text-xs font-bold text-red-500">
                        {item.badge}
                    </span>
                )}
            </Link>
        );
    };

    return (
        <aside className="hidden lg:flex w-72 flex-col justify-between border-r border-[#234836] bg-[#11221a] px-4 py-6 h-screen sticky top-0">
            <div className="flex flex-col gap-8">
                {/* Brand */}
                <Link href="/" className="flex items-center gap-3 px-2 group transition-opacity hover:opacity-80">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary group-hover:bg-primary/30 transition-colors">
                        <span className="material-symbols-outlined text-3xl">bolt</span>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-white text-lg font-bold leading-tight">EcoPulse</h1>
                        <p className="text-text-subtle text-xs font-medium">System Monitor</p>
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="flex flex-col gap-2">
                    {NAV_ITEMS.map((item) => (
                        <LinkItem key={item.href} item={item} />
                    ))}

                    <div className="my-2 border-t border-[#234836]"></div>
                    <p className="px-3 text-xs font-semibold uppercase tracking-wider text-[#587c6a]">System</p>

                    {SYSTEM_ITEMS.map((item) => (
                        <LinkItem key={item.href} item={item} />
                    ))}
                </nav>
            </div>

            {/* User Profile */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 rounded-xl border border-[#234836] bg-[#1a3328] p-3">
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-600 relative">
                        <div className="h-full w-full bg-slate-500 flex items-center justify-center text-white font-bold">AM</div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-sm font-bold text-white">Alex Morgan</p>
                        <p className="text-xs text-text-subtle">Admin Console</p>
                    </div>
                    <button className="ml-auto text-text-subtle hover:text-white">
                        <span className="material-symbols-outlined">logout</span>
                    </button>
                </div>
            </div>
        </aside>
    );
}
