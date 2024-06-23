import { SectionHeader } from "./ui/SectionHeader";
import { Product } from "./ProductCard";
import { ListGrid } from "./ui/ListGrid";
import { useLoaderData } from "react-router-dom/dist";

export const NewArrivals = () => {
  const { newArrivals } = useLoaderData();

  return (
    <section className="py-8    font-Helvetica">
      <SectionHeader header="Deals" />

      <ListGrid>
        {newArrivals.map(
          (
            { product, category, originalPrice, discountedPrice, image, id },
            index
          ) => (
            <li key={index}>
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
