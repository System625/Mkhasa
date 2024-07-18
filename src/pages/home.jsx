import { Wrapper } from "../components/ui/Wrapper";
import { SwiperElem } from "../components/Swiper";
import { LatestProducts } from "../components/LatestProducts";
import { Seo } from "../components/Seo";
import { NewDeals } from "../components/NewDeals"
import { BestSellers } from "../components/BestSellers";
import NewArrival from "../components/NewArrival";
// import { Sales } from "../components/Sales";
// import { Recommended } from "../components/Recommended";
// import { CategoryPanel } from "../components/CategoryPanel";
// import { Features } from "../components/Features";
// import { FeaturedProducts } from "../components/FeaturedProducts";
// import { TopCategories } from "../components/TopCategories";



export const Component = () => {
  return (
    <main className="bg-white">
      <Seo title="Mkhasa | Home" type="webapp" name="" />
      <Wrapper>
        <div className="flex flex-col gap-8 py-2 ">
          <SwiperElem />
        </div>        
        <LatestProducts />                
        <NewArrival/>                
        <BestSellers />     
        <NewDeals/>
        {/* <Sales /> */}
        {/* <NewArrivals /> */}
        {/* <TopCategories /> */}
        {/* <div className="pt-6"><Features /></div> */}
        {/* <FeaturedProducts /> */}
      </Wrapper>
    </main>
  );
};
