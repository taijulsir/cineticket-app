import React from 'react'
import { LuBriefcase, LuZap } from "react-icons/lu";
import { PiUsersThreeThin } from "react-icons/pi";

function AboutDetails() {
    const aboutDetails = [
        {
            icon: <LuBriefcase />,
            title: 'Professional',
            description: [
                'Work with more than 42 Firms',
                'Own ticketing platform',
                'HOYTS distributer for Bangladeshi films',
            ]
        },
        {
            icon: <LuZap />,
            title: 'Innovative',
            description: [
                '360 launch plan',
                'Equipped with MailChimp & Sinch Messagemedia',
                'Own ticketing platform',
            ]
        },
        {
            icon: <PiUsersThreeThin />,
            title: 'Professional',
            description: [
                '16k+ customers',
                '28k+ ticket sold',
                'Reaching 100k+ Bangladeshis living in Australia',
            ]
        },
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 py-8'>
            {aboutDetails.map((item, index) => (
                <div className='border-[1px] border-[#ffffff1f] rounded-lg shadow-md p-4 lg:p-8 ' key={index}>
                    <div className='w-[45px] h-[45px] lg:w-[64px] lg:h-[64px] rounded-full bg-[#ffffff0d] text-2xl text-white flex items-center justify-center'>
                        {item.icon}
                    </div>
                    <div className='mt-8'>
                        {item.title && <h4 className='text-white text-2xl lg:text-3xl font-semibold mt-4 lg:mt-6'>{item.title}</h4>}
                        {item.description.map((desc, index) => (
                            <p className='text-white text-base lg:text-lg font-normal mt-3 lg:mt-4' key={index}>{desc}</p>
                        ))}
                    </div>

                </div>
            ))}
        </div>
    )
}

export default AboutDetails
