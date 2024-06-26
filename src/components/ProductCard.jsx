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
//         "bg-white rounded-2xl overflow-hidden h-full @container    font-Helvetica",
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
//         <p className="text-[#555] font-medium @[240px]:text-app-ash-2    font-Helvetica">
//           {category}
//         </p>
//         <h2 className="text-app-black font-bold text-[16px] pt-1 line-clamp-4    font-Helvetica">
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
          
//             <Button variant="rectangle" className="md:hidden    font-Helvetica block bg-app-black  md:w-full px-8 text-center text-app-ash font-medium text-nowrap text-sm mt-auto @[240px]:bg-app-black">
//               Buy Now
//             </Button>
//             <Button variant="rectangle" className="hidden md:block    font-Helvetica">
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
//           "bg-white border-2 border-grey rounded-2xl overflow-hidden h-full flex flex-col justify-between    font-Helvetica",
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
//           <p className="text-[#555] font-light @[240px]:text-app-ash-2 font-Helvetica">
//             {category}
//           </p>
//           <h2 className="text-app-black font-bold text-[16px] pt-1 line-clamp-4    font-Helvetica flex-grow">
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
//                 className="md:hidden    font-Helvetica block bg-app-black md:w-full px-8 text-center text-app-ash font-medium text-nowrap text-sm @[240px]:bg-app-black"
//               >
//                 Buy Now
//               </Button>
//               <Button
//                 variant="rectangle"
//                 className="hidden md:block    font-Helvetica w-full"
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

import { cn } from "../utils/cn";
import { Button } from "./ui/Button";
import { Link } from "react-router-dom";
import { format } from "../utils/lib";

export const Product = ({
  product,
  category,
  originalPrice,
  discountedPrice,
  image,
  id,
  className,
}) => {
  return (
    <Link to={`/products/${id}`}>
      <div
        className={cn(
          "bg-white border-2 border-grey rounded-2xl overflow-hidden h-full flex flex-col justify-between font-Helvetica",
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
          <p className="text-[#555] font-light @[240px]:text-app-ash-2 font-Helvetica">
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
                className="md:hidden block bg-app-black md:w-full px-8 text-center text-app-ash font-normal text-nowrap text-sm"
              >
                Buy Now
              </Button>
              <Button
                variant="rectangle"
                className="hidden md:block w-full"
              >
                Add To Cart
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
