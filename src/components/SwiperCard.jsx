import { Link } from "react-router-dom";
import shaghaftonka from "../assets/images/shaghaf-tonka.webp";

export const SwiperCard = () => {
  return (
    // <div>
    //   <div className="min-h-[240px] md:w-[1253px] w-full h-full bg-[#A40001]    font-Helvetica rounded-3xl overflow-hidden md:h-[560px]">
    //     <div>
    //       <div className="w-full title ">
    //         <div className="flex flex-col gap-1 px-4 md:-mt-10 mt:12 pt:30 md:gap-2 md:px-28 md:pt-40    font-Helvetica">
    //           <h1 className="text-[#fff] lg:text-6xl text-base  pt-28 -mt-10 md:text-5xl font-bold leading-tight md:-mt-24 md:pt-24 ">
    //             Step into A world
    //           </h1>
    //           <h1 className="text-[#fff] lg:text-6xl text-base -mt-2 md:text-5xl font-bold leading-tight md:-mt-28 md:pt-24">
    //             of scented
    //           </h1>
    //           <h1 className="text-[#fff] lg:text-6xl text-base -mt-2  md:text-5xl font-bold leading-tight md:-mt-28 md:pt-24">
    //             seduction
    //           </h1>
    //           <p className="hidden text-xs text-white md:block md:text-sm">
    //             Discover your signature scent, one spritz at a time.
    //           </p>
    //         </div>
    //         <img
    //           src={elipses}
    //           fetchpriority="high"
    //           className="absolute top-0 right-0 z-[1] md:w-[280px] w-[105px]"
    //         />
    //         <img
    //           src={heroimg}
    //           fetchpriority="high"
    //           className="absolute md:bottom-0 md:right-0 bottom-2 right-2 z-[2] md:w-[817px]  w-[314px]"
    //         />
    //         <div className="px-4 pt-2 md:px-24">
    //           <button className="text-xs md:text-lg px-1 py-1 font-semibold text-[#A40001] bg-white rounded-full md:px-16 md:py-4 sm:px-3">
    //             Explore Collection
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-full max-h-screen rounded-3xl md:h-screen overflow-y-hidden font-Helvetica"> 
    <Link to="/products/667aa01f461aae00158744a9" style={{ display: "contents" }}>     
     <div className="bg-image1 h-screen">
         <div className="">
           <img
             src={shaghaftonka}
             fetchpriority="high"
             className="block md:hidden cursor-pointer object-cover bg-no-repeat absolute bottom-0 top-0 right-0 left-0 w-full h-full"
           />
       </div>
         </div>
         </Link>
       </div>
  );
};
