
"use client"
import Link from 'next/link';
import Count from '@/common/Count';
import React, { useState } from 'react';
import VideoPopup from '@/modals/VideoPopup';


const HeroHomeTwo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
       <section className="hero-section hero-2 fix">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <h1 className="wow fadeInUp" data-wow-delay=".3s" style={{ fontSize: "48px" }}>
                                <span>
                                    Your Trusted Destination
                                    <img src="assets/img/hero/bar-shape-2.png" alt="shape-img" />
                                </span>
                                {" "}for CME, CPD & Medical Education Across the Middle East
                            </h1>
                            <p className="wow fadeInUp" data-wow-delay=".5s">
                            MedHub connects healthcare professionals, educators, and industry partners on one intelligent platform — where learning, accreditation, and opportunity come together.                            </p>
                            
                            <div className="hero-button">
                                <Link href="/courses" className="theme-btn wow fadeInUp" data-wow-delay=".3s">Browse CME/CPD Courses</Link>
                                <span className="button-text wow fadeInUp" data-wow-delay=".5s">
                                    <a href="/event" style={{ cursor: "pointer" }} className="video-btn">
                                        <i className="fas fa-calendar"></i>
                                    </a>
                                    <span className="ms-3 d-line">List Your Event</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-image-items">
                            <div className="hero-image">
                                <img src="assets/img/hero/dubai cme medhub conference.jpg" alt="img" width="541" height="556" style={{ borderTopLeftRadius: "20px" }} className="wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.5s" />
                                <div className="hero-shape">
                                    <img src="assets/img/hero/hero-shape.png" alt="img" className="wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.2s" />
                                </div>
                                <div className="counter-box float-bob-y">
                                    <p>Over</p>
                                    <h2><span className="odometer" data-count="15000">
                                        <Count number={15} text='k+' />
                                        </span></h2>
                                    <p>Healthcare Professionals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Ml4XCF-JS0k"}
      />
      {/* video modal end */}
    </>
  );
};

export default HeroHomeTwo;