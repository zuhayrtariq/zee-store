import React from "react";
import ProductCard from "./ProductCard";
import wixClientServer from "@/lib/wixClientServer";
import Pagination from "./Pagination";
const PRODUCTS_PER_PAGE = 8;
const ProductsLayout = async ({ searchParams }: { searchParams: any }) => {
  const wixClient = await wixClientServer();
  const params = await searchParams;
  console.log(params);
  const cat = await wixClient.collections.getCollectionBySlug(
    params.cat || "all-products"
  );
  //   console.log(params.hasOwnProperty("Colors"));

  //   let productsData;

  let data = await wixClient.products
    .queryProducts()
    .eq("collectionIds", cat.collection?._id)
    .gt("priceData.price", params?.min || 0)
    .lt("priceData.price", params?.max || 999999);
  // .limit(PRODUCTS_PER_PAGE)
  // .skip(params.page ? parseInt(params.page) * PRODUCTS_PER_PAGE : 0);

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
  const { items, currentPage } = await data.find();
  const d = await data.find();
  const filteredItems = items.filter((x) => {
    if (params?.name) {
      if (x.name?.toLowerCase().includes(params?.name.toLowerCase())) return x;
    } else return x;
  });
  const productsData = filteredItems.filter((product) => {
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
    <>
      <div className="grid lg:grid-cols-4 gap-x-8 gap-y-16 justify-between grid-cols-2 overflow-hidden items-center ">
        {productsData.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>

      {/* <Pagination
        currentPage={currentPage || 0}
        hasPrev={d.hasPrev()}
        hasNext={d.hasNext()}
      /> */}
    </>
  );
};

export default ProductsLayout;
