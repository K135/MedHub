"use client";

import Link from 'next/link';
import React, { useRef, useState } from 'react';

const events = [
  {
    id: 1,
    category: 'Primary Care',
    date: '15',
    month: 'Nov 2025',
    title: 'GCC Primary Care Summit – Dubai 2025',
    location: 'Dubai',
    time: '08:00am',
    cmePoints: 12,
    image: 'assets/img/courses/homecourse/even home1.jpg'
  },
  {
    id: 2,
    category: 'Pharmacy',
    date: '22',
    month: 'Dec 2025',
    title: 'Qatar Clinical Pharmacy Forum',
    location: 'Doha',
    time: '09:00am',
    cmePoints: 10,
    image: 'assets/img/courses/homecourse/even home2.jpg'
  },
  {
    id: 3,
    category: 'Medicine',
    date: '10',
    month: 'Jan 2026',
    title: 'Saudi Women in Medicine Conference',
    location: 'Riyadh',
    time: '10:00am',
    cmePoints: 15,
    image: 'assets/img/courses/homecourse/even home3.jpeg'
  },
  {
    id: 4,
    category: 'Healthcare',
    date: '28',
    month: 'Feb 2026',
    title: 'GCC Healthcare Innovation Summit',
    location: 'Dubai',
    time: '09:30am',
    cmePoints: 8,
    image: 'assets/img/courses/homecourse/even home4.jpeg'
  }
];

const categories = [
  { id: 'All', label: 'All Events', icon: 'fas fa-calendar' },
  { id: 'Primary Care', label: 'Primary Care', icon: 'fas fa-hospital-user' },
  { id: 'Pharmacy', label: 'Pharmacy', icon: 'fas fa-pills' },
  { id: 'Medicine', label: 'Medicine', icon: 'fas fa-stethoscope' },
  { id: 'Healthcare', label: 'Healthcare', icon: 'fas fa-heartbeat' },
  { id: 'Nursing', label: 'Nursing', icon: 'fas fa-user-nurse' },
  { id: 'Surgery', label: 'Surgery', icon: 'fas fa-scalpel' },
  { id: 'Cardiology', label: 'Cardiology', icon: 'fas fa-heart-pulse' },
  { id: 'Orthopedics', label: 'Orthopedics', icon: 'fas fa-bone' },
  { id: 'Pediatrics', label: 'Pediatrics', icon: 'fas fa-child' },
  { id: 'Dentistry', label: 'Dentistry', icon: 'fas fa-tooth' },
  { id: 'Neurology', label: 'Neurology', icon: 'fas fa-brain' },
  { id: 'Oncology', label: 'Oncology', icon: 'fas fa-microscope' },
  { id: 'Radiology', label: 'Radiology', icon: 'fas fa-x-ray' },
  { id: 'Psychiatry', label: 'Psychiatry', icon: 'fas fa-head-side-virus' }
];

const EventsHomeFive = () => {
  const [activeTab, setActiveTab] = React.useState('All');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 150;
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
    const timer = setTimeout(checkScroll, 100);
    return () => {
      window.removeEventListener('resize', checkScroll);
      clearTimeout(timer);
    };
  }, []);

  React.useEffect(() => {
    setTimeout(checkScroll, 50);
  }, [activeTab]);

  const filteredEvents = activeTab === 'All' 
    ? events 
    : events.filter(event => event.category === activeTab);

  return (
    <>
    <style jsx>{`
      .event-section .section-title-area {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 20px;
        margin-bottom: 30px;
      }

      .carousel-container-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        width: 100%;
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
        max-width: 1000px;
        width: 100%;
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

      @media (max-width: 1024px) {
        .carousel-container-wrapper {
          gap: 8px;
        }
      }

      @media (max-width: 768px) {
        .event-section .section-title-area {
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
    `}</style>
    <section className="event-section fix section-padding">
            <div className="container">
                <div className="section-title-area">
                  <div className="section-title color-blue">
                    <h6 className="wow fadeInUp">
                        Upcoming Events
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Don't Miss These Upcoming <br /> 
                        Accredited Events
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
                <div className="row">
                    {filteredEvents.map((event, index) => (
                      <div key={event.id} className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay={index % 2 === 0 ? ".3s" : ".5s"}>
                        <Link href="/event-details" className="event-box-items-2" style={{ display: 'flex', justifyContent: 'space-between', cursor: 'pointer', textDecoration: 'none', transition: 'all 0.3s ease-in-out' }}>
                            <div className="event-content">
                                <div className="content">
                                    <div className="date">
                                        <h2>{event.date}</h2>
                                        <span>{event.month}</span>
                                    </div>
                                    <div className="title-text">
                                        <h4>{event.title}</h4>
                                        <ul className="post-time">
                                            <li><i className="far fa-map-marker-alt"></i> {event.location}</li>
                                            <li><i className="far fa-clock"></i> {event.time}</li>
                                        </ul>
                                        <ul className="post-class">
                                            <li><i className="far fa-certificate"></i> CME Points - {event.cmePoints}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="event-thumb">
                                <img src={event.image} alt="img" />
                            </div>
                        </Link>
                    </div>
                    ))}
                </div>
                <div className="event-button text-center pt-5 wow fadeInUp" data-wow-delay=".3s">
                    <Link href="/event" className="theme-btn theme-blue-2">View All Events</Link>
                </div>
            </div>
        </section>
      
    </>
  );
};

export default EventsHomeFive;