import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const ImagesCarousel = ({ imagesData }: { imagesData: string[] }) => {
  return (
    <div className="cursor-pointer flex w-full justify-center items-center">
      <Carousel
        className=" w-4/5"
        opts={{
          loop: true,
          slidesToScroll: 1,
          startIndex: 0,
          align: "start",
        }}
      >
        <CarouselContent>
          {imagesData.map((img) => (
            <CarouselItem
              // className="basis-1/2 lg:basis-1/4 "
              key={img}
            >
              <div className="h-60 w-full relative">
                <Image
                  src={img}
                  alt="P"
                  fill
                  sizes={"80vw"}
                  className=" object-cover rounded-md group-hover:brightness-75"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ImagesCarousel;
