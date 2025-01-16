"use client";
import Image from "next/image";
import Header from "./components/Header";
import ProductsGrid from "./components/ProductsGrid";
import { Slider } from "./components/Slider";
import CategoriesCarousel from "./components/CategoriesCarousel";
import { useEffect } from "react";
import { useWixClient } from "@/hooks/useWixClient";

export default function Home() {
  const wixClient = useWixClient();

  useEffect(() => {
    const getProducts = async () => {
      const res = await wixClient.products.queryProducts().find();
      console.log(res);
    };
    getProducts();
  }, [wixClient]);
  return (
    <div>
      <Slider />
      <div className="container-p ">
        <div className="mt-20">
          <h1 className="text-2xl cursor-default">Featured Products</h1>
          <ProductsGrid />
        </div>
        <div className="mt-20">
          <h1 className="text-2xl cursor-default">Categories</h1>
          <CategoriesCarousel />
        </div>
        <div className="mt-20">
          <h1 className="text-2xl cursor-default">New Products</h1>
          <ProductsGrid />
        </div>
      </div>
    </div>
  );
}
