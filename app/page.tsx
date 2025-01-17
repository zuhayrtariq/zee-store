// "use client";
import Image from "next/image";
import Header from "./components/Header";
import ProductsGrid from "./components/ProductsGrid";
import { Slider } from "./components/Slider";
import CategoriesCarousel from "./components/CategoriesCarousel";
import { Suspense, useEffect } from "react";
import { useWixClient } from "@/hooks/useWixClient";
import wixClientServer from "@/lib/wixClientServer";

export default async function Home() {
  // const wixClient = useWixClient();

  // useEffect(() => {
  //   const getProducts = async () => {
  //     const res = await wixClient.products.queryProducts().find();
  //     console.log(res);
  //   };
  //   getProducts();
  // }, [wixClient]);

  // const wixClient = await wixClientServer();
  // const res = await wixClient.products.queryProducts().find();
  // console.log(res);
  return (
    <div>
      <Slider />
      <div className="container-p ">
        <div className="mt-20">
          <h1 className="text-2xl cursor-default">Featured Products</h1>
          <Suspense fallback={"Loading"}>
            <ProductsGrid
              categoryId={process.env.FEATURED_CATEGORY_ID!}
              limit={4}
            />
          </Suspense>
        </div>
        <div className="mt-20">
          <h1 className="text-2xl cursor-default">Categories</h1>
          <Suspense fallback={"Loading"}>
            <CategoriesCarousel />
          </Suspense>
        </div>
        <div className="mt-20">
          <h1 className="text-2xl cursor-default">New Products</h1>
          <Suspense fallback={"Loading"}>
            <ProductsGrid categoryId="xx" limit={4} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
