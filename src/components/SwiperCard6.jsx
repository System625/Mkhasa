import armafimg from "../assets/images/armaf1.webp";
import { Link } from "react-router-dom";
export const SwiperCard6 = () => {
  return (

    <div className="min-h-screen w-full rounded-3xl md:h-screen overflow-y-hidden font-Helvetica">
      <div className="bg-fourth-card-image max-h-screen">
      <div className="">
      <Link to="/products/66711ca37216bd00159220e4">
        <img
          src={armafimg}
          // fetchpriority="high"
          className="block md:hidden cursor-pointer object-cover bg-no-repeat absolute bottom-8 top-0 right-0 left-0 w-full h-60"
        />
      </Link>
    </div>
      </div>
    </div>
  );
};