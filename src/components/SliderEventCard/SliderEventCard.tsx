"use client";

import { useContext, useEffect, useState, useCallback } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// Import required modules
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


import AppContext from "@/context/AppContext";
import Skeleton from "../Skeleton/Skeleton";
import CardSkeleton from "./CardSkeleton/CardSkeleton";
import WatchTrailer from "../WatchTrailer/WatchTrailer";

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from '../../app/(Home)/Banner/EmblaCarouselArrowButtons'
import Card from "./Card/Card";

function SliderEventCard({ eventTitle, events }) {

  const { isLoading } = useContext(AppContext)
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [showWatchTrailerModal, setShowWatchTrailerModal] = useState(false);
  const [youtubeId, setYoutubeId] = useState("")

  const handleOpenWatchTrailer = () => setShowWatchTrailerModal(true);
  const handleCloseWatchTrailer = () => setShowWatchTrailerModal(false);

  useEffect(() => {
    const adjustSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };
    adjustSlidesPerView();
    window.addEventListener("resize", adjustSlidesPerView);
    return () => {
      window.removeEventListener("resize", adjustSlidesPerView);
    };
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onButtonAutoplayClick = useCallback(
    (callback) => {
      const autoplay = emblaApi?.plugins()?.autoplay
      if (!autoplay) return

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop

      resetOrStop()
      callback()
    },
    [emblaApi]
  )
  return (
    <div >

      {isLoading ? <CardSkeleton /> :
        <>
          <div className="relative mt-3" >
            <div className="embla">
              <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container">
                  {events && events.length > 0 && events?.map((event) => (
                    <div className={`embla__slide_event w-full bg-transparent rounded-lg relative group`}
                      key={event._id}
                    >
                      <Card
                        eventTitle={eventTitle}
                        event={event}
                        setShowWatchTrailerModal={handleOpenWatchTrailer}
                        setYoutubeId={setYoutubeId} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="embla__controls_event">
              <div className="embla__buttons text-[#ffffffb3]">
                <PrevButton
                  onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
                  disabled={prevBtnDisabled}
                />
                <NextButton
                  onClick={() => onButtonAutoplayClick(onNextButtonClick)}
                  disabled={nextBtnDisabled}
                />
              </div>


            </div>
          </div>

        </>
      }

      {
        showWatchTrailerModal && (
          <WatchTrailer
            youtubeId={youtubeId}
            isOpen={showWatchTrailerModal}
            onClose={handleCloseWatchTrailer}
          />
        )
      }
    </div>

  );
}

export default SliderEventCard;
