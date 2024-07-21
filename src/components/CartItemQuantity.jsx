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
    <div className="flex items-center justify-center mb-2 md:mb-0">
      <button
        onClick={(e) => {
          if (qty <= 1) {
            return toast.error("Can't perform action");
          }
          decreaseItem({ quantity: 1, itemId: productId });
        }}
        className="h-8 w-8 flex items-center justify-center text-2xl border border-[#F5F5F5] bg-[#F5F5F5]"
      >
        <Icon icon="tdesign:minus" />
      </button>
      <input
        type="number"
        value={qty}
        className="w-8 h-8 text-center md:text-right mx-auto flex justify-center items-center border border-[#F5F5F5] text-lg bg-[#F5F5F5]"
        onChange={(e) => {
          const val = e.target.value;
          if (Number(val) === 0) return;
          // You may want to add logic to handle changes in the input
        }}
      />
      <button
        onClick={(e) => {
          increaseItem({ quantity: 1, itemId: productId });
        }}
        className="h-8 w-8 flex items-center justify-center text-2xl border border-[#F5F5F5] bg-[#F5F5F5]"
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
              className="bg-app-black text-white font-bold  "
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
