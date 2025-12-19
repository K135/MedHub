import React from 'react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useTheme } from '../context/ThemeContext';

export function Layout({ children }) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className="min-h-screen font-sans relative">
            <div className={`fixed inset-0 -z-10 ${
                isDark
                    ? 'bg-slate-950'
                    : 'bg-slate-50'
            }`}></div>

            <Sidebar />
            <Header />
            <main className="pl-80 pt-16 min-h-screen transition-all duration-300">
                <div className="p-8 max-w-[1600px] mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
