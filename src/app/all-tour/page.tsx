import React from 'react'
import styles from "./custom.module.css"
import BannerAllTour from '../components/BannerAllTour/BannerAllTour'
import Breadcrumb from '../components/Breadcrumb/Breadcrumb'
import ProductSeller from '../components/ProductSeller/ProductSeller'
import ProductFilter from '../components/ProductFilter/ProductFilter'

const page = () => {
  return (
    <div className={`${styles.container}`}>
      <BannerAllTour/>
      <Breadcrumb/>
      <ProductSeller/>
      <ProductFilter/>
    </div>
  )
}

export default page
