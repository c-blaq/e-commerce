import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./FormInput";

const ShippingAddress = () => {
  const methods = useForm();
  return (
    <div className="mt-8">
      <h2 className="text-2xl mb-3">Shipping Address</h2>
      <FormProvider {...methods}>
        <form className="flex flex-wrap justify-between gap-4 items-center w-full">
          <FormInput type="text" name="First name" placeholder="First name*" />
          <FormInput type="text" name="Last name" placeholder="Last name*" />
          <FormInput type="text" name="Address" placeholder="Address*" />
          <FormInput type="email" name="Email" placeholder="Email*" />
          <FormInput type="text" name="City" placeholder="City*" />
          <FormInput
            type="number"
            name="ZIP / Postal code"
            placeholder="ZIP / Postal code*"
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default ShippingAddress;
