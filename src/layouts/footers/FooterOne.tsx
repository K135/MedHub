
import Link from 'next/link';
import React from 'react';

const FooterOne = ({style_2} : any) => {
  return (
    <>
       <footer className={`footer-section fix ${style_2 ? "" : "footer-bg"}`}>
            <div className="container">
                <div className={`footer-widget-wrapper ${style_2 ? "style-4" : ""}`}>
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                </div>
                                <div className="footer-content">
                                    <p>
                                        Empowering healthcare professionals with comprehensive medical education and cutting-edge learning resources.
                                    </p>
                                    <div className="social-icon">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-dribbble"></i></a>
                                        <a href="#"><i className="fab fa-behance"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Medical Specialties</h3>
                                </div>
                                <ul className="list-area">
                                    <li><Link href="/courses">Cardiology</Link></li>
                                    <li><Link href="/courses">Neurology</Link></li>
                                    <li><Link href="/courses">Pediatrics</Link></li>
                                    <li><Link href="/courses">Surgery</Link></li>
                                    <li><Link href="/courses">Internal Medicine</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".6s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Quick Links</h3>
                                </div>
                                <ul className="list-area">
                                    <li><Link href="/about">About MedHub</Link></li>
                                    <li><Link href="/instructor">Medical Experts</Link></li>
                                    <li><Link href="/courses">Medical Courses</Link></li>
                                    <li><Link href="/contact">Student Reviews</Link></li>
                                    <li><Link href="/faq">FAQs</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Contact Us</h3>
                                </div>
                                <div className="footer-content">
                                    <ul className="contact-info">
                                        <li>
                                            Medical Education Center
                                            Healthcare District, India
                                        </li>
                                        <li>
                                            24/7 Student Support
                                            Available Worldwide
                                        </li>
                                        <li>
                                            <a href="mailto:support@medhub.com" className="link">support@medhub.com</a>
                                        </li>
                                        <li>
                                            <a href="tel:+911234567890">+91 (123) 456-7890</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`footer-bottom wow fadeInUp ${style_2 ? "style-4" : ""}`} data-wow-delay=".3s">
                    <p>Copyright © <Link href="/">MedHub</Link>, all rights reserved.</p>
                </div>
            </div>
            <div className={`footer-name ${style_2 ? "style-2" : ""}`}>
                <h2>
                    Med<span style={{fontWeight: "300"}}>Hub</span>
                </h2>
            </div>
        </footer>
    </>
  );
};

export default FooterOne;