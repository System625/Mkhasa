// import React from "react";
// import "./index.css";
// import ReactDOM from "react-dom/client";
// import {
//   RouterProvider,
//   ScrollRestoration,
//   createBrowserRouter,
// } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { Layout } from "./components/Layout.jsx";
// import { Auth } from "./contexts/Auth.jsx";
// import { Cart } from "./contexts/Cart.jsx";
// import ErrorPage from "./pages/error-page.jsx";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// import { CategoryProvider } from "./components/CategoryContext.jsx";

// import {
//   LayoutLoader,
//   // categoriesLoader,
//   homeLoader,
//   productLoader,
// } from "./utils/loaders.js";

// const queryClient = new QueryClient();

// const router = createBrowserRouter([
//   {
//     path: "/",
//     loader: LayoutLoader(queryClient),
//     element: <Layout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: "/",
//         children: [
//           {
//             path: "/",
//             lazy: () => import("./pages/home"),
//             loader: homeLoader(queryClient),
//           },
//           {
//             path: "/search",
//             lazy: () => import("./pages/search"),
//             loader: homeLoader(queryClient),
//           },
//           {
//             path: "/cart",
//             lazy: () => import("./pages/cart"),
//           },
//           {
//             path: "/account-creation-success",
//             lazy: () => import("./pages/success"),
//           },
//           {
//             path: "/products/:productId",
//             lazy: () => import("./pages/select-product.jsx"),

//             loader: productLoader(queryClient),
//           },
//           {
//             path: "/categories/:category",
//             lazy: () => import("./pages/category"),
//             // loader: productLoader(queryClient),
//             // loader: homeLoader(queryClient),
//             // loader: categoriesLoader(queryClient),
//           },
//         ],
//       },
//       {
//         path: "/",
//         lazy: () => import("./components/OnlyAuthenticated"),
//         children: [
//           {
//             path: "/checkout",
//             lazy: () => import("./pages/checkout"),
//           },
//           {
//             path: "/account",
//             lazy: () => import("./pages/account"),
//           },
//           {
//             path: "/account/profile",
//             lazy: () => import("./pages/profile"),
//           },
//           {
//             path: "/payment-callback",
//             lazy: () => import("./pages/checkout-success"),
//             loader: homeLoader(queryClient),
//             // loader: productLoader(queryClient),
//           },
//           {
//             path: "/account/order-history",
//             lazy: () => import("./pages/order-history"),
//           },
//         ],
//       },
//       {
//         path: "/",
//         lazy: () => import("./components/OnlyUnAuthenticated"),
//         children: [
//           {
//             path: "/login",
//             lazy: () => import("./pages/login"),
//           },
//           {
//             path: "/register",
//             lazy: () => import("./pages/register"),
//           },
//           {
//             path: "/about",
//             async lazy() {
//               let { About } = await import("./pages/about");
//               return { Component: About };
//             },
//           },
//           {
//             path: "/privacy",
//             async lazy() {
//               let { Privacy } = await import("./pages/privacy");
//               return { Component: Privacy };
//             },
//           },
//           {
//             path: "/delivery",
//             async lazy() {
//               let { Delivery } = await import("./pages/delivery");
//               return { Component: Delivery };
//             },
//           },
//           {
//             path: "/forgot-password",
//             async lazy() {
//               let { ForgotPassword } = await import("./pages/forgot-password");
//               return { Component: ForgotPassword };
//             },
//           },
//           {
//             path: "/reset-password",
//             async lazy() {
//               let { ResetPassword } = await import("./pages/forgot-password");
//               return { Component: ResetPassword };
//             },
//           },
//           {
//             path: "/confirm-otp",
//             lazy: () => import("./pages/confirm-otp"),
//           },
//         ],
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <CategoryProvider>
//       <HelmetProvider>
//         <QueryClientProvider client={queryClient}>
//           <ReactQueryDevtools initialIsOpen={false} />
//           <Auth>
//             <Cart>
//               <RouterProvider router={router} />
//             </Cart>
//           </Auth>
//         </QueryClientProvider>
//       </HelmetProvider>
//     </CategoryProvider>
//   </React.StrictMode>
// );

import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  ScrollRestoration,
  createBrowserRouter,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Layout } from "./components/Layout.jsx";
import { Auth } from "./contexts/Auth.jsx";
import { Cart } from "./contexts/Cart.jsx";
import ErrorPage from "./pages/error-page.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { CategoryProvider } from "./components/CategoryContext.jsx";

import {
  LayoutLoader,
  homeLoader,
  productLoader,
} from "./utils/loaders.js";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    loader: LayoutLoader(queryClient),
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        children: [
          {
            path: "/",
            lazy: () => import("./pages/home"),
            loader: homeLoader(queryClient),
          },
          {
            path: "/search",
            lazy: () => import("./pages/search"),
            loader: homeLoader(queryClient),
          },
          {
            path: "/cart",
            lazy: () => import("./pages/cart"),
          },
          {
            path: "/account-creation-success",
            lazy: () => import("./pages/success"),
          },
          {
            path: "/products/:productId",
            lazy: () => import("./pages/select-product.jsx"),
            loader: productLoader(queryClient),
          },
          {
            path: "/categories/:category",
            lazy: () => import("./pages/category"),
          },
        ],
      },
      {
        path: "/",
        lazy: () => import("./components/OnlyAuthenticated"),
        children: [
          {
            path: "/checkout",
            lazy: () => import("./pages/checkout"),
          },
          {
            path: "/account",
            lazy: () => import("./pages/account"),
          },
          {
            path: "/account/profile",
            lazy: () => import("./pages/profile"),
          },
          {
            path: "/payment-callback",
            lazy: () => import("./pages/checkout-success"),
            loader: homeLoader(queryClient),
          },
          {
            path: "/account/order-history",
            lazy: () => import("./pages/order-history"),
          },
        ],
      },
      {
        path: "/",
        lazy: () => import("./components/OnlyUnAuthenticated"),
        children: [
          {
            path: "/login",
            lazy: () => import("./pages/login"),
          },
          {
            path: "/register",
            lazy: () => import("./pages/register"),
          },
          {
            path: "/about",
            lazy: () => import("./pages/about").then(module => ({ Component: module.About })),
          },
          {
            path: "/privacy",
            lazy: () => import("./pages/privacy").then(module => ({ Component: module.Privacy })),
          },
          {
            path: "/delivery",
            lazy: () => import("./pages/delivery").then(module => ({ Component: module.Delivery })),
          },
          {
            path: "/forgot-password",
            lazy: () => import("./pages/forgot-password").then(module => ({ Component: module.ForgotPassword })),
          },
          {
            path: "/reset-password",
            lazy: () => import("./pages/forgot-password").then(module => ({ Component: module.ResetPassword })),
          },
          {
            path: "/confirm-otp",
            lazy: () => import("./pages/confirm-otp"),
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CategoryProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <Auth>
            <Cart>
              <RouterProvider router={router} />
            </Cart>
          </Auth>
        </QueryClientProvider>
      </HelmetProvider>
    </CategoryProvider>
  </React.StrictMode>
);

