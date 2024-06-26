import { Button } from "./ui/Button";
import geneimg from "../assets/images/GenieClubluxe.jpeg";
import { Link } from "react-router-dom";
export const SwiperCard3 = () => {
  return (

    <div className="max-h-screen w-full rounded-3xl md:h-screen overflow-y-hidden font-Helvetica">
      <Link to="/products/66711ca37216bd00159220e4" style={{ display: "contents" }}>
      <div className="bg-first-card-image h-screen">
      <div className="">
        <img
          src={geneimg}
          fetchpriority="high"
          className="block md:hidden cursor-pointer object-cover bg-no-repeat absolute bottom-0 -top-12 right-0 sm:bottom-2 sm:right-2 w-[400px]"
        />
    </div>
      </div>
      </Link>
    </div>
  );
};
