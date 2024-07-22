import React, { useState, useEffect } from 'react';
import { Wrapper } from "../components/ui/Wrapper";
import { SwiperElem } from "../components/Swiper";
import { LatestProducts } from "../components/LatestProducts";
import { Seo } from "../components/Seo";
import { NewDeals } from "../components/NewDeals"
import { BestSellers } from "../components/BestSellers";
import { FeaturedProducts } from "../components/FeaturedProducts";
// import NewArrival from "../components/NewArrival";
// import { Sales } from "../components/Sales";
// import { Recommended } from "../components/Recommended";
// import { CategoryPanel } from "../components/CategoryPanel";
// import { Features } from "../components/Features";
// import { FeaturedProducts } from "../components/FeaturedProducts";
// import { TopCategories } from "../components/TopCategories";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-app-red"></div>
  </div>
);

export const Component = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust this value as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <main className="bg-white">
      <Seo title="Mkhasa | Home" type="webapp" name="" />
      <Wrapper>
        <div className="flex flex-col gap-8 py-2 ">
          <SwiperElem />
        </div>        
        <LatestProducts />                
        <FeaturedProducts />          
        <BestSellers />     
        <NewDeals/>
        {/* <Sales /> */}
        {/* <NewArrivals /> */}
        {/* <TopCategories /> */}
        {/* <div className="pt-6"><Features /></div> */}
      </Wrapper>
    </main>
  );
};
