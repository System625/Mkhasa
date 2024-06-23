// import { SectionHeader } from "./ui/SectionHeader";
// import { Product } from "./ProductCard";
// import { ListGrid } from "./ui/ListGrid";
// import { useLoaderData } from "react-router-dom/dist";
// import useLongPress from "../hooks/utils/useLongPress";
// import { Icon } from "@iconify/react";
// import { useRef, useEffect } from "react";

// export const BestSellers = () => {
//   const { bestsellers } = useLoaderData();
//   const ref = useRef();

//   const { getHandlers, setElement } = useLongPress(ref.current);

//   useEffect(() => {
//     setElement(ref.current);
//   }, [setElement]);

//   return (
//     <section className="py-8    font-Helvetica">
//       <div className="flex items-center justify-between">
//         <SectionHeader header="Best Sellers" />

//         <div className="hidden md:flex gap-4">
//           <button
//             {...getHandlers("backward")}
//             className="h-10 w-10 bg-white rounded-full grid place-items-center hover:scale-105"
//           >
//             <Icon icon="fa6-solid:angle-left" style={{ fontSize: 28 }} />
//           </button>
//           <button
//             {...getHandlers("forward")}
//             className="h-10 w-10 bg-white rounded-full grid place-items-center hover:scale-105"
//           >
//             <Icon icon="fa6-solid:angle-left" hFlip style={{ fontSize: 28 }} />
//           </button>
//         </div>
//       </div>

// <ListGrid>
// {bestsellers.map(
//           (
//             { product, category, originalPrice, discountedPrice, image, id },
//             index
//           ) => (
//             <li key={index} className="md:flex-shrink-0 grow">
//               <Product
//                 product={product}
//                 category={category}
//                 originalPrice={originalPrice}
//                 discountedPrice={discountedPrice}
//                 image={image}
//                 id={id}
//                 className="min-w-[10rem]"
//               />
//             </li>
//           )
//         )}
// </ListGrid>
//       {/* <ul
//         className="pt-8 gap-4 flex flex-wrap sm:flex-nowrap overflow-x-auto sm:no-scrollbar"
//         ref={ref}
//       >
//         {bestsellers.map(
//           (
//             { product, category, originalPrice, discountedPrice, image, id },
//             index
//           ) => (
//             <li key={index} className="md:flex-shrink-0 grow">
//               <Product
//                 product={product}
//                 category={category}
//                 originalPrice={originalPrice}
//                 discountedPrice={discountedPrice}
//                 image={image}
//                 id={id}
//                 className="min-w-[10rem]"
//               />
//             </li>
//           )
//         )}
//       </ul> */}
//     </section>
//   );
// };
import { SectionHeader } from "./ui/SectionHeader";
import { Product } from "./ProductCard";
import { ListGrid } from "./ui/ListGrid";
import { useLoaderData } from "react-router-dom/dist";
import useLongPress from "../hooks/utils/useLongPress";
import { Icon } from "@iconify/react";
import { useRef, useEffect } from "react";
import {cn} from "../utils/cn.js"

export const BestSellers = ({ horizontalOnSmallScreens = true }) => {
  const { bestsellers } = useLoaderData();
  const ref = useRef();

  const { getHandlers, setElement } = useLongPress(ref.current);

  useEffect(() => {
    setElement(ref.current);
  }, [setElement]);

  return (
    <section className="py-8  font-Helvetica">
      <div className="flex items-center justify-between">
        <SectionHeader header="Best Sellers" />

        <div className="hidden gap-4">
          <button
            {...getHandlers("backward")}
            className="h-10 w-10 bg-white rounded-full grid place-items-center hover:scale-105"
          >
            <Icon icon="fa6-solid:angle-left" style={{ fontSize: 28 }} />
          </button>
          <button
            {...getHandlers("forward")}
            className="h-10 w-10 bg-white rounded-full grid place-items-center hover:scale-105"
          >
            <Icon icon="fa6-solid:angle-left" hFlip style={{ fontSize: 28 }} />
          </button>
        </div>
      </div>

      <ListGrid horizontalOnSmallScreens={horizontalOnSmallScreens}>
        {bestsellers.map(
          (
            { product, category, originalPrice, discountedPrice, image, id },
            index
          ) => (
            <li key={index}  className={cn(
                "min-w-[11rem] sm:grow",
                horizontalOnSmallScreens && index === 0 ? "ml-44 md:ml-0" : ""
              )}>
              <Product
                product={product}
                category={category}
                originalPrice={originalPrice}
                discountedPrice={discountedPrice}
                image={image}
                id={id}
              />
            </li>
          )
        )}
      </ListGrid>
    </section>
  );
};
