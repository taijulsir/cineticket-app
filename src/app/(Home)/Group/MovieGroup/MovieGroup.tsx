import Heading from "@/components/Heading/Heading";
import CardSkeleton from "@/components/SliderEventCard/CardSkeleton/CardSkeleton";
import SliderEventCard from "@/components/SliderEventCard/SliderEventCard";
import AppContext from "@/context/AppContext";
import { useContext, useEffect, useState } from "react";
import Ads from "../Ads/Ads";

function MovieGroup({ nowSelling, upcoming }: { nowSelling?: any[]; upcoming?: any[] }) {
  const { isLoading } = useContext(AppContext)!;
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <>
      <div className="" id="now-selling">
        <div className={`${isSticky ? "h-[100px]" : "h-[50px]"}`}></div>
        <Heading heading="Now Selling" />
        <SliderEventCard
          eventTitle="NowSelling"
          events={nowSelling}
        />
      </div>
      <div className=" ads block md:hidden mt-6">
        <Ads />
      </div>
      <div className="" id="showing-next">
        <div className="h-[20px] md:h-[50px]"></div>
        <Heading heading="Showing Next" />
        <SliderEventCard events={upcoming} eventTitle="ShowingNext" />
      </div>

    </>
  );
}

export default MovieGroup;
