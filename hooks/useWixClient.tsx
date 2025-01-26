"use client";

import { WixClientContext } from "@/context/wixContextClient";
import { useContext } from "react";

export const useWixClient = () => {
  return useContext(WixClientContext);
};
