"use client";
import { Button } from "@/components/ui/button";
import { Cover } from "@/components/ui/cover";
import { ImagesSlider } from "@/components/ui/images-slider";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

export const Slider = () => {
  const images = [
    "https://images.unsplash.com/photo-1520622212193-02335792e82c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1498747946579-bde604cb8f44?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1501871732394-eccc65227089?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  return (
    <ImagesSlider className="h-[100vh]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center  max-w-[700px] text-white mx-8"
      >
        <p className="text-white font-bold uppercase">Casual & Everyday</p>
        <motion.div
          className="font-bold text-xl md:text-6xl text-center font-cg text-white my-2 
       "
        >
          <span className="italic capitalize">
            Effortlessly blend comfort & style!
          </span>
          <br />
          {/* <Cover>Now Live</Cover> */}
        </motion.div>
        <p className="font-semibold text-sm text-center mb-2">
          Effortlessly blend comfort and style with our Casual & Everyday
          collection, featuring cozy sweaters, versatile denim, laid-back tees,
          and relaxed-fit joggers for your everyday adventures
        </p>
        <Button variant={"outline"} className="">
          <Link href={"/shop"}>View Collection →</Link>
        </Button>
      </motion.div>
    </ImagesSlider>
  );
};
