import BannerButton from "@/Partials/Sections/BannerSection/BannerButton/BannerButton"
import BannerContent from "@/Partials/Sections/BannerSection/BannerContent/BannerContent"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"

function BannerSliderContent({ slider, setShowWatchTrailerModal, setYoutubeId }) {
    return (
        <div className="flex flex-col w-full lg:w-[60%]  justify-start items-start">
            <BannerContent slider={slider} />
            <BannerButton
                slider={slider}
                setShowWatchTrailerModal={setShowWatchTrailerModal}
                setYoutubeId={setYoutubeId}
            />
           
        </div>
    )
}

export default BannerSliderContent