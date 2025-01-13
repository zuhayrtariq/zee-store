import Image from "next/image";
import Header from "./components/Header";
import ProductsGrid from "./components/ProductsGrid";
import { CoverDemo } from "./components/Cover";
import { Slider } from "./components/Slider";
import CategoriesCarousel from "./components/CategoriesCarousel";

export default function Home() {
  return (
    <div>
      <Slider />
      <div className="lg:px-16 md:px-8 px-4">
        {/* <CoverDemo /> */}
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
