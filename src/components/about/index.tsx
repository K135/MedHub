import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import MarqueeOne from "@/common/MarqueeOne";
import NewsletterHomeOne from "../homes/home/NewsletterHomeOne";
import TestimonialHomeTwo from "../homes/home-2/TestimonialHomeTwo";
import BrandsHomeOne from "../homes/home/BrandsHomeOne";
import AboutArea from "./AboutArea";

const About = () => {
	return (
		<>
			<HeaderOne />
      <AboutArea />
      <TestimonialHomeTwo />
			<BrandsHomeOne />
      <NewsletterHomeOne />
			<MarqueeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default About;
