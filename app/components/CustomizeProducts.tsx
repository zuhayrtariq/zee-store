"use client";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/hooks/useCartStore";
import { useWixClient } from "@/hooks/useWixClient";
import { products } from "@wix/stores";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  MinusIcon,
  PlusIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const CustomizeProducts = ({
  productId,
  variants,
  productOptions,
}: {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}) => {
  console.log("V", variants);
  const wixClient = useWixClient();
  const [quantity, setQuantity] = useState(1);
  const [selectedOptions, setSelectedOptions] = useState<{
    [key: string]: string;
  }>({});
  const [selectedVariant, setSelectedVariant] = useState<products.Variant>();
  const maxQuantity = selectedVariant?.stock?.quantity;

  useEffect(() => {
    const variant = variants.find((v) => {
      const variantChoices = v.choices!;
      if (!variantChoices) return false;
      return Object.entries(selectedOptions).every(
        ([key, value]) => variantChoices[key] === value
      );
    });
    console.log(variant);
    setSelectedVariant(variant);
  }, [selectedOptions, variants]);
  const handleOptionsSelect = (optionType: string, choice: string) => {
    setSelectedOptions((prev) => ({ ...prev, [optionType]: choice }));
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
  const updateQuantity = (opr = "-") => {
    if (quantity == 1 && opr == "-") return;
    if (quantity == selectedVariant?.stock?.quantity && opr == "+") return;
    if (opr == "+") setQuantity(quantity + 1);
    else setQuantity(quantity - 1);
  };

  const { cart, addItem } = useCartStore();

  async function addToCart() {
    const response = addItem(
      wixClient,
      productId,
      selectedVariant?._id!,
      quantity
    );
    console.log(response);
  }
  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => (
        <div key={option.name}>
          <h4 className="font-semibold pb-2 text-xl">Choose a {option.name}</h4>

          <div className="flex gap-4 flex-wrap">
            {option.choices?.map((choice) => {
              const disabled = !isVariantInStock({
                ...selectedOptions,
                [option.name!]: choice.description!,
              });
              const selected =
                selectedOptions[option.name!] === choice.description;
              return (
                <Button
                  className={`px-2 h-8 capitalize  rounded-lg outline `}
                  variant={selected ? "default" : "outline"}
                  disabled={disabled}
                  key={choice.description}
                  onClick={() =>
                    handleOptionsSelect(option.name!, choice.description!)
                  }
                >
                  {choice.description}
                </Button>
              );
            })}
          </div>
        </div>
      ))}

      <div className="">
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
          <Button variant={"destructive"} onClick={addToCart}>
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomizeProducts;
