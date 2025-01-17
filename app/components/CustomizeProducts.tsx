"use client";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  MinusIcon,
  PlusIcon,
} from "lucide-react";
import React, { useState } from "react";

const CustomizeProducts = () => {
  const [quantity, setQuantity] = useState(1);
  const maxQuantity = 11;
  const colorCodes = ["red", "blue", "lightblue"];
  const sizes = ["large", "medium", "small"];
  const selected = "large";
  const disabled = "red";
  const btnDisabled = "medium";
  const updateQuantity = (opr = "-") => {
    if (quantity == 1 && opr == "-") return;
    if (quantity == maxQuantity && opr == "+") return;
    if (opr == "+") setQuantity(quantity + 1);
    else setQuantity(quantity - 1);
  };
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h4 className="font-semibold pb-2">Choose a color</h4>
        <div className="flex gap-x-4">
          {colorCodes.map((color) => (
            <p
              className={`relative w-6 rounded-full h-6 bg-${color}-500 bg-ye ${
                selected == color && "ring-2 ring-offset-2"
              } ${disabled == color ? "cursor-not-allowed" : "cursor-pointer"}`}
              key={color}
            >
              {disabled == color && (
                <span className="w-8 h-1 bg-red-400 absolute rotate-[135deg]  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"></span>
              )}
            </p>
          ))}
        </div>
      </div>
      <div>
        <h4 className="font-semibold pb-2">Choose a Size</h4>
        <div className="flex gap-x-4">
          {sizes.map((size) => (
            <Button
              className={`px-2 h-8 capitalize  rounded-lg outline `}
              variant={selected == size ? "default" : "outline"}
              disabled={btnDisabled == size ? true : false}
              key={size}
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold pb-2">Choose a Quantity</h4>
        <div className="flex gap-x-4">
          <div className="bg-secondary cursor-pointer h-8 flex items-center justify-center font-medium rounded-full py-4 px-2 select-none ">
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
        </div>
      </div>
    </div>
  );
};

export default CustomizeProducts;
