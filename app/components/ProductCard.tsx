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
        <div className="flex w-full justify-between items-center">
          <p className="font-bold text-sm capitalize">{product.name}</p>
          <p className="font-bold text-sm">${product.price.price}</p>
        </div>
        <p className="text-xs text-gray-500 pb-2">
          Lorem ipsum dolor sit amet consectetur
        </p>
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
