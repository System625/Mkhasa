import clubimg from "../assets/images/club.webp";
import { Link } from "react-router-dom";
export const SwiperCard7 = () => {
  return (

    <div className="max-h-screen w-full rounded-3xl md:h-screen overflow-y-hidden   ">
      <Link to="/products/669c0eaaaa718b0015e29a0a" style={{ display: "contents" }}>
      <div className="bg-fifth-card-image h-screen">
      <div className="">
        <img
          src={clubimg}
          fetchpriority="high"
          className="block cursor-pointer object-cover bg-no-repeat absolute bottom-0 top-0 right-0 left-0 w-full h-full"
        />
    </div>
      </div>
      </Link>
    </div>
  );
};