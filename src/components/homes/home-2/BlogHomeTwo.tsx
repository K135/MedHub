
import Link from 'next/link';
import React from 'react';

const BlogHomeTwo = () => {
  return (
    <>
      <section className="news-section fix section-padding section-bg">
            <div className="container">
                <div className="section-title text-center text-center">
                    <h6 className="wow fadeInUp">
                        Insights & Blogs
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">Latest Articles & Medical Insights</h2>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="news-card-items">
                            <div className="news-image">
                                <img src="assets/img/news/04.jpg" alt="img" />
                                <img src="assets/img/news/04.jpg" alt="img" />
                                <div className="post-cat">
                                    CME Requirements
                                </div>
                            </div>
                            <div className="news-content">
                                <ul className="post-meta">
                                    <li>
                                        <i className="far fa-calendar-alt"></i>
                                        20 Sep 2024
                                    </li>
                                    <li>
                                        <i className="far fa-user"></i>
                                        MedHub Team
                                    </li>
                                </ul>
                                <h5>
                                    <Link href="/news-details">
                                        CME Requirements Across 
                                        the GCC
                                    </Link>
                                </h5>
                                <Link href="/news-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="news-card-items">
                            <div className="news-image">
                                <img src="assets/img/news/05.jpg" alt="img" />
                                <img src="assets/img/news/05.jpg" alt="img" />
                                <div className="post-cat">
                                    Medical Conferences
                                </div>
                            </div>
                            <div className="news-content">
                                <ul className="post-meta">
                                    <li>
                                        <i className="far fa-calendar-alt"></i>
                                        20 Sep 2024
                                    </li>
                                    <li>
                                        <i className="far fa-user"></i>
                                        MedHub Team
                                    </li>
                                </ul>
                                <h5>
                                    <Link href="/news-details">
                                        The Future of Hybrid 
                                        Medical Conferences
                                    </Link>
                                </h5>
                                <Link href="/news-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="news-card-items">
                            <div className="news-image">
                                <img src="assets/img/news/06.jpg" alt="img" />
                                <img src="assets/img/news/06.jpg" alt="img" />
                                <div className="post-cat">
                                    Partnerships
                                </div>
                            </div>
                            <div className="news-content">
                                <ul className="post-meta">
                                    <li>
                                        <i className="far fa-calendar-alt"></i>
                                        20 Sep 2024
                                    </li>
                                    <li>
                                        <i className="far fa-user"></i>
                                        MedHub Team
                                    </li>
                                </ul>
                                <h5>
                                    <Link href="/news-details">
                                        How Pharma Can Support 
                                        Education Responsibly
                                    </Link>
                                </h5>
                                <Link href="/news-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="news-card-items">
                            <div className="news-image">
                                <img src="assets/img/news/07.jpg" alt="img" />
                                <img src="assets/img/news/07.jpg" alt="img" />
                                <div className="post-cat">
                                    Professional Development
                                </div>
                            </div>
                            <div className="news-content">
                                <ul className="post-meta">
                                    <li>
                                        <i className="far fa-calendar-alt"></i>
                                        20 Sep 2024
                                    </li>
                                    <li>
                                        <i className="far fa-user"></i>
                                        MedHub Team
                                    </li>
                                </ul>
                                <h5>
                                    <Link href="/news-details">
                                        Building Your Medical <br />
                                        Career with CME Credits
                                    </Link>
                                </h5>
                                <Link href="/news-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default BlogHomeTwo;