import styles from "./custom.module.css";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { assets, cloudImages } from "@/app/public/assets/data/assets";
import { weather_data } from "@/app/public/assets/data/weatherData";
import Image from "next/image";
import "./CloudAnimation.css"

const CloudAnimation = () => {
  const cloudRefs = useRef<HTMLDivElement[]>([]);
  useEffect(() => {
    cloudRefs.current.forEach((cloud, index) => {
      let direction = -1; // bắt đầu từ phải qua trái
      let speed = 20 + Math.random() * 10; // tốc độ ngẫu nhiên

      const moveCloud = () => {
        const screenWidth = window.innerWidth;
        const cloudWidth = cloud.offsetWidth;

        const endX = direction === -1 ? -cloudWidth : screenWidth;

        gsap.to(cloud, {
          x: endX,
          duration: speed,
          ease: "linear",
          onComplete: () => {
            direction *= -1; // đổi chiều
            speed = 30 + Math.random() * 20; // đổi tốc độ mỗi lần
            gsap.set(cloud, {
              x: direction === -1 ? screenWidth : -cloudWidth,
            });
            moveCloud(); // loop lại
          },
        });
      };

      // bắt đầu ở vị trí ngẫu nhiên
      gsap.set(cloud, {
        x: window.innerWidth + index * 500,
        y: 100 + Math.random() * 100,
        zIndex: 2 + index,
      });

      moveCloud(); // gọi lần đầu
    });
  }, []);

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.areaContainer}`}>
        <div className={`${styles.cloudArea}`}>
          {cloudImages.concat(cloudImages).map((src, i) => (
            <Image
              key={i}
              ref={(el) => {
                if (el) cloudRefs.current[i] = el;
              }}
              src={src.image}
              className={`${styles.cloud}`}
              alt=""
            />
          ))}
        </div>
      </div>
      <div className={`${styles.cloudWeatherContainer}`}>
        <div className={`${styles.cloudWeatherBgrContainer}`}>
          <Swiper
            loop={true}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            navigation={true}
            onInit={(swiper) => {
              if (
                swiper.params.navigation &&
                typeof swiper.params.navigation !== "boolean" &&
                prevRef.current &&
                nextRef.current
              ) {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.navigation.init();
                swiper.navigation.update();
              }
            }}
            slidesPerView={1}
            className={`${styles.cloudWeatherBgrItems}`}
          >
            <div ref={prevRef} className={`${styles.customPrev}`}>
              <Image
                className={`${styles.customImg}`}
                src={assets.arrow_left}
                alt="Prev"
              />
            </div>
            <div ref={nextRef} className={`${styles.customNext}`}>
              <Image
                className={`${styles.customImg}`}
                src={assets.arrow_right}
                alt="Next"
              />
            </div>
            {weather_data.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`${styles.cloudWeatherBgrItem}`}
                  style={{
                    background: `url(${item.image_weather.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className={`${styles.cloudWeatherCard}`}>
                    <p className={`${styles.cloudWeatherTemperature}`}>
                      {item.temperature}
                    </p>
                    <Image
                      className={`${styles.cloudWeatherIcon}`}
                      src={item.icon}
                      alt=""
                    />
                    <p className={`${styles.cloudWeatherDate}`}>{item.date}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={`${styles.cloudWeatherInfoContainer}`}>
          <Swiper
            onSwiper={(swiper) => setThumbsSwiper(swiper)}
            loop={true}
            spaceBetween={2}
            slidesPerView={12}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            breakpoints={{
              0: {
                slidesPerView: 4,
                slidesPerGroup: 1,
              },
              640: {
                slidesPerView: 12,
                slidesPerGroup: 1,
              },
            }}
          >
            {weather_data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={`${styles.cloudWeatherInfoItem}`}>
                  <p className={`${styles.cloudWeatherMonth}`}>{item.month}</p>
                  <p className={`${styles.cloudWeatherDegree}`}>
                    {item.degree}
                  </p>
                  <p className={`${styles.cloudWeatherDegreeNumber}`}>
                    {item.degreeNumber}
                  </p>
                  <Image
                    className={`${styles.cloudWeatherIconRain}`}
                    src={item.iconRain}
                    alt=""
                  />
                  <p className={`${styles.cloudWeatherRainfall}`}>
                    {item.rainfall}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CloudAnimation;
