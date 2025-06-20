import React from 'react'
import styles from "./custom.module.css"
import BannerAllTour from '../components/BannerAllTour/BannerAllTour'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import ProductSeller from '../components/ProductSeller/ProductSeller'

const page = () => {
  return (
    <div className={`${styles.container}`}>
      <BannerAllTour/>
      <Breadcrumb/>
      <ProductSeller/>
    </div>
  )
}

export default page
