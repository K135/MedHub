import React, { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { useTheme } from '../context/ThemeContext';
import { Plus, X, Loader2, Edit2, Trash2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import api, { BACKEND_URL } from '../api/axios';

export default function Speakers() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [speakers, setSpeakers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showSpeakerForm, setShowSpeakerForm] = useState(false);
    const [editingSpeaker, setEditingSpeaker] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        jobTitle: '',
        profileImage: null,
        achievements: [{ date: '', achievement: '' }],
        about: ''
    });
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        fetchSpeakers();
    }, []);

    const fetchSpeakers = async () => {
        try {
            setLoading(true);
            const res = await api.get('/speakers');
            setSpeakers(res.data);
        } catch (err) {
            console.error('Error fetching speakers:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleOpenForm = (speaker = null) => {
        if (speaker) {
            setEditingSpeaker(speaker._id);
            setFormData({
                name: speaker.name || '',
                jobTitle: speaker.jobTitle || '',
                profileImage: speaker.profileImage ? { preview: `${BACKEND_URL}${speaker.profileImage}` } : null,
                achievements: speaker.achievements && speaker.achievements.length > 0 
                    ? speaker.achievements 
                    : [{ date: '', achievement: '' }],
                about: speaker.about || ''
            });
        } else {
            setEditingSpeaker(null);
            setFormData({
                name: '',
                jobTitle: '',
                profileImage: null,
                achievements: [{ date: '', achievement: '' }],
                about: ''
            });
        }
        setShowSpeakerForm(true);
    };

    const handleCloseForm = () => {
        setShowSpeakerForm(false);
        setEditingSpeaker(null);
        setFormData({
            name: '',
            jobTitle: '',
            profileImage: null,
            achievements: [{ date: '', achievement: '' }],
            about: ''
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setFormData(prev => ({ ...prev, profileImage: { file, preview: previewUrl } }));
        }
    };

    const handleAddAchievement = () => {
        setFormData(prev => ({
            ...prev,
            achievements: [...prev.achievements, { date: '', achievement: '' }]
        }));
    };

    const handleRemoveAchievement = (index) => {
        setFormData(prev => ({
            ...prev,
            achievements: prev.achievements.filter((_, i) => i !== index)
        }));
    };

    const handleAchievementChange = (index, field, value) => {
        setFormData(prev => ({
            ...prev,
            achievements: prev.achievements.map((ach, i) => 
                i === index ? { ...ach, [field]: value } : ach
            )
        }));
    };

    const handleSaveSpeaker = async () => {
        if (!formData.name || !formData.jobTitle) return;

        try {
            setSaving(true);
            const data = new FormData();
            data.append('name', formData.name);
            data.append('jobTitle', formData.jobTitle);
            data.append('about', formData.about);
            
            const filteredAchievements = formData.achievements.filter(
                ach => ach.date || ach.achievement
            );
            data.append('achievements', JSON.stringify(filteredAchievements));

            if (formData.profileImage?.file) {
                data.append('profileImage', formData.profileImage.file);
            }

            if (editingSpeaker) {
                await api.put(`/speakers/${editingSpeaker}`, data, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            } else {
                await api.post('/speakers', data, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
            }

            await fetchSpeakers();
            handleCloseForm();
        } catch (err) {
            console.error('Error saving speaker:', err);
            alert(err.response?.data?.msg || 'Failed to save speaker');
        } finally {
            setSaving(false);
        }
    };

    const handleDeleteSpeaker = async (id) => {
        if (!window.confirm('Are you sure you want to delete this speaker?')) return;

        try {
            await api.delete(`/speakers/${id}`);
            await fetchSpeakers();
        } catch (err) {
            console.error('Error deleting speaker:', err);
            alert(err.response?.data?.msg || 'Failed to delete speaker');
        }
    };

    return (
        <Layout>
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                            Speakers
                        </h1>
                        <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            Manage all course speakers
                        </p>
                    </div>
                    <button
                        onClick={() => handleOpenForm()}
                        className="flex items-center gap-2 px-6 py-3 bg-[#25225B] text-white rounded-xl hover:bg-[#25225B]/90 transition-all hover:scale-105 active:scale-95 font-bold shadow-lg shadow-[#25225B]/20"
                    >
                        <Plus size={20} />
                        Add Speaker
                    </button>
                </div>

                {loading ? (
                    <div className="flex items-center justify-center py-20">
                        <Loader2 className={`animate-spin ${isDark ? 'text-white' : 'text-slate-900'}`} size={40} />
                    </div>
                ) : speakers.length === 0 ? (
                    <div className={`border rounded-2xl p-12 text-center ${
                        isDark ? 'bg-white/[0.03] border-white/10' : 'bg-white border-slate-200'
                    }`}>
                        <p className={`text-lg font-medium ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                            No speakers yet. Add your first speaker!
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {speakers.map((speaker) => (
                            <div
                                key={speaker._id}
                                className={`border rounded-2xl p-6 transition-all group ${
                                    isDark
                                        ? 'bg-white/[0.03] border-white/10 hover:border-white/20'
                                        : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md'
                                }`}
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    {speaker.profileImage ? (
                                        <img
                                            src={`${BACKEND_URL}${speaker.profileImage}`}
                                            alt={speaker.name}
                                            className="w-20 h-20 rounded-xl object-cover"
                                        />
                                    ) : (
                                        <div className="w-20 h-20 bg-gradient-to-br from-[#25225B] to-[#45417e] rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-[#25225B]/20">
                                            {speaker.name.charAt(0)}
                                        </div>
                                    )}
                                    <div className="flex-1">
                                        <h3 className={`font-bold text-lg mb-1 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                            {speaker.name}
                                        </h3>
                                        <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                            {speaker.jobTitle}
                                        </p>
                                    </div>
                                </div>

                                {speaker.achievements && speaker.achievements.length > 0 && (
                                    <div className="space-y-1 mb-4">
                                        {speaker.achievements.slice(0, 2).map((ach, idx) => (
                                            <p key={idx} className={`text-xs ${isDark ? 'text-slate-500' : 'text-slate-600'}`}>
                                                <span className="font-semibold">{ach.date}</span> - {ach.achievement}
                                            </p>
                                        ))}
                                        {speaker.achievements.length > 2 && (
                                            <p className="text-xs text-[#FED15E] font-semibold">
                                                +{speaker.achievements.length - 2} more
                                            </p>
                                        )}
                                    </div>
                                )}

                                <div className="flex gap-2 mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                                    <button
                                        onClick={() => handleOpenForm(speaker)}
                                        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg transition-all ${
                                            isDark
                                                ? 'bg-white/10 text-white hover:bg-white/20'
                                                : 'bg-slate-100 text-slate-900 hover:bg-slate-200'
                                        }`}
                                    >
                                        <Edit2 size={16} />
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteSpeaker(speaker._id)}
                                        className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-500 hover:text-white transition-all"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <AnimatePresence>
                {showSpeakerForm && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                        onClick={handleCloseForm}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-3xl shadow-2xl w-full max-w-3xl flex flex-col max-h-[85vh]"
                        >
                            <div className="p-6 border-b border-slate-200 flex items-center justify-between flex-shrink-0">
                                <h2 className="text-2xl font-bold text-[#25225B]">
                                    {editingSpeaker ? 'Edit Speaker' : 'Add New Speaker'}
                                </h2>
                                <button
                                    onClick={handleCloseForm}
                                    className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition-all"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="flex-1 overflow-y-auto p-6">
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-[#25225B] mb-3">
                                                Profile Image (1:1 ratio)
                                            </label>
                                            <div className="flex items-center gap-4">
                                                {formData.profileImage ? (
                                                    <img
                                                        src={formData.profileImage.preview}
                                                        alt="Preview"
                                                        className="w-24 h-24 rounded-xl object-cover border-2 border-[#FED15E]"
                                                    />
                                                ) : (
                                                    <div className="w-24 h-24 bg-slate-100 rounded-xl flex items-center justify-center text-slate-400">
                                                        <Plus size={32} />
                                                    </div>
                                                )}
                                                <label className="cursor-pointer px-4 py-2 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition-all font-medium">
                                                    Choose Image
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={handleImageChange}
                                                        className="hidden"
                                                    />
                                                </label>
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <div>
                                                <label className="block text-sm font-semibold text-[#25225B] mb-3">
                                                    Name *
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    className="w-full px-4 py-3 border-2 border-slate-100 rounded-xl focus:border-[#25225B] focus:outline-none transition-all"
                                                    placeholder="Enter speaker name"
                                                />
                                            </div>

                                            <div>
                                                <label className="block text-sm font-semibold text-[#25225B] mb-3">
                                                    Job Title *
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData.jobTitle}
                                                    onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                                                    className="w-full px-4 py-3 border-2 border-slate-100 rounded-xl focus:border-[#25225B] focus:outline-none transition-all"
                                                    placeholder="Enter job title"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <label className="block text-sm font-semibold text-[#25225B]">
                                                Achievements
                                            </label>
                                            <button
                                                onClick={handleAddAchievement}
                                                className="text-sm px-3 py-1 bg-[#FED15E] text-[#25225B] rounded-lg hover:shadow-md transition-all font-medium"
                                            >
                                                + Add Achievement
                                            </button>
                                        </div>
                                        <div className="space-y-3">
                                            {formData.achievements.map((ach, index) => (
                                                <div key={index} className="flex gap-3">
                                                    <input
                                                        type="text"
                                                        value={ach.date}
                                                        onChange={(e) => handleAchievementChange(index, 'date', e.target.value)}
                                                        className="w-32 px-3 py-2 border-2 border-slate-100 rounded-lg focus:border-[#25225B] focus:outline-none transition-all text-sm"
                                                        placeholder="Year"
                                                    />
                                                    <input
                                                        type="text"
                                                        value={ach.achievement}
                                                        onChange={(e) => handleAchievementChange(index, 'achievement', e.target.value)}
                                                        className="flex-1 px-3 py-2 border-2 border-slate-100 rounded-lg focus:border-[#25225B] focus:outline-none transition-all text-sm"
                                                        placeholder="Achievement description"
                                                    />
                                                    {formData.achievements.length > 1 && (
                                                        <button
                                                            onClick={() => handleRemoveAchievement(index)}
                                                            className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all"
                                                        >
                                                            <X size={16} />
                                                        </button>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="mb-6">
                                        <label className="block text-sm font-semibold text-[#25225B] mb-3">About</label>
                                        <ReactQuill
                                            value={formData.about}
                                            onChange={(value) => setFormData({ ...formData, about: value })}
                                            theme="snow"
                                            className="bg-white border-2 border-slate-100 rounded-2xl"
                                            style={{ height: '300px', marginBottom: '50px' }}
                                            modules={{
                                                toolbar: [
                                                    [{ 'header': [1, 2, 3, false] }],
                                                    ['bold', 'italic', 'underline'],
                                                    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                                                    ['link'],
                                                    ['clean']
                                                ]
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 border-t border-slate-200 flex-shrink-0">
                                <button
                                    onClick={handleSaveSpeaker}
                                    disabled={!formData.name || !formData.jobTitle || saving}
                                    className="w-full py-4 bg-[#FED15E] text-[#25225B] font-bold rounded-xl hover:shadow-lg hover:shadow-[#FED15E]/30 hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                                >
                                    {saving ? (
                                        <>
                                            <Loader2 className="animate-spin" size={20} />
                                            Saving...
                                        </>
                                    ) : (
                                        editingSpeaker ? 'Update Speaker' : 'Add Speaker'
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Layout>
    );
}
