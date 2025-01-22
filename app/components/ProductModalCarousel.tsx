import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";

const ProductModelCarousel = async ({ images }: { images: string[] }) => {
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
        <CarouselContent className="h-full aspect-square w-[200px]">
          {images.map((img) => (
            <CarouselItem className=" " key={img}>
              <div className="relative w-full h-full ">
                <Image
                  src={img || ""}
                  alt="P"
                  fill
                  sizes={"25vw"}
                  className=" object-contain rounded-md group-hover:brightness-75"
                />
              </div>{" "}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProductModelCarousel;
