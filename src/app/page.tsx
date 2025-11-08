import HomeTwo from "@/components/homes/home-2"; 
import Wrapper from "@/layouts/Wrapper";
import { Metadata } from "next";
import React from "react";
// meta data

export const metadata: Metadata = {
	title: "Online Course - MedHub",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};

const index = () => {
	return (
		<Wrapper>
			<HomeTwo />    
		</Wrapper>
	);
};

export default index;
