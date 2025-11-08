 
import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import Register from '@/components/register';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Register - MedHub",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <Register />
    </Wrapper>
  );
};

export default index;