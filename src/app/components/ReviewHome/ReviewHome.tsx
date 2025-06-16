import React from 'react'
import ReviewTab from './components/ReviewTab'
import TourGuide from './components/TourGuide'
import styles from "./custom.module.css"



const ReviewHome = () => {

  const TourGuide_data = {
    text: "HONG HAO TRAVEL",
    title: "OUR TEAM",
    description:
      "We pride ourselves on having a team of dedicated and passionate individuals who are committed to providing exceptional service and unforgettable experiences to our guests. Our team is comprised of knowledgeable professionals with diverse backgrounds and expertise in various aspects of the tourism industry.",
  };
  return (
    <div className={`${styles.container}`}>
      <ReviewTab />
      <TourGuide
        text={TourGuide_data.text}
        title={TourGuide_data.title}
        description={TourGuide_data.description}
      />
    </div>
  );
}

export default ReviewHome
