import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import api from '../api/axios';

export default function Login() {
    const [mode, setMode] = useState('login'); // login, signup
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Form States
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        organizationName: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setError(''); // Clear error on input
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const endpoint = mode === 'login' ? '/auth/login' : '/auth/signup';

            const payload = mode === 'login'
                ? { email: formData.email, password: formData.password }
                : formData;

            const res = await api.post(endpoint, payload);

            localStorage.setItem('token', res.data.token);

            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            setError(err.response?.data?.msg || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex relative overflow-hidden">
            {/* Left Side - Visuals */}
            <div className="hidden lg:flex lg:w-1/2 bg-[#25225B] relative items-center justify-center overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                </div>

                {/* Animated Blobs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FED15E] rounded-full blur-[120px] opacity-20"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        x: [0, 100, 0],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full blur-[100px] opacity-20"
                />

                <div className="relative z-10 p-12 text-white max-w-lg">
                    <div className="w-16 h-16 bg-[#FED15E] rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-[#FED15E]/20">
                        <Sparkles className="text-[#25225B]" size={32} />
                    </div>
                    <h1 className="text-5xl font-bold mb-6 leading-tight">Manage your medical education empire.</h1>
                    <p className="text-lg text-slate-300 leading-relaxed">
                        Streamline your courses, track payments, and grow your organization with MedHub's powerful organizer tools.
                    </p>
                </div>
            </div>

            {/* Right Side - Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 lg:p-24 relative">
                <div className="w-full max-w-md">
                    <div className="mb-10">
                        <h2 className="text-3xl font-bold text-[#25225B] mb-2">
                            {mode === 'login' ? 'Welcome Back' : 'Create Account'}
                        </h2>
                        <p className="text-slate-500">
                            {mode === 'login'
                                ? 'Please enter your details to access your dashboard.'
                                : 'Join us to start managing your courses.'}
                        </p>
                    </div>

                    <div className="flex p-1 bg-slate-100 rounded-2xl mb-8">
                        <button
                            onClick={() => { setMode('login'); setError(''); }}
                            className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${mode === 'login'
                                    ? 'bg-white shadow-md text-[#25225B]'
                                    : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            Login
                        </button>
                        <button
                            onClick={() => { setMode('signup'); setError(''); }}
                            className={`flex-1 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${mode === 'signup'
                                    ? 'bg-white shadow-md text-[#25225B]'
                                    : 'text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            Signup
                        </button>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-center gap-2 text-sm">
                            <AlertCircle size={18} />
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <AnimatePresence mode="wait">
                            {mode === 'signup' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="space-y-5 overflow-hidden"
                                >
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Full Name</label>
                                        <Input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Dr. John Doe"
                                            required={mode === 'signup'}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Organization</label>
                                        <Input
                                            name="organizationName"
                                            value={formData.organizationName}
                                            onChange={handleChange}
                                            placeholder="Medical Institute"
                                            required={mode === 'signup'}
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Phone Number</label>
                                        <Input
                                            name="phone"
                                            type="tel"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+1 (555) 000-0000"
                                            required={mode === 'signup'}
                                        />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Email Address</label>
                            <Input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="name@example.com"
                                required
                            />
                        </div>

                        <div className="space-y-1">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">Password</label>
                            <Input
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 bg-[#25225B] text-white rounded-2xl font-bold shadow-xl shadow-[#25225B]/20 hover:shadow-[#25225B]/30 hover:-translate-y-1 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {loading ? 'Processing...' : (mode === 'login' ? 'Login' : 'Create Account')}
                            {!loading && <ArrowRight size={20} />}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
