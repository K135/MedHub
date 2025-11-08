
import React from 'react';
import FooterOne from '@/layouts/footers/FooterTwo';
import HeaderOne from '@/layouts/headers/HeaderOne';
import BreadcrumbCourses from '@/common/breadcrumb/BreadcrumbCourses';
import CoursesGridArea from '../courses-grid/CoursesGridArea';

const Courses = () => {
  return (
		<>
			<HeaderOne />
			<BreadcrumbCourses title="All Courses / Events" subtitle="Courses" />
			<CoursesGridArea />
			<FooterOne />
		</>
	);
};

export default Courses;