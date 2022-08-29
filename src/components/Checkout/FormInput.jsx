import React from "react";

const FormInput = ({ type, name, placeholder }) => {
  return (
    <>
      <input
        className="border-b-2 block w-[48%] outline-none py-1 border-b-gray-300 hover:border-b-gray-500"
        type={type}
        name={name}
        placeholder={placeholder}
        required
      />
    </>
  );
};

export default FormInput;
