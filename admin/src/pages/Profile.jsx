import React, { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { Camera, Loader2, AlertCircle, CheckCircle } from 'lucide-react';
import api from '../api/axios';

export default function Profile() {
    const [profile, setProfile] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        organizationName: '',
        website: ''
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            setLoading(true);
            const res = await api.get('/profile');
            setProfile(res.data);
            setFormData({
                name: res.data.name || '',
                email: res.data.email || '',
                phone: res.data.phone || '',
                organizationName: res.data.organizationName || '',
                website: res.data.website || ''
            });
        } catch (err) {
            console.error('Error fetching profile:', err);
            setError(err.response?.data?.msg || 'Failed to load profile');
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
        try {
            setSaving(true);
            setError('');
            setSuccess('');
            
            const res = await api.put('/profile', formData);
            setProfile(res.data);
            setSuccess('Profile updated successfully!');
            
            setTimeout(() => setSuccess(''), 3000);
        } catch (err) {
            console.error('Error updating profile:', err);
            setError(err.response?.data?.msg || 'Failed to update profile');
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
                <h1 className="text-3xl font-bold text-slate-900">Profile Settings</h1>
                <p className="text-slate-500 mt-2">Manage your personal and organization details.</p>
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
                        <h3 className="text-lg font-bold text-slate-900 mb-6">Personal Information</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Full Name</label>
                                <Input 
                                    name="name"
                                    value={formData.name} 
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Email Address</label>
                                <Input 
                                    name="email"
                                    type="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Phone Number</label>
                                <Input 
                                    name="phone"
                                    type="tel" 
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="pt-6 border-t border-slate-100">
                                <h3 className="text-lg font-bold text-slate-900 mb-6">Organization Details</h3>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Organization Name</label>
                                        <Input 
                                            name="organizationName"
                                            value={formData.organizationName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-slate-700">Website</label>
                                        <Input 
                                            name="website"
                                            value={formData.website}
                                            onChange={handleChange}
                                            placeholder="https://"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100 flex justify-end">
                                <Button type="submit" disabled={saving}>
                                    {saving ? 'Saving...' : 'Save Changes'}
                                </Button>
                            </div>
                        </form>
                    </Card>
                </div>

                <div>
                    <Card className="text-center">
                        <div className="relative w-32 h-32 mx-auto mb-4">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg shadow-primary-500/20">
                                {profile?.name?.charAt(0)?.toUpperCase() || 'U'}
                            </div>
                            <button className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md border border-slate-100 text-slate-600 hover:text-primary-600 transition-colors">
                                <Camera size={20} />
                            </button>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900">{profile?.name || 'User'}</h3>
                        <p className="text-slate-500">Organizer</p>

                        <div className="mt-6 pt-6 border-t border-slate-100 text-left space-y-4">
                            <div>
                                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Member Since</p>
                                <p className="text-sm font-medium text-slate-900">
                                    {profile?.createdAt ? new Date(profile.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'N/A'}
                                </p>
                            </div>
                            <div>
                                <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Organization</p>
                                <p className="text-sm font-medium text-slate-900">{profile?.organizationName || 'Not set'}</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}
