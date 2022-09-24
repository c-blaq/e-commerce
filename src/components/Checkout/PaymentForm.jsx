import React, { useState } from "react";
import Review from "./Review";
import PaystackPop from "@paystack/inline-js";

const PaymentForm = ({
  checkoutToken,
  shippingData,
  onCaptureCheckout,
  backStep,
  nextStep,
}) => {
  const [email, setEmail] = useState("");

  const componentProps = {
    email,
    amount: checkoutToken.subtotal.raw * 100,
    key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
  };
  const handleSubmit = async () => {
    try {
      const orderData = {
        line_items: checkoutToken.line_items,
        customer: {
          firsname: shippingData.firstName,
          lastname: shippingData.lastName,
          email: shippingData.email,
        },
        shipping: {
          name: "Primary",
          street: shippingData.address,
          town_city: shippingData.city,
          county_state: shippingData.shippingSubdivision,
          postal_zip: shippingData.zip,
          country: shippingData.shippingCountry,
        },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: "paystack",
          paystack: {
            reference: document.getElementById("paystackReference").value, // The returned Paytack reference id
          },
        },
      };

      onCaptureCheckout(checkoutToken.id, orderData);
      nextStep();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <hr className="my-2  border" />

      <div className="mt-4">
        <h2 className="text-xl mb-6">Make Payment</h2>

        <form>
          <input
            className="border-b-2 block w-full sm:w-[48%] outline-none py-1 border-b-gray-300 hover:border-b-gray-500"
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="hidden"
            id="paystackReference"
            name="paystackReference"
          />
          <div className="flex justify-between mt-8">
            <button
              className="uppercase text-xs sm:text-base border-slate-300 border rounded shadow py-2 px-4"
              onClick={backStep}
            >
              back
            </button>

            <button
              className="bg-blue-800 text-xs sm:text-base uppercase py-2 rounded text-white px-4 disabled:opacity-70 disabled:cursor-not-allowed"
              type="button"
              onClick={() => {
                const paystack = new PaystackPop();
                paystack.newTransaction(componentProps);
                handleSubmit();
              }}
              disabled={!email}
            >
              Pay {checkoutToken.subtotal.formatted_with_symbol}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PaymentForm;
