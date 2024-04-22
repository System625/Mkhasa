import { Button } from "./ui/Button";
import dolceimg from "../assets/images/dolceonly.png";

export const SwiperCard1 = () => {
  return (
    <div className="max-h-screen w-full rounded-3xl md:h-screen overflow-y-hidden">
      <div className="bg-image h-screen pb-20">
        <div>
          <div className="w-full title ">
            <div className="flex flex-col md:gap-4 px-16 md:px-20 pt-16 md:pt-10 leading-6">
              <h1 className="text-[#000] lg:text-5xl mt-4 sm:pt-8 text-lg md:text-3xl font-bold leading-tight md:-mt-2 md:pt-4">
                Scented dreams,
              </h1>
              <h1 className="text-[#000] lg:text-5xl sm:-mt-4 sm:pt-3 text-lg md:text-3xl font-bold leading-tight md:-mt-6 md:pt-2">
                bottled just for
              </h1>
              <h1 className="text-[#000] lg:text-5xl sm:-mt-4 sm:pt-3 text-lg md:text-3xl font-bold leading-tight md:-mt-4 md:pt-2">
                You
              </h1>
              <p className="hidden md:block text-sm -mt-2 text-[#323232] sm:text-xs">
                Eleveate your senses with our enchating Fragnances
              </p>
            </div>
            <div className="">
              <img
                // src={dolceimg}
                className="block md:hidden object-cover bg-no-repeat absolute bottom-0 top-0 right-0  sm:bottom-2 sm:right-2 z-[2] md:w-[1050px] w-[400px] "
              />
            </div>
            <div className="px-16 md:px-20 pt-2 mx-auto">
              <button className="text-xs md:text-sm md:px-16 md:py-2 px-3 py-2 font-semibold text-white bg-[#A40001] rounded-full ">
                Explore Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
