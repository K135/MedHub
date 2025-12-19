import React, { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Card } from '../components/ui/Card';
import { ArrowUpRight, DollarSign, Calendar, Loader2, AlertCircle } from 'lucide-react';
import api from '../api/axios';

export default function Payments() {
    const [stats, setStats] = useState(null);
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchPaymentData();
    }, []);

    const fetchPaymentData = async () => {
        try {
            setLoading(true);
            setError('');
            const [statsRes, transactionsRes] = await Promise.all([
                api.get('/transactions/stats'),
                api.get('/transactions')
            ]);
            setStats(statsRes.data);
            setTransactions(transactionsRes.data);
        } catch (err) {
            console.error('Error fetching payment data:', err);
            setError(err.response?.data?.msg || 'Failed to load payment data');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <Layout>
                <div className="flex items-center justify-center h-96">
                    <Loader2 className="animate-spin text-[#25225B]" size={48} />
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Payments</h1>
                <p className="text-slate-500 mt-2">Track your earnings and transaction history.</p>
            </div>

            {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-center gap-2 text-sm">
                    <AlertCircle size={18} />
                    {error}
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="bg-gradient-to-br from-primary-600 to-primary-500 text-white border-none">
                    <div className="flex items-start justify-between mb-4">
                        <div className="p-2 bg-white/20 rounded-lg">
                            <DollarSign size={24} />
                        </div>
                        <span className="text-primary-100 text-sm font-medium">
                            {stats?.monthlyGrowth > 0 ? '+' : ''}{stats?.monthlyGrowth || 0}% this month
                        </span>
                    </div>
                    <p className="text-primary-100 text-sm font-medium">Total Earnings</p>
                    <h3 className="text-3xl font-bold mt-1">${stats?.totalEarnings?.toFixed(2) || '0.00'}</h3>
                </Card>

                <Card>
                    <div className="flex items-start justify-between mb-4">
                        <div className="p-2 bg-green-100 text-green-600 rounded-lg">
                            <ArrowUpRight size={24} />
                        </div>
                    </div>
                    <p className="text-slate-500 text-sm font-medium">Available for Payout</p>
                    <h3 className="text-3xl font-bold text-slate-900 mt-1">${stats?.availableForPayout?.toFixed(2) || '0.00'}</h3>
                </Card>

                <Card>
                    <div className="flex items-start justify-between mb-4">
                        <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                            <Calendar size={24} />
                        </div>
                    </div>
                    <p className="text-slate-500 text-sm font-medium">Next Payout Date</p>
                    <h3 className="text-3xl font-bold text-slate-900 mt-1">
                        {stats?.nextPayoutDate ? new Date(stats.nextPayoutDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'N/A'}
                    </h3>
                </Card>
            </div>

            <h2 className="text-xl font-bold text-slate-900 mb-6">Transaction History</h2>
            {transactions.length === 0 ? (
                <Card>
                    <div className="text-center py-12">
                        <p className="text-slate-500">No transactions yet</p>
                    </div>
                </Card>
            ) : (
                <Card className="overflow-hidden p-0">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-slate-700">Transaction ID</th>
                                <th className="px-6 py-4 font-semibold text-slate-700">Description</th>
                                <th className="px-6 py-4 font-semibold text-slate-700">Date</th>
                                <th className="px-6 py-4 font-semibold text-slate-700">Status</th>
                                <th className="px-6 py-4 font-semibold text-slate-700 text-right">Amount</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {transactions.map((txn) => (
                                <tr key={txn._id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-mono text-slate-500">{txn.transactionId}</td>
                                    <td className="px-6 py-4 font-medium text-slate-900">{txn.description}</td>
                                    <td className="px-6 py-4 text-slate-500">{new Date(txn.createdAt).toLocaleDateString()}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            txn.status === 'completed' ? 'bg-green-100 text-green-700' :
                                            txn.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                                            txn.status === 'failed' ? 'bg-red-100 text-red-700' :
                                            'bg-slate-100 text-slate-700'
                                        }`}>
                                            {txn.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right font-medium text-green-600">+${txn.amount.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
            )}
        </Layout>
    );
}
