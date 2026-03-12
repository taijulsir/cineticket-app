"use client"
import React from 'react'
import { motion, Variants } from 'framer-motion'
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
                'HOYTS distributor for Bangladeshi films',
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
            title: 'Community',
            description: [
                '16k+ customers',
                '28k+ tickets sold',
                'Reaching 100k+ Bangladeshis living in Australia',
            ]
        },
    ]

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className='grid grid-cols-1 md:grid-cols-3 gap-8 pb-16 lg:pb-24 pt-8'
        >
            {aboutDetails.map((item, index) => (
                <motion.div
                    variants={itemVariants}
                    key={index}
                    className='group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300'
                >
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

                    <div className='relative z-10'>
                        <div className='w-14 h-14 lg:w-16 lg:h-16 rounded-2xl bg-primary/20 text-primary flex items-center justify-center text-3xl shadow-[0_0_15px_rgba(231,173,4,0.3)] mb-6'>
                            {item.icon}
                        </div>

                        <h4 className='text-white text-2xl lg:text-3xl font-bold mb-4 tracking-tight'>{item.title}</h4>

                        <ul className='space-y-3'>
                            {item.description.map((desc, idx) => (
                                <li className='text-gray-400 text-base flex items-start' key={idx}>
                                    <span className="text-primary mr-3 mt-1 text-sm">✦</span>
                                    <span>{desc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    )
}

export default AboutDetails
