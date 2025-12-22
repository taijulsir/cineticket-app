
import Link from "next/link"
import { MdKeyboardDoubleArrowRight, MdOutlinePlayArrow } from "react-icons/md"
import './bannerButton.css'


function BannerButton({ slider, setShowWatchTrailerModal, setYoutubeId }) {
    return (
        <div className="grid grid-cols-2 grid-flow-row gap-2 md:gap-6 mt-5 md:mt-8 ">
            <Link href={`event/${slider?.event?.slug}`} className="banner-button">
                {slider?.event?.status === "nowSelling" ? "Buy Tickets" : "View Info"}
                <MdKeyboardDoubleArrowRight className="text-[0px] group-hover:text-lg transition-all duration-300" />

            </Link>
            <button onClick={() => {
                setShowWatchTrailerModal(true)
                setYoutubeId(slider?.event?.trailerVideoLink)
            }} className="banner-button-2">
                Watch Trailer

                <MdOutlinePlayArrow className="text-[0px] font-medium group-hover:font-semibold group-hover:text-lg transition-all duration-300" />

            </button>

        </div>
    )
}

export default BannerButton