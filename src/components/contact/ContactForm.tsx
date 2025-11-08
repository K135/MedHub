"use client"
import React from 'react';

const ContactForm = () => {
  return (
    <>
       <section className="contact-section-2 section-padding pt-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-10">
                        <div className="contact-form-items">
                            <div className="title text-center">
                                <h2 className="wow fadeInUp">Get in Touch with MedHub</h2>
                                <p className="wow fadeInUp" data-wow-delay=".2s">
                                    Have questions about our medical education courses or need support? We're here to help!
                                </p>
                            </div>
                            <form id="contact-form" onSubmit={e => e.preventDefault()}>
                                <div className="row g-4">
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="form-clt">
                                            <input type="text" name="name" id="name" placeholder="Full Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="form-clt">
                                            <input type="text" name="number" id="number" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="form-clt">
                                            <input type="text" name="email" id="email3" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="form-clt">
                                            <select name="subject" id="subject" className="form-select">
                                                <option value="">Select Inquiry Type</option>
                                                <option value="course-inquiry">Course Information</option>
                                                <option value="technical-support">Technical Support</option>
                                                <option value="partnership">Partnership Opportunities</option>
                                                <option value="cme-credits">CME Credits</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="form-clt">
                                            <textarea name="message" id="message" placeholder="Tell us about your inquiry or how we can help you with medical education..."></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
                                        <button type="submit" className="theme-btn">
                                            Send Message
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default ContactForm;