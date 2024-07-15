import { SectionHeader } from "./ui/SectionHeader";
import { Product } from "./ProductCard";
import { ListGrid } from "./ui/ListGrid";
import { useLoaderData } from "react-router-dom/dist";

export const FeaturedProducts = () => {
  const { featuredProducts } = useLoaderData();

  const handleAddToCart = ({ id, quantity }) => {
    // Logic to add the product to the cart
    console.log(`Added product ${id} with quantity ${quantity} to cart`);
  };

  return (
    <section className="py-8">
      <SectionHeader header="Featured Products" />

      <ListGrid>
        {featuredProducts.map(
          (
            { product, category, originalPrice, discountedPrice, image, id },
            index
          ) => (
            <li key={index} className="min-w-[17rem]">
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
