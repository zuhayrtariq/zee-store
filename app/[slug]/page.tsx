import React from "react";
import ProductImages from "../components/ProductImages";
import CustomizeProducts from "../components/CustomizeProducts";
import wixClientServer from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import { currentCart } from "@wix/ecom";

const SinglePage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const wixClient = await wixClientServer();
  const { items } = await wixClient.products
    .queryProducts()
    .eq("slug", slug)
    .find();
  if (!items[0]) {
    return notFound();
  }
  const product = items[0];

  return (
    <div className="flex w-full container-p gap-x-8 my-8">
      <div className="w-full lg:w-1/2  flex">
        <ProductImages items={product.media?.items} />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-y-4 ">
        <h2 className="text-4xl font-semibold ">{product.name}</h2>
        <hr />
        <p
          dangerouslySetInnerHTML={{ __html: product.description || "" }}
          className="max-h-[200px] overflow-y-scroll"
        ></p>
        <hr />
        <div className="flex items-center gap-x-4">
          {product.priceData?.price == product.priceData?.discountedPrice ? (
            <>
              <h3 className="font-semibold text-2xl">
                {product.priceData?.currency} {product.priceData?.price}
              </h3>
            </>
          ) : (
            <>
              <h3 className="font-semibold text-xl line-through text-gray-500">
                {product.priceData?.currency} {product.priceData?.price}
              </h3>
              <h4 className="font-semibold text-2xl">
                {product.priceData?.currency}{" "}
                {product.priceData?.discountedPrice}
              </h4>
            </>
          )}
        </div>
        {product.variants && product.productOptions && (
          <CustomizeProducts
            productId={product._id!}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        )}

        {product.additionalInfoSections?.map((section: any) => (
          <div className="text-sm" key={section.title}>
            <h3 className="text-xl font-semibold">{section.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: section.description }}></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SinglePage;
