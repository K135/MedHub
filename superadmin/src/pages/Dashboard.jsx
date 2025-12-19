import React, { useEffect, useState } from 'react';
import { Users, BookOpen, CheckCircle } from 'lucide-react';
import axios from '../api/axios';
import { useTheme } from '../context/ThemeContext';

export function Dashboard() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [stats, setStats] = useState({
        totalOrganizers: 0,
        totalCourses: 0,
        activeCourses: 0
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await axios.get('/superadmin/dashboard-stats');
                setStats(res.data);
            } catch (err) {
                console.error('Error fetching stats:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    const statCards = [
        {
            label: 'Total Organizers',
            value: stats.totalOrganizers,
            icon: Users,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10'
        },
        {
            label: 'Total Courses',
            value: stats.totalCourses,
            icon: BookOpen,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10'
        },
        {
            label: 'Active Courses',
            value: stats.activeCourses,
            icon: CheckCircle,
            color: 'text-green-500',
            bg: 'bg-green-500/10'
        }
    ];

    if (loading) {
        return <div className="p-8 text-center">Loading...</div>;
    }

    return (
        <div>
            <h1 className={`text-2xl font-bold mb-8 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Super Admin Dashboard
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {statCards.map((stat, index) => (
                    <div
                        key={index}
                        className={`p-6 rounded-xl border ${
                            isDark
                                ? 'bg-slate-900 border-slate-800'
                                : 'bg-white border-slate-200'
                        }`}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                                <stat.icon size={24} />
                            </div>
                        </div>
                        <h3 className={`text-sm font-medium mb-1 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                            {stat.label}
                        </h3>
                        <p className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            {stat.value}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
