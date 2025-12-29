import { createOrderPayload } from './utils/createOrderPayload';
import { handleOrderError } from './utils/handleOrderError';
import { redirectToStripeCheckout } from './utils/redirectToStripeCheckout';

export const handleGuestOrder = async ({
    eventId,
    name,
    mobileNumber,
    email,
    total,
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
}) => {
    try {

        const orderData = createOrderPayload({
            name, mobileNumber, email,
            total, discount,
            eventId, selectedShows, selectedSeats,
            promoCode, promoCodeId, eventCurrency
        })


        const res = await axiosPublicInstance.post(
            '/guestPayments/createPaymentCheckoutSession',
            orderData
        );

        if (res.data.error) {
            handleOrderError(res.data.message, setError, setSelectedSeats, triggerFetch);
            return;
        }

        await redirectToStripeCheckout(res.data.id, setError);
    } catch (error) {
        console.error('Guest order error:', error);
        setError(error.message);
    }
};

