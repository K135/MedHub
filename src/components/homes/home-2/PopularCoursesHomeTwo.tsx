"use client";

import Link from 'next/link';
import React, { useRef, useState, useEffect } from 'react';
import axiosInstance, { BACKEND_URL } from '../../../api/axios';

// CME / CPD Programs in Middle East
const categories = [
  { id: 'All', label: 'All Programs', icon: 'fas fa-th' },
  { id: 'Cardiology', label: 'Cardiology', icon: 'fas fa-heartbeat' },
  { id: 'Nursing', label: 'Nursing', icon: 'fas fa-stethoscope' },
  { id: 'AlliedHealth', label: 'Allied Health', icon: 'fas fa-hospital-user' },
  { id: 'Radiology', label: 'Radiology', icon: 'fas fa-x-ray' },
  { id: 'Surgery', label: 'Surgery', icon: 'fas fa-cut' },
  { id: 'Pediatrics', label: 'Pediatrics', icon: 'fas fa-child' },
  { id: 'Oncology', label: 'Oncology', icon: 'fas fa-shield-virus' },
  { id: 'Psychiatry', label: 'Psychiatry', icon: 'fas fa-brain' },
  { id: 'Dentistry', label: 'Dentistry', icon: 'fas fa-tooth' },
  { id: 'Pharmacy', label: 'Pharmacy', icon: 'fas fa-pills' }
];


interface Course {
  _id: string;
  title: string;
  bannerImage?: string;
  targetProfession?: string[];
  rating?: number;
  organizer?: {
    _id: string;
    organizationName: string;
  };
  credits?: {
    type: string;
    value: string;
  }[];
  category?: string;
}

const PopularCoursesHomeTwo = () => {
  const [activeTab, setActiveTab] = React.useState('All');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedCourses = async () => {
      try {
        const res = await axiosInstance.get('/courses/featured');
        setCourses(res.data);
      } catch (err) {
        console.error('Error fetching featured courses:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedCourses();
  }, []);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollPosition = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount 
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
      
      setTimeout(checkScroll, 300);
    }
  };

  React.useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const slugify = (text: string) => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-')           // Replace spaces with -
      .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
      .replace(/\-\-+/g, '-')         // Replace multiple - with single -
      .replace(/^-+/, '')             // Trim - from start of text
      .replace(/-+$/, '');            // Trim - from end of text
  };

  const filteredCourses = activeTab === 'All' 
    ? courses 
    : courses.filter(course => 
        // Check if targetProfession array includes the active tab or matches category
        course.targetProfession?.some(p => p.includes(activeTab)) || 
        course.category === activeTab
      );

  if (loading) {
    return <div className="text-center py-20">Loading featured courses...</div>;
  }

  return (
    <>
      <style jsx>{`
        .popular-courses-section .section-title-area {
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .carousel-container-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          min-width: 0;
          margin-top: 50px;
        }

        .carousel-scroll-btn {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border: 2px solid #26225B;
          background-color: white;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: #26225B;
          font-size: 16px;
        }

        .carousel-scroll-btn:hover:not(:disabled) {
          background-color: #26225B;
          color: white;
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(38, 34, 91, 0.3);
        }

        .carousel-scroll-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
          background-color: #f5f5f5;
          border-color: #ddd;
          color: #999;
        }

        .categories-carousel {
          display: flex;
          gap: 12px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scroll-snap-type: x mandatory;
          flex: 1;
          min-width: 0;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .categories-carousel::-webkit-scrollbar {
          display: none;
        }

        .category-tab-btn {
          flex-shrink: 0;
          padding: 12px 24px;
          background-color: #f8f9fa;
          border: 2px solid #e0e0e0;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
          font-size: 14px;
          font-weight: 500;
          color: #333;
          display: flex;
          align-items: center;
          gap: 8px;
          scroll-snap-align: start;
        }

        .category-tab-btn i {
          font-size: 16px;
        }

        .category-tab-btn:hover {
          background-color: #efefef;
          border-color: #26225B;
          color: #26225B;
        }

        .category-tab-btn.active {
          background-color: #26225B;
          border-color: #26225B;
          color: white;
          box-shadow: 0 4px 15px rgba(38, 34, 91, 0.3);
        }
        
        .clickable-card {
          cursor: pointer;
          display: block;
          text-decoration: none;
          color: inherit;
          height: 100%;
        }
        
        .clickable-card:hover {
          text-decoration: none;
          color: inherit;
        }
        
        .courses-card-items.style-2:hover {
          transform: translateY(-5px);
          box-shadow: 10px 4px 60px rgba(38, 34, 91, 0.30);
        }
        
        .courses-card-items.style-2:hover .theme-btn {
          background-color: #26225B !important;
          color: white !important;
        }
        
        .courses-image img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          object-position: center;
        }
        
        .view-all-btn-wrapper {
          text-align: center;
          margin-top: 50px;
          padding-bottom: 30px;
        }
        
        .view-all-btn {
          display: inline-block;
          padding: 18px 50px;
          background-color: #26225B;
          color: white !important;
          font-size: 18px;
          font-weight: 700;
          border-radius: 50px;
          text-decoration: none;
          transition: all 0.4s ease;
          box-shadow: 0 4px 15px rgba(38, 34, 91, 0.2);
          border: 2px solid #26225B;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          cursor: pointer;
          font-family: inherit;
        }
        
        .view-all-btn:hover {
          background-color: white;
          color: #26225B !important;
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(38, 34, 91, 0.4);
          border-color: #26225B;
        }
        
        .view-all-btn:active {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(38, 34, 91, 0.3);
        }

        @media (max-width: 1024px) {
          .popular-courses-section .section-title-area {
            flex-direction: column;
            align-items: stretch;
          }

          .carousel-container-wrapper {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .popular-courses-section .section-title-area {
            flex-direction: column;
            align-items: stretch;
          }

          .carousel-container-wrapper {
            width: 100%;
            gap: 8px;
          }

          .carousel-scroll-btn {
            width: 40px;
            height: 40px;
            font-size: 14px;
          }

          .category-tab-btn {
            padding: 10px 18px;
            font-size: 13px;
            gap: 6px;
          }

          .category-tab-btn i {
            font-size: 14px;
          }
        }

        .post-cat li span {
          color: #666;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        
        .post-cat li span:hover {
          color: #26225B;
        }
      `}</style>

      <section className="popular-courses-section fix section-padding section-bg">
        <div className="container">
          <div className="section-title-area">
            <div className="section-title color-blue">
              <h6 className="wow fadeInUp">
                Featured CME & CPD
              </h6>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Featured Course
              </h2>
            </div>
            <div className="carousel-container-wrapper">
              <button
                className="carousel-scroll-btn"
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                title="Scroll left"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              
              <div 
                className="categories-carousel"
                ref={scrollContainerRef}
                onScroll={checkScroll}
              >
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`category-tab-btn ${activeTab === category.id ? 'active' : ''}`}
                    onClick={() => setActiveTab(category.id)}
                    title={category.label}
                  >
                    <i className={category.icon}></i>
                    <span>{category.label}</span>
                  </button>
                ))}
              </div>

              <button
                className="carousel-scroll-btn"
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                title="Scroll right"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>

          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="row">
                {filteredCourses.map((course, index) => (
                  <div 
                    key={course._id} 
                    className="col-xl-4 col-lg-6 col-md-6"
                  >
                    <div className="courses-card-main-items">
                      <Link href={`/courses-details?${slugify(course.title)}&id=${course._id}`} className="clickable-card">
                        <div className="courses-card-items style-2">
                          <div className="courses-image">
                            <img 
                              src={course.bannerImage ? `${BACKEND_URL}${course.bannerImage}` : 'assets/img/courses/course_thumb_01.jpg'} 
                              alt={course.title} 
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = 'assets/img/courses/course_thumb_01.jpg';
                              }}
                            />
                          </div>
                          <div className="courses-content">
                            <ul className="post-cat">
                              <li>
                                <span className="category-tag">{course.targetProfession?.[0] || 'General'}</span>
                              </li>
                              <li>
                                {[...Array(5)].map((_, i) => (
                                  <i key={i} className={`fas fa-star ${i < (course.rating || 5) ? '' : 'text-gray-300'}`}></i>
                                ))}
                              </li>
                            </ul>
                            <h3>
                              <Link href={`/courses-details?${slugify(course.title)}&id=${course._id}`}>
                                {course.title}
                              </Link>
                            </h3>
                            <div className="client-items">
                              <i 
                                className="fas fa-university"
                                style={{
                                  fontSize: '18px',
                                  color: '#26225B',
                                  marginRight: '8px'
                                }}
                              ></i>
                              <p>{course.organizer?.organizationName || 'MedHub'}</p>
                            </div>
                            <ul className="post-class">
                              <li>
                                <i className="fas fa-certificate"></i>
                                {course.credits && course.credits.length > 0 ? (
                                  <>
                                    {course.credits[0].value} {course.credits[0].type}
                                  </>
                                ) : (
                                  '0 Credits'
                                )}
                              </li>
                              <li>
                                <span className="theme-btn">Explore</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="view-all-btn-wrapper">
                <Link href="/courses">
                  <button className="view-all-btn">
                    View All Courses
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PopularCoursesHomeTwo;