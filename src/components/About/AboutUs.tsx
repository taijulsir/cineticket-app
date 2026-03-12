"use client"
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import AboutImg from "../../../public/Assets/about/about-img.png";

function AboutUs() {
    return (
        <section className='pt-12 lg:pt-24 pb-10 lg:pb-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className='flex flex-col justify-center'
            >
                <div className="mb-2">
                    <span className="text-primary font-bold tracking-widest uppercase text-sm">About CineTicket</span>
                </div>
                <h2 className='text-4xl lg:text-6xl font-black mb-6 text-white tracking-tight'>
                    Who Are We?
                </h2>
                <div className="space-y-6 text-gray-400">
                    <p className='font-normal text-base lg:text-lg leading-relaxed'>
                        Since 2016, <strong className="text-white font-semibold">CINETICKET</strong> has provided audiences with a curated selection of acclaimed films that promote positivity, nation-building, and cross-cultural harmony.
                    </p>
                    <p className='font-normal text-base lg:text-lg leading-relaxed'>
                        Our commitment to the community extends to supporting Bengali cultural events and our recent expansion into limited-scale film production as an associate producer. We strive to be the bridge connecting cinema lovers with unforgettable experiences.
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className='flex justify-center items-center relative'
            >
                {/* Decorative glow behind image */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[100px] rounded-full z-0"></div>

                <div className="relative z-10 w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] to-transparent z-10 opacity-60"></div>
                    <Image
                        src={AboutImg}
                        alt="About CineTicket"
                        width={600}
                        height={600}
                        className='w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700'
                        priority
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default AboutUs
