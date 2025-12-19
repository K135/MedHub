import React, { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import {
    PlusCircle,
    CreditCard,
    BookOpen,
    BarChart3,
    User,
    ArrowRight,
    Loader2,
    TrendingUp,
    DollarSign,
    Users,
    Activity,
    Target
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import { useTheme } from '../context/ThemeContext';

export default function Dashboard() {
    const navigate = useNavigate();
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [profile, setProfile] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const fetchDashboardData = async () => {
        try {
            setLoading(true);
            const [profileRes, transactionsRes] = await Promise.all([
                api.get('/profile'),
                api.get('/transactions')
            ]);
            setProfile(profileRes.data);
            setTransactions(transactionsRes.data.slice(0, 5));
        } catch (err) {
            console.error('Error fetching dashboard data:', err);
        } finally {
            setLoading(false);
        }
    };

    const stats = [
        {
            title: 'Total Revenue',
            value: '$24,580',
            change: '+12.5%',
            icon: DollarSign,
            gradient: 'from-emerald-500 to-teal-600',
            bgGradient: 'from-emerald-500/20 to-teal-600/20'
        },
        {
            title: 'Active Students',
            value: '1,432',
            change: '+8.2%',
            icon: Users,
            gradient: 'from-purple-500 to-pink-600',
            bgGradient: 'from-purple-500/20 to-pink-600/20'
        },
        {
            title: 'Course Views',
            value: '8,943',
            change: '+23.1%',
            icon: Activity,
            gradient: 'from-[#FED15E] to-orange-500',
            bgGradient: 'from-[#FED15E]/20 to-orange-500/20'
        },
        {
            title: 'Completion Rate',
            value: '94.2%',
            change: '+5.4%',
            icon: Target,
            gradient: 'from-cyan-500 to-blue-600',
            bgGradient: 'from-cyan-500/20 to-blue-600/20'
        }
    ];

    const quickActions = [
        {
            title: 'Add Course',
            description: 'Create new external, banner, or LMS courses',
            icon: PlusCircle,
            path: '/add-course',
            gradient: 'from-[#25225B] to-[#45417e]',
            size: 'large'
        },
        {
            title: 'Bank Details',
            description: 'Manage your payout information',
            icon: CreditCard,
            path: '/bank-details',
            gradient: 'from-[#FED15E] to-[#fcb92a]',
            size: 'small'
        },
        {
            title: 'My Courses',
            description: 'View and manage your listed courses',
            icon: BookOpen,
            path: '/courses',
            gradient: 'from-purple-500 to-indigo-600',
            size: 'small'
        },
        {
            title: 'Analytics',
            description: 'Insights into course performance',
            icon: BarChart3,
            path: '/analytics',
            gradient: 'from-rose-500 to-pink-600',
            size: 'medium'
        },
        {
            title: 'Profile',
            description: 'Update your organization details',
            icon: User,
            path: '/profile',
            gradient: 'from-cyan-500 to-blue-600',
            size: 'medium'
        },
    ];

    if (loading) {
        return (
            <Layout>
                <div className="flex items-center justify-center h-96">
                    <Loader2 className={`animate-spin ${isDark ? 'text-white' : 'text-slate-900'}`} size={32} />
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="mb-10">
                <h1 className={`text-4xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Welcome back, {profile?.name || 'User'}
                </h1>
                <p className={`text-base ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    Here's what's happening with your courses today.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
                {stats.map((stat, index) => (
                    <div
                        key={stat.title}
                        className={`relative overflow-hidden border rounded-2xl p-6 transition-all duration-300 ${
                            isDark
                                ? 'bg-white/[0.03] border-white/10 hover:border-white/20'
                                : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                        }`}
                    >
                        <div className="flex items-start justify-between mb-4">
                            <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient}`}>
                                <stat.icon size={20} className="text-white" />
                            </div>
                            <div className={`flex items-center gap-1 text-xs font-semibold ${
                                isDark ? 'text-emerald-400' : 'text-emerald-600'
                            }`}>
                                <TrendingUp size={12} />
                                {stat.change}
                            </div>
                        </div>
                        <p className={`text-xs font-medium mb-1 ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                            {stat.title}
                        </p>
                        <p className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {stat.value}
                        </p>
                    </div>
                ))}
            </div>

            <div className="mb-10">
                <h2 className={`text-xl font-semibold mb-5 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Quick Actions
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {quickActions.map((action, index) => (
                        <div
                            key={action.title}
                            onClick={() => navigate(action.path)}
                            className={`group cursor-pointer border rounded-2xl p-6 transition-all duration-300 ${
                                isDark
                                    ? 'bg-white/[0.03] border-white/10 hover:border-white/20'
                                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                            }`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-3 rounded-xl bg-gradient-to-br ${action.gradient}`}>
                                    <action.icon size={24} className="text-white" />
                                </div>
                                <ArrowRight 
                                    size={18} 
                                    className={`transition-transform duration-300 group-hover:translate-x-1 ${
                                        isDark ? 'text-slate-500' : 'text-slate-400'
                                    }`}
                                />
                            </div>
                            <h3 className={`text-lg font-semibold mb-1 ${
                                isDark ? 'text-white' : 'text-slate-900'
                            }`}>
                                {action.title}
                            </h3>
                            <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                                {action.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between mb-5">
                    <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                        Recent Activity
                    </h2>
                    <button 
                        onClick={() => navigate('/payments')} 
                        className={`text-sm font-medium transition-colors ${
                            isDark
                                ? 'text-slate-400 hover:text-white'
                                : 'text-slate-600 hover:text-slate-900'
                        }`}
                    >
                        View all →
                    </button>
                </div>

                <div className={`border rounded-2xl overflow-hidden ${
                    isDark
                        ? 'bg-white/[0.03] border-white/10'
                        : 'bg-white border-slate-200 shadow-sm'
                }`}>
                    {transactions.length > 0 ? (
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className={`border-b ${
                                    isDark ? 'border-white/10' : 'border-slate-200'
                                }`}>
                                    <tr>
                                        <th className={`px-6 py-4 font-medium text-xs ${
                                            isDark ? 'text-slate-500' : 'text-slate-600'
                                        }`}>Transaction ID</th>
                                        <th className={`px-6 py-4 font-medium text-xs ${
                                            isDark ? 'text-slate-500' : 'text-slate-600'
                                        }`}>Course</th>
                                        <th className={`px-6 py-4 font-medium text-xs ${
                                            isDark ? 'text-slate-500' : 'text-slate-600'
                                        }`}>Status</th>
                                        <th className={`px-6 py-4 font-medium text-xs ${
                                            isDark ? 'text-slate-500' : 'text-slate-600'
                                        }`}>Date</th>
                                        <th className={`px-6 py-4 font-medium text-xs ${
                                            isDark ? 'text-slate-500' : 'text-slate-600'
                                        }`}>Amount</th>
                                    </tr>
                                </thead>
                                <tbody className={`divide-y ${isDark ? 'divide-white/10' : 'divide-slate-200'}`}>
                                    {transactions.map((txn) => (
                                        <tr key={txn._id} className={`transition-colors ${
                                            isDark ? 'hover:bg-white/[0.02]' : 'hover:bg-slate-50'
                                        }`}>
                                            <td className={`px-6 py-4 font-mono text-xs ${
                                                isDark ? 'text-slate-500' : 'text-slate-600'
                                            }`}>{txn.transactionId}</td>
                                            <td className={`px-6 py-4 font-medium ${
                                                isDark ? 'text-white' : 'text-slate-900'
                                            }`}>{txn.course?.title || 'N/A'}</td>
                                            <td className="px-6 py-4">
                                                <span className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                                                    txn.status === 'completed' 
                                                        ? isDark
                                                            ? 'bg-emerald-500/10 text-emerald-400'
                                                            : 'bg-emerald-50 text-emerald-700'
                                                        : txn.status === 'pending' 
                                                            ? isDark
                                                                ? 'bg-yellow-500/10 text-yellow-400'
                                                                : 'bg-yellow-50 text-yellow-700'
                                                            : isDark
                                                                ? 'bg-red-500/10 text-red-400'
                                                                : 'bg-red-50 text-red-700'
                                                }`}>
                                                    {txn.status.charAt(0).toUpperCase() + txn.status.slice(1)}
                                                </span>
                                            </td>
                                            <td className={`px-6 py-4 text-sm ${
                                                isDark ? 'text-slate-400' : 'text-slate-600'
                                            }`}>{new Date(txn.createdAt).toLocaleDateString()}</td>
                                            <td className={`px-6 py-4 font-semibold ${
                                                isDark ? 'text-white' : 'text-slate-900'
                                            }`}>${txn.amount.toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="p-12 text-center">
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 ${
                                isDark ? 'bg-white/5' : 'bg-slate-100'
                            }`}>
                                <Activity className={isDark ? 'text-slate-600' : 'text-slate-400'} size={24} />
                            </div>
                            <p className={`text-sm font-medium mb-1 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>No transactions yet</p>
                            <p className={`text-xs ${isDark ? 'text-slate-600' : 'text-slate-500'}`}>Your recent activity will appear here</p>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}
