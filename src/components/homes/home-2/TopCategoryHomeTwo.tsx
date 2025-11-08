import Link from 'next/link';
import React from 'react';

const TopCategoryHomeTwo = () => {
  return (
    <>
       <section className="top-category-section-2 pb-0 section-padding fix footer-bg">
            <div className="circle-shape">
                <img src="assets/img/circle-shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="text-white wow fadeInUp">
                        Quick Links for You
                    </h6>
                    <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                        Explore accredited education and opportunities based on your role
                    </h2>
                </div>
                <div className="top-category-wrapper-2 mt-4 mt-md-0">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6">
                            <div className="top-category-left-items mb-5 mb-lg-0">
                                <div className="row g-0">
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="top-category-box border-left-none border-top-none">
                                            <Link href="/courses">
                                                <div className="icon">
                                                    <i className="flaticon-user-md"></i>
                                                </div>
                                                <div className="content">
                                                    <h6>For Physicians</h6>
                                                    <p>Accredited CME/CPD</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="top-category-box border-left-none border-top-none">
                                            <Link href="/courses">
                                                <div className="icon">
                                                    <i className="flaticon-nurse"></i>
                                                </div>
                                                <div className="content">
                                                    <h6>For Nurses</h6>
                                                    <p>Licensing & Patient Care</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="top-category-box border-left-none border-bottom-none border-top-none">
                                            <Link href="/courses">
                                                <div className="icon">
                                                    <i className="flaticon-dental"></i>
                                                </div>
                                                <div className="content">
                                                    <h6>For Dentists</h6>
                                                    <p>Dental-focused CME</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="top-category-box border-left-none border-bottom-none border-top-none">
                                            <Link href="/courses">
                                                <div className="icon">
                                                    <i className="flaticon-pharmacy"></i>
                                                </div>
                                                <div className="content">
                                                    <h6>For Pharmacists</h6>
                                                    <p>Pharmaceutical Expertise</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="courses-image mb-5 mb-lg-0">
                                <img src="assets/img/boy-img.png" alt="img" className="wow img-custom-anim-left" />
                                <div className="bg-shape">
                                    <img src="assets/img/boy-bg-shape.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="top-category-left-items">
                                <div className="row g-0">
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="top-category-box border-right-none border-top-none">
                                            <Link href="/courses">
                                                <div className="icon">
                                                    <i className="flaticon-pharma"></i>
                                                </div>
                                                <div className="content">
                                                    <h6>For Pharma & MedTech</h6>
                                                    <p>Partner on Education</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="top-category-box border-right-none border-top-none">
                                            <Link href="/courses">
                                                <div className="icon">
                                                    <i className="flaticon-event"></i>
                                                </div>
                                                <div className="content">
                                                    <h6>For Organizers</h6>
                                                    <p>List & Promote Events</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="top-category-box border-right-none border-bottom-none border-top-none">
                                            <Link href="/courses">
                                                <div className="icon">
                                                    <i className="flaticon-speaker"></i>
                                                </div>
                                                <div className="content">
                                                    <h6>For Speakers</h6>
                                                    <p>Get Discovered & Booked</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="top-category-box border-right-none border-bottom-none border-top-none">
                                            <Link href="/courses">
                                                <div className="icon">
                                                    <i className="flaticon-explore"></i>
                                                </div>
                                                <div className="content">
                                                    <h6>Explore All</h6>
                                                    <p>All Audiences</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="category-bottom-title wow fadeInUp" data-wow-delay=".3s">
                    <h3>Ready to advance your medical career?</h3>
                    <Link href="/courses" className="theme-btn hover-white">Explore All Audiences</Link>
                </div>
            </div>
            <div className="mycustom-marque">
                <div className="scrolling-wrap style-2">
                    <div className="comm">
                        <div className="cmn-textslide stroke-text">Courses</div>
                        <div className="cmn-textslide stroke-text">Categories</div>
                    </div>
                    <div className="comm">
                        <div className="cmn-textslide stroke-text">Courses</div>
                        <div className="cmn-textslide stroke-text">Categories</div>
                    </div>
                    <div className="comm">
                        <div className="cmn-textslide stroke-text">Courses</div>
                        <div className="cmn-textslide stroke-text">Categories</div>
                    </div>
                    <div className="comm">
                        <div className="cmn-textslide stroke-text">Courses</div>
                        <div className="cmn-textslide stroke-text">Categories</div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default TopCategoryHomeTwo;