import React from "react";
import styles from "./custom.module.css";
import Image from "next/image";
import { assets } from "@/app/public/assets/data/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const AboutHeader = () => {
  return (
    <div className={`${styles.container}`}>
      <Image className={`${styles.aboutImg}`} src={assets.about} alt="" />
      <Image className={`${styles.aboutBgrImg}`} src={assets.bgrAbout} alt="" />

      <div className={`${styles.titleContainer}`}>
        <Image className={`${styles.title}`} src={assets.imageAbout} alt="" />
        <p className={`${styles.description}`}>
          Ha Giang, nestled in the rugged mountains of northern Vietnam, beckons
          adventurers with its breathtaking scenery and vibrant cultural
          tapestry. From the towering peaks of the Dong Van Karst Plateau to the
          winding roads of the Ma Pi Leng Pass, Ha Giang offers an unforgettable
          journey through some of Vietnams most awe-inspiring landscapes.
        </p>
        <div className={`${styles.btnWrap}`}>
          <button className={`${styles.btnLeft}`}>
            BOOK NOW <FontAwesomeIcon icon={faArrowRight} />
          </button>
          <button className={`${styles.btnRight}`}>
            ALL TOUR <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <Image className={`${styles.mapAbout}`} src={assets.mapAbout} alt="" />
      <div className={`${styles.textRightWrap}`}>
        <p className={`${styles.textRight}`}>10.000</p>
        <p className={`${styles.descriptionRight}`}>Visitors experience</p>
      </div>
      <div className={`${styles.textLeftWrap}`}>
        <p className={`${styles.textLeft}`}>13 YEAR</p>
        <p className={`${styles.descriptionLeft}`}>Experience</p>
      </div>
    </div>
  );
};

export default AboutHeader;
