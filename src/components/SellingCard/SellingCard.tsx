"use client";
import { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { IMAGE_URL } from "@/Utilities/APIs/APIs";
import Link from "next/link";
import { Button } from "../ui/button";

function SellingCard({ nowSelling }: { nowSelling?: any[] }) {
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const adjustSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(4);
      }
    };
    adjustSlidesPerView();
    window.addEventListener("resize", adjustSlidesPerView);
    return () => {
      window.removeEventListener("resize", adjustSlidesPerView);
    };
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={30}
      slidesPerView={slidesPerView}
      className="w-full"
    >
      {nowSelling?.map((movie) => (
        <SwiperSlide
          key={movie._id}
          className="w-full bg-transparent rounded-lg relative group"
        >
          <div

            className="h-[30vh] md:h-[40vh] lg:h-[50vh] overflow-hidden block relative"
          >
            <Image
              height={1000}
              width={1000}
              className="w-full object-cover h-[30vh] md:h-[40vh] lg:h-[50vh] rounded-lg"
              alt="Card Image"
              src={IMAGE_URL + movie?.cardImage}
            />

            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end pb-10">

              <div className="p-4 grid grid-cols-2 gap-5 justify-around w-full space-x-4">

                <Link href={`event/${movie._id}`}>
                  <button className="bg-primary hover:border-primary hover:border text-black px-4 py-2 rounded-[20px] transition-transform transform translate-y-4 group-hover:translate-y-0 duration-300 hover:bg-black hover:text-primary font-semibold">
                  {movie?.status === "nowSelling" ? "Buy Tickets" : "View Info"}
                  </button>
                </Link>

                <button className="bg-none border border-[#FFFFFF]  text-white font-semibold hover:border-primary hover:bg-black hover:text-primary px-4 py-2 rounded-[20px] transition-transform transform translate-y-4 group-hover:translate-y-0 duration-300">
                  Watch Trailer
                </button>

              </div>

            </div>
          </div>

          <div className="pt-2 md:pt-8">
            <h4>{movie?.name}</h4>
            <p className="brightness-75">{movie?.type}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SellingCard;
