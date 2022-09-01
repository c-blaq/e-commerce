import React, { useState } from "react";
import Review from "./Review";
import PaystackPop from "@paystack/inline-js";

const PaymentForm = ({ checkoutToken }) => {
  const [email, setEmail] = useState("");

  const componentProps = {
    email,
    amount: checkoutToken.subtotal.raw * 100,
    key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
    onSuccess: () =>
      console.log("Thanks for doing business with us! Come back soon!!"),
    onError: (e) => console.log(e),
    onClose: () => console.log("Wait! You need this oil, don't go!!!!"),
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <hr className="my-2  border" />

      <div className="mt-4">
        <h2 className="text-xl mb-6">Make Payment</h2>

        <form>
          <input
            className="border-b-2 block w-[48%] outline-none py-1 border-b-gray-300 hover:border-b-gray-500"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="flex justify-between mt-8">
            <button className="uppercase border-slate-300 border rounded shadow py-2 px-4">
              back to cart
            </button>

            <button
              className="bg-blue-800 uppercase py-2 rounded text-white px-4 disabled:opacity-70 disabled:cursor-not-allowed"
              type="button"
              onClick={() => {
                const paystack = new PaystackPop();
                paystack.newTransaction(componentProps);
              }}
              disabled={!email}
            >
              Pay ${checkoutToken.subtotal.formatted_with_symbol}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PaymentForm;
