import { SectionHeader } from "./ui/SectionHeader";
import { Product } from "./ProductCard";
import { ListGrid } from "./ui/ListGrid";
import { useLoaderData } from "react-router-dom/dist";

export const NewArrivals = () => {
  const { featuredProducts } = useLoaderData();
  console.log(useLoaderData())

  const handleAddToCart = ({ id, quantity }) => {
    // Logic to add the product to the cart
    console.log(`Added product ${id} with quantity ${quantity} to cart`);
  };

  return (
    <section className="py-8      ">
      <SectionHeader header="Deals" />

      <ListGrid>
        {featuredProducts.map(
          (
            { product, category, originalPrice, discountedPrice, image, id },
            index
          ) => (
            <li key={index} className="min-w-[13rem]">
              <Product
                product={product}
                category={category}
                originalPrice={originalPrice}
                discountedPrice={discountedPrice}
                image={image}
                id={id}
                onAddToCart={handleAddToCart}
              />
            </li>
          )
        )}
      </ListGrid>
    </section>
  );
};
