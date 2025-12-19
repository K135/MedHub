import React, { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { ShieldCheck, Loader2, AlertCircle, CheckCircle } from 'lucide-react';
import api from '../api/axios';

export default function BankDetails() {
    const [bankDetails, setBankDetails] = useState(null);
    const [formData, setFormData] = useState({
        accountHolderName: '',
        bankName: '',
        routingNumber: '',
        accountNumber: '',
        confirmAccountNumber: ''
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        fetchBankDetails();
    }, []);

    const fetchBankDetails = async () => {
        try {
            setLoading(true);
            const res = await api.get('/bank-details');
            setBankDetails(res.data);
            setFormData({
                accountHolderName: res.data.accountHolderName || '',
                bankName: res.data.bankName || '',
                routingNumber: '',
                accountNumber: '',
                confirmAccountNumber: ''
            });
        } catch (err) {
            if (err.response?.status !== 404) {
                console.error('Error fetching bank details:', err);
            }
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
        setSuccess('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (formData.accountNumber !== formData.confirmAccountNumber) {
            setError('Account numbers do not match');
            return;
        }

        try {
            setSaving(true);
            setError('');
            setSuccess('');

            const payload = {
                accountHolderName: formData.accountHolderName,
                bankName: formData.bankName,
                routingNumber: formData.routingNumber,
                accountNumber: formData.accountNumber
            };

            const res = await api.post('/bank-details', payload);
            setBankDetails(res.data);
            setSuccess('Bank details saved successfully!');

            setFormData({
                ...formData,
                routingNumber: '',
                accountNumber: '',
                confirmAccountNumber: ''
            });

            setTimeout(() => setSuccess(''), 3000);
        } catch (err) {
            console.error('Error saving bank details:', err);
            setError(err.response?.data?.msg || 'Failed to save bank details');
        } finally {
            setSaving(false);
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
                <h1 className="text-3xl font-bold text-slate-900">Bank Details</h1>
                <p className="text-slate-500 mt-2">Manage your payout information securely.</p>
            </div>

            {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-center gap-2 text-sm">
                    <AlertCircle size={18} />
                    {error}
                </div>
            )}

            {success && (
                <div className="mb-6 p-4 bg-green-50 border border-green-100 text-green-600 rounded-xl flex items-center gap-2 text-sm">
                    <CheckCircle size={18} />
                    {success}
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Card>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Account Holder Name</label>
                                <Input 
                                    name="accountHolderName"
                                    value={formData.accountHolderName}
                                    onChange={handleChange}
                                    placeholder="As per bank records"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Bank Name</label>
                                    <Input 
                                        name="bankName"
                                        value={formData.bankName}
                                        onChange={handleChange}
                                        placeholder="e.g. Chase"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Routing Number</label>
                                    <Input 
                                        name="routingNumber"
                                        value={formData.routingNumber}
                                        onChange={handleChange}
                                        placeholder="XXXXXXXXX"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Account Number</label>
                                <Input 
                                    name="accountNumber"
                                    type="password"
                                    value={formData.accountNumber}
                                    onChange={handleChange}
                                    placeholder="XXXXXXXXXXXX"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Confirm Account Number</label>
                                <Input 
                                    name="confirmAccountNumber"
                                    type="password"
                                    value={formData.confirmAccountNumber}
                                    onChange={handleChange}
                                    placeholder="XXXXXXXXXXXX"
                                    required
                                />
                            </div>

                            <div className="bg-blue-50 text-blue-700 p-4 rounded-xl flex items-start gap-3 text-sm">
                                <ShieldCheck className="shrink-0 mt-0.5" size={18} />
                                <p>Your bank details are encrypted and stored securely. We use industry-standard encryption to protect your financial information.</p>
                            </div>

                            <div className="pt-4 border-t border-slate-100 flex justify-end">
                                <Button type="submit" disabled={saving}>
                                    {saving ? 'Saving...' : 'Save Details'}
                                </Button>
                            </div>
                        </form>
                    </Card>
                </div>

                <div>
                    {bankDetails ? (
                        <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white border-none">
                            <div className="mb-6">
                                <p className="text-slate-400 text-sm uppercase tracking-wider font-medium">Current Account</p>
                                <p className="text-2xl font-bold mt-1">{bankDetails.accountNumber || '****'}</p>
                            </div>
                            <div className="mb-6">
                                <p className="text-slate-400 text-sm uppercase tracking-wider font-medium">Bank</p>
                                <p className="text-lg font-medium mt-1">{bankDetails.bankName || 'N/A'}</p>
                            </div>
                            <div>
                                <p className="text-slate-400 text-sm uppercase tracking-wider font-medium">Status</p>
                                <div className="flex items-center gap-2 mt-1 text-green-400 font-medium">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    {bankDetails.isVerified ? 'Verified' : 'Pending Verification'}
                                </div>
                            </div>
                        </Card>
                    ) : (
                        <Card className="bg-slate-50 border-dashed">
                            <div className="text-center py-8">
                                <p className="text-slate-500">No bank details saved yet</p>
                            </div>
                        </Card>
                    )}
                </div>
            </div>
        </Layout>
    );
}
