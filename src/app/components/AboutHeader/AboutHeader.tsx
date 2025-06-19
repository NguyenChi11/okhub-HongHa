import React from "react";
import styles from "./custom.module.css";
import Image from "next/image";
import { assets } from "@/app/public/assets/data/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


interface AboutHeaderProps {
  text1: string;
  text2: string;
}

const AboutHeader = ({text1,text2}: AboutHeaderProps) => {
  return (
    <div className={`${styles.container}`}>
      <Image className={`${styles.aboutImg}`} src={assets.about} alt="" />
      <Image className={`${styles.aboutBgrImg}`} src={assets.bgrAbout} alt="" />

      <div className={`${styles.titleContainer}`}>
        <Image className={`${styles.title}`} src={assets.imageAbout} alt="" />
        <p className={`${styles.description}`}>
          {text1}
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
      <p className={`${styles.descriptionLast}`}>
        {text2}
      </p>
    </div>
  );
};

export default AboutHeader;
