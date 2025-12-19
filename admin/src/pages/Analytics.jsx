import React from 'react';
import { Layout } from '../components/Layout';
import { Card } from '../components/ui/Card';
import { Users, BookOpen, Star, TrendingUp } from 'lucide-react';

export default function Analytics() {
    const stats = [
        { label: 'Total Students', value: '1,234', icon: Users, color: 'bg-blue-500' },
        { label: 'Active Courses', value: '12', icon: BookOpen, color: 'bg-purple-500' },
        { label: 'Avg. Rating', value: '4.8', icon: Star, color: 'bg-yellow-500' },
        { label: 'Completion Rate', value: '85%', icon: TrendingUp, color: 'bg-green-500' },
    ];

    return (
        <Layout>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Analytics</h1>
                <p className="text-slate-500 mt-2">Insights into your content performance.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat) => (
                    <Card key={stat.label}>
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl ${stat.color} bg-opacity-10 text-${stat.color.replace('bg-', '')}`}>
                                <stat.icon size={24} className={`text-${stat.color.replace('bg-', '')}`} />
                            </div>
                            <div>
                                <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                                <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <h3 className="text-lg font-bold text-slate-900 mb-6">Enrollment Trends</h3>
                    <div className="h-64 flex items-end justify-between gap-2">
                        {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                            <div key={i} className="w-full bg-primary-100 rounded-t-lg relative group">
                                <div
                                    className="absolute bottom-0 left-0 w-full bg-primary-500 rounded-t-lg transition-all duration-500 group-hover:bg-primary-600"
                                    style={{ height: `${h}%` }}
                                ></div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-sm text-slate-400">
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                </Card>

                <Card>
                    <h3 className="text-lg font-bold text-slate-900 mb-6">Top Performing Courses</h3>
                    <div className="space-y-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-slate-700">Advanced Cardiology Module {i}</span>
                                    <span className="text-slate-500">{90 - i * 5}%</span>
                                </div>
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                                        style={{ width: `${90 - i * 5}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>
        </Layout>
    );
}
