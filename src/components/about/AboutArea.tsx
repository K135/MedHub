"use client"
import Count from '@/common/Count';
import Link from 'next/link';
import React from 'react';

const AboutArea = () => {
  const whoWeServe = [
    {
      icon: "flaticon-healthcare",
      title: "Healthcare Professionals",
      description: "Doctors, dentists, pharmacists, nurses, and allied health practitioners can explore accredited CME and CPD courses designed to meet licensing requirements across the UAE and Middle East."
    },
    {
      icon: "flaticon-cooperation",
      title: "Organizers",
      description: "Event organizers and educational institutions gain visibility, ticketing, registration, analytics, and tools for hosting online or hybrid programs with accreditation support."
    },
    {
      icon: "flaticon-provision",
      title: "Pharma & Medical Devices",
      description: "Life sciences companies engage meaningfully with healthcare professionals through compliant sponsorships, targeted campaigns, and credible education-driven channels."
    },
    {
      icon: "flaticon-teacher",
      title: "Speakers",
      description: "Medical experts join our Speaker Network where their expertise is profiled and promoted to organizers seeking qualified faculty for authoritative voices."
    }
  ];

  const solutions = [
    {
      icon: "flaticon-certficate",
      title: "Accreditation Pathways",
      description: "Guidance and facilitation for DHA, DOH, MOHAP, or international CME and CPD accreditation."
    },
    {
      icon: "flaticon-pc",
      title: "Event Hosting & Technology",
      description: "Robust digital infrastructure for live, hybrid, and on-demand courses with integrated assessments, certificates, and credit tracking."
    },
    {
      icon: "flaticon-megaphone",
      title: "Marketing & Promotion",
      description: "Multi-channel campaigns to maximize visibility, boost attendance, and connect educational content with the right professionals."
    },
    {
      icon: "flaticon-board-meeting",
      title: "Analytics & Insights",
      description: "Reporting tools for organizers, sponsors, and educators to measure engagement, participation, and impact."
    }
  ];

  return (
    <>
      <section className="about-hero-section" style={{
        background: 'linear-gradient(135deg, #26225B 0%, #553CDF 100%)',
        padding: '120px 0 80px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: 'radial-gradient(circle at 20% 50%, #FFD335 0%, transparent 50%), radial-gradient(circle at 80% 80%, #00E2C5 0%, transparent 50%)'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-8 mx-auto text-center">
              <h6 className="wow fadeInUp" style={{ 
                color: '#FFD335', 
                fontSize: '16px', 
                fontWeight: 600, 
                textTransform: 'uppercase',
                letterSpacing: '2px',
                marginBottom: '20px'
              }}>About MedHub Middle East</h6>
              <h1 className="wow fadeInUp" data-wow-delay=".2s" style={{ 
                color: '#fff', 
                fontSize: '56px', 
                fontWeight: 700, 
                lineHeight: '1.2',
                marginBottom: '30px'
              }}>
                The Medical Minds Hub
              </h1>
              <p className="wow fadeInUp" data-wow-delay=".4s" style={{ 
                color: 'rgba(255,255,255,0.9)', 
                fontSize: '20px', 
                lineHeight: '1.8',
                maxWidth: '800px',
                margin: '0 auto 40px'
              }}>
                Bringing together every corner of the healthcare education ecosystem onto one intelligent, accessible, and regionally focused platform.
              </p>
              <div className="wow fadeInUp" data-wow-delay=".6s">
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <div style={{ textAlign: 'center' }}>
                    <h2 style={{ color: '#FFD335', fontSize: '48px', fontWeight: 700, marginBottom: '5px' }}>
                      <Count number={15} text='k+' />
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px' }}>Healthcare Professionals</p>
                  </div>
                  <div style={{ width: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
                  <div style={{ textAlign: 'center' }}>
                    <h2 style={{ color: '#FFD335', fontSize: '48px', fontWeight: 700, marginBottom: '5px' }}>
                      <Count number={1200} text='+' />
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px' }}>Events & Courses</p>
                  </div>
                  <div style={{ width: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
                  <div style={{ textAlign: 'center' }}>
                    <h2 style={{ color: '#FFD335', fontSize: '48px', fontWeight: 700, marginBottom: '5px' }}>
                      <Count number={100} text='+' />
                    </h2>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '16px' }}>Expert Speakers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#fff' }}>
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".2s">
              <div style={{
                background: 'linear-gradient(135deg, #FFD335 0%, #F69B17 100%)',
                padding: '60px 50px',
                borderRadius: '20px',
                height: '100%',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '-50px',
                  right: '-50px',
                  width: '200px',
                  height: '200px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '50%'
                }}></div>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    background: '#26225B', 
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '30px'
                  }}>
                    <i className="flaticon-check-mark" style={{ fontSize: '40px', color: '#FFD335' }}></i>
                  </div>
                  <h3 style={{ color: '#26225B', fontSize: '32px', fontWeight: 700, marginBottom: '20px' }}>
                    Our Mission
                  </h3>
                  <p style={{ color: '#031F42', fontSize: '18px', lineHeight: '1.8', margin: 0 }}>
                    To empower healthcare professionals across the Middle East with accessible, accredited education; to equip organizers with the tools to deliver high-quality programs; and to provide industry stakeholders with ethical, effective channels of engagement, all in one trusted hub.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
              <div style={{
                background: 'linear-gradient(135deg, #26225B 0%, #553CDF 100%)',
                padding: '60px 50px',
                borderRadius: '20px',
                height: '100%',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  bottom: '-50px',
                  left: '-50px',
                  width: '200px',
                  height: '200px',
                  background: 'rgba(255,255,255,0.05)',
                  borderRadius: '50%'
                }}></div>
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ 
                    width: '80px', 
                    height: '80px', 
                    background: '#FFD335', 
                    borderRadius: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '30px'
                  }}>
                    <i className="flaticon-growth" style={{ fontSize: '40px', color: '#26225B' }}></i>
                  </div>
                  <h3 style={{ color: '#fff', fontSize: '32px', fontWeight: 700, marginBottom: '20px' }}>
                    Our Vision
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', lineHeight: '1.8', margin: 0 }}>
                    To be the leading marketplace and solutions provider for medical education in the region, setting new benchmarks for accessibility, credibility, and collaboration in CME and CPD.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#F4F9FF' }}>
        <div className="container">
          <div className="section-title text-center mb-60">
            <h6 className="yellow-text wow fadeInUp">A Comprehensive Marketplace</h6>
            <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ fontSize: '48px' }}>
              Connecting Supply & Demand in <br />Healthcare Education
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".5s" style={{ maxWidth: '700px', margin: '20px auto 0', fontSize: '18px', color: '#5B6D84' }}>
              Whether you're seeking accredited learning, organizing events, or engaging with healthcare audiences, MedHub is your one-stop destination.
            </p>
          </div>
          <div className="row g-4">
            {whoWeServe.map((item, index) => (
              <div className="col-lg-6 col-md-6" key={index}>
                <div className="wow fadeInUp" data-wow-delay={`.${index + 2}s`} style={{
                  background: '#fff',
                  padding: '40px 35px',
                  borderRadius: '20px',
                  height: '100%',
                  transition: 'all 0.3s ease',
                  border: '2px solid transparent',
                  boxShadow: '0px 4px 25px rgba(0, 0, 0, 0.06)'
                }} 
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.borderColor = '#FFD335';
                  e.currentTarget.style.boxShadow = '0px 20px 40px rgba(38, 34, 91, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.boxShadow = '0px 4px 25px rgba(0, 0, 0, 0.06)';
                }}>
                  <div style={{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(135deg, #26225B 0%, #553CDF 100%)',
                    borderRadius: '15px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '25px'
                  }}>
                    <i className={item.icon} style={{ fontSize: '35px', color: '#FFD335' }}></i>
                  </div>
                  <h4 style={{ fontSize: '24px', fontWeight: 700, color: '#031F42', marginBottom: '15px' }}>
                    {item.title}
                  </h4>
                  <p style={{ color: '#5B6D84', fontSize: '16px', lineHeight: '1.8', margin: 0 }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-0" style={{ background: '#F4F9FF' }}>
        <div className="container">
          <div className="section-title text-center mb-60">
            <h6 className="yellow-text wow fadeInUp">More Than a Platform</h6>
            <h2 className="wow fadeInUp" data-wow-delay=".3s" style={{ fontSize: '48px' }}>
              A Complete Solutions Provider
            </h2>
            <p className="wow fadeInUp" data-wow-delay=".5s" style={{ maxWidth: '700px', margin: '20px auto 0', fontSize: '18px', color: '#5B6D84' }}>
              We support the entire lifecycle of CME and CPD programs with comprehensive solutions
            </p>
          </div>
          <div className="row g-4">
            {solutions.map((item, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="wow fadeInUp" data-wow-delay={`.${index + 2}s`} style={{
                  background: '#fff',
                  padding: '40px 30px',
                  borderRadius: '20px',
                  height: '100%',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  border: '2px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.background = 'linear-gradient(135deg, #26225B 0%, #553CDF 100%)';
                  const title = e.currentTarget.querySelector('h5');
                  const para = e.currentTarget.querySelector('p');
                  const icon = e.currentTarget.querySelector('.icon-wrapper');
                  if (title) (title as HTMLElement).style.color = '#fff';
                  if (para) (para as HTMLElement).style.color = 'rgba(255,255,255,0.9)';
                  if (icon) {
                    (icon as HTMLElement).style.background = '#FFD335';
                    const iconElem = icon.querySelector('i');
                    if (iconElem) (iconElem as HTMLElement).style.color = '#26225B';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = '#fff';
                  const title = e.currentTarget.querySelector('h5');
                  const para = e.currentTarget.querySelector('p');
                  const icon = e.currentTarget.querySelector('.icon-wrapper');
                  if (title) (title as HTMLElement).style.color = '#031F42';
                  if (para) (para as HTMLElement).style.color = '#5B6D84';
                  if (icon) {
                    (icon as HTMLElement).style.background = 'linear-gradient(135deg, #FFD335 0%, #F69B17 100%)';
                    const iconElem = icon.querySelector('i');
                    if (iconElem) (iconElem as HTMLElement).style.color = '#26225B';
                  }
                }}>
                  <div className="icon-wrapper" style={{
                    width: '80px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #FFD335 0%, #F69B17 100%)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 25px',
                    transition: 'all 0.3s ease'
                  }}>
                    <i className={item.icon} style={{ fontSize: '40px', color: '#26225B', transition: 'all 0.3s ease' }}></i>
                  </div>
                  <h5 style={{ fontSize: '20px', fontWeight: 700, color: '#031F42', marginBottom: '15px', transition: 'all 0.3s ease' }}>
                    {item.title}
                  </h5>
                  <p style={{ color: '#5B6D84', fontSize: '15px', lineHeight: '1.7', margin: 0, transition: 'all 0.3s ease' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ 
        background: 'linear-gradient(135deg, #26225B 0%, #553CDF 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          backgroundImage: 'radial-gradient(circle at 30% 20%, #FFD335 0%, transparent 50%), radial-gradient(circle at 70% 80%, #00E2C5 0%, transparent 50%)'
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center g-5">
            <div className="col-lg-7">
              <h6 className="wow fadeInUp" style={{ color: '#FFD335', fontSize: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '20px' }}>
                Why Choose MedHub
              </h6>
              <h2 className="wow fadeInUp" data-wow-delay=".2s" style={{ color: '#fff', fontSize: '42px', fontWeight: 700, lineHeight: '1.3', marginBottom: '25px' }}>
                More Than a Platform – <br />A Growing Community
              </h2>
              <div className="wow fadeInUp" data-wow-delay=".4s">
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    { icon: 'flaticon-map', text: 'Regionally Focused – Tailored to UAE and Middle East regulatory requirements' },
                    { icon: 'flaticon-send-data', text: 'End-to-End Services – From listing to accreditation to post-event analytics' },
                    { icon: 'flaticon-insurance', text: 'Trust & Compliance – Upholding the integrity of medical education' },
                    { icon: 'flaticon-community', text: 'Community First – Bridging organizers, learners, speakers, and industry' },
                    { icon: 'flaticon-online-education', text: 'Accessibility – Seamless digital experience for busy healthcare professionals' }
                  ].map((item, index) => (
                    <li key={index} style={{ 
                      display: 'flex', 
                      alignItems: 'flex-start', 
                      gap: '20px', 
                      marginBottom: index !== 4 ? '20px' : 0 
                    }}>
                      <div style={{
                        width: '50px',
                        height: '50px',
                        minWidth: '50px',
                        background: '#FFD335',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <i className={item.icon} style={{ fontSize: '24px', color: '#26225B' }}></i>
                      </div>
                      <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '18px', lineHeight: '1.7', margin: '10px 0 0' }}>
                        {item.text}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="wow fadeInUp" data-wow-delay=".6s" style={{
                background: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(10px)',
                padding: '50px 40px',
                borderRadius: '30px',
                border: '2px solid rgba(255,255,255,0.2)'
              }}>
                <h4 style={{ color: '#fff', fontSize: '28px', fontWeight: 700, marginBottom: '30px', textAlign: 'center' }}>
                  Ready to Join Our Community?
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  <Link href="/courses" className="theme-btn hover-white" style={{ width: '100%', justifyContent: 'center' }}>
                    Browse CME/CPD Courses
                  </Link>
                  <Link href="/event" className="theme-btn yellow-btn" style={{ width: '100%', justifyContent: 'center' }}>
                    <i className="fas fa-calendar"></i>
                    List Your Event
                  </Link>
                  <Link href="/contact" className="theme-btn hover-white" style={{ width: '100%', justifyContent: 'center' }}>
                    Get in Touch
                  </Link>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '14px', textAlign: 'center', margin: '25px 0 0' }}>
                  Join 15,000+ healthcare professionals already learning with MedHub
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;