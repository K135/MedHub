"use client"
import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const CoursesGridArea = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const coursesRef = useRef<HTMLDivElement>(null);
  const selectHandler = (e: any) => { };
  const [showProfessionModal, setShowProfessionModal] = useState(false);
  const [selectedProfessions, setSelectedProfessions] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);
  const [selectedCredits, setSelectedCredits] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [professionSearch, setProfessionSearch] = useState<string>('');

  const categories = ["Clinical Nursing", "Cardiology", "Radiology", "Surgery", "Pediatrics", "Psychiatry", "Emergency Medicine", "Allied Health", "Healthcare Leadership"];
  const courseFormats = ["In-Person", "Online", "Hybrid"];
  const creditTypes = ["CME Credits", "CPD Credits", "Certificate of Attendance", "Professional Development Hours"];

  const allCourses = [
    {
      id: 1,
      category: "Cardiology",
      title: "Advanced Cardiac Care and Interventional Cardiology",
      instructor: "Dr. Ahmed Al-Rashid",
      credits: "12 CME Credits",
      students: "145 Students",
      price: "AED 3,500",
      duration: "16h 30min",
      description: "Master advanced cardiac procedures and interventional techniques",
      image: "01.jpg",
      rating: 5,
      eventDate: new Date(2025, 11, 15), // December 15, 2025
      format: "In-Person"
    },
    {
      id: 2,
      category: "Nursing",
      title: "Advanced Critical Care Nursing Practice",
      instructor: "Nurse Fatima Hassan",
      credits: "15 CPD Credits",
      students: "230 Students",
      price: "AED 2,800",
      duration: "20h 15min",
      description: "Comprehensive training for ICU and critical care environments",
      image: "02.jpg",
      rating: 5,
      eventDate: new Date(2026, 0, 22), // January 22, 2026
      format: "Online"
    },
    {
      id: 3,
      category: "Allied Health",
      title: "Advanced Diagnostic Imaging and Radiography",
      instructor: "Dr. Sarah Johnson",
      credits: "18 CME Credits",
      students: "190 Students",
      price: "AED 4,200",
      duration: "24h 30min",
      description: "Master modern imaging techniques and diagnostic protocols",
      image: "03.jpg",
      rating: 5,
      eventDate: new Date(2025, 10, 8), // November 8, 2025
      format: "Hybrid"
    },
    {
      id: 4,
      category: "Emergency Medicine",
      title: "Advanced Emergency Medicine and Trauma Care",
      instructor: "Dr. Michael Chen",
      credits: "20 CME Credits",
      students: "310 Students",
      price: "AED 5,000",
      duration: "28h 00min",
      description: "Comprehensive emergency response and trauma management training",
      image: "04.jpg",
      rating: 5,
      eventDate: new Date(2026, 2, 10), // March 10, 2026
      format: "In-Person"
    },
    {
      id: 5,
      category: "Radiology",
      title: "Advanced MRI and CT Interpretation",
      instructor: "Dr. Sarah Johnson",
      credits: "22 CME Credits",
      students: "175 Students",
      price: "AED 6,000",
      duration: "32h 15min",
      description: "Expert-level training in advanced imaging interpretation",
      image: "05.jpg",
      rating: 5,
      eventDate: new Date(2026, 1, 18), // February 18, 2026
      format: "Online"
    },
    {
      id: 6,
      category: "Healthcare Leadership",
      title: "Healthcare Management and Leadership Excellence",
      instructor: "Dr. Mohammed Al-Mansoori",
      credits: "15 PDH",
      students: "280 Students",
      price: "AED 4,500",
      duration: "25h 30min",
      description: "Develop strategic leadership skills for healthcare organizations",
      image: "06.jpg",
      rating: 5,
      eventDate: new Date(2025, 11, 5), // December 5, 2025
      format: "Hybrid"
    },
    {
      id: 7,
      category: "Quality Assurance",
      title: "Healthcare Quality and Patient Safety Management",
      instructor: "Dr. Ahmed Al-Rashid",
      credits: "18 CME Credits",
      students: "165 Students",
      price: "AED 3,800",
      duration: "22h 00min",
      description: "Comprehensive quality assurance and patient safety protocols",
      image: "01.jpg",
      rating: 5,
      eventDate: new Date(2026, 3, 12), // April 12, 2026
      format: "Online"
    },
    {
      id: 8,
      category: "Cardiology",
      title: "Interventional Cardiology Procedures",
      instructor: "Dr. Ahmed Al-Rashid",
      credits: "20 CME Credits",
      students: "200 Students",
      price: "AED 5,500",
      duration: "30h 00min",
      description: "Hands-on training in modern interventional techniques",
      image: "01.jpg",
      rating: 5,
      eventDate: new Date(2026, 0, 30), // January 30, 2026
      format: "In-Person"
    },
    {
      id: 9,
      category: "Cardiology",
      title: "Advanced Cardiac Surgery and Post-Operative Care",
      instructor: "Dr. Ahmed Al-Rashid",
      credits: "25 CME Credits",
      students: "120 Students",
      price: "AED 7,500",
      duration: "35h 30min",
      description: "Comprehensive surgical techniques and post-operative protocols",
      image: "01.jpg",
      rating: 5,
      eventDate: new Date(2025, 10, 25), // November 25, 2025
      format: "Hybrid"
    }
  ];

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const formatParam = searchParams.get('course-format');
    const creditParam = searchParams.get('CreditType');
    const startDateParam = searchParams.get('start-date');
    const endDateParam = searchParams.get('end-date');

    if (categoryParam) {
      const decodedCategories = decodeURIComponent(categoryParam).split(',');
      setSelectedCategories(decodedCategories);
    } else {
      setSelectedCategories([]);
    }
    if (formatParam) {
      const decodedFormats = decodeURIComponent(formatParam).split(',');
      setSelectedFormats(decodedFormats);
    } else {
      setSelectedFormats([]);
    }
    if (creditParam) {
      const decodedCredits = decodeURIComponent(creditParam).split(',');
      setSelectedCredits(decodedCredits);
    } else {
      setSelectedCredits([]);
    }
    if (startDateParam) {
      setStartDate(startDateParam);
    } else {
      setStartDate('');
    }
    if (endDateParam) {
      setEndDate(endDateParam);
    } else {
      setEndDate('');
    }
  }, [searchParams]);

  const updateUrl = (newCategories: string[], newFormats: string[], newCredits: string[], newStartDate?: string, newEndDate?: string) => {
    const params = new URLSearchParams();
    
    if (newCategories.length > 0) {
      params.set('category', encodeURIComponent(newCategories.join(',')));
    }
    if (newFormats.length > 0) {
      params.set('course-format', encodeURIComponent(newFormats.join(',')));
    }
    if (newCredits.length > 0) {
      params.set('CreditType', encodeURIComponent(newCredits.join(',')));
    }
    if (newStartDate) {
      params.set('start-date', newStartDate);
    }
    if (newEndDate) {
      params.set('end-date', newEndDate);
    }

    const queryString = params.toString();
    const newUrl = queryString ? `/courses?${queryString}` : '/courses';
    
    // Use router.replace with scroll: false to prevent automatic scroll to top
    router.replace(newUrl, { scroll: false });
    
    // Scroll to courses section
    setTimeout(() => {
      if (coursesRef.current) {
        coursesRef.current.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 50);
  };

  const filteredCourses = allCourses.filter(course => {
    // Category filter
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(course.category);
    
    // Format filter
    const formatMatch = selectedFormats.length === 0 || selectedFormats.includes(course.format);
    
    // Credit filter
    const creditMatch = selectedCredits.length === 0 || selectedCredits.some(credit => course.credits.includes(credit));
    
    // Date filter
    let dateMatch = true;
    if (startDate || endDate) {
      const courseDate = course.eventDate;
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;
      
      if (start && end) {
        dateMatch = courseDate >= start && courseDate <= end;
      } else if (start) {
        dateMatch = courseDate >= start;
      } else if (end) {
        dateMatch = courseDate <= end;
      }
    }
    
    return categoryMatch && formatMatch && creditMatch && dateMatch;
  });

  const handleCategoryToggle = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newCategories);
    updateUrl(newCategories, selectedFormats, selectedCredits, startDate, endDate);
  };

  const handleFormatToggle = (format: string) => {
    const newFormats = selectedFormats.includes(format)
      ? selectedFormats.filter(f => f !== format)
      : [...selectedFormats, format];
    setSelectedFormats(newFormats);
    updateUrl(selectedCategories, newFormats, selectedCredits, startDate, endDate);
  };

  const handleCreditToggle = (credit: string) => {
    const newCredits = selectedCredits.includes(credit)
      ? selectedCredits.filter(c => c !== credit)
      : [...selectedCredits, credit];
    setSelectedCredits(newCredits);
    updateUrl(selectedCategories, selectedFormats, newCredits, startDate, endDate);
  };

  const handleDateChange = (type: 'start' | 'end', value: string) => {
    if (type === 'start') {
      setStartDate(value);
      updateUrl(selectedCategories, selectedFormats, selectedCredits, value, endDate);
    } else {
      setEndDate(value);
      updateUrl(selectedCategories, selectedFormats, selectedCredits, startDate, value);
    }
  };

  const professions = [
    "Physician", "Students", "Cardiologists", "Physician Assistant", "Nursing", "Emergency Medicine", 
    "Nurses", "Dentist", "Healthcare Professionals", "Nurse Practitioners", "Emergency Medicine Physicians", 
    "Residents", "Healthcare Providers", "Physician Assistant - PAs", "Fellows", "Pharmacist", 
    "Aesthetic Medicine Physician", "Other Health Professionals", "Pediatrics", "Researchers", "Surgeons", 
    "Allied Health Professionals", "Internal Medicine", "Dermatologists", "Neurologists", "Physical Therapists", 
    "Anesthesiologist", "Family Medicine", "Family Physicians", "Primary Care Physicians", "Radiologists", 
    "Clinicians", "Healthcare Management", "Primary Care Physician", "Nursing - RN", "Psychiatrists", 
    "Occupational Therapists", "Orthopedics", "Oncologists", "Medical Students", "Scientists", 
    "Orthopedic Surgeons", "Physician - MD", "Physician - DO", "Osteopath", "Sonographer", 
    "Advanced Practice Providers", "Trauma", "Chiropractors", "Internal Medicine Physician", 
    "Primary Care Providers", "Critical Care Physician", "Psychologists", "Periodontists", 
    "Obstetrics and Gynecology Physicians", "Endocrinologists", "Medical Doctors", "Pediatricians", 
    "Critical Care Medicine", "Gastroenterologists", "Trainees", "Ophthalmologist", "Paramedics", 
    "Physical Therapist", "Family Practice physicians", "Neurosurgeons", "Sports Medicine Physician", 
    "Urologists", "Pulmonologists", "Hospitalist", "Physical Therapy Assistants", "Pain Management", 
    "Respiratory Therapist", "Infectious Diseases Physician", "Pathologists", "Athletic Trainers", 
    "Leadership", "Advanced Practice Nurse", "Administrators", "Orthodontists", "Vascular Surgeon", 
    "Certified Registered Nurse Anesthetist", "Immunologists", "Occupational Therapy Assistants", 
    "Optometrist", "Dental Hygienists", "Licensed Massage Therapists", "Clinical Researchers", 
    "Mental Health Professionals", "Rheumatologists", "Social Workers", "Nurse", "Plastic Surgeons", 
    "Radiation Oncologists", "Nutritionists", "Social Worker", "Podiatrist", "Dental Assistants", 
    "Oral and Maxillofacial Surgeons", "Therapists", "Hematologist", "Implantologists", 
    "Interventional Cardiologists", "Otolaryngologist", "Practitioners/Doctors", "Clinical Pharmacology", 
    "Dermatologist", "Interventional Radiologists", "Womens Health", "Nephrologists", "Neurology", 
    "Acupuncturist", "Emergency Medical Technician", "Midwife", "Spine Surgeons", "Geriatrics", "Imaging", 
    "Radiotechnologists", "Addictions Professionals", "Dental Staff", "Gynaecologist", "Hepatologists", 
    "Internist", "Medical Geneticists", "Physical medicine and rehabilitation", "Obstetricians", 
    "Technicians", "Neonatologist", "Physiologists", "VPs, GMs, Directors, Heads and Managers", 
    "Allergy & immunology", "Medical Oncologists", "Orthopaedic Surgeons", "Dentist - DDS", "Oncology", 
    "Pharmacist - Pharmacist", "Public health professionals", "Academia", "Neonatal-Perinatal Medicine", 
    "Nursing - APRN", "Otolaryngology-head and neck Surgeons", "Physician - MD/DO", "Pulmonologist", 
    "Thoracic Surgeons", "Trauma Surgeons", "Addiction Counselors", "Clinical Nurse Specialists", 
    "Consultants", "Medical Technologist", "Postdoctoral fellows", "Sleep Medicine", 
    "Speech Language Pathologists", "Transplant Surgeons", "Breast Cancer - pathologists", "Cell Biology", 
    "Clinicians - Family Physicians", "General Surgeons", "Pharmacist - Pharmacy Technician", 
    "Bio-Tech Companies", "Cardiothoracic", "Echocardiographers", "Emergency Medicine Providers", 
    "Endodontists", "General Practitioner", "Geriatric Physicians", "Nuclear Medicine Physicians", 
    "Pharmacist - PharmD", "Ultrasound Specialists", "Dental Specialists", "Dietitian", "Endocrinologist", 
    "Hospital Medicine", "OBGYN", "Oncology - Radiologists", "Vascular Medicine Specialists", 
    "Dental Auxiliaries", "Nursing - LPN", "Primary Care Professionals", "Radiologist", "Rehabilitation", 
    "Resident Physician", "pediatrist", "Diabetologists", "Epidemiologists", "Medical Assistants", 
    "Medical Physicists", "Pain medicine", "Bio-Pharma Companies", "Clinical Pharmacists", "Dentist - RDA", 
    "Dentist - RDH", "Dermatologic Surgeons", "ER physicians", "Health Care Practitioners", 
    "Medical Directors", "Neurologist and Neurosurgeon", "Otorhinolaryngologists", "Pediatric Dentists", 
    "Prosthodontists", "Radiology Technicians"
  ];

  const handleProfessionToggle = (profession: string) => {
    setSelectedProfessions(prev => 
      prev.includes(profession) 
        ? prev.filter(p => p !== profession)
        : [...prev, profession]
    );
  };

  // Group professions alphabetically with search filter
  const groupProfessionsByAlphabet = () => {
    const filteredProfessions = professions.filter(profession =>
      profession.toLowerCase().includes(professionSearch.toLowerCase())
    );
    const sortedProfessions = [...filteredProfessions].sort();
    const grouped: { [key: string]: string[] } = {};
    
    sortedProfessions.forEach(profession => {
      const firstLetter = profession.charAt(0).toUpperCase();
      if (!grouped[firstLetter]) {
        grouped[firstLetter] = [];
      }
      grouped[firstLetter].push(profession);
    });
    
    return grouped;
  };

  const professionsGrouped = groupProfessionsByAlphabet();
  const totalFilteredProfessions = Object.values(professionsGrouped).flat().length;

  // Generate random date between Nov 2025 and April 2026
  const getRandomDate = () => {
    const startDate = new Date(2025, 10, 1); // November 1, 2025
    const endDate = new Date(2026, 3, 30); // April 30, 2026
    const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
    return new Date(randomTime);
  };

  // Initialize with random date
  React.useEffect(() => {
    if (!selectedDate) {
      setSelectedDate(getRandomDate());
    }
  }, [selectedDate]);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const generateCalendarDays = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const currentDate = new Date(startDate);
    
    for (let i = 0; i < 42; i++) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    
    return days;
  };

  const getFormatBadgeStyle = (format: string) => {
    switch (format) {
      case 'In-Person':
        return {
          background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
          color: 'white',
          icon: 'fas fa-map-marker-alt'
        };
      case 'Online':
        return {
          background: 'linear-gradient(135deg, #007bff 0%, #6610f2 100%)',
          color: 'white',
          icon: 'fas fa-laptop'
        };
      case 'Hybrid':
        return {
          background: 'linear-gradient(135deg, #fd7e14 0%, #e83e8c 100%)',
          color: 'white',
          icon: 'fas fa-blender'
        };
      default:
        return {
          background: 'linear-gradient(135deg, #6c757d 0%, #495057 100%)',
          color: 'white',
          icon: 'fas fa-question'
        };
    }
  };

  return (
    <>
      <section className="courses-section section-padding fix">
            <div className="container" style={{ maxWidth: '1600px' }}>
                <div className="row g-4">
                    <div className="col-xl-3 col-lg-4">
                        <div className="courses-main-sidebar-area">
                            <div className="courses-main-sidebar">
                                <div className="courses-sidebar-items">
                                    <div className="wid-title style-2">
                                        <h5>Search</h5>
                                    </div>
                                    <div className="search-widget">
                                        <form onSubmit={e => e.preventDefault()}>
                                            <input type="text" placeholder="Search courses" />
                                            <button type="submit"><i className="fal fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="courses-sidebar-items">
                                    <div className="wid-title">
                                        <h5>Dates</h5>
                                    </div>
                                    <div className="courses-list">
                                        <input 
                                            type="date" 
                                            className="form-control mb-2" 
                                            placeholder="Start Date"
                                            value={startDate}
                                            onChange={(e) => handleDateChange('start', e.target.value)}
                                        />
                                        <input 
                                            type="date" 
                                            className="form-control" 
                                            placeholder="End Date"
                                            value={endDate}
                                            onChange={(e) => handleDateChange('end', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="courses-sidebar-items">
                                    <div className="wid-title">
                                        <h5>Category</h5>
                                    </div>
                                    <div className="courses-list">
                                        {categories.map((category) => (
                                            <label key={category} className="checkbox-single">
                                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                    <span className="checkbox-area d-center">
                                                        <input 
                                                            type="checkbox" 
                                                            checked={selectedCategories.includes(category)}
                                                            onChange={() => handleCategoryToggle(category)}
                                                        />
                                                        <span className="checkmark d-center"></span>
                                                    </span>
                                                    <span className="text-color">
                                                        {category}
                                                    </span>
                                                </span>
                                            </label>
                                        ))}
                                        <div className="view-more-wrapper mt-3">
                                            <button 
                                                onClick={() => setShowProfessionModal(true)}
                                                className="view-more-btn"
                                                style={{
                                                    background: 'none',
                                                    border: 'none',
                                                    color: '#1363DF',
                                                    cursor: 'pointer',
                                                    fontSize: '14px',
                                                    fontWeight: '500',
                                                    textDecoration: 'underline'
                                                }}
                                            >
                                                View More
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-sidebar-items">
                                    <div className="wid-title">
                                        <h5>Course format</h5>
                                    </div>
                                    <div className="courses-list">
                                        {courseFormats.map((format) => (
                                            <label key={format} className="checkbox-single">
                                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                    <span className="checkbox-area d-center">
                                                        <input 
                                                            type="checkbox" 
                                                            checked={selectedFormats.includes(format)}
                                                            onChange={() => handleFormatToggle(format)}
                                                        />
                                                        <span className="checkmark d-center"></span>
                                                    </span>
                                                    <span className="text-color">
                                                        {format}
                                                    </span>
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="courses-sidebar-items">
                                    <div className="wid-title">
                                        <h5>Credit type</h5>
                                    </div>
                                    <div className="courses-list">
                                        {creditTypes.map((credit) => (
                                            <label key={credit} className="checkbox-single">
                                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                    <span className="checkbox-area d-center">
                                                        <input 
                                                            type="checkbox" 
                                                            checked={selectedCredits.includes(credit)}
                                                            onChange={() => handleCreditToggle(credit)}
                                                        />
                                                        <span className="checkmark d-center"></span>
                                                    </span>
                                                    <span className="text-color">
                                                        {credit}
                                                    </span>
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="courses-sidebar-items">
                                    <div className="wid-title">
                                        <h5>No. of credits</h5>
                                    </div>
                                    <div className="courses-list">
                                        <div className="credit-range-slider">
                                            <input type="range" min="0" max="300" className="form-range" />
                                            <div className="d-flex justify-content-between mt-2">
                                                <span className="text-color">0</span>
                                                <span className="text-color">300</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-sidebar-items">
                                    <div className="wid-title">
                                        <h5>Price range</h5>
                                    </div>
                                    <div className="courses-list">
                                        <div className="price-range-slider">
                                            <input type="range" min="0" max="80000" className="form-range" />
                                            <div className="d-flex justify-content-between mt-2">
                                                <span className="text-color">AED 0</span>
                                                <span className="text-color">AED 80,000</span>
                                            </div>
                                        </div>
                                        <label className="checkbox-single mt-3">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Free Courses
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Non-CME Courses
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="courses-sidebar-items">
                                    <div className="wid-title">
                                        <h5>Organizer</h5>
                                    </div>
                                    <div className="courses-list">
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    MedEd Global
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Healthcare Innovations Ltd
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Quality Care Institute
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Emergency Med Partners
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Leadership Academy ME
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Radiology Excellence Group
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="courses-sidebar-items">
                                    <div className="wid-title">
                                        <h5>Location</h5>
                                    </div>
                                    <div className="courses-list">
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Dubai, UAE
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Abu Dhabi, UAE
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Riyadh, Saudi Arabia
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Doha, Qatar
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Kuwait City, Kuwait
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Muscat, Oman
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Manama, Bahrain
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="courses-sidebar-items">
                                    <div className="wid-title">
                                        <h5>Speaker</h5>
                                    </div>
                                    <div className="courses-list">
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Dr. Ahmed Al-Rashid
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Dr. Sarah Johnson
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Nurse Fatima Hassan
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Dr. Michael Chen
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Dr. Mohammed Al-Mansoori
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button 
                                onClick={() => {
                                    setSelectedCategories([]);
                                    setSelectedFormats([]);
                                    setSelectedCredits([]);
                                    setStartDate('');
                                    setEndDate('');
                                    updateUrl([], [], [], '', '');
                                }}
                                className="theme-btn" 
                                style={{ border: 'none', cursor: 'pointer', width: '100%' }}
                            >
                                <i className="far fa-times-circle"></i> Clear All Filters
                            </button>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8" ref={coursesRef}>
                        <div className="coureses-notices-wrapper">
                            <div className="courses-showing">
                                <div className="icon-items">
                                    <Link href="/courses-grid"><i className="fas fa-th"></i></Link>
                                    <Link href="/courses-list"><i className="fas fa-bars"></i></Link>
                                </div>
                                <h5>Showing <span>1-{filteredCourses.length}</span> Of <span>{filteredCourses.length}</span> Results</h5>
                            </div>
                            <div className="form-clt">
                            <NiceSelect
                                className="category"
                                options={[
                                    { value: "01", text: "Sort by : Default" },
                                    { value: "02", text: "Sort by popularity" },
                                    { value: "03", text: "Sort by average rating" },
                                    { value: "04", text: "Sort by latest" }, 
                                ]}
                                defaultCurrent={0}
                                onChange={selectHandler}
                                name=""
                                placeholder="" />
                             </div>
                        </div>
                        <div className="row">
                            {filteredCourses.map((course) => (
                            <div key={course.id} className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items" style={{ position: 'relative' }}>
                                    <div className="courses-card-items">
                                        <div className="courses-image" style={{ position: 'relative' }}>
                                            <img src={`assets/img/courses/${course.image}`} alt="img" />
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
                                                border: '2px solid white'
                                            }}>
                                                <i className="far fa-calendar-alt" style={{ marginRight: '6px' }}></i>
                                                {course.eventDate.toLocaleDateString('en-US', { 
                                                    month: 'short', 
                                                    day: 'numeric', 
                                                    year: 'numeric' 
                                                })}
                                            </div>
                                            <div className="format-badge" style={{
                                                ...getFormatBadgeStyle(course.format),
                                                padding: '6px 12px',
                                                borderRadius: '20px',
                                                fontSize: '11px',
                                                fontWeight: '600',
                                                display: 'inline-block',
                                                boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
                                                position: 'absolute',
                                                bottom: '-15px',
                                                right: '15px',
                                                zIndex: 10,
                                                border: '2px solid white'
                                            }}>
                                                <i className={getFormatBadgeStyle(course.format).icon} style={{ marginRight: '4px' }}></i>
                                                {course.format}
                                            </div>
                                        </div>
                                        <div className="courses-content" style={{ paddingTop: '25px' }}>
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">{course.category}</Link>
                                                </li>
                                                <li>
                                                    {[...Array(course.rating)].map((_, i) => (
                                                        <i key={i} className="fas fa-star"></i>
                                                    ))}
                                                </li>
                                            </ul>
                                            <h5>
                                                <Link href="/courses-details">
                                                    {course.title}
                                                </Link>
                                            </h5>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>{course.instructor}</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    {course.credits}
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    {course.students}
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="courses-card-items-hover">
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
                                            border: '2px solid white'
                                        }}>
                                            <i className="far fa-calendar-alt" style={{ marginRight: '6px' }}></i>
                                            {course.eventDate.toLocaleDateString('en-US', { 
                                                month: 'short', 
                                                day: 'numeric', 
                                                year: 'numeric' 
                                            })}
                                        </div>
                                        <div className="format-badge" style={{
                                            ...getFormatBadgeStyle(course.format),
                                            padding: '6px 12px',
                                            borderRadius: '20px',
                                            fontSize: '11px',
                                            fontWeight: '600',
                                            display: 'inline-block',
                                            boxShadow: '0 3px 10px rgba(0, 0, 0, 0.2)',
                                            position: 'absolute',
                                            top: '-15px',
                                            right: '15px',
                                            zIndex: 10,
                                            border: '2px solid white'
                                        }}>
                                            <i className={getFormatBadgeStyle(course.format).icon} style={{ marginRight: '4px' }}></i>
                                            {course.format}
                                        </div>
                                        <div className="courses-content" style={{ paddingTop: '25px' }}>
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">{course.category}</Link>
                                                </li>
                                                <li>
                                                    {[...Array(course.rating)].map((_, i) => (
                                                        <i key={i} className="fas fa-star"></i>
                                                    ))}
                                                </li>
                                            </ul>
                                            <h5>
                                                <Link href="/courses-details">
                                                    {course.title}
                                                </Link>
                                            </h5>
                                            <h4>{course.price}</h4>
                                            <span>
                                                {course.description}
                                            </span>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>{course.instructor}</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-clock"></i>
                                                    {course.duration}
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    {course.students}
                                                </li>
                                            </ul>
                                            <Link href="/courses-details" className="theme-btn yellow-btn">Enroll Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                        <div className="page-nav-wrap pt-5">
                            <ul>
                                <li><a className="page-numbers" href="#">1</a></li>
                                <li><a className="page-numbers" href="#">2</a></li>
                                <li><a className="page-numbers" href="#">3</a></li>
                                <li><a className="page-numbers" href="#">4</a></li>
                                <li><a className="page-numbers" href="#"><i className="far fa-arrow-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {showProfessionModal && (
          <div 
            className="modal-overlay"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              backdropFilter: 'blur(4px)'
            }}
            onClick={() => setShowProfessionModal(false)}
          >
            <div 
              className="modal-content"
              style={{
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '0',
                maxWidth: '900px',
                maxHeight: '85vh',
                position: 'relative',
                width: '95%',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
                overflow: 'hidden'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div style={{ 
                padding: '25px 30px', 
                borderBottom: '1px solid #e5e7eb',
                background: 'linear-gradient(135deg, #1363DF 0%, #0B4FB8 100%)',
                color: 'white'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '24px', fontWeight: '600', color: 'white' }}>Select Professions</h3>
                    <p style={{ margin: '5px 0 0 0', opacity: 0.9, fontSize: '14px' }}>
                      Choose your professional categories ({selectedProfessions.length} selected)
                    </p>
                  </div>
                  <button
                    onClick={() => setShowProfessionModal(false)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.2)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '40px',
                      height: '40px',
                      fontSize: '20px',
                      cursor: 'pointer',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'background 0.2s'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)'}
                  >
                    ×
                  </button>
                </div>
                
                {/* Search Bar */}
                <div style={{ position: 'relative' }}>
                  <input
                    type="text"
                    placeholder="Search professions..."
                    value={professionSearch}
                    onChange={(e) => setProfessionSearch(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 16px 12px 45px',
                      borderRadius: '25px',
                      border: 'none',
                      fontSize: '14px',
                      backgroundColor: 'rgba(255, 255, 255, 0.95)',
                      color: '#374151',
                      outline: 'none',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.2s'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                      e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                    }}
                  />
                  <i 
                    className="fas fa-search" 
                    style={{
                      position: 'absolute',
                      left: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#9ca3af',
                      fontSize: '14px'
                    }}
                  ></i>
                  {professionSearch && (
                    <button
                      onClick={() => setProfessionSearch('')}
                      style={{
                        position: 'absolute',
                        right: '12px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'none',
                        border: 'none',
                        color: '#9ca3af',
                        cursor: 'pointer',
                        fontSize: '16px',
                        padding: '4px',
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#f3f4f6';
                        e.currentTarget.style.color = '#374151';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#9ca3af';
                      }}
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* Content */}
              <div style={{ 
                padding: '20px 30px', 
                maxHeight: 'calc(85vh - 180px)', 
                overflowY: 'auto',
                scrollbarWidth: 'thin'
              }}>
                {totalFilteredProfessions === 0 ? (
                  <div style={{
                    textAlign: 'center',
                    padding: '60px 20px',
                    color: '#6b7280'
                  }}>
                    <i className="fas fa-search" style={{ fontSize: '48px', marginBottom: '20px', opacity: 0.3 }}></i>
                    <h4 style={{ margin: '0 0 10px 0', color: '#374151' }}>No professions found</h4>
                    <p style={{ margin: 0, fontSize: '14px' }}>
                      Try adjusting your search term or{' '}
                      <button
                        onClick={() => setProfessionSearch('')}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#1363DF',
                          cursor: 'pointer',
                          textDecoration: 'underline',
                          fontSize: '14px'
                        }}
                      >
                        clear the search
                      </button>
                    </p>
                  </div>
                ) : (
                  Object.keys(professionsGrouped).sort().map(letter => (
                  <div key={letter} style={{ marginBottom: '30px' }}>
                    {/* Alphabet Header */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginBottom: '15px',
                      paddingBottom: '8px',
                      borderBottom: '2px solid #e5e7eb'
                    }}>
                      <div style={{
                        fontSize: '32px',
                        fontWeight: '700',
                        color: '#1363DF',
                        marginRight: '15px',
                        minWidth: '40px'
                      }}>
                        {letter}
                      </div>
                      <div style={{
                        fontSize: '14px',
                        color: '#6b7280',
                        fontWeight: '500'
                      }}>
                        {professionsGrouped[letter].length} profession{professionsGrouped[letter].length !== 1 ? 's' : ''}
                      </div>
                    </div>
                    
                    {/* Professions Grid */}
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
                      gap: '12px',
                      marginLeft: '55px'
                    }}>
                      {professionsGrouped[letter].map((profession, index) => (
                        <label 
                          key={index} 
                          className="checkbox-single" 
                          style={{ 
                            marginBottom: '0',
                            padding: '12px 16px',
                            borderRadius: '8px',
                            border: '1px solid #e5e7eb',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            backgroundColor: selectedProfessions.includes(profession) ? '#f0f8ff' : 'white'
                          }}
                          onMouseEnter={(e) => {
                            if (!selectedProfessions.includes(profession)) {
                              e.currentTarget.style.backgroundColor = '#f9fafb';
                              e.currentTarget.style.borderColor = '#d1d5db';
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!selectedProfessions.includes(profession)) {
                              e.currentTarget.style.backgroundColor = 'white';
                              e.currentTarget.style.borderColor = '#e5e7eb';
                            }
                          }}
                        >
                          <span className="d-flex gap-3 align-items-center">
                            <span className="checkbox-area d-center">
                              <input 
                                type="checkbox"
                                checked={selectedProfessions.includes(profession)}
                                onChange={() => handleProfessionToggle(profession)}
                              />
                              <span className="checkmark d-center"></span>
                            </span>
                            <span 
                              className="text-color" 
                              style={{ 
                                fontSize: '14px',
                                fontWeight: selectedProfessions.includes(profession) ? '600' : '400',
                                color: selectedProfessions.includes(profession) ? '#1363DF' : '#374151'
                              }}
                            >
                              {profession}
                            </span>
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div style={{ 
                padding: '20px 30px', 
                borderTop: '1px solid #e5e7eb',
                backgroundColor: '#f9fafb',
                display: 'flex', 
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div style={{ fontSize: '14px', color: '#6b7280' }}>
                  {selectedProfessions.length} of {totalFilteredProfessions} professions selected
                  {professionSearch && (
                    <span style={{ marginLeft: '8px', fontStyle: 'italic' }}>
                      (filtered from {professions.length} total)
                    </span>
                  )}
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={() => {
                      setSelectedProfessions([]);
                    }}
                    style={{
                      padding: '12px 24px',
                      backgroundColor: 'white',
                      border: '1px solid #d1d5db',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#374151',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#f3f4f6';
                      e.currentTarget.style.borderColor = '#9ca3af';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'white';
                      e.currentTarget.style.borderColor = '#d1d5db';
                    }}
                  >
                    Clear All
                  </button>
                  <button
                    onClick={() => setShowProfessionModal(false)}
                    style={{
                      padding: '12px 24px',
                      background: 'linear-gradient(135deg, #1363DF 0%, #0B4FB8 100%)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      fontWeight: '600',
                      transition: 'transform 0.2s',
                      boxShadow: '0 4px 12px rgba(19, 99, 223, 0.3)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-1px)';
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(19, 99, 223, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(19, 99, 223, 0.3)';
                    }}
                  >
                    Apply Selection
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default CoursesGridArea;