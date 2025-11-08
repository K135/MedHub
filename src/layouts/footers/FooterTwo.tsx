
import Link from 'next/link';
import React from 'react';

const FooterTwo = () => {
  return (
    <>
       <footer className="footer-section fix footer-bg">
            <div className="big-circle">
                <img src="assets/img/footer/big-circle.png" alt="img" />
            </div>
            <div className="circle-shape-2">
                <img src="assets/img/footer/circle-2.png" alt="img" />
            </div>
            <div className="Vector-shape-2">
                <img src="assets/img/footer/Vector-2.png" alt="img" />
            </div>
            <div className="container">
                <div className="footer-widget-wrapper">
                    <div className="row">
                        <div className="col-xl-2 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Quick Links</h3>
                                </div>
                                <ul className="list-area">
                                    <li><Link href="/courses">Healthcare Professionals</Link></li>
                                    <li><Link href="/courses">Physician CME</Link></li>
                                    <li><Link href="/courses">Nursing CE</Link></li>
                                    <li><Link href="/courses">Dental CE</Link></li>
                                    <li><Link href="/courses">Pharmacy CE</Link></li>
                                    <li><Link href="/courses">State Mandatory Topics</Link></li>
                                    <li><Link href="/courses">Free CME/CE</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Courses & Events</h3>
                                </div>
                                <ul className="list-area">
                                    <li><Link href="/courses">State CME Requirements</Link></li>
                                    <li><Link href="/courses">Online Courses</Link></li>
                                    <li><Link href="/courses">Live Webinars</Link></li>
                                    <li><Link href="/courses">Hybrid Events</Link></li>
                                    <li><Link href="/courses">CME/CE Conferences 2025</Link></li>
                                    <li><Link href="/courses">CME/CE Conferences 2026</Link></li>
                                    <li><Link href="/courses">Courses by Specialty</Link></li>
                                    <li><Link href="/courses">Courses by Topic</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Resources</h3>
                                </div>
                                <ul className="list-area">
                                    <li><Link href="/courses">Conferences by Location</Link></li>
                                    <li><Link href="/courses">Cruise Conferences</Link></li>
                                    <li><Link href="/courses">Travel CME Conferences</Link></li>
                                    <li><Link href="/blog">Blogs</Link></li>
                                    <li><Link href="/blog">Medical News</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>For Providers</h3>
                                </div>
                                <ul className="list-area">
                                    <li><Link href="/register">List your Event</Link></li>
                                    <li><Link href="/register">Add your Listing</Link></li>
                                    <li><Link href="/register">Standard & Premium Plan</Link></li>
                                    <li><Link href="/register">Promote your Event</Link></li>
                                    <li><Link href="/register">Email Marketing</Link></li>
                                    <li><Link href="/register">Banner Advertising</Link></li>
                                    <li><Link href="/register">CME/CE Accreditation</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>For Speakers</h3>
                                </div>
                                <ul className="list-area">
                                    <li><Link href="/instructor">Premium Profile</Link></li>
                                    <li><Link href="/instructor">Promote your Profile</Link></li>
                                    <li><Link href="/instructor">Sell your Courses</Link></li>
                                    <li><Link href="/instructor">Host CME/CE Courses</Link></li>
                                    <li><Link href="/instructor">Text, Video & Audio Courses</Link></li>
                                    <li><Link href="/instructor">Live Webinars</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Company</h3>
                                </div>
                                <div className="footer-content">
                                    <p className="mb-3"><strong>MedHub Corporation</strong></p>
                                    <ul className="contact-info">
                                        <li className="mb-2">
                                            <a href="mailto:support@medhub.com" className="link">support@medhub.com</a>
                                        </li>
                                        <li className="mb-3">
                                            <a href="tel:+18008282059">1 (800) 828-2059</a>
                                        </li>
                                    </ul>
                                    <ul className="list-area">
                                        <li><Link href="/about">About Us</Link></li>
                                        <li><Link href="/contact">Careers</Link></li>
                                        <li><Link href="/contact">Privacy Policy</Link></li>
                                        <li><Link href="/contact">Terms of Use</Link></li>
                                        <li><Link href="/contact">Cookie Policy</Link></li>
                                    </ul>
                                    <div className="social-icon mt-3">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom style-2">
                    <p>Copyright © <Link href="/">MedHub</Link>, all rights reserved.</p>
                </div>
            </div>
        </footer>
    </>
  );
};

export default FooterTwo;