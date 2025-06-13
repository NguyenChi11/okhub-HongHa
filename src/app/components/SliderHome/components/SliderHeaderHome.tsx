import React from "react";
import styles from "./custom.module.css";
import CircleMap from "./CircleMap";

type HeaderProps = {
  text: string;
};

const SliderHeaderHome = ({ text }: HeaderProps) => {
  const circle_data = {
    title: "Hoa Hong Travel",
  };

  return (
    <div className={`${styles.container}`}>
      <h2 className={`${styles.title}`}>THE GLADDEST MOMENT</h2>
      <CircleMap item={circle_data.title} />
      <div className={`${styles.contentWrap}`}>
        <p className={`${styles.content}`}>{text}</p>
      </div>
    </div>
  );
};

export default SliderHeaderHome;
