 
import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import ProgramDetails from '@/components/program-details';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Program Details - MedHub",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <ProgramDetails />
    </Wrapper>
  );
};

export default index;