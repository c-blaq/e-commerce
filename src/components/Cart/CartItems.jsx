import React from "react";

const CartItems = ({ item }) => {
  return (
    <div
      key={item.id}
      className="bg-white shadow  w-full sm:w-2/5 lg:w-1/4 shrink-0"
    >
      <img
        src={item.image.url}
        alt={item.name}
        className=" h-48 sm:h-52 max-h-52 block w-full object-cover"
      />

      <div className="p-2">
        <div className="flex justify-between flex-wrap items-center gap-2">
          <span className="sm:text-lg">{item.name}</span>
          <span>{item.line_total.formatted_with_symbol}</span>
        </div>

        <div className="flex item-center justify-between mt-4">
          <div>
            <span className="mr-2">-</span>10
            <span className="ml-2">+</span>
          </div>
          <button className="text-white text-xs uppercase bg-red-500 rounded p-2">
            remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
