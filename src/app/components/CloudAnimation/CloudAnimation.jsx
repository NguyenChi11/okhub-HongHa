
import styles from "./custom.module.css";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { assets, cloudImages } from "@/app/public/assets/data/assets";
import { weather_data } from "@/app/public/assets/data/weatherData";
import Image from "next/image";

const CloudAnimation = () => {
  const cloudRefs = useRef([]);

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

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.areaContainer}`}>
        <div className={`${styles.cloudArea}`}>
          {cloudImages.concat(cloudImages).map((src, i) => (
            <Image
              key={i}
              ref={(el) => (cloudRefs.current[i] = el)}
              src={src.image}
              className={`${styles.cloud}`}
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
            onInit={(swiper) => {
              // Gắn phần tử DOM sau khi Swiper đã khởi tạo
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
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
            onSwiper={setThumbsSwiper}
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
              639: {
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
