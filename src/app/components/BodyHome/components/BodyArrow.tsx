import { assets } from "@/app/public/assets/data/assets";
import Image from "next/image";
import React from "react";

const BodyArrow = () => {
  return (
    <div className="sm:inline-flex flex-col items-center gap-[1.8125rem] mt-[6.5rem] hidden">
      <p className="text-white text-center text-[0.875rem] font-extrabold leading-[1.05rem] tracking-[0.00875rem] cursor-pointer">
        EXPLORE YOUR JOURNEY WITH US
      </p>
      <Image
        className="w-[3.0625rem] h-[3.0625rem]"
        src={assets.arrowDown}
        alt=""
      />
    </div>
  );
};

export default BodyArrow;
