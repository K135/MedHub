import React, { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Edit, Trash2, Eye, Loader2, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';

export default function Courses() {
    const navigate = useNavigate();
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [deleteLoading, setDeleteLoading] = useState(null);

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            setLoading(true);
            setError('');
            const res = await api.get('/courses');
            setCourses(res.data);
        } catch (err) {
            console.error('Error fetching courses:', err);
            setError(err.response?.data?.msg || 'Failed to load courses');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this course?')) {
            return;
        }

        try {
            setDeleteLoading(id);
            await api.delete(`/courses/${id}`);
            setCourses(courses.filter(c => c._id !== id));
        } catch (err) {
            console.error('Error deleting course:', err);
            alert(err.response?.data?.msg || 'Failed to delete course');
        } finally {
            setDeleteLoading(null);
        }
    };

    return (
        <Layout>
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">My Courses</h1>
                    <p className="text-slate-500 mt-2">Manage your educational content.</p>
                </div>
                <Button onClick={() => navigate('/add-course')}>Add New Course</Button>
            </div>

            {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-center gap-2 text-sm">
                    <AlertCircle size={18} />
                    {error}
                </div>
            )}

            {loading ? (
                <div className="flex items-center justify-center h-96">
                    <Loader2 className="animate-spin text-[#25225B]" size={48} />
                </div>
            ) : courses.length === 0 ? (
                <Card>
                    <div className="text-center py-12">
                        <p className="text-slate-500 mb-4">No courses found</p>
                        <Button onClick={() => navigate('/add-course')}>Create Your First Course</Button>
                    </div>
                </Card>
            ) : (
                <Card className="overflow-hidden p-0">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-slate-50 border-b border-slate-100">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-slate-700">Course Title</th>
                                <th className="px-6 py-4 font-semibold text-slate-700">Type</th>
                                <th className="px-6 py-4 font-semibold text-slate-700">Students</th>
                                <th className="px-6 py-4 font-semibold text-slate-700">Rating</th>
                                <th className="px-6 py-4 font-semibold text-slate-700">Status</th>
                                <th className="px-6 py-4 font-semibold text-slate-700 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {courses.map((course) => (
                                <tr key={course._id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900">{course.title}</td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            course.courseType === 'lms' ? 'bg-purple-100 text-purple-700' :
                                            course.courseType === 'external' ? 'bg-blue-100 text-blue-700' :
                                            'bg-orange-100 text-orange-700'
                                        }`}>
                                            {course.courseType.toUpperCase()}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500">{course.enrollmentCount || 0}</td>
                                    <td className="px-6 py-4 text-slate-500 flex items-center gap-1">
                                        <span className="text-yellow-400">★</span> {course.rating || 0}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                            course.status === 'active' ? 'bg-green-100 text-green-700' :
                                            course.status === 'draft' ? 'bg-slate-100 text-slate-600' :
                                            'bg-red-100 text-red-600'
                                        }`}>
                                            {course.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                                                <Eye size={18} />
                                            </button>
                                            <button 
                                                onClick={() => navigate(`/add-course?id=${course._id}`)}
                                                className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                            >
                                                <Edit size={18} />
                                            </button>
                                            <button 
                                                onClick={() => handleDelete(course._id)}
                                                disabled={deleteLoading === course._id}
                                                className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50"
                                            >
                                                {deleteLoading === course._id ? (
                                                    <Loader2 size={18} className="animate-spin" />
                                                ) : (
                                                    <Trash2 size={18} />
                                                )}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </Card>
            )}
        </Layout>
    );
}
