import AboutDetails from '@/components/About/AboutDetails'
import AboutUs from '@/components/About/AboutUs'
import Partner from '@/components/About/Partner'
import React from 'react'

function page() {
  return (
    <div className='w-10/12 mx-auto mt-[70px] lg:mt-[90px]'>
      <AboutUs/>
      <AboutDetails/>
      <Partner/>
    </div>
  )
}

export default page
