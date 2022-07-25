import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-sm p-4">
      <div className="flex items-center justify-between">
        <h1>Logo</h1>
        <div>
          <FaShoppingCart />
        </div>
      </div>
    </header>
  );
};

export default Header;
