import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Link from 'next/link';
import FooterOne from '@/layouts/footers/FooterOne';
import MarqueeOne from '@/common/MarqueeOne';
import NewsletterHomeOne from '@/components/homes/home/NewsletterHomeOne';
import Wrapper from '@/layouts/Wrapper';
import Count from '@/common/Count';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'For Organisers - MedHub',
  description: 'Partner with MedHub Middle East to showcase, promote, and grow your CME and CPD events.',
  keywords: 'MedHub organisers, CME events, CPD promotion',
};

const ForOrganisersSection = () => {
  const stats = [
    { value: 300, suffix: '+', label: 'Accredited Institutions Onboarded', icon: 'fas fa-building-columns', delay: '.3s', dataCount: 300 },
    { value: 15, suffix: 'k+', label: 'Verified Physicians Engaged', icon: 'fas fa-user-md', delay: '.4s', dataCount: 15000 },
    { value: 1200, suffix: '+', label: 'Events Powered Across the Region', icon: 'fas fa-calendar-check', delay: '.5s', dataCount: 1200 },
    { value: 90, suffix: '%', label: 'Targeted Audience Engagement Rate', icon: 'fas fa-bullseye', delay: '.6s', dataCount: 90 },
  ];
  const advantages = [
    { title: '360° Campaign Strategy', description: 'Dedicated partnership strategists design multi-channel launch, nurture, and conversion programs tailored to each specialty.', icon: 'fas fa-bullhorn', delay: '.3s' },
    { title: 'Accreditation Concierge', description: 'Secure CME and CPD approvals faster with concierge coordination across regional accreditation bodies and associations.', icon: 'fas fa-certificate', delay: '.4s' },
    { title: 'Real-Time Intelligence', description: 'Access a live performance cockpit with attendee demographics, conversion funnels, and ROI analytics for every touchpoint.', icon: 'fas fa-chart-line', delay: '.5s' },
    { title: 'Seamless Delegate Journey', description: 'Deliver frictionless registrations, reminders, onsite check-in, and feedback loops through a single event experience stack.', icon: 'fas fa-route', delay: '.6s' },
  ];
  const supportHighlights = [
    'Targeted email campaigns to the specialties you prioritise',
    'Paid and organic social amplification across the Middle East',
    'SEO-optimised landing experiences crafted for conversions',
    'High-intent Google Ads and retargeting funnels',
    'SMS and WhatsApp reminders localised for each market',
    'Dedicated call outreach for VIP physicians and decision makers',
    'Video storytelling, webinars, and pre-event warm-up content',
    'Always-on dashboards with live pacing and post-event reports',
  ];
  const steps = [
    { title: 'Discover & Design', description: 'Align on goals, ideal attendee segments, and accreditation pathways with a senior MedHub partnership strategist.', delay: '.3s' },
    { title: 'Launch & Amplify', description: 'Activate data-driven campaigns, content, and automation across the full MedHub ecosystem for maximum visibility.', delay: '.4s' },
    { title: 'Measure & Scale', description: 'Review actionable insights, optimise in real time, and replicate winning frameworks across your programme calendar.', delay: '.5s' },
  ];
  const impact = [
    { icon: 'fas fa-brain', title: 'Knowledge Empowerment', desc: 'Building expertise and mastery through structured learning pathways' },
    { icon: 'fas fa-lightbulb', title: 'Critical Thinking', desc: 'Developing analytical skills and informed decision-making capabilities' },
    { icon: 'fas fa-handshake', title: 'Professional Growth', desc: 'Advancing careers through continuous education and skill development' },
    { icon: 'fas fa-globe', title: 'Societal Impact', desc: 'Creating positive change through improved healthcare delivery across regions' },
  ];
  return (
    <>
      <section className="hero-section hero-2 fix" style={{ background: 'linear-gradient(135deg, #031226 0%, #002c6f 45%, #00a0c6 100%)', position: 'relative', overflow: 'hidden', paddingTop: '100px', paddingBottom: '80px' }}>
        <div className="position-absolute" style={{ inset: 0, background: 'radial-gradient(circle at 80% 50%, rgba(0,160,198,0.2) 0%, rgba(255,255,255,0) 60%)' }}></div>
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row g-5 align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <span className="d-inline-flex align-items-center gap-2 rounded-pill px-4 py-2 text-white wow fadeInUp" data-wow-delay=".2s" style={{ background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <i className="fas fa-star"></i>
                  Premium Partnership Hub
                </span>
                <h1 className="wow fadeInUp" data-wow-delay=".3s" style={{ fontSize: '56px', lineHeight: 1.2, marginTop: '24px', marginBottom: '20px', color: '#ffffff', fontWeight: 700 }}>
                  Elevate Your CME & CPD Portfolio
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".4s" style={{ fontSize: '16px', lineHeight: 1.7, color: 'rgba(255,255,255,0.9)', marginBottom: '32px' }}>
                  Showcase your live, virtual, and hybrid programmes to a high-intent network of clinicians while our dedicated growth team powers discovery, registration, and engagement.
                </p>
                <div className="d-flex flex-wrap align-items-center gap-3 mb-5 wow fadeInUp" data-wow-delay=".5s">
                  <Link href="/register" className="theme-btn yellow-btn" style={{ padding: '14px 32px', fontSize: '16px', fontWeight: 600 }}>
                    List Your Event Today
                  </Link>
                  <Link href="/contact" className="theme-btn style-2" style={{ padding: '14px 32px', fontSize: '16px', fontWeight: 600 }}>
                    Talk to Partnerships
                  </Link>
                </div>
                <div className="d-flex flex-wrap gap-3 wow fadeInUp" data-wow-delay=".6s">
                  <span className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill text-white" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', fontSize: '14px' }}>
                    <i className="fas fa-shield-check" style={{ color: '#ffc107' }}></i>
                    Accredited pathways managed
                  </span>
                  <span className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill text-white" style={{ background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)', fontSize: '14px' }}>
                    <i className="fas fa-clock" style={{ color: '#ffc107' }}></i>
                    Campaigns live in under 10 days
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row g-4">
                {stats.map((stat, index) => (
                  <div className="col-sm-6" key={stat.label}>
                    <div
                      className="h-100 p-5 rounded-4 wow fadeInUp"
                      data-wow-delay={stat.delay}
                      style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.25)', backdropFilter: 'blur(20px)', transition: 'all 0.3s ease' }}
                    >
                      <div className="d-flex flex-column gap-3">
                        <span className="d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, rgba(255,255,255,0.25), rgba(255,255,255,0.1))', color: '#ffffff' }}>
                          <i className={`${stat.icon} fs-5`}></i>
                        </span>
                        <div>
                          <h2 className="mb-2" style={{ fontSize: '40px', color: '#ffffff', fontWeight: 700 }}>
                            <span className="odometer" data-count={stat.dataCount}>
                              <Count number={stat.value} text={stat.suffix} />
                            </span>
                          </h2>
                          <p className="mb-0" style={{ color: 'rgba(255,255,255,0.8)', fontSize: '15px' }}>{stat.label}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #f6f8ff 0%, #ffffff 100%)' }}>
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div className="mb-4">
                <span className="d-inline-block px-3 py-1 rounded-pill text-white wow fadeInUp" style={{ background: 'linear-gradient(135deg, #00a0c6 0%, #007fa3 100%)', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>Why MedHub</span>
                <h2 className="wow fadeInUp" data-wow-delay=".2s" style={{ fontSize: '42px', fontWeight: 700, color: '#031226', marginBottom: '16px' }}>
                  Built for Healthcare Organisers
                </h2>
              </div>
              <p className="wow fadeInUp" data-wow-delay=".3s" style={{ fontSize: '16px', lineHeight: 1.7, color: '#555', marginBottom: '32px' }}>
                We blend deep regional expertise with purpose-built technology so every programme reaches the right clinicians, earns accreditation faster, and delivers measurable outcomes.
              </p>
              <div className="d-flex flex-column gap-4 mt-4">
                <div className="d-flex align-items-start gap-3 wow fadeInUp" data-wow-delay=".4s">
                  <span className="d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #00a0c6 0%, #007fa3 100%)', color: '#ffffff', flexShrink: 0 }}>
                    <i className="fas fa-users"></i>
                  </span>
                  <div>
                    <h5 className="mb-2" style={{ color: '#031226' }}>Segmented Audience Intelligence</h5>
                    <p className="mb-0" style={{ color: '#666', fontSize: '15px' }}>Match every listing to verified clinicians by specialty, seniority, and geography.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-3 wow fadeInUp" data-wow-delay=".5s">
                  <span className="d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #00a0c6 0%, #007fa3 100%)', color: '#ffffff', flexShrink: 0 }}>
                    <i className="fas fa-laptop-code"></i>
                  </span>
                  <div>
                    <h5 className="mb-2" style={{ color: '#031226' }}>Immersive Digital Experiences</h5>
                    <p className="mb-0" style={{ color: '#666', fontSize: '15px' }}>Build conversion-ready landing pages and hybrid broadcast environments in minutes.</p>
                  </div>
                </div>
                <div className="d-flex align-items-start gap-3 wow fadeInUp" data-wow-delay=".6s">
                  <span className="d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #00a0c6 0%, #007fa3 100%)', color: '#ffffff', flexShrink: 0 }}>
                    <i className="fas fa-handshake"></i>
                  </span>
                  <div>
                    <h5 className="mb-2" style={{ color: '#031226' }}>Dedicated Partnership Success</h5>
                    <p className="mb-0" style={{ color: '#666', fontSize: '15px' }}>A single MedHub squad stays with you from ideation to post-event analytics.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row g-4">
                {advantages.map((advantage) => (
                  <div className="col-md-6" key={advantage.title}>
                    <div
                      className="h-100 p-5 rounded-4 wow fadeInUp"
                      data-wow-delay={advantage.delay}
                      style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f5f9ff 100%)', border: '2px solid rgba(0, 160, 198, 0.15)', boxShadow: '0 16px 40px rgba(3, 18, 38, 0.08)', transition: 'all 0.3s ease' }}
                    >
                      <div className="mb-3">
                        <div className="d-inline-flex align-items-center justify-content-center rounded-lg" style={{ width: '56px', height: '56px', background: 'linear-gradient(135deg, #00a0c6 0%, #007fa3 100%)', color: '#ffffff', fontSize: '24px' }}>
                          <i className={advantage.icon}></i>
                        </div>
                      </div>
                      <h5 style={{ color: '#031226', marginBottom: '12px', fontWeight: 600 }}>{advantage.title}</h5>
                      <p style={{ color: '#666', marginBottom: 0, fontSize: '15px', lineHeight: 1.6 }}>{advantage.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding pt-0" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="p-6 rounded-4 wow fadeInUp" data-wow-delay=".2s" style={{ background: 'linear-gradient(135deg, #f0f5ff 0%, #ffffff 100%)', border: '2px solid rgba(0, 160, 198, 0.1)', boxShadow: '0 16px 40px rgba(3, 18, 38, 0.08)' }}>
                <h3 className="mb-3" style={{ color: '#031226', fontWeight: 700 }}>Marketing Accelerator Suite</h3>
                <p className="mb-5" style={{ color: '#555', fontSize: '16px', lineHeight: 1.7 }}>Unlock a high-performance media engine built specifically for medical organisers. We integrate directly with your brand team or operate as your on-demand growth squad.</p>
                <div className="d-flex flex-column gap-4">
                  <div className="d-flex align-items-start gap-3">
                    <span className="d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #00a0c6 0%, #007fa3 100%)', color: '#ffffff', flexShrink: 0 }}>
                      <i className="fas fa-magic"></i>
                    </span>
                    <div>
                      <h6 className="mb-1" style={{ color: '#031226' }}>Creative Studio</h6>
                      <p className="mb-0" style={{ color: '#666', fontSize: '14px' }}>On-brand visual identities, content hooks, and video assets ready for every channel.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start gap-3">
                    <span className="d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #00a0c6 0%, #007fa3 100%)', color: '#ffffff', flexShrink: 0 }}>
                      <i className="fas fa-robot"></i>
                    </span>
                    <div>
                      <h6 className="mb-1" style={{ color: '#031226' }}>Automation & CRM</h6>
                      <p className="mb-0" style={{ color: '#666', fontSize: '14px' }}>Responsive nurture journeys and reminder cadences tailored to each clinician cohort.</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-start gap-3">
                    <span className="d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '48px', height: '48px', background: 'linear-gradient(135deg, #00a0c6 0%, #007fa3 100%)', color: '#ffffff', flexShrink: 0 }}>
                      <i className="fas fa-chart-column"></i>
                    </span>
                    <div>
                      <h6 className="mb-1" style={{ color: '#031226' }}>Insights & Reporting</h6>
                      <p className="mb-0" style={{ color: '#666', fontSize: '14px' }}>Transparent dashboards surface ROI, engagement, and accreditation status in real time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row g-3">
                {supportHighlights.map((item, index) => {
                  const delay = `${(0.3 + index * 0.1).toFixed(1)}s`;
                  return (
                    <div className="col-sm-6" key={item}>
                      <div className="d-flex align-items-start gap-3 p-4 rounded-4 wow fadeInUp" data-wow-delay={delay} style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f5f9ff 100%)', border: '2px solid rgba(0, 160, 198, 0.12)', boxShadow: '0 8px 20px rgba(3, 18, 38, 0.06)' }}>
                        <span className="d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #00a0c6 0%, #007fa3 100%)', color: '#ffffff', flexShrink: 0 }}>
                          <i className="fas fa-check"></i>
                        </span>
                        <p className="mb-0" style={{ color: '#555', fontSize: '14px' }}>{item}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #031226 0%, #012d71 50%, #00a0c6 100%)', position: 'relative', overflow: 'hidden' }}>
        <div className="position-absolute" style={{ inset: 0, background: 'radial-gradient(circle at 50% 0%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)' }}></div>
        <div className="container position-relative" style={{ zIndex: 1 }}>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <span className="d-inline-block mb-3 wow fadeInUp" data-wow-delay=".2s" style={{ color: '#ffffff', fontSize: '15px', fontWeight: 600, opacity: 0.9 }}>How Partnerships Succeed</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ fontSize: '48px', fontWeight: 700, color: '#ffffff', marginBottom: '20px' }}>A Proven Journey From Discovery to Impact</h2>
              <p className="wow fadeInUp" data-wow-delay=".4s" style={{ fontSize: '18px', lineHeight: 1.7, color: 'rgba(255,255,255,0.9)', marginBottom: 0 }}>From strategy immersion to post-event optimisation, MedHub embeds with your team to unlock repeatable success.</p>
            </div>
          </div>
          <div className="row g-4 mt-5">
            {steps.map((step, index) => (
              <div className="col-lg-4" key={step.title}>
                <div className="h-100 p-5 rounded-4 wow fadeInUp" data-wow-delay={step.delay} style={{ background: 'rgba(255,255,255,0.12)', border: '2px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(20px)', transition: 'all 0.3s ease' }}>
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <span className="fw-bold" style={{ fontSize: '42px', background: 'linear-gradient(135deg, #ffc107 0%, #ff9800 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{`0${index + 1}`}</span>
                    <i className="fas fa-arrow-up-right-from-square" style={{ color: '#ffc107', fontSize: '18px' }}></i>
                  </div>
                  <h5 className="mb-3" style={{ color: '#ffffff', fontWeight: 600 }}>{step.title}</h5>
                  <p className="mb-0" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '15px', lineHeight: 1.6 }}>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-3 mt-6 wow fadeInUp" data-wow-delay=".6s">
            <Link href="/register" className="theme-btn yellow-btn" style={{ padding: '14px 32px', fontSize: '16px', fontWeight: 600 }}>
              Start Listing With MedHub
            </Link>
            <Link href="/contact" className="theme-btn style-2" style={{ padding: '14px 32px', fontSize: '16px', fontWeight: 600 }}>
              Request a Strategy Session
            </Link>
          </div>
        </div>
      </section>
      <section className="section-padding" style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #f6f8ff 100%)' }}>
        <div className="container">
          <div className="row mb-6">
            <div className="col-lg-10 mx-auto text-center">
              <span className="d-inline-block px-3 py-1 rounded-pill text-white wow fadeInUp" style={{ background: 'linear-gradient(135deg, #00a0c6 0%, #007fa3 100%)', fontSize: '14px', fontWeight: 600, marginBottom: '16px' }}>Foundation of Growth</span>
              <h2 className="wow fadeInUp" data-wow-delay=".2s" style={{ fontSize: '52px', fontWeight: 700, marginBottom: '24px', color: '#031226' }}>
                Education Empowers Excellence
              </h2>
              <p className="wow fadeInUp" data-wow-delay=".3s" style={{ fontSize: '18px', lineHeight: 1.8, color: '#555', maxWidth: '720px', margin: '0 auto' }}>
                Education is the foundation of personal and societal growth, empowering individuals with knowledge, essential skills, and critical thinking. At MedHub, we believe continuous learning drives healthcare excellence across regions.
              </p>
            </div>
          </div>
          <div className="row g-4">
            {impact.map((item, index) => (
              <div className="col-md-6 col-lg-3" key={item.title}>
                <div className="h-100 p-5 rounded-4 wow fadeInUp text-center" data-wow-delay={`${(0.3 + index * 0.1).toFixed(1)}s`} style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f5f9ff 100%)', border: '2px solid rgba(0, 160, 198, 0.15)', boxShadow: '0 12px 40px rgba(3, 18, 38, 0.08)', transition: 'all 0.3s ease', cursor: 'pointer' }}>
                  <div className="mb-4">
                    <div className="d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg, #00a0c6 0%, #007fa3 100%)', marginBottom: '20px' }}>
                      <i className={`${item.icon} fs-4 text-white`}></i>
                    </div>
                  </div>
                  <h5 style={{ color: '#031226', marginBottom: '12px', fontWeight: 700, fontSize: '20px' }}>{item.title}</h5>
                  <p style={{ color: '#666', marginBottom: 0, fontSize: '15px', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const ForOrganisersPage = () => {
  return (
    <Wrapper>
      <HeaderOne />
      <ForOrganisersSection />
      <NewsletterHomeOne />
      <MarqueeOne style_2={true} />
      <FooterOne />
    </Wrapper>
  );
};

export default ForOrganisersPage;
