"use client"
import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import useAxiosPublicInstance from "@/Utilities/Hooks/AxiosInstanceHooks/useAxiosPublicInstance";
import Image from 'next/image';
import Link from 'next/link';
import { IMAGE_URL } from '@/Utilities/APIs/APIs';

const Ads = ({
  topMargin = "-top-[65px]",
  paddingTop = "pt-0",
  paddingTopMd = "md:pt-52",
}) => {
  const [ads, setAds] = useState([]);
  const axiosPublicInstance = useAxiosPublicInstance();
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ playOnInit: true, delay:3000 }),
  ]);

  useEffect(() => {
    async function fetchAndSetAds() {
      try {
        const { data } = await axiosPublicInstance.get('/ads?filter=active');
        setAds(data);
      } catch (error) {
        console.error('Failed to fetch ads:', error);
      }
    }
    fetchAndSetAds();
  }, [axiosPublicInstance]);



  return (
    <div className="embla top-0 pt-0 md:pt-[180px] pb-0 lg:pb-8 sticky">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {ads.map((ad, index) => (
            <div className={`embla__slide   `} key={index}>
              <Link href={ad.link} target="_blank">
                <Image
                  height={3000}
                  width={3000}
                  className="h-full  rounded-lg"
                  src={IMAGE_URL + ad.poster}
                  alt={`Advertisement ${ad._id}`}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ads;

