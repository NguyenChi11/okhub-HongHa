"use client";

import React, { useRef, useEffect } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { Splide as SplideInstance } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "next/image";
import styles from "./custom.module.css";
import { sliderHome_data_1 } from "@/app/public/assets/data/slider";
import CircleMap from "./CircleMap";

type Props = {
  slider: typeof sliderHome_data_1; // hoặc kiểu phù hợp (object, number, boolean...)
};

const SliderBody = ({ slider }: Props) => {
  const splideRef = useRef<{ splide: SplideInstance } | null>(null);

  useEffect(() => {
    const splide = splideRef.current?.splide;

    if (splide) {
      const totalSlides = slider.length;
      let movedSlides = 0;

      splide.on("move", () => {
        movedSlides++;
        if (movedSlides >= totalSlides) {
          splide.Components.AutoScroll.pause();
        }
      });

      splide.on("mounted", () => {
        splide.Components.AutoScroll.play();
      });
    }
  }, [slider]);

  return (
    <Splide
      ref={splideRef}
      options={{
        // type: "loop",
        perPage: 3,
        gap: "1rem",
        focus: "center",
        drag: "free",
        arrows: false,
        pagination: false,
        rewind: false,
        autoScroll: {
          speed: 2,
        },
      }}
      extensions={{ AutoScroll }}
    >
      {slider.map((item, index) => (
        <SplideSlide key={index}>
          <div className={`${styles.sliderImgWrap}`}>
            <Image src={item.image} className={`${styles.sliderImg}`} alt="" />
            <div className={`${styles.sliderIcon}`}>
              <CircleMap item="Hong Hoa Travel"/>
            </div>
          </div>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default SliderBody;
