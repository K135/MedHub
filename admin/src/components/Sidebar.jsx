import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
    LayoutDashboard,
    PlusCircle,
    CreditCard,
    BookOpen,
    BarChart3,
    User,
    Users,
    HelpCircle,
    LogOut
} from 'lucide-react';
import { clsx } from 'clsx';
import { useTheme } from '../context/ThemeContext';

export function Sidebar() {
    const navigate = useNavigate();
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const navItems = [
        { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
        { icon: PlusCircle, label: 'Add Course', path: '/add-course' },
        { icon: Users, label: 'Speakers', path: '/speakers' },
        { icon: CreditCard, label: 'Bank Details', path: '/bank-details' },
        { icon: BookOpen, label: 'My Courses', path: '/courses' },
        { icon: CreditCard, label: 'Payments', path: '/payments' },
        { icon: BarChart3, label: 'Analytics', path: '/analytics' },
        { icon: User, label: 'Profile', path: '/profile' },
        { icon: HelpCircle, label: 'Support', path: '/support' },
    ];

    return (
        <aside className={`w-80 h-screen fixed left-0 top-0 flex flex-col z-20 border-r ${
            isDark
                ? 'bg-slate-900 border-slate-800'
                : 'bg-white border-slate-200'
        }`}>
            <div className={`p-6 border-b ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                <img 
                    src="/assets/img/logo/medhub logo1.png" 
                    alt="MedHub Logo" 
                    className="w-full h-auto max-w-[200px] mx-auto"
                />
            </div>

            <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) => clsx(
                            "flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 text-sm font-medium",
                            isActive
                                ? isDark
                                    ? "bg-slate-800 text-white"
                                    : "bg-slate-100 text-slate-900"
                                : isDark
                                    ? "text-slate-400 hover:bg-slate-800/50 hover:text-white"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        )}
                    >
                        <item.icon size={18} />
                        <span>{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            <div className={`p-4 border-t ${isDark ? 'border-slate-800' : 'border-slate-200'}`}>
                <button
                    onClick={() => navigate('/')}
                    className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg w-full transition-all duration-200 text-sm font-medium ${
                        isDark
                            ? 'text-slate-400 hover:bg-slate-800 hover:text-white'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                >
                    <LogOut size={18} />
                    <span>Logout</span>
                </button>
            </div>
        </aside>
    );
}
