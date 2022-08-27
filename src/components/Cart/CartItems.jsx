import React from "react";

const CartItems = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
  return (
    <div className="bg-white shadow  w-full sm:w-2/5 lg:w-1/4 shrink-0">
      <img
        src={item.image.url}
        alt={item.name}
        className=" h-48 sm:h-52 max-h-52 block w-full object-cover"
      />

      <div className="p-2">
        <div className="flex justify-between flex-wrap items-center gap-2">
          <span className="sm:text-lg truncate max-w-[100px]" title={item.name}>
            {item.name}
          </span>
          <span>{item.line_total.formatted_with_symbol}</span>
        </div>

        <div className="flex item-center justify-between mt-4">
          <div>
            <span
              className="mr-2 hover:bg-gray-200 cursor-pointer rounded-full p-2 w-5 h-5 inline-flex items-center justify-center"
              onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}
            >
              -
            </span>
            {item.quantity}
            <span
              className="ml-2 hover:bg-gray-200 cursor-pointer rounded-full p-2 w-5 h-5 inline-flex items-center justify-center"
              onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}
            >
              +
            </span>
          </div>
          <button
            className="text-white text-xs uppercase bg-red-500 rounded p-2"
            onClick={() => onRemoveFromCart(item.id)}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
