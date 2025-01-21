import React, { Suspense } from "react";
import ProductsGrid from "../components/ProductsGrid";
import { CampaignCover } from "../components/Cover";
import Filter from "../components/Filter";
import ProductsLayout from "../components/ProductsLayout";
import Skeleton from "../components/Skeleton";
// import { useSearchParams } from "next/navigation";

const ShopPage = ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  return (
    <div className="container-p flex flex-col gap-4 my-4 ">
      <div className="flex flex-col gap-4">
        {/* <CampaignCover /> */}
        <Filter />
      </div>
      <div>
        <h1 className="text-2xl cursor-default">All Products</h1>

        <Suspense fallback={<Skeleton />}>
          <ProductsLayout searchParams={searchParams} />
        </Suspense>
      </div>
    </div>
  );
};

export default ShopPage;
