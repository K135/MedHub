import React from "react";

import HeroHomeSix from "./HeroHomeSix";
import TeamHomeSix from "./TeamHomeSix";
import BlogHomeSix from "./BlogHomeSix";
import AboutHomeSix from "./AboutHomeSix";
import ChooseHomeSix from "./ChooseHomeSix";
import BrandsHomeSix from "./BrandsHomeSix";
import MarqueeOne from "@/common/MarqueeOne";
import FeatureHomeSix from "./FeatureHomeSix";
import HeaderOne from "@/layouts/headers/HeaderOne";
import NewsletterHomeSix from "./NewsletterHomeSix";
import TopCategoryHomeSix from "./TopCategoryHomeSix";
import TestimonialHomeSix from "./TestimonialHomeSix";
import FooterOne from "@/layouts/footers/FooterOne";
import PopularCoursesHomeSix from "./PopularCoursesHomeSix";

const HomeSix = () => {
	return (
		<> 
			<HeaderOne />
      <HeroHomeSix />
      <FeatureHomeSix />
      <TopCategoryHomeSix />
      <AboutHomeSix />
			<PopularCoursesHomeSix />
			<MarqueeOne />
			<ChooseHomeSix />
			<TeamHomeSix />
			<NewsletterHomeSix />
			<TestimonialHomeSix />
			<BrandsHomeSix />
			<BlogHomeSix />
			<MarqueeOne /> 
			<FooterOne />      
		</>
	);
};

export default HomeSix;
