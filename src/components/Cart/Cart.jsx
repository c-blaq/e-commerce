import React from "react";
import lampImg from "../../assets/images/lamp.jpg";
import Header from "../Header/Header";

const Cart = () => {
  const cartItems = [
    {
      id: 1,

      name: "Lamp",
      price: "$45",
      image: lampImg,
      description: "Reading table lamp",
    },
    {
      id: 2,
      name: "Lamp",
      price: "$45",
      image: lampImg,
      description: "Reading table lamp",
    },
    {
      id: 3,
      name: "Lamp",
      price: "$45",
      image: lampImg,
      description: "Reading table lamp",
    },
  ];

  return (
    <>
      <Header />
      <main className="mt-20">
        <div className="flex flex-wrap w-11/12 m-auto items-center justify-center gap-4">
          {cartItems.map((items) => {
            return (
              <div className="bg-white shadow  w-full sm:w-2/5 lg:w-1/4 shrink-0">
                <img
                  src={items.image}
                  alt=""
                  className=" max-h-52 block w-full object-cover"
                />

                <div className="p-2">
                  <div className="flex justify-between itemss-center">
                    <span className="sm:text-lg">{items.name}</span>
                    <span>{items.price}</span>
                  </div>

                  <div className="flex items-center justify-between mt-4">
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
          })}
        </div>

        <div className="flex items-center justify-between w-4/6 m-auto mt-8">
          <div>
            <p className="text-2xl">Subtotal: $100.00</p>
          </div>
          <div>
            <button className="text-white text-xs uppercase bg-red-500 rounded p-2">
              remove
            </button>
            <button className="text-white ml-2 text-xs uppercase bg-blue-600 rounded p-2">
              checkout
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Cart;
