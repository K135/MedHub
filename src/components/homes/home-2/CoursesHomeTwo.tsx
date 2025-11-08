"use client";

import Link from 'next/link';
import React from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
 

const CoursesHomeTwo = () => {
  const [swiperInstance, setSwiperInstance] = React.useState<any>(null);
  const prevRef = React.useRef<HTMLDivElement>(null);
  const nextRef = React.useRef<HTMLDivElement>(null);

  return (
    <>
      <style jsx global>{`
        .live-courses-main-items .top-image {
          width: 100%;
          height: 300px;
          object-fit: cover;
          border-radius: 12px 12px 0 0;
          display: block;
        }
        
        .live-courses-main-items .organizer-name {
          color: #666;
          font-size: 14px;
          margin: 8px 0 15px 0;
          font-weight: 500;
        }
        
        .live-courses-main-items .content .client-img {
          background-size: cover !important;
          background-position: center !important;
          background-repeat: no-repeat !important;
        }
        
        .custom-nav-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        
        .custom-nav-arrow:hover {
          background: var(--theme-primary, #007bff);
          color: white;
          transform: translateY(-50%) scale(1.1);
        }
        
        .custom-nav-arrow.swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
        
        .custom-nav-arrow.custom-prev {
          left: -25px;
        }
        
        .custom-nav-arrow.custom-next {
          right: -25px;
        }
        
        .custom-nav-arrow i {
          font-size: 20px;
        }
        
        @media (max-width: 768px) {
          .custom-nav-arrow {
            width: 40px;
            height: 40px;
          }
          
          .custom-nav-arrow.custom-prev {
            left: 10px;
          }
          
          .custom-nav-arrow.custom-next {
            right: 10px;
          }
          
          .custom-nav-arrow i {
            font-size: 16px;
          }
        }
      `}</style>
      <section className="live-courses-section section-padding">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">
                        Live Courses & Webinars
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Explore live CME sessions, interactive webinars,
                        and upcoming conferences
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay=".5s">
                        designed to advance your medical expertise and meet accreditation requirements
                    </p>
                </div>
                <div 
                  onMouseEnter={() => swiperInstance?.autoplay?.stop()}
                  onMouseLeave={() => swiperInstance?.autoplay?.start()}
                  style={{ position: 'relative' }}
                >
                <Swiper 
                spaceBetween={30}
                speed={1500}
                loop={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                navigation={{
                  prevEl: prevRef.current,
                  nextEl: nextRef.current,
                }}
                onSwiper={(swiper) => {
                  setSwiperInstance(swiper);
                  // Delay navigation initialization to ensure refs are set
                  setTimeout(() => {
                    if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                      swiper.params.navigation.prevEl = prevRef.current;
                      swiper.params.navigation.nextEl = nextRef.current;
                      swiper.navigation.init();
                      swiper.navigation.update();
                    }
                  }, 100);
                }}
                modules={[Autoplay, Navigation]}
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
                className="swiper live-courses-slider">
                   
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                                <img src="assets/img/courses/homecourse/Advanced Cardiology CME.jpg" alt="Advanced Cardiology CME" className="top-image" />
                                <div className="content">
                                    <div className="client-img bg-cover" style={{background: `url(https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=400&fit=crop)`}}></div>
                                    <h4><Link href="/courses-details">Advanced Cardiology CME</Link></h4>
                                    <p className="organizer-name">Dr. Ahmed Al-Rashid</p>
                                    <ul className="list">
                                        <li>
                                            <i className="far fa-clock"></i>
                                            6 weeks
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            200+ Professionals
                                        </li>
                                    </ul>
                                    <Link href="/courses-details" className="theme-btn">Join Live Webinar</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                                <img src="assets/img/courses/homecourse/Emergency Medicine Updates.jpg" alt="Emergency Medicine Updates" className="top-image" />
                                <div className="content">
                                    <div className="client-img bg-cover" style={{background: `url(https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=400&h=400&fit=crop)`}}></div>
                                    <h4><Link href="/courses-details">Emergency Medicine Updates</Link></h4>
                                    <p className="organizer-name">Dr. Sarah Johnson</p>
                                    <ul className="list">
                                        <li>
                                            <i className="far fa-clock"></i>
                                            4 weeks
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            180+ Professionals
                                        </li>
                                    </ul>
                                    <Link href="/courses-details" className="theme-btn">Join Live Webinar</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                                <img src="assets/img/courses/homecourse/Nursing Excellence CPD.jpg" alt="Nursing Excellence CPD" className="top-image" />
                                <div className="content">
                                    <div className="client-img bg-cover" style={{background: `url(https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=400&h=400&fit=crop)`}}></div>
                                    <h4><Link href="/courses-details">Nursing Excellence CPD</Link></h4>
                                    <p className="organizer-name">Nurse Fatima Hassan</p>
                                    <ul className="list">
                                        <li>
                                            <i className="far fa-clock"></i>
                                            8 weeks
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            150+ Professionals
                                        </li>
                                    </ul>
                                    <Link href="/courses-details" className="theme-btn">Join Live Webinar</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                                <img src="assets/img/courses/homecourse/Radiology Imaging Techniques.jpg" alt="Radiology Imaging Techniques" className="top-image" />
                                <div className="content">
                                    <div className="client-img bg-cover" style={{background: `url(https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=400&h=400&fit=crop)`}}></div>
                                    <h4><Link href="/courses-details">Radiology Imaging Techniques</Link></h4>
                                    <p className="organizer-name">Dr. Michael Chen</p>
                                    <ul className="list">
                                        <li>
                                            <i className="far fa-clock"></i>
                                            5 weeks
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            120+ Professionals
                                        </li>
                                    </ul>
                                    <Link href="/courses-details" className="theme-btn">Join Live Webinar</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                   
                </Swiper>
                <div ref={prevRef} className="custom-nav-arrow custom-prev">
                  <i className="far fa-arrow-left"></i>
                </div>
                <div ref={nextRef} className="custom-nav-arrow custom-next">
                  <i className="far fa-arrow-right"></i>
                </div>
                </div>
                
                <div className="event-button text-center pt-5 wow fadeInUp" data-wow-delay=".3s">
                  <Link href="/courses" className="theme-btn theme-blue-2">View All Live Conferences</Link>
                </div>
            </div>
        </section>
    </>
  );
};

export default CoursesHomeTwo;