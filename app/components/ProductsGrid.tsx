import React from "react";
import ProductCard from "./ProductCard";
import wixClientServer from "@/lib/wixClientServer";

const ProductsGrid = async ({
  categoryId,
  limit = 4,
}: {
  categoryId: string;
  limit: number;
}) => {
  const wixClient = await wixClientServer();
  let productsData;

  if (categoryId == "xx") {
    productsData = await wixClient.products
      .queryProducts()
      .descending("lastUpdated")
      .limit(limit)
      .find();
  } else if ((categoryId = "0")) {
    productsData = await wixClient.products.queryProducts().find();
  } else
    productsData = await wixClient.products
      .queryProducts()
      .eq("collectionIds", categoryId)
      .limit(limit)
      .find();
  productsData = productsData.items;
  return (
    <div className="grid lg:grid-cols-4 gap-x-8 gap-y-16 justify-between grid-cols-2 overflow-hidden items-center ">
      {productsData.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default ProductsGrid;
