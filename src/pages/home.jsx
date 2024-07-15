import { Wrapper } from "../components/ui/Wrapper";
// import { Features } from "../components/Features";
import { SwiperElem } from "../components/Swiper";
// import { FeaturedProducts } from "../components/FeaturedProducts";
import { LatestProducts } from "../components/LatestProducts";
import { TopCategories } from "../components/TopCategories";
import { Seo } from "../components/Seo";
// import { Sales } from "../components/Sales";
// import { NewArrivals } from "../components/NewArrivals";
import { NewDeals } from "../components/NewDeals"
import { BestSellers } from "../components/BestSellers";
// import { Recommended } from "../components/Recommended";
// import { CategoryPanel } from "../components/CategoryPanel";
import NewArrival from "../components/NewArrival";

export const Component = () => {
  return (
    <main className="bg-white">
      <Seo title="Mkhasa | Home" type="webapp" name="" />
      <Wrapper>
        <div className="flex flex-col gap-8 py-2 ">
          <SwiperElem />
        </div>
        <LatestProducts />
        <TopCategories />
        <div className="w-full absolute mx-auto -mt-40 left-0 pt-10">
        <NewArrival/>
        </div>
        {/* <Sales /> */}
        <div className="pt-32">
        <BestSellers />   
          </div>   
        <NewDeals/>
        {/* <NewArrivals /> */}

        {/* <FeaturedProducts /> */}
      </Wrapper>
      {/* <div className="pt-6"><Features /></div> */}
    </main>
  );
};
