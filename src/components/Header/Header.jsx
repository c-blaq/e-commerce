import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-5 fixed top-0 left-0 right-0">
      <div className="flex items-center justify-between">
        <h1>Logo</h1>
        <div className="relative">
          <FaShoppingCart className="text-xl" />

          <span className="bg-red-500 h-4 w-4 rounded-full text-white flex items-center justify-center p-3 absolute top-[-12px] right-[-10px]">
            2
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
