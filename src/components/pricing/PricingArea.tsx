
import Link from 'next/link';
import React from 'react';

const PricingArea = () => {
  return (
    <>
       <section className="pricing-section section-padding pt-0 fix">
            <div className="container">
                
                <div className="d-flex justify-content-center mt-3 mt-md-0">
                    <div className="pricing-two__tab">
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="pt-1-tab" data-bs-toggle="tab"
                                    data-bs-target="#pt-1" type="button" role="tab" aria-controls="pt-1"
                                    aria-selected="true">Monthly</button>
                                <button className="nav-link" id="pt-2-tab" data-bs-toggle="tab" data-bs-target="#pt-2"
                                    type="button" role="tab" aria-controls="pt-2"
                                    aria-selected="false">Yearly</button>

                            </div>
                        </nav>
                    </div>
                </div>
                <div className="pricing__tab-content">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="pt-1" role="tabpanel" aria-labelledby="pt-1-tab">
                            <div className="pricing-package-wrapper">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="pricing-card-items">
                                            <div className="pricing-header">
                                                <h5>Starter</h5>
                                                <h2>$299.00</h2>
                                                <span>per monthly</span>
                                            </div>
                                            <p>
                                                Perfect for small medical practices and individual educators starting their CME journey.
                                            </p>
                                            <div className="pricing-btn">
                                                <Link href="/pricing" className="theme-btn green-btn">
                                                    Choose Plan
                                                </Link>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Up to 5 CME/CPD Courses
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Basic Analytics Dashboard
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Certificate Generation
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Email Support
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Up to 100 Learners
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Basic Accreditation Support
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="pricing-card-items style-2">
                                            <Link href="/pricing" className="post-btn">popular</Link>
                                            <div className="pricing-header">
                                                <h5>Professional</h5>
                                                <h2>$599.00</h2>
                                                <span>per monthly</span>
                                            </div>
                                            <p>
                                                Ideal for hospitals, medical centers, and established educational institutions.
                                            </p>
                                            <div className="pricing-btn">
                                                <Link href="/pricing" className="theme-btn">
                                                    Choose Plan
                                                </Link>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Unlimited CME/CPD Courses
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Advanced Analytics & Reporting
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Custom Branding & White-label
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Priority Support & Training
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Up to 1,000 Learners
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Full Accreditation Management
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="pricing-card-items">
                                            <div className="pricing-header">
                                                <h5>Enterprise</h5>
                                                <h2>$1,299.00</h2>
                                                <span>per monthly</span>
                                            </div>
                                            <p>
                                                Complete solution for large healthcare networks, medical universities, and regional organizations.
                                            </p>
                                            <div className="pricing-btn">
                                                <Link href="/pricing" className="theme-btn green-btn">
                                                    Choose Plan
                                                </Link>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Unlimited Everything
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Multi-tenant Architecture
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    API Access & Integrations
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Dedicated Account Manager
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Unlimited Learners
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Regional Accreditation Support
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pt-2" role="tabpanel" aria-labelledby="pt-2-tab">
                            <div className="pricing-package-wrapper">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="pricing-card-items">
                                            <div className="pricing-header">
                                                <h5>Starter</h5>
                                                <h2>$2,699.00</h2>
                                                <span>per yearly</span>
                                            </div>
                                            <p>
                                                Perfect for small medical practices and individual educators starting their CME journey.
                                            </p>
                                            <div className="pricing-btn">
                                                <Link href="/pricing" className="theme-btn green-btn">
                                                    Choose Plan
                                                </Link>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Up to 5 CME/CPD Courses
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Basic Analytics Dashboard
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Certificate Generation
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Email Support
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Up to 100 Learners
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Basic Accreditation Support
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="pricing-card-items style-2">
                                            <Link href="/pricing" className="post-btn">popular</Link>
                                            <div className="pricing-header">
                                                <h5>Professional</h5>
                                                <h2>$5,399.00</h2>
                                                <span>per yearly</span>
                                            </div>
                                            <p>
                                                Ideal for hospitals, medical centers, and established educational institutions.
                                            </p>
                                            <div className="pricing-btn">
                                                <Link href="/pricing" className="theme-btn">
                                                    Choose Plan
                                                </Link>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Unlimited CME/CPD Courses
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Advanced Analytics & Reporting
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Custom Branding & White-label
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Priority Support & Training
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Up to 1,000 Learners
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Full Accreditation Management
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="pricing-card-items">
                                            <div className="pricing-header">
                                                <h5>Enterprise</h5>
                                                <h2>$11,699.00</h2>
                                                <span>per yearly</span>
                                            </div>
                                            <p>
                                                Complete solution for large healthcare networks, medical universities, and regional organizations.
                                            </p>
                                            <div className="pricing-btn">
                                                <Link href="/pricing" className="theme-btn green-btn">
                                                    Choose Plan
                                                </Link>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Unlimited Everything
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Multi-tenant Architecture
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    API Access & Integrations
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Dedicated Account Manager
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Unlimited Learners
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Regional Accreditation Support
                                                </li>
                                            </ul>
                                        </div>
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

export default PricingArea;