// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { createContext } from "react";
// import axios from "../utils/axios";
// import toast from "react-hot-toast";
// import { useAuth } from "../hooks/utils/useAuth";
// import { Link, useLocation } from "react-router-dom/dist";
// import { Button } from "../components/ui/Button";
// export const CartContext = createContext();

// export const Cart = ({ children }) => {
//   function isLoggedIn(userId) {
//     if (!userId) {
//       const { pathname } = window.location;
//       const toastId = toast.custom(
//         <div className="bg-app-ash pb-4 pt-7 px-5 rounded">
//           <p>Please login to your account to continue shopping</p>
//           <div className="flex items-center justify-center gap-6 p-6">
//             <button
//               onClick={() => {
//                 toast.remove(toastId);
//               }}
//             >
//               Close
//             </button>
//             <Link to={`/login?redirect=${encodeURIComponent(pathname)}`}>
//               <Button
//                 className="bg-app-red text-white"
//                 onClick={() => {
//                   toast.remove(toastId);
//                 }}
//               >
//                 Login
//               </Button>
//             </Link>
//           </div>
//         </div>,
//         {
//           id: "toast",
//           duration: 1000 * 60 * 60,
//         }
//       );
//     }
//     return !!userId;
//   }

//   const { getUserId } = useAuth();
//   const queryClient = useQueryClient();

//   const hasItem = async (itemId) => {
//     async function getCart() {
//       const userId = getUserId();
//       if (!userId)
//         return {
//           items: [],
//         };
//       const response = await axios.get(`cart/${userId}`);
//       return response.data;
//     }
//     const cart = await queryClient.ensureQueryData({
//       queryKey: ["cart"],
//       queryFn: getCart,
//     });

//     return cart
//       ? cart.items.find((item) => item.productId._id === itemId)
//       : undefined;
//   };

//   const addToCart = ({ itemId, quantity }) => {
//     const userId = getUserId();
//     if (isLoggedIn(userId)) {
//       add.mutate({ userId, itemId, quantity });
//     }
//   };

//   const increaseItem = ({ itemId, quantity }) => {
//     const userId = getUserId();
//     if (!userId) return;
//     increase.mutate({ userId, itemId, quantity });
//   };

//   const decreaseItem = ({ itemId, quantity }) => {
//     const userId = getUserId();
//     if (!userId) return;
//     decrease.mutate({ userId, itemId, quantity });
//   };

//   const removeFromCart = (itemId) => {
//     const userId = getUserId();
//     if (!userId) return;
//     remove.mutate({ userId, itemId });
//   };

//   const clearCart = () => {
//     const userId = getUserId();
//     if (!userId) return;
//     clear.mutate({ userId });
//   };

//   const clear = useMutation({
//     mutationFn: ({ userId }) => axios.post(`clear/cart/${userId}`, {}),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["cart"] });
//       toast.success("Cart Cleared");
//     },
//   });

//   const remove = useMutation({
//     mutationFn: ({ userId, itemId }) =>
//       axios.post(`remove/cart/${userId}/${itemId}`, {}),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["cart"] });
//     },
//   });

//   const add = useMutation({
//     mutationFn: ({ userId, itemId, quantity }) =>
//       axios.post(`add/cart/${userId}/${itemId}`, { quantity }),
//     onSuccess: () => {
//       toast.success("Added to Cart", { duration: 2000 });
//       queryClient.invalidateQueries({ queryKey: ["cart"] });
//     },
//   });

//   const increase = useMutation({
//     mutationFn: ({ userId, itemId, quantity }) =>
//       axios.post(`cart/increase/quantity/${userId}/${itemId}`, {
//         quantityToAdd: quantity,
//       }),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["cart"] });
//     },
//   });

//   const decrease = useMutation({
//     mutationFn: ({ userId, itemId, quantity }) =>
//       axios.post(`cart/decrease/quantity/${userId}/${itemId}`, {
//         quantityToSubtract: quantity,
//       }),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["cart"] });
//     },
//   });

//   return (
//     <CartContext.Provider
//       value={{
//         addToCart,
//         removeFromCart,
//         clearCart,
//         increaseItem,
//         decreaseItem,
//         hasItem,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };


import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContext } from "react";
import axios from "../utils/axios";
import toast from "react-hot-toast";
import { useAuth } from "../hooks/utils/useAuth";
import { Link, useLocation } from "react-router-dom/dist";
import { Button } from "../components/ui/Button";

export const CartContext = createContext();

export const Cart = ({ children }) => {
  function isLoggedIn(userId) {
    if (!userId) {
      const { pathname } = window.location;
      const toastId = toast.custom(
        <div className="bg-app-ash pb-4 pt-7 px-8 rounded">
          <p>Please login to your account to continue shopping</p>
          <div className="flex items-center justify-center gap-6 p-6">
            <button
            
              onClick={() => {
                toast.remove(toastId);
              }}
            >
              Close
            </button>
            <Link to={`/login?redirect=${encodeURIComponent(pathname)}`}>
              <Button
                className="bg-app-red text-white w-full px-6"
                onClick={() => {
                  toast.remove(toastId);
                }}
              >
                Login
              </Button>
            </Link>
          </div>
        </div>,
        {
          id: "toast",
          // duration: 2000,  // Set duration to 2 seconds
        }
      );
    }
    return !!userId;
  }

  const { getUserId } = useAuth();
  const queryClient = useQueryClient();

  const hasItem = async (itemId) => {
    async function getCart() {
      const userId = getUserId();
      if (!userId)
        return {
          items: [],
        };
      const response = await axios.get(`cart/${userId}`);
      return response.data;
    }
    const cart = await queryClient.ensureQueryData({
      queryKey: ["cart"],
      queryFn: getCart,
    });

    return cart
      ? cart.items.find((item) => item.productId._id === itemId)
      : undefined;
  };

  const addToCart = ({ itemId, quantity }) => {
    const userId = getUserId();
    if (isLoggedIn(userId)) {
      add.mutate({ userId, itemId, quantity });
    }
  };

  const increaseItem = ({ itemId, quantity }) => {
    const userId = getUserId();
    if (!userId) return;
    increase.mutate({ userId, itemId, quantity });
  };

  const decreaseItem = ({ itemId, quantity }) => {
    const userId = getUserId();
    if (!userId) return;
    decrease.mutate({ userId, itemId, quantity });
  };

  const removeFromCart = (itemId) => {
    const userId = getUserId();
    if (!userId) return;
    remove.mutate({ userId, itemId });
  };

  const clearCart = () => {
    const userId = getUserId();
    if (!userId) return;
    clear.mutate({ userId });
  };

  const clear = useMutation({
    mutationFn: ({ userId }) => axios.post(`clear/cart/${userId}`, {}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Cart Cleared", { duration: 2000 });  // Set duration to 2 seconds
    },
  });

  const remove = useMutation({
    mutationFn: ({ userId, itemId }) =>
      axios.post(`remove/cart/${userId}/${itemId}`, {}),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      // toast.success("Item Removed from Cart", { duration: 2000 });  // Added a toast for removal
    },
  });

  const add = useMutation({
    mutationFn: ({ userId, itemId, quantity }) =>
      axios.post(`add/cart/${userId}/${itemId}`, { quantity }),
    onSuccess: () => {
      toast.success("Added to Cart", { duration: 2000 });  // Set duration to 2 seconds
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const increase = useMutation({
    mutationFn: ({ userId, itemId, quantity }) =>
      axios.post(`cart/increase/quantity/${userId}/${itemId}`, {
        quantityToAdd: quantity,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      // toast.success("Item Quantity Increased", { duration: 2000 });  // Added a toast for increasing quantity
    },
  });

  const decrease = useMutation({
    mutationFn: ({ userId, itemId, quantity }) =>
      axios.post(`cart/decrease/quantity/${userId}/${itemId}`, {
        quantityToSubtract: quantity,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      // toast.success("Item Quantity Decreased", { duration: 2000 });  // Added a toast for decreasing quantity
    },
  });

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        clearCart,
        increaseItem,
        decreaseItem,
        hasItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
