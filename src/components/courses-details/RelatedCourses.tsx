"use client"
import React from 'react';
import Link from 'next/link';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const RelatedCourses = () => {
  const relatedCourses = [
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
      image: "09.jpg",
      rating: 5,
      eventDate: new Date(2025, 11, 15),
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
      image: "10.jpg",
      rating: 5,
      eventDate: new Date(2026, 0, 22),
      format: "Online"
    },
    {
      id: 3,
      category: "Radiology",
      title: "Advanced MRI and CT Interpretation",
      instructor: "Dr. Sarah Johnson",
      credits: "22 CME Credits",
      students: "175 Students",
      price: "AED 6,000",
      duration: "32h 15min",
      description: "Expert-level training in advanced imaging interpretation",
      image: "11.jpg",
      rating: 5,
      eventDate: new Date(2026, 1, 18),
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
      image: "09.jpg",
      rating: 5,
      eventDate: new Date(2026, 2, 10),
      format: "In-Person"
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
      <style jsx>{`
        .swiper-button-prev-related:hover,
        .swiper-button-next-related:hover {
          transform: translateY(-50%) scale(1.1) !important;
          box-shadow: 0 6px 20px rgba(19, 99, 223, 0.5) !important;
        }
        
        .swiper-button-prev-related:active,
        .swiper-button-next-related:active {
          transform: translateY(-50%) scale(0.95) !important;
        }
        
        @media (max-width: 768px) {
          .swiper-button-prev-related {
            left: 10px !important;
            width: 40px !important;
            height: 40px !important;
          }
          
          .swiper-button-next-related {
            right: 10px !important;
            width: 40px !important;
            height: 40px !important;
          }
          
          .swiper-button-prev-related i,
          .swiper-button-next-related i {
            font-size: 14px !important;
          }
        }
      `}</style>
      <section className="popular-courses-section fix section-padding pt-0">
            <div className="container">
                <div className="section-title text-center">
                    <h2 className="wow fadeInUp">Related Courses / Events</h2>
                </div>
                <div style={{ position: 'relative' }}>
                <Swiper
                spaceBetween={30}
                speed={1500}
                loop={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false
                }}
                navigation={{
                  nextEl: ".swiper-button-next-related",
                  prevEl: ".swiper-button-prev-related",
                }}
                pagination={{
                  el: ".dot",
                  clickable: true
                }}
                modules={[ Autoplay, Navigation]}
                breakpoints={ {
                      1199: {
                          slidesPerView: 3,
                      },
                      991: {
                          slidesPerView: 2,
                      },
                      767: {
                          slidesPerView: 2,
                      },
                      575: {
                          slidesPerView: 1,
                      },
                      0: {
                          slidesPerView: 1,
                      },
                  }}
                 className="swiper courses-slider"> 

                        {relatedCourses.map((course) => (
                        <SwiperSlide key={course.id} className="swiper-slide">
                            <div className="courses-card-main-items" style={{ position: 'relative' }}>
                                <div className="courses-card-items">
                                    <div className="courses-image" style={{ position: 'relative' }}>
                                        <img src={`assets/img/courses/${course.image}`} alt={course.title} />
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
                                        <h3>
                                            <Link href="/courses-details">
                                                {course.title}
                                            </Link>
                                        </h3>
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
                                        <h3>
                                            <Link href="/courses-details">
                                                {course.title}
                                            </Link>
                                        </h3>
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
                        </SwiperSlide>
                        ))}
                    
                </Swiper>
                
                {/* Navigation Arrows */}
                <div className="swiper-button-prev-related" style={{
                    position: 'absolute',
                    top: '50%',
                    left: '-25px',
                    transform: 'translateY(-50%)',
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #1363DF 0%, #0B4FB8 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 10,
                    boxShadow: '0 4px 15px rgba(19, 99, 223, 0.3)',
                    transition: 'all 0.3s ease',
                    border: '2px solid white'
                }}>
                    <i className="fas fa-chevron-left" style={{ 
                        color: 'white', 
                        fontSize: '18px',
                        marginLeft: '-2px'
                    }}></i>
                </div>
                
                <div className="swiper-button-next-related" style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-25px',
                    transform: 'translateY(-50%)',
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #1363DF 0%, #0B4FB8 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 10,
                    boxShadow: '0 4px 15px rgba(19, 99, 223, 0.3)',
                    transition: 'all 0.3s ease',
                    border: '2px solid white'
                }}>
                    <i className="fas fa-chevron-right" style={{ 
                        color: 'white', 
                        fontSize: '18px',
                        marginLeft: '2px'
                    }}></i>
                </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default RelatedCourses;