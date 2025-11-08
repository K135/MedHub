
import CoursesGrid from '@/components/courses-grid';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Courses",
	description: "Full Stack Developer",
	keywords: "CME,CPD",
};


const index = () => {
  return (
    <Wrapper>
      <CoursesGrid />
    </Wrapper>
  );
};

export default index;