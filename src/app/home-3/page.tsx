
import HomeThree from '@/components/homes/home-3';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "University - MedHub",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <HomeThree />
    </Wrapper>
  );
};

export default index;