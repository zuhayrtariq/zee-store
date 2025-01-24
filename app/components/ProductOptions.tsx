"use client";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import { products } from "@wix/stores";

import React, { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useModal } from "@/components/ui/animated-modal";

const ProductOptions = ({
  productId,
  variants,
  productOptions,
  modal = false,
}: {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
  modal?: boolean;
}) => {
  const { cart, addItem } = useCartStore();
  const { toast } = useToast();
  const { setOpen } = useModal();
  const wixClient = useWixClient();
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  const [selectedVariant, setSelectedVariant] = useState<products.Variant>();

  const handleOptionsSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
    const opts = { ...selectedOptions, [optionType]: choice };
    const variant = variants.find((v) => {
      const variantChoices = v.choices!;
      if (!variantChoices) return false;
      return Object.entries(variantChoices).every(
        ([key, value]) => opts[key] === value
      );
    });
    console.log("Initial Variant : ", variant);
    setSelectedVariant(variant);
  };

  const isVariantInStock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoices = variant.choices;
      if (!variantChoices) return false;
      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoices[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock.quantity &&
        variant.stock.quantity > 0
      );
    });
  };

  async function addToCart() {
    console.log("Selected Variant", selectedVariant);
    if (selectedVariant) {
      const response = addItem(wixClient, productId, selectedVariant?._id!, 1);
      console.log(response);
      toast({
        title: "Product Added To Cart",
        // description: "Please Select All Options",
      });
      if (modal) {
        setOpen(false);
      }
    } else {
      console.log("Called");
      toast({
        title: "Uh oh! Something went wrong.",
        description: "Please Select All Options",
        variant: "destructive",
      });
    }
  }
  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => (
        <div key={option.name}>
          <h4 className="font-semibold pb-2 text-lg">{option.name}</h4>

          <div className="flex flex-wrap  gap-4">
            {option.choices?.map((choice) => {
              const disabled = !isVariantInStock({
                ...selectedOptions,
                [option.name!]: choice.description!,
              });
              const selected =
                selectedOptions[option.name!] === choice.description;
              return (
                <Button
                  className={`px-2 h-8 capitalize  rounded-lg outline w-[160px] `}
                  variant={selected ? "default" : "outline"}
                  disabled={disabled}
                  key={choice.description}
                  onClick={() =>
                    handleOptionsSelect(option.name!, choice.description!)
                  }
                >
                  {option.name == "Color" && (
                    <span
                      className="w-4 h-4 rounded-full border"
                      style={{
                        backgroundColor: choice?.value || "white",
                      }}
                    ></span>
                  )}
                  {choice.description}
                </Button>
              );
            })}
          </div>
        </div>
      ))}

      <div className="">
        {/* <>
        <h4 className="font-semibold pb-2 text-xl">
          Choose a Quantity {quantity}
        </h4>
        <div className="flex gap-x-8 items-center">
          <div className="flex gap-x-4 items-center">
            <div className="bg-secondary cursor-pointer h-11 flex items-center justify-center font-medium rounded-full py-4 px-2 select-none ">
              <span
                className=" flex items-center w-4 h-4 "
                onClick={() => updateQuantity("-")}
              >
                <MinusIcon />
              </span>
              <p className="cursor-default w-[100px] flex items-center justify-center">
                {quantity}
              </p>
              <span
                className="flex items-center w-4 h-4 "
                onClick={() => updateQuantity("+")}
                >
                <PlusIcon className="" />
              </span>
            </div>
            <p>
              Only {selectedVariant?.stock?.quantity! - quantity} item remains
            </p>
          </div>
         
        </div>
                  </> */}
        <div
          className={`${modal && " flex justify-center items-center w-full"}`}
        >
          <Button variant={"destructive"} onClick={addToCart}>
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductOptions;
