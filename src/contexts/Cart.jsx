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
    return !!userId;
  }

  const { getUserId } = useAuth();
  const queryClient = useQueryClient();

  const hasItem = async (itemId) => {
    const userId = getUserId();
    if (isLoggedIn(userId)) {
      const cart = await queryClient.ensureQueryData({
        queryKey: ["cart"],
        queryFn: getCart,
      });
      return cart ? cart.items.find((item) => item.productId._id === itemId) : undefined;
    } else {
      const localCart = getCartFromLocalStorage();
      return localCart.find(item => item.productId === itemId);
    }
  };

  const getCartFromLocalStorage = () => {
    const cart = localStorage.getItem('guestCart');
    return cart ? JSON.parse(cart) : [];
  };
  
  const saveCartToLocalStorage = (cartItems) => {
    localStorage.setItem('guestCart', JSON.stringify(cartItems));
  };

  const clearLocalStorageCart = () => {
    localStorage.removeItem('guestCart');
  };

  const addToCart = async ({ itemId, quantity }) => {
    const userId = getUserId();
    if (isLoggedIn(userId)) {
      // If logged in, add to server cart
      try {
        await add.mutateAsync({ userId, itemId, quantity });
        // Remove the toast from here, we'll let the component handle it
        // toast.success("Added to Cart", { duration: 2000 });
      } catch (error) {
        console.error("Error adding item to cart:", error);
        toast.error("Failed to add item to cart");
      }
    } else {
      // If not logged in, add to local storage
      let localCart = getCartFromLocalStorage();
      const existingItemIndex = localCart.findIndex(item => item.productId === itemId);
      if (existingItemIndex !== -1) {
        localCart[existingItemIndex].quantity += quantity;
      } else {
        localCart.push({ productId: itemId, quantity });
      }
      saveCartToLocalStorage(localCart);
      // Remove the toast from here as well
      // toast.success("Added to Cart", { duration: 2000 });
    }
    // Return a boolean indicating success
    return true;
  };
  

  const increaseItem = ({ itemId, quantity }) => {
    const userId = getUserId();
    if (isLoggedIn(userId)) {
      increase.mutate({ userId, itemId, quantity });
    } else {
      const localCart = getCartFromLocalStorage();
      const item = localCart.find(item => item.productId === itemId);
      if (item) {
        item.quantity += quantity;
        saveCartToLocalStorage(localCart);
        toast.success("Item Quantity Increased", { duration: 2000 });
      }
    }
  };

  const decreaseItem = ({ itemId, quantity }) => {
    const userId = getUserId();
    if (isLoggedIn(userId)) {
      decrease.mutate({ userId, itemId, quantity });
    } else {
      let localCart = getCartFromLocalStorage();
      const itemIndex = localCart.findIndex(item => item.productId === itemId);
      if (itemIndex !== -1) {
        localCart[itemIndex].quantity = Math.max(0, localCart[itemIndex].quantity - quantity);
        if (localCart[itemIndex].quantity === 0) {
          localCart = localCart.filter(i => i.productId !== itemId);
        }
        saveCartToLocalStorage(localCart);
        toast.success("Item Quantity Decreased", { duration: 2000 });
      }
    }
  };

  const removeFromCart = (itemId) => {
    const userId = getUserId();
    if (isLoggedIn(userId)) {
      remove.mutate({ userId, itemId });
    } else {
      let localCart = getCartFromLocalStorage();
      localCart = localCart.filter(item => item.productId !== itemId);
      saveCartToLocalStorage(localCart);
      toast.success("Item Removed from Cart", { duration: 2000 });
    }
  };

  const clearCart = () => {
    const userId = getUserId();
    if (isLoggedIn(userId)) {
      clear.mutate({ userId });
    } else {
      clearLocalStorageCart();
      toast.success("Cart Cleared", { duration: 2000 });
    }
  };

  const mergeCartsOnLogin = async (userId) => {
    const localCart = getCartFromLocalStorage();
    if (localCart.length > 0) {
      for (const item of localCart) {
        try {
          await add.mutateAsync({ userId, itemId: item.productId, quantity: item.quantity });
        } catch (error) {
          console.error("Error adding item to server cart:", error);
        }
      }
      clearLocalStorageCart();
    }
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
        mergeCartsOnLogin,
        getCartFromLocalStorage,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
