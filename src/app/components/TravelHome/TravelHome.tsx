'use client'

import { assets } from "@/app/public/assets/data/assets";
import Image from "next/image";
import React, { useState } from "react";
import TravelTour from "./components/TravelTour";
import type { StaticImageData } from "next/image";


const TravelHome = () => {

  const [selectedImage, setSelectedImage] = useState<string | StaticImageData>(
    assets.Map
  ); // ảnh mặc định

  // Khi hover vào item
  const handleHover = (imageUrl : string | StaticImageData) => {
    setSelectedImage(imageUrl);
  };

  // Khi rời khỏi item
  const handleLeave = () => {
    setSelectedImage(assets.Map); // trở về ảnh mặc định
  };
  return (
    <div className="sm:w-[100rem] sm:h-[187rem] flex sm:flex-row flex-shrink-0 justify-between bg-[#fff] flex-col w-[40rem] items-start gap-[2rem] h-[39.875rem] overflow-hidden">
      <div className="sm:h-[180rem] w-[50rem] sm:absolute h-0 relative ">
        <div className="sticky top-0 z-10 flex flex-col justify-center w-[50rem]">
          <div className="flex flex-col items-start self-stretch sm:gap-3 sm:ml-20 ml-8 sm:mt-[5.62rem] w-[50rem]  sm:px-4  gap-[0.75rem] mt-[6.875rem] m-0">
            <p className="text-[#262626] font-trip-sans sm:text-[1.125rem] sm:leading-[100%] opacity-40 text-[0.875rem] not-italic font-extrabold leading-[120%] tracking-[0.00875rem]">
              EXPLORE
            </p>
            <p className="text-[#262626] font-['Londrina_Solid'] sm:text-[3.5rem] sm:leading-[100%] self-stretch text-[2.5rem] not-italic font-black leading-[120%] w-[16rem]">
              BEST TRIPS FOR YOU
            </p>
          </div>
          <div className="sm:block hidden mt-[2.44rem] ml-[4.4rem] w-[29.29231rem] h-[28.12494rem] flex-shrink-0 ">
            <Image
              className="w-[32.29231rem] h-[32.29231rem] flex-shrink-0"
              width={500}
              height={500}
              src={selectedImage}
              alt=""
            />
          </div>
        </div>
      </div>
      <TravelTour onTourHover={handleHover} onTourLeave={handleLeave} />
    </div>
  );
};

export default TravelHome;
