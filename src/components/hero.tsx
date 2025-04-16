import React from 'react'
import NextJs from 'public/images.jpg'
import Image from 'next/image'

const HeroPage = () => {
  return (
   <div className='relative h-screen'>
     <div className='absolute inset-0 -z-10'>
      <Image
      src={NextJs}
      fill
      alt='Next Js'
      style={{objectFit:'cover'}}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900"> 
         
      </div>
    </div>
    <div className='flex items-center justify-center pt-24'>
        <h1 className='font-bold text-4xl text-white'>Next js on the way</h1>
    </div>
   </div>
  )
}

export default HeroPage
