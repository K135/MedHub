"use client";
import React from 'react';

const NewsletterHomeOne = () => {
  return (
    <>
      <section className="cta-newsletter-section fix blue-bg">

            <div className="shape-1">
                <img src="assets/img/cta/shape-1.png" alt="img" />
            </div>
            <div className="shape-2">
                <img src="assets/img/cta/shape-2.png" alt="img" />
            </div>
            <div className="container">
                <div className="cta-newsletter-wrapper">
                    <div className="section-title text-center">
                        <h6 className="text-white wow fadeInUp">
                            Stay Connected 
                        </h6>
                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                            Advance Your Medical Knowledge <br />
                            with MedHub
                        </h2>
                    </div>
                    <form onSubmit={e => e.preventDefault()} id="contact-form" method="POST" className="newsletter-input-items mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".3s">
                        <input type="email" id="email" placeholder="Email Address" />
                        <div className="icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <button className="theme-btn yellow-btn" type="submit">
                            Subscribe
                        </button>
                    </form>
                    <ul className="list-items wow fadeInUp" data-wow-delay=".5s">
                        <li>
                            <i className="far fa-check-circle"></i>
                            Accredited Courses
                        </li>
                        <li>
                            <i className="far fa-check-circle"></i>
                            Expert Medical Professionals
                        </li>
                        <li>
                            <i className="far fa-check-circle"></i>
                            Trusted by Healthcare Leaders 
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </>
  );
};

export default NewsletterHomeOne;