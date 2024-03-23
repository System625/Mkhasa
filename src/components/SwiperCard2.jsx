import heroimg from "../assets/images/Getpaid.png";
import elipses from "../assets/images/Rectangle7.png";

export const SwiperCard2 = () => {
  return (
    <div>
      <div className="min-h-[410px] md:w-[945px] w-full bg-[#A40001] rounded-3xl overflow-hidden md:h-[460px]">
        <div>
          <div className="w-full mr-20 -px-20 title">
            <div className="flex flex-col gap-1 px-4 md:-mt-10 mt:15 pt:30 md:gap-2 md:px-28 md:pt-20">
              <h1 className="text-[#fff] lg:text-5xl text-base  pt-28 -mt-10 md:text-3xl font-bold leading-tight md:-mt-24 md:pt-24 ">
                Swift & Fast
              </h1>
              <h1 className="text-[#fff] lg:text-5xl text-base -mt-2 md:text-3xl font-bold leading-tight md:-mt-28 md:pt-24">
                Delivery
              </h1>
              <p className="hidden md:block text-white sm:text-xs md:text-sm md:z-[5] ">
                swift delivery,seamless service, bringing convenience to your
              </p>
              <p className="hidden md:block text-white sm:text-xs md:text-sm md:z-[5]">
                doorstep.
              </p>
            </div>
            <div className="px-38">
              <img
                src={elipses}
                className="absolute top-0 right-0 md:z-[1] md:w-[195px] w-[145px]"
              />
              <img
                src={heroimg}
                className="absolute md:bottom-0 md:right-0 bottom-2 right-2 pl-44 md:pl-0 md:w-[375px]  w-[444px] md:z-[3] "
              />
            </div>
            <div className="px-2 pt-2 mr-20 md:px-24">
              <button className="px-1 py-1 font-semibold text-black bg-white rounded-full md:px-6 md:py-1 ">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
