"use client"
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axiosInstance, { BACKEND_URL } from '../../api/axios';

const CoursesDetailsArea = () => {
  const searchParams = useSearchParams();
  const courseId = searchParams.get('id');
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const [quantity, setQuantity] = useState(1);
  const [activeSection, setActiveSection] = useState('overview');
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    profession: '',
    organization: '',
    specialization: '',
    licenseNumber: ''
  });

  useEffect(() => {
    if (courseId) {
      const fetchCourse = async () => {
        try {
          const res = await axiosInstance.get(`/courses/public/${courseId}`);
          setCourse(res.data);
        } catch (err) {
          console.error('Error fetching course:', err);
        } finally {
          setLoading(false);
        }
      };
      fetchCourse();
    } else {
      setLoading(false);
    }
  }, [courseId]);

  const newDrugs = course?.topics || [];
  const treatments = course?.keyFeatures || [];
  const objectives = course?.objectives || [];
  const targetAudience = course?.targetProfession || [];
  const specialties = course?.targetProfession || [];

  /*
  const newDrugs = [
    { name: "Suzetrigine", description: "Novel NaV1.8 sodium-channel blocker offering a non-opioid option for acute pain management" },
    { name: "Methotrexate in Osteoarthritis", description: "Expanding indications for disease-modifying therapy in degenerative joint disease" },
    { name: "Mavacamten", description: "Cardiac myosin inhibitor improving management of obstructive hypertrophic cardiomyopathy" },
    { name: "Finerenone", description: "Non-steroidal mineralocorticoid receptor antagonist with proven renal and cardiovascular benefit in diabetic CKD" },
    { name: "Vonoprazan", description: "Potassium-competitive acid blocker (P-CAB) as an emerging alternative to PPIs for GERD" },
    { name: "Sotatercept", description: "Activin-signaling modulator for pulmonary arterial hypertension" },
    { name: "Aripiprazole", description: "Reviewed in the context of hormone therapy and chronic pain syndromes" }
  ];

  const treatments = [
    "PREVENT Risk Calculator – Updated AHA/ACC algorithm for precise cardiovascular risk stratification",
    "HCTZ vs Chlorthalidone – Comparative data guiding optimal thiazide selection",
    "Transcatheter Mitral Valve Repair – Expanding interventional options for mitral regurgitation",
    "Lifestyle Medicine – Mediterranean Diet – Evidence synthesis for cardiometabolic risk reduction",
    "Health Equity & Social Determinants of Health – Integrating population-level data into individualized care",
    "Aspirin for Primary Prevention – Reevaluated thresholds based on 2023–2024 guideline revisions",
    "Antimicrobial Stewardship & Resistance – Updated stewardship frameworks and resistance trends",
    "Direct Oral Anticoagulants (DOACs) – Evolving data on indications, dosing, and reversal strategies",
    "Chronotherapy in Hypertension – Timing of dosing and outcome impact",
    "Albumin in Sepsis & AKI – Current evidence for fluid selection",
    "Remote Hypertension Management – Implementation of telemonitoring models",
    "Subclinical Hypothyroidism & Fracture Risk – Thyroid–bone interaction studies",
    "Endocrine Tumors & Emergencies – Recognition and acute management",
    "Critical Illness Myopathy – Prevention and recovery in ICU weakness",
    "Status Epilepticus & Non-Convulsive Seizures – Diagnostic and therapeutic updates"
  ];

  const objectives = [
    "Integrate 2024 ADA and AHA recommendations into diabetes and cardiovascular care",
    "Describe the appropriate clinical use of novel agents such as SGLT2i, GLP-1 RAs, and ARNIs",
    "Select suitable candidates for newly approved medications using evidence-based criteria",
    "Modify existing treatment plans considering comorbidities and drug interactions",
    "Interpret revised thresholds and diagnostic tools for CKD, iron deficiency, and heart failure",
    "Utilize updated scoring systems and imaging techniques for diagnosis and therapy"
  ];

  const targetAudience = [
    "Physicians", "Nursing", "Physician Assistant", "Cardiologists", "Nephrologists",
    "Residents", "Internal Medicine", "Endocrinologist", "Primary Care Physicians",
    "Nurse Practitioners", "Family Medicine Practitioners"
  ];

  const specialties = [
    "General and Internal Medicine", "Internal Medicine", "Internal Medicine Physicians",
    "General Practice", "Nurse Practitioner", "Physician Assistants", "Primary Care",
    "Primary Care Physicians"
  ];
  */

  useEffect(() => {
    const handleScroll = () => {
      const isRichText = course?.contentType === 'richtext' || course?.contentType === 'richText';
      const sections = isRichText
        ? ['overview', 'fee', 'speakers']
        : ['overview', 'accreditation', 'fee', 'speakers'];
      
      const scrollPosition = window.scrollY + 250;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop - 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [course]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Registration data:', formData);
    // Handle form submission here
    setShowRegistrationForm(false);
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      profession: '',
      organization: '',
      specialization: '',
      licenseNumber: ''
    });
  };

  const openRegistrationForm = () => {
    setShowRegistrationForm(true);
  };

  const closeRegistrationForm = () => {
    setShowRegistrationForm(false);
  };

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  if (!course) {
    return <div className="text-center py-5">Course not found</div>;
  }

  return (
    <>
      <style jsx>{`
        .sticky-nav {
          position: sticky;
          top: 80px;
          background: white;
          z-index: 100;
          padding: 20px 0;
          margin-bottom: 30px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          border-radius: 15px;
        }

        .nav-tabs-scroll {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          scrollbar-width: thin;
          padding: 10px;
          flex-wrap: wrap;
        }

        .nav-tabs-scroll::-webkit-scrollbar {
          height: 4px;
        }

        .nav-tabs-scroll::-webkit-scrollbar-thumb {
          background: #667eea;
          border-radius: 4px;
        }

        .nav-tab-btn {
          padding: 12px 24px;
          background: #f8f9fa;
          border: 2px solid transparent;
          color: #666;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 50px;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .nav-tab-btn:hover {
          background: #e9ecef;
          color: #26225B;
        }

        .nav-tab-btn.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-color: transparent;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
        }

        .content-section {
          padding: 40px 0;
          scroll-margin-top: 150px;
        }

        .section-title {
          color: #26225B;
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 25px;
          padding-bottom: 15px;
          border-bottom: 3px solid #f0f0f0;
          position: relative;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        }

        .drug-item {
          padding: 20px;
          background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
          border-left: 4px solid #667eea;
          border-radius: 10px;
          margin-bottom: 15px;
          transition: all 0.3s ease;
        }

        .drug-item:hover {
          transform: translateX(10px);
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
        }

        .drug-item h4 {
          color: #26225B;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .drug-item p {
          color: #555;
          margin: 0;
          line-height: 1.6;
        }

        .treatment-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 15px;
          margin-top: 20px;
        }

        .treatment-item {
          padding: 15px 20px;
          background: white;
          border: 2px solid #e9ecef;
          border-radius: 10px;
          transition: all 0.3s ease;
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .treatment-item:hover {
          border-color: #667eea;
          box-shadow: 0 4px 15px rgba(102, 126, 234, 0.15);
          transform: translateY(-3px);
        }

        .treatment-item i {
          color: #667eea;
          font-size: 18px;
          margin-top: 3px;
          flex-shrink: 0;
        }

        .objective-item {
          padding: 20px;
          background: linear-gradient(135deg, #fff8f0 0%, #ffe8e0 100%);
          border-left: 4px solid #ff6b6b;
          border-radius: 10px;
          margin-bottom: 15px;
          display: flex;
          align-items: flex-start;
          gap: 15px;
        }

        .objective-item i {
          color: #ff6b6b;
          font-size: 24px;
          margin-top: 2px;
        }

        .badge-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }

        .badge-item {
          padding: 10px 20px;
          background: linear-gradient(135deg, #f8f9ff 0%, #e8ecff 100%);
          border: 2px solid #667eea;
          border-radius: 30px;
          color: #26225B;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .badge-item:hover {
          background: #667eea;
          color: white;
          transform: scale(1.05);
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .feature-box {
          text-align: center;
          padding: 30px 20px;
          background: linear-gradient(135deg, #fff 0%, #f8f9ff 100%);
          border-radius: 15px;
          border: 2px solid #e9ecef;
          transition: all 0.3s ease;
        }

        .feature-box:hover {
          border-color: #667eea;
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(102, 126, 234, 0.15);
        }

        .feature-box i {
          font-size: 40px;
          color: #667eea;
          margin-bottom: 15px;
        }

        .feature-box h4 {
          color: #26225B;
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .accreditation-card {
          padding: 30px;
          background: linear-gradient(135deg, #fff 0%, #f8f9ff 100%);
          border-radius: 15px;
          border: 2px solid #667eea;
          margin-bottom: 20px;
        }

        .accreditation-card h4 {
          color: #26225B;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .credit-summary {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 15px;
          margin-top: 20px;
        }

        .credit-item {
          text-align: center;
          padding: 20px;
          background: white;
          border-radius: 10px;
          border: 2px solid #e9ecef;
          transition: all 0.3s ease;
        }

        .credit-item:hover {
          border-color: #667eea;
          transform: translateY(-3px);
        }

        .credit-item .number {
          font-size: 32px;
          font-weight: 800;
          color: #667eea;
          margin-bottom: 5px;
        }

        .credit-item .label {
          font-size: 14px;
          color: #666;
          font-weight: 600;
        }

        .pricing-card-modern {
          background: linear-gradient(135deg, #26225B 0%, #4a4584 100%);
          padding: 35px;
          border-radius: 20px;
          color: white;
          box-shadow: 0 10px 40px rgba(38, 34, 91, 0.3);
          position: sticky;
          top: 100px;
        }

        .price-tag-modern {
          font-size: 48px;
          font-weight: 800;
          margin: 20px 0;
          text-align: center;
        }

        .price-tag-modern small {
          font-size: 24px;
          font-weight: 400;
          opacity: 0.9;
        }

        .register-btn-modern {
          width: 100%;
          padding: 18px;
          background: white;
          color: #26225B;
          border: none;
          border-radius: 50px;
          font-size: 18px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .register-btn-modern:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255, 255, 255, 0.3);
          background: #FFD700;
        }

        .quantity-selector {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 15px;
          margin: 20px 0;
        }

        .qty-btn {
          width: 40px;
          height: 40px;
          border: 2px solid white;
          background: transparent;
          color: white;
          border-radius: 50%;
          font-size: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .qty-btn:hover {
          background: white;
          color: #26225B;
        }

        .qty-display {
          font-size: 24px;
          font-weight: 700;
          min-width: 40px;
          text-align: center;
        }

        .info-card {
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          margin-top: 30px;
        }

        .info-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .info-list li {
          padding: 15px 0;
          border-bottom: 1px solid #f0f0f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .info-list li:last-child {
          border-bottom: none;
        }

        .info-list li i {
          color: #667eea;
          font-size: 20px;
          margin-right: 12px;
        }

        .info-label {
          display: flex;
          align-items: center;
          color: #666;
          font-weight: 600;
        }

        .info-value {
          color: #26225B;
          font-weight: 700;
        }

        .course-intro-box {
          background: linear-gradient(135deg, #26225B 0%, #4a4584 100%);
          padding: 40px;
          border-radius: 20px;
          color: white;
          box-shadow: 0 10px 40px rgba(38, 34, 91, 0.3);
          margin-bottom: 30px;
          position: relative;
          overflow: hidden;
        }

        .course-intro-box::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -50px;
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
        }

        .course-intro-header {
          position: relative;
          z-index: 1;
        }

        .course-intro-title {
          font-size: 32px;
          font-weight: 800;
          margin-bottom: 20px;
          color: white;
          line-height: 1.3;
        }

        .course-intro-badges {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 25px;
        }

        .course-badge {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          padding: 10px 18px;
          border-radius: 25px;
          color: white;
          font-size: 13px;
          font-weight: 600;
          border: 1px solid rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
        }

        .course-badge:hover {
          background: rgba(255, 255, 255, 0.3);
          border-color: rgba(255, 255, 255, 0.5);
          transform: translateY(-2px);
        }

        .course-badge i {
          font-size: 14px;
        }

        .course-intro-description {
          font-size: 16px;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.95);
          margin-bottom: 0;
          position: relative;
          z-index: 1;
        }

        .course-remove-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          color: white;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          transition: all 0.3s ease;
          z-index: 2;
        }

        .course-remove-btn:hover {
          background: rgba(255, 255, 255, 0.4);
          transform: scale(1.1);
        }

        .speaker-card {
          display: block;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .speaker-card-content {
          padding: 30px;
          background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
          border-radius: 15px;
          border: 2px solid #667eea;
          display: flex;
          align-items: center;
          gap: 20px;
          transition: all 0.3s ease;
        }

        .speaker-card:hover .speaker-card-content {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
          border-color: #764ba2;
        }

        .speaker-image-wrapper {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 3px solid #667eea;
          transition: all 0.3s ease;
        }

        .speaker-card:hover .speaker-image-wrapper {
          border-color: #764ba2;
          transform: scale(1.08);
        }

        .speaker-image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .speaker-info h4 {
          color: #26225B;
          margin-bottom: 5px;
          font-size: 24px;
          transition: all 0.3s ease;
        }

        .speaker-card:hover .speaker-info h4 {
          color: #667eea;
        }

        .registration-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          backdrop-filter: blur(10px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: fadeIn 0.3s ease;
        }

        .registration-modal {
          background: white;
          border-radius: 20px;
          padding: 40px;
          max-width: 600px;
          width: 100%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          position: relative;
          animation: slideUp 0.3s ease;
        }

        .modal-header {
          text-align: center;
          margin-bottom: 30px;
          padding-bottom: 20px;
          border-bottom: 2px solid #f0f0f0;
        }

        .modal-title {
          color: #26225B;
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 10px;
        }

        .modal-subtitle {
          color: #666;
          font-size: 16px;
          margin: 0;
        }

        .close-btn {
          position: absolute;
          top: 20px;
          right: 20px;
          background: #f8f9fa;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #666;
          transition: all 0.3s ease;
        }

        .close-btn:hover {
          background: #e9ecef;
          color: #26225B;
          transform: scale(1.1);
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group.full-width {
          grid-column: 1 / -1;
        }

        .form-label {
          display: block;
          color: #26225B;
          font-weight: 600;
          margin-bottom: 8px;
          font-size: 14px;
        }

        .form-input {
          width: 100%;
          padding: 15px 20px;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          font-size: 16px;
          transition: all 0.3s ease;
          background: #f8f9fa;
        }

        .form-input:focus {
          outline: none;
          border-color: #667eea;
          background: white;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-select {
          width: 100%;
          padding: 15px 20px;
          border: 2px solid #e9ecef;
          border-radius: 12px;
          font-size: 16px;
          transition: all 0.3s ease;
          background: #f8f9fa;
          cursor: pointer;
        }

        .form-select:focus {
          outline: none;
          border-color: #667eea;
          background: white;
          box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .submit-btn {
          margin-top: 20px;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        .course-summary {
          background: linear-gradient(135deg, #f8f9ff 0%, #f0f4ff 100%);
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 30px;
          border-left: 4px solid #667eea;
        }

        .course-summary h4 {
          color: #26225B;
          margin-bottom: 10px;
          font-size: 18px;
        }

        .course-summary p {
          color: #666;
          margin: 0;
          font-size: 14px;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .sticky-nav {
            top: 60px;
          }

          .nav-tabs-scroll {
            flex-wrap: nowrap;
          }
          
          .treatment-list {
            grid-template-columns: 1fr;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }

          .credit-summary {
            grid-template-columns: 1fr 1fr;
          }

          .registration-modal {
            padding: 30px 20px;
            margin: 10px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .modal-title {
            font-size: 24px;
          }
        }
      `}</style>
      
      <section className="courses-details-section section-padding pt-0">
        <div className="container">
          <div className="courses-details-wrapper">
            <div className="row g-4">
              <div className="col-lg-8">
                <div className="course-intro-box">
                  {course.bannerImage && (
                    <div className="course-banner mb-4">
                      <img 
                        src={`${BACKEND_URL}${course.bannerImage}`} 
                        alt={course.title} 
                        className="w-100 rounded-3" 
                        style={{ maxHeight: '400px', objectFit: 'cover', width: '100%', borderRadius: '15px' }}
                      />
                    </div>
                  )}
                  <div className="course-intro-header">
                    <h1 className="course-intro-title">
                      {course.title}
                    </h1>
                    <div className="course-intro-badges">
                      <div className="course-badge">
                        <i className="fas fa-building"></i>
                        <span>{course.organizer?.organizationName || 'MedHub'}</span>
                      </div>
                      <div className="course-badge">
                        <i className="fas fa-certificate"></i>
                        <span>{course.credits?.[0]?.value || 0} {course.credits?.[0]?.type || 'Credits'}</span>
                      </div>
                      <div className="course-badge">
                        <i className="fas fa-calendar-alt"></i>
                        <span>{new Date(course.startDate).toLocaleDateString()} - {new Date(course.endDate).toLocaleDateString()}</span>
                      </div>
                      <div className="course-badge">
                        <i className="fas fa-users"></i>
                        <span>{course.eventType || 'In-Person'}</span>
                      </div>
                    </div>
                    <p className="course-intro-description">
                      {course.description}
                    </p>
                  </div>
                </div>

                <div className="sticky-nav">
                  <div className="nav-tabs-scroll">
                    <button 
                      className={`nav-tab-btn ${activeSection === 'overview' ? 'active' : ''}`}
                      onClick={() => scrollToSection('overview')}
                    >
                      Overview
                    </button>
                    {course?.contentType !== 'richtext' && course?.contentType !== 'richText' && (
                      <button 
                        className={`nav-tab-btn ${activeSection === 'accreditation' ? 'active' : ''}`}
                        onClick={() => scrollToSection('accreditation')}
                      >
                        ACCREDITATION & CREDITS
                      </button>
                    )}
                    <button 
                      className={`nav-tab-btn ${activeSection === 'fee' ? 'active' : ''}`}
                      onClick={() => scrollToSection('fee')}
                    >
                      FEE
                    </button>
                    <button 
                      className={`nav-tab-btn ${activeSection === 'speakers' ? 'active' : ''}`}
                      onClick={() => scrollToSection('speakers')}
                    >
                      Speakers
                    </button>
                  </div>
                </div>

                <div id="overview" className="content-section">
                  <h3 className="section-title">Overview</h3>
                  {course.contentType === 'richtext' || course.contentType === 'richText' ? (
                    <div 
                      className="course-description"
                      style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}
                      dangerouslySetInnerHTML={{ __html: course.description }} 
                    />
                  ) : (
                    <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', marginBottom: '20px' }}>
                      {course.description}
                    </p>
                  )}
                </div>

                {course.contentType !== 'richtext' && course.contentType !== 'richText' && (
                  <>
                    <div id="topics" className="content-section">
                      <h3 className="section-title">Topics Covered</h3>
                      
                      
                      {newDrugs.map((topic: any, index: number) => (
                        <div key={index} className="drug-item">
                          <h4>{topic.title}</h4>
                          <p>{topic.description}</p>
                        </div>
                      ))}

                      <h4 style={{ color: '#26225B', fontSize: '24px', fontWeight: '700', marginTop: '40px', marginBottom: '20px' }}>
                        New Treatments and Emerging Clinical Concepts
                      </h4>
                      <div className="treatment-list">
                        {treatments.map((treatment: string, index: number) => (
                          <div key={index} className="treatment-item">
                          <i className="fas fa-check-circle"></i>
                          <span>{treatment}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div id="objectives" className="content-section">
                      <h3 className="section-title">Educational Objectives</h3>
                      <p style={{ fontSize: '16px', lineHeight: '1.8', color: '#555', marginBottom: '30px' }}>
                        Upon completion of this activity, participants should be able to:
                      </p>
                        {objectives.map((objective: string, index: number) => (
                        <div key={index} className="objective-item">
                          <i className="fas fa-graduation-cap"></i>
                          <p style={{ margin: 0, lineHeight: 1.6 }}>{objective}</p>
                        </div>
                        ))}
                    </div>

                    <div id="features" className="content-section">
                      <h3 className="section-title">Key Features</h3>
                      <h4 style={{ color: '#26225B', fontSize: '22px', fontWeight: '700', marginBottom: '20px' }}>
                        Ultimate Convenience & Accessibility
                      </h4>
                      <div className="features-grid">
                        <div className="feature-box">
                          <i className="fas fa-mobile-alt"></i>
                          <h4>Mobile App Access</h4>
                          <p>Study during commutes, between patients, or at home</p>
                        </div>
                        <div className="feature-box">
                          <i className="fas fa-couch"></i>
                          <h4>Learn Anywhere, Anytime</h4>
                          <p>Hospital cafeteria, call room, or your couch</p>
                        </div>
                        <div className="feature-box">
                          <i className="fas fa-pause-circle"></i>
                          <h4>Pause & Resume</h4>
                          <p>Pick up exactly where you left off on any device</p>
                        </div>
                      </div>
                    </div>

                    <div id="accreditation" className="content-section">
                      <h3 className="section-title">Accreditation & Credits</h3>
                      
                      {course.accreditation && course.accreditation.length > 0 ? (
                        course.accreditation.map((acc: any, index: number) => (
                          <div key={index} className="accreditation-card">
                            <h4><i className="fas fa-certificate"></i> {acc.title}</h4>
                            <p style={{ lineHeight: '1.8', marginBottom: '0' }}>
                              {acc.description}
                            </p>
                          </div>
                        ))
                      ) : (
                        <p>No accreditation information available.</p>
                      )}

                      {course.creditSummary && (
                        <>
                          <h4 style={{ color: '#26225B', fontSize: '24px', fontWeight: '700', marginTop: '40px', marginBottom: '20px' }}>
                            Credit Summary
                          </h4>
                          <div className="credit-summary">
                             <p>{course.creditSummary}</p>
                          </div>
                        </>
                      )}
                    </div>
                  </>
                )}

                <div id="fee" className="content-section">
                  <h3 className="section-title">Registration Fee</h3>
                  <div style={{ padding: '40px', background: 'linear-gradient(135deg, #26225B 0%, #4a4584 100%)', 
                               borderRadius: '20px', textAlign: 'center', color: 'white' }}>
                    <div style={{ marginBottom: '20px' }}>
                      <i className="fas fa-tag" style={{ fontSize: '50px', color: '#FFD700' }}></i>
                    </div>
                    <h4 style={{ fontSize: '20px', marginBottom: '15px', opacity: '0.9' }}>Course Registration</h4>
                    <div style={{ fontSize: '56px', fontWeight: '800', marginBottom: '20px' }}>
                      <span style={{ fontSize: '28px', fontWeight: '400' }}>AED</span> {course.price?.toFixed(2) || '0.00'}
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.1)', padding: '20px', borderRadius: '10px', marginBottom: '25px' }}>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, textAlign: 'left' }}>
                        <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                          <i className="fas fa-check-circle" style={{ color: '#FFD700', marginRight: '10px' }}></i>
                          <strong>{course.credits?.[0]?.value || 0} {course.credits?.[0]?.type || 'Credits'}</strong> included
                        </li>
                      </ul>
                    </div>
                    <button 
                      onClick={openRegistrationForm}
                      style={{ width: '100%', padding: '18px', background: 'white', color: '#26225B', 
                               border: 'none', borderRadius: '50px', fontSize: '18px', fontWeight: '700', 
                               cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      <i className="fas fa-user-plus"></i> Register Now
                    </button>
                    <p style={{ marginTop: '15px', fontSize: '13px', opacity: '0.8', marginBottom: '0' }}>
                      <i className="fas fa-shield-alt"></i> Secure payment processing
                    </p>
                  </div>
                </div>

                <div id="speakers" className="content-section">
                  <h3 className="section-title">Speakers</h3>
                  {course.speakers && course.speakers.length > 0 ? (
                    course.speakers.map((speaker: any, index: number) => (
                      <Link key={index} href={`/instructor-details/${speaker._id}`} className="speaker-card mb-3">
                        <div className="speaker-card-content">
                          <div className="speaker-image-wrapper">
                            <img 
                              src={speaker.profileImage ? `${BACKEND_URL}${speaker.profileImage}` : "/assets/img/testimonial/Testimonial-home/512x5122.png"} 
                              alt={speaker.name} 
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = "/assets/img/testimonial/Testimonial-home/512x5122.png";
                              }}
                            />
                          </div>
                          <div className="speaker-info">
                            <h4 style={{ marginBottom: '5px' }}>{speaker.name}</h4>
                            <p style={{ color: '#666', margin: 0, fontSize: '16px', fontWeight: '600' }}>{speaker.jobTitle}</p>
                          </div>
                        </div>
                      </Link>
                    ))
                  ) : (
                    <p>No speakers listed.</p>
                  )}
                </div>

                <div id="audience" className="content-section">
                  <h3 className="section-title">Target Audience</h3>
                  <div className="badge-grid">
                    {targetAudience.map((audience: string, index: number) => (
                      <span key={index} className="badge-item">{audience}</span>
                    ))}
                  </div>
                </div>

                <div id="specialties" className="content-section">
                  <h3 className="section-title">Specialties</h3>
                  <div className="badge-grid">
                    {specialties.map((specialty: string, index: number) => (
                      <span key={index} className="badge-item">{specialty}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="pricing-card-modern">
                  <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <i className="fas fa-medal" style={{ fontSize: '50px', color: '#FFD700' }}></i>
                  </div>
                  <h3 style={{ textAlign: 'center', color: 'white', marginBottom: '10px', fontSize: '22px' }}>{course.title}</h3>
                  <div className="price-tag-modern">
                    <small>AED</small> {course.price?.toFixed(2) || '0.00'}
                  </div>
                  
                  <div className="quantity-selector">
                    <button className="qty-btn" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
                      <i className="fas fa-minus"></i>
                    </button>
                    <span className="qty-display">{quantity}</span>
                    <button className="qty-btn" onClick={() => setQuantity(quantity + 1)}>
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>

                  <div style={{ textAlign: 'center', padding: '20px 0', borderTop: '1px solid rgba(255,255,255,0.2)',
                              borderBottom: '1px solid rgba(255,255,255,0.2)', margin: '20px 0' }}>
                    <div style={{ fontSize: '14px', opacity: 0.8, marginBottom: '8px' }}>Total Amount</div>
                    <div style={{ fontSize: '32px', fontWeight: 'bold' }}>AED {((course.price || 0) * quantity).toFixed(2)}</div>
                  </div>

                  <button className="register-btn-modern" onClick={openRegistrationForm}>
                    <i className="fas fa-user-plus"></i> Register Now
                  </button>
                  
                  <p style={{ textAlign: 'center', fontSize: '13px', marginTop: '20px', opacity: 0.9, marginBottom: '0' }}>
                    <i className="fas fa-shield-alt"></i> Secure payment processing
                  </p>
                </div>

                <div className="info-card">
                  <h5 style={{ color: '#26225B', marginBottom: '20px', fontSize: '20px', fontWeight: 'bold' }}>
                    <i className="fas fa-info-circle" style={{ color: '#667eea' }}></i> Course Information
                  </h5>
                  <ul className="info-list">
                    <li>
                      <span className="info-label">
                        <i className="fas fa-chalkboard-teacher"></i>
                        Faculty
                      </span>
                      <span className="info-value">{course.speakers?.[0]?.name || 'TBA'}</span>
                    </li>
                    <li>
                      <span className="info-label">
                        <i className="fas fa-award"></i>
                        CME Credits
                      </span>
                      <span className="info-value">{course.credits?.[0]?.value || 0} Credits</span>
                    </li>
                    <li>
                      <span className="info-label">
                        <i className="fas fa-calendar-check"></i>
                        Duration
                      </span>
                      <span className="info-value">{Math.ceil((new Date(course.endDate).getTime() - new Date(course.startDate).getTime()) / (1000 * 60 * 60 * 24))} Days</span>
                    </li>
                    <li>
                      <span className="info-label">
                        <i className="fas fa-video"></i>
                        Format
                      </span>
                      <span className="info-value">{course.eventType || 'In-Person'}</span>
                    </li>
                    <li>
                      <span className="info-label">
                        <i className="fas fa-globe"></i>
                        Specialty
                      </span>
                      <span className="info-value">Internal Medicine</span>
                    </li>
                    <li>
                      <span className="info-label">
                        <i className="fas fa-calendar-alt"></i>
                        Available
                      </span>
                      <span className="info-value">Oct 2025 - Oct 2027</span>
                    </li>
                    <li>
                      <span className="info-label">
                        <i className="fas fa-signal"></i>
                        Level
                      </span>
                      <span className="info-value">All Levels</span>
                    </li>
                    <li>
                      <span className="info-label">
                        <i className="fas fa-certificate"></i>
                        Certificate
                      </span>
                      <span className="info-value">AMA PRA Category 1</span>
                    </li>
                  </ul>
                  <Link href="/register" className="share-btn" style={{ marginTop: '20px', display: 'block', textAlign: 'center', padding: '12px', background: '#667eea', color: 'white', borderRadius: '10px', textDecoration: 'none', fontWeight: '600', transition: 'all 0.3s ease' }}>
                    <i className="fas fa-share"></i> Share this course
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form Modal */}
      {showRegistrationForm && (
        <div className="registration-overlay" onClick={closeRegistrationForm}>
          <div className="registration-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeRegistrationForm}>
              <i className="fas fa-times"></i>
            </button>
            
            <div className="modal-header">
              <h2 className="modal-title">Course Registration</h2>
              <p className="modal-subtitle">Join Internal Medicine/Primary Care Updates and CME</p>
            </div>

            <div className="course-summary">
              <h4>Course Details</h4>
              <p><strong>Price:</strong> AED {(1299 * quantity).toFixed(2)} • <strong>Credits:</strong> 20.25 CME • <strong>Duration:</strong> 2 Years Access</p>
            </div>

            <form onSubmit={handleFormSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="Enter your first name"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="Enter your last name"
                  />
                </div>
                
                <div className="form-group full-width">
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Profession *</label>
                  <select
                    name="profession"
                    value={formData.profession}
                    onChange={handleInputChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select your profession</option>
                    <option value="physician">Physician</option>
                    <option value="nurse">Nurse</option>
                    <option value="physician-assistant">Physician Assistant</option>
                    <option value="nurse-practitioner">Nurse Practitioner</option>
                    <option value="resident">Resident</option>
                    <option value="other">Other Healthcare Professional</option>
                  </select>
                </div>
                
                <div className="form-group full-width">
                  <label className="form-label">Organization/Hospital</label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your organization or hospital name"
                  />
                </div>
                
                <div className="form-group">
                  <label className="form-label">Specialization</label>
                  <select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleInputChange}
                    className="form-select"
                  >
                    <option value="">Select specialization</option>
                    <option value="internal-medicine">Internal Medicine</option>
                    <option value="family-medicine">Family Medicine</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="nephrology">Nephrology</option>
                    <option value="endocrinology">Endocrinology</option>
                    <option value="primary-care">Primary Care</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label className="form-label">License Number</label>
                  <input
                    type="text"
                    name="licenseNumber"
                    value={formData.licenseNumber}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Enter your license number"
                  />
                </div>
              </div>
              
              <button type="submit" className="theme-btn submit-btn">
                <i className="fas fa-credit-card"></i> Complete Registration
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CoursesDetailsArea;
