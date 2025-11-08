"use client"
import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

const CoursesArea = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedFormats, setSelectedFormats] = useState<string[]>([]);
  const [selectedCredits, setSelectedCredits] = useState<string[]>([]);

  const categories = ["Cardiology", "Nursing", "Allied Health", "Emergency Medicine", "Radiology", "Healthcare Leadership", "Quality Assurance"];
  const courseFormats = ["In-Person", "Online", "Hybrid"];
  const creditTypes = ["CME Credits", "CPD Credits", "Certificate of Attendance", "Professional Development Hours"];

  useEffect(() => {
    const categoryParam = searchParams.get('category');
    const formatParam = searchParams.get('course-format');
    const creditParam = searchParams.get('CreditType');

    if (categoryParam) {
      const decodedCategories = decodeURIComponent(categoryParam).split(',');
      console.log('Setting categories from URL:', decodedCategories);
      setSelectedCategories(decodedCategories);
    } else {
      setSelectedCategories([]);
    }
    if (formatParam) {
      const decodedFormats = decodeURIComponent(formatParam).split(',');
      console.log('Setting formats from URL:', decodedFormats);
      setSelectedFormats(decodedFormats);
    } else {
      setSelectedFormats([]);
    }
    if (creditParam) {
      const decodedCredits = decodeURIComponent(creditParam).split(',');
      console.log('Setting credits from URL:', decodedCredits);
      setSelectedCredits(decodedCredits);
    } else {
      setSelectedCredits([]);
    }
  }, [searchParams]);

  const updateUrl = (newCategories: string[], newFormats: string[], newCredits: string[]) => {
    const params = new URLSearchParams();
    
    if (newCategories.length > 0) {
      params.set('category', encodeURIComponent(newCategories.join(',')));
    }
    if (newFormats.length > 0) {
      params.set('course-format', encodeURIComponent(newFormats.join(',')));
    }
    if (newCredits.length > 0) {
      params.set('CreditType', encodeURIComponent(newCredits.join(',')));
    }

    const queryString = params.toString();
    const newUrl = queryString ? `/courses?${queryString}` : '/courses';
    router.push(newUrl);
  };

  const handleCategoryToggle = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    setSelectedCategories(newCategories);
    updateUrl(newCategories, selectedFormats, selectedCredits);
  };

  const handleFormatToggle = (format: string) => {
    const newFormats = selectedFormats.includes(format)
      ? selectedFormats.filter(f => f !== format)
      : [...selectedFormats, format];
    setSelectedFormats(newFormats);
    updateUrl(selectedCategories, newFormats, selectedCredits);
  };

  const handleCreditToggle = (credit: string) => {
    const newCredits = selectedCredits.includes(credit)
      ? selectedCredits.filter(c => c !== credit)
      : [...selectedCredits, credit];
    setSelectedCredits(newCredits);
    updateUrl(selectedCategories, selectedFormats, newCredits);
  };

  const selectHandler = (e: any) => { };

  return (
    <>
       <section className="popular-courses-section fix section-padding">
            <div className="container" style={{ maxWidth: '1600px' }}>
                <div className="row g-4">
                    <div className="col-xl-3 col-lg-4">
                        <div className="courses-main-sidebar-area">
                            <div className="courses-main-sidebar">
                                <div className="courses-sidebar-items">
                                    <div className="wid-title">
                                        <h5>Category</h5>
                                    </div>
                                    <div className="courses-list">
                                        {categories.map((category) => (
                                            <label key={category} className="checkbox-single">
                                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                    <span className="checkbox-area d-center">
                                                        <input 
                                                            type="checkbox" 
                                                            checked={selectedCategories.includes(category)}
                                                            onChange={() => {
                                                                console.log('Category toggle:', category, 'Selected:', selectedCategories);
                                                                handleCategoryToggle(category);
                                                            }}
                                                        />
                                                        <span className="checkmark d-center"></span>
                                                    </span>
                                                    <span className="text-color">
                                                        {category}
                                                    </span>
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="courses-sidebar-items">
                                    <div className="wid-title">
                                        <h5>Course Format</h5>
                                    </div>
                                    <div className="courses-list">
                                        {courseFormats.map((format) => (
                                            <label key={format} className="checkbox-single">
                                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                    <span className="checkbox-area d-center">
                                                        <input 
                                                            type="checkbox" 
                                                            checked={selectedFormats.includes(format)}
                                                            onChange={() => handleFormatToggle(format)}
                                                        />
                                                        <span className="checkmark d-center"></span>
                                                    </span>
                                                    <span className="text-color">
                                                        {format}
                                                    </span>
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="courses-sidebar-items">
                                    <div className="wid-title">
                                        <h5>Credit Type</h5>
                                    </div>
                                    <div className="courses-list">
                                        {creditTypes.map((credit) => (
                                            <label key={credit} className="checkbox-single">
                                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                    <span className="checkbox-area d-center">
                                                        <input 
                                                            type="checkbox" 
                                                            checked={selectedCredits.includes(credit)}
                                                            onChange={() => handleCreditToggle(credit)}
                                                        />
                                                        <span className="checkmark d-center"></span>
                                                    </span>
                                                    <span className="text-color">
                                                        {credit}
                                                    </span>
                                                </span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8">
                        <div className="coureses-notices-wrapper">
                            <div className="courses-showing">
                                <div className="icon-items">
                                    <Link href="/courses-grid"><i className="fas fa-th"></i></Link>
                                    <Link href="/courses-list"><i className="fas fa-bars"></i></Link>
                                </div>
                                <h5>Showing <span>1-9</span> Of <span>62</span> Results</h5>
                            </div>
                            <div className="form-clt"> 
                                <NiceSelect
                                  className="category"
                                  options={[
                                    { value: "01", text: "Sort by : Default" },
                                    { value: "02", text: "Sort by popularity" },
                                    { value: "03", text: "Sort by average rating" },
                                    { value: "04", text: "Sort by latest" }, 
                                  ]}
                                  defaultCurrent={0}
                                  onChange={selectHandler}
                                  name=""
                                  placeholder="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="assets/img/courses/09.jpg" alt="img" />
                                    <h3 className="courses-title">Web Design</h3>
                                    <h4 className="topic-title">Advance Web Design</h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">Design</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                            Learn With Advance Web
                                            Design (UX/UI) Course
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Paul C. Deleon</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="assets/img/courses/10.jpg" alt="img" />
                                    <h3 className="courses-title">Business Finance</h3>
                                    <h4 className="topic-title">Finance and Business</h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">Business</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                            Finance Management Building
                                            Wealth Security Business
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Paul C. Deleon</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="assets/img/courses/11.jpg" alt="img" />
                                    <h3 className="courses-title">Programming</h3>
                                    <h4 className="topic-title">Advance Machine <br /> Learning</h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">Programming</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                            Introduction to Data Science and Machine Learning
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Paul C. Deleon</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="assets/img/courses/12.jpg" alt="img" />
                                    <h3 className="courses-title">Digital Marketing</h3>
                                    <h4 className="topic-title">Advance Digital <br /> Marketing</h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">Marketing</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                            Digital Marketing for Business
                                            Grow and Success Sales
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Paul C. Deleon</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="assets/img/courses/13.jpg" alt="img" />
                                    <h3 className="courses-title">Graphic Design</h3>
                                    <h4 className="topic-title">Graphic Design <br /> Masterclass</h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">Graphics</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                            Complete to Advance Graphic
                                            Design Masterclass
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Paul C. Deleon</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6">
                        <div className="courses-card-main-items">
                            <div className="courses-card-items style-2">
                                <div className="courses-image">
                                    <img src="assets/img/courses/14.jpg" alt="img" />
                                    <h3 className="courses-title">Leadership</h3>
                                    <h4 className="topic-title">Communication Skills</h4>
                                    <div className="arrow-items">
                                        <div className="GlidingArrow">
                                            <img src="assets/img/courses/a1.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay1">
                                            <img src="assets/img/courses/a2.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay2">
                                            <img src="assets/img/courses/a3.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay3">
                                            <img src="assets/img/courses/a4.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay4">
                                            <img src="assets/img/courses/a5.png" alt="img" />
                                        </div>
                                        <div className="GlidingArrow delay5">
                                            <img src="assets/img/courses/a6.png" alt="img" />
                                        </div>
                                    </div>
                                </div>
                                <div className="courses-content">
                                    <ul className="post-cat">
                                        <li>
                                            <Link href="/courses">Leadership</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </li>
                                    </ul>
                                    <h3>
                                        <Link href="/courses-details">
                                            Effective Communication and
                                            Leadership Skills
                                        </Link>
                                    </h3>
                                    <div className="client-items">
                                        <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                        <p>Paul C. Deleon</p>
                                    </div>
                                    <ul className="post-class">
                                        <li>
                                            <i className="far fa-books"></i>
                                            Lessons
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            80 Students
                                        </li>
                                        <li>
                                            <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                            </div>
                        </div>
                        <div className="page-nav-wrap pt-5 text-center">
                            <ul>
                                <li><a className="page-numbers" href="#">1</a></li>
                                <li><a className="page-numbers" href="#">2</a></li>
                                <li><a className="page-numbers" href="#">3</a></li>
                                <li><a className="page-numbers" href="#">4</a></li>
                                <li><a className="page-numbers" href="#"><i className="far fa-arrow-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default CoursesArea;