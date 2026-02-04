import { handleResponse } from "./handleResponse";

export const createGuestOrderAfterTotalZero = async ({
    eventId,
    name,
    mobileNumber,
    email,
    discount,
    selectedSeats,
    selectedShows,
    setSelectedSeats,
    router,
    eventSlug,
    setError,
    axiosPublicInstance,
    triggerFetch
}) => {
    try {
        const res = await axiosPublicInstance.post('/orders/guest/createGuestOrderAfterTotalZero', {
            event: eventId,
            name,
            mobileNumber,
            email,
            total: 0,
            discount,
            selectedSeats,
            selectedShows,
        });

        handleResponse(res, setSelectedSeats, router, eventSlug,triggerFetch,setError)
    } catch (error) {
        console.error(error);
        setError(error.message);
    }
};
