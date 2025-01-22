"use client";
import React, { useEffect } from "react";
import { media, media as wixMedia } from "@wix/sdk";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ShoppingCartIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useWixClient } from "@/hooks/useWixClient";
import { useCartStore } from "@/hooks/useCartStore";

const ShoppingCartDropdown = () => {
  const wixClient = useWixClient();
  const { cart, getCart, removeItem } = useCartStore();

  const removeCartItem = (id: string) => {
    removeItem(wixClient, id);
  };
  useEffect(() => {
    getCart(wixClient);
  }, [wixClient, getCart]);
  console.log("Cart : ", cart);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="relative outline-none">
        <ShoppingCartIcon className="w-6 h-6 cursor-pointer " />
        {cart?.lineItems?.length && (
          <span className="absolute bottom-2.5 h-6 w-6 left-3 bg-red-500 text-white  text-xs rounded-full flex justify-center items-center">
            {cart?.lineItems?.length}
          </span>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-2 min-w-[200px] mr-2" side="bottom">
        <DropdownMenuLabel>Shopping Cart</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {cart?.lineItems?.length == 0 ? (
          <>Empty Cart</>
        ) : (
          <>
            <div className="flex flex-col gap-4 mb-3">
              {cart.lineItems?.map((product) => (
                <>
                  {/* {console.log(wixMedia.getImageUrl(product.image!))} */}
                  <div className="flex gap-2">
                    <Image
                      src={media.getScaledToFillImageUrl(
                        product.image!,
                        72,
                        96,
                        {}
                      )}
                      alt="Picture"
                      width={72}
                      height={96}
                      className="object-cover rounded-md"
                    />
                    <div className="flex flex-col flex-1 justify-between">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold">
                          {product.productName?.original}
                        </p>
                        <p className="text-sm ">$40.5</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-xs text-gray-500">
                          Qty {product.quantity}
                        </p>
                        <p
                          className="text-xs text-blue-500 cursor-pointer hover:underline"
                          onClick={() => removeCartItem(product._id!)}
                        >
                          Remove
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div>
              <div className="flex justify-between font-bold text-sm">
                <h3>Subtotal</h3>
                <h3>$0</h3>
              </div>

              <p className="text-xs text-gray-500 py-2">
                Shipping and taxes calculated at checkout.
              </p>

              <div className="flex items-center justify-between ">
                <Button variant={"secondary"} size={"sm"}>
                  View Cart
                </Button>
                <Button className="relative" size={"sm"}>
                  Checkout
                </Button>
              </div>
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShoppingCartDropdown;
