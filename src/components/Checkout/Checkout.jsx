import React from "react";

const Checkout = () => {
  const steps = ["Shipping Address", "Payment details"];
  const activeState = true;

  return (
    <div className=" mt-16 flex flex-col items-center">
      <div className="bg-white rounded shadow-sm w-2/3 p-4">
        <h2 className="text-center text-xl">Checkout</h2>
        <div className="flex gap-2 items-center">
          {steps.map((step) => (
            <button className="test" disabled={activeState}>
              {step}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
