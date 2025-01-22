"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProductImages = ({ items }: { items: any }) => {
  const [mainImg, setMainImg] = useState(0);
  items = items.filter((x: any, i: number) => {
    return i < 4;
  });

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="relative h-[300px]  w-full rounded-lg overflow-hidden">
        <Image
          src={items[mainImg].image?.url}
          alt="Product Image"
          fill
          className="object-contain rounded-lg"
          sizes="50vw"
        />
      </div>

      <div className="flex w-full gap-4">
        {items.map((item: any, i: number) => (
          <div className="h-32 relative w-[200px]" key={item._id}>
            <Image
              src={item.image.url}
              alt="Product Image"
              fill
              className="object-cover cursor-pointer rounded-md"
              sizes="50vw"
              onClick={() => {
                setMainImg(i);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
