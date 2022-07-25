import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow w-full sm:w-2/5 lg:w-1/4 shrink-0">
      <img
        src={product.image}
        alt=""
        className=" max-h-52 block w-full object-cover"
      />

      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className="sm:text-lg">{product.name}</span>
          <span>{product.price}</span>
        </div>
        <span className="text-gray-600 my-4 block"> {product.description}</span>

        <MdOutlineAddShoppingCart className="block ml-auto" />
      </div>
    </div>
  );
};

export default ProductCard;
