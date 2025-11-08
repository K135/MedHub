import React from 'react'; 
import Faq from '@/components/faq';
import Wrapper from '@/layouts/Wrapper';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Faq - MedHub",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <Faq />
    </Wrapper>
  );
};

export default index;