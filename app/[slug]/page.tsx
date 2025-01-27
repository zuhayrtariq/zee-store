import React from "react";
import ProductImages from "../components/ProductImages";
import CustomizeProducts from "../components/CustomizeProducts";
import wixClientServer from "@/lib/wixClientServer";
import { notFound } from "next/navigation";
import { currentCart } from "@wix/ecom";
import ProductImageCarousel from "../components/ProductImageCarousel";
import ProductOptions from "../components/ProductOptions";
import he from "he";
import { ImagesSlider } from "@/components/ui/images-slider";
import ImagesCarousel from "../components/ImagesCarousel";

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
    const src: string = x.image.url;
    return src;
  });

  return (
    <div className="flex flex-col md:flex-row w-full justify-center container-p gap-x-16 gap-y-8 my-8">
      <div className="  hidden md:flex">
        <ProductImageCarousel imagesData={imagesData || []} />
      </div>
      <div className="  flex md:hidden">
        <ImagesCarousel imagesData={imagesData || []} />
      </div>
      <div className=" flex flex-col gap-4 max-w-[750px]">
        <div className="text-center md:text-left">
          <div className="flex justify-center items-center w-full">
            <span className=" w-[75px] rounded-full border-gray-300 mb-2 border-2  text-center md:hidden"></span>
          </div>
          <h2 className="text-lg md:text-2xl font-semibold ">
            {product?.name}
          </h2>
          <p className="text-xs">{product.slug}</p>
          <hr className="hidden md:block" />
        </div>

        <div className="flex items-center justify-center md:justify-normal gap-x-4">
          {product.priceData?.price == product.priceData?.discountedPrice ? (
            <>
              <h3 className="font-semibold md:text-lg">
                {product.priceData?.currency} {product.priceData?.price}
              </h3>
            </>
          ) : (
            <>
              <h3 className="font-semibold md:text-base text-sm line-through text-gray-500">
                {product.priceData?.currency} {product.priceData?.price}
              </h3>
              <h4 className="font-semibold md:text-lg">
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
            <h3 className="md:text-lg font-semibold">Product Description</h3>

            <p
              className="leading-tight text-xs md:text-sm whitespace-pre-wrap"
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
              <h3 className="md:text-lg font-semibold">{section.title}</h3>
              <p
                className="leading-tight text-xs  md:text-sm whitespace-pre-wrap"
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
