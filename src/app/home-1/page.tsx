
import HomeSix from '@/components/homes/home-6';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Home One - MedHub",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <HomeSix />
    </Wrapper>
  );
};

export default index;