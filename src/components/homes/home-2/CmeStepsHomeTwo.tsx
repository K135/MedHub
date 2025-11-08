"use client";
import React, { useState } from 'react';

interface StepData {
  id: number;
  icon: string;
  title: string;
  description: string;
  iconAlt: string;
}

const CmeStepsHomeTwo = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const steps: StepData[] = [
    {
      id: 1,
      icon: "flaticon-online-education",
      title: "Know Your Requirements",
      description: "Understand your country's or health authority's CME/CPD requirements. Enter your profession and region to learn what's needed for license renewal or credit compliance.",
      iconAlt: "CME/CPD requirement guide"
    },
    {
      id: 2,
      icon: "flaticon-graphic-design",
      title: "Discover Accredited Courses",
      description: "Explore a wide range of accredited CME and CPD programs through MedHub's catalog — across specialties, formats, and regional events.",
      iconAlt: "Discover relevant CME/CPD courses and conferences"
    },
    {
      id: 3,
      icon: "flaticon-graduation",
      title: "Register & Learn",
      description: "Select your preferred course or event — whether online, hybrid, or in-person — and complete it at your own pace.",
      iconAlt: "Register for a CME/CPD activity"
    },
    {
      id: 4,
      icon: "flaticon-certificate",
      title: "Earn Credits & Grow",
      description: "Track your progress, download certificates, and achieve the credits required to fulfill your professional learning goals.",
      iconAlt: "Earn CME/CPD credits"
    }
  ];

  return (
    <>
      <section className="cme-steps-section section-padding">
        <div className="container">
          {/* Section Title */}
          <div className="section-title text-center mb-60 wow fadeInUp">
            <h6 className="yellow-text">Professional Development</h6>
            <h2 className="cme-main-title">
              4 Easy Steps to Complete <br />
              Your CME/CPD Requirements
            </h2>
            <p className="cme-subtitle">
              Your streamlined pathway to professional excellence and compliance
            </p>
          </div>

          {/* Steps Grid */}
          <div className="cme-steps-grid">
            {steps.map((step, index) => (
              <React.Fragment key={step.id}>
                <div 
                  className={`cme-step-card wow fadeInUp ${activeStep === step.id ? 'active' : ''}`}
                  data-wow-delay={`.${index + 2}s`}
                  onMouseEnter={() => setActiveStep(step.id)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Step Number Badge */}
                  <div className="step-badge">
                    <span>{step.id}</span>
                  </div>

                  {/* Icon Container */}
                  <div className="step-icon-container">
                    <i className={step.icon}></i>
                  </div>

                  {/* Content */}
                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>

                  {/* Connection Arrow (except last card) */}
                  {index < steps.length - 1 && (
                    <div className="step-arrow">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default CmeStepsHomeTwo;