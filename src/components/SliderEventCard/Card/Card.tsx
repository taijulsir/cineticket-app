import { IMAGE_URL } from "@/Utilities/APIs/APIs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Card(props: any) {
  const { event } = props || {};

  return (
  
    <div className="mt-4 mb-5 w-full max-h-[370px] lg:max-h-[580px] h-auto  rounded-lg p-[1px] relative  hover:bg-gradient-to-b from-[#e7ad04] to-[#ffffff00] group transition duration-500">
      <div className="bg-[#404040] h-full max-h-[370px] lg:max-h-[580px]  p-3 lg:p-5 rounded-md shadow transition duration-500 group-hover:shadow-cardShadow">
        <Image
          height={1000}
          width={1000}
          className="w-full  h-full max-h-[270px] lg:max-h-[440px] rounded-md"
          alt="Card Image"
          src={IMAGE_URL + event?.cardImage}
        />

        <div className="pt-2 md:pt-8 ">
          <h4>{event?.name}</h4>
          <p className="brightness-75 font-normal">{event?.type}</p>
        </div>
        <Link href={`${event?.status === "nowSelling" ? `event/${event?.slug}#bookSeats` : `event/${event?.slug}`}`} passHref className="absolute inset-0 m-[1px] bg-[#1e1e1ed9] bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center  gap-2 md:gap-5 justify-center rounded-md">


          {event?.status === "nowSelling" ? <p className="text-[#ffffff73] text-center font-medium text-[48px] uppercase leading-tight">Buy <br /> Tickets</p> : <p className="text-[#ffffff73] text-center font-medium text-[48px] uppercase leading-tight">View <br /> Info</p>}

        </Link>
      </div>


    </div>
  );
}

export default Card;
