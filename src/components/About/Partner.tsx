"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import "./about.css"
import Modal from '../Modal/Modal'
import ModalImg from "@/public/Assets/about/about-modal.png"
import Image from 'next/image';
import PartnerModal from './PartnerModal';

function Partner() {
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState(1);
    return (
        <>
            <div className='mt-6 lg:mt-8 mb-8 lg:mb-12 bg-[#ffffff0d] rounded-lg px-3  py-10 lg:py-24 text-center'>
                <div>
                    <h4 className='font-semibold text-xl lg:text-5xl'>Want to partner with us ?</h4>
                    <p className='font-normal text-base lg:text-lg text-[#ffffff99] mt-3 lg:mt-6'>to supporting the Bangladeshi community. Reach out and let’s discuss your vision as a patron.</p>
                    <div className="flex justify-center items-center gap-2 md:gap-6 mt-5 md:mt-10 ">

                        <button className="partner-button" onClick={() => setShowModal(true)}>
                            Advertise With Us

                        </button>
                        <Link href={`contact`} className="partner-button-2">
                            Contact us
                        </Link>

                    </div>
                </div>
            </div>
            {showModal && <Modal setShowModalContent={setShowModal} extraClass="partner-modal">
                <PartnerModal />
            </Modal>}
        </>

    )
}

export default Partner
