import Image from 'next/image'
import React from 'react'
import AboutImg from "@/public/Assets/about/about-img.png";

function AboutUs() {
    return (
        <div className='pt-10 lg:pt-20 pb-7 lg:pb-14 grid grid-cols-1 lg:grid-cols-2 gap-10'>
            <div className='flex justify-center items-center'>
                <div>
                    <h4 className='text-3xl lg:text-5xl font-semibold mb-6 lg:mb-9'>Who Are We?</h4>
                    <p className='font-normal text-base lg:text-lg'>Since 2016, BONGOZ FILMS PTY LTD has provided Australian audiences with a curated selection of acclaimed Bengali films that promote positivity, nation-building, and cross-cultural harmony.</p>
                    <p className='font-normal text-base lg:text-lg mt-4 lg:mt-6'>Our commitment to the community extends to supporting Bengali cultural events and our recent expansion into limited-scale film production as an associate producer.</p>
                </div>

            </div>
            <div className='flex justify-center items-end  '>
                <Image src={AboutImg} alt="about us" width={500} height={500} className='w-full  ' />
            </div>
        </div>
    )
}

export default AboutUs
