
import React from 'react';

const FaqArea = () => {
  return (
    <>
       <section className="gallery-section section-padding pt-0 fix">
            <div className="faq-wrapper style-5">
                <div className="container">
                    <div className="section-title text-center">
                        <h6>Question & Answer</h6>
                        <h2>
                            Frequently Asked Questions
                        </h2>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="faq-content">
                                <div className="faq-items">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    What types of CME/CPD programs does MedHub offer?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        MedHub offers accredited CME and CPD programs across all healthcare specialties including physicians, nurses, dentists, pharmacists, and allied health professionals. Our programs are available in online, hybrid, and in-person formats, recognized by major health authorities across the GCC region.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    How do I register for CME/CPD courses on MedHub?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        Simply create your free MedHub account, browse our catalog of accredited courses by specialty or format, and register for the programs that meet your professional development needs. You can track your progress and download certificates directly from your dashboard.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingthree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapsethree" aria-expanded="false"
                                                    aria-controls="collapsethree">
                                                    Are MedHub courses accredited and recognized?
                                                </button>
                                            </h2>
                                            <div id="collapsethree" className="accordion-collapse collapse"
                                                aria-labelledby="headingthree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        Yes, all courses on MedHub are fully accredited and recognized by major health authorities across the GCC region. Our platform ensures that all CME/CPD credits earned meet the requirements for professional license renewal and compliance.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-0">
                                            <h2 className="accordion-header" id="headingfour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapsefour" aria-expanded="false"
                                                    aria-controls="collapsefour">
                                                    Can I access courses on mobile devices?
                                                </button>
                                            </h2>
                                            <div id="collapsefour" className="accordion-collapse collapse"
                                                aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        Absolutely! MedHub is fully optimized for mobile devices, allowing you to access courses, track progress, and complete your CME/CPD requirements on-the-go. Learn at your own pace, anywhere, anytime.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-content">
                                <div className="faq-items">
                                    <div className="accordion" id="accordionExample2">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingfive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapsefive" aria-expanded="true" aria-controls="collapsefive">
                                                    How much do CME/CPD courses cost?
                                                </button>
                                            </h2>
                                            <div id="collapsefive" className="accordion-collapse collapse"
                                                aria-labelledby="headingfive" data-bs-parent="#accordionExample2">
                                                <div className="accordion-body">
                                                    <p>
                                                        Course pricing varies depending on the program type, duration, and format. Many courses are offered at competitive rates, with some free options available. Check individual course pages for specific pricing and any available discounts for early registration or group bookings.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingsix">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                                                    Can I get certificates for completed courses?
                                                </button>
                                            </h2>
                                            <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingsix"
                                                data-bs-parent="#accordionExample2">
                                                <div className="accordion-body">
                                                    <p>
                                                        Yes! Upon successful completion of any accredited course, you'll receive an official certificate with your earned CME/CPD credits. All certificates are digitally verifiable and can be downloaded directly from your MedHub dashboard for your professional records.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingseven">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseseven" aria-expanded="false"
                                                    aria-controls="collapseseven">
                                                    How do I track my CME/CPD credit requirements?
                                                </button>
                                            </h2>
                                            <div id="collapseseven" className="accordion-collapse collapse"
                                                aria-labelledby="headingseven" data-bs-parent="#accordionExample2">
                                                <div className="accordion-body">
                                                    <p>
                                                        MedHub provides a comprehensive dashboard where you can monitor your progress, view earned credits, and track remaining requirements for your professional license renewal. Set up your profile with your profession and region to get personalized credit tracking.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingeight">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseeight" aria-expanded="false"
                                                    aria-controls="collapseeight">
                                                    Do you offer group discounts for organizations?
                                                </button>
                                            </h2>
                                            <div id="collapseeight" className="accordion-collapse collapse"
                                                aria-labelledby="headingeight" data-bs-parent="#accordionExample2">
                                                <div className="accordion-body">
                                                    <p>
                                                        Yes! MedHub offers special pricing for hospitals, clinics, and healthcare organizations looking to train multiple staff members. Contact our team to discuss custom packages, bulk enrollment discounts, and enterprise solutions tailored to your organization's needs.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-0">
                                            <h2 className="accordion-header" id="headingnine">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapsenine" aria-expanded="false"
                                                    aria-controls="collapsenine">
                                                    How can I list my medical education event or course?
                                                </button>
                                            </h2>
                                            <div id="collapsenine" className="accordion-collapse collapse"
                                                aria-labelledby="headingnine" data-bs-parent="#accordionExample2">
                                                <div className="accordion-body">
                                                    <p>
                                                        MedHub welcomes healthcare educators and organizations to list their accredited courses and events. Simply register as an educator, submit your program details for review, and once approved, you can reach thousands of healthcare professionals across the Middle East region.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
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

export default FaqArea;