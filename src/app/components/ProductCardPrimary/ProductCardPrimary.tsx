import { assets } from "@/app/public/assets/data/assets";
import Image from "next/image";
import React from "react";
import styles from "./custom.module.css";
import { StaticImageData } from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

type Item = {
  index: number;
  image: StaticImageData;
  name: string;
  accommodation: string;
  vehicle: string;
  tour_Group: string;
  transport: string;
  time: string;
  price: number;
  map: StaticImageData;
};

type Props = {
  item: Item;
};

const ProductCardPrimary: React.FC<Props> = ({ item }) => {
  return (
    <div className={`${styles.itemContainer}`}>
      <Image className={`${styles.imgBgr}`} src={item.image} alt="" />
      <div className={`${styles.item}`}>
        <div className={`${styles.priceGroup}`}>
          <div className={`${styles.clockWrap}`}>
            <Image
              src={assets.icon_clock}
              alt=""
              className={`${styles.iconClock}`}
            />
            <p className={`${styles.time}`}>{item.time}</p>
          </div>
          <div className={`${styles.priceWrap}`}>
            <div className={`${styles.prices}`}>
              <p className={`${styles.price}`}>${item.price}</p>
              <p className={`${styles.priceTitle}`}>Self - Driving</p>
            </div>
            <div className={`${styles.prices}`}>
              <p className={`${styles.price}`}>${item.price}</p>
              <p className={`${styles.priceTitle}`}>Local driver</p>
            </div>
          </div>
        </div>
        <p className={`${styles.name}`}>{item.name}</p>
        <div className={`${styles.titleContainer}`}>
          <div className={`${styles.titleWrap}`}>
            <Image src={assets.icon_home} alt="" className={`${styles.icon}`} />
            <p className={`${styles.title}`}>Accommodation :</p>
            <p className={`${styles.description}`}>{item.accommodation}</p>
          </div>
          <div className={`${styles.titleWrap}`}>
            <Image src={assets.icon_car} alt="" className={`${styles.icon}`} />
            <p className={`${styles.title}`}>Motorbike :</p>
            <p className={`${styles.description}`}>{item.vehicle}</p>
          </div>
          <div className={`${styles.titleWrap}`}>
            <Image src={assets.icon_user} alt="" className={`${styles.icon}`} />
            <p className={`${styles.title}`}>Tour guide :</p>
            <p className={`${styles.description}`}>{item.tour_Group}</p>
          </div>
          <div className={`${styles.titleWrap}`}>
            <Image src={assets.icon_bus} alt="" className={`${styles.icon}`} />
            <p className={`${styles.title}`}>Transport :</p>
            <p className={`${styles.description}`}>{item.transport}</p>
          </div>
        </div>
        <button className={`${styles.btn}`}>
          BOOK NOW <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default ProductCardPrimary;
