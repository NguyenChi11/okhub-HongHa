import { assets } from '@/app/public/assets/data/assets';
import Image from 'next/image'
import React from 'react'

const BannerAllTour = () => {
  return (
    <div className='relative w-[100rem] h-[43.75rem]'>
      <Image className='absolute z-10 sm:w-[100rem] sm:h-[43.75rem] w-[40rem] h-[36rem] object-cover' src={assets.BannerAllTour} alt='' />
      <Image className='absolute sm:top-[14.375rem] sm:left-[8.375rem] z-20 sm:w-[54.875rem] sm:h-[19.6875rem] left-[1.25rem] top-[12rem] w-[36.4375rem] h-[12rem]' src={assets.titleAllTour} alt='' />
      <Image className='sm:block hidden absolute bottom-[6.375rem] right-[3.0625rem] z-20 w-[26.375rem] h-[25.5rem]' src={assets.mapAllTour} alt='' />
    </div>
  );
}

export default BannerAllTour
