import { IMAGE_URL } from "@/Utilities/APIs/APIs"
import Image from "next/image"

function ImageDisplay({event}: { event: any }) {
  return (
    <Image
        alt="Movie Banner Image"
        src={IMAGE_URL + event?.bannerImage}
        width={5000}
        height={5000}
        objectFit="cover"
        className=" h-[210px] md:h-[340px] bg-cover w-full top-padding mt-[90px] object-cover"
      />

  )
}

export default ImageDisplay