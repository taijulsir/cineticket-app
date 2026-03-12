import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import AppContext from '@/context/AppContext';
import useAxiosInstance from '@/Utilities/Hooks/useAxiosInstance';
import useAxiosPublicInstance from '@/Utilities/Hooks/AxiosInstanceHooks/useAxiosPublicInstance';

import { handleCustomerOrder } from './helperFunctions/handleCustomerOrder';
// import { handleGuestOrder } from './helperFunctions/handleGuestOrder';
import { createCustomerOrderAfterTotalZero } from './helperFunctions/createCustomerOrderAfterTotalZero';
import { createGuestOrderAfterTotalZero } from './helperFunctions/createGuestOrderAfterTotalZero';
import { handleGuestOrder } from './helperFunctions/handleGuestOrder/handleGuestOrder';

function useOrderHandlers({
    eventId,
    name,
    mobileNumber,
    email,
    selectedShows,
    promoCode,
    eventSlug,
    setError,
    triggerFetch,
    eventCurrency
    }: any) {

    const {
        total,
        discount,
        afterDiscountTotal,
        selectedSeats,
        setSelectedSeats,
        promoCodeId } = useContext(AppContext) as any;

    const router = useRouter();
    const axiosPublicInstance = useAxiosPublicInstance();
    const axiosInstance = useAxiosInstance();


    const handleCustomerOrderClick = () => {
        handleCustomerOrder({
            eventId,
            name,
            mobileNumber,
            email,
            total: afterDiscountTotal || total,
            discount,
            selectedSeats,
            selectedShows,
            setSelectedSeats,
            promoCode,
            promoCodeId,
            setError,
            axiosInstance,
            triggerFetch,
            eventCurrency
        });
    };

    const handleGuestOrderClick = () => {
        handleGuestOrder({
            eventId,
            name,
            mobileNumber,
            email,
            total: afterDiscountTotal || total,
            discount,
            selectedSeats,
            selectedShows,
            setSelectedSeats,
            promoCode,
            promoCodeId,
            setError,
            axiosPublicInstance,
            triggerFetch,
            eventCurrency
        });
    };

    const createCustomerOrder = () => {
        createCustomerOrderAfterTotalZero({
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
            triggerFetch,
        });
    };

    const createGuestOrder = () => {
        createGuestOrderAfterTotalZero({
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
            triggerFetch,
        });
    };

    return {
        handleCustomerOrderClick,
        handleGuestOrderClick,
        createCustomerOrder,
        createGuestOrder,
    };
};

export default useOrderHandlers;
