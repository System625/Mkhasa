import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { Cart } from "../components/Cart";
import { Heading } from "../components/Heading";
import { Modal } from "../components/Modal";
import { Button } from "../components/ui/Button";
import { Navigation } from "../components/ui/Navigation";
import { Wrapper } from "../components/ui/Wrapper";
import { useCartQuery } from "../hooks/query/useCart";
import { Seo } from "../components/Seo";
import { useCartContext } from "../hooks/utils/useCart";
import { useAuth } from "../hooks/utils/useAuth";
import { Link } from "react-router-dom/dist";
import { OrderTotal } from "../components/OrderTotal";

export const Component = () => {
  const { getUserId } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const { status, data } = useCartQuery();
  const { clearCart } = useCartContext();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading or fetch data here
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust this time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <main>
      <Seo
        title="Mkhasa | Cart"
        description="Your Mkhasa shopping Cart"
        type="webapp"
        name=""
      />
      <Wrapper className="py-4">  
        {getUserId() ? (
          <>
            <div className="flex items-center justify-between">
              <Heading className="pt-2">Cart</Heading>
              {status === "success" && data.items.length > 0 && (
                <button
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Clear All
                </button>
              )}
            </div>
            <Cart />
            <OrderTotal partial />
          </>
        ) : (
          <>
            <div className="flex items-center justify-center">
              <Heading className="pt-2">Cart</Heading>
            </div>
            <div className="py-4">
              <p className="pb-4 text-center">
                Please login to your account to view items in your cart
              </p>
              <Link to={`/login?redirect=${encodeURIComponent("/cart")}`}>
                <Button className="bg-app-red px-12 rounded-none w-12 text-center mx-auto flex justify-center text-white ">
                  Login
                </Button>
              </Link>
            </div>
          </>
        )}
      </Wrapper>
      {showModal && (
        <Modal title="Clear All Items?">
          <p>
            Are you sure you want to clear cart? Click "
            <span className="text-app-red">CANCEL</span>" to cancel or "CLEAR"
            if you will love to clear your cart
          </p>
          <div className="flex gap-12 justify-center items-center pt-8">
            <button
              onClick={() => {
                setShowModal(false);
              }}
            >
              CANCEL
            </button>
            <button
              className="bg-app-black px-6 py-2 text-white font-normal"
              onClick={() => {
                clearCart();
                setShowModal(false);
              }}
            >
              CLEAR
            </button>
          </div>
        </Modal>
      )}
    </main>
  );
};
// import { useState } from "react";
// import { Cart } from "../components/Cart";
// import { Heading } from "../components/Heading";
// import { Modal } from "../components/Modal";
// import { Button } from "../components/ui/Button";
// import { Navigation } from "../components/ui/Navigation";
// import { Wrapper } from "../components/ui/Wrapper";
// import { useCartQuery } from "../hooks/query/useCart";
// import { Seo } from "../components/Seo";
// import { useCartContext } from "../hooks/utils/useCart";
// import { useAuth } from "../hooks/utils/useAuth";
// import { Link } from "react-router-dom/dist";
// import { OrderTotal } from "../components/OrderTotal";

// export const Component = () => {
//   const { getUserId } = useAuth();
//   const [showModal, setShowModal] = useState(false);
//   const { status, data } = useCartQuery();
//   const { clearCart } = useCartContext();

//   return (
//     <main>
//       <Seo
//         title="Mkhasa | Cart"
//         description="Your Mkhasa shopping Cart"
//         type="webapp"
//         name=""
//       />
//       <Wrapper className="py-4">
//         <Navigation
//           location={[
//             { description: "Home", to: "/", title: "Go to Home Page" },
//             { description: "Cart", to: "/cart" },
//           ]}
//           className="text-[#3338]"
//           iconClassName="text-[#3339] text-2xl"
//           currentLocationClassName="text-app-black"
//         />
//         <div className="flex items-center justify-between">
//           <Heading className="pt-2">Your Shopping Cart</Heading>
//           {status === "success" && data.items.length > 0 && (
//             <button
//               onClick={() => {
//                 setShowModal(true);
//               }}
//             >
//               Clear All
//             </button>
//           )}
//         </div>

//         {getUserId() ? (
//           <>
//             <Cart />
//             <OrderTotal showDeliveryFee={false} />
//           </>
//         ) : (
//           <div className="py-4">
//             <p className="pb-4">
//               Please login to your account to view items in your cart
//             </p>
//             <Link to={`/login?redirect=${encodeURIComponent("/cart")}`}>
//               <Button className="bg-app-red px-12 text-white font-medium">
//                 Login
//               </Button>
//             </Link>
//           </div>
//         )}
//       </Wrapper>
//       {showModal && (
//         <Modal title="Clear All Items?">
//           <p>
//             Are you sure you want to clear cart? Click "
//             <span className="text-app-red">CANCEL</span>" to cancel or "CLEAR"
//             if you will love to clear your cart
//           </p>
//           <div className="flex gap-12 justify-center items-center pt-8">
//             <button
//               onClick={() => {
//                 setShowModal(false);
//               }}
//             >
//               CANCEL
//             </button>
//             <Button
//               className="bg-app-black text-white font-bold"
//               onClick={() => {
//                 clearCart();
//                 setShowModal(false);
//               }}
//             >
//               CLEAR
//             </Button>
//           </div>
//         </Modal>
//       )}
//     </main>
//   );
// };
