import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

import React from "react";
import wixClientServer from "@/lib/wixClientServer";

const CategoriesCarousel = async () => {
  const wixClient = await wixClientServer();
  const { items } = await wixClient.collections.queryCollections().find();

  return (
    <div className="cursor-pointer ">
      <Carousel
        opts={{
          loop: true,
          slidesToScroll: 1,
          startIndex: 0,
          align: "start",
        }}
      >
        <CarouselContent className="">
          {items.map((category) => (
            <CarouselItem
              className="basis-1/2 lg:basis-1/4 "
              key={category.name}
            >
              <Link href={"/list?cat=" + category.slug} className="group ">
                <div className="h-60 relative">
                  <Image
                    src={category.media?.mainMedia?.image?.url || ""}
                    alt="P"
                    fill
                    sizes={"100vw"}
                    className=" object-cover rounded-md group-hover:brightness-75"
                  />
                </div>{" "}
                <p className="capitalize pt-2">{category.name}</p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CategoriesCarousel;
