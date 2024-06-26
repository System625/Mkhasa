import clubimg from "../assets/images/club.webp";
import { Link } from "react-router-dom";
export const SwiperCard7 = () => {
  return (

    <div className="max-h-screen w-full rounded-3xl md:h-screen overflow-y-hidden font-Helvetica">
      <Link to="/products/666e888a8587aa00152706fb" style={{ display: "contents" }}>
      <div className="bg-fifth-card-image h-screen">
      <div className="">
        <img
          src={clubimg}
          fetchpriority="high"
          className="block md:hidden cursor-pointer object-cover bg-no-repeat absolute bottom-0 top-0 right-0 left-0 w-full h-full"
        />
    </div>
      </div>
      </Link>
    </div>
  );
};