import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, MoreVertical } from 'lucide-react';
import axios from '../api/axios';
import { useTheme } from '../context/ThemeContext';

export function OrganizerDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/superadmin/organizers/${id}`);
                setData(res.data);
            } catch (err) {
                console.error('Error fetching organizer details:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    const toggleFeatured = async (courseId) => {
        try {
            const res = await axios.put(`/superadmin/courses/${courseId}/toggle-featured`);
            setData(prev => ({
                ...prev,
                courses: prev.courses.map(c => 
                    c._id === courseId ? { ...c, featured: res.data.featured } : c
                )
            }));
        } catch (err) {
            console.error('Error toggling featured:', err);
        }
    };

    const updateStatus = async (courseId, newStatus) => {
        try {
            const res = await axios.put(`/superadmin/courses/${courseId}/status`, { status: newStatus });
            setData(prev => ({
                ...prev,
                courses: prev.courses.map(c => 
                    c._id === courseId ? { ...c, status: res.data.status } : c
                )
            }));
        } catch (err) {
            console.error('Error updating status:', err);
        }
    };

    if (loading) {
        return <div className="p-8 text-center">Loading...</div>;
    }

    if (!data) {
        return <div className="p-8 text-center">Organizer not found</div>;
    }

    const { organizer, courses } = data;

    return (
        <div>
            <button 
                onClick={() => navigate('/organizers')}
                className={`flex items-center gap-2 mb-6 text-sm font-medium transition-colors ${
                    isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                }`}
            >
                <ArrowLeft size={18} />
                Back to Organizers
            </button>

            <div className={`p-6 rounded-xl border mb-8 ${
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
                <h1 className={`text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    {organizer.name}
                </h1>
                <div className={`flex flex-wrap gap-6 text-sm ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                    <p>Email: {organizer.email}</p>
                    <p>Phone: {organizer.phone}</p>
                    <p>Organization: {organizer.organizationName || 'N/A'}</p>
                    <p>Joined: {new Date(organizer.createdAt).toLocaleDateString()}</p>
                </div>
            </div>

            <h2 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Courses ({courses.length})
            </h2>

            <div className={`rounded-xl border overflow-hidden ${
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className={`border-b ${isDark ? 'border-slate-800 bg-slate-900/50' : 'border-slate-100 bg-slate-50'}`}>
                            <tr>
                                <th className={`px-6 py-4 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Title</th>
                                <th className={`px-6 py-4 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Status</th>
                                <th className={`px-6 py-4 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Featured</th>
                                <th className={`px-6 py-4 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Actions</th>
                            </tr>
                        </thead>
                        <tbody className={`divide-y ${isDark ? 'divide-slate-800' : 'divide-slate-100'}`}>
                            {courses.map((course) => (
                                <tr key={course._id} className={isDark ? 'hover:bg-slate-800/50' : 'hover:bg-slate-50'}>
                                    <td className={`px-6 py-4 font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                        {course.title}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                            course.status === 'active'
                                                ? 'bg-green-100 text-green-800'
                                                : course.status === 'draft'
                                                    ? 'bg-yellow-100 text-yellow-800'
                                                    : 'bg-gray-100 text-gray-800'
                                        }`}>
                                            {course.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => toggleFeatured(course._id)}
                                            className={`p-1 rounded-full transition-colors ${
                                                course.featured
                                                    ? 'text-yellow-400 hover:text-yellow-500'
                                                    : isDark ? 'text-slate-600 hover:text-slate-400' : 'text-slate-300 hover:text-slate-400'
                                            }`}
                                        >
                                            <Star size={20} fill={course.featured ? "currentColor" : "none"} />
                                        </button>
                                    </td>
                                    <td className="px-6 py-4 flex items-center gap-2">
                                        <button
                                            onClick={() => navigate(`/create-course?id=${course._id}`)}
                                            className={`px-3 py-1 rounded text-xs font-medium transition-colors ${
                                                isDark 
                                                    ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white' 
                                                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                                            }`}
                                        >
                                            Edit
                                        </button>
                                        <select
                                            value={course.status}
                                            onChange={(e) => updateStatus(course._id, e.target.value)}
                                            className={`text-xs rounded border px-2 py-1 outline-none ${
                                                isDark
                                                    ? 'bg-slate-800 border-slate-700 text-white'
                                                    : 'bg-white border-slate-200 text-slate-900'
                                            }`}
                                        >
                                            <option value="draft">Draft</option>
                                            <option value="active">Active</option>
                                            <option value="archived">Archived</option>
                                        </select>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
