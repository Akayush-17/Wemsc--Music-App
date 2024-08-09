import React from 'react'
import Image from 'next/image'
import banner from '../../../public/maxresdefault.jpg'
const Banner = () => {
  return (
    <div className='mt-4 '>
        <div className=''>
        <Image src={banner} className='rounded-xl h-[300px]  object-cover' alt='banner'  />
        </div>
    </div>
  )
}

export default Banner