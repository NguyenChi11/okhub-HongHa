import React from "react";
import styles from "./custom.module.css";
import Image from "next/image";
import { assets } from "@/app/public/assets/data/assets";
import SliderHeaderHome from "./components/SliderHeaderHome";
import SliderBody from "./components/SliderBody";
import {
  sliderHome_data_1,
  sliderHome_data_2,
} from "../../public/assets/data/slider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const SliderHome = () => {
  const slider_header = {
    text: "Dont hesitate to pick up your backpack and go. When you reach your destination and see all the beautiful things in sight, you will know that your efforts were worth it",
  };

  return (
    <div className={`${styles.containerWrap}`}>
      <Image
        className={`${styles.img}`}
        src={assets.OUR_GALLERY.src}
        width={500}
        height={500}
        alt=""
      />
      <div className={`${styles.container}`}>
        <SliderHeaderHome text={slider_header.text} />
        <div className={`${styles.sliderContainer}`}>
          <div className={`${styles.slider_1}`}>
            <SliderBody slider={sliderHome_data_1} />
          </div>
          <div className={`${styles.slider_2}`}>
            <SliderBody slider={sliderHome_data_2} />
          </div>
        </div>
        <div className={`${styles.buttonWrap}`}>
          <button className={`${styles.buttonText}`}>
            DISCOVERY <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderHome;
