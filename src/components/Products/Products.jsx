import React from "react";
import ProductCard from "./ProductCard";
import lampImg from "../../assets/images/lamp.jpg";

const Products = () => {
  const products = [
    {
      id: 1,

      name: "Lamp",
      price: "$45",
      image: lampImg,
      description: "Reading table lamp",
    },
    {
      id: 2,
      name: "Lamp",
      price: "$45",
      image: lampImg,
      description: "Reading table lamp",
    },
    {
      id: 3,
      name: "Lamp",
      price: "$45",
      image: lampImg,
      description: "Reading table lamp",
    },
  ];

  return (
    <main className="mt-20">
      <div className="flex flex-wrap w-11/12 m-auto items-center justify-center gap-4">
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </main>
  );
};

export default Products;
