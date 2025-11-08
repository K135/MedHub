
import Link from 'next/link';
import React from 'react';

const InstructorArea = () => {
  const baseSpeakers = [
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
  const instructors = [...baseSpeakers, ...baseSpeakers.slice(0, 4)];
  const delays = ['.2s', '.4s', '.6s', '.8s'];

  return (
    <>
      <section className="team-section-5 fix section-padding pt-0" style={{ marginTop: '-90px' }}>
        <div className="container">
          <div className="row">
            {instructors.map((instructor, index) => (
              <div
                key={`instructor-${index}`}
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={delays[index % delays.length]}
              >
                <div className="team-card-items style-2">
                  <div className="thumb">
                    <img src={instructor.image} alt={instructor.name} />
                    <div className="social-icon">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-instagram"></i></a>
                      <a href="#"><i className="fab fa-behance"></i></a>
                      <a href="#"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                  </div>
                  <div className="content">
                    <h4><Link href="/instructor-details">{instructor.name}</Link></h4>
                    <p>{instructor.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InstructorArea;