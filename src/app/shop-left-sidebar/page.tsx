
 
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import ShopLeftSidebar from '@/components/shop-left-sidebar';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Shop Left Sidebar - MedHub",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <ShopLeftSidebar />
    </Wrapper>
  );
};

export default index;