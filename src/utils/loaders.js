import ScrollToTop from "../components/ScrollToTop";
import { ScrollRestoration } from "react-router-dom";
import {
  fetchProduct,
  fetchProducts,
  getBestSellers,
  getCategories,
  getProducts,
} from "./queryFunctions";

export const homeLoader = (queryClient) => async () => {
  const featuredProductQuery = {
    queryKey: ["product", "featured"],
    queryFn: async () => await getProducts("featured/product"),
  };

  const latestProductQuery = {
    queryKey: ["product", "latest"],
    queryFn: async () => await getProducts("latest/product"),
  };
  const newArrivalsProductQuery = {
    queryKey: ["product", "newarrivals"],
    queryFn: async () => await getBestSellers("deal/product"),
  };
  const bestSellersProductQuery = {
    queryKey: ["product", "bestsellers"],
    queryFn: async () => await getBestSellers("bestseller/product"),
  };
  const categoriesQuery = {
    queryKey: ["categories"],
    queryFn: getCategories,
  };

  const featuredProducts = await queryClient.ensureQueryData(
    featuredProductQuery
  );

  const latestProducts = await queryClient?.ensureQueryData(latestProductQuery);
  const newArrivals = await queryClient.ensureQueryData(
    newArrivalsProductQuery
  );
  const bestsellers = await queryClient.ensureQueryData(
    bestSellersProductQuery
  );

  const categories = await queryClient.ensureQueryData(categoriesQuery);

  return {
    featuredProducts,
    latestProducts,
    categories,
    newArrivals,
    bestsellers,
  };
};

export const LayoutLoader = (queryClient) => async () => {
  const featuredProductQuery = {
    queryKey: ["product", "featured"],
    queryFn: async () => await getProducts("featured/product"),
  };

  // const latestProductQuery = {
  //   queryKey: ["product", "latest"],
  //   queryFn: async () => await getProducts("latest/product"),
  // };
  // const newArrivalsProductQuery={
  //   queryKey:["product","newarrivals"],
  //   queryFn:async()=>await get
  // }
  const categoriesQuery = {
    queryKey: ["categories"],
    queryFn: getCategories,
  };

  const featuredProducts = await queryClient.ensureQueryData(
    featuredProductQuery
  );

  // const latestProducts = await queryClient.ensureQueryData(latestProductQuery);

  const categories = await queryClient.ensureQueryData(categoriesQuery);

  return {
    categories,
  };
};

// export const categoriesLoader =
//   (queryClient) =>
//   async ({ params: { category }, request }) => {
//     const url = new URL(request.url);
//     const sortBy = url.searchParams.get("sort") || "";
//     const filterBy = url.searchParams.get("filter") || "";
//     const reqUrl = filterBy
//       ? `product/category/${category}/appeal/${filterBy}`
//       : sortBy
//       ? `product/category/${sortBy}/${category}`
//       : `product/category/${category}`;
//     const query = {
//       initialPageParam: 1,
//       queryKey: ["product", "category", category, { sortBy, filterBy }],
//       queryFn: async ({ pageParam }) => await fetchProducts(reqUrl, pageParam),
//       getNextPageParam: ({ currentPage, totalPages }) =>
//         currentPage < totalPages ? currentPage + 1 : undefined,
//     };

//     const categories =
//       queryClient.getQueryData(query.queryKey) ??
//       (await queryClient.fetchInfiniteQuery(query));

//     return {
//       categories,
//     };
//   };

export const productLoader =
(queryClient) =>
  async ({ params: { productId } }) => {
    
    const query = {
      queryKey: ["products", productId],
      queryFn: async () => await fetchProduct(productId),
      
    };

    const product =
      queryClient.getQueryData(query.queryKey) ??
      (await queryClient.fetchQuery(query));
    return {
      product,
    };
  };
