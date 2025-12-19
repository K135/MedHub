import React from 'react';
import { Bell, Search, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function Header() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <header className={`h-16 border-b fixed top-0 right-0 left-80 z-10 px-6 flex items-center justify-between transition-all duration-300 ${
            isDark 
                ? 'bg-slate-900 border-slate-800' 
                : 'bg-white border-slate-200'
        }`}>
            <div className="flex items-center gap-6 flex-1 max-w-xl">
                <div className="relative w-full">
                    <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                        isDark ? 'text-slate-500' : 'text-slate-400'
                    }`} size={18} />
                    <input
                        type="text"
                        placeholder="Search..."
                        className={`w-full pl-10 pr-4 py-2 rounded-lg border outline-none transition-all duration-200 text-sm ${
                            isDark
                                ? 'bg-slate-800 border-slate-700 focus:border-slate-600 placeholder:text-slate-500 text-white'
                                : 'bg-slate-50 border-slate-200 focus:border-slate-300 placeholder:text-slate-400 text-slate-900'
                        }`}
                    />
                </div>
            </div>

            <div className="flex items-center gap-3">
                <button 
                    onClick={toggleTheme}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                        isDark
                            ? 'text-slate-400 hover:bg-slate-800 hover:text-white'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                >
                    {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                <button className={`relative p-2 rounded-lg transition-all duration-200 ${
                    isDark
                        ? 'text-slate-400 hover:bg-slate-800 hover:text-white'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}>
                    <Bell size={18} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>

                <div className={`h-8 w-px ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}></div>

                <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block">
                        <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>Dr. John Smith</p>
                        <p className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>Admin</p>
                    </div>
                    <button className={`flex items-center gap-2 p-1 rounded-lg transition-all duration-200 ${
                        isDark
                            ? 'hover:bg-slate-800'
                            : 'hover:bg-slate-100'
                    }`}>
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm font-semibold ${
                            isDark
                                ? 'bg-slate-800 text-white'
                                : 'bg-slate-200 text-slate-900'
                        }`}>
                            DS
                        </div>
                    </button>
                </div>
            </div>
        </header>
    );
}
