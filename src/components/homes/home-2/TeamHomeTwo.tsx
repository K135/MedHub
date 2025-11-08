
'use client';

import Link from 'next/link';
import React from 'react';

const TeamHomeTwo = () => {
  const speakers = [
    {
      name: "Dr. Ahmed",
      title: "Physician - Cardiology Specialist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80"
    },
    {
      name: "Fatima Hassan",
      title: "Nurse - Critical Care Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80"
    },
    {
      name: "Dr. Omar Abdullah",
      title: "Dentist - Oral Surgery Expert",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&q=80"
    },
    {
      name: "Dr. Layla Al-Farsi",
      title: "Pharmacist - Clinical Pharmacy",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80"
    },
    {
      name: "Dr. Khalid Rahman",
      title: "Physician - Internal Medicine",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&q=80"
    },
    {
      name: "Dr. Sara Al-Zahrani",
      title: "Allied Health - Radiologist",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&q=80"
    },
    {
      name: "Dr. Youssef Ibrahim",
      title: "Pharma & MedTech Innovator",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&q=80"
    },
    {
      name: "Dr. Noor Al-Din",
      title: "Dentist - Orthodontics",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&q=80"
    }
  ];

  // Duplicate speakers array multiple times for seamless infinite loop
  const duplicatedSpeakers = [...speakers, ...speakers];

  return (
    <>
      <section className="team-section fix section-padding pt-0">
        <div className="container-fluid px-0">
          <div className="section-title text-center mb-50">
            <h6 className="wow fadeInUp">
              Meet Our Instructors
            </h6>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">Our Renowned Speakers</h2>
          </div>
          
          <div className="speakers-marquee-wrapper">
            <div className="speakers-marquee">
              {duplicatedSpeakers.map((speaker, index) => (
                <div key={`speaker-${index}`} className="speaker-card">
                  <div className="speaker-image-wrapper">
                    <img 
                      src={speaker.image} 
                      alt={speaker.name}
                      className="speaker-image"
                    />
                  </div>
                  <div className="speaker-info">
                    <h4>
                      <Link href="/instructor-details">{speaker.name}</Link>
                    </h4>
                    <p>{speaker.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="event-button text-center pt-5 wow fadeInUp" data-wow-delay=".3s">
            <Link href="/instructor" className="theme-btn theme-blue-2">View All Speakers</Link>
          </div>
        </div>

        <style jsx>{`
          .speakers-marquee-wrapper {
            overflow: hidden;
            position: relative;
            width: 100%;
            padding: 20px 0;
            mask-image: linear-gradient(
              to right,
              transparent,
              black 10%,
              black 90%,
              transparent
            );
            -webkit-mask-image: linear-gradient(
              to right,
              transparent,
              black 10%,
              black 90%,
              transparent
            );
          }

          .speakers-marquee {
            display: flex;
            gap: 30px;
            animation: scroll-left 25s linear infinite;
            will-change: transform;
          }

          .speakers-marquee:hover {
            animation-play-state: paused;
          }

          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-280px * 8 - 30px * 8));
            }
          }

          .speaker-card {
            flex: 0 0 280px;
            background: #fff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .speaker-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          }

          .speaker-image-wrapper {
            position: relative;
            width: 280px;
            height: 280px;
            overflow: hidden;
          }

          .speaker-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.4s ease;
          }

          .speaker-card:hover .speaker-image {
            transform: scale(1.05);
          }

          .speaker-info {
            padding: 25px 20px;
            text-align: center;
            background: #fff;
          }

          .speaker-info h4 {
            margin: 0 0 8px 0;
            font-size: 20px;
            font-weight: 700;
            line-height: 1.3;
          }

          .speaker-info h4 a {
            color: #0f2239;
            text-decoration: none;
            transition: color 0.3s ease;
          }

          .speaker-info h4 a:hover {
            color: var(--primary-color, #FF6B2C);
          }

          .speaker-info p {
            margin: 0;
            color: #6b7280;
            font-size: 14px;
            font-weight: 500;
          }

          @media (max-width: 768px) {
            .speaker-card {
              flex: 0 0 200px;
            }

            .speaker-image-wrapper {
              width: 200px;
              height: 200px;
            }

            .speakers-marquee {
              gap: 20px;
            }

            .speaker-info h4 {
              font-size: 16px;
            }

            .speaker-info {
              padding: 15px;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default TeamHomeTwo;