import React, { useState, useRef, useEffect } from 'react';
import { Layout as DefaultLayout } from '../components/Layout';
import { Input } from '../components/ui/Input';
import {
    ArrowRight,
    ArrowLeft,
    Upload,
    Image as ImageIcon,
    FileText,
    Users,
    CheckCircle,
    Plus,
    X,
    Sparkles,
    MonitorPlay,
    Calendar,
    MapPin,
    Award,
    Search,
    Check,
    Star,
    BookOpen,
    Ticket,
    UploadCloud,
    RefreshCw,
    Trash2,
    Loader2,
    AlertCircle,
    Layout as LayoutIcon
} from 'lucide-react';


import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useSearchParams } from 'react-router-dom';
import api, { BACKEND_URL } from '../api/axios';
import { useTheme } from '../context/ThemeContext';

// --- Data Constants ---
const LOCATIONS = [
    "Dubai, UAE", "Abu Dhabi, UAE", "Sharjah, UAE", "Al Ain, UAE", "Ajman, UAE",
    "Ras Al Khaimah, UAE", "Fujairah, UAE", "Umm Al Quwain, UAE", "Kalba, UAE",
    "Dibba Al-Fujairah, UAE", "Madinat Zayed, UAE", "Khor Fakkan, UAE",
    "Al Dhannah, UAE", "Ghayathi, UAE", "Dhaid, UAE", "Jebel Ali, UAE",
    "Liwa Oasis, UAE", "Hatta, UAE", "Ar-Rams, UAE", "Dibba Al-Hisn, UAE",
    "Al Jazirah Al Hamra, UAE"
];

const PROFESSIONS = [
    "Academia", "Acupuncturist", "Addiction Counselors", "Addictions Professionals", "Administrators", "Advanced Practice Nurse", "Advanced Practice Providers", "Aesthetic Medicine Physician", "Allergy & immunology", "Allied Health Professionals", "Anesthesiologist", "Athletic Trainers",
    "Bio-Pharma Companies", "Bio-Tech Companies", "Breast Cancer - pathologists",
    "Cardiologists", "Cardiothoracic", "Cell Biology", "Certified Registered Nurse Anesthetist", "Chiropractors", "Clinical Nurse Specialists", "Clinical Pharmacists", "Clinical Pharmacology", "Clinical Researchers", "Clinicians", "Clinicians - Family Physicians", "Consultants", "Critical Care Medicine", "Critical Care Physician",
    "Dental Assistants", "Dental Auxiliaries", "Dental Hygienists", "Dental Specialists", "Dental Staff", "Dentist", "Dentist - DDS", "Dentist - RDA", "Dentist - RDH", "Dermatologic Surgeons", "Dermatologist", "Dermatologists", "Diabetologists", "Dietitian",
    "ER physicians", "Echocardiographers", "Emergency Medical Technician", "Emergency Medicine", "Emergency Medicine Physicians", "Emergency Medicine Providers", "Endocrinologist", "Endocrinologists", "Endodontists", "Epidemiologists",
    "Family Medicine", "Family Physicians", "Family Practice physicians", "Fellows",
    "Gastroenterologists", "General Practitioner", "General Surgeons", "Geriatric Physicians", "Geriatrics", "Gynaecologist",
    "Health Care Practitioners", "Healthcare Management", "Healthcare Professionals", "Healthcare Providers", "Hematologist", "Hepatologists", "Hospital Medicine", "Hospitalist",
    "Imaging", "Immunologists", "Implantologists", "Infectious Diseases Physician", "Internal Medicine", "Internal Medicine Physician", "Internist", "Interventional Cardiologists", "Interventional Radiologists",
    "Leadership", "Licensed Massage Therapists",
    "Medical Assistants", "Medical Directors", "Medical Doctors", "Medical Geneticists", "Medical Oncologists", "Medical Physicists", "Medical Students", "Medical Technologist", "Mental Health Professionals", "Midwife",
    "Neonatal-Perinatal Medicine", "Neonatologist", "Nephrologists", "Neurologist and Neurosurgeon", "Neurologists", "Neurology", "Neurosurgeons", "Nuclear Medicine Physicians", "Nurse", "Nurse Practitioners", "Nurses", "Nursing", "Nursing - APRN", "Nursing - LPN", "Nursing - RN", "Nutritionists",
    "OBGYN", "Obstetricians", "Obstetrics and Gynecology Physicians", "Occupational Therapists", "Occupational Therapy Assistants", "Oncologists", "Oncology", "Oncology - Radiologists", "Ophthalmologist", "Optometrist", "Oral and Maxillofacial Surgeons", "Orthodontists", "Orthopaedic Surgeons", "Orthopedic Surgeons", "Orthopedics", "Osteopath", "Other Health Professionals", "Otolaryngologist", "Otolaryngology-head and neck Surgeons", "Otorhinolaryngologists",
    "Pain Management", "Pain medicine", "Paramedics", "Pathologists", "Pediatric Dentists", "Pediatricians", "Pediatrics", "Periodontists", "Pharmacist", "Pharmacist - PharmD", "Pharmacist - Pharmacist", "Pharmacist - Pharmacy Technician", "Physical Therapist", "Physical Therapists", "Physical Therapy Assistants", "Physical medicine and rehabilitation", "Physician", "Physician - DO", "Physician - MD", "Physician - MD/DO", "Physician Assistant", "Physician Assistant - PAs", "Physiologists", "Plastic Surgeons", "Podiatrist", "Postdoctoral fellows", "Practitioners/Doctors", "Primary Care Physician", "Primary Care Physicians", "Primary Care Professionals", "Primary Care Providers", "Prosthodontists", "Psychiatrists", "Psychologists", "Public health professionals", "Pulmonologist", "Pulmonologists", "pediatrist",
    "Radiation Oncologists", "Radiologist", "Radiologists", "Radiology Technicians", "Radiotechnologists", "Rehabilitation", "Researchers", "Resident Physician", "Residents", "Respiratory Therapist", "Rheumatologists",
    "Scientists", "Sleep Medicine", "Social Worker", "Social Workers", "Sonographer", "Speech Language Pathologists", "Spine Surgeons", "Sports Medicine Physician", "Students", "Surgeons",
    "Technicians", "Therapists", "Thoracic Surgeons", "Trainees", "Transplant Surgeons", "Trauma", "Trauma Surgeons",
    "Ultrasound Specialists", "Urologists",
    "VPs, GMs, Directors, Heads and Managers", "Vascular Medicine Specialists", "Vascular Surgeon",
    "Womens Health"
];

// --- Components ---

const AnimatedInput = ({ label, ...props }) => (
    <div className="relative group">
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative"
        >
            <input
                {...props}
                className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl outline-none focus:border-[#25225B] focus:shadow-lg focus:shadow-[#25225B]/5 transition-all duration-300 placeholder:text-transparent peer font-bold text-[#25225B] shadow-sm"
                placeholder={label}
            />
            <label className="absolute left-6 top-4 text-slate-500 text-base transition-all duration-300 pointer-events-none 
        peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:text-[#25225B] peer-focus:bg-white peer-focus:px-2 peer-focus:font-bold
        peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#25225B] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:font-bold"
            >
                {label}
            </label>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-[#FED15E]">
                <Sparkles size={16} />
            </div>
        </motion.div>
    </div>
);

const MultiSelect = ({ options, selected, onChange, label }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [wrapperRef]);

    const filteredOptions = options.filter(opt =>
        opt.toLowerCase().includes(search.toLowerCase())
    );

    const toggleOption = (option) => {
        if (selected.includes(option)) {
            onChange(selected.filter(item => item !== option));
        } else {
            onChange([...selected, option]);
        }
    };

    return (
        <div className="relative" ref={wrapperRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl cursor-pointer hover:border-[#25225B] hover:shadow-lg hover:shadow-[#25225B]/5 transition-all min-h-[60px] shadow-sm"
            >
                <span className="absolute -top-3 left-4 text-xs font-bold text-[#25225B] bg-white px-2">
                    {label}
                </span>
                <div className="flex flex-wrap gap-2">
                    {selected.length === 0 && <span className="text-slate-500 font-medium">Select {label}...</span>}
                    {selected.map(item => (
                        <span key={item} className="bg-[#25225B]/10 text-[#25225B] px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                            {item}
                            <X
                                size={12}
                                className="cursor-pointer hover:text-red-500"
                                onClick={(e) => { e.stopPropagation(); toggleOption(item); }}
                            />
                        </span>
                    ))}
                </div>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <Plus size={20} className={`transition-transform ${isOpen ? 'rotate-45' : ''}`} />
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute z-50 w-full mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                    >
                        <div className="p-3 border-b border-slate-100">
                            <div className="relative">
                                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full pl-9 pr-4 py-2 bg-slate-50 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#25225B]/20"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    autoFocus
                                />
                            </div>
                        </div>
                        <div className="max-h-[300px] overflow-y-auto p-2">
                            {filteredOptions.map(option => (
                                <div
                                    key={option}
                                    onClick={() => toggleOption(option)}
                                    className="flex items-center justify-between p-3 hover:bg-slate-50 rounded-xl cursor-pointer transition-colors"
                                >
                                    <span className="text-sm font-medium text-slate-700">{option}</span>
                                    {selected.includes(option) && <Check size={16} className="text-[#25225B]" />}
                                </div>
                            ))}
                            {filteredOptions.length === 0 && (
                                <div className="p-4 text-center text-slate-400 text-sm">No results found</div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default function AddCourse({ Layout = DefaultLayout }) {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const courseId = searchParams.get('id');
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    const [currentStep, setCurrentStep] = useState(1);
    const [direction, setDirection] = useState(0);
    const [saving, setSaving] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [formData, setFormData] = useState({
        // Step 1: Essentials
        title: '',
        url: '',
        description: '',
        price: '',
        seatType: 'unlimited', // 'limited' or 'unlimited'
        totalSeats: '',

        startDate: '',
        endDate: '',
        eventType: 'Inperson', // Inperson, Online, Hybrid
        provideCredits: true, // true or false
        creditType: 'CME Credits', // CME, CPD, Certificate, PDH
        creditPoints: '',
        courseType: '', // webinar, course, meetup (when provideCredits is false)
        location: '',
        professions: [],

        // Step 2: Visuals
        thumbnail: null,
        banner: null,

        // Step 3: Content
        contentType: 'section', // 'section' or 'richText'
        richTextContent: '',
        shortDescription: '',
        topics: [{ id: 1, title: '', subtitle: '', description: '' }],
        objectives: [''],
        keyFeatures: [''],
        accreditation: [{ id: 1, title: '', description: '' }],
        creditSummary: ''
    });

    const [newSpeaker, setNewSpeaker] = useState({
        name: '',
        jobTitle: '',
        profileImage: null,
        achievements: [{ date: '', achievement: '' }],
        about: ''
    });
    const [showSpeakerForm, setShowSpeakerForm] = useState(false);
    const [allSpeakers, setAllSpeakers] = useState([]);
    const [selectedSpeakerIds, setSelectedSpeakerIds] = useState([]);
    const [showProfessionModal, setShowProfessionModal] = useState(false);
    const [professionSearch, setProfessionSearch] = useState('');

    useEffect(() => {
        if (courseId) {
            fetchCourseData();
        }
        fetchAllSpeakers();
    }, [courseId]);

    const fetchAllSpeakers = async () => {
        try {
            const res = await api.get('/speakers');
            setAllSpeakers(res.data);
        } catch (err) {
            console.error('Error fetching speakers:', err);
        }
    };

    const fetchCourseData = async () => {
        try {
            setLoading(true);
            setError('');
            const res = await api.get(`/courses/${courseId}`);
            const course = res.data;

            setFormData({
                title: course.title || '',
                url: course.externalLink || '',
                description: course.description || '',
                price: course.price || '',
                seatType: 'unlimited',
                totalSeats: '',
                startDate: course.startDate ? course.startDate.split('T')[0] : '',
                endDate: course.endDate ? course.endDate.split('T')[0] : '',
                eventType: 'Inperson',
                provideCredits: course.credits && course.credits.length > 0 ? true : false,
                creditType: course.credits?.[0]?.type || 'CME Credits',
                creditPoints: course.credits?.[0]?.value || '',
                courseType: course.courseType || '',
                location: course.location || '',
                professions: course.targetProfession || [],
                thumbnail: null,
                banner: course.bannerImage ? { preview: `${BACKEND_URL}${course.bannerImage}` } : null,
                contentType: course.contentType || 'section',
                richTextContent: course.richTextContent || '',
                shortDescription: course.shortDescription || '',
                topics: course.topics && course.topics.length > 0
                    ? course.topics.map((t, idx) => ({ id: idx + 1, ...t }))
                    : [{ id: 1, title: '', subtitle: '', description: '' }],
                objectives: course.objectives && course.objectives.length > 0
                    ? course.objectives
                    : [''],
                keyFeatures: course.keyFeatures && course.keyFeatures.length > 0
                    ? course.keyFeatures
                    : [''],
                accreditation: course.accreditation && course.accreditation.length > 0
                    ? course.accreditation.map((a, idx) => ({ id: idx + 1, ...a }))
                    : [{ id: 1, title: '', description: '' }],
                creditSummary: course.creditSummary || ''
            });

            if (course.speakers && course.speakers.length > 0) {
                setSelectedSpeakerIds(course.speakers);
            }
        } catch (err) {
            console.error('Error fetching course:', err);
            setError(err.response?.data?.msg || 'Failed to load course data');
        } finally {
            setLoading(false);
        }
    };

    const pageVariants = {
        initial: (direction) => ({ opacity: 0, x: direction > 0 ? 50 : -50 }),
        animate: { opacity: 1, x: 0 },
        exit: (direction) => ({ opacity: 0, x: direction > 0 ? -50 : 50 })
    };

    const steps = [
        { id: 1, title: 'Essentials', icon: FileText, desc: 'Basic info & Logistics' },
        { id: 2, title: 'Visuals', icon: ImageIcon, desc: 'Thumbnails & Banners' },
        { id: 3, title: 'Content', icon: MonitorPlay, desc: 'Details & Credits' },
        { id: 4, title: 'Experts', icon: Users, desc: 'Speakers & Hosts' },
    ];

    const handleStepChange = (newStep) => {
        setDirection(newStep > currentStep ? 1 : -1);
        setCurrentStep(newStep);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleFileChange = (e, field) => {
        const file = e.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setFormData(prev => ({ ...prev, [field]: { file, preview: previewUrl } }));
        }
    };

    const handleAddSpeaker = async () => {
        if (!newSpeaker.name || !newSpeaker.jobTitle) return;

        try {
            setSaving(true);
            const data = new FormData();
            data.append('name', newSpeaker.name);
            data.append('jobTitle', newSpeaker.jobTitle);
            data.append('about', newSpeaker.about);

            const filteredAchievements = newSpeaker.achievements.filter(
                ach => ach.date || ach.achievement
            );
            data.append('achievements', JSON.stringify(filteredAchievements));

            if (newSpeaker.profileImage?.file) {
                data.append('profileImage', newSpeaker.profileImage.file);
            }

            const res = await api.post('/speakers', data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            await fetchAllSpeakers();
            setSelectedSpeakerIds(prev => [...prev, res.data._id]);

            setNewSpeaker({
                name: '',
                jobTitle: '',
                profileImage: null,
                achievements: [{ date: '', achievement: '' }],
                about: ''
            });
            setShowSpeakerForm(false);
        } catch (err) {
            console.error('Error adding speaker:', err);
            alert(err.response?.data?.msg || 'Failed to add speaker');
        } finally {
            setSaving(false);
        }
    };

    const handleSpeakerImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const previewUrl = URL.createObjectURL(file);
            setNewSpeaker(prev => ({ ...prev, profileImage: { file, preview: previewUrl } }));
        }
    };

    const handleAddAchievement = () => {
        setNewSpeaker(prev => ({
            ...prev,
            achievements: [...prev.achievements, { date: '', achievement: '' }]
        }));
    };

    const handleRemoveAchievement = (index) => {
        setNewSpeaker(prev => ({
            ...prev,
            achievements: prev.achievements.filter((_, i) => i !== index)
        }));
    };

    const handleAchievementChange = (index, field, value) => {
        setNewSpeaker(prev => ({
            ...prev,
            achievements: prev.achievements.map((ach, i) =>
                i === index ? { ...ach, [field]: value } : ach
            )
        }));
    };

    const handleSaveCourse = async (status = 'active') => {
        try {
            setSaving(true);
            setError('');

            const data = new FormData();
            data.append('courseType', !formData.provideCredits ? formData.courseType : 'external');
            data.append('title', formData.title);
            data.append('description', formData.description);
            data.append('price', parseFloat(formData.price) || 0);
            data.append('discount', 0);
            data.append('externalLink', formData.url);
            data.append('startDate', formData.startDate);
            data.append('endDate', formData.endDate);
            data.append('location', formData.location);
            data.append('eventType', formData.eventType);
            data.append('status', status);
            data.append('organizer', 'req.organizer.id'); // Placeholder, handled by backend token

            if (formData.provideCredits && formData.creditType) {
                data.append('credits', JSON.stringify([{
                    type: formData.creditType,
                    value: formData.creditPoints
                }]));
            } else {
                data.append('credits', JSON.stringify([]));
            }

            data.append('targetProfession', JSON.stringify(formData.professions));
            data.append('contentType', formData.contentType);
            data.append('richTextContent', formData.richTextContent);
            data.append('shortDescription', formData.shortDescription);

            data.append('topics', JSON.stringify(formData.topics.filter(t => t.title || t.description)));
            data.append('objectives', JSON.stringify(formData.objectives.filter(o => o && o.trim())));
            data.append('keyFeatures', JSON.stringify(formData.keyFeatures.filter(k => k && k.trim())));
            data.append('accreditation', JSON.stringify(formData.accreditation.filter(a => a.title || a.description)));
            data.append('creditSummary', formData.creditSummary);
            data.append('speakers', JSON.stringify(selectedSpeakerIds));

            if (formData.banner?.file) {
                data.append('banner', formData.banner.file);
            }

            // Headers for multipart/form-data are automatically set by axios when passing FormData
            if (courseId) {
                await api.put(`/courses/${courseId}`, data);
            } else {
                await api.post('/courses', data);
            }

            navigate('/courses');
        } catch (err) {
            console.error('Error saving course:', err);
            setError(err.response?.data?.msg || 'Failed to save course. Please try again.');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } finally {
            setSaving(false);
        }
    };

    const selectedSpeakers = allSpeakers.filter(speaker =>
        selectedSpeakerIds.includes(speaker._id)
    );
    const firstSelectedSpeaker = selectedSpeakers[0];

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
            <div className="min-h-[calc(100vh-100px)] flex flex-col relative">
                {/* Background Blobs */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#25225B]/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FED15E]/10 rounded-full blur-3xl" />
                </div>

                {/* Header Section */}
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl font-black text-[#25225B] tracking-tight"
                        >
                            {courseId ? 'Edit Course' : 'Create New Course'}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-500 mt-2 font-medium"
                        >
                            Design an immersive learning experience.
                        </motion.p>
                    </div>

                    {/* Step Indicators */}
                    <div className="flex gap-4">
                        {steps.map((step) => {
                            const isActive = currentStep === step.id;
                            const isCompleted = currentStep > step.id;

                            return (
                                <div
                                    key={step.id}
                                    onClick={() => handleStepChange(step.id)}
                                    className={`relative cursor-pointer group transition-all duration-300 ${isActive ? 'flex-grow' : ''}`}
                                >
                                    <motion.div
                                        layout
                                        className={`h-14 px-4 rounded-2xl flex items-center gap-3 border-2 transition-all duration-300 ${isActive
                                            ? 'bg-[#25225B] border-[#25225B] text-white shadow-xl shadow-[#25225B]/20 min-w-[180px]'
                                            : isCompleted
                                                ? 'bg-white border-[#FED15E] text-[#25225B]'
                                                : 'bg-white border-slate-100 text-slate-300'
                                            }`}
                                    >
                                        <div className={`p-2 rounded-xl ${isActive ? 'bg-white/20' : isCompleted ? 'bg-[#FED15E]/20' : 'bg-slate-50'}`}>
                                            {isCompleted ? <CheckCircle size={18} className="text-[#25225B]" /> : <step.icon size={18} />}
                                        </div>
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, width: 0 }}
                                                animate={{ opacity: 1, width: 'auto' }}
                                                className="whitespace-nowrap overflow-hidden"
                                            >
                                                <p className="text-xs opacity-70 font-medium uppercase tracking-wider">Step {step.id}</p>
                                                <p className="font-bold text-sm">{step.title}</p>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Error Message */}
                {error && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl flex items-center gap-2 text-sm"
                    >
                        <AlertCircle size={18} />
                        {error}
                    </motion.div>
                )}

                {/* Main Content Area */}
                <div className="flex-1 grid grid-cols-12 gap-8 pb-32">
                    {/* Left Panel: Form */}
                    <div className="col-span-8">
                        <motion.div
                            className="bg-white/80 backdrop-blur-xl border border-white/40 shadow-2xl rounded-[2rem] p-8 min-h-[600px] relative overflow-hidden"
                        >
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={currentStep}
                                    custom={direction}
                                    variants={pageVariants}
                                    initial="initial"
                                    animate="animate"
                                    exit="exit"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    className="h-full"
                                >
                                    {/* STEP 1: ESSENTIALS */}
                                    {currentStep === 1 && (
                                        <div className="space-y-10">
                                            <div className="grid grid-cols-2 gap-8">
                                                <div className="col-span-2">
                                                    <AnimatedInput
                                                        label="Course Title"
                                                        name="title"
                                                        value={formData.title}
                                                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                                    />
                                                </div>

                                                <AnimatedInput
                                                    label="External URL"
                                                    name="url"
                                                    value={formData.url}
                                                    onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                                                />

                                                <AnimatedInput
                                                    label="Price (AED)"
                                                    type="number"
                                                    name="price"
                                                    value={formData.price}
                                                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                                                />

                                                {/* Number of Students */}
                                                <div className="col-span-2 space-y-4">
                                                    <label className="text-sm font-bold text-[#25225B] ml-1">Number of Students</label>
                                                    <div className="flex gap-4">
                                                        <button
                                                            onClick={() => setFormData({ ...formData, seatType: 'unlimited' })}
                                                            className={`flex-1 py-3 px-4 rounded-xl border-2 font-bold transition-all flex items-center justify-center gap-2 ${formData.seatType === 'unlimited'
                                                                ? 'border-[#25225B] bg-[#25225B]/5 text-[#25225B]'
                                                                : 'border-slate-100 bg-white text-slate-400 hover:border-slate-200'
                                                                }`}
                                                        >
                                                            <Users size={18} />
                                                            Unlimited Seats
                                                        </button>
                                                        <button
                                                            onClick={() => setFormData({ ...formData, seatType: 'limited' })}
                                                            className={`flex-1 py-3 px-4 rounded-xl border-2 font-bold transition-all flex items-center justify-center gap-2 ${formData.seatType === 'limited'
                                                                ? 'border-[#25225B] bg-[#25225B]/5 text-[#25225B]'
                                                                : 'border-slate-100 bg-white text-slate-400 hover:border-slate-200'
                                                                }`}
                                                        >
                                                            <Ticket size={18} />
                                                            Limited Seats
                                                        </button>
                                                    </div>

                                                    {formData.seatType === 'limited' && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                        >
                                                            <AnimatedInput
                                                                label="Total Seats Available"
                                                                type="number"
                                                                name="totalSeats"
                                                                value={formData.totalSeats}
                                                                onChange={(e) => setFormData({ ...formData, totalSeats: e.target.value })}
                                                            />
                                                        </motion.div>
                                                    )}
                                                </div>

                                                {/* Date */}
                                                <div className="relative group">
                                                    {/* Date Range */}
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <div className="relative group">
                                                            <input
                                                                type="date"
                                                                className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl outline-none focus:border-[#25225B] focus:shadow-lg focus:shadow-[#25225B]/5 transition-all text-[#25225B] font-bold shadow-sm"
                                                                value={formData.startDate}
                                                                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                                                            />
                                                            <span className="absolute -top-3 left-4 text-xs font-bold text-[#25225B] bg-white px-2">Start Date</span>
                                                        </div>
                                                        <div className="relative group">
                                                            <input
                                                                type="date"
                                                                className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl outline-none focus:border-[#25225B] focus:shadow-lg focus:shadow-[#25225B]/5 transition-all text-[#25225B] font-bold shadow-sm"
                                                                value={formData.endDate}
                                                                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                                                            />
                                                            <span className="absolute -top-3 left-4 text-xs font-bold text-[#25225B] bg-white px-2">End Date</span>
                                                        </div>
                                                    </div>                        </div>

                                                {/* Event Type */}
                                                <div className="space-y-4 col-span-2">
                                                    <label className="text-sm font-bold text-[#25225B] ml-1">Event Type</label>
                                                    <div className="grid grid-cols-3 gap-4">
                                                        {[
                                                            { id: 'Inperson', label: 'In-Person', icon: MapPin },
                                                            { id: 'Online', label: 'Online', icon: MonitorPlay },
                                                            { id: 'Hybrid', label: 'Hybrid', icon: Sparkles }
                                                        ].map((type) => (
                                                            <button
                                                                key={type.id}
                                                                onClick={() => setFormData({ ...formData, eventType: type.id })}
                                                                className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-4 transition-all duration-300 group ${formData.eventType === type.id
                                                                    ? 'border-[#25225B] bg-[#25225B] text-white shadow-lg shadow-[#25225B]/20 scale-[1.02]'
                                                                    : 'border-slate-100 bg-white text-slate-400 hover:border-[#25225B]/30 hover:bg-[#25225B]/5'
                                                                    }`}
                                                            >
                                                                <div className={`p-3 rounded-xl transition-colors ${formData.eventType === type.id ? 'bg-white/20' : 'bg-slate-50 group-hover:bg-white'}`}>
                                                                    <type.icon size={24} />
                                                                </div>
                                                                <span className="font-bold text-sm">{type.label}</span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Location (Conditional) */}
                                                {(formData.eventType === 'Inperson' || formData.eventType === 'Hybrid') && (
                                                    <div className="relative group col-span-2">
                                                        <select
                                                            className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl outline-none focus:border-[#25225B] focus:shadow-lg focus:shadow-[#25225B]/5 transition-all text-[#25225B] font-bold appearance-none shadow-sm"
                                                            value={formData.location}
                                                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                                        >
                                                            <option value="">Select Location</option>
                                                            {LOCATIONS.map(loc => (
                                                                <option key={loc} value={loc}>{loc}</option>
                                                            ))}
                                                        </select>
                                                        <span className="absolute -top-3 left-4 text-xs font-bold text-[#25225B] bg-white px-2">Location</span>
                                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                                                            <MapPin size={18} />
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Do you provide CME/CPD points? */}
                                                <div className="space-y-4 col-span-2">
                                                    <label className="text-sm font-bold text-[#25225B] ml-1">Do you provide CME/CPD points?</label>
                                                    <div className="grid grid-cols-2 gap-4">
                                                        <button
                                                            onClick={() => setFormData({ ...formData, provideCredits: true, courseType: '' })}
                                                            className={`p-6 rounded-2xl border-2 flex items-center gap-4 transition-all duration-300 text-left group ${formData.provideCredits
                                                                ? 'border-[#25225B] bg-[#25225B] text-white shadow-lg shadow-[#25225B]/20 scale-[1.02]'
                                                                : 'border-slate-100 bg-white text-slate-400 hover:border-[#25225B]/30 hover:bg-[#25225B]/5'
                                                                }`}
                                                        >
                                                            <div className={`p-2 rounded-lg shrink-0 transition-colors ${formData.provideCredits ? 'bg-white/20' : 'bg-slate-50 group-hover:bg-white'}`}>
                                                                <Award size={20} />
                                                            </div>
                                                            <span className="font-bold text-sm leading-tight">Yes</span>
                                                        </button>
                                                        <button
                                                            onClick={() => setFormData({ ...formData, provideCredits: false, creditType: '', creditPoints: '' })}
                                                            className={`p-6 rounded-2xl border-2 flex items-center gap-4 transition-all duration-300 text-left group ${!formData.provideCredits
                                                                ? 'border-[#25225B] bg-[#25225B] text-white shadow-lg shadow-[#25225B]/20 scale-[1.02]'
                                                                : 'border-slate-100 bg-white text-slate-400 hover:border-[#25225B]/30 hover:bg-[#25225B]/5'
                                                                }`}
                                                        >
                                                            <div className={`p-2 rounded-lg shrink-0 transition-colors ${!formData.provideCredits ? 'bg-white/20' : 'bg-slate-50 group-hover:bg-white'}`}>
                                                                <X size={20} />
                                                            </div>
                                                            <span className="font-bold text-sm leading-tight">No</span>
                                                        </button>
                                                    </div>
                                                </div>

                                                {/* If YES - Show Points Input directly */}
                                                {formData.provideCredits && (
                                                    <AnimatedInput
                                                        label="CME/CPD Points"
                                                        name="creditPoints"
                                                        value={formData.creditPoints}
                                                        onChange={(e) => setFormData({ ...formData, creditPoints: e.target.value })}
                                                    />
                                                )}

                                                {/* If NO - Show Course Type */}
                                                {!formData.provideCredits && (
                                                    <div className="space-y-4 col-span-2">
                                                        <label className="text-sm font-bold text-[#25225B] ml-1">Course Type</label>
                                                        <div className="grid grid-cols-3 gap-4">
                                                            {['Webinar', 'Course', 'Meetup'].map((type) => (
                                                                <button
                                                                    key={type}
                                                                    onClick={() => setFormData({ ...formData, courseType: type })}
                                                                    className={`p-6 rounded-2xl border-2 flex flex-col items-center gap-3 transition-all duration-300 group ${formData.courseType === type
                                                                        ? 'border-[#FED15E] bg-[#FED15E] text-[#25225B] shadow-lg shadow-[#FED15E]/20 scale-[1.02]'
                                                                        : 'border-slate-100 bg-white text-slate-400 hover:border-[#FED15E]/30 hover:bg-[#FED15E]/5'
                                                                        }`}
                                                                >
                                                                    <div className={`p-2 rounded-lg shrink-0 transition-colors ${formData.courseType === type ? 'bg-white/30' : 'bg-slate-50 group-hover:bg-white'}`}>
                                                                        <MonitorPlay size={20} />
                                                                    </div>
                                                                    <span className="font-bold text-sm leading-tight">{type}</span>
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* Target Professions Button */}
                                                <div className="col-span-2">
                                                    <label className="text-sm font-bold text-[#25225B] ml-1 mb-3 block">Target Professions</label>
                                                    <button
                                                        type="button"
                                                        onClick={() => setShowProfessionModal(true)}
                                                        className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl hover:border-[#25225B] transition-all duration-300 text-left flex items-center justify-between group shadow-sm"
                                                    >
                                                        <span className={`font-bold ${formData.professions.length > 0 ? 'text-[#25225B]' : 'text-slate-400'}`}>
                                                            {formData.professions.length > 0
                                                                ? `${formData.professions.length} profession${formData.professions.length !== 1 ? 's' : ''} selected`
                                                                : 'Select target professions'}
                                                        </span>
                                                        <Users size={20} className="text-slate-400 group-hover:text-[#25225B] transition-colors" />
                                                    </button>
                                                    {formData.professions.length > 0 && (
                                                        <div className="mt-3 flex flex-wrap gap-2">
                                                            {formData.professions.slice(0, 5).map((profession, idx) => (
                                                                <span key={idx} className="px-3 py-1 bg-[#25225B] text-white text-xs rounded-full font-medium">
                                                                    {profession}
                                                                </span>
                                                            ))}
                                                            {formData.professions.length > 5 && (
                                                                <span className="px-3 py-1 bg-[#FED15E] text-[#25225B] text-xs rounded-full font-bold">
                                                                    +{formData.professions.length - 5} more
                                                                </span>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>

                                                <div className="col-span-2">
                                                    <div className="relative group">
                                                        <textarea
                                                            className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl outline-none focus:border-[#25225B] focus:shadow-lg focus:shadow-[#25225B]/5 transition-all duration-300 placeholder:text-transparent peer font-bold text-[#25225B] min-h-[150px] resize-none shadow-sm"
                                                            placeholder="Description"
                                                            value={formData.description}
                                                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                                        />
                                                        <label className="absolute left-6 top-4 text-slate-500 text-base transition-all duration-300 pointer-events-none 
                              peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:text-[#25225B] peer-focus:bg-white peer-focus:px-2 peer-focus:font-bold
                              peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#25225B] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:font-bold"
                                                        >
                                                            Course Description
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 2: VISUALS */}
                                    {currentStep === 2 && (
                                        <div className="space-y-8">
                                            <div className="grid grid-cols-2 gap-8 items-start">
                                                {/* Thumbnail */}
                                                <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-4">
                                                    <div className="flex items-center justify-between px-2">
                                                        <div>
                                                            <h3 className="font-bold text-lg text-[#25225B]">Course Thumbnail</h3>
                                                            <p className="text-sm text-slate-400 font-medium">Square image (1:1)</p>
                                                        </div>
                                                        <div className="w-10 h-10 rounded-full bg-[#25225B]/5 flex items-center justify-center text-[#25225B]">
                                                            <ImageIcon size={20} />
                                                        </div>
                                                    </div>

                                                    <div className="relative group w-full border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50 hover:bg-[#25225B]/5 hover:border-[#25225B]/30 transition-all duration-300 cursor-pointer overflow-hidden aspect-square flex flex-col items-center justify-center gap-4">
                                                        <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'thumbnail')} className="absolute inset-0 opacity-0 cursor-pointer z-30" />

                                                        {formData.thumbnail?.preview ? (
                                                            <img src={formData.thumbnail.preview} alt="Thumbnail" className="absolute inset-0 w-full h-full object-cover" />
                                                        ) : (
                                                            <div className="flex flex-col items-center gap-3 p-6 text-center">
                                                                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-[#25225B] group-hover:scale-110 transition-transform duration-300">
                                                                    <UploadCloud size={28} />
                                                                </div>
                                                                <div>
                                                                    <p className="font-bold text-[#25225B]">Click to upload</p>
                                                                    <p className="text-xs text-slate-400 mt-1">SVG, PNG, JPG or GIF</p>
                                                                </div>
                                                                <span className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-[#25225B] shadow-sm mt-2 group-hover:border-[#25225B] transition-colors">Browse Files</span>
                                                            </div>
                                                        )}

                                                        {formData.thumbnail?.preview && (
                                                            <div className="absolute inset-0 bg-[#25225B]/80 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                                                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white mb-2">
                                                                    <RefreshCw size={20} />
                                                                </div>
                                                                <p className="text-white font-bold">Change Image</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                {/* Banner */}
                                                <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-4">
                                                    <div className="flex items-center justify-between px-2">
                                                        <div>
                                                            <h3 className="font-bold text-lg text-[#25225B]">Course Banner</h3>
                                                            <p className="text-sm text-slate-400 font-medium">Landscape image (2:1)</p>
                                                        </div>
                                                        <div className="w-10 h-10 rounded-full bg-[#25225B]/5 flex items-center justify-center text-[#25225B]">
                                                            <MonitorPlay size={20} />
                                                        </div>
                                                    </div>

                                                    <div className="relative group w-full border-2 border-dashed border-slate-200 rounded-2xl bg-slate-50/50 hover:bg-[#25225B]/5 hover:border-[#25225B]/30 transition-all duration-300 cursor-pointer overflow-hidden aspect-[2/1] flex flex-col items-center justify-center gap-4">
                                                        <input type="file" accept="image/*" onChange={(e) => handleFileChange(e, 'banner')} className="absolute inset-0 opacity-0 cursor-pointer z-30" />

                                                        {formData.banner?.preview ? (
                                                            <img src={formData.banner.preview} className="absolute inset-0 w-full h-full object-cover" />
                                                        ) : (
                                                            <div className="flex flex-col items-center gap-3 p-6 text-center">
                                                                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-[#25225B] group-hover:scale-110 transition-transform duration-300">
                                                                    <UploadCloud size={28} />
                                                                </div>
                                                                <div>
                                                                    <p className="font-bold text-[#25225B]">Click to upload</p>
                                                                    <p className="text-xs text-slate-400 mt-1">SVG, PNG, JPG or GIF</p>
                                                                </div>
                                                                <span className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-xs font-bold text-[#25225B] shadow-sm mt-2 group-hover:border-[#25225B] transition-colors">Browse Files</span>
                                                            </div>
                                                        )}

                                                        {formData.banner?.preview && (
                                                            <div className="absolute inset-0 bg-[#25225B]/80 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                                                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white mb-2">
                                                                    <RefreshCw size={20} />
                                                                </div>
                                                                <p className="text-white font-bold">Change Image</p>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* STEP 3: CONTENT */}
                                    {currentStep === 3 && (
                                        <div className="space-y-8">
                                            {/* Content Type Toggle */}
                                            <div className="bg-[#25225B]/5 p-2 rounded-2xl flex relative border border-[#25225B]/10">
                                                <div
                                                    className="absolute inset-y-2 rounded-xl bg-[#25225B] shadow-lg shadow-[#25225B]/20 transition-all duration-300 ease-in-out"
                                                    style={{
                                                        left: formData.contentType === 'section' ? '8px' : '50%',
                                                        width: 'calc(50% - 8px)',
                                                        transform: formData.contentType === 'richText' ? 'translateX(0)' : 'translateX(0)'
                                                    }}
                                                />
                                                <button
                                                    onClick={() => setFormData({ ...formData, contentType: 'section' })}
                                                    className={`relative z-10 flex-1 py-4 px-4 rounded-xl font-bold text-base transition-colors flex items-center justify-center gap-3 ${formData.contentType === 'section' ? 'text-white' : 'text-[#25225B] hover:text-[#25225B]/80'
                                                        }`}
                                                >
                                                    <LayoutIcon size={20} />
                                                    Section Design
                                                </button>
                                                <button
                                                    onClick={() => setFormData({ ...formData, contentType: 'richText' })}
                                                    className={`relative z-10 flex-1 py-4 px-4 rounded-xl font-bold text-base transition-colors flex items-center justify-center gap-3 ${formData.contentType === 'richText' ? 'text-white' : 'text-[#25225B] hover:text-[#25225B]/80'
                                                        }`}
                                                >
                                                    <FileText size={20} />
                                                    Rich Text
                                                </button>
                                            </div>

                                            {/* Rich Text Editor */}
                                            {formData.contentType === 'richText' && (
                                                <div className="space-y-4">
                                                    <h3 className="text-xl font-bold text-[#25225B]">Course Description</h3>
                                                    <div className="bg-white rounded-2xl border-2 border-slate-100 overflow-hidden focus-within:border-[#25225B] transition-colors">
                                                        <ReactQuill
                                                            theme="snow"
                                                            value={formData.richTextContent}
                                                            onChange={(content) => setFormData({ ...formData, richTextContent: content })}
                                                            modules={{
                                                                toolbar: [
                                                                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                                                                    [{ 'font': [] }],
                                                                    [{ 'size': ['small', false, 'large', 'huge'] }],
                                                                    ['bold', 'italic', 'underline', 'strike'],
                                                                    [{ 'color': [] }, { 'background': [] }],
                                                                    [{ 'script': 'sub' }, { 'script': 'super' }],
                                                                    [{ 'align': [] }],
                                                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                                                                    ['blockquote', 'code-block'],
                                                                    ['link', 'image', 'video'],
                                                                    ['clean']
                                                                ],
                                                                clipboard: {
                                                                    matchVisual: false
                                                                }
                                                            }}
                                                            className="h-[600px] mb-12"
                                                        />
                                                    </div>
                                                </div>
                                            )}

                                            {/* Section Design */}
                                            {formData.contentType === 'section' && (
                                                <div className="space-y-10">
                                                    {/* Short Description */}
                                                    <div className="space-y-4">
                                                        <h3 className="text-xl font-bold text-[#25225B]">Course Overview</h3>
                                                        <div className="relative group">
                                                            <textarea
                                                                className="w-full px-6 py-4 bg-white border-2 border-slate-100 rounded-2xl outline-none focus:border-[#25225B] focus:shadow-lg focus:shadow-[#25225B]/5 transition-all duration-300 placeholder:text-transparent peer font-bold text-[#25225B] min-h-[120px] resize-none shadow-sm"
                                                                placeholder="Short Description"
                                                                value={formData.shortDescription}
                                                                onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                                                            />
                                                            <label className="absolute left-6 top-4 text-slate-500 text-base transition-all duration-300 pointer-events-none peer-focus:-top-3 peer-focus:left-4 peer-focus:text-xs peer-focus:text-[#25225B] peer-focus:bg-white peer-focus:px-2 peer-focus:font-bold peer-[:not(:placeholder-shown)]:-top-3 peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-[#25225B] peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-2 peer-[:not(:placeholder-shown)]:font-bold">
                                                                Short Description / Overview
                                                            </label>
                                                        </div>
                                                    </div>

                                                    {/* Topics Covered */}
                                                    <div className="space-y-4">
                                                        <div className="flex items-center justify-between">
                                                            <h3 className="text-xl font-bold text-[#25225B]">Topics Covered</h3>
                                                            <button
                                                                onClick={() => setFormData({ ...formData, topics: [...formData.topics, { id: Date.now(), title: '', subtitle: '', description: '' }] })}
                                                                className="flex items-center gap-2 px-4 py-2 bg-[#25225B]/5 text-[#25225B] rounded-xl hover:bg-[#25225B]/10 transition-all font-bold text-sm"
                                                            >
                                                                <Plus size={16} /> Add Topic
                                                            </button>
                                                        </div>
                                                        <div className="space-y-4">
                                                            {formData.topics.map((topic, index) => (
                                                                <div key={topic.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative group hover:shadow-md transition-all">
                                                                    <button
                                                                        onClick={() => setFormData({ ...formData, topics: formData.topics.filter(t => t.id !== topic.id) })}
                                                                        className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors"
                                                                    >
                                                                        <Trash2 size={18} />
                                                                    </button>
                                                                    <div className="space-y-4">
                                                                        <AnimatedInput
                                                                            label={`Topic ${index + 1} Title`}
                                                                            value={topic.title}
                                                                            onChange={(e) => {
                                                                                const newTopics = [...formData.topics];
                                                                                newTopics[index].title = e.target.value;
                                                                                setFormData({ ...formData, topics: newTopics });
                                                                            }}
                                                                        />
                                                                        <AnimatedInput
                                                                            label="Subtitle"
                                                                            value={topic.subtitle}
                                                                            onChange={(e) => {
                                                                                const newTopics = [...formData.topics];
                                                                                newTopics[index].subtitle = e.target.value;
                                                                                setFormData({ ...formData, topics: newTopics });
                                                                            }}
                                                                        />
                                                                        <textarea
                                                                            className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-[#25225B] focus:bg-white transition-all font-medium text-[#25225B] min-h-[100px] resize-none text-sm"
                                                                            placeholder="Topic Description"
                                                                            value={topic.description}
                                                                            onChange={(e) => {
                                                                                const newTopics = [...formData.topics];
                                                                                newTopics[index].description = e.target.value;
                                                                                setFormData({ ...formData, topics: newTopics });
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Education Objectives */}
                                                    <div className="space-y-4">
                                                        <div className="flex items-center justify-between">
                                                            <h3 className="text-xl font-bold text-[#25225B]">Education Objectives</h3>
                                                            <button
                                                                onClick={() => setFormData({ ...formData, objectives: [...formData.objectives, ''] })}
                                                                className="flex items-center gap-2 px-4 py-2 bg-[#25225B]/5 text-[#25225B] rounded-xl hover:bg-[#25225B]/10 transition-all font-bold text-sm"
                                                            >
                                                                <Plus size={16} /> Add Objective
                                                            </button>
                                                        </div>
                                                        <div className="space-y-3">
                                                            {formData.objectives.map((obj, index) => (
                                                                <div key={index} className="flex gap-3">
                                                                    <div className="flex-1">
                                                                        <AnimatedInput
                                                                            label={`Objective ${index + 1}`}
                                                                            value={obj}
                                                                            onChange={(e) => {
                                                                                const newObjs = [...formData.objectives];
                                                                                newObjs[index] = e.target.value;
                                                                                setFormData({ ...formData, objectives: newObjs });
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    <button
                                                                        onClick={() => {
                                                                            const newObjs = formData.objectives.filter((_, i) => i !== index);
                                                                            setFormData({ ...formData, objectives: newObjs });
                                                                        }}
                                                                        className="w-14 h-14 flex items-center justify-center rounded-2xl border-2 border-slate-100 text-slate-400 hover:border-red-100 hover:bg-red-50 hover:text-red-500 transition-all"
                                                                    >
                                                                        <Trash2 size={20} />
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Key Features */}
                                                    <div className="space-y-4">
                                                        <div className="flex items-center justify-between">
                                                            <h3 className="text-xl font-bold text-[#25225B]">Key Features</h3>
                                                            <button
                                                                onClick={() => setFormData({ ...formData, keyFeatures: [...formData.keyFeatures, ''] })}
                                                                className="flex items-center gap-2 px-4 py-2 bg-[#25225B]/5 text-[#25225B] rounded-xl hover:bg-[#25225B]/10 transition-all font-bold text-sm"
                                                            >
                                                                <Plus size={16} /> Add Feature
                                                            </button>
                                                        </div>
                                                        <div className="space-y-3">
                                                            {formData.keyFeatures.map((feat, index) => (
                                                                <div key={index} className="flex gap-3">
                                                                    <div className="flex-1">
                                                                        <AnimatedInput
                                                                            label={`Feature ${index + 1}`}
                                                                            value={feat}
                                                                            onChange={(e) => {
                                                                                const newFeats = [...formData.keyFeatures];
                                                                                newFeats[index] = e.target.value;
                                                                                setFormData({ ...formData, keyFeatures: newFeats });
                                                                            }}
                                                                        />
                                                                    </div>
                                                                    <button
                                                                        onClick={() => {
                                                                            const newFeats = formData.keyFeatures.filter((_, i) => i !== index);
                                                                            setFormData({ ...formData, keyFeatures: newFeats });
                                                                        }}
                                                                        className="w-14 h-14 flex items-center justify-center rounded-2xl border-2 border-slate-100 text-slate-400 hover:border-red-100 hover:bg-red-50 hover:text-red-500 transition-all"
                                                                    >
                                                                        <Trash2 size={20} />
                                                                    </button>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Accreditation & Credits */}
                                                    <div className="space-y-4">
                                                        <div className="flex items-center justify-between">
                                                            <h3 className="text-xl font-bold text-[#25225B]">Accreditation & Credits</h3>
                                                            <button
                                                                onClick={() => setFormData({ ...formData, accreditation: [...formData.accreditation, { id: Date.now(), title: '', description: '' }] })}
                                                                className="flex items-center gap-2 px-4 py-2 bg-[#25225B]/5 text-[#25225B] rounded-xl hover:bg-[#25225B]/10 transition-all font-bold text-sm"
                                                            >
                                                                <Plus size={16} /> Add Accreditation
                                                            </button>
                                                        </div>
                                                        <div className="space-y-4">
                                                            {formData.accreditation.map((acc, index) => (
                                                                <div key={acc.id} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm relative group hover:shadow-md transition-all">
                                                                    <button
                                                                        onClick={() => setFormData({ ...formData, accreditation: formData.accreditation.filter(a => a.id !== acc.id) })}
                                                                        className="absolute top-4 right-4 text-slate-300 hover:text-red-500 transition-colors"
                                                                    >
                                                                        <Trash2 size={18} />
                                                                    </button>
                                                                    <div className="space-y-4">
                                                                        <AnimatedInput
                                                                            label="Accreditation Title"
                                                                            value={acc.title}
                                                                            onChange={(e) => {
                                                                                const newAcc = [...formData.accreditation];
                                                                                newAcc[index].title = e.target.value;
                                                                                setFormData({ ...formData, accreditation: newAcc });
                                                                            }}
                                                                        />
                                                                        <textarea
                                                                            className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-[#25225B] focus:bg-white transition-all font-medium text-[#25225B] min-h-[100px] resize-none text-sm"
                                                                            placeholder="Description"
                                                                            value={acc.description}
                                                                            onChange={(e) => {
                                                                                const newAcc = [...formData.accreditation];
                                                                                newAcc[index].description = e.target.value;
                                                                                setFormData({ ...formData, accreditation: newAcc });
                                                                            }}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Credit Summary */}
                                                    <div className="space-y-4">
                                                        <h3 className="text-xl font-bold text-[#25225B]">Credit Summary</h3>
                                                        <AnimatedInput
                                                            label="Credit Summary"
                                                            value={formData.creditSummary}
                                                            onChange={(e) => setFormData({ ...formData, creditSummary: e.target.value })}
                                                        />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* STEP 4: EXPERTS */}
                                    {currentStep === 4 && (
                                        <div className="space-y-6">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-xl font-bold text-[#25225B]">Select Speakers</h3>
                                                <button
                                                    onClick={() => setShowSpeakerForm(true)}
                                                    className="flex items-center gap-2 px-4 py-2 bg-[#25225B] text-white rounded-xl hover:bg-[#25225B]/90 transition-all hover:scale-105 active:scale-95 font-bold shadow-lg shadow-[#25225B]/20"
                                                >
                                                    <Plus size={18} />
                                                    Add New Speaker
                                                </button>
                                            </div>

                                            {allSpeakers.length === 0 ? (
                                                <div className="bg-white border border-slate-100 p-12 rounded-2xl text-center">
                                                    <p className="text-slate-500 mb-4">No speakers available. Add your first speaker!</p>
                                                    <button
                                                        onClick={() => setShowSpeakerForm(true)}
                                                        className="px-6 py-3 bg-[#FED15E] text-[#25225B] rounded-xl font-bold hover:shadow-lg transition-all"
                                                    >
                                                        Add Speaker
                                                    </button>
                                                </div>
                                            ) : (
                                                <div className="grid grid-cols-1 gap-4 max-h-[500px] overflow-y-auto pr-2">
                                                    {allSpeakers.map((speaker) => {
                                                        const isSelected = selectedSpeakerIds.includes(speaker._id);
                                                        return (
                                                            <motion.div
                                                                key={speaker._id}
                                                                initial={{ opacity: 0, scale: 0.9 }}
                                                                animate={{ opacity: 1, scale: 1 }}
                                                                className={`bg-white border-2 p-4 rounded-2xl shadow-sm transition-all cursor-pointer ${isSelected
                                                                    ? 'border-[#FED15E] bg-[#FED15E]/5'
                                                                    : 'border-slate-100 hover:border-slate-200 hover:shadow-md'
                                                                    }`}
                                                                onClick={() => {
                                                                    setSelectedSpeakerIds(prev =>
                                                                        isSelected
                                                                            ? prev.filter(id => id !== speaker._id)
                                                                            : [...prev, speaker._id]
                                                                    );
                                                                }}
                                                            >
                                                                <div className="flex items-start gap-4">
                                                                    <input
                                                                        type="checkbox"
                                                                        checked={isSelected}
                                                                        onChange={() => { }}
                                                                        className="mt-1 w-5 h-5 rounded border-2 border-slate-300 text-[#FED15E] focus:ring-[#FED15E] cursor-pointer"
                                                                    />
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
                                                                        <h4 className="font-bold text-[#25225B] text-lg">{speaker.name}</h4>
                                                                        <p className="text-sm font-medium text-slate-600 mb-2">{speaker.jobTitle}</p>
                                                                        {speaker.achievements && speaker.achievements.length > 0 && (
                                                                            <div className="space-y-1">
                                                                                {speaker.achievements.slice(0, 2).map((ach, idx) => (
                                                                                    <p key={idx} className="text-xs text-slate-500">
                                                                                        <span className="font-semibold">{ach.date}</span> - {ach.achievement}
                                                                                    </p>
                                                                                ))}
                                                                                {speaker.achievements.length > 2 && (
                                                                                    <p className="text-xs text-[#FED15E] font-semibold">+{speaker.achievements.length - 2} more</p>
                                                                                )}
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                </div>
                                                            </motion.div>
                                                        );
                                                    })}
                                                </div>
                                            )}

                                            {selectedSpeakerIds.length > 0 && (
                                                <div className="bg-[#FED15E]/10 border-2 border-[#FED15E] p-4 rounded-xl">
                                                    <p className="text-sm font-bold text-[#25225B]">
                                                        {selectedSpeakerIds.length} speaker{selectedSpeakerIds.length !== 1 ? 's' : ''} selected
                                                    </p>
                                                </div>
                                            )}

                                        </div>
                                    )}
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>
                    </div>

                    {/* Right Panel: Preview / Summary */}
                    <div className="col-span-4 space-y-6">
                        <div className="sticky top-8">
                            <h3 className="text-xl font-bold text-[#25225B] mb-2">Live Preview</h3>

                            {/* INJECTED CSS FOR EXACT REPLICA */}
                            <style>{`
                .courses-card-main-items {
                    position: relative;
                    overflow: hidden;
                    border-radius: 7px;
                }
                .courses-card-items {
                    margin-top: 10px;
                    background-color: #fff;
                    border-radius: 7px;
                    border: 1px solid #E6EFFF;
                    transition: all 0.3s ease-in-out;
                    width: 100%;
                    height: 100%;
                }
                .courses-image {
                    padding: 5px 5px 0 5px;
                    position: relative;
                }
                .courses-image img {
                    width: 100%;
                    border-radius: 7px;
                    object-fit: cover;
                    aspect-ratio: 1.5;
                }
                .courses-content {
                    padding: 25px 30px;
                }
                .post-cat {
                    margin-bottom: 20px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0;
                    list-style: none;
                }
                .post-cat li a {
                    display: inline-block;
                    padding: 8px 10px;
                    background-color: #F4F9FF;
                    font-weight: 500;
                    font-size: 14px;
                    color: #26225B;
                    line-height: 1;
                    border-radius: 7px;
                    text-decoration: none;
                }
                .post-cat li i {
                    font-size: 14px;
                    color: #FFD335;
                }
                .courses-content h5 {
                    margin: 0 0 10px;
                    font-size: 20px;
                    font-weight: 600;
                    line-height: 1.4;
                }
                .courses-content h5 a {
                    color: #031F42;
                    text-decoration: none;
                    transition: color 0.3s;
                }
                .courses-content h5 a:hover {
                    color: #005BFF;
                }
                .client-items {
                    margin-top: 15px;
                    display: flex;
                    gap: 10px;
                    border-bottom: 1px solid #E6EFFF;
                    padding-bottom: 25px;
                    align-items: center;
                }
                .client-img {
                    border-radius: 50%;
                    width: 25px;
                    height: 25px;
                    background-size: cover;
                    background-position: center;
                    background-color: #eee;
                }
                .client-items p {
                    font-size: 14px;
                    font-weight: 500;
                    color: #031F42;
                    text-transform: capitalize;
                    margin: 0;
                }
                .post-class {
                    display: flex;
                    justify-content: space-between;
                    margin-top: 20px;
                    padding: 0;
                    list-style: none;
                }
                .post-class li {
                    font-size: 14px;
                    color: #031F42;
                    display: flex;
                    align-items: center;
                    gap: 5px;
                }
                .post-class li i {
                    color: #5B6D84;
                }

                /* HOVER STATE CSS */
                .courses-card-items-hover {
                    margin-top: 30px;
                    padding: 30px;
                    background-color: #005BFF;
                    border-radius: 7px;
                    border: 1px solid #005BFF;
                    transition: all 200ms linear;
                    top: 0;
                    right: -100%;
                    position: absolute;
                    opacity: 0;
                    visibility: hidden;
                    width: 100%;
                    height: 100%;
                    z-index: 20;
                }
                .courses-card-main-items:hover .courses-card-items {
                    opacity: 0;
                    visibility: hidden;
                }
                .courses-card-main-items:hover .courses-card-items-hover {
                    opacity: 1;
                    visibility: visible;
                    right: 0;
                }
                .courses-card-items-hover .post-cat li a {
                    background-color: rgba(255, 255, 255, 0.10);
                    color: #fff;
                }
                .courses-card-items-hover .post-cat li a:hover {
                    background-color: #fff;
                    color: #031F42;
                }
                .courses-card-items-hover h5 a {
                    color: #fff;
                    background-image: linear-gradient(#fff, #fff);
                    background-position: 0 95%;
                    background-repeat: no-repeat;
                    background-size: 0% 2px;
                    transition: background-size 0.3s;
                }
                .courses-card-items-hover h5 a:hover {
                    color: #fff !important;
                    background-size: 100% 2px;
                }
                .courses-card-items-hover h4 {
                    color: #fff;
                    font-size: 35px;
                    padding: 15px 0;
                    margin: 0;
                    font-weight: 700;
                }
                .courses-card-items-hover span {
                    color: #fff;
                    font-size: 16px;
                    font-weight: 400;
                    display: block;
                    margin-bottom: 15px;
                    line-height: 1.5;
                }
                .courses-card-items-hover .client-items {
                    border-bottom: 1px solid #fff;
                }
                .courses-card-items-hover .client-items p {
                    color: #fff;
                }
                .courses-card-items-hover .post-class li {
                    color: #fff;
                }
                .courses-card-items-hover .post-class li i {
                    color: #fff;
                }
                
                /* THEME BUTTON STYLES (from _buttons.scss) */
                .theme-btn {
                    position: relative;
                    z-index: 2;
                    vertical-align: middle;
                    display: inline-flex;
                    gap: 15px;
                    border: none;
                    text-align: center;
                    background-color: #26225B;
                    color: #fff;
                    font-size: 16px;
                    font-weight: 600;
                    text-transform: capitalize;
                    line-height: 1;
                    padding: 20px 30px;
                    overflow: hidden;
                    align-items: center;
                    border-radius: 10px;
                    text-decoration: none;
                    transition: all 0.3s;
                    cursor: pointer;
                }

                .theme-btn::after, .theme-btn::before {
                    content: "";
                    display: block;
                    width: 50px;
                    height: 50px;
                    transform: translate(-50%,-50%);
                    position: absolute;
                    border-radius: 50%;
                    z-index: -1;
                    background-color: #FFD335;
                    transition: 1s ease;
                    pointer-events: none;
                }

                .theme-btn::before {
                    top: -1em;
                    left: -1em;
                }

                .theme-btn::after {
                    left: calc(100% + 2em);
                    top: calc(100% + 2em);
                }

                .theme-btn:hover {
                    color: #031F42;
                    box-shadow: none;
                }

                .theme-btn:hover::after, .theme-btn:hover::before {
                    height: 510px;
                    width: 510px;
                }

                /* Yellow Button Variant */
                .theme-btn.yellow-btn {
                    background-color: #FFD25D;
                    color: #031F42;
                }

                .theme-btn.yellow-btn::after, .theme-btn.yellow-btn::before {
                    background-color: #031F42;
                    z-index: -1;
                }

                .theme-btn.yellow-btn:hover {
                    color: #fff !important;
                }

                /* Card Hover Specific Overrides */
                .courses-card-items-hover .theme-btn {
                    padding: 15px 25px;
                    margin-top: 19px;
                    width: 100%;
                    display: block;
                    text-align: center;
                }
              `}</style>

                            {/* EXACT CARD REPLICA FROM CoursesGridArea.tsx */}
                            <div className="courses-card-main-items" style={{ position: 'relative' }}>
                                <div className="courses-card-items">
                                    <div className="courses-image" style={{ position: 'relative' }}>
                                        {formData.banner?.preview ? (
                                            <img src={formData.banner.preview} alt="img" />
                                        ) : (
                                            <div style={{ width: '100%', aspectRatio: '1.5', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '7px' }}>
                                                <ImageIcon size={40} color="#ccc" />
                                            </div>
                                        )}

                                        {(formData.startDate) && (
                                            <div className="event-date-badge" style={{
                                                background: 'linear-gradient(135deg, #1363DF 0%, #0B4FB8 100%)',
                                                color: 'white',
                                                padding: '8px 16px',
                                                borderRadius: '25px',
                                                fontSize: '13px',
                                                fontWeight: '600',
                                                display: 'inline-block',
                                                boxShadow: '0 4px 15px rgba(19, 99, 223, 0.4)',
                                                position: 'absolute',
                                                bottom: '-15px',
                                                left: '15px',
                                                zIndex: 10,
                                                border: '2px solid white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px'
                                            }}>
                                                <Calendar size={13} />
                                                {new Date(formData.startDate).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric'
                                                })}
                                            </div>
                                        )}

                                        <div className="format-badge" style={{
                                            background: formData.eventType === 'Inperson' ? 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' :
                                                formData.eventType === 'Online' ? 'linear-gradient(135deg, #007bff 0%, #6610f2 100%)' :
                                                    'linear-gradient(135deg, #fd7e14 0%, #e83e8c 100%)',
                                            color: 'white',
                                            padding: '8px 16px',
                                            borderRadius: '25px',
                                            fontSize: '13px',
                                            fontWeight: '600',
                                            fontWeight: '600',
                                            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                            position: 'absolute',
                                            bottom: '-15px',
                                            right: '15px',
                                            zIndex: 10,
                                            border: '2px solid white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '4px'
                                        }}>
                                            {formData.eventType === 'Inperson' && <MapPin size={12} />}
                                            {formData.eventType === 'Online' && <MonitorPlay size={12} />}
                                            {formData.eventType === 'Hybrid' && <Sparkles size={12} />}
                                            {formData.eventType}
                                        </div>
                                    </div>
                                    <div className="courses-content" style={{ paddingTop: '25px' }}>
                                        <ul className="post-cat">
                                            <li>
                                                <a href="#">
                                                    {formData.professions.length > 0
                                                        ? `${formData.professions[0]}${formData.professions.length > 1 ? ` +${formData.professions.length - 1} more` : ''}`
                                                        : "Medical"}
                                                </a>
                                            </li>
                                            <li>
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={12} className="fill-[#FFD335] text-[#FFD335]" style={{ display: 'inline-block', marginRight: '2px' }} />
                                                ))}
                                            </li>
                                        </ul>
                                        <h5>
                                            <a href="#">
                                                {formData.title || "Course Title Here"}
                                            </a>
                                        </h5>
                                        <div className="client-items">
                                            <div className="client-img" style={{
                                                backgroundImage: firstSelectedSpeaker?.profileImage ? `url(${BACKEND_URL}${firstSelectedSpeaker.profileImage})` : 'none',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                {!firstSelectedSpeaker?.profileImage && (
                                                    <span style={{ fontSize: '10px', fontWeight: 'bold' }}>
                                                        {firstSelectedSpeaker?.name?.charAt(0) || "I"}
                                                    </span>
                                                )}
                                            </div>
                                            <p>{firstSelectedSpeaker?.name || "Instructor Name"}</p>
                                        </div>
                                        <ul className="post-class">
                                            <li>
                                                <BookOpen size={16} />
                                                {formData.creditPoints || 0} {formData.creditType?.split(' ')[0] || 'Credits'}
                                            </li>
                                            <li>
                                                <Users size={16} />
                                                {formData.seatType === 'unlimited' ? 'Unlimited Seats' : `${formData.totalSeats || 0} Seats`}
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* HOVER STATE */}
                                <div className="courses-card-items-hover">
                                    {(formData.startDate) && (
                                        <div className="event-date-badge" style={{
                                            background: 'linear-gradient(135deg, #FFB800 0%, #FF9500 100%)',
                                            color: 'white',
                                            padding: '8px 16px',
                                            borderRadius: '25px',
                                            fontSize: '13px',
                                            fontWeight: '600',
                                            display: 'inline-block',
                                            boxShadow: '0 4px 15px rgba(255, 184, 0, 0.4)',
                                            position: 'absolute',
                                            top: '-15px',
                                            left: '15px',
                                            zIndex: 10,
                                            border: '2px solid white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '6px'
                                        }}>
                                            <Calendar size={13} />
                                            {new Date(formData.startDate).toLocaleDateString('en-US', {
                                                month: 'short',
                                                day: 'numeric',
                                                year: 'numeric'
                                            })}
                                        </div>
                                    )}

                                    <div className="format-badge" style={{
                                        background: formData.eventType === 'Inperson' ? 'linear-gradient(135deg, #28a745 0%, #20c997 100%)' :
                                            formData.eventType === 'Online' ? 'linear-gradient(135deg, #007bff 0%, #6610f2 100%)' :
                                                'linear-gradient(135deg, #fd7e14 0%, #e83e8c 100%)',
                                        color: 'white',
                                        padding: '8px 16px',
                                        borderRadius: '25px',
                                        fontSize: '13px',
                                        fontWeight: '600',
                                        fontWeight: '600',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                                        position: 'absolute',
                                        bottom: '-15px',
                                        right: '15px',
                                        zIndex: 10,
                                        border: '2px solid white',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '4px'
                                    }}>
                                        {formData.eventType === 'Inperson' && <MapPin size={12} />}
                                        {formData.eventType === 'Online' && <MonitorPlay size={12} />}
                                        {formData.eventType === 'Hybrid' && <Sparkles size={12} />}
                                        {formData.eventType}
                                    </div>

                                    <div className="courses-content" style={{ paddingTop: '25px' }}>
                                        <ul className="post-cat">
                                            <li>
                                                <a href="#">
                                                    {formData.professions.length > 0
                                                        ? `${formData.professions[0]}${formData.professions.length > 1 ? ` +${formData.professions.length - 1} more` : ''}`
                                                        : "Medical"}
                                                </a>
                                            </li>
                                            <li>
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={12} className="fill-[#FFD335] text-[#FFD335]" style={{ display: 'inline-block', marginRight: '2px' }} />
                                                ))}
                                            </li>
                                        </ul>
                                        <h5>
                                            <a href="#">
                                                {formData.title || "Course Title Here"}
                                            </a>
                                        </h5>
                                        <h4>{formData.price ? `AED ${formData.price}` : 'Free'}</h4>
                                        <span>
                                            {formData.description ? formData.description.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...' : "No description provided yet..."}
                                        </span>
                                        <div className="client-items">
                                            <div className="client-img" style={{
                                                backgroundImage: firstSelectedSpeaker?.profileImage ? `url(${BACKEND_URL}${firstSelectedSpeaker.profileImage})` : 'none',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: 'rgba(255,255,255,0.2)'
                                            }}>
                                                {!firstSelectedSpeaker?.profileImage && (
                                                    <span style={{ fontSize: '10px', fontWeight: 'bold', color: 'white' }}>
                                                        {firstSelectedSpeaker?.name?.charAt(0) || "I"}
                                                    </span>
                                                )}
                                            </div>
                                            <p>{firstSelectedSpeaker?.name || "Instructor Name"}</p>
                                        </div>
                                        <ul className="post-class">
                                            <li>
                                                <BookOpen size={16} />
                                                {formData.creditPoints || 0} {formData.creditType?.split(' ')[0] || 'Credits'}
                                            </li>
                                            <li>
                                                <Users size={16} />
                                                {formData.seatType === 'unlimited' ? 'Unlimited Seats' : `${formData.totalSeats || 0} Seats`}
                                            </li>
                                        </ul>
                                        <a href="#" className="theme-btn yellow-btn">Enroll Now</a>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>




                </div>

                {/* Speaker Modal - Moved outside grid to prevent overflow issues */}
                <AnimatePresence>
                    {showSpeakerForm && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4"
                            onClick={() => setShowSpeakerForm(false)}
                            style={{ margin: 0 }}
                        >
                            <motion.div
                                initial={{ scale: 0.95, y: 20 }}
                                animate={{ scale: 1, y: 0 }}
                                exit={{ scale: 0.95, y: 20 }}
                                className="bg-white rounded-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden flex flex-col"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="p-6 border-b border-slate-200 flex items-center justify-between flex-shrink-0">
                                    <h4 className="font-bold text-2xl text-[#25225B]">Add Speaker</h4>
                                    <button onClick={() => setShowSpeakerForm(false)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                                        <X size={20} />
                                    </button>
                                </div>

                                <div className="flex-1 overflow-y-auto p-6">
                                    {/* Profile Image Upload */}
                                    <div className="mb-6">
                                        <label className="block text-sm font-semibold text-[#25225B] mb-3">Profile Image (1:1 ratio)</label>
                                        <div className="flex items-center gap-4">
                                            {newSpeaker.profileImage ? (
                                                <div className="relative">
                                                    <img
                                                        src={newSpeaker.profileImage.preview}
                                                        alt="Preview"
                                                        className="w-32 h-32 rounded-xl object-cover border-2 border-slate-200"
                                                    />
                                                    <button
                                                        onClick={() => setNewSpeaker(prev => ({ ...prev, profileImage: null }))}
                                                        className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                                                    >
                                                        <X size={14} />
                                                    </button>
                                                </div>
                                            ) : (
                                                <label className="w-32 h-32 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center cursor-pointer hover:border-[#25225B] transition-colors">
                                                    <Upload size={24} className="text-slate-400 mb-2" />
                                                    <span className="text-xs text-slate-500 text-center px-2">Upload Image</span>
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        onChange={handleSpeakerImageChange}
                                                        className="hidden"
                                                    />
                                                </label>
                                            )}
                                        </div>
                                    </div>

                                    {/* Basic Info */}
                                    <div className="grid grid-cols-2 gap-4 mb-6">
                                        <AnimatedInput
                                            label="Name"
                                            value={newSpeaker.name}
                                            onChange={(e) => setNewSpeaker({ ...newSpeaker, name: e.target.value })}
                                        />
                                        <AnimatedInput
                                            label="Job Title"
                                            value={newSpeaker.jobTitle}
                                            onChange={(e) => setNewSpeaker({ ...newSpeaker, jobTitle: e.target.value })}
                                        />
                                    </div>

                                    {/* Achievements */}
                                    <div className="mb-6">
                                        <div className="flex items-center justify-between mb-3">
                                            <label className="block text-sm font-semibold text-[#25225B]">Achievements</label>
                                            <button
                                                onClick={handleAddAchievement}
                                                className="flex items-center gap-1 px-3 py-1.5 bg-[#25225B] text-white rounded-lg text-xs font-semibold hover:bg-[#25225B]/90 transition-colors"
                                            >
                                                <Plus size={14} />
                                                Add Achievement
                                            </button>
                                        </div>
                                        <div className="space-y-3">
                                            {newSpeaker.achievements.map((achievement, index) => (
                                                <div key={index} className="flex gap-3 items-start">
                                                    <div className="flex-1 grid grid-cols-3 gap-3">
                                                        <AnimatedInput
                                                            label="Date"
                                                            value={achievement.date}
                                                            onChange={(e) => handleAchievementChange(index, 'date', e.target.value)}
                                                            placeholder="e.g., 2023"
                                                        />
                                                        <div className="col-span-2">
                                                            <AnimatedInput
                                                                label="Achievement"
                                                                value={achievement.achievement}
                                                                onChange={(e) => handleAchievementChange(index, 'achievement', e.target.value)}
                                                                placeholder="e.g., Best Doctor Award"
                                                            />
                                                        </div>
                                                    </div>
                                                    {newSpeaker.achievements.length > 1 && (
                                                        <button
                                                            onClick={() => handleRemoveAchievement(index)}
                                                            className="mt-4 w-8 h-8 bg-red-50 text-red-500 rounded-lg flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors"
                                                        >
                                                            <X size={14} />
                                                        </button>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* About Rich Text Editor */}
                                    <div className="mb-6">
                                        <label className="block text-sm font-semibold text-[#25225B] mb-3">About</label>
                                        <ReactQuill
                                            value={newSpeaker.about}
                                            onChange={(value) => setNewSpeaker({ ...newSpeaker, about: value })}
                                            theme="snow"
                                            className="bg-white border-2 border-slate-100 rounded-2xl"
                                            style={{ height: '300px', marginBottom: '50px' }}
                                            modules={{
                                                toolbar: [
                                                    [{ 'header': [1, 2, 3, false] }],
                                                    ['bold', 'italic', 'underline'],
                                                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                                                    ['link'],
                                                    ['clean']
                                                ]
                                            }}
                                        />
                                    </div>
                                </div>

                                <div className="p-6 border-t border-slate-200 flex-shrink-0">
                                    <button
                                        onClick={handleAddSpeaker}
                                        disabled={!newSpeaker.name || !newSpeaker.jobTitle}
                                        className="w-full py-4 bg-[#FED15E] text-[#25225B] font-bold rounded-xl hover:shadow-lg hover:shadow-[#FED15E]/30 hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                                    >
                                        Add Speaker
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Profession Selection Modal */}
                <AnimatePresence>
                    {showProfessionModal && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
                            onClick={() => {
                                setShowProfessionModal(false);
                                setProfessionSearch('');
                            }}
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl flex flex-col max-h-[85vh]"
                            >
                                <div className="p-6 border-b border-slate-200 flex-shrink-0">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <h2 className="text-2xl font-bold text-[#25225B]">Select Target Professions</h2>
                                            <p className="text-sm text-slate-600 mt-1">Choose all professions that apply to this course</p>
                                        </div>
                                        <button
                                            onClick={() => {
                                                setShowProfessionModal(false);
                                                setProfessionSearch('');
                                            }}
                                            className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-slate-200 transition-all"
                                        >
                                            <X size={20} />
                                        </button>
                                    </div>

                                    {/* Search Input */}
                                    <div className="relative">
                                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
                                        <input
                                            type="text"
                                            placeholder="Search professions..."
                                            value={professionSearch}
                                            onChange={(e) => setProfessionSearch(e.target.value)}
                                            className="w-full pl-11 pr-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl text-sm outline-none focus:border-[#25225B] focus:bg-white transition-all font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="flex-1 overflow-y-auto p-6">
                                    {(() => {
                                        // Filter professions based on search
                                        const filteredProfessions = PROFESSIONS.filter(profession =>
                                            profession.toLowerCase().includes(professionSearch.toLowerCase())
                                        );

                                        // Group professions alphabetically
                                        const groupedProfessions = filteredProfessions.reduce((acc, profession) => {
                                            const firstLetter = profession[0].toUpperCase();
                                            if (!acc[firstLetter]) {
                                                acc[firstLetter] = [];
                                            }
                                            acc[firstLetter].push(profession);
                                            return acc;
                                        }, {});

                                        // Sort letters
                                        const sortedLetters = Object.keys(groupedProfessions).sort();

                                        if (filteredProfessions.length === 0) {
                                            return (
                                                <div className="text-center py-12">
                                                    <p className="text-slate-400 text-sm">No professions found</p>
                                                </div>
                                            );
                                        }

                                        return (
                                            <div className="space-y-6">
                                                {sortedLetters.map((letter) => (
                                                    <div key={letter}>
                                                        <div className="sticky top-0 bg-white pb-2 mb-3 border-b border-slate-200">
                                                            <h3 className="text-lg font-bold text-[#25225B]">{letter}</h3>
                                                        </div>
                                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                            {groupedProfessions[letter].map((profession) => {
                                                                const isSelected = formData.professions.includes(profession);
                                                                return (
                                                                    <button
                                                                        key={profession}
                                                                        onClick={() => {
                                                                            if (isSelected) {
                                                                                setFormData({
                                                                                    ...formData,
                                                                                    professions: formData.professions.filter(p => p !== profession)
                                                                                });
                                                                            } else {
                                                                                setFormData({
                                                                                    ...formData,
                                                                                    professions: [...formData.professions, profession]
                                                                                });
                                                                            }
                                                                        }}
                                                                        className={`p-4 rounded-xl border-2 transition-all text-left text-sm font-medium ${isSelected
                                                                            ? 'border-[#25225B] bg-[#25225B] text-white shadow-md'
                                                                            : 'border-slate-200 bg-white text-slate-700 hover:border-[#25225B]/30 hover:bg-slate-50'
                                                                            }`}
                                                                    >
                                                                        <div className="flex items-center gap-2">
                                                                            <input
                                                                                type="checkbox"
                                                                                checked={isSelected}
                                                                                onChange={() => { }}
                                                                                className="w-4 h-4 rounded border-2 border-slate-300 text-[#25225B] focus:ring-[#25225B] cursor-pointer"
                                                                            />
                                                                            <span className="leading-tight">{profession}</span>
                                                                        </div>
                                                                    </button>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        );
                                    })()}
                                </div>

                                <div className="p-6 border-t border-slate-200 flex items-center justify-between flex-shrink-0">
                                    <p className="text-sm font-medium text-slate-600">
                                        {formData.professions.length} profession{formData.professions.length !== 1 ? 's' : ''} selected
                                    </p>
                                    <button
                                        onClick={() => {
                                            setShowProfessionModal(false);
                                            setProfessionSearch('');
                                        }}
                                        className="px-6 py-3 bg-[#FED15E] text-[#25225B] font-bold rounded-xl hover:shadow-lg hover:shadow-[#FED15E]/30 hover:-translate-y-1 transition-all"
                                    >
                                        Done
                                    </button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Action Buttons - Fixed to Bottom */}
                <div className={`fixed bottom-0 left-80 right-0 z-50 p-8 bg-gradient-to-t pointer-events-none ${isDark
                    ? 'from-slate-900 via-slate-900/95 to-transparent'
                    : 'from-slate-50 via-slate-50/95 to-transparent'
                    }`}>
                    <div className="max-w-[1600px] mx-auto pointer-events-auto">
                        <div className={`max-w-[66.666%] flex gap-4 p-4 backdrop-blur-xl border shadow-2xl rounded-2xl ${isDark
                            ? 'bg-white/10 border-white/20'
                            : 'bg-white/95 border-white/40'
                            }`}>
                            <button
                                onClick={() => handleStepChange(currentStep - 1)}
                                disabled={currentStep === 1}
                                className={`flex-1 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${currentStep === 1
                                    ? isDark
                                        ? 'opacity-50 cursor-not-allowed bg-slate-700 text-slate-500'
                                        : 'opacity-50 cursor-not-allowed bg-slate-100 text-slate-400'
                                    : isDark
                                        ? 'bg-white/10 text-white hover:bg-white/20 shadow-md hover:-translate-y-1 border-2 border-white/20 hover:border-[#FED15E]'
                                        : 'bg-white text-slate-600 hover:bg-slate-50 shadow-md hover:-translate-y-1 border-2 border-slate-200 hover:border-[#25225B]'
                                    }`}
                            >
                                <ArrowLeft size={20} />
                                Back
                            </button>
                            <button
                                onClick={() => currentStep < 4 ? handleStepChange(currentStep + 1) : handleSaveCourse('active')}
                                disabled={saving}
                                className="flex-[2] py-4 bg-gradient-to-r from-[#FED15E] to-[#fcb92a] text-[#25225B] rounded-xl font-bold shadow-lg shadow-[#FED15E]/20 hover:shadow-[#FED15E]/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {saving ? (
                                    <>
                                        <Loader2 className="animate-spin" size={20} />
                                        Saving...
                                    </>
                                ) : (
                                    <>
                                        {currentStep === 4 ? 'Publish Course' : 'Continue'}
                                        <ArrowRight size={20} />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

