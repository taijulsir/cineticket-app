"use client";
import { Button } from "@/components/ui/button";
import { cineticketApi } from "@/lib/cineticketApi";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { FaCheckCircle } from "react-icons/fa";

function SuccessfulPayment({ params }) {
    const [event, setEvent] = useState<any>(null);
    const [status, setStatus] = useState<"pending" | "success" | "failed">("pending");
    const searchParams = useSearchParams();


    useEffect(() => {
        async function confirmStripePayment() {
            const orderId = searchParams.get("orderId");
            const sessionId = searchParams.get("session_id");
            if (!orderId || !sessionId) {
                setStatus("failed");
                return;
            }
            try {
                await cineticketApi.confirmStripePayment({ orderId, paymentId: sessionId });
                setStatus("success");
            } catch (_error) {
                setStatus("failed");
            }
        }

        async function setAndFetchSingleEventData() {
            const data = await cineticketApi.getEventBySlug(params?.eventSlug);
            setEvent(data);
        }
        confirmStripePayment();
        setAndFetchSingleEventData();
    }, [params?.eventSlug, searchParams]);

    if (status === "failed") {
        return (
            <div className="h-screen flex items-center justify-center">
                <div className="w-10/12 md:w-1/3 mx-auto shadow-xl py-8 px-6 border border-[#FFFFFF] rounded-lg">
                    <h3 className="font-bold text-[#FFFFFF] text-center w-full mx-auto">Payment Verification Failed</h3>
                    <p className="text-center mt-3">We could not verify this payment session.</p>
                    <div className="w-full mx-auto flex justify-center items-center mt-4">
                        <Link href="/"><Button variant="book">Back to home</Button></Link>
                    </div>
                </div>
            </div>
        )
    }

    if (status === "pending") {
        return <div className="h-screen flex items-center justify-center text-white">Verifying payment...</div>;
    }

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
