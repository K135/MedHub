 
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import ShopCart from '@/components/shop-cart';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Shop Cart - MedHub",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <ShopCart />
    </Wrapper>
  );
};

export default index;