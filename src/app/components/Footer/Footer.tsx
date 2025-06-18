import React from 'react'
import styles from "./Footer.module.css"
import { assets } from '@/app/public/assets/data/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas, faEnvelope, faHouseUser, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={`${styles.container}`}>
      <Image className={`${styles.bgrFooter}`} src={assets.footer} alt=''/>
      <div className={`${styles.containerContent}`}>
        <Image
          className={`${styles.logoImage}`}
          src={assets.logo_footer}
          alt=""
        />
        <div className={`${styles.contactContainerWrap}`}>
          <div className={`${styles.contactContainer}`}>
            <h3 className={`${styles.contactTitle}`}>CONTACT US</h3>
            <div className={`${styles.contactTextWrap}`}>
              <div className={`${styles.contactText}`}>
                <FontAwesomeIcon
                  icon={faPhoneVolume}
                  className={`${styles.iconFooter}`}
                />
                <p className={`${styles.footerText}`}>+84 941556338</p>
              </div>
              <div className={`${styles.contactText}`}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={`${styles.iconFooter}`}
                />
                <p className={`${styles.footerText}`}>
                  honghaotravel@gmail.com
                </p>
              </div>
              <div className={`${styles.contactText}`}>
                <FontAwesomeIcon
                  icon={faHouseUser}
                  className={`${styles.iconFooter}`}
                />
                <p className={`${styles.footerText}`}>
                  No. 10 Pham Hong Thai, Minh Khai Ward, City. Ha Giang.
                </p>
              </div>
              <div className={`${styles.contactText}`}>
                <FontAwesomeIcon
                  icon={faEarthAmericas}
                  className={`${styles.iconFooter}`}
                />
                <p className={`${styles.footerText}`}>honghaotravel.com.vn</p>
              </div>
            </div>
          </div>
          <div className={`${styles.contactContainer}`}>
            <h3 className={`${styles.contactTitle}`}>ALL TOUR</h3>
            <div className={`${styles.tourGuide}`}>
              <Image
                className={`${styles.tourGuideImg}`}
                src={assets.iconTourGuide}
                alt=""
              />
              <p className={`${styles.tourGuideText}`}>Best Budget</p>
            </div>
            <div className={`${styles.tourGuide}`}>
              <Image
                className={`${styles.tourGuideImg}`}
                src={assets.iconTourGuide}
                alt=""
              />
              <p className={`${styles.tourGuideText}`}>Standard Tour</p>
            </div>
            <div className={`${styles.tourGuide}`}>
              <Image
                className={`${styles.tourGuideImg}`}
                src={assets.iconTourGuide}
                alt=""
              />
              <p className={`${styles.tourGuideText}`}>Premium Tour</p>
            </div>
          </div>
        </div>
        <div className={`${styles.socialContainer}`}>
          <h3 className={`${styles.contactTitle}`}>FOLLOW US</h3>
          <div className={`${styles.socialImage}`}>
            <Image
              className={`${styles.socialImg}`}
              src={assets.userFooter}
              alt=""
            />
            <Image
              className={`${styles.socialImg}`}
              src={assets.tiktokFooter}
              alt=""
            />
            <Image
              className={`${styles.socialImg}`}
              src={assets.instagramFooter}
              alt=""
            />
            <Image
              className={`${styles.socialImg}`}
              src={assets.facebookFooter}
              alt=""
            />
            <Image
              className={`${styles.socialImg}`}
              src={assets.youtubeFooter}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className={`${styles.containerImage}`}>
        <Image
          className={`${styles.containerImg}`}
          src={assets.image_footer}
          alt=""
        />
      </div>
    </div>
  );
}

export default Footer
