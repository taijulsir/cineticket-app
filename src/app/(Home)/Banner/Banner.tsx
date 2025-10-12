import BannerImage from "@/Partials/Sections/BannerSection/BannerImage/BannerImage";
import BannerWrapper from "./BannerWrapper/BannerWrapper";
import BannerSlider from "./BannerSlider/BannerSlider";
import BannerSliderContent from "./BannerSliderContent/BannerSliderContent";
import { useCallback, useContext, useState } from "react";
import AppContext from "@/context/AppContext";
import BannerSkeleton from "./BannerSkeleton/BannerSkeleton";
import WatchTrailer from "@/components/WatchTrailer/WatchTrailer";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "./EmblaCarouselArrowButtons";

function Banner({ sliders }) {
  const { isLoading } = useContext(AppContext);
  const [showWatchTrailerModal, setShowWatchTrailerModal] = useState(false);
  const [youtubeId, setYoutubeId] = useState("");
  const handleOpenWatchTrailer = () => setShowWatchTrailerModal(true);
  const handleCloseWatchTrailer = () => setShowWatchTrailerModal(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay: 3000 }),
  ]);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const onButtonAutoplayClick = useCallback(
    (callback) => {
      const autoplay = emblaApi?.plugins()?.autoplay;
      if (!autoplay) return;

      const resetOrStop =
        autoplay.options.stopOnInteraction === false
          ? autoplay.reset
          : autoplay.stop;

      resetOrStop();
      callback();
    },
    [emblaApi]
  );
  return (
    <>
      {isLoading ? (
        <BannerSkeleton />
      ) : (
        <div className="relative top-padding">
          <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container">
                {sliders &&
                  sliders.length > 0 &&
                  sliders?.map((slider, index) => (
                    <div className={`embla__slide`} key={index}>
                      <BannerWrapper slider={slider}>
                        <BannerSlider>
                          {/* <BannerImage slider={slider} /> */}
                          <BannerSliderContent
                            setYoutubeId={setYoutubeId}
                            slider={slider}
                            setShowWatchTrailerModal={handleOpenWatchTrailer}
                          />
                        </BannerSlider>
                      </BannerWrapper>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className="embla__controls">
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
      )}

      {showWatchTrailerModal && (
        <WatchTrailer
          youtubeId={youtubeId}
          isOpen={showWatchTrailerModal}
          onClose={handleCloseWatchTrailer}
        />
      )}
    </>
  );
}

export default Banner;
