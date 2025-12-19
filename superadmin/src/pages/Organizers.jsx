import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, ChevronRight } from 'lucide-react';
import axios from '../api/axios';
import { useTheme } from '../context/ThemeContext';

export function Organizers() {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    const navigate = useNavigate();
    const [organizers, setOrganizers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchOrganizers = async () => {
            try {
                const res = await axios.get('/superadmin/organizers');
                setOrganizers(res.data);
            } catch (err) {
                console.error('Error fetching organizers:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchOrganizers();
    }, []);

    const filteredOrganizers = organizers.filter(org => 
        org.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        org.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <div className="p-8 text-center">Loading...</div>;
    }

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>
                    Organizers
                </h1>
                <div className="relative w-64">
                    <Search className={`absolute left-3 top-1/2 -translate-y-1/2 ${isDark ? 'text-slate-500' : 'text-slate-400'}`} size={18} />
                    <input
                        type="text"
                        placeholder="Search organizers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={`w-full pl-10 pr-4 py-2 rounded-lg border outline-none transition-all duration-200 text-sm ${
                            isDark
                                ? 'bg-slate-900 border-slate-800 focus:border-slate-700 text-white placeholder:text-slate-500'
                                : 'bg-white border-slate-200 focus:border-slate-300 text-slate-900 placeholder:text-slate-400'
                        }`}
                    />
                </div>
            </div>

            <div className={`rounded-xl border overflow-hidden ${
                isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'
            }`}>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className={`border-b ${isDark ? 'border-slate-800 bg-slate-900/50' : 'border-slate-100 bg-slate-50'}`}>
                            <tr>
                                <th className={`px-6 py-4 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Name</th>
                                <th className={`px-6 py-4 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Email</th>
                                <th className={`px-6 py-4 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Joined Date</th>
                                <th className={`px-6 py-4 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Courses</th>
                                <th className={`px-6 py-4 font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Action</th>
                            </tr>
                        </thead>
                        <tbody className={`divide-y ${isDark ? 'divide-slate-800' : 'divide-slate-100'}`}>
                            {filteredOrganizers.map((org) => (
                                <tr 
                                    key={org._id} 
                                    className={`group transition-colors cursor-pointer ${
                                        isDark ? 'hover:bg-slate-800/50' : 'hover:bg-slate-50'
                                    }`}
                                    onClick={() => navigate(`/organizers/${org._id}`)}
                                >
                                    <td className={`px-6 py-4 font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                        {org.name}
                                    </td>
                                    <td className={`px-6 py-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                        {org.email}
                                    </td>
                                    <td className={`px-6 py-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                        {new Date(org.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className={`px-6 py-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                                        {org.courseCount}
                                    </td>
                                    <td className="px-6 py-4">
                                        <ChevronRight size={18} className={`transition-transform group-hover:translate-x-1 ${
                                            isDark ? 'text-slate-600' : 'text-slate-400'
                                        }`} />
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
