"use client"
import Link from 'next/link';
import React from 'react';

const NewsArea = () => {
  return (
    <>
      <section className="blog-wrapper news-wrapper section-padding pt-0">
            <div className="container">
                <div className="news-area">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className="blog-posts">
                                <div className="single-blog-post">
                                    <div className="post-featured-thumb bg-cover" style={{background: `url(/assets/img/news/04.jpg)`}}>
                                    </div>
                                    <div className="post-content">
                                        <div className="post-meta">
                                            <span><i className="fal fa-calendar-alt"></i>20th September 2024</span>
                                            <span><i className="fal fa-user"></i>MedHub Editorial</span>
                                        </div>
                                        <h2 className="title-anim">
                                            <Link href="/news-details">
                                                CME Requirements Across the GCC
                                            </Link>
                                         </h2>
                                         <p>
                                            Healthcare regulators across the Gulf continue to update CME hour requirements. This overview highlights the latest renewal timelines, documentation needs, and recommended course formats for each country.
                                         </p>
                                         <Link href="/news-details" className="theme-btn mt-4 line-height">
                                            Read More
                                         </Link>
                                    </div>
                                </div>
                                <div className="single-blog-post">
                                    <div className="post-featured-thumb bg-cover" style={{background: `url(/assets/img/news/05.jpg)`}}>
                                    </div>
                                    <div className="post-content">
                                        <div className="post-meta">
                                            <span><i className="fal fa-calendar-alt"></i>18th September 2024</span>
                                            <span><i className="fal fa-user"></i>MedHub Editorial</span>
                                        </div>
                                        <h2 className="title-anim">
                                            <Link href="/news-details">
                                                The Future of Hybrid Medical Conferences
                                            </Link>
                                         </h2>
                                         <p>
                                            Medical associations are blending in-person experiences with digital reach. Discover planning best practices, sponsor expectations, and technology stacks that keep hybrid conferences engaging and compliant.
                                         </p>
                                         <Link href="/news-details" className="theme-btn mt-4 line-height">
                                            Read More
                                         </Link>
                                    </div>
                                </div>
                                <div className="single-blog-post">
                                    <div className="post-featured-thumb bg-cover" style={{background: `url(/assets/img/news/06.jpg)`}}>
                                    </div>
                                    <div className="post-content">
                                        <div className="post-meta">
                                            <span><i className="fal fa-calendar-alt"></i>15th September 2024</span>
                                            <span><i className="fal fa-user"></i>MedHub Editorial</span>
                                        </div>
                                        <h2 className="title-anim">
                                            <Link href="/news-details">
                                                How Pharma Can Support Education Responsibly
                                            </Link>
                                         </h2>
                                         <p>
                                            Transparent collaboration between pharmaceutical partners and educators is essential. We break down governance guardrails, funding models, and disclosure practices that maintain learner trust.
                                         </p>
                                         <Link href="/news-details" className="theme-btn mt-4 line-height">
                                            Read More
                                         </Link>
                                    </div>
                                </div>
                                <div className="single-blog-post quote-post format-quote">
                                    <div className="post-content text-white bg-cover" style={{background: `url(/assets/img/news/07.jpg)`}}>
                                        <div className="quote-content">
                                            <div className="icon">
                                                <i className="fas fa-quote-left"></i>
                                            </div>
                                            <div className="quote-text">
                                                <h2 className="title-anim">Building Your Medical Career with CME Credits</h2>
                                                <div className="post-meta">
                                                    <span><i className="fal fa-calendar-alt"></i>12th September 2024</span>
                                                    <span><i className="fal fa-user"></i>MedHub Editorial</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="page-nav-wrap pt-5">
                                <ul>
                                    <li><a className="page-numbers" href="#">1</a></li>
                                    <li><a className="page-numbers" href="#">2</a></li>
                                    <li><a className="page-numbers" href="#">3</a></li>
                                    <li><a className="page-numbers" href="#">4</a></li>
                                    <li><a className="page-numbers" href="#"><i className="far fa-arrow-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="main-sidebar sticky-style">
                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h3>Search</h3>
                                    </div>
                                    <div className="search_widget">
                                        <form onSubmit={e => e.preventDefault()}>
                                            <input type="text" placeholder="Keywords here...." />
                                            <button type="submit"><i className="fal fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h3>Latest Post</h3>
                                    </div>
                                    <div className="popular-posts">
                                        <div className="single-post-item">
                                            <div className="thumb bg-cover" style={{background: `url(/assets/img/news/04.jpg)`}}></div>
                                            <div className="post-content">
                                                <h5><Link href="/news-details">CME Requirements Across the GCC</Link></h5>
                                                <div className="post-date">
                                                    <i className="far fa-calendar-alt"></i>20th September 2024
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-post-item">
                                            <div className="thumb bg-cover" style={{background: `url(/assets/img/news/05.jpg)`}}></div>
                                            <div className="post-content">
                                                <h5><Link href="/news-details">The Future of Hybrid Medical Conferences</Link></h5>
                                                <div className="post-date">
                                                    <i className="far fa-calendar-alt"></i>18th September 2024
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-post-item">
                                            <div className="thumb bg-cover" style={{background: `url(/assets/img/news/06.jpg)`}}></div>
                                            <div className="post-content">
                                                <h5><Link href="/news-details">How Pharma Can Support Education Responsibly</Link></h5>
                                                <div className="post-date">
                                                    <i className="far fa-calendar-alt"></i>15th September 2024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h3>Categories</h3>
                                    </div>
                                    <div className="widget_categories">
                                        <ul>
                                            <li><Link href="/news">CME Compliance <span>12</span></Link></li>
                                            <li><Link href="/news">Conference Strategy <span>09</span></Link></li>
                                            <li><Link href="/news">Partnerships <span>08</span></Link></li>
                                            <li><Link href="/news">Professional Development <span>11</span></Link></li>
                                            <li><Link href="/news">Accreditation Updates <span>06</span></Link></li>
                                            <li><Link href="/news">Healthcare Technology <span>07</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h3>Never Miss News</h3>
                                    </div>
                                    <div className="social-link">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i className="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h3>Popular Tags</h3>
                                    </div>
                                    <div className="tagcloud">
                                        <Link href="/news">CME</Link>     
                                        <Link href="/news-details">Licensing</Link>
                                        <Link href="/news-details">Conference</Link>
                                        <Link href="/news-details">Partnerships</Link>
                                        <Link href="/news-details">Pharma</Link>
                                        <Link href="/news-details">Professional Development</Link>
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

export default NewsArea;