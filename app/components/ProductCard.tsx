import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProductDetails {
  id: string;
  title: string;
  desc: string;
  price: number;
  imgUrl: string;
}

import React from "react";

const ProductCard = ({
  productDetails,
}: {
  productDetails: ProductDetails;
}) => {
  const productDefaults = {
    id: "123",
    title: "Product Name",
    desc: "This is a very good product.",
    price: 45,
    imgUrl: "",
  };
  productDetails = { ...productDefaults, ...productDetails };
  return (
    <div>
      <Link href={"/"}>
        <div className="relative h-80 w-full">
          <Image
            src={
              "https://images.unsplash.com/photo-1564859228273-274232fdb516?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
            sizes="25vw"
            fill
            className=" object-cover rounded-md absolute hover:opacity-0 z-10 transition-all duration-200"
          />
          <Image
            src={
              "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt=""
            sizes="25vw"
            fill
            className=" object-cover rounded-md absolute"
          />
        </div>
      </Link>

      <div className="cardbody mt-2">
        <div className="flex w-full justify-between items-center">
          <p className="font-bold text-sm">Product Title</p>
          <p className="font-bold text-sm">$15</p>
        </div>
        <p className="text-xs text-gray-500 pb-2">
          Lorem ipsum dolor sit amet consectetur
        </p>
        <Button
          variant={"outline"}
          size={"sm"}
          className="hover:bg-primary hover:text-background rounded-2xl font-semibold text-sm"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
