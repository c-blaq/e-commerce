import React from "react";
import lampImg from "../../assets/images/lamp.jpg";
import Header from "../Header/Header";
import CartItems from "./CartItems";

const Cart = ({ cart }) => {
  console.log(`cart`, cart);

  if (!cart.line_items) return;
  return (
    <>
      <Header />
      <main className="mt-20">
        {!cart.line_items ? (
          <p>No cart added</p>
        ) : (
          <div className="flex flex-wrap w-11/12 m-auto item-center justify-center gap-4">
            {cart.line_items.map((item) => (
              <CartItems item={item} />
            ))}
          </div>
        )}

        <div className="flex item-center justify-between w-4/6 m-auto mt-8">
          <div>
            <p className="text-2xl">
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
