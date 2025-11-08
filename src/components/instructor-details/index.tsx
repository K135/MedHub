import React from 'react';
import MarqueeOne from '@/common/MarqueeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import InstructorDetailsArea from './InstructorDetailsArea'; 
import BreadcrumbInstructor from '@/common/breadcrumb/BreadcrumbInstructor';

const InstructorDetails = () => {
  return (
    <>
      <HeaderOne />
			<BreadcrumbInstructor />
      <InstructorDetailsArea />       
			<MarqueeOne style_2={true} />
			<FooterOne />
    </>
  );
};

export default InstructorDetails;