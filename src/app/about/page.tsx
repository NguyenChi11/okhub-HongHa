'use client'

import React from 'react'
import styles from "./custom.module.css"
import AboutHeader from '../components/AboutHeader/AboutHeader'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import AboutBanner from '../components/AboutBanner/AboutBanner'
import AboutAnimation from '../components/AboutAnimation/AboutAnimation'
import PrimaryTourGuide from '../components/ReviewHome/components/PrimaryTourGuide'


const page = () => {

  const textAbout = {
    text1: " Ha Giang, nestled in the rugged mountains of northern Vietnam, beckonsadventurers with its breathtaking scenery and vibrant cultural tapestry. From the towering peaks of the Dong Van Karst Plateau to the winding roads of the Ma Pi Leng Pass, Ha Giang offers an unforgettable journey through some of Vietnams most awe-inspiring landscapes.",
    text2: " located at the northernmost tip of Vietnam, presents a vibrant tapestry of pristine landscapes and unique cultural heritage. The region is adorned with towering limestone peaks and fields bursting with blooming buckwheat flowers, creating a landscape that is both enchanting and mysterious. Traditional villages of ethnic groups like the Hmong, Dao, and Tay preserve ancient customs and practices, offering visitors a deep dive into local culture. Hà Giang is not just a haven for nature enthusiasts but also a place to immerse oneself in the rich traditions and daily life of its indigenous communities."
  }

  const TextBannerAbout = {
    text1:
      "Explore the rugged beauty of Ha Giang on our thrilling motorcycle tours. Feel the wind in your hair as you navigate through twisting mountain roads and remote villages, soaking in the breathtaking scenery of towering peaks and lush valleys. Our experienced guides will lead you on an unforgettable adventure",
  };

  const TextAboutAnimation = {
    text1: "HONG HA TRAVEL",
    title1: "ETHICAL COMMITMENTS",
    description:
      "At our Ha Giang tourism company, we adhere to a set of ethical guidelines that guide our operations and define our commitment to responsible tourism. Our foremost principle is to respect and preserve the natural environment and cultural heritage of Ha Giang. We prioritize sustainable practices to minimize our ecological footprint and actively engage in conservation efforts. Furthermore, we deeply value the communities we operate in and strive to foster positive relationships with local residents. We prioritize their well-being and economic empowerment through fair employment practices and community development initiatives. Additionally, we prioritize the safety and satisfaction of our guests, ensuring that every experience with us is both enjoyable and enriching",
  };

  const TourGuide_data = {
    text: "HONG HAO TRAVEL",
    title: "OUR TEAM",
    description:
      "We pride ourselves on having a team of dedicated and passionate individuals who are committed to providing exceptional service and unforgettable experiences to our guests. Our team is comprised of knowledgeable professionals with diverse backgrounds and expertise in various aspects of the tourism industry.",
  };
  return (
    <div className={`${styles.container}`}>
      <AboutHeader text1={textAbout.text1} text2={textAbout.text2} />
      <Breadcrumb />
      <AboutBanner text={TextBannerAbout.text1} />
      <AboutAnimation
        text={TextAboutAnimation.text1}
        title={TextAboutAnimation.title1}
        description={TextAboutAnimation.description}
      />
      <PrimaryTourGuide
        text={TourGuide_data.text}
        title={TourGuide_data.title}
        description={TourGuide_data.description}
      />
    </div>
  );
}

export default page
