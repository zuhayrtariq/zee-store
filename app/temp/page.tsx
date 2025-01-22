"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { SparklesCore } from "@/components/ui/sparkles";
import { MutatingDots, Oval, TailSpin } from "react-loader-spinner";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="sticky  -z-50 left-0 top-0 h-[calc(100vh-110px)] w-full">
      <div className="flex items-center w-full h-full justify-center">
        <Oval
          visible={true}
          ariaLabel="oval-loading"
          wrapperStyle={{}}
          wrapperClass=""
          height="120"
          width="120"
          color="#B2B2B2"
          secondaryColor="black"
        />
      </div>
    </div>
  );
}
