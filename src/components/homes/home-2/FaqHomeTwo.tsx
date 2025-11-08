
import React from 'react';

const FaqHomeTwo = () => {
  return (
    <>
      <section className="faq-section fix section-padding pt-0">
            <div className="container">
                <div className="faq-wrapper">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="faq-image-items">
                                <div className="row g-4 align-items-center">
                                    <div className="col-md-6 d-none d-md-block">
                                        <div className="faq-image wow img-custom-anim-left">
                                            <img src="assets/img/faq/300x430.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="faq-image style-2 d-none d-md-block wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                            <img src="assets/img/faq/270x200.jpg" alt="img" />
                                        </div>
                                        <div className="faq-image wow img-custom-anim-bottom" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                            <img src="assets/img/faq/300x430 1.jpg" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-content">
                                <div className="section-title">
                                    <h6 className="wow fadeInUp">
                                        Frequently Asked
                                    </h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Questions About MedHub
                                    </h2>
                                </div>
                                <div className="faq-items mb-0 mt-4 mt-md-0">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item wow fadeInUp" data-wow-delay=".2s">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    How do I earn CME/CPD credits through MedHub?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        MedHub offers accredited CME and CPD programs recognized by major healthcare authorities. After completing a course or attending an event, you can download your certificate of completion and credits will be tracked in your profile.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item wow fadeInUp" data-wow-delay=".4s">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    How can I list my event on MedHub?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        Event organizers can create an account on MedHub and submit their event details through our partner portal. Our team will review your event and help you gain accreditation from relevant healthcare authorities.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item wow fadeInUp" data-wow-delay=".6s">
                                            <h2 className="accordion-header" id="headingthree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapsethree" aria-expanded="false"
                                                    aria-controls="collapsethree">
                                                    Which authorities recognize MedHub-accredited programs?
                                                </button>
                                            </h2>
                                            <div id="collapsethree" className="accordion-collapse collapse"
                                                aria-labelledby="headingthree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        MedHub programs are recognized by DHA (Dubai Health Authority), DOH (Department of Health), MOHAP (Ministry of Health & Prevention), SCFHS (Saudi Commission for Health Specialties), QCHP (Qatar Center for Healthcare Professionals), and OMSB (Oman Medical Specialty Board).
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-0 wow fadeInUp" data-wow-delay=".8s">
                                            <h2 className="accordion-header" id="headingfour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapsefour" aria-expanded="false"
                                                    aria-controls="collapsefour">
                                                    Are hybrid and online learning options available?
                                                </button>
                                            </h2>
                                            <div id="collapsefour" className="accordion-collapse collapse"
                                                aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        Yes, MedHub offers flexible learning formats including fully online courses, live webinars, and hybrid events that combine in-person and virtual elements. Choose what works best for your schedule.
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

export default FaqHomeTwo;