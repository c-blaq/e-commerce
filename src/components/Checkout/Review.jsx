import React from "react";

const Review = ({ checkoutToken }) => {
  return (
    <div>
      <h2 className="text-xl sm:text-2xl my-4 sm:my-6">Order Summary</h2>
      {checkoutToken.line_items.map((product) => (
        <div className="my-4" key={product.name}>
          <h3 className="sm:text-xl">{product.name}</h3>
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Quantity: {product.quantity}</span>
            <span className="text-gray-700">
              {product.line_total.formatted_with_symbol}
            </span>
          </div>
        </div>
      ))}

      <div className="mt-6">
        <h2 className="text-xl ">Total</h2>
        <span className="font-bold">
          {checkoutToken.subtotal.formatted_with_symbol}
        </span>
      </div>
    </div>
  );
};

export default Review;
