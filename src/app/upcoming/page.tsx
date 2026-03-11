"use client";

import { useEffect, useState } from "react";
import useAxiosPublicInstance from "@/Utilities/Hooks/AxiosInstanceHooks/useAxiosPublicInstance";
import Heading from "@/components/Heading/Heading";
import WatchTrailer from "@/components/WatchTrailer/WatchTrailer";
import Card from "../../components/SliderEventCard/Card/Card";
import Ads from "../(Home)/Group/Ads/Ads";

// export const metadata = {
//   title: 'Upcoming | BongOz Films',
//   description: 'BongOz Films - Bringing Quality Movie Experiences to your NeighborHood',
// }

function Upcoming() {
  const [showWatchTrailerModal, setShowWatchTrailerModal] = useState(false);
  const handleOpenWatchTrailer = () => setShowWatchTrailerModal(true);
  const handleCloseWatchTrailer = () => setShowWatchTrailerModal(false);
  const [youtubeId, setYoutubeId] = useState("");

  const [movies, setMovies] = useState([]);

  const status = "upcoming";
  const axiosPublicInstance = useAxiosPublicInstance();

  useEffect(() => {
    async function fetchAndSetMovies() {
      const { data } = await axiosPublicInstance.get(
        `events/getAllEvents?status=${status}`
      );
      setMovies(data);
    }
    fetchAndSetMovies();
  }, [status]);

  return (
    <div className="w-10/12 mx-auto">
      <div className="text-center pt-32 md:pt-32">
        <Heading heading={"Showing Next"} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 mt-[90px]">
        <div className="col-span-1 lg:col-span-3">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-7">
            {movies?.map((event) => (
              <div
                key={event._id}
                className="w-full bg-transparent rounded-lg relative group"
              >
                <Card
                  event={event}
                  setShowWatchTrailerModal={handleOpenWatchTrailer}
                  setYoutubeId={setYoutubeId}
                />
              </div>
            ))}
            {showWatchTrailerModal && (
              <WatchTrailer
                youtubeId={youtubeId}
                isOpen={showWatchTrailerModal}
                onClose={handleCloseWatchTrailer}
              />
            )}
          </div>
        </div>
        <div className="col-span-1">
          <Ads paddingTop="pt-0" paddingTopMd="pt-0" />
        </div>
      </div>
    </div>
  );
}

export default Upcoming;

