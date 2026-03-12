"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import ModalImg from "../../../public/Assets/about/about-modal.png"
import { FaCheck } from "react-icons/fa6";

function PartnerModal() {

    const [activeTab, setActiveTab] = useState(1);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-5 justify-center items-center ">
            <div className='col-span-1 lg:col-span-3 px-3 lg:px-12 py-4 lg:py-14'>
                <h1 className='text-xl lg:text-3xl font-semibold py-4 text-center lg:text-start'>Advertise with us</h1>
                <div className='flex justify-start items-center gap-2 md:gap-6 relative after:absolute after:h-[1px] after:w-full transition-all duration-500  after:transition-all after:duration-500  overflow-hidden z-20 after:z-[-20] after:bg-[#ffffff99] after:bottom-0 after:left-0'>
                    <button className={`${activeTab === 1 ? "text-[#ffffff] relative after:absolute after:h-[1px] after:w-full transition-all duration-500  after:transition-all after:duration-500  overflow-hidden z-20 after:z-[-20] after:bg-[#ffff] after:bottom-0 after:left-0" : " text-[#ffffff99]"} text-sm font-medium py-4`} onClick={() => setActiveTab(1)}>Support and Impact

                    </button>
                    <button className={`${activeTab === 2 ? "text-[#ffffff] relative after:absolute after:h-[1px] after:w-full transition-all duration-500  after:transition-all after:duration-500  overflow-hidden z-20 after:z-[-20] after:bg-[#ffff] after:bottom-0 after:left-0" : " text-[#ffffff99]"} text-sm font-medium py-4`} onClick={() => setActiveTab(2)}>Advertising Opportunities</button>
                </div>
                {activeTab === 1 && <div className='py-2  lg:py-3'>
                    <div className="flex justify-start items-start gap-2 lg:gap-3 py-3">
                        <div className="bg-[#e7ad041a] p-1 rounded-full mt-1"><FaCheck className="text-sm text-[#e7ad04] " /> </div>
                        <p className='text-sm text-[#ffffff99] font-normal '>Partnering with us uplifts the Bangladeshi community in Australia by fostering connection, comfort, and joy through their native language.</p>
                    </div>
                    <div className="flex justify-start items-start gap-2 lg:gap-3 py-3">
                        <div className="bg-[#e7ad041a] p-1 rounded-full mt-1"><FaCheck className="text-sm text-[#e7ad04] " /> </div>
                        <p className='text-sm text-[#ffffff99] font-normal '>Gain exposure to a vast and engaged Bangladeshi-Australian audience of over 150K.</p>
                    </div>
                    <div className="flex justify-start items-start gap-2 lg:gap-3 py-3">
                        <div className="bg-[#e7ad041a] p-1 rounded-full mt-1"><FaCheck className="text-sm text-[#e7ad04] " /> </div>
                        <p className='text-sm text-[#ffffff99] font-normal '>Amplify your story through news and social media spotlights.</p>
                    </div>
                </div>}
                {activeTab === 2 && <div className='py-2  lg:py-3'>
                    <div className="flex justify-start items-start gap-2 lg:gap-3 py-3">
                        <div className="bg-[#e7ad041a] p-1 rounded-full mt-1"><p className="text-sm text-[#e7ad04] flex justify-center items-center py-[1px] lg:py-[2px] px-2">1</p> </div>
                        <p className='text-sm text-[#ffffff99] font-normal '><span className='font-semibold text-[#fff] no-underline'>Video Showcase: </span> Present your 1-minute video before the film starts and during intervals to 10K+ audience at 100K+ screenings for movies across Australia.</p>
                    </div>
                    <div className="flex justify-start items-start gap-2 lg:gap-3 py-3">
                        <div className="bg-[#e7ad041a] p-1 rounded-full mt-1"><p className="text-sm text-[#e7ad04] flex justify-center items-center py-[1px] lg:py-[2px] px-2">2</p> </div>
                        <p className='text-sm text-[#ffffff99] font-normal '><span className='font-semibold text-[#fff] no-underline'>Banner and Logo: </span>Feature in promotional emails (28K+ registered users), our ticketing website, tickets emailed to attendees, and social media posts.</p>
                    </div>
                    <div className="flex justify-start items-start gap-2 lg:gap-3 py-3">
                        <div className="bg-[#e7ad041a] p-1 rounded-full mt-1"><p className="text-sm text-[#e7ad04] flex justify-center items-center py-[1px] lg:py-[2px] px-2">3</p> </div>
                        <p className='text-sm text-[#ffffff99] font-normal '><span className='font-semibold text-[#fff] no-underline'>Press Mentions:  </span> Your brand in press releases sent to local and mainstream media in Bangladesh.</p>
                    </div>
                    <div className="flex justify-start items-start gap-2 lg:gap-3 py-3">
                        <div className="bg-[#e7ad041a] p-1 rounded-full mt-1"><p className="text-sm text-[#e7ad04] flex justify-center items-center py-[1px] lg:py-[2px] px-2">4</p> </div>
                        <p className='text-sm text-[#ffffff99] font-normal '><span className='font-semibold text-[#fff] no-underline'>Free Tickets/Discounts: </span> For you and your customers at movie screenings.</p>
                    </div>

                </div>}
            </div>
            <div className='col-span-1 lg:col-span-2 bg-[#ffffff1a] flex justify-center items-center w-full h-full'>
                <Image src={ModalImg} alt="advertise" width={500} height={500} className='w-full  ' />
            </div>
        </div>
    )
}

export default PartnerModal
