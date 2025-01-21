import React from "react";
import ProductCard from "./ProductCard";
import wixClientServer from "@/lib/wixClientServer";

const ProductsLayout = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();
  const params = await searchParams;
  console.log(params);
  //   console.log(params.hasOwnProperty("Colors"));

  //   let productsData;

  let data = await wixClient.products
    .queryProducts()
    .startsWith("name", params?.name || "")
    .gt("priceData.price", params?.min || 0)
    .lt("priceData.price", params?.max || 999999);

  //   data;
  if (params?.Sort) {
    console.log("Called");
    const [sortType, sortBy] = params.Sort.split(" ");
    if (sortType === "asc") {
      console.log(sortBy);

      data = data.ascending("price");
    }
    if (sortType === "desc") {
      data = data.descending(sortBy);
    }
  }
  const { items } = await data.find();
  //   productsData = productsData.items;
  const productsData = items.filter((product) => {
    const opts = product.productOptions;

    return opts?.every((opt) => {
      if (params.hasOwnProperty(opt.name!)) {
        const choices = opt.choices!;
        return choices.some(
          (choice) => choice.description === params[opt.name!]
        );
      }
      return true; // If param is not in options, include by default
    });
  });

  return (
    <div className="grid lg:grid-cols-4 gap-x-8 gap-y-16 justify-between grid-cols-2 overflow-hidden items-center ">
      {productsData.map((product) => (
        <ProductCard product={product} key={product._id} />
      ))}
    </div>
  );
};

export default ProductsLayout;
