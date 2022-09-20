import React from "react";
import { useForm } from "react-hook-form";

const FormInput = ({ type, name, placeholder }) => {
  const { register } = useForm();
  return (
    <>
      <input
        className="border-b-2 block w-[48%] outline-none py-1 border-b-gray-300 hover:border-b-gray-500"
        type={type}
        {...register(name)}
        placeholder={placeholder}
        required
      />
    </>
  );
};

export default FormInput;
