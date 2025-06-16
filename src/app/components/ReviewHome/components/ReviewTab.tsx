import React from "react";
import styles from "./custom.module.css";
import "./ReviewTab.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // CSS mặc định của Splide
import {
  comment_data,
  reviewer_data,
} from "../../../public/assets/data/comment";
import Image from "next/image";
import { assets } from "@/app/public/assets/data/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewTab = () => {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.reviewContainerTitle}`}>
        <p className={`${styles.reviewTitleHeading} sm:hidden block`}>
          READ WHAT OUR RECENT
        </p>
        <p className={`${styles.reviewTitle}`}>CLIENTS SAY</p>
      </div>
      <div className={`${styles.reviewContainerImage}`}>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
        >
          {reviewer_data.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className={`${styles.reviewImage}`}
                style={{
                  background: `url(${item.image.src}  ) no-repeat`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="sm:absolute sm:block hidden">
        {comment_data.map((item, idx) => (
          <div
            key={idx}
            className={`${styles.reviewCommentItem} reviewer-${item.index}`}
          >
            <div className={`${styles.reviewInfoContainer}`}>
              <div className={`${styles.reviewInfoWrap}`}>
                <Image className={`${styles.avatar}`} src={item.image} alt="" />
                <div className={`${styles.info}`}>
                  <h3 className={`${styles.name}`}>{item.name}</h3>
                  <p className={`${styles.date}`}>{item.date}</p>
                </div>
                <Image
                  className={`${styles.icon}`}
                  src={assets.icon_reviewer}
                  alt=""
                />
              </div>
            </div>
            <div className={`${styles.stars}`}>
              <FontAwesomeIcon icon={faStar} className={`${styles.star}`} />
              <FontAwesomeIcon icon={faStar} className={`${styles.star}`} />
              <FontAwesomeIcon icon={faStar} className={`${styles.star}`} />
              <FontAwesomeIcon icon={faStar} className={`${styles.star}`} />
              <FontAwesomeIcon icon={faStar} className={`${styles.star}`} />
            </div>
            <p className={`${styles.text}`}>{item.text}</p>
          </div>
        ))}
      </div>
      <div className={`sm:hidden block ${styles.containerMobile}`}>
        <Splide
          options={{
            type: "loop",
            perPage: 2,
            perMove: 1,
            gap: "12px",
            pauseOnHover: true,
            pagination: false,
          }}
        >
          {comment_data.map((item, index) => (
            <SplideSlide key={index}>
              <div className={`${styles.reviewCommentItem}`}>
                <div className={`${styles.reviewInfoContainer}`}>
                  <div className={`${styles.reviewInfoWrap}`}>
                    <Image
                      className={`${styles.avatar}`}
                      src={item.image}
                      alt=""
                    />
                    <div className={`${styles.info}`}>
                      <h3 className={`${styles.name}`}>{item.name}</h3>
                      <p className={`${styles.date}`}>{item.date}</p>
                    </div>
                  </div>
                  <Image
                    className={`${styles.icon}`}
                    src={assets.icon_reviewer}
                    alt=""
                  />
                </div>
                <div className={`${styles.stars}`}>
                  <FontAwesomeIcon icon={faStar} className={`${styles.star}`} />
                  <FontAwesomeIcon icon={faStar} className={`${styles.star}`} />
                  <FontAwesomeIcon icon={faStar} className={`${styles.star}`} />
                  <FontAwesomeIcon icon={faStar} className={`${styles.star}`} />
                  <FontAwesomeIcon icon={faStar} className={`${styles.star}`} />
                </div>
                <p className={`${styles.text}`}>{item.text}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
      <div className={`${styles.iconsWrap}`}>
        <p className={`${styles.iconTitle}`}>View us on</p>
        <div className={`${styles.iconsList}`}>
          <Image
            className={`${styles.iconItem}`}
            alt=""
            src={assets.icon_reviewer}
          />
          <Image
            className={`${styles.iconItem}`}
            alt=""
            src={assets.instagram}
          />
          <Image
            className={`${styles.iconItem}`}
            alt=""
            src={assets.facebook}
          />
          <Image className={`${styles.iconItem}`} alt="" src={assets.tiktok} />
        </div>
      </div>
      <Image className={`${styles.border}`} src={assets.image_border} alt="" />
    </div>
  );
};

export default ReviewTab;
