import React, { useEffect, useState } from "react";
import ShippingAddress from "./AddressForm";
import { commerce } from "../../lib/commerce";
import PaymentForm from "./PaymentForm";

const Checkout = ({ cart, onCaptureCheckout, order, error }) => {
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
      } catch (error) {
        console.log(error);
      }
    };

    generateToken();
  }, [cart]);

  const nextStep = () => setActiveStep(activeStep + 1);
  const backStep = () => {
    setActiveStep(activeStep - 1);
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
        nextStep={nextStep}
        backStep={backStep}
        onCaptureCheckout={onCaptureCheckout}
      />
    );

  return (
    <div className=" mt-20 lg:mt-16 min-h-[600px] justify-center flex flex-col items-center">
      <div className="bg-white rounded w-11/12 shadow-sm lg:w-2/3 p-4 max-w-2xl">
        <h2 className="text-center text-xl">Checkout</h2>
        <div className="flex gap-2 items-center">
          {steps.map((step, index) => (
            <button
              key={index}
              className="test text-sm sm:text-base"
              disabled={index > activeStep}
            >
              {step}
            </button>
          ))}
        </div>
        {activeStep === steps.length ? (
          <div className="my-6 lg:text-2xl text-center">
            <p>Thank you for shopping with us! </p>
            <p>Come back next time.</p>
          </div>
        ) : (
          checkoutToken && <Form />
        )}
      </div>
    </div>
  );
};

export default Checkout;
