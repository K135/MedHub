import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Mail, MessageCircle, Phone, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import api from '../api/axios';

export default function Support() {
    const [formData, setFormData] = useState({
        subject: 'General Inquiry',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError('');
        setSuccess('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            setLoading(true);
            setError('');
            setSuccess('');

            await api.post('/support', {
                subject: formData.subject,
                message: formData.message,
                priority: 'medium'
            });

            setSuccess('Support ticket submitted successfully! We\'ll get back to you soon.');
            setFormData({
                subject: 'General Inquiry',
                message: ''
            });

            setTimeout(() => setSuccess(''), 5000);
        } catch (err) {
            console.error('Error submitting ticket:', err);
            setError(err.response?.data?.msg || 'Failed to submit ticket. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Layout>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-900">Help & Support</h1>
                <p className="text-slate-500 mt-2">We're here to help you succeed.</p>
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
                        <h3 className="text-lg font-bold text-slate-900 mb-6">Send us a message</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Subject</label>
                                <select 
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 outline-none"
                                >
                                    <option>General Inquiry</option>
                                    <option>Technical Issue</option>
                                    <option>Billing Question</option>
                                    <option>Feature Request</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-700">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white/50 focus:bg-white focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-200 outline-none h-40 resize-none"
                                    placeholder="How can we help you?"
                                    required
                                />
                            </div>
                            <div className="flex justify-end">
                                <Button type="submit" disabled={loading}>
                                    {loading ? (
                                        <>
                                            <Loader2 className="animate-spin mr-2" size={16} />
                                            Submitting...
                                        </>
                                    ) : (
                                        'Submit Ticket'
                                    )}
                                </Button>
                            </div>
                        </form>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card className="bg-primary-600 text-white border-none">
                        <h3 className="text-lg font-bold mb-4">Contact Info</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/20 rounded-lg">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-primary-100 text-xs">Email Us</p>
                                    <p className="font-medium">support@medhub.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-white/20 rounded-lg">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-primary-100 text-xs">Call Us</p>
                                    <p className="font-medium">+1 (800) 123-4567</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card>
                        <h3 className="text-lg font-bold text-slate-900 mb-4">FAQs</h3>
                        <div className="space-y-4">
                            {[
                                "How do I upload a new course?",
                                "When will I receive my payout?",
                                "How can I change my password?",
                                "What file formats are supported?"
                            ].map((q, i) => (
                                <div key={i} className="p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer text-sm font-medium text-slate-700 flex items-center justify-between group">
                                    {q}
                                    <MessageCircle size={16} className="text-slate-400 group-hover:text-primary-500" />
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
    );
}
