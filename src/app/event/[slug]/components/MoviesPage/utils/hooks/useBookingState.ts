import { useState } from 'react';

function useBookingState() {
    const [error, setError] = useState("");
    const [selectedState, setSelectedState] = useState("");
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedTheater, setSelectedTheater] = useState("");
    const [selectedShows, setSelectedShows] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [toggleFetch, setToggleFetch] = useState(false);

    function triggerFetch() {
        setToggleFetch((prevState) => !prevState);
      }

    return {
        error,
        setError,
        selectedState,
        setSelectedState,
        selectedCountry,
        setSelectedCountry,
        selectedCity,
        setSelectedCity,
        selectedTheater,
        setSelectedTheater,
        selectedShows,
        setSelectedShows,
        showModal,
        setShowModal,
        toggleFetch,
        triggerFetch
    };
}

export default useBookingState;
