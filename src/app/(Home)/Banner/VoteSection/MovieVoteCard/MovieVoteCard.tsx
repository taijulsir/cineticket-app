"use client";
import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

import AppContext from "@/context/AppContext";
import { useAuth } from "@/context/AuthContext/AuthContext";
import useAxiosInstance from "@/Utilities/Hooks/useAxiosInstance";
import { IMAGE_URL } from "@/Utilities/APIs/APIs";

function MovieVoteCard({ voteToBring }: { voteToBring: any[] }) {
  const { triggerFetch, customerUpvote } = useContext(AppContext)!;
  const { customer, setShowLoginModal, setShowModal } = useAuth()!;
  const [upvoted, setUpvoted] = useState<string[]>([]);
  const [slidesPerView, setSlidesPerView] = useState(2);
  const [spaceBetween, setSpaceBetween] = useState(30);
  const axiosInstance = useAxiosInstance();

  useEffect(() => {
    const adjustSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
        setSpaceBetween(10)
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(3);
        setSpaceBetween(20)
      } else {
        setSlidesPerView(3);
        setSpaceBetween(30)
      }
    };
    adjustSlidesPerView();
    window.addEventListener("resize", adjustSlidesPerView);
    return () => {
      window.removeEventListener("resize", adjustSlidesPerView);
    };
  }, []);

  useEffect(() => {
    if (customer && Array.isArray(customerUpvote)) {
      const upvotedMovies = customerUpvote?.map((upvote) =>
        upvote.event.toString()
      );
      setUpvoted(upvotedMovies);
    }
  }, [customer, customerUpvote]);

  async function handleUpvote(id: string) {
    if (!customer) {
      setShowModal(true);
      setShowLoginModal(true);
      return;
    }
    const { data } = await axiosInstance.patch(
      `/events/updateVoteCountForEvent/${id}`
    );
    if (data.voteOfBring > 0) {
      triggerFetch();
      setShowLoginModal(false);
      setUpvoted((prev) => [...prev, id]);
    }
  }

  async function deleteVote(id: string) {
    if (!customer) {
      setShowModal(true);
      setShowLoginModal(true);
    }
    const { data } = await axiosInstance.patch(`/events/deleteVote/${id}`);
    if (data?.message) {
      triggerFetch();
      setShowLoginModal(false);
      setUpvoted((prev) => prev.filter((upvoteId) => upvoteId !== id));
    }
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      className="w-full"
    >
      {voteToBring?.map((movie) => (
        <SwiperSlide key={movie._id}>
          <div className="w-full bg-[#ffffff0a] rounded-lg p-3 lg:p-5">
            <Link href={`event/${movie?.slug}`}>
              <Image
                height={1000}
                width={1000}
                className="w-full h-[30vh] md:h-[40vh] lg:h-[40vh] object-cover rounded-lg relative"
                alt="Card Image"
                src={IMAGE_URL + movie?.cardImage}
              />
            </Link>

            <div className="grid grid-cols-2 lg:grid-cols-5   justify-between movies-center pt-2 md:pt-7">
              <div className="col-span-1 lg:col-span-3">
                <h4 className="truncate">{movie?.name}</h4>
                <p className="brightness-75 truncate">{movie?.type}</p>
              </div>
              <div className="col-span-1 lg:col-span-2 space-x-3 flex justify-center items-center mt-2 lg:mt-0">
                <div
                  className="bg-[#ffffff1a] flex justify-center items-center gap-2 font-medium md:font-semibold py-3 px-3 md:py-4 md:px-3 rounded-lg  text-white text-lg"
                >
                  {upvoted.includes(movie._id) ? (
                    <>
                      <p
                        className="gap-1 font-medium md:font-semibold py-4 px-4 md:py-7 md:px-5"
                      >
                        <FaArrowDown /> <span>{movie?.voteOfBring}</span>
                      </p>
                    </>
                  ) : (
                    <>
                      <FaArrowUp /> <p>{movie?.voteOfBring}</p>
                    </>
                  )}
                </div>

                <button
                  disabled={upvoted.includes(movie._id)}
                  onClick={() => handleUpvote(movie._id)}
                  className={
                    upvoted.includes(movie._id)
                      ? "font-medium md:font-semibold px-3 py-1 lg:px-5 lg:py-4 "
                      : "px-3 py-2 lg:px-5 lg:py-4  bg-[#e7ad04] flex justify-center items-center font-medium md:font-semibold text-black text-base lg:text-lg rounded-lg shadow-md transition duration-500 hover:shadow-btnHover"
                  }
                >
                  {upvoted?.includes(movie._id) ? "Upvoted" : "Upvote"}
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MovieVoteCard;
