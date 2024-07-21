import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SectionHeader } from "./ui/SectionHeader";
import { Product } from "./ProductCard";
import { ListGrid } from "./ui/ListGrid";

export const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL, // Adjust this to match your env variable name
  });

  async function getFeaturedProducts() {
    try {
      const response = await api.get("/feature");
      // console.log("API Response Status:", response.status);
      // console.log("API Response Headers:", response.headers);
      // console.log("API Response Data:", response.data);

      if (typeof response.data === 'string' && response.data.includes('<!DOCTYPE html>')) {
        console.error("Received HTML instead of JSON. API endpoint might be incorrect or returning an error page.");
        return [];
      }

      if (!Array.isArray(response.data)) {
        console.error("Received data is not an array:", response.data);
        return [];
      }

      return response.data.map(({ product }) => ({
        product: product.name,
        category: product.category,
        originalPrice: product.price,
        discountedPrice: product.discountedPrice,
        image: product.mainImage || product.firstImage || product.secondImage,
        id: product._id
      }));
    } catch (error) {
      console.error("Error fetching featured products:", error);
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      }
      throw error;
    }
  }

  useEffect(() => {
    async function loadFeaturedProducts() {
      try {
        const products = await getFeaturedProducts();
        setFeaturedProducts(products);
      } catch (err) {
        setError("Failed to load featured products");
      } finally {
        setIsLoading(false);
      }
    }

    loadFeaturedProducts();
  }, []);

  const handleAddToCart = ({ id, quantity }) => {
    // Logic to add the product to the cart
    console.log(`Added product ${id} with quantity ${quantity} to cart`);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (featuredProducts.length === 0) {
    return <div>No featured products available.</div>;
  }

  return (
    <section className="py-8">
      <SectionHeader header="Featured" />

      <ListGrid>
        {featuredProducts.map(
          (
            { product, category, originalPrice, discountedPrice, image, id },
            index
          ) => (
            <li key={id || index} className="min-w-[11rem] md:min-w-[13rem]">
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
