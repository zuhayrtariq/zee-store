import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">ard Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
