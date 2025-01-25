"use client";
import { ProductsCarousel } from "@/components/ui/products-carousal";
import { ChevronLeft, ChevronRight, ChevronRightCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ProductImageCarousel = ({ imagesData }: { imagesData: string[] }) => {
  //   imagesData = imagesData.filter((x: any, i: number) => i < 7);
  const [mainImg, setMainImg] = useState(0);
  const changeImage = (opr = "+") => {
    if (opr == "-") {
      if (mainImg <= 0) setMainImg(imagesData.length - 1);
      else setMainImg(mainImg - 1);
    } else if (opr == "+") {
      if (mainImg == imagesData.length - 1) {
        setMainImg(0);
      } else setMainImg(mainImg + 1);
    }
  };
  return (
    <div className="flex   overflow-hidden justify-center h-[600px] gap-4 select-none ">
      <div
        className={`flex  flex-col gap-2   ${
          imagesData?.length < 6 && "justify-center"
        }`}
      >
        {imagesData.map((x: any, i: number) => {
          return (
            <div
              className={`relative w-16 h-16 rounded-lg overflow-hidden shrink-0  cursor-default  ${
                mainImg == i && "brightness-90"
              }`}
              onMouseEnter={() => setMainImg(i)}
              key={x}
            >
              <Image
                src={x}
                alt="Product Img"
                className="object-fill"
                fill
                sizes="5vw"
              />
            </div>
          );
        })}
      </div>
      <div className="flex  w-[400px]  bg-gray-200 ">
        <div className="relative w-[400px] h-full rounded-lg overflow-hidden flex items-center justify-center aspect-[3/2] ">
          <Image
            src={imagesData[mainImg]}
            alt="Product Img"
            className="object-contain "
            fill
            sizes="40vw"
            priority
          />
          <span
            onClick={() => changeImage("-")}
            className="absolute cursor-pointer w-8 h-8 rounded-full bg-white flex items-center justify-center bottom-2 right-12"
          >
            <ChevronLeft />
          </span>
          <span
            onClick={() => changeImage("+")}
            className="absolute cursor-pointer w-8 h-8 rounded-full bg-white flex items-center justify-center bottom-2 right-2"
          >
            <ChevronRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductImageCarousel;
