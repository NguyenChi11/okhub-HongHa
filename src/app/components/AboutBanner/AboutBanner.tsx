import React from 'react'
import styles from "./custom.module.css"
import Image from 'next/image'
import { assets } from '@/app/public/assets/data/assets'

interface AboutBannerProp {
    text:string
}

const AboutBanner = ({text} :AboutBannerProp) => {
  return (
    <div className={`${styles.container}`}>
      <Image
        className={`${styles.BgrBanner}`}
        src={assets.AboutBgrSection}
        alt=""
      />
      <Image className={`${styles.SunBanner}`} src={assets.AboutSun} alt="" />
      <h2 className={`${styles.title}`}>
        {text}
      </h2>
    </div>
  );
}

export default AboutBanner
