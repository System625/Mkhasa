import { SectionHeader } from "./SectionHeader";
import { Wrapper } from "./Wrapper";
import productImg from "../assets/images/product image.webp";
import perfume from "../assets/images/perfume.webp";
import perfumeOil from "../assets/images/perfume-oil.webp";
import { Product } from "./ProductCard";
import { CategoryCard } from "./CategoryCard";
import { Features } from "./Features";
import { SwiperElem } from "./Swipers";
import { CategoryPanel } from "./CategoryPanel";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import useLongPress from "../hooks/useLongPress";
import { Sort } from "../components/Sort";
import { Sales } from "./Sales";

export const Home = () => {
  // console.log("this is Home");
  const ref = useRef();
  const [featuredProducts, setFeaturedProducts] = useState([]);

  useEffect(() => {
    async function fetchFeatures() {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/featured/product`,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        if (Array.isArray(response.data) && response.data.length > 0) {
          setFeaturedProducts(
            response.data.map((product) => {
              return {
                product: product.name,
                category: product.category,
                originalPrice: product.price,
                image: product.mainImage,
              };
            })
          );
        }
      }
    }

    fetchFeatures();
  }, []);
  useEffect(() => {
    async function fetchLatestFeatures() {
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/latest/product`,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.status === 200) {
        if (Array.isArray(response.data) && response.data.length > 0) {
          // setTopProducts(
          //   response.data.map((product) => {
          //     return {
          //       product: product.name,
          //       category: product.category,
          //       originalPrice: product.price,
          //       image: product.mainImage,
          //     };
          //   })
          // );
        }
      }
    }

    fetchLatestFeatures();
  }, []);
  const { getHandlers, setElement } = useLongPress(ref.current);

  useEffect(() => {
    setElement(ref.current);
  }, []);

  const categories = [
    {
      image: perfume,
      category: "Perfume Oil",
      numberOfProducts: 23,
    },
    {
      image: perfumeOil,
      category: "Perfume",
      numberOfProducts: 25,
    },
    {
      image: productImg,
      category: "Body Spray",
      numberOfProducts: 106,
    },
    {
      image: perfumeOil,
      category: "Roll On",
      numberOfProducts: 93,
    },
  ];

  return (
    <main className="py-4">
      <Wrapper>
        <div className="flex gap-8">
          <CategoryPanel />
          <SwiperElem />
        </div>

        <div className="w-full bg-red-500">
          <section className="py-8 ">
            <div className="flex items-center justify-between">
              <SectionHeader header="Featured Products" />
              <Sort />
            </div>
            <ul className="grid justify-center grid-flow-row gap-4 pt-8 auto-rows-fr sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {featuredProducts.map(
                (
                  { product, category, originalPrice, discountedPrice, image },
                  index
                ) => (
                  <li key={index}>
                    <Product
                      product={product}
                      category={category}
                      originalPrice={originalPrice}
                      discountedPrice={discountedPrice}
                      image={image}
                    />
                  </li>
                )
              )}
            </ul>
          </section>
        </div>
        <Sales />
        <h3>World</h3>
        <section className="py-8">
          <div className="flex items-center justify-between">
            <SectionHeader header="Top Categories" Link to="/Categoreis" />
            <div className="flex gap-4">
              <button
                {...getHandlers("backward")}
                className="grid w-10 h-10 bg-white rounded-full place-items-center hover:scale-105"
              >
                <Icon icon="fa6-solid:angle-left" style={{ fontSize: 28 }} />
              </button>
              <button
                {...getHandlers("forward")}
                className="grid w-10 h-10 bg-white rounded-full place-items-center hover:scale-105"
              >
                <Icon
                  icon="fa6-solid:angle-left"
                  hFlip
                  style={{ fontSize: 28 }}
                />
              </button>
            </div>
          </div>
          <ul className="flex gap-6 pt-8 overflow-auto no-scrollbar">
            {categories.map(({ numberOfProducts, image, category }, index) => (
              <li key={index} className="grow-0 shrink-0">
                <CategoryCard
                  numberOfProducts={numberOfProducts}
                  category={category}
                  image={image}
                />
              </li>
            ))}
          </ul>
        </section>
      </Wrapper>
      <div className="py-6">
        <Features />
      </div>
    </main>
  );
};
