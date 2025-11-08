import MarqueeOne from "@/common/MarqueeOne";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import React from "react";
import HeroHomeTwo from "./HeroHomeTwo";
import ChooseHomeFour from "../home-4/ChooseHomeFour";
import TopCategoryHomeTwo from "./TopCategoryHomeTwo";
import CategoryHomeFive from "../home-5/CategoryHomeFive";
import EventsHomeFive from "../home-5/EventsHomeFive";
import ChooseHomeFive from "../home-5/ChooseHomeFive";
import PopularCoursesHomeTwo from "./PopularCoursesHomeTwo";
import EventHomeTwo from "./EventHomeTwo";
import ChooseHomeTwo from "./ChooseHomeTwo";
import TeamHomeTwo from "./TeamHomeTwo";
import CertificateHomeTwo from "./CertificateHomeTwo";
import CmeStepsHomeTwo from "./CmeStepsHomeTwo";
import AiChatAssistant from "./AiChatAssistant";
import CoursesHomeTwo from "./CoursesHomeTwo";
import TestimonialHomeTwo from "./TestimonialHomeTwo";
import FaqHomeTwo from "./FaqHomeTwo";
import BlogHomeTwo from "./BlogHomeTwo";
import FooterTwo from "@/layouts/footers/FooterTwo";

const HomeTwo = () => {
	return (
		<>
			<MarqueeOne />
			<HeaderTwo />
			<HeroHomeTwo />
			<div style={{ marginTop: "-60px" }}>
				<CategoryHomeFive />
			</div>
			<PopularCoursesHomeTwo />
			<MarqueeOne />
			<div style={{ marginTop: "-60px" }}>
			<EventsHomeFive />
			</div>
			<div style={{ marginTop: "-60px", marginBottom: "70px" }}>
				<ChooseHomeFive />
			</div>
			<TeamHomeTwo />
			<CertificateHomeTwo />
		
			<CoursesHomeTwo />
			<MarqueeOne />
			<section className="footer-banner-items">
				<div className="container">
					<div className="row g-4">
						<div className="col-lg-6">
							<div className="footer-banner">
								<div className="content">
									<h3 className="wow fadeInUp">Promote Your Course</h3>
									<p className="wow fadeInUp" data-wow-delay=".3s">
										Reach thousands of healthcare professionals and maximize your course enrollment.
									</p>
									<a href="/register" className="theme-btn wow fadeInUp" data-wow-delay=".5s">Get Started</a>
								</div>
								<div className="thumb">
									<img src="assets/img/footer/course.jpg" alt="img" className="wow fadeInUp" data-wow-delay="0.7s" style={{width: "222px", height: "235px", objectFit: "cover"}} />
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="footer-banner style-2">
								<div className="content">
									<h3 className="wow fadeInUp">Promote Organization</h3>
									<p className="wow fadeInUp" data-wow-delay=".3s">
										Showcase your medical education programs and connect with healthcare learners.
									</p>
									<a href="/register" className="theme-btn wow fadeInUp" data-wow-delay=".5s">Get Started</a>
								</div>
								<div className="thumb">
									<img src="assets/img/footer/organisasion.jpg" alt="img" className="wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s" style={{width: "222px", height: "235px", objectFit: "cover"}} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<CmeStepsHomeTwo />
			<div style={{ marginTop: "-130px" }}>
			<AiChatAssistant />
			</div>
			<TestimonialHomeTwo />
			<FaqHomeTwo />
			<BlogHomeTwo />
			<MarqueeOne />
			<FooterTwo />
		</>
	);
};

export default HomeTwo;
