import React from "react";
import ProductImages from "../components/ProductImages";
import CustomizeProducts from "../components/CustomizeProducts";

const SinglePage = () => {
  return (
    <div className="flex w-full container-p gap-x-8">
      <div className="w-full lg:w-1/2  flex">
        <ProductImages />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-y-4 ">
        <h2 className="text-4xl font-semibold ">Product Name</h2>
        <hr />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum
          voluptatibus quasi adipisci modi tenetur quae quo, fugiat deserunt.
          Ullam fuga, esse ut enim maiores error voluptatem autem animi rerum
          omnis!
        </p>
        <hr />
        <h4 className="font-semibold text-2xl">$40.99</h4>

        <CustomizeProducts />
      </div>
    </div>
  );
};

export default SinglePage;
