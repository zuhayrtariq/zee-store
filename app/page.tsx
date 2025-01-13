import Image from "next/image";
import Header from "./components/Header";
import ProductsGrid from "./components/ProductsGrid";
import { CoverDemo } from "./components/Cover";

export default function Home() {
  return (
    <div className="lg:px-16 md:px-8">
      <Header />
      {/* <CoverDemo /> */}
      {/* <ProductsGrid /> */}
    </div>
  );
}
