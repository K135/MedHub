"use client";
import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

 
const TestimonialHomeTwo = () => {
  return (
    <>
      <section className="testimonial-section fix section-padding">
            <div className="container">
                <div className="testimonial-wrapper">
                    <div className="row g-4 justify-content-between">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="testimonial-content">
                                <div className="section-title">
                                    <h6 className="wow fadeInUp">
                                        What Professionals Say
                                    </h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Trusted by Healthcare <br />
                                        Professionals Across the Region
                                    </h2>
                                </div>
                                <Swiper 
                                spaceBetween={30}
                                speed={1500}
                                loop={true}
                                autoplay={{
                                    delay: 1500,
                                    disableOnInteraction: false,
                                }}
                                pagination={{
                                    el: ".dot",
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="swiper testimonial-slider-2 mt-3 mt-md-0">
                                     
                                        <SwiperSlide className="swiper-slide">
                                            <div className="content">
                                                <div className="icon-top">
                                                    <div className="icon">
                                                        <i className="flaticon-double-quotes"></i>
                                                    </div>
                                                </div>
                                                <div className="star">
                                                    <span>Excellent Platform</span>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <h3>
                                                    "MedHub made it easier to find accredited CME courses 
                                                    relevant to my specialty."
                                                </h3>
                                                <div className="client-info">
                                                    <h4>Dr. Fatima Al-Mansouri</h4>
                                                    <p>Cardiologist</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="content">
                                                <div className="icon-top">
                                                    <div className="icon">
                                                        <i className="flaticon-double-quotes"></i>
                                                    </div>
                                                </div>
                                                <div className="star">
                                                    <span>Trusted Partner</span>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <h3>
                                                    "A trusted partner for professional education 
                                                    and event accreditation."
                                                </h3>
                                                <div className="client-info">
                                                    <h4>Prof. Ahmed Al-Dabbagh</h4>
                                                    <p>Medical Educator</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="content">
                                                <div className="icon-top">
                                                    <div className="icon">
                                                        <i className="flaticon-double-quotes"></i>
                                                    </div>
                                                </div>
                                                <div className="star">
                                                    <span>Best for Networking</span>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <h3>
                                                    "The best platform for networking and continuous 
                                                    learning in healthcare."
                                                </h3>
                                                <div className="client-info">
                                                    <h4>Dr. Layla Nawaf</h4>
                                                    <p>Nurse Educator</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="content">
                                                <div className="icon-top">
                                                    <div className="icon">
                                                        <i className="flaticon-double-quotes"></i>
                                                    </div>
                                                </div>
                                                <div className="star">
                                                    <span>Comprehensive Solutions</span>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <h3>
                                                    "From CME credits to networking, MedHub offers 
                                                    everything healthcare professionals need."
                                                </h3>
                                                <div className="client-info">
                                                    <h4>Dr. Mohammad Hassan</h4>
                                                    <p>Pharmacist</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                   
                                    <div className="swiper-dot pt-5 ps-1">
                                        <div className="dot"></div>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-5 col-lg-5 d-none d-md-block">
                            <div className="testimonial-image-items">
                                <div className="box-shape">
                                    <img src="assets/img/testimonial/box-shape.png" alt="img" />
                                </div>
                                <div className="row g-4">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="client-img-1 bg-cover" style={{backgroundImage: `url(/assets/img/testimonial/Testimonial-home/512x5121.png)`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                                        <div className="client-img-2 bg-cover" style={{backgroundImage: `url(/assets/img/testimonial/Testimonial-home/512x5122.png)`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                                        <div className="client-img-3 bg-cover" style={{backgroundImage: `url(/assets/img/testimonial/Testimonial-home/380x512.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="client-img-4 bg-cover" style={{backgroundImage: `url(/assets/img/testimonial/Testimonial-home/512x5123.png)`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                                        <div className="client-img-5 bg-cover" style={{backgroundImage: `url(/assets/img/testimonial/Testimonial-home/512x5125.png)`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                                        <div className="client-img-6 bg-cover" style={{backgroundImage: `url(/assets/img/testimonial/Testimonial-home/512x5124.png)`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> 
    </>
  );
};

export default TestimonialHomeTwo;