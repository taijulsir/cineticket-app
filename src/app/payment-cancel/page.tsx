
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
import { RiCloseCircleLine } from "react-icons/ri";


export const metadata = {
    title: 'Payment | BongOz Films',
    description: 'BongOz Films - Bringing Quality Movie Experiences to your NeighborHood',
}
function Page() {
    return (
        <div className="h-screen flex items-center justify-center">
            <div
                className="w-10/12 md:w-1/3 mx-auto shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6  border border-[#FFFFFF] flex flex-col rounded-lg items-start gap-3 transition-all duration-300 group hover:bg-transparent bg-[#fafafa0c]"
            >
                <RiCloseCircleLine className="h-16 w-16 text-center mx-auto text-red-600"/>
                <h3 className="font-bold group-hover:text-white text-[#FFFFFF] text-center w-full mx-auto">
                    Payment Cancel
                </h3>
                {/* <p className="text-gray-400 text-sm">
                   Thank You For your Purchase
                </p> */}
                <div className="w-full mx-auto flex justify-center items-center"><Link href='/'><Button variant='book'>Back to home</Button></Link></div>
            </div>
        </div>
    );
}

export default Page;

