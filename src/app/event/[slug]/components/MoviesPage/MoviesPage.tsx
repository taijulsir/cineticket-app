"use client";

import Modal from "@/components/Modal/Modal";

import useFetchAndSetEventPills from "./utils/hooks/useFetchAndSetEventPills";
import useScrollToHash from "./utils/hooks/useScrollToHash";
import useBookingState from "./utils/hooks/useBookingState";

import MoviesDetails from "./components/MovieDetails/MoviesDetails";
import MoviesPageLayout from "./components/MoviesPageLayout/MoviesPageLayout";
import TheatricalSection from "./components/TheatricalSection/TheatricalSection";
import ShowInfo from "./components/ShowInfo/ShowInfo";
import ShowsFilter from "./components/ShowsFilter/ShowsFilter";
import SelectShowsModal from "./components/SelectShows/SelectShowsModal";
import BuyTicketsButton from "./components/BuyTicketsButton/BuyTicketsButton";
import MobileAds from "./components/ads/MobileAds";
import MoviesSynopsis from "./components/MoviesSynopsis/MoviesSynopsis";
import { useEffect } from "react";



function MoviesPage({ event, statistics, ads }) {

  const {
    error, setError,
    selectedState, setSelectedState, selectedCity, setSelectedCity, selectedCountry, setSelectedCountry, selectedTheater, setSelectedTheater, selectedShows, setSelectedShows,
    showModal, setShowModal, toggleFetch, triggerFetch
  } = useBookingState()

  const { countries, states, cities, theaters, shows } = useFetchAndSetEventPills({
    eventId: event?._id,
    selectedCountry, selectedState, selectedCity, selectedTheater
  });

  useScrollToHash(event);

  useEffect(() => {
    setSelectedTheater("")
    setSelectedShows("")
  }, [showModal])

  return (

    <MoviesPageLayout>

      {event && (
        <div className="flex flex-col" >

          {event?.status === "nowSelling" && (
            <>
              <MoviesDetails event={event} />

              {event?.releaseType === "theatrical" ? (
                <TheatricalSection event={event} />
              )
                :
                <div id="bookSeats">

                  <ShowInfo statistics={statistics} />

                  <ShowsFilter
                    eventId={event?._id}
                    countries={countries}
                    selectedCountry={selectedCountry}
                    setSelectedCountry={setSelectedCountry}
                    states={states}
                    selectedState={selectedState}
                    setSelectedState={setSelectedState}
                    cities={cities}
                    selectedCity={selectedCity}
                    setSelectedCity={setSelectedCity}
                    theaters={theaters}
                    selectedTheater={selectedTheater}
                    setSelectedTheater={setSelectedTheater}
                  />

                  {showModal && (
                    <Modal setShowModalContent={setShowModal}>
                      <SelectShowsModal
                        eventSlug={event?.slug}
                        shows={shows}
                        selectedShows={selectedShows}
                        setSelectedShows={setSelectedShows}
                        setError={setError}
                        error={error}
                        eventId={event?._id}
                        eventCurrency = {event?.eventCurrency}
                        theaters={theaters}
                        selectedTheater={selectedTheater}
                        setSelectedTheater={setSelectedTheater}
                        triggerFetch={triggerFetch}
                        showModal={showModal}
                        toggleFetch={toggleFetch}
                      />
                    </Modal>
                  )}

                  <BuyTicketsButton setShowModal={setShowModal} />

                </div>}

              <MobileAds ads={ads} />
              <MoviesSynopsis event={event} crews={event?.crews} />
            </>
          )}

        </div>
      )}
    </MoviesPageLayout>
  );
}

export default MoviesPage;
