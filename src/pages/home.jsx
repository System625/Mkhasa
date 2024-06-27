import { Wrapper } from "../components/ui/Wrapper";
import { Features } from "../components/Features";
import { SwiperElem } from "../components/Swiper";
// import { CategoryPanel } from "../components/CategoryPanel";
// import { FeaturedProducts } from "../components/FeaturedProducts";
import { LatestProducts } from "../components/LatestProducts";
// import { TopCategories } from "../components/TopCategories";
import { Seo } from "../components/Seo";
// import { Sales } from "../components/Sales";
import { NewArrivals } from "../components/NewArrivals";
import { BestSellers } from "../components/BestSellers";
// import { CategoryPanel } from "../components/CategoryPanel";

export const Component = () => {
  return (
    <main className="bg-white">
      <Seo title="Mkhasa | Home" type="webapp" name="" />
      <Wrapper>
        <div className="flex flex-col gap-8 py-2 ">
          <SwiperElem />
        </div>
        <BestSellers />
        <LatestProducts />
        {/* <Sales /> */}
        <NewArrivals />
        {/* <FeaturedProducts /> */}
        {/* <TopCategories /> */}
      </Wrapper>
      <div className="pt-6">{/* <Features /> */}</div>
    </main>
  );
};
