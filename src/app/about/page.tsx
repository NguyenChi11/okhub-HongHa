import React from 'react'
import styles from "./custom.module.css"
import AboutHeader from '../components/AboutHeader/AboutHeader'

const page = () => {
  return (
    <div className={`${styles.container}`}>
        <AboutHeader/>
    </div>
  )
}

export default page
