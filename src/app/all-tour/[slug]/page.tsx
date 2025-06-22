"use client";

import React from "react";
import styles from "./custom.module.css";
import Image from "next/image";
import { assets } from "@/app/public/assets/data/assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { sliderColumn } from "@/app/public/assets/data/slider";
import Breadcrumb from "@/app/components/Breadcrumb/Breadcrumb";
import CircleWhite from "@/app/components/SliderHome/components/CircleWhite";
import { product_data } from "@/app/public/assets/data/product";
import { notFound } from "next/navigation";
import { use } from "react";

interface TourDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

const ProductInfo = ({ params }: TourDetailPageProps) => {
  const { slug } = use(params);

  const tour = product_data.find((t) => t.slug === slug);

  if (!tour) {
    notFound();
  }

  const circle_data = {
    title: "Hoa Hong Travel",
  };
  return (
    <div className={`${styles.container}`}>
      <div className="relative w-[100rem] h-[43.75rem] overflow-hidden">
        <Image
          className="absolute z-10 sm:w-[100rem] sm:h-[43.75rem] w-[40rem] h-[36rem] object-cover"
          src={assets.BannerAllTour}
          alt=""
        />
        <Image
          className="sm:block hidden absolute bottom-[12.375rem] right-[16.0625rem] z-20 w-[26.375rem] h-[25.5rem]"
          src={assets.mapAllTour}
          alt=""
        />
        <div className="absolute z-20 right-[4.75rem]">
          <Swiper
            direction="vertical"
            slidesPerView={6}
            loop={true}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            speed={3000} // tốc độ mượt hơn
            modules={[Autoplay]}
            allowTouchMove={false} // không cho người dùng kéo
            className="h-[43.75rem]" // chiều cao cố định
          >
            {sliderColumn.map((item, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={item.image}
                  alt={`img-${index}`}
                  className=" object-cover w-[10.875rem] h-[6.35rem]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="absolute z-20 right-[40.75rem] bottom-10">
          <CircleWhite item={circle_data.title} />
          <p className="absolute top-14 left-12 text-3xl">${tour.price}</p>
        </div>
        <div className={`${styles.containerInfo}`}>
          <div className={`${styles.containerClock}`}>
            <Image src={assets.iconClock} alt="" className={`${styles.icon}`} />
            <p className={`${styles.title}`}>Intermediate</p>
            <p className={`${styles.text}`}>{tour.duration}</p>
          </div>
          <h2 className={`${styles.name}`}>{tour.name}</h2>
          <div className={`${styles.wrapInfo}`}>
            <div className={`${styles.wrap}`}>
              <div className={`${styles.items}`}>
                <div className={`${styles.itemIcon}`}>
                  <Image
                    src={assets.iconStar}
                    alt=""
                    className={`${styles.icon}`}
                  />
                  <p className={`${styles.titleIcon}`}>SPECIAL</p>
                </div>
                <p className={`${styles.itemDescription}`}>{tour.description}</p>
              </div>
              <div className={`${styles.items}`}>
                <div className={`${styles.itemIcon}`}>
                  <Image
                    src={assets.iconLocation}
                    alt=""
                    className={`${styles.icon}`}
                  />
                  <p className={`${styles.titleIcon}`}>DESTINATION:</p>
                </div>
                <p className={`${styles.itemDescription}`}>{tour.transport}</p>
              </div>
            </div>
            <div className={`${styles.wrap}`}>
              <div className={`${styles.items}`}>
                <div className={`${styles.itemIcon}`}>
                  <Image
                    src={assets.iconHouse}
                    alt=""
                    className={`${styles.icon}`}
                  />
                  <p className={`${styles.titleIcon}`}>ACCOMODATION</p>
                </div>
                <p className={`${styles.itemDescription}`}>{tour.accommodation}</p>
              </div>
              <div className={`${styles.items}`}>
                <div className={`${styles.itemIcon}`}>
                  <Image
                    src={assets.iconMotorbike}
                    alt=""
                    className={`${styles.icon}`}
                  />
                  <p className={`${styles.titleIcon}`}>TRANSPORT</p>
                </div>
                <p className={`${styles.itemDescription}`}>{tour.transport}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Breadcrumb />
    </div>
  );
};

export default ProductInfo;
