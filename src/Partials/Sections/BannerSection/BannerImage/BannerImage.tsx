import Image from "next/image"


function BannerImage({ slider }) {
    return (
        <Image
            height={1000}
            width={1000}
            className="h-24 w-20 md:h-60 md:w-52 shrink-0 rounded-sm md:rounded-2xl"
            alt="banner-image"
            src={process.env.NEXT_PUBLIC_SPACES_URL + slider?.event.cardImage}
        />
    )
}

export default BannerImage