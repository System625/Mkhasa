import { useState } from "react";
import { Modal } from "./Modal";
import { Button } from "./ui/Button";
import { Icon } from "@iconify/react";
import { useCartContext } from "../hooks/utils/useCart";
import { useEffect } from "react";
import toast from "react-hot-toast";
// import { debounce } from "../hooks/utils/useDebounce";

export const CartItemQuantity = ({ productId, quantity }) => {
  const { decreaseItem, increaseItem } = useCartContext();
  const [showModal, setShowModal] = useState(false);
  const [qty, setQty] = useState(quantity);

  useEffect(() => {
    setQty(quantity);
  }, [quantity]);

  return (
    <div className="grid grid-cols-12 grid-rows-6">
      <button
        onClick={(e) => {
          if (qty <= 1) {
            return toast.error("Can't perform action");
          }
          decreaseItem({ quantity: 1, itemId: productId });
        }}
        className="h-8 text-2xl w-6 col-start-1 col-end-7 row-start-4 row-end-7 @lg:h-auto @lg:row-start-1 @lg:col-end-4"
      >
        <Icon icon="tdesign:minus" />
      </button>
      <input
        type="number"
        value={qty}
        className="w-8 mx-auto h-7 text-center outline-none border-black border-2 text-lg rounded col-start-1 col-end-13 row-start-1 row-end-4 @lg:row-end-7 @lg:border-none"
        onChange={(e) => {
          const val = e.target.value;
          if (Number(val) === 0) return;
        }}
      />
      <button
        onClick={(e) => {
          increaseItem({ quantity: 1, itemId: productId });
        }}
        className="grid place-items-center h-8 text-2xl w-6 col-start-7 col-end-13 row-start-4 row-end-7 @lg:h-auto @lg:row-start-1 @lg:col-start-10"
      >
        <Icon icon="tdesign:plus" />
      </button>

      {showModal && (
        <Modal title="Remove Item From Cart?">
          <p>
            Are you sure you want to remove "
            <span className="text-app-red font-medium">
              {cart.find((c) => c.id === productId).description}
            </span>
            " from cart? <br /> Click "
            <span className="text-app-red">Cancel</span>" to cancel or "Remove"
            to remove item from cart
          </p>
          <div className="flex gap-12 justify-center items-center pt-8">
            <button
              onClick={() => {
                setShowModal(false);
              }}
            >
              Cancel
            </button>
            <Button
              className="bg-app-black text-white font-bold font-  font-HelveticaBold"
              onClick={() => {
                removeFromCart(productId);
                setShowModal(false);
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
