import React from 'react'
import styles from "./custom.module.css"
import AboutHeader from '../components/AboutHeader/AboutHeader'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'

const page = () => {

  const textAbout = {
    text1: " Ha Giang, nestled in the rugged mountains of northern Vietnam, beckonsadventurers with its breathtaking scenery and vibrant cultural tapestry. From the towering peaks of the Dong Van Karst Plateau to the winding roads of the Ma Pi Leng Pass, Ha Giang offers an unforgettable journey through some of Vietnams most awe-inspiring landscapes.",
    text2: " located at the northernmost tip of Vietnam, presents a vibrant tapestry of pristine landscapes and unique cultural heritage. The region is adorned with towering limestone peaks and fields bursting with blooming buckwheat flowers, creating a landscape that is both enchanting and mysterious. Traditional villages of ethnic groups like the Hmong, Dao, and Tay preserve ancient customs and practices, offering visitors a deep dive into local culture. Hà Giang is not just a haven for nature enthusiasts but also a place to immerse oneself in the rich traditions and daily life of its indigenous communities."
  }
  return (
    <div className={`${styles.container}`}>
        <AboutHeader text1={textAbout.text1} text2={textAbout.text2}/>
        <Breadcrumb/>
    </div>
  )
}

export default page
