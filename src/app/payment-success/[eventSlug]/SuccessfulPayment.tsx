"use client";
import useAxiosPublicInstance from "@/Utilities/Hooks/AxiosInstanceHooks/useAxiosPublicInstance";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

import { FaCheckCircle } from "react-icons/fa";

function SuccessfulPayment({ params }) {
    const [event, setEvent] = useState("");
    const axiosPublicInstance = useAxiosPublicInstance();


    useEffect(() => {
        async function setAndFetchSingleEventData() {
            const { data } = await axiosPublicInstance.get(
                `events/singleEvent/${params?.eventSlug}`
            );
            setEvent(data?.event);
        }
        setAndFetchSingleEventData();
    }, [params?.eventSlug]);
    return (
        <div className="h-screen flex items-center justify-center">
            <div className="w-10/12 md:w-1/3 mx-auto shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6  border border-[#FFFFFF] flex flex-col rounded-lg items-start gap-3 transition-all duration-300 group hover:bg-transparent bg-[#fafafa0c]">
                <FaCheckCircle className="h-16 w-16 text-center mx-auto text-primary" />
                <h3 className="font-bold group-hover:text-white text-[#FFFFFF] text-center w-full mx-auto">
                    Payment Successful
                </h3>
                <p className="font-light text-center">
                    Congratulations! Your order details for {event?.name} have been mailed to your email. Thank
                    you for supporting our cinematic journey.
                </p>
                <p>
                    Sometimes, our emails might end up in your spam or junk folder. Please check those folders, and if you find our email there, be sure to mark it as &quot;Not Spam&quot; to ensure you receive future messages from us.
                </p>
                <p>If you still can&apos;t find the email, feel free to reach out to us, and we&apos;ll be happy to assist you further.</p>
                <div className="w-full mx-auto flex justify-center items-center">
                    <Link href="/">
                        <Button variant="book">Back to home</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SuccessfulPayment
