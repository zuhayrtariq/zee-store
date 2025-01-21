import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const ProductCard = ({ product }: { product: any }) => {
  return (
    <div>
      <Link href={"/" + product.slug}>
        <div className="relative h-80 w-full">
          <Image
            src={product.media?.mainMedia?.image?.url}
            alt=""
            sizes="25vw"
            fill
            className=" object-cover rounded-md absolute hover:opacity-0 z-10 transition-all duration-200"
          />
          {product.media?.items && (
            <Image
              src={product.media?.items[1]?.image?.url}
              alt=""
              sizes="25vw"
              fill
              className=" object-cover rounded-md absolute"
            />
          )}
        </div>
      </Link>

      <div className="mt-2">
        <div className="flex flex-col gap-2 w-full justify-between text-sm mb-2">
          <p className="font-semibold text-sm capitalize flex-1">
            {product.name}
            <br />
            <span className="text-xs text-gray-500 ">
              Lorem ipsum dolor sit amet consectetur
            </span>
          </p>

          <p className="font-semibold text-xs ">
            {product.price.price !== product.price.discountedPrice ? (
              <>
                <span className="line-through text-gray-600 pr-2">
                  {product.price.currency}{" "}
                  {product.price.price.toLocaleString()}
                </span>
                {product.price.currency}{" "}
                {product.price.discountedPrice.toLocaleString()}
              </>
            ) : (
              product.price.currency +
              " " +
              product.price.price.toLocaleString()
            )}
          </p>
        </div>
        <Button
          variant={"outline"}
          size={"sm"}
          className="hover:bg-primary hover:text-background rounded-2xl font-semibold text-sm"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
