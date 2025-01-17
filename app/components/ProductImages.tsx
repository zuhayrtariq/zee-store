"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProductImages = () => {
  const [mainImg, setMainImg] = useState(1);
  const imgArr = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1501127122-f385ca6ddd9d?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1495121605193-b116b5b9c5fe?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1911&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1523199455310-87b16c0eed11?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNsb3RoZXN8ZW58MHx8MHx8fDA%3D",
    },
  ];
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="relative h-[300px]  w-full rounded-lg overflow-hidden">
        <Image
          src={imgArr[mainImg - 1].url}
          alt="Product Image"
          fill
          className="object-contain rounded-lg"
          sizes="50vw"
        />
      </div>

      <div className="flex w-full gap-4">
        {imgArr.map((img, i) => (
          <div className="h-32 relative w-[200px]" key={img.id}>
            <Image
              src={img.url}
              alt="Product Image"
              fill
              className="object-cover cursor-pointer rounded-md"
              sizes="50vw"
              onClick={() => {
                setMainImg(img.id);
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
