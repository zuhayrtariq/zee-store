"use client";
import { createClient, OAuthStrategy } from "@wix/sdk";
// import { availabilityCalendar, services } from "@wix/bookings";
import { products, collections } from "@wix/stores";
import { currentCart } from "@wix/ecom";
import { members } from "@wix/members";
import Cookies from "js-cookie";
import { ReactNode } from "react";
import { createContext } from "react";
const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}");
const accessToken = JSON.parse(Cookies.get("accessToken") || "{}");

const myWixClient = createClient({
  modules: {
    products,
    collections,
    currentCart,
    members,
    // services,
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: {
      refreshToken,
      accessToken,
    },
  }),
});
export type WixClient = typeof myWixClient;
export const WixClientContext = createContext<WixClient>(myWixClient);

export const WixClientContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <WixClientContext.Provider value={myWixClient}>
      {children}
    </WixClientContext.Provider>
  );
};
