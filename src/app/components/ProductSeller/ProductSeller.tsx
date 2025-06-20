"use client";

import React from "react";
import styles from "./custom.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination } from "swiper/modules";
import { travel_data } from "@/app/public/assets/data/travel";
import ProductCard from "../ProductCard/ProductCard";

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
      <div className="sm:mr-[5rem] mr-[1rem ] sm:ml-[5rem] ml-[1rem]">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={4}
          spaceBetween={20}
          navigation
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
      </div>
    </div>
  );
};

export default ProductSeller;
