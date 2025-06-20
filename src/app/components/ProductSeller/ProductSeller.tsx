"use client";

import React from "react";
import styles from "./custom.module.css";
import "./ProductSeller.css"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import { travel_data } from "@/app/public/assets/data/travel";
import ProductCard from "../ProductCard/ProductCard";
import Image from "next/image";
import { assets } from "@/app/public/assets/data/assets";

const ProductSeller = () => {
  return (
    <div className={`${styles.container}`}>
      <div className="sm:mt-[4.37rem] sm:ml-[5rem] sm:mb-[3.56rem] mt-[2rem] ml-[1rem] mb-[1.56rem] gap-3">
        <p className="text-[#262626] text-[1.125rem] font-bold leading-[100%] opacity-40">
          EXPLORE
        </p>
        <h3 className="text-[#262626] text-[3.5rem] font-black leading-[100%] font-[Londrina_Solid]">
          BEST TRIP FOR YOU
        </h3>
      </div>
      <div className="sm:mr-[5rem] mr-[1rem ] sm:ml-[5rem] ml-[1rem] relative">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={4}
          spaceBetween={20}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 160,
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
        >
          {travel_data.map((item, index) => (
            <SwiperSlide key={index}>
              <ProductCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Image
          className="custom-prev sm:block hidden absolute top-[14rem] left-2 sm:left-[-4rem] z-10 sm:w-10 sm:h-10"
          alt=""
          src={assets.ArrowLeft}
        />
        <Image
          className="custom-next sm:block hidden absolute top-[14rem] right-2 sm:right-[-4rem] z-10 sm:w-10 sm:h-10"
          alt=""
          src={assets.ArrowRight}
        />
      </div>
    </div>
  );
};

export default ProductSeller;
