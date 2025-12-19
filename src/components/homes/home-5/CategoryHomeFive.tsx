
"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const category_data = [
  { title: "For Physicians", icon: "healthcare", delay: ".3s" },
  { title: "For Nurses", icon: "healthcare", delay: ".5s" },
  { title: "For Dentists", icon: "healthcare", delay: ".7s" },
  { title: "For Pharmacists", icon: "cooperation", delay: ".3s" },
  { title: "For Allied Health", icon: "healthcare",  delay: ".5s" },
  { title: "Pharma & MedTech", icon: "megaphone",  delay: ".7s" }
];

 

const CategoryHomeFive = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <>
        <section className="courses-section fix section-padding">
            <div className="container">
                <div className="section-title color-blue text-center">
                    <h6 className="wow fadeInUp">
                        Explore by Profession
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        CME / CPD Programs by Healthcare Specialty
                    </h2>
                </div>
                <div className="row">
                  {category_data.map((item, i) => (
                    <div key={i} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={item.delay}  
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(i)}>
                      <div className={`top-category-items ${activeIndex === i ? "active" : ""}`}>
                          <div className="icon">
                              <i className={`flaticon-${item.icon}`}></i>
                          </div>
                          <div className="content">
                              <h4><Link href="/courses">{item.title}</Link></h4>

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

export default CategoryHomeFive;