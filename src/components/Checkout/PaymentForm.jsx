import React from "react";
import Review from "./Review";
import {
  Elements,
  ElementsConsumer,
  CardElement,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const PaymentForm = ({ checkoutToken }) => {
  const stripePromise = loadStripe("pub_key");
  return (
    <>
      <Review checkoutToken={checkoutToken} />
      <hr className="my-2  border" />

      <div className="mt-4">
        <h2 className="text-xl mb-6">Payment Method</h2>
        <Elements stripe={stripePromise}>
          <ElementsConsumer>
            {({ elements, stripe }) => (
              <form>
                <CardElement />
                <div className="flex justify-between mt-8">
                  <button className="uppercase border-slate-300 border rounded shadow py-2 px-4">
                    back to cart
                  </button>

                  <button
                    type="submit"
                    className="bg-blue-800 uppercase py-2 rounded text-white px-4"
                    disabled={!stripe}
                  >
                    Pay {checkoutToken.subtotal.formatted_with_symbol}
                  </button>
                </div>
              </form>
            )}
          </ElementsConsumer>
        </Elements>
      </div>
    </>
  );
};

export default PaymentForm;
