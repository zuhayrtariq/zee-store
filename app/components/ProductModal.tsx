import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingBasketIcon } from "lucide-react";
import { products, productsV3 } from "@wix/stores";
import CustomizeProducts from "./CustomizeProducts";
import ProductModalOptions from "./ProductModalOptions";
import { ProductsCarousel } from "@/components/ui/products-carousal";
import { ImagesSlider } from "@/components/ui/images-slider";
import ProductModelCarousel from "./ProductModalCarousel";
import ProductOptions from "./ProductOptions";

export function ProductModal({ product }: { product: any }) {
  const imagesData = product.media?.items.map((x: any) => {
    const src = x.image.url;
    return { src, title: "Image Title", button: "Button" };
  });
  const images = product.media?.items.map((x: any) => {
    const src = x.image.url;
    return src;
  });
  //   console.log("Images", images[0]);
  return (
    <div className="  flex justify-end mr-4">
      <Modal>
        <ModalTrigger className="hover:bg-white hover:text-black rounded-lg font-semibold text-sm flex items-center justify-center  group/modal-btn outline  px-2 py-1">
          <span className=" group-hover/modal-btn:translate-x-40 text-center  transition duration-500">
            Buy Now
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500  z-20">
            <ShoppingBasketIcon />
          </div>
        </ModalTrigger>

        <ModalBody className="  overflow-y-auto">
          <ModalContent>
            <div className="flex justify-center items-center ">
              <ProductModelCarousel images={images} />
            </div>
            <div>
              <div className="w-full mt-6 flex flex-col  gap-y-4 ">
                <div className="flex  flex-col">
                  <h2 className="text-xl font-semibold ">{product.name}</h2>
                  <hr />
                  {/* <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus, dolores ut tempora ad beatae nihil doloremque
                    ducimus nisi quas repellendus!
                  </p> */}
                </div>
                <div className="  flex flex-col">
                  {/* <div className="flex items-center gap-x-4">
                    {product.priceData?.price ==
                    product.priceData?.discountedPrice ? (
                      <>
                        <h3 className="font-semibold text-2xl">
                          {product.priceData?.currency}{" "}
                          {product.priceData?.price}
                        </h3>
                      </>
                    ) : (
                      <>
                        <h3 className="font-semibold text-xl line-through text-gray-500">
                          {product.priceData?.currency}{" "}
                          {product.priceData?.price}
                        </h3>
                        <h4 className="font-semibold text-2xl">
                          {product.priceData?.currency}{" "}
                          {product.priceData?.discountedPrice}
                        </h4>
                      </>
                    )}
                  </div> */}
                  {product.variants && product.productOptions && (
                    <ProductOptions
                      productId={product._id!}
                      variants={product.variants}
                      productOptions={product.productOptions}
                      modal={true}
                    />
                  )}
                </div>
              </div>
            </div>
          </ModalContent>
          {/* <ModalFooter className="gap-4">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>
            <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
              Add to cart
            </button>
          </ModalFooter> */}
        </ModalBody>
      </Modal>
    </div>
  );
}

const PlaneIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M16 10h4a2 2 0 0 1 0 4h-4l-4 7h-3l2 -7h-4l-2 2h-3l2 -4l-2 -4h3l2 2h4l-2 -7h3z" />
    </svg>
  );
};

const VacationIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M17.553 16.75a7.5 7.5 0 0 0 -10.606 0" />
      <path d="M18 3.804a6 6 0 0 0 -8.196 2.196l10.392 6a6 6 0 0 0 -2.196 -8.196z" />
      <path d="M16.732 10c1.658 -2.87 2.225 -5.644 1.268 -6.196c-.957 -.552 -3.075 1.326 -4.732 4.196" />
      <path d="M15 9l-3 5.196" />
      <path d="M3 19.25a2.4 2.4 0 0 1 1 -.25a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 1 .25" />
    </svg>
  );
};

const ElevatorIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M5 4m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z" />
      <path d="M10 10l2 -2l2 2" />
      <path d="M10 14l2 2l2 -2" />
    </svg>
  );
};

const FoodIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M20 20c0 -3.952 -.966 -16 -4.038 -16s-3.962 9.087 -3.962 14.756c0 -5.669 -.896 -14.756 -3.962 -14.756c-3.065 0 -4.038 12.048 -4.038 16" />
    </svg>
  );
};

const MicIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M15 12.9a5 5 0 1 0 -3.902 -3.9" />
      <path d="M15 12.9l-3.902 -3.899l-7.513 8.584a2 2 0 1 0 2.827 2.83l8.588 -7.515z" />
    </svg>
  );
};

const ParachuteIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M22 12a10 10 0 1 0 -20 0" />
      <path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3c0 -1.66 -1.57 -3 -3.5 -3s-3.5 1.34 -3.5 3c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" />
      <path d="M2 12l10 10l-3.5 -10" />
      <path d="M15.5 12l-3.5 10l10 -10" />
    </svg>
  );
};
