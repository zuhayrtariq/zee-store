import React from "react";
import ProductCard from "./ProductCard";

const ProductsGrid = () => {
  return (
    <div className="grid lg:grid-cols-4 gap-x-8 gap-y-16 justify-between grid-cols-2 overflow-hidden items-center ">
      <ProductCard />

      <ProductCard />

      <ProductCard />

      <ProductCard />
    </div>
  );
};

export default ProductsGrid;
