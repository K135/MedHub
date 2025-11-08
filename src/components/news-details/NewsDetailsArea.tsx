"use client"

import Link from 'next/link';
import React from 'react';

const NewsDetailsArea = () => {
  return (
    <>
      <section className="blog-wrapper news-wrapper section-padding pt-0">
            <div className="container">
                <div className="news-area">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className="blog-post-details border-wrap mt-0">
                                <div className="single-blog-post post-details mt-0">
                                    <div className="post-content pt-0">
                                        <h2 className="mt-0">CME Requirements Across the GCC</h2>
                                        <div className="post-meta mt-3">
                                            <span><i className="fal fa-user"></i>MedHub Editorial</span>
                                            <span><i className="fal fa-calendar-alt"></i>20th September 2024</span>
                                            <span><i className="fal fa-globe"></i>Regional CME Policy</span>
                                        </div>
                                        <p>
                                            Continuing medical education remains a licensure prerequisite across every Gulf state, yet the number of required hours, renewal cycles, and approved formats differ wildly. We analysed guidance from DHA, DOH, NHRA, SCFHS, and the Kuwaiti and Omani medical councils to map the current expectations for physicians and allied health professionals.
                                        </p>
                                        <p>
                                            While most regulators prefer accredited live conferences, there is now broad acceptance of self-paced eLearning and simulation-based credits provided the delivery meets local accreditation standards. This article outlines the documentation providers must issue, the ceilings on industry-sponsored learning, and the grace periods granted when clinicians fall short of annual thresholds.
                                        </p>
                                        <img src="assets/img/news/04.jpg" alt="CME requirements overview" className="single-post-image" />
                                        <h2>Country-by-Country Accreditation Snapshot</h2>
                                        <p>
                                            The UAE maintains the most structured framework with both DHA and DOH requiring 50 CME hours per year, at least 20 of which must be Category 1 live learning. Bahrain’s NHRA, by contrast, sets biennial targets but mandates proof of balanced clinical, research, and ethics content. Saudi Arabia’s SCFHS ties renewal windows to classification tiers, pushing consultants to complete 90 hours every three years.
                                        </p>
                                        <blockquote>
                                            Align course portfolios with regulator-approved credit types before publishing registration pages, and keep supporting evidence ready for random audits.
                                        </blockquote>
                                        <p>
                                            Each authority emphasises verifiable attendance logs, signed certificates, and clear learning objectives. Digital platforms must issue tracked participation records, while organisers of in-person symposia are encouraged to capture badge scans or QR confirmations to simplify post-event audits.
                                        </p>
                                        <ul className="checked-list mb-4">
                                            <li>Confirm the accrediting body for each activity before marketing</li>
                                            <li>Provide certificates with learner IDs, activity IDs, and credit type</li>
                                            <li>Upload completions to national registries within seven days</li>
                                            <li>Retain attendance evidence for a minimum of three years</li>
                                        </ul>
                                        <h4>What Providers Need to Prepare</h4>
                                        <p>
                                            Accrediting bodies will ask for faculty CVs, disclosure forms, and balanced agendas before approving activities. Build internal workflows that gather these assets early, automate reminders for presenters, and store compliance packages in a shared repository accessible to reviewers.
                                        </p>
                                        <img className="alignleft" src="assets/img/news/05.jpg" alt="Hybrid conference session" />
                                        <p>
                                            Financial support from life-science companies remains welcome when firewalls are respected. Disclose every contribution, separate promotional content from accredited sessions, and document how independence was protected in faculty selection and topic development.
                                        </p>
                                        <p>
                                            Regional healthcare ministries continue to invest in digital credentialing systems that sync CME completions directly with licensing databases. Expect tighter timelines for uploads and automated reminders when practitioners approach renewal deadlines.
                                        </p>
                                    </div>
                                </div>
                                <div className="row tag-share-wrap">
                                    <div className="col-lg-8 col-12">
                                        <h4>Releted Tags</h4>
                                        <div className="tagcloud">                                   
                                            <Link href="/news-details">CME Compliance</Link>
                                            <Link href="/news-details">Licensing</Link>
                                            <Link href="/news-details">Conference Strategy</Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-12 mt-3 mt-lg-0 text-lg-end">
                                        <h4>Social Share</h4>
                                        <div className="social-share">
                                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                                            <a href="#"><i className="fab fa-twitter"></i></a>
                                            <a href="#"><i className="fab fa-instagram"></i></a>
                                            <a href="#"><i className="fab fa-linkedin-in"></i></a>                                    
                                        </div>
                                    </div>
                                </div>
                              
                                <div className="comments-section-wrap pt-40">
                                    <div className="comments-heading">
                                        <h3>03 Comments</h3>
                                    </div>
                                    <ul className="comments-item-list">
                                        <li className="single-comment-item">
                                            <div className="author-img">
                                                <img src="assets/img/news/author_img2.jpg" alt="img" />
                                            </div>
                                            <div className="author-info-comment">
                                                <div className="info">
                                                    <h5><a href="#">Rosalina Kelian</a></h5>
                                                    <span>19th May 2024</span>
                                                    <a href="#" className="theme-btn minimal-btn"><i className="fal fa-reply"></i>Reply</a>
                                                </div>
                                                <div className="comment-text">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna. Ut enim ad minim veniam, quis nostrud  laboris nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="single-comment-item">
                                            <div className="author-img">
                                                <img src="assets/img/news/author_img3.jpg" alt="img" />
                                            </div>
                                            <div className="author-info-comment">
                                                <div className="info">
                                                    <h5><a href="#">Arista Williamson</a></h5>
                                                    <span>21th Feb 2024</span>
                                                    <a href="#" className="theme-btn minimal-btn"><i className="fal fa-reply"></i>Reply</a>
                                                </div>
                                                <div className="comment-text">
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco nisi ut aliquip ex ea commodo consequat.</p>
                                                </div>
                                            </div>
                                            <ul className="replay-comment">
                                                <li className="single-comment-item">
                                                    <div className="author-img">
                                                        <img src="assets/img/news/author_img4.jpg" alt="img" />
                                                    </div>
                                                    <div className="author-info-comment">
                                                        <div className="info">
                                                            <h5><a href="#">Salman Ahmed</a></h5>
                                                            <span>29th Jan 2021</span>
                                                            <a href="#" className="theme-btn minimal-btn"><i className="fal fa-reply"></i>Reply</a>
                                                        </div>
                                                        <div className="comment-text">
                                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam..</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                                <div className="comment-form-wrap d-block pt-5">

                                    <h3>Post Comment</h3>
                                    <form action="#" className="comment-form">
                                        <div className="single-form-input">
                                            <textarea placeholder="Type your comments...."></textarea>
                                        </div>
                                        <div className="single-form-input">
                                            <input type="text" placeholder="Type your name...." />
                                        </div>
                                        <div className="single-form-input">
                                            <input type="email" placeholder="Type your email...." />
                                        </div>
                                        <div className="single-form-input">
                                            <input type="text" placeholder="Type your website...." />
                                        </div>
                                        <button className="theme-btn center" type="submit">
                                            <i className="fal fa-comments"></i>Post Comment
                                        </button>
                                    </form>
                                </div>
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

export default NewsDetailsArea;