import React, { useEffect } from "react";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import FormInput from "./FormInput";
import { commerce } from "../../lib/commerce";

const ShippingAddress = ({ checkoutToken }) => {
  const [shippingCountries, setshippingCountries] = useState([]);
  const [shippingCountry, setshippingCountry] = useState("");

  const countries = Object.entries(shippingCountries).map(([key, value]) => ({
    id: key,
    name: value,
  }));

  const fetchshippingCountries = async (checkoutTokedId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokedId
    );

    setshippingCountries(countries);
    setshippingCountry(Object.keys(countries)[0]);
  };

  useEffect(() => {
    fetchshippingCountries(checkoutToken.id);
  }, []);

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
          <select
            className="border-b-2 block w-[48%] outline-none py-1 border-b-gray-300 hover:border-b-gray-500"
            value={shippingCountry}
            onChange={(e) => setshippingCountry(e.target.value)}
          >
            {countries.map(({ id, name }) => (
              <option key={id}>{name}</option>
            ))}
          </select>
        </form>
      </FormProvider>
    </div>
  );
};

export default ShippingAddress;
