import { IMAGE_URL } from "@/Utilities/APIs/APIs";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";

function MobileAds({ ads }) {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [
        Autoplay({ playOnInit: true, delay: 3000 }),
    ]);

    
    return (
        <div className="col-span-1 pt-6 md:pt-14 pb-6 md:pb-0 block lg:hidden">
            <div className="sticky top-[90px] ads">
                <div className="embla">
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container">
                            {ads?.toReversed().map((ad, index) => (
                                <div className={`embla__slide `} key={index}>
                                    <Link href={ad.link} target="_blank">
                                        <Image
                                            height={3000}
                                            width={3000}
                                            className="h-full md:h-[80vh] rounded-lg"
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

export default MobileAds;
