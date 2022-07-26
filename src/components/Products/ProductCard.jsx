import React from "react";
import { MdOutlineAddShoppingCart } from "react-icons/md";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white shadow w-full sm:w-2/5 lg:w-1/4 shrink-0">
      <img
        src={product.image.url}
        alt=""
        className=" h-48 sm:h-52 max-h-52 block w-full object-cover"
      />

      <div className="p-4">
        <div className="flex justify-between items-center">
          <span className="sm:text-lg">{product.name}</span>
          <span>{product.price.formatted_with_symbol}</span>
        </div>
        <span
          className="text-gray-600 my-4 block"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
        <button
          aria-label="add to cart"
          className="block ml-auto hover:bg-gray-200 rounded-full p-2"
          onClick={() => onAddToCart(product.id, 1)}
        >
          <MdOutlineAddShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
