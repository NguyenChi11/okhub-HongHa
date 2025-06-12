import { assets } from '@/app/public/assets/data/assets'
import Image from 'next/image'
import React from 'react'
import styles from "./custom.module.css"

type HeaderProps = {
  title: string;
};

const BodyOption = ({ title }: HeaderProps) => {
    const option_data = [
      {
        index: 1,
        title: "13 years experience",
      },
      { index: 2, title: "Personalization" },
      {
        index: 3,
        title: "Tour guide with good English",
      },
      {
        index: 4,
        title: "10.000 us tomers",
      },
      {
        index: 5,
        title: "Unique Experiences",
      },
    ];
  return (
    <div className="sm:mt-[10.5rem] inline-flex flex-col items-center sm:gap-16 w-full gap-[1.6rem] mt-[4.2rem]">
      <Image
        className="sm:w-[7rem] sm:h-[6.9375rem] w-[4.5rem] h-[4.45981rem]"
        src={assets.image_H}
        alt=""
      />
      <h2 className="sm:w-[53.75rem] text-[#fff] text-center font-['Londrina_Solid'] sm:text-[3.5rem] font-black leading-[100%] w-[20rem] text-[1.5rem] ">
        {title}
      </h2>
      <div className={`${styles.bodyContainer}`}>
        {option_data.map((item, id) => (
          <div
            key={id}
            className={`${styles.container} ${styles.container}_${item.index}`}
          >
            <div className={`${styles.circle}`}></div>
            <div className={`${styles.items}`}>
              <div className={`${styles.itemsWrap}`}>
                <div className={`${styles.textWrap}`}>
                  <p className={`${styles.textItem}`}>{item.title}</p>
                  <p className={`${styles.textItem}`}>{item.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BodyOption
