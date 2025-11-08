import BreadcrumbEvent from '@/common/breadcrumb/BreadcrumbEvent';
import MarqueeOne from '@/common/MarqueeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import InstructorArea from './InstructorArea';

const Instructor = () => {
  return (
    <>
      <HeaderOne />
			<BreadcrumbEvent title="Our Renowned Speakers" subtitle="Instructor" />
      <InstructorArea />       
			<MarqueeOne style_2={true} />
			<FooterOne />
    </>
  );
};

export default Instructor;