import { handleResponse } from "./handleResponse";


export const createCustomerOrderAfterTotalZero = async ({
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
    axiosInstance,
    triggerFetch
}: { eventId?: any; name?: string; mobileNumber?: string; email?: string; discount?: any; selectedSeats?: any[]; selectedShows?: any; setSelectedSeats?: any; router?: any; eventSlug?: string; setError?: (v: any) => void; axiosInstance?: any; triggerFetch?: any }) => {
    try {
        const res = await axiosInstance.post('/createCustomerOrderAfterTotalZero', {
            event: eventId,
            name,
            mobileNumber,
            email,
            total: 0,
            discount,
            selectedSeats,
            selectedShows,
            
        });

        handleResponse(res, setSelectedSeats, router, eventSlug, triggerFetch, setError)
    } catch (error) {
        console.error(error);
        setError?.((error as any)?.message);
    }
};
