import React from "react";
import styles from "./BodyHome.module.css";
import Image from "next/image";
import { assets } from "@/app/public/assets/data/assets";
import BodyOption from "./components/BodyOption";
import BodyArrow from "./components/BodyArrow";
import BodyMission from "./components/BodyMission";
import BodyVideo from "./components/BodyVideo";

const BodyHome = () => {
  const bodyOption_data = {
    title:
      "Hong Hao Travel is a travel company in Ha Giang, we specialize in organizing unforgettable tours to explore Ha Giang loop but still focus on the pristine nature of nature.",
  };

  const bodyMission_data = {
    text: "START WITH",
    title: "HONG HAO MOTORBIKE TOUR",
    description:
      "Experience the raw beauty of Hà Giang with our immersive travel adventures. From rugged mountain landscapes to vibrant ethnic cultures, Hà Giang offers a truly unique and authentic experience. Explore remote villages.",
  };
  return (
    <div className={`${styles.container}`}>
      <Image
        src={assets.Mountain}
        alt=""
        className="sm:w-[100rem] sm:h-[6.5rem] absolute flex-shrink-0 -top-4 w-[40rem] h-[4.5rem]"
      />
      <BodyOption title={bodyOption_data.title} />
      <BodyArrow />
      <BodyMission
        text={bodyMission_data.text}
        title={bodyMission_data.title}
        description={bodyMission_data.description}
      />
      <BodyVideo/>
    </div>
  );
};

export default BodyHome;
