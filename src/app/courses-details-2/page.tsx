
import React from 'react';
import Wrapper from '@/layouts/Wrapper'; 
import CoursesDetailsTwo from '@/components/courses-details-2';


import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Courses Details Two - MedHub",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <CoursesDetailsTwo />      
    </Wrapper>
  );
};

export default index;