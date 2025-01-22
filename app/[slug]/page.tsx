import React from "react";
import ProductImages from "../components/ProductImages";
import CustomizeProducts from "../components/CustomizeProducts";
import wixClientServer from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import { currentCart } from "@wix/ecom";
import ProductImageCarousel from "../components/ProductImageCarousel";
import ProductOptions from "../components/ProductOptions";
import he from "he";

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
  const imagesData = product.media?.items?.map((x: any) => {
    const src = x.image.url;
    return { src, title: "Image Title", button: "Button" };
  });

  return (
    <div className="flex w-full justify-center container-p gap-x-16 gap-y-8 my-8">
      <div className="  flex">
        <ProductImageCarousel imagesData={imagesData} />
      </div>
      <div className=" flex flex-col gap-4 max-w-[750px]">
        <div>
          <h2 className="text-2xl font-semibold ">{product.name}</h2>
          <p className="text-xs">{product.slug}</p>
          <hr />
        </div>

        <div className="flex items-center gap-x-4">
          {product.priceData?.price == product.priceData?.discountedPrice ? (
            <>
              <h3 className="font-semibold text-lg">
                {product.priceData?.currency} {product.priceData?.price}
              </h3>
            </>
          ) : (
            <>
              <h3 className="font-semibold text-base line-through text-gray-500">
                {product.priceData?.currency} {product.priceData?.price}
              </h3>
              <h4 className="font-semibold text-lg">
                {product.priceData?.currency}{" "}
                {product.priceData?.discountedPrice}
              </h4>
            </>
          )}
        </div>

        <div>
          {product.variants && product.productOptions && (
            <ProductOptions
              productId={product._id!}
              variants={product.variants}
              productOptions={product.productOptions}
            />
          )}
        </div>
        <div className="flex flex-col gap-8 mt-4">
          <div>
            <h3 className="text-lg font-semibold">Product Description</h3>

            <p
              className="leading-tight text-sm whitespace-pre-wrap"
              dangerouslySetInnerHTML={{
                __html: he.decode(
                  product.description?.replaceAll("\\n", "<br/>")!
                ),
              }}
            ></p>
            <hr />
          </div>

          {product.additionalInfoSections?.map((section: any) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <p
                className="leading-tight text-sm"
                style={{ whiteSpace: "pre-wrap" }}
                dangerouslySetInnerHTML={{
                  __html: he.decode(section.description),
                }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
