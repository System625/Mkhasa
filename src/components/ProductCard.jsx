// import { cn } from "../utils/cn";
// import { Button } from "./ui/Button";
// import { Link } from "react-router-dom";
// import { format } from "../utils/lib";
// export const Product = ({
//   product,
//   category,
//   originalPrice,
//   discountedPrice,
//   image,
//   id,
//   className,
// }) => {
//   return (
//     <Link to={`/products/${id}`}>
//     <div
//       className={cn(
//         "bg-white rounded-2xl overflow-hidden h-full @container      ",
//         className
//       )}
//     >
//       <div className="w-full aspect-square relative">
//         <img
//           src={image}
//           alt=""
//           className="h-full w-full absolute object-cover "
//         />
//       </div>

//       <div className="px-4 pt-2 pb-4 flex text-sm flex-col h-[calc(100%-6rem)]">
//         <p className="text-[#555] font-medium @[240px]:text-app-ash-2      ">
//           {category}
//         </p>
//         <h2 className="text-app-black font-bold text-[16px] pt-1 line-clamp-4      ">
//           {product}
//         </h2>
//         <div className="flex pt-2 gap-y-4 gap-x-3 flex-col @[240px]:flex-row @[240px]:items-center @[240px]:justify-between">
//           <div>
//             {discountedPrice ? (
//               <div className="flex items-center gap-3 font-NimbusSan">
//                 <p className="line-through font-NimbusSan text-app-ash-1 text-xs">
//                   ₦{format(originalPrice)}
//                 </p>
//                 <p>₦{format(discountedPrice)}</p>
//               </div>
//             ) : (
//               <p>₦{format(originalPrice)}</p>
//             )}
//           </div>

//             <Button variant="rectangle" className="md:hidden       block bg-app-black  md:w-full px-8 text-center text-app-ash font-medium text-nowrap text-sm mt-auto @[240px]:bg-app-black">
//               Buy Now
//             </Button>
//             <Button variant="rectangle" className="hidden md:block      ">
//               Add To Cart
//             </Button>
//         </div>
//       </div>
//     </div>
//           </Link>
//   );
// };
// import { cn } from "../utils/cn";
// import { Button } from "./ui/Button";
// import { Link } from "react-router-dom";
// import { format } from "../utils/lib";

// export const Product = ({
//   product,
//   category,
//   originalPrice,
//   discountedPrice,
//   image,
//   id,
//   className,
// }) => {
//   return (
//     <Link to={`/products/${id}`}>
//       <div
//         className={cn(
//           "bg-white border-2 border-grey rounded-2xl overflow-hidden h-full flex flex-col justify-between      ",
//           className
//         )}
//       >
//         <div className="w-full aspect-square relative">
//           <img
//             src={image}
//             alt=""
//             className="h-full w-full absolute object-cover"
//           />
//         </div>

//         <div className="px-4 pt-2 pb-4 flex text-sm flex-col flex-grow">
//           <p className="text-[#555] font-light @[240px]:text-app-ash-2   ">
//             {category}
//           </p>
//           <h2 className="text-app-black font-bold text-[16px] pt-1 line-clamp-4       flex-grow">
//             {product}
//           </h2>
//           <div className="mt-auto">
//             <div className="flex gap-3 flex-col @[240px]:flex-row @[240px]:items-center @[240px]:justify-between">
//               <div>
//                 {discountedPrice ? (
//                   <div className="flex items-center gap-3 font-NimbusSan">
//                     <p className="line-through font-NimbusSan text-app-ash-1 text-xs">
//                       ₦{format(originalPrice)}
//                     </p>
//                     <p>₦{format(discountedPrice)}</p>
//                   </div>
//                 ) : (
//                   <p>₦{format(originalPrice)}</p>
//                 )}
//               </div>
//             </div>
//             <div className="flex gap-2 w-full mt-2">
//               <Button
//                 variant="rectangle"
//                 className="md:hidden       block bg-app-black md:w-full px-8 text-center text-app-ash font-medium text-nowrap text-sm @[240px]:bg-app-black"
//               >
//                 Buy Now
//               </Button>
//               <Button
//                 variant="rectangle"
//                 className="hidden md:block       w-full"
//               >
//                 Add To Cart
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { cn } from "../utils/cn";
import { Button } from "./ui/Button";
import { format } from "../utils/lib";
import { CartContext } from '../contexts/Cart';

export const Product = ({
  product,
  category,
  originalPrice,
  discountedPrice,
  image,
  id,
  className,
}) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => prev > 1 ? prev - 1 : 1);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart({ itemId: id, quantity });
  };

  const navigateToProduct = () => navigate(`/products/${id}`);

  return (
    <div
      onClick={navigateToProduct}
      className={cn(
        "bg-white border-2 border-grey rounded-sm overflow-hidden h-full flex flex-col justify-between    cursor-pointer",
        className
      )}
    >
      <div className="w-full aspect-square relative">
        <img
          src={image}
          alt=""
          className="h-full w-full absolute object-cover"
        />
      </div>

      <div className="px-4 pt-2 pb-4 flex text-sm flex-col flex-grow">
        <p className="text-[#555] font-light @[240px]:text-app-ash-2   ">
          {category}
        </p>
        <h2 className="text-app-black font-bold text-[16px] pt-1 line-clamp-4 flex-grow">
          {product}
        </h2>
        <div className="mt-auto">
          <div className="flex gap-3 flex-col @[240px]:flex-row @[240px]:items-center @[240px]:justify-between">
            <div>
              {discountedPrice ? (
                <div className="flex items-center gap-3">
                  <p className="line-through text-app-ash-1 text-xs">
                    ₦{format(originalPrice)}
                  </p>
                  <p>₦{format(discountedPrice)}</p>
                </div>
              ) : (
                <p>₦{format(originalPrice)}</p>
              )}
            </div>
          </div>
          <div className="flex gap-2 w-full mt-2">
            <Button
              variant="rectangle"
              className="w-full rounded-none h-12 bg-transparent transition duration-300 hover:bg-black hover:text-white text-black border-black border-2"
              onClick={handleAddToCart}
            >
              Add To Cart
            </Button>
            <div className="flex items-center border border-black bg-black text-white">
              <button onClick={(e) => { e.stopPropagation(); decrement(); }} className="px-2 py-1">-</button>
              <span className="px-2">{quantity}</span>
              <button onClick={(e) => { e.stopPropagation(); increment(); }} className="px-2 py-1">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};