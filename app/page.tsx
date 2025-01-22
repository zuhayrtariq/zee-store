// "use client";
import Image from "next/image";
import Header from "./components/Header";
import ProductsGrid from "./components/ProductsGrid";
import { Slider } from "./components/Slider";
import CategoriesCarousel from "./components/CategoriesCarousel";
import { Suspense, useEffect } from "react";
import { useWixClient } from "@/hooks/useWixClient";
import wixClientServer from "@/lib/wixClientServer";
import { FeaturesGrid } from "./components/FeaturesGrid";
import {
  FollowerPointerCard,
  FollowPointer,
} from "@/components/ui/following-pointer";
import Skeleton from "./components/Skeleton";

export default async function Home() {
  return (
    <div>
      <Slider />

      <div className="container-p ">
        <div className="mt-20">
          <h1 className="text-2xl font-semibold cursor-default">
            Featured Products
          </h1>
          <Suspense fallback={<Skeleton />}>
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
      <div className="bg-[#F4F4F5] my-4">
        <FeaturesGrid />
      </div>
    </div>
  );
}
