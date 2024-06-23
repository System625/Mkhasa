// import { useEffect, useState } from "react";
// import { SectionHeader } from "./ui/SectionHeader";
// import { Product } from "./ProductCard";
// import axios from "../utils/axios";

// export const Recommended = () => {
//   const [recommend, setRecommended] = useState([]);
//   const [err, setErr] = useState(null);

//   async function getRecommended() {
//     try {
//       const response = await axios.get("recommend");
//       setRecommended(() =>
//         response.data.map(({ product }) => {
//           return {
//             id: product?._id || 0,
//             product: product.name,
//             category: product.category,
//             price: product.price,
//             image:
//               product.mainImage || product.firstImage || product.secondImage,
//           };
//         })
//       );
//     } catch (error) {
//       setErr(error?.message ?? "Error fetching data");
//     }
//   }

//   useEffect(() => {
//     getRecommended();
//   }, []);

//   return (
//     <section className="py-8">
//       <SectionHeader header="Recommended" />

//       {err ? (
//         <p>{err}</p>
//       ) : recommend.length > 0 ? (
//         <ul className="pt-6 grid gap-1 min-[360px]:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
//           {recommend.map(({ product, category, price, image, id }, index) => (
//             <li key={index} className="md:flex-shrink-0 grow">
//               <Product
//                 product={product}
//                 category={category}
//                 price={price}
//                 image={image}
//                 id={id}
//                 className="min-w-[10rem]"
//               />
//             </li>
//           ))}
//         </ul>
//       ) : (
//         <p>Loading data</p>
//       )}
//     </section>
//   );
// };

import { useEffect, useState } from "react";
import { SectionHeader } from "./ui/SectionHeader";
import { Product } from "./ProductCard";
import axios from "../utils/axios";
import { ListGrid } from "./ui/ListGrid";
import { cn } from "../utils/cn.js";

export const Recommended = ({ horizontalOnSmallScreens = true }) => {
  const [recommend, setRecommended] = useState([]);
  const [err, setErr] = useState(null);

  async function getRecommended() {
    try {
      const response = await axios.get("/recommend"); // Ensure this URL is correct
      // console.log("Fetched data:", response.data); // Debugging: Log the fetched data

      setRecommended(() =>
        response.data.map(({ product }) => {
          return {
            id: product?._id || 0,
            product: product.name,
            category: product.category,
            price: product.price,
            image:
              product.mainImage || product.firstImage || product.secondImage,
          };
        })
      );
      // console.log("Processed recommended products:", recommend); // Debugging: Log the processed products
    } catch (error) {
      console.error("Error fetching data:", error); // Debugging: Log the error
      setErr(error?.message ?? "Error fetching data");
    }
  }

  useEffect(() => {
    getRecommended();
  }, []);

  return (
    <section className="py-8 font-Helvetica">
      <SectionHeader header="Recommended" />

      {err ? (
        <p>{err}</p>
      ) : recommend.length > 0 ? (
        <ListGrid horizontalOnSmallScreens={horizontalOnSmallScreens}>
          {recommend.map(({ product, category, price, image, id }, index) => (
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
                originalPrice={price}
                image={image}
                id={id}
                className="h-full flex flex-col justify-between"
              />
            </li>
          ))}
        </ListGrid>
      ) : (
        <p>Loading data</p>
      )}
    </section>
  );
};
