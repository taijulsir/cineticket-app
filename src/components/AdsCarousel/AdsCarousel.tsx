import Image from "next/image";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { IMAGE_URL } from "@/Utilities/APIs/APIs";

function AdsCarousel({ ads, reversed }: { ads?: any[]; reversed?: boolean }) {
    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ playOnInit: true, delay: 3000 }),
    ]);

    const displayedAds = reversed ? ads?.slice().reverse() : ads;

    return (
        <div className="col-span-1 pt-6 md:pt-14 pb-6 md:pb-0 hidden lg:block">
            <div className="sticky top-[90px]">
                <div className="embla">
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container">
                            {displayedAds?.map((ad, index) => (
                                <div className={`embla__slide`} key={index}>
                                    <Link href={ad.link} target="_blank">
                                        <Image
                                            height={3000}
                                            width={3000}
                                            className="h-full rounded-lg"
                                            src={IMAGE_URL + ad.poster}
                                            alt={`Advertisement ${ad._id}`}
                                        />
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdsCarousel;
