import React, { useEffect, useState } from "react";
import ShippingAddress from "./AddressForm";
import { commerce } from "../../lib/commerce";
import PaymentForm from "./PaymentForm";

const Checkout = ({ cart }) => {
  const steps = ["Shipping Address", "Payment details"];
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setcheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });

        setcheckoutToken(token);
      } catch (error) {}
    };

    generateToken();
  }, [cart]);

  const nextStep = (prevStep) => setActiveStep(prevStep + 1);
  const backStep = (prevStep) => {
    setActiveStep(prevStep - 1);
    console.log("clciked");
  };

  const goToNext = (data) => {
    setShippingData(data);
    nextStep();
  };

  const Form = () =>
    activeStep === 0 ? (
      <ShippingAddress checkoutToken={checkoutToken} goToNext={goToNext} />
    ) : (
      <PaymentForm
        checkoutToken={checkoutToken}
        shippingData={shippingData}
        backStep={backStep}
      />
    );

  return (
    <div className=" mt-16 min-h-[600px] justify-center flex flex-col items-center">
      <div className="bg-white rounded shadow-sm w-2/3 p-4 max-w-2xl">
        <h2 className="text-center text-xl">Checkout</h2>
        <div className="flex gap-2 items-center">
          {steps.map((step, index) => (
            <button key={index} className="test" disabled={index > activeStep}>
              {step}
            </button>
          ))}
        </div>
        {activeStep === steps.length ? <p>Last</p> : checkoutToken && <Form />}
      </div>
    </div>
  );
};

export default Checkout;
