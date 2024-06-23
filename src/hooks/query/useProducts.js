// import { useInfiniteQuery } from "@tanstack/react-query";
// import axios from "../../utils/axios";

// export const useInfiniteProducts = (url, ...key) => {
//   const fetchProducts = async (url, pageParam) => {
//     const res = await axios.get(`${url}?page=` + pageParam);
//     return res.data;
//   };

//   return useInfiniteQuery({
//     initialPageParam: 1,
//     queryKey: ["product", ...key],
//     queryFn: async ({ pageParam }) => await fetchProducts(url, pageParam),
//     getNextPageParam: ({ currentPage, totalPages }) =>
//       currentPage < totalPages ? currentPage + 1 : undefined,
//   });
// };

// import { useInfiniteQuery } from "@tanstack/react-query";
// import axios from "../../utils/axios";

// export const useInfiniteProducts = (url, ...key) => {
//   const fetchProducts = async (pageParam = 1) => {

//     const res = await axios.get(`${url}&page=`+pageParam);
//     console.log(res.data)
//     return res.data;
//   };

//   return useInfiniteQuery({
//     initialPageParam: 1,
//     queryKey: ["product", ...key],
//     queryFn: async ({ pageParam = 1 }) => await fetchProducts(pageParam),
//     getNextPageParam: (lastPage, allPages) => {
//       if (lastPage.currentPage < lastPage.totalPages) {
//         return lastPage.currentPage + 1;
//       }
//       return undefined;
//     },
//   });
// };
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "../../utils/axios";

export const useInfiniteProducts = (url, ...key) => {
  const fetchProducts = async (pageParam = 1) => {
    const res = await axios.get(`${url}&page=${pageParam}`);
    return res.data;
  };

  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ["product", ...key],
    queryFn: ({ pageParam = 1 }) => fetchProducts(pageParam),
    getNextPageParam: (lastPage) => {
      if (lastPage.currentPage < lastPage.totalPages) {
        return lastPage.currentPage + 1;
      }
      return undefined;
    },
  });
};
