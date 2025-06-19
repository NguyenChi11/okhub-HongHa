"use client";

import React, { useState } from "react";
import styles from "./PrimaryTourGuide.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
  riderTeam_data,
  tourGuide_data,
} from "../../../public/assets/data/tour-guide";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import "./TourGuide.css";

interface TourGuideProps {
  text: string;
  title: string;
  description: string;
}
const PrimaryTourGuide = ({ text, title, description }: TourGuideProps) => {
  const [selected, setSelected] = useState("tour-guide");

  const handleSelect = (type: string) => {
    setSelected(type);
  };

  const currentRequests =
    selected === "tour-guide" ? tourGuide_data : riderTeam_data;

  return (
    <div className={`${styles.tourGuideContainer}`}>
      <div className={`${styles.tourGuideItemTags}`}>
        <div
          className={`${styles.tourGuideTag} ${
            selected === "tour-guide" ? "action" : ""
          }`}
          onClick={() => handleSelect("tour-guide")}
        >
          TOUR GUIDE
        </div>
        <div
          onClick={() => handleSelect("rider-team")}
          className={`${styles.tourGuideTag} ${
            selected === "rider-team" ? "action" : ""
          }`}
        >
          RIDER TEAM
        </div>
      </div>
      <div className={`${styles.tourContainerItems}`}>
        <div className={`${styles.tourContainerContent}`}>
          <div className={`${styles.tourTitleHeaderWrap}`}>
            <p className={`${styles.tourTitleHeader}`}>{text}</p>
            <h2 className={`${styles.tourTitle}`}>{title}</h2>
          </div>
          <p className={`${styles.tourDescription}`}>{description}</p>
          <div className={`${styles.tourButtonWrap}`}>
            <button className={`${styles.tourButton1}`}>
              Join with us <FontAwesomeIcon icon={faArrowRight} />
            </button>
            <button className={`${styles.tourButton2}`}>
              Call us <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>
        <div className={`${styles.tourItems}`}>
          <Splide
            options={{
              type: "loop",
              perPage: 3,
              perMove: 1,
              // autoplay: true,
              interval: 2000,
              pauseOnHover: false,
              pagination: false,
              autoWidth: true,
              gap: "1rem",
            }}
          >
            {currentRequests.map((item, index) => (
              <SplideSlide key={index}>
                <div className={`${styles.tourItem}`}>
                  <div className={`${styles.tourImgWrap}`}>
                    <Image
                      className={`${styles.tourImgItem}`}
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className={`${styles.tourInfo}`}>
                    <p className={`${styles.tourName}`}> {item.name}</p>
                    <div className={`${styles.tourInfoWrap}`}>
                      <p className={`${styles.tourProfession}`}>
                        {item.profession}
                      </p>
                      <div className={`${styles.tourCircle}`}></div>
                      <p className={`${styles.tourExp}`}>{item.experience}</p>
                    </div>
                    <p className={`${styles.tourTextItem}`}>{item.text}</p>
                  </div>
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
  );
};

export default PrimaryTourGuide;
