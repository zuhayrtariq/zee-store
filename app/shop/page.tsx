import React, { Suspense } from "react";
import ProductsGrid from "../components/ProductsGrid";

const ShopPage = () => {
  return (
    <div className="my-8 container-p">
      <div>
        <h1 className="text-2xl cursor-default">All Products</h1>
        <Suspense fallback={"Loading"}>
          <ProductsGrid categoryId="0" limit={0} />
        </Suspense>
      </div>
    </div>
  );
};

export default ShopPage;
