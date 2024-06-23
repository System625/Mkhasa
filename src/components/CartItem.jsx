// import { Icon } from "@iconify/react";
// import { CartItemQuantity } from "./CartItemQuantity";
// import { Modal } from "./Modal";
// import { Button } from "./ui/Button";
// import { useState } from "react";
// import { useCartContext } from "../hooks/utils/useCart";
// import toast from "react-hot-toast";

// export const CartItem = ({ item }) => {
//   const [showModal, setShowModal] = useState(false);
//   const { removeFromCart } = useCartContext();
//   return (
//     <div className="text-sm border-b-2 sm:text-md">
//       <div className="@container grid grid-cols-12 grid-rows-3 items-center">
//         <div className="flex items-center gap-2 col-span-9 row-span-3 @lg:col-span-6 @lg:gap-12">
//           <div className="w-20 min-h-[96px] bg-app-ash-1">
//             <img src={item.productId.mainImage} alt="" className="w-20" />
//           </div>

//           <div>
//             <p>{item.productId.name}</p>
//             <button
//               className="inline-flex items-center gap-2 hover:bg-app-ash-1 p-1 rounded-sm"
//               onClick={() => {
//                 setShowModal(true);
//               }}
//             >
//               <Icon icon="uil:times" style={{ fontSize: 24 }} /> Remove
//             </button>
//           </div>
//         </div>

//         <p className="hidden @lg:block @lg:row-span-2 @lg:text-center @lg:col-span-2">
//           #{item.price}
//         </p>

//         <div className="grid items-center justify-end col-end-13 col-start-10 row-span-2 @lg:justify-center @lg:items-start  @lg:text-center @lg:col-start-9 @lg:col-end-11">
//           <CartItemQuantity
//             quantity={item.quantity}
//             productId={item.productId._id}
//           />
//         </div>

//         <p className="col-end-13 col-start-10 text-right @lg:row-span-2 @lg:text-center @lg:col-start-11 @lg:col-end-13">
//           #{item.quantity * item.price}
//         </p>
//       </div>
//       {showModal && (
//         <Modal title="Remove Item From Cart?">
//           <p>
//             Are you sure you want to remove "
//             <span className="text-app-red font-medium">
//               {item.productId.name}
//             </span>
//             " from cart? <br /> Click "
//             <span className="text-app-red">Cancel</span>" to cancel or "Remove"
//             to remove item from cart
//           </p>
//           <div className="flex gap-12 justify-center items-center pt-8">
//             <button
//               onClick={() => {
//                 setShowModal(false);
//               }}
//             >
//               Cancel
//             </button>
//             <Button
//               className="bg-app-black text-white font-bold font-  font-HelveticaBold"
//               onClick={() => {
//                 removeFromCart(item.productId._id);
//                 setShowModal(false);
//                 toast(
//                   <p>
//                     <span className="text-app-red">{item.productId.name}</span>{" "}
//                     removed from Cart
//                   </p>
//                 );
//               }}
//             >
//               Remove
//             </Button>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };
// import { Icon } from "@iconify/react";
// import { CartItemQuantity } from "./CartItemQuantity";
// import { Modal } from "./Modal";
// import { Button } from "./ui/Button";
// import { useState } from "react";
// import { useCartContext } from "../hooks/utils/useCart";
// import toast from "react-hot-toast";

// export const CartItem = ({ item }) => {
//   const [showModal, setShowModal] = useState(false);
//   const { removeFromCart } = useCartContext();
//   return (
//     <div className="text-sm border-b-2 sm:text-md">
//       <div className="grid grid-cols-12 items-center">

//         <div className="flex items-center gap-2 col-span-9 md:col-span-6 md:gap-12">
//           <div className="w-20 min-h-[96px] overflow-hidden bg-app-ash-1">
//             <img src={item.productId.mainImage} alt="" className="w-full h-full object-cover" />
//           </div>

//           <div>
//             <p className="">{item.productId.name}</p>
//             <button
//               className="inline-flex items-center gap-2 hover:bg-app-ash-1 p-1 rounded-sm"
//               onClick={() => {
//                 setShowModal(true);
//               }}
//             >
//               <Icon icon="uil:times" style={{ fontSize: 24 }} /> Remove
//             </button>
//           </div>
//         </div>
//         <div className="col-span-3  items-center md:col-span-6 grid grid-cols-1 md:grid-cols-6">
//         <p className="hidden md:block md:text-center md:col-span-2">
//           #{item.price}
//         </p>

//         <div className="grid items-center md:col-span-2 justify-end md:justify-center md:items-start md:text-center">
//           <CartItemQuantity
//             quantity={item.quantity}
//             productId={item.productId._id}
//           />
//         </div>

//         <p className="text-right md:text-center md:col-span-2">
//           #{item.quantity * item.price}
//         </p>
//         </div>

//       </div>
//       {showModal && (
//         <Modal title="Remove Item From Cart?">
//           <p className="text-center p-4">
//             Are you sure you want to remove "
//             <span className="text-app-red font-medium">
//               {item.productId.name}
//             </span>
//             " from cart? <br /> Click "
//             <span className="text-app-red">Cancel</span>" to cancel or "Remove"
//             to remove item from cart
//           </p>
//           <div className="flex gap-4 justify-center items-center pt-8 flex-wrap">
//             <button
//               className="bg-gray-200 text-black py-2 px-4 rounded-full w-28"
//               onClick={() => {
//                 setShowModal(false);
//               }}
//             >
//               Cancel
//             </button>
//             <Button
//               className="bg-app-black text-white py-2 px-4 rounded-full font-bold font-  font-HelveticaBold w-28"
//               onClick={() => {
//                 removeFromCart(item.productId._id);
//                 setShowModal(false);
//                 toast(
//                   <p>
//                     <span className="text-app-red">{item.productId.name}</span>{" "}
//                     removed from Cart
//                   </p>
//                 );
//               }}
//             >
//               Remove
//             </Button>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };
// import { Icon } from "@iconify/react";
// import { CartItemQuantity } from "./CartItemQuantity";
// import { Modal } from "./Modal";
// import { Button } from "./ui/Button";
// import { useState } from "react";
// import { useCartContext } from "../hooks/utils/useCart";
// import toast from "react-hot-toast";

// export const CartItem = ({ item }) => {
//   const [showModal, setShowModal] = useState(false);
//   const { removeFromCart } = useCartContext();
//   return (
//     <div className="text-sm border-b-2 sm:text-md">
//       <div className="grid grid-cols-12 items-center">
//         <div className="flex items-center gap-2 col-span-9 md:col-span-6 md:gap-12">
//           <div className="w-20 min-h-[96px] overflow-hidden bg-white">
//             <img src={item.productId.mainImage} alt="" className="w-full h-full object-cover" />
//           </div>
//           <div>
//             <p>{item.productId.name}</p>
//             <button
//               className="inline-flex items-center gap-2 hover:bg-app-ash-1 p-1 rounded-sm"
//               onClick={() => setShowModal(true)}
//             >
//               <Icon icon="uil:times" style={{ fontSize: 24 }} /> Remove
//             </button>
//           </div>
//         </div>
//         <div className="col-span-3 items-center md:col-span-6 grid grid-cols-1 md:grid-cols-6">
//           <p className="hidden md:block md:text-center md:col-span-2">#{item.price}</p>
//           <div className="grid items-center md:col-span-3 md:gap-9 justify-end md:justify-center md:items-start md:text-center">
//             <CartItemQuantity quantity={item.quantity} productId={item.productId._id} />
//           </div>
//           <p className="text-right md:text-center md:col-span-2">#{item.quantity * item.price}</p>
//         </div>
//       </div>
//       {showModal && (
//         <Modal title="Remove Item From Cart?">
//           <p className="text-center p-4">
//             Are you sure you want to remove "
//             <span className="text-app-red font-medium">{item.productId.name}</span>" from cart?
//             <br />
//             Click "<span className="text-app-red">Cancel</span>" to cancel or "Remove" to remove item from cart.
//           </p>
//           <div className="flex gap-4 justify-center items-center pt-8 flex-wrap">
//             <button
//               className="bg-gray-200 text-black py-2 px-4 rounded-full w-28"
//               onClick={() => setShowModal(false)}
//             >
//               Cancel
//             </button>
//             <Button
//               className="bg-app-black text-white py-2 px-4 rounded-full font-bold font-  font-HelveticaBold w-28"
//               onClick={() => {
//                 removeFromCart(item.productId._id);
//                 setShowModal(false);
//                 toast(
//                   <p>
//                     <span className="text-app-red">{item.productId.name}</span> removed from Cart
//                   </p>
//                 );
//               }}
//             >
//               Remove
//             </Button>
//           </div>
//         </Modal>
//       )}
//     </div>
//   );
// };

import { Icon } from "@iconify/react";
import { CartItemQuantity } from "./CartItemQuantity";
import { Modal } from "./Modal";
import { Button } from "./ui/Button";
import { useState } from "react";
import { useCartContext } from "../hooks/utils/useCart";
import toast from "react-hot-toast";

export const CartItem = ({ item, isCheckout }) => {
  const [showModal, setShowModal] = useState(false);
  const { removeFromCart } = useCartContext();
  return (
    <div className="text-sm border-b-2 sm:text-md">
      <div className="grid grid-cols-12 items-center">
        <div className="flex items-center gap-2 col-span-9 md:col-span-6 md:gap-12">
          <div className="w-20 min-h-[96px] bg-white">
            <img
              src={item?.productId?.mainImage}
              alt="main-image"
              className="md:w-44 w-full h-full object-cover"
            />
          </div>

          <div>
            <p className="line-clamp-1">{item?.productId?.name}</p>
            <button
              className="inline-flex items-center gap-2 hover:bg-app-ash-1 p-1 rounded-sm"
              onClick={() => {
                setShowModal(true);
              }}
            >
              <Icon icon="uil:times" style={{ fontSize: 24 }} /> Remove
            </button>
          </div>
        </div>
        {isCheckout ? (
          <div className="col-span-3 sm:col-span-1 items-center md:col-span-6 grid grid-cols-1">
            <div className="grid items-center justify-end md:justify-center md:items-start md:text-center">
              <CartItemQuantity
                quantity={item?.quantity}
                productId={item?.productId._id}
              />
            </div>

            <p className="text-right md:text-center">
              #{item?.quantity * item?.price}
            </p>
          </div>
        ) : (
          <div className="col-span-3 sm:col-span-1 items-center md:col-span-6 grid grid-cols-1 md:grid-cols-6 ">
            <p className="hidden md:block md:text-center md:col-span-2">
              #{item?.price}
            </p>

            <div className="grid items-center md:col-span-2 justify-end md:justify-center md:items-start md:text-center">
              <CartItemQuantity
                quantity={item?.quantity}
                productId={item?.productId?._id}
              />
            </div>

            <p className="text-right md:text-center md:col-span-2">
              #{item?.quantity * item?.price}
            </p>
          </div>
        )}
      </div>

      {showModal && (
        <Modal title="Remove Item From Cart?">
          <p className="text-center p-4">
            Are you sure you want to remove "
            <span className="text-app-red font-medium">
              {item?.productId?.name}
            </span>
            " from cart? <br /> Click "
            <span className="text-app-red">Cancel</span>" to cancel or "Remove"
            to remove item from cart
          </p>
          <div className="flex gap-4 justify-center items-center pt-8 flex-wrap">
            <button
              className="bg-gray-200 text-black py-2 px-4 rounded-full w-28"
              onClick={() => {
                setShowModal(false);
              }}
            >
              Cancel
            </button>
            <Button
              className="bg-app-black text-white py-2 px-4 rounded-full font-bold font-  font-HelveticaBold w-28"
              onClick={() => {
                removeFromCart(item?.productId?._id);
                setShowModal(false);
                toast(
                  <p>
                    <span className="text-app-red">{item?.productId?.name}</span>{" "}
                    removed from Cart
                  </p>
                );
              }}
            >
              Remove
            </Button>
          </div>
        </Modal>
      )}
    </div>
  );
};
