import React, { useState, useRef, useEffect } from "react";
import LoadingSpinner from '../components/LoadingSpinner';
import { Wrapper } from "../components/ui/Wrapper";
import { Navigation } from "../components/ui/Navigation";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { ProductDetail } from "../components/ProductDetail";
import { Icon } from "@iconify/react";
import { Heading } from "../components/Heading";
import { Button } from "../components/ui/Button";
import { useCartContext } from "../hooks/utils/useCart";
import { CartContext } from "../contexts/Cart";
import { useCartQuery } from "../hooks/query/useCart";
import { useAuth } from "../hooks/utils/useAuth";
import toast from "react-hot-toast";
import { format } from "../utils/lib";
import { Seo } from "../components/Seo";
import { Product } from "../components/ProductCard";
import { ListGrid } from "../components/ui/ListGrid";
import useLongPress from "../hooks/utils/useLongPress";
import axios from "axios";
import { useSwipeable } from "react-swipeable";
import { fetchRecommendations } from '../services/recommendService';

export const Component = () => {
  const { product } = useLoaderData();
  // console.log(product.layerWith);
  const { decreaseItem, increaseItem, addToCart, getCartFromLocalStorage } = useCartContext();
  const { getUserId } = useAuth();
  const [count, setCount] = useState(1);
  const [recommend, setRecommend] = useState([]);
  const { data } = useCartQuery();
  const navigate = useNavigate();
  const ref = useRef();
  const { getHandlers, setElement } = useLongPress(ref.current);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or fetch data here
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust this time as needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setElement(ref.current);
  }, [setElement]);

  const isInCart = () => {
    const userId = getUserId();
    if (userId) {
      return data.items.find((item) => item.productId._id === product._id);
    } else {
      const localCart = getCartFromLocalStorage();
      return localCart.find((item) => item.productId === product._id);
    }
  };

  const increase = () => {
    const cartItem = isInCart();
    if (cartItem) {
      increaseItem({ itemId: product._id, quantity: 1 });
    } else {
      setCount((v) => v + 1);
    }
  };

  const decrease = () => {
    const cartItem = isInCart();
    if (cartItem) {
      decreaseItem({ itemId: product._id, quantity: 1 });
    } else {
      setCount((v) => (v <= 1 ? 1 : v - 1));
    }
  };

  const onClick = () => {
    if (count <= 0) {
      return toast.error("Please specify quantity");
    }
    const success = addToCart({ itemId: product._id, quantity: count });
    if (success) {
      toast.success("Will be added when you login", { duration: 2000 });
    }
  };

  const onClickCheckout = () => {
    addToCart({ itemId: product._id, quantity: count || 1 });
    navigate("/checkout");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const recommendations = await fetchRecommendations();
        setRecommend(recommendations);
      } catch (error) {
        // console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const images = [
    product?.mainImage,
    product?.firstImage,
    product?.secondImage,
    product?.thirdImage,
  ].filter(Boolean);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    },
    onSwipedRight: () => {
      setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Seo
        title={`Mkhasa | ${product.name || ""}`}
        description="Complete Transcation"
        type="webapp"
        name=""
      />
      <Wrapper className="bg-white">
        {/* <Navigation
          location={[
            { description: "Home", to: "/", title: "Go to Home Page" },
            {
              description: product.category ?? "Perfume",
              to: `/categories/${product?.category ?? "Perfume"}`,
            },
            { description: product?.name ?? "", to: "" },
          ]}
          className="text-[#3338] py-5"
          iconClassName="text-[#3339] text-2xl"
          currentLocationClassName="text-app-black"
        /> */}

        <div className="@container pb-8    bg-white md:px-6 md:py-6">
          <div className="grid gap-8 @4xl:grid-cols-2">
            <div className="relative md:min-w-[550px]">
              <div
                className="rounded-2xl overflow-hidden w-full aspect-square md:@[460px]:aspect-video"
                {...handlers}
              >
                <img
                  src={images[currentImageIndex]}
                  alt="Product"
                  className="w-full h-full object-cover md:object-contain bg-white"
                />
              </div>
              <div className="flex gap-4 absolute top-6 right-6 z-50"></div>
              <div
                className="flex gap-4 overflow-x-auto pt-6 md:object-cover object-contain [scrollbar-width:none] [-ms-overflow-style:none]"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Product image ${index + 1}`}
                    className="w-28 aspect-square cursor-pointer"
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center flex-wrap gap-2">
                <p className="text-xl font-bold text-[#A40001]   ">{product?.category}</p>
              </div>
              <div className="mt-5 -md:mt-6">
                <h3 className="font-bold md:text-4xl text-3xl">
                  {product?.name}
                </h3>
              </div>

              <div className="mt-5 md:mt-2   ">
                <p className="md:text-3xl text-3xl    ">₦<span>{format(product?.price)}</span></p>
              </div>

              <div className="mt-5 md:mt-2   ">
                {product?.barcode && (
                  <p className="      mt-2">
                    <strong className="text-black       Basis font-bold">Barcode</strong>:{" "}
                    <span className="      text-[#555]">{product?.barcode}</span>
                  </p>
                )}
                {product?.brand && (
                  <p className="      mt-2">
                    <strong className="text-black       font-bold">Brand</strong>:{" "}
                    <span className="      text-[#555]">{product?.brand}</span>
                  </p>
                )}
                {product?.manufacturer && (
                  <p className="      mt-2">
                    <strong className="text-black       font-bold">Manufacturer</strong>:{" "}
                    <span className="      text-[#555]">{product?.manufacturer}</span>
                  </p>
                )}
              </div>
              <div className="py-2"></div>
              <div className="flex gap-x-12 flex-wrap justify-between pb-2   ">
                <div className="py-3">
                  {/* <p className="text-[#555] text-xl font-bold mt-1 pb-2      ">Quantity</p> */}
                  <div className="flex pt-2 items-center">
                    <button
                      onClick={decrease}
                      className="h-12 w-14 aspect-square border-[#F5F5F5] bg-[#F5F5F5] grid place-items-center font-medium"
                    >
                      <Icon icon="ic:round-minus" style={{ fontSize: 30 }} />
                    </button>
                    <span className="text-3xl h-12 w-14 pl-4 border-[#F5F5F5] bg-[#F5F5F5] pt-1 -mt-[1px] font-NimbusSan font-normal">
                      {isInCart()?.quantity || count}
                    </span>
                    <button
                      onClick={increase}
                      className="h-12 w-14 border-[#F5F5F5] bg-[#F5F5F5]  text-xl aspect-square grid place-items-center font-medium"
                    >
                      <Icon icon="ph:plus-bold" style={{ fontSize: 24, marginTop: -5 }} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="my-button flex gap-8 md:space-x-4 mt-4">
                <Button
                  variant="rectangle"
                  onClick={onClickCheckout}
                  className="bg-[#0FA958] text-white text-sm lg:text-xl rounded-none py-1 lg:py-3 w-full font-semibold disabled:bg-[#848484]"
                >
                  Buy Now
                </Button>
                {!(
                  data &&
                  data.items.find((item) => item?.productId?._id === product._id)
                ) ? (
                  <Button
                    disabled={!count}
                    variant="rectangle"
                    onClick={onClick}
                    className=" w-full rounded-none text-sm lg:text-xl py-3 disabled:bg-[#848484]"
                  >
                    Add to Cart
                  </Button>
                ) : (
                  <Link to="/cart" style={{ display: "contents" }}>
                    <Button variant="rectangle" className="text-sm lg:text-xl bg-transparent border-2  text-black border-black rounded-none py-3 w-full font-semibold">
                      Go to Cart
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <ProductDetail productId={product._id} />
          {Array.isArray(product.recommend) && product.recommend.length > 0 && (
            <div className="mb-4">
              <div className="flex justify-between gap-2 mt-8">
                <Heading className="mt-3 mb-[-10px] font-    font-bold text-app-black">We also Recommend</Heading>
                <div className="hidden">
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
              <ul
                className="pt-8 w-full gap-4 flex sm:flex-nowrap overflow-auto sm:no-scrollbar"
                ref={ref} key={product.id}
              >
                {product.recommend.map((product) => (
                  <li className="" key={product._id}>
                    <Product
                      key={product?._id}
                      id={product?._id}
                      product={product.name}
                      category={product?.category}
                      originalPrice={product?.price}
                      image={product?.productImage || product?.mainImage}
                      className="min-w-[13rem] md:min-w-[17rem]"
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
          {Array.isArray(product.layerWith) && product.layerWith.length > 0 && (
            <div className="mb-4">
              <div className="flex justify-between gap-2 mt-8">
                <Heading className="mt-3 mb-[-10px] font-    font-bold text-app-black">
                  Products you can Layer With
                </Heading>
                <div className="hidden">
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
              <ul
                className="pt-8 w-full gap-4 flex sm:flex-nowrap overflow-x-auto sm:no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                ref={ref}
              >
                {product.layerWith.map((product) => (
                  <li className="" key={product._id}>
                    <Product
                      key={product?._id}
                      id={product?._id}
                      product={product?.name}
                      category={product?.category}
                      originalPrice={product?.price}
                      image={product?.productImage || product?.mainImage}
                      className="min-w-[13rem] md:min-w-[17rem]"
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Wrapper>
    </>
  );
};

