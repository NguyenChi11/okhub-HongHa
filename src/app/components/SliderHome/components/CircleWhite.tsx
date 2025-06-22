import React from "react";
import styles from "./custom.module.css";

type HeaderProps = {
  item: string;
};

const CircleWhite = ({ item }: HeaderProps) => {
  return (
    <div>
      <svg className={`${styles.svgWhite}`} viewBox="0 0 300 300">
        <defs>
          <path
            id="circlePath"
            d="M 150,150
                 m -100,0
                 a 100,100 0 1,1 200,0
                 a 100,100 0 1,1 -200,0"
          />
        </defs>

        <g className={`${styles.rotatingGroup}`}>
          <text
            className={`${styles.circleTextWhite}`}
            textLength="600"
            lengthAdjust="spacing"
          >
            <textPath href="#circlePath" startOffset="0%">
              {item} {item}
            </textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};

export default CircleWhite;
