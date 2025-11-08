'use client';

import Link from 'next/link';
import React from 'react';

const InstructorDetailsArea = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [isAchievementsModalOpen, setIsAchievementsModalOpen] = React.useState(false);
  const previousBodyOverflow = React.useRef<string | null>(null);
  React.useEffect(() => {
    const shouldLockScroll = isModalOpen || isAchievementsModalOpen;
    if (shouldLockScroll) {
      if (previousBodyOverflow.current === null) {
        previousBodyOverflow.current = document.body.style.overflow;
      }
      document.body.style.overflow = 'hidden';
    } else {
      if (previousBodyOverflow.current !== null) {
        document.body.style.overflow = previousBodyOverflow.current;
        previousBodyOverflow.current = null;
      } else {
        document.body.style.overflow = '';
      }
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen, isAchievementsModalOpen]);
  const modalOverlayStyle: React.CSSProperties = {
    position: 'fixed',
    inset: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(8, 15, 40, 0.78)',
    backdropFilter: 'blur(8px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
    zIndex: 1000,
    overflowY: 'auto'
  };
  const modalContentStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '540px',
    maxHeight: 'calc(100vh - 80px)',
    borderRadius: '28px',
    background: 'linear-gradient(160deg, #ffffff 0%, #f5f7ff 100%)',
    boxShadow: '0 32px 80px rgba(15, 23, 42, 0.35)',
    padding: '40px',
    position: 'relative',
    overflowY: 'auto'
  };
  const achievementsModalContentStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '720px',
    maxHeight: 'calc(100vh - 80px)',
    borderRadius: '32px',
    background: 'linear-gradient(155deg, #ffffff 0%, #eef2ff 100%)',
    boxShadow: '0 36px 90px rgba(15, 23, 42, 0.38)',
    padding: '44px',
    position: 'relative',
    overflowY: 'auto'
  };
  const modalHeaderStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    marginBottom: '28px'
  };
  const modalCloseButtonStyle: React.CSSProperties = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    border: 'none',
    background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
    color: '#ffffff',
    fontSize: '18px',
    cursor: 'pointer',
    boxShadow: '0 12px 24px rgba(37, 99, 235, 0.25)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
  };
  const formGroupStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  };
  const inputStyle: React.CSSProperties = {
    borderRadius: '16px',
    border: '1px solid rgba(148, 163, 184, 0.35)',
    background: 'rgba(255, 255, 255, 0.85)',
    padding: '14px 18px',
    fontSize: '15px',
    color: '#0f172a',
    outline: 'none',
    boxShadow: '0 6px 20px rgba(15, 23, 42, 0.08)'
  };
  const submitButtonStyle: React.CSSProperties = {
    border: 'none',
    borderRadius: '999px',
    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
    color: '#ffffff',
    padding: '16px 24px',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 18px 28px rgba(74, 108, 247, 0.35)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease'
  };
  const [activeAchievementIndex, setActiveAchievementIndex] = React.useState<number | null>(0);
  const achievements = [
    {
      year: '2024',
      title: 'Global Family Medicine Educator',
      description: 'Recognized internationally for designing outcome-driven CME pathways now used by 40+ healthcare systems.'
    },
    {
      year: '2023',
      title: 'Excellence in Telehealth Innovation',
      description: 'Led the roll-out of a hybrid care model integrating remote monitoring and CME-accredited practitioner training.'
    },
    {
      year: '2022',
      title: 'Patient-Centered Care Pioneer',
      description: 'Achieved 98% patient satisfaction by championing collaborative care pathways and interprofessional education.'
    },
    {
      year: '2021',
      title: 'Clinical Leadership Fellow',
      description: 'Mentored multi-disciplinary fellows on evidence-based practice and compassionate leadership.'
    },
    {
      year: '2020',
      title: 'Healthcare Innovation Grant Recipient',
      description: 'Secured funding for a digital CME platform expanding access for rural primary care physicians.'
    },
    {
      year: '2019',
      title: 'Outstanding Mentor Award',
      description: 'Guided residents through personalized learning plans that delivered measurable competency gains.'
    },
    {
      year: '2018',
      title: 'Top CME Speaker',
      description: 'Delivered keynote sessions on preventative care adopted by regional healthcare ministries.'
    },
    {
      year: '2017',
      title: 'Community Health Champion',
      description: 'Co-created outreach programs expanding access to primary care in underserved communities.'
    },
    {
      year: '2015',
      title: 'Evidence-Based Practice Advocate',
      description: 'Published protocols aligning continuing education with precision medicine breakthroughs.'
    },
    {
      year: '2012',
      title: 'Resident Teaching Excellence',
      description: 'Recognized for trailblazing small-group teaching clinics that improved resident outcomes.'
    }
  ];

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
      case 'Webcast':
        return {
          background: 'linear-gradient(135deg, #dc3545 0%, #c82333 100%)',
          color: 'white',
          icon: 'fas fa-video'
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
      {/* Main Instructor Details Section */}
      <section className="team-details-section section-padding pt-0">
            <div className="container">
                <div className="team-details-wrapper">
                    <div className="team-details-items">
                        <div className="details-image">
                            <img src="assets/img/testimonial/Testimonial-home/512x5122.png" alt="Dr. David R. Polizzi MD" />
                            <div
                              style={{
                                marginTop: '26px',
                                padding: '24px',
                                borderRadius: '18px',
                                border: '1px solid rgba(148, 163, 184, 0.25)',
                                background: '#ffffff',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '18px'
                              }}
                            >
                              <h3
                                style={{
                                  margin: 0,
                                  fontSize: '20px',
                                  fontWeight: 600,
                                  color: '#0f172a'
                                }}
                              >
                                Achievements
                              </h3>
                              <div
                                style={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                  gap: '12px'
                                }}
                              >
                                {achievements.slice(0, 3).map((achievement) => (
                                  <div
                                    key={`${achievement.year}-${achievement.title}`}
                                    style={{
                                      display: 'flex',
                                      gap: '14px',
                                      alignItems: 'flex-start',
                                      fontSize: '14px'
                                    }}
                                  >
                                    <span
                                      style={{
                                        minWidth: '64px',
                                        color: '#1d4ed8',
                                        fontWeight: 600,
                                        letterSpacing: '0.04em'
                                      }}
                                    >
                                      {achievement.year}
                                    </span>
                                    <span
                                      style={{
                                        color: '#1f2937',
                                        lineHeight: 1.5
                                      }}
                                    >
                                      {achievement.title}
                                    </span>
                                  </div>
                                ))}
                              </div>
                              <button
                                type="button"
                                onClick={() => {
                                  setActiveAchievementIndex(0);
                                  setIsAchievementsModalOpen(true);
                                }}
                                style={{
                                  alignSelf: 'flex-start',
                                  border: '1px solid #2563eb',
                                  borderRadius: '999px',
                                  background: 'transparent',
                                  color: '#2563eb',
                                  padding: '10px 20px',
                                  fontSize: '14px',
                                  fontWeight: 600,
                                  cursor: 'pointer'
                                }}
                              >
                                View all Achievements
                              </button>
                            </div>
                        </div>
                        <div className="team-details-content">
                            <h2>
                                Dr. David R. Polizzi MD
                            </h2>
                            <span>Family Medicine</span>
                            <p style={{ marginTop: '10px', marginBottom: '20px', fontSize: '14px', color: '#666' }}>
                                Hampton, New Jersey, United States of America
                            </p>
                            <div className="details-area" style={{ marginBottom: '30px' }}>
                                <button
                                  type="button"
                                  className="theme-btn"
                                  style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '14px 30px',
                                    borderRadius: '999px',
                                    border: 'none',
                                    background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                                    boxShadow: '0 16px 30px rgba(79, 70, 229, 0.35)',
                                    fontSize: '15px',
                                    fontWeight: 600,
                                    cursor: 'pointer'
                                  }}
                                  onClick={() => setIsModalOpen(true)}
                                >
                                  <i className="fas fa-comments" style={{ fontSize: '16px' }}></i>
                                  Contact
                                </button>
                            </div>
                            <h3>
                                About
                            </h3>
                            <p className="mt-4">
                                Dr. David R. Polizzi, MD, is a Family Medicine Physician at Hunterdon Health. He received his medical degree from Rutgers New Jersey Medical School and is board-certified in Family Medicine. With extensive experience in primary care and internal medicine, Dr. Polizzi has dedicated his career to providing comprehensive, patient-centered care and advancing medical education in his field.
                            </p>
                            <p className="mt-3">
                                Dr. Polizzi is actively involved in continuing medical education and professional development, regularly participating in seminars, webinars, and speaking engagements focused on the latest advances in family medicine and primary care. His commitment to lifelong learning and professional excellence enables him to stay at the forefront of medical practice and provide evidence-based care to his patients.
                            </p>
                            <p className="mt-3">
                                Beyond his clinical practice, Dr. Polizzi is passionate about mentoring healthcare professionals and contributing to medical education initiatives. He believes in fostering collaborative relationships among healthcare providers and sharing knowledge to improve patient outcomes and strengthen the healthcare community.
                            </p>
                        </div>
                    </div>

                    {/* Events & Activities Section - Part of Instructor Details */}
                    <div className="events-activities-section" style={{ marginTop: '60px' }}>
                        <div className="section-header">
                            <h3 style={{ marginBottom: '40px', fontSize: '28px', fontWeight: '600' }}>Events & Activities</h3>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items" style={{ position: 'relative' }}>
                                    <div className="courses-card-items">
                                        <div className="courses-image" style={{ position: 'relative' }}>
                                            <img src="assets/img/courses/01.jpg" alt="img" />
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
                                                Oct 01, 2025
                                            </div>
                                            <div className="format-badge" style={{
                                                ...getFormatBadgeStyle('In-Person'),
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
                                                <i className={getFormatBadgeStyle('In-Person').icon} style={{ marginRight: '4px' }}></i>
                                                In-Person
                                            </div>
                                        </div>
                                        <div className="courses-content" style={{ paddingTop: '25px' }}>
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">General and Internal Medicine</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h5>
                                                <Link href="/courses-details">
                                                    Internal Medicine/Primary care Updates and CME
                                                </Link>
                                            </h5>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Dr. David R. Polizzi MD</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    15 CME Credits
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    120 Students
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
                                            Oct 01, 2025
                                        </div>
                                        <div className="format-badge" style={{
                                            ...getFormatBadgeStyle('In-Person'),
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
                                            <i className={getFormatBadgeStyle('In-Person').icon} style={{ marginRight: '4px' }}></i>
                                            In-Person
                                        </div>
                                        <div className="courses-content" style={{ paddingTop: '25px' }}>
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">General and Internal Medicine</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h5>
                                                <Link href="/courses-details">
                                                    Internal Medicine/Primary care Updates and CME
                                                </Link>
                                            </h5>
                                            <h4>AED 2,500</h4>
                                            <span>
                                                Comprehensive training for internal medicine and primary care professionals
                                            </span>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Dr. David R. Polizzi MD</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-clock"></i>
                                                    18h 30min
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    120 Students
                                                </li>
                                            </ul>
                                            <Link href="/courses-details" className="theme-btn yellow-btn">Enroll Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items" style={{ position: 'relative' }}>
                                    <div className="courses-card-items">
                                        <div className="courses-image" style={{ position: 'relative' }}>
                                            <img src="assets/img/courses/02.jpg" alt="img" />
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
                                                Dec 15, 2025
                                            </div>
                                            <div className="format-badge" style={{
                                                ...getFormatBadgeStyle('In-Person'),
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
                                                <i className={getFormatBadgeStyle('In-Person').icon} style={{ marginRight: '4px' }}></i>
                                                In-Person
                                            </div>
                                        </div>
                                        <div className="courses-content" style={{ paddingTop: '25px' }}>
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Family Medicine</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h5>
                                                <Link href="/courses-details">
                                                    Advanced Family Medicine Workshop
                                                </Link>
                                            </h5>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Dr. David R. Polizzi MD</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    20 CME Credits
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    85 Students
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
                                            Dec 15, 2025
                                        </div>
                                        <div className="format-badge" style={{
                                            ...getFormatBadgeStyle('In-Person'),
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
                                            <i className={getFormatBadgeStyle('In-Person').icon} style={{ marginRight: '4px' }}></i>
                                            In-Person
                                        </div>
                                        <div className="courses-content" style={{ paddingTop: '25px' }}>
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Family Medicine</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h5>
                                                <Link href="/courses-details">
                                                    Advanced Family Medicine Workshop
                                                </Link>
                                            </h5>
                                            <h4>AED 3,200</h4>
                                            <span>
                                                Hands-on workshop for advanced family medicine practices and techniques
                                            </span>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Dr. David R. Polizzi MD</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-clock"></i>
                                                    24h 00min
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    85 Students
                                                </li>
                                            </ul>
                                            <Link href="/courses-details" className="theme-btn yellow-btn">Enroll Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items" style={{ position: 'relative' }}>
                                    <div className="courses-card-items">
                                        <div className="courses-image" style={{ position: 'relative' }}>
                                            <img src="assets/img/courses/03.jpg" alt="img" />
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
                                                Feb 20, 2026
                                            </div>
                                            <div className="format-badge" style={{
                                                ...getFormatBadgeStyle('Hybrid'),
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
                                                <i className={getFormatBadgeStyle('Hybrid').icon} style={{ marginRight: '4px' }}></i>
                                                Hybrid
                                            </div>
                                        </div>
                                        <div className="courses-content" style={{ paddingTop: '25px' }}>
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Primary Care</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h5>
                                                <Link href="/courses-details">
                                                    Primary Care Excellence Symposium
                                                </Link>
                                            </h5>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Dr. David R. Polizzi MD</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    25 CME Credits
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    200 Students
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
                                            Feb 20, 2026
                                        </div>
                                        <div className="format-badge" style={{
                                            ...getFormatBadgeStyle('Hybrid'),
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
                                            <i className={getFormatBadgeStyle('Hybrid').icon} style={{ marginRight: '4px' }}></i>
                                            Hybrid
                                        </div>
                                        <div className="courses-content" style={{ paddingTop: '25px' }}>
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Primary Care</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h5>
                                                <Link href="/courses-details">
                                                    Primary Care Excellence Symposium
                                                </Link>
                                            </h5>
                                            <h4>AED 4,800</h4>
                                            <span>
                                                Comprehensive symposium covering excellence in primary care delivery and patient management
                                            </span>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Dr. David R. Polizzi MD</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-clock"></i>
                                                    32h 15min
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    200 Students
                                                </li>
                                            </ul>
                                            <Link href="/courses-details" className="theme-btn yellow-btn">Enroll Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {isModalOpen && (
          <div
            style={modalOverlayStyle}
            onClick={() => setIsModalOpen(false)}
          >
            <div
              style={modalContentStyle}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
            >
              <button
                type="button"
                style={modalCloseButtonStyle}
                onClick={() => setIsModalOpen(false)}
                aria-label="Close contact modal"
              >
                <i className="fas fa-times"></i>
              </button>
              <div style={modalHeaderStyle}>
                <span style={{ fontSize: '12px', letterSpacing: '0.12em', fontWeight: 700, textTransform: 'uppercase', color: '#2563eb' }}>Connect</span>
                <h3 id="contact-modal-title" style={{ margin: 0, fontSize: '28px', fontWeight: 700, color: '#0f172a' }}>Reach out to Dr. David R. Polizzi MD</h3>
                <p style={{ margin: 0, fontSize: '15px', color: '#475569' }}>Share your details and we will get back to you shortly.</p>
              </div>
              <form
                onSubmit={(event: React.FormEvent<HTMLFormElement>) => event.preventDefault()}
                style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '18px' }}>
                  <div style={formGroupStyle}>
                    <label htmlFor="contact-full-name" style={{ fontSize: '13px', fontWeight: 600, color: '#1e293b' }}>Full Name</label>
                    <input id="contact-full-name" name="fullName" type="text" placeholder="Enter your full name" style={inputStyle} />
                  </div>
                  <div style={formGroupStyle}>
                    <label htmlFor="contact-email" style={{ fontSize: '13px', fontWeight: 600, color: '#1e293b' }}>Email Address</label>
                    <input id="contact-email" name="email" type="email" placeholder="you@example.com" style={inputStyle} />
                  </div>
                  <div style={formGroupStyle}>
                    <label htmlFor="contact-phone" style={{ fontSize: '13px', fontWeight: 600, color: '#1e293b' }}>Phone Number</label>
                    <input id="contact-phone" name="phone" type="tel" placeholder="(000) 000-0000" style={inputStyle} />
                  </div>
                  <div style={formGroupStyle}>
                    <label htmlFor="contact-reason" style={{ fontSize: '13px', fontWeight: 600, color: '#1e293b' }}>Reason for enquiry</label>
                    <select id="contact-reason" name="reason" defaultValue="" style={{ ...inputStyle, appearance: 'none' }}>
                      <option value="" disabled>Select an option</option>
                      <option value="consultation">Consultation request</option>
                      <option value="speaking">Speaking opportunity</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div style={formGroupStyle}>
                  <label htmlFor="contact-message" style={{ fontSize: '13px', fontWeight: 600, color: '#1e293b' }}>Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Share a brief overview of how we can help"
                    style={{ ...inputStyle, minHeight: '140px', resize: 'vertical' }}
                  ></textarea>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <button type="submit" style={submitButtonStyle}>Send Message</button>
                  <span style={{ fontSize: '12px', color: '#64748b', textAlign: 'center' }}>By submitting, you consent to having a representative contact you about your enquiry.</span>
                </div>
              </form>
            </div>
          </div>
        )}
        {isAchievementsModalOpen && (
          <div
            style={modalOverlayStyle}
            onClick={() => {
              setIsAchievementsModalOpen(false);
              setActiveAchievementIndex(0);
            }}
          >
            <div
              style={achievementsModalContentStyle}
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="achievements-modal-title"
            >
              <button
                type="button"
                style={modalCloseButtonStyle}
                onClick={() => {
                  setIsAchievementsModalOpen(false);
                  setActiveAchievementIndex(0);
                }}
                aria-label="Close achievements modal"
              >
                <i className="fas fa-times"></i>
              </button>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <span style={{ fontSize: '12px', letterSpacing: '0.12em', fontWeight: 700, textTransform: 'uppercase', color: '#2563eb' }}>Milestones</span>
                  <h3 id="achievements-modal-title" style={{ margin: 0, fontSize: '28px', fontWeight: 700, color: '#0f172a' }}>Comprehensive Achievement Timeline</h3>
                  <p style={{ margin: 0, fontSize: '15px', color: '#475569' }}>Expand each milestone to read the full story behind the recognition.</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}
                >
                  {achievements.map((achievement, index) => {
                    const isActive = activeAchievementIndex === index;
                    return (
                      <div
                        key={`${achievement.year}-${achievement.title}`}
                        style={{
                          borderRadius: '16px',
                          border: '1px solid rgba(148, 163, 184, 0.28)',
                          background: isActive ? 'rgba(37, 99, 235, 0.06)' : '#ffffff',
                          overflow: 'hidden'
                        }}
                      >
                        <button
                          type="button"
                          onClick={() =>
                            setActiveAchievementIndex((current) => (current === index ? null : index))
                          }
                          style={{
                            width: '100%',
                            border: 'none',
                            background: 'transparent',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '16px 20px',
                            cursor: 'pointer'
                          }}
                        >
                          <span
                            style={{
                              fontSize: '15px',
                              fontWeight: 600,
                              color: '#0f172a',
                              textAlign: 'left'
                            }}
                          >
                            {achievement.year} - {achievement.title}
                          </span>
                          <i
                            className={isActive ? 'fas fa-chevron-up' : 'fas fa-chevron-down'}
                            style={{ color: '#2563eb', fontSize: '14px' }}
                          ></i>
                        </button>
                        {isActive && (
                          <div
                            style={{
                              padding: '0 20px 18px',
                              borderTop: '1px solid rgba(148, 163, 184, 0.24)'
                            }}
                          >
                            <p
                              style={{
                                margin: '16px 0 0',
                                fontSize: '14px',
                                lineHeight: 1.6,
                                color: '#475569'
                              }}
                            >
                              {achievement.description}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
    </>
  );
};

export default InstructorDetailsArea;