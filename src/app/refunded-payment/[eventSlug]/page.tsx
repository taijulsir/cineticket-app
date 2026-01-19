"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MdCancel } from "react-icons/md";

function RefundedPayment() {
    
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-10/12 md:w-1/3 mx-auto shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 border border-[#FFFFFF] flex flex-col rounded-lg items-start gap-3 transition-all duration-300 group hover:bg-transparent bg-[#fafafa0c]">
                <MdCancel className="mx-auto w-16 h-16 text-center text-red-500" />
                <h3 className="font-bold group-hover:text-white text-[#FFFFFF] text-center w-full mx-auto">
                    Payment Refunded
                </h3>
                <p className="font-light text-center">
                    We&apos;re sorry! The seats you selected were just booked by someone else moments before your payment was confirmed.
                </p>
                <p>
                    A full refund has already been processed to your original payment method. You should receive the amount shortly.
                </p>
                <p>
                    We understand this can be frustrating. Please try selecting different seats and make a new booking. If you have any issues, feel free to contact us.
                </p>
                <div className="flex justify-center items-center mx-auto w-full">
                    <Link href="/">
                        <Button variant="book">Back to home</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RefundedPayment;
