// import { SectionHeader } from "./ui/SectionHeader";
// import { Product } from "./ProductCard";
// import { ListGrid } from "./ui/ListGrid";
// import { useLoaderData } from "react-router-dom/dist";

// export const LatestProducts = () => {
//   const { latestProducts } = useLoaderData();

//   return (
//     <section className="py-8    font-Helvetica">
//       <SectionHeader header="New In" />
//       <ListGrid>
//         {latestProducts.map(
//           (
//             { id, product, category, originalPrice, discountedPrice, image },
//             index
//           ) => (
//             <li key={index}>
//               <Product
//                 product={product}
//                 category={category}
//                 originalPrice={originalPrice}
//                 discountedPrice={discountedPrice}
//                 image={image}
//                 id={id}
//               />
//             </li>
//           )
//         )}
//       </ListGrid>
//     </section>
//   );
// };
import { SectionHeader } from "./ui/SectionHeader";
import { Product } from "./ProductCard";
import { ListGrid } from "./ui/ListGrid";
import { useLoaderData } from "react-router-dom/dist";
import {cn} from "../utils/cn.js"

export const LatestProducts = ({ horizontalOnSmallScreens = true }) => {
  const { latestProducts } = useLoaderData();

  return (
    <section className="py-8 font-Helvetica">
      <SectionHeader header="New In" />
      <ListGrid horizontalOnSmallScreens={horizontalOnSmallScreens}>
        {latestProducts.map(
          (
            { id, product, category, originalPrice, discountedPrice, image },
            index
          ) => (
            <li
              key={index}
              className={cn(
                "min-w-[11rem] sm:grow",
                horizontalOnSmallScreens && index === 0 ? "ml-68 md:ml-0" : ""
              )}
            >
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

