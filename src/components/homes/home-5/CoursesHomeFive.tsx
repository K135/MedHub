
"use client"
import Link from 'next/link';
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

 
const CoursesHomeFive = () => {
  return (
    <>
      <section className="business-courses-section pt-0 section-padding section-bg-2">
            <div className="container">
                <div className="section-title color-blue text-center">
                    <h6 className="wow fadeInUp">
                        Featured Programs
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Featured CME & CPD Programs
                    </h2>
                </div>
                <Swiper 
                    spaceBetween={30}
                    speed={1500}
                    loop={true}
                    autoplay={{
                      delay: 1500,
                      disableOnInteraction: false
                    }}
                    pagination={{
                      el: '.dot',
                      clickable: true
                    }}
                    modules={[Pagination, Autoplay]}
                    breakpoints={{
                      1199: {
                          slidesPerView: 4,
                      },
                      991: {
                          slidesPerView: 3,
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
                className="swiper courses-slider-2">
                     
                        <SwiperSlide className="swiper-slide">
                            <div className="business-courses-main-items">
                                <div className="business-courses-items">
                                    <div className="courses-image">
                                        <img src="assets/img/courses/18.jpg" alt="img" />
                                        <div className="post-courses-item">
                                            <Link href="/courses-details" className="post-box">
                                                Cardiology
                                            </Link>
                                            <Link href="/courses-details" className="post-box">
                                                Conference
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="courses-content">
                                        <div className="client-items">
                                            <div className="cont">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-2.png)`}}></div>
                                                <p>Dr. Ahmed Hassan</p>
                                            </div>
                                            <h4>CME Credits</h4>
                                        </div>
                                        <h5>
                                            <Link href="/courses-details">
                                                Dubai International Cardiology Conference
                                            </Link>
                                        </h5>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>(4.8)</span>
                                        </div>
                                        <ul className="post-class">
                                            <li>
                                                <i className="far fa-books"></i>
                                                Lessons
                                            </li>
                                            <li>
                                                <i className="far fa-user"></i>
                                                80 Students
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="courses-card-items-hover">
                                    <div className="courses-content">
                                        <div className="post-courses-item">
                                            <Link href="/courses-details" className="post-box">
                                                Cardiology
                                            </Link>
                                            <Link href="/courses-details" className="post-box">
                                                Conference
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/courses-details">
                                                Dubai International Cardiology Conference
                                            </Link>
                                        </h5>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>(4.8)</span>
                                        </div>
                                        <span>
                                            Leading cardiology experts discuss latest advances in cardiac care and clinical practice.
                                        </span>
                                        <Link href="/courses-details" className="theme-btn yellow-btn">Learn More</Link>
                                        <div className="client-items">
                                            <div className="cont">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-2.png)`}}></div>
                                                <p>Dr. Ahmed Hassan</p>
                                            </div>
                                            <h4>CME Credits</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="business-courses-main-items">
                                <div className="business-courses-items">
                                    <div className="courses-image">
                                        <img src="assets/img/courses/19.jpg" alt="img" />
                                        <div className="post-courses-item">
                                            <Link href="/courses-details" className="post-box">
                                                Endocrinology
                                            </Link>
                                            <Link href="/courses-details" className="post-box">
                                                Online
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="courses-content">
                                        <div className="client-items">
                                            <div className="cont">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-2.png)`}}></div>
                                                <p>Dr. Fatima Al-Mansoori</p>
                                            </div>
                                            <h4>CME Credits</h4>
                                        </div>
                                        <h5>
                                            <Link href="/courses-details">
                                                Online: Advances in Diabetes Management
                                            </Link>
                                        </h5>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>(4.8)</span>
                                        </div>
                                        <ul className="post-class">
                                            <li>
                                                <i className="far fa-books"></i>
                                                Lessons
                                            </li>
                                            <li>
                                                <i className="far fa-user"></i>
                                                80 Students
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="courses-card-items-hover">
                                    <div className="courses-content">
                                        <div className="post-courses-item">
                                            <Link href="/courses-details" className="post-box">
                                                Endocrinology
                                            </Link>
                                            <Link href="/courses-details" className="post-box">
                                                Online
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/courses-details">
                                                Online: Advances in Diabetes Management
                                            </Link>
                                        </h5>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>(4.8)</span>
                                        </div>
                                        <span>
                                            Comprehensive online course on modern approaches to diabetes management and prevention.
                                        </span>
                                        <Link href="/courses-details" className="theme-btn yellow-btn">Enroll Now</Link>
                                        <div className="client-items">
                                            <div className="cont">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-2.png)`}}></div>
                                                <p>Dr. Fatima Al-Mansoori</p>
                                            </div>
                                            <h4>CME Credits</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="business-courses-main-items">
                                <div className="business-courses-items">
                                    <div className="courses-image">
                                        <img src="assets/img/courses/20.jpg" alt="img" />
                                        <div className="post-courses-item">
                                            <Link href="/courses-details" className="post-box">
                                                Nursing
                                            </Link>
                                            <Link href="/courses-details" className="post-box">
                                                Summit
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="courses-content">
                                        <div className="client-items">
                                            <div className="cont">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-2.png)`}}></div>
                                                <p>Prof. Hana Al-Dosari</p>
                                            </div>
                                            <h4>CPD Credits</h4>
                                        </div>
                                        <h5>
                                            <Link href="/courses-details">
                                                Middle East Nursing & Midwifery Summit
                                            </Link>
                                        </h5>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>(4.8)</span>
                                        </div>
                                        <ul className="post-class">
                                            <li>
                                                <i className="far fa-books"></i>
                                                Lessons
                                            </li>
                                            <li>
                                                <i className="far fa-user"></i>
                                                80 Students
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="courses-card-items-hover">
                                    <div className="courses-content">
                                        <div className="post-courses-item">
                                            <Link href="/courses-details" className="post-box">
                                                Nursing
                                            </Link>
                                            <Link href="/courses-details" className="post-box">
                                                Summit
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/courses-details">
                                                Middle East Nursing & Midwifery Summit
                                            </Link>
                                        </h5>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>(4.8)</span>
                                        </div>
                                        <span>
                                            Comprehensive CPD summit focused on latest nursing and midwifery clinical practices.
                                        </span>
                                        <Link href="/courses-details" className="theme-btn yellow-btn">Register Today</Link>
                                        <div className="client-items">
                                            <div className="cont">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-2.png)`}}></div>
                                                <p>Prof. Hana Al-Dosari</p>
                                            </div>
                                            <h4>CPD Credits</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="business-courses-main-items">
                                <div className="business-courses-items">
                                    <div className="courses-image">
                                        <img src="assets/img/courses/21.jpg" alt="img" />
                                        <div className="post-courses-item">
                                            <Link href="/courses-details" className="post-box">
                                                TAX & VAT
                                            </Link>
                                            <Link href="/courses-details" className="post-box">
                                                Advance
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="courses-content">
                                        <div className="client-items">
                                            <div className="cont">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-2.png)`}}></div>
                                                <p>Mike J. Shaw</p>
                                            </div>
                                            <h4>$100</h4>
                                        </div>
                                        <h5>
                                            <Link href="/courses-details">
                                                Strategic Business Ways Coaching for Leaders
                                            </Link>
                                        </h5>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>(4.8)</span>
                                        </div>
                                        <ul className="post-class">
                                            <li>
                                                <i className="far fa-books"></i>
                                                Lessons
                                            </li>
                                            <li>
                                                <i className="far fa-user"></i>
                                                80 Students
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="courses-card-items-hover">
                                    <div className="courses-content">
                                        <div className="post-courses-item">
                                            <Link href="/courses-details" className="post-box">
                                                TAX & VAT
                                            </Link>
                                            <Link href="/courses-details" className="post-box">
                                                Advance
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/courses-details">
                                                Strategic Business Ways Coaching for Leaders
                                            </Link>
                                        </h5>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>(4.8)</span>
                                        </div>
                                        <span>
                                            Education is only empowers
                                            people to pursue career
                                        </span>
                                        <Link href="/courses-details" className="theme-btn yellow-btn">Enroll Now</Link>
                                        <div className="client-items">
                                            <div className="cont">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-2.png)`}}></div>
                                                <p>Mike J. Shaw</p>
                                            </div>
                                            <h4>$100</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                     
                        <SwiperSlide className="swiper-slide">
                            <div className="business-courses-main-items">
                                <div className="business-courses-items">
                                    <div className="courses-image">
                                        <img src="assets/img/courses/18.jpg" alt="img" />
                                        <div className="post-courses-item">
                                            <Link href="/courses-details" className="post-box">
                                                Business
                                            </Link>
                                            <Link href="/courses-details" className="post-box">
                                                Advance
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="courses-content">
                                        <div className="client-items">
                                            <div className="cont">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-2.png)`}}></div>
                                                <p>Mike J. Shaw</p>
                                            </div>
                                            <h4>$85</h4>
                                        </div>
                                        <h5>
                                            <Link href="/courses-details">
                                                Leadership Potential with
                                                our Expert Coaching
                                            </Link>
                                        </h5>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>(4.8)</span>
                                        </div>
                                        <ul className="post-class">
                                            <li>
                                                <i className="far fa-books"></i>
                                                Lessons
                                            </li>
                                            <li>
                                                <i className="far fa-user"></i>
                                                80 Students
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="courses-card-items-hover">
                                    <div className="courses-content">
                                        <div className="post-courses-item">
                                            <Link href="/courses-details" className="post-box">
                                                Business
                                            </Link>
                                            <Link href="/courses-details" className="post-box">
                                                Advance
                                            </Link>
                                        </div>
                                        <h5>
                                            <Link href="/courses-details">
                                                Leadership Potential with
                                                our Expert Coaching
                                            </Link>
                                        </h5>
                                        <div className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <span>(4.8)</span>
                                        </div>
                                        <span>
                                            Education is only empowers
                                            people to pursue career
                                        </span>
                                        <Link href="/courses-details" className="theme-btn yellow-btn">Enroll Now</Link>
                                        <div className="client-items">
                                            <div className="cont">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-2.png)`}}></div>
                                                <p>Mike J. Shaw</p>
                                            </div>
                                            <h4>$85</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide> 
                    
                    <div className="swiper-dot bg-blue text-center pt-5">
                        <div className="dot"></div>
                    </div>
                </Swiper>
            </div>
        </section>
    </>
  );
};

export default CoursesHomeFive;