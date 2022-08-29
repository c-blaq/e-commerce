import React, { useEffect, useState } from "react";
import ShippingAddress from "./AddressForm";
import { commerce } from "../../lib/commerce";
import { type } from "@testing-library/user-event/dist/type";

const Checkout = ({ cart }) => {
  const steps = ["Shipping Address", "Payment details"];
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setcheckoutToken] = useState("");

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });

        console.log(token);
        setcheckoutToken(token);
      } catch (error) {
        console.log("Something went wrong");
      }
    };

    generateToken();
  }, []);

  const Form = () => activeStep == 0 && <ShippingAddress />;

  return (
    <div className=" mt-16 min-h-[500px] justify-center flex flex-col items-center">
      <div className="bg-white rounded shadow-sm w-2/3 p-4 max-w-2xl">
        <h2 className="text-center text-xl">Checkout</h2>
        <div className="flex gap-2 items-center">
          {steps.map((step, index) => (
            <button key={index} className="test" disabled={index > activeStep}>
              {step}
            </button>
          ))}
        </div>
        {activeStep === steps.length ? <p>LAst</p> : checkoutToken && <Form />}
      </div>
    </div>
  );
};

export default Checkout;
