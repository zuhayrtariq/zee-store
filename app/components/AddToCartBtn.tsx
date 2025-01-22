"use client";
import { useCartStore } from "@/hooks/useCartStore";

const AddToCartBtn = () => {
  const { cart, addItem } = useCartStore();
  const response = await addItem(
    wixClient,
    productId,
    selectedVariant?._id!,
    quantity
  );
  return <div>AddToCartBtn</div>;
};

export default AddToCartBtn;
