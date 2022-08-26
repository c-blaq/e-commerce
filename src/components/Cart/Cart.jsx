import React from "react";
import Header from "../Header/Header";
import CartItems from "./CartItems";

const Cart = ({ cart }) => {
  if (!cart.line_items) return "Loading";

  return (
    <>
      <main className="mt-20">
        {!cart.line_items.length ? (
          <p className="text-2xl m-4">No cart added!</p>
        ) : (
          <div className="w-11/12 m-auto">
            <h1 className="text-3xl m-auto sm:w-4/5 max-w-7xl  my-6">
              Your Shopping Cart!
            </h1>
            <div className="flex flex-wrap w-full m-auto item-center justify-center gap-4">
              {cart.line_items.map((item) => (
                <CartItems item={item} />
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-2 item-center w-11/12 flex-wrap sm:w-4/5 justify-between lg:w-4/6 m-auto mt-8">
          <div>
            <p className="text-xl lg:text-2xl">
              Subtotal: {cart.subtotal.formatted_with_symbol}
            </p>
          </div>
          <div>
            <button className="text-white text-xs uppercase bg-red-500 rounded p-2">
              Empty Cart
            </button>
            <button className="text-white ml-2 text-xs uppercase bg-blue-600 rounded p-2">
              Checkout
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
