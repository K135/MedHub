import BreadcrumbCoursesDetails from '@/common/breadcrumb/BreadcrumbCoursesDetails';
import MarqueeOne from '@/common/MarqueeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React, { Suspense } from 'react';
import CoursesDetailsArea from './CoursesDetailsArea';
import RelatedCourses from './RelatedCourses';

const CoursesDetails = () => {
  return (
    <>
    <HeaderOne />
    <BreadcrumbCoursesDetails />
    <Suspense fallback={<div className="text-center py-5">Loading course details...</div>}>
      <CoursesDetailsArea />
    </Suspense>
    <RelatedCourses />
    <MarqueeOne style_2={true} />
    <FooterOne />      
    </>
  );
};

export default CoursesDetails;