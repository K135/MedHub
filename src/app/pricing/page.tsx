 
import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import Pricing from '@/components/pricing';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Pricing - MedHub",
	description: "Flexible Pricing for Learner",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <Pricing />
    </Wrapper>
  );
};

export default index;