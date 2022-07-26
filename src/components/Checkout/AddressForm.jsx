import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { commerce } from "../../lib/commerce";
import { Link } from "react-router-dom";

const ShippingAddress = ({ checkoutToken, goToNext }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState("");
  const [shipppingSubdivisions, setShipppingSubdivisions] = useState([]);
  const [shipppingSubdivision, setShipppingSubdivision] = useState("");
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState("");

  const countries = Object.entries(shippingCountries).map(([key, value]) => ({
    id: key,
    name: value,
  }));
  const subdivisions = Object.entries(shipppingSubdivisions).map(
    ([key, value]) => ({
      id: key,
      name: value,
    })
  );
  const options = shippingOptions.map((option) => ({
    id: option.id,
    name: `${option.description} - (${option.price.formatted_with_symbol})`,
  }));

  const fetchshippingCountries = async (checkoutTokedId) => {
    const { countries } = await commerce.services.localeListShippingCountries(
      checkoutTokedId
    );

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchShippingSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(
      countryCode
    );

    setShipppingSubdivisions(subdivisions);
    setShipppingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (
    checkoutTokedId,
    country,
    region = null
  ) => {
    const options = await commerce.checkout.getShippingOptions(
      checkoutTokedId,
      { country, region }
    );

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  useEffect(() => {
    fetchshippingCountries(checkoutToken.id);
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (shippingCountry) {
      fetchShippingSubdivisions(shippingCountry);
    }
  }, [shippingCountry]);

  useEffect(() => {
    if (shipppingSubdivision) {
      fetchShippingOptions(
        checkoutToken.id,
        shippingCountry,
        shipppingSubdivision
      );
    }
    //eslint-disable-next-line
  }, [shipppingSubdivision]);

  const { register, handleSubmit } = useForm();
  return (
    <div className="mt-8">
      <h2 className="text-xl sm:text-2xl mb-3">Shipping Address</h2>

      <form
        className="w-full"
        onSubmit={handleSubmit((data) =>
          goToNext({
            ...data,
            shippingCountry,
            shipppingSubdivision,
            shippingOption,
          })
        )}
      >
        <div className="flex flex-wrap justify-between gap-4 items-center ">
          <input
            type="text"
            {...register("firstName")}
            className="form-input text-sm sm:text-base"
            placeholder="First name*"
          />
          <input
            type="text"
            {...register("lastName")}
            className="form-input text-sm sm:text-base"
            placeholder="Last name*"
          />
          <input
            type="text"
            {...register("address")}
            className="form-input text-sm sm:text-base"
            placeholder="Address*"
          />
          <input
            type="email"
            {...register("email")}
            className="form-input text-sm sm:text-base"
            placeholder="Email*"
          />
          <input
            type="text"
            {...register("city")}
            className="form-input text-sm sm:text-base"
            placeholder="City*"
          />
          <input
            type="number"
            {...register("zip")}
            className="form-input text-sm sm:text-base"
            placeholder="ZIP / Postal code*"
          />
          <select
            {...register("shippingCountry")}
            className="border-b-2 bg-transparent block w-full sm:w-[48%] outline-none py-1 border-b-gray-300 hover:border-b-gray-500"
            onChange={(e) => setShippingCountry(e.target.value)}
          >
            {countries.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
          <select
            {...register("shippingSubdivision")}
            className="border-b-2 bg-transparent block w-full sm:w-[48%] outline-none py-1 border-b-gray-300 hover:border-b-gray-500"
            onChange={(e) => setShipppingSubdivision(e.target.value)}
          >
            {subdivisions.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
          <select
            {...register("shippingOption")}
            className="border-b-2 bg-transparent block w-full sm:w-[48%] outline-none py-1 border-b-gray-300 hover:border-b-gray-500"
            onChange={(e) => setShippingOption(e.target.value)}
          >
            {options.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex justify-between mt-4">
          <Link to="/cart">
            <button className="uppercase text-xs sm:text-base border-slate-300 border rounded shadow py-2 px-4">
              back to cart
            </button>
          </Link>
          <button
            type="submit"
            className="bg-blue-800 text-xs sm:text-base uppercase py-2 rounded text-white px-4"
          >
            next
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
