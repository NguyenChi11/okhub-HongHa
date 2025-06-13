"use client";

import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // CSS mặc định của Splide
import styles from "./custom.module.css";
import { travel_data } from "@/app/public/assets/data/travel.js";
import Image from "next/image";
import { assets } from "@/app/public/assets/data/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import type { StaticImageData } from "next/image";

type TravelTourProps = {
  onTourHover: (map: string | StaticImageData) => void;
  onTourLeave: () => void;
};

const TravelTour = ({ onTourHover, onTourLeave }: TravelTourProps) => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.items}`}>
        {travel_data.map((item, idx) => (
          <div
            key={idx}
            className={`${styles.item}`}
            style={{
              background: `url(${item.image.src}) lightgray 0px -93.83px / 100% 134.12%  no-repeat`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(80%)",
            }}
            onMouseEnter={() => onTourHover(item.map.src)}
            onMouseLeave={onTourLeave}
          >
            <div className={`${styles.contentContainer}`}>
              <div className={`${styles.contentWrap}`}>
                <h2 className={`${styles.name}`}>{item.name}</h2>
              </div>
              <div className={`${styles.contentWrap}`}>
                <Image
                  className={`${styles.icon}`}
                  src={assets.icon_home}
                  alt=""
                />
                <h4 className={`${styles.title}`}>Accommodation :</h4>
                <p className={`${styles.contentItem}`}>{item.accommodation}</p>
              </div>
              <div className={`${styles.contentWrap}`}>
                <Image
                  className={`${styles.icon}`}
                  src={assets.icon_car}
                  alt=""
                />
                <h4 className={`${styles.title}`}>Motorbike :</h4>
                <p className={`${styles.contentItem}`}>{item.vehicle}</p>
              </div>
              <div className={`${styles.contentWrap}`}>
                <Image
                  className={`${styles.icon}`}
                  src={assets.icon_user}
                  alt=""
                />
                <h4 className={`${styles.title}`}>Tour guide :</h4>
                <p className={`${styles.contentItem}`}>{item.tour_Group}</p>
              </div>
              <div className={`${styles.contentWrap}`}>
                <Image
                  className={`${styles.icon}`}
                  src={assets.icon_bus}
                  alt=""
                />
                <h4 className={`${styles.title}`}>Transport :</h4>
                <p className={`${styles.contentItem}`}>{item.transport}</p>
              </div>
            </div>
            <div className={`${styles.priceContainer}`}>
              <div className={`${styles.priceGroup}`}>
                <p className={`${styles.priceTitle}`}>From To</p>
                <p className={`${styles.price}`}>{item.price}</p>
              </div>
              <button className={`${styles.priceBtn}`}>
                Detail <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
            <div className={`${styles.dateContainer}`}>
              <Image
                src={assets.icon_clock}
                className={`${styles.clock}`}
                alt=""
              />
              <p className={`${styles.dateContent}`}>{item.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className={`${styles.mobile}`}>
        <Splide
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            gap: "2rem",
            pauseOnHover: true,
          }}
        >
          {travel_data.map((item, index) => (
            <SplideSlide key={index}>
              <div
                className={`${styles.mobileItems}`}
                style={{
                  background: `url(${item.image.src}) lightgray 0px -93.83px / 100% 134.12%  no-repeat`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  filter: "brightness(80%)",
                }}
              >
                <div className={`${styles.mobileDate}`}>
                  <Image
                    src={assets.icon_clock}
                    className={`${styles.mobileImgDate}`}
                    alt=""
                  />
                  <p className={`${styles.mobileTextDate}`}>{item.time}</p>
                </div>
                <div className={`${styles.mobilePriceContainer}`}>
                  <div className={`${styles.mobileItemsPrice}`}>
                    <p className={`${styles.mobilePrice}`}>{item.price}</p>
                    <p className={`${styles.mobileTextPrice}`}>
                      Self - Driving
                    </p>
                  </div>
                  <div className={`${styles.mobileItemsPrice}`}>
                    <p className={`${styles.mobilePrice}`}>{item.price}</p>
                    <p className={`${styles.mobileTextPrice}`}>Local driver</p>
                  </div>
                </div>
                <div className={`${styles.mobileName}`}>
                  <p className={`${styles.mobileTitleName}`}>{item.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default TravelTour;
