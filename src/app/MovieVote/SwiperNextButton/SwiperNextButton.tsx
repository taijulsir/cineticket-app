import { useSwiper } from "swiper/react";
import { IoArrowForward } from "react-icons/io5";
function SwiperNextButton() {
  const swiper = useSwiper();
  return (
    <div className="absolute bottom-1/2 right-0 -mr-0 pb-10 z-50">
      <button onClick={() => swiper.slideNext()}>
        <IoArrowForward className="text-neutral-400 bg-white border shadow-xl h-12 w-12 p-4 rounded-full" />
      </button>
    </div>
  );
}

export default SwiperNextButton;
