import React from "react";
import ProductCard from "./ProductCard";
import Header from "../Header/Header";

const Products = ({ products }) => {
  return (
    <>
      <Header />
      <main className="mt-20">
        <div className="flex flex-wrap w-11/12 m-auto items-stretch justify-center gap-4">
          {products.map((product) => {
            return <ProductCard key={product.id} product={product} />;
          })}
        </div>
      </main>
    </>
  );
};

export default Products;
