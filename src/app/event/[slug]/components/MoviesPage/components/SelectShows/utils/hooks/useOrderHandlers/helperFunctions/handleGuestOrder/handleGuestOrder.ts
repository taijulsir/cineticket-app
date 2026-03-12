import { createOrderPayload } from './utils/createOrderPayload';
import { handleOrderError } from './utils/handleOrderError';

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


        const orderRes = await axiosPublicInstance.post('/orders', orderData);
        const orderPayload = orderRes.data?.data ?? orderRes.data;
        const orderId = orderPayload?.id;
        if (!orderId) {
            handleOrderError('Order creation failed', setError, setSelectedSeats, triggerFetch);
            return;
        }

        const paymentRes = await axiosPublicInstance.post('/payments/stripe/start', { orderId });
        const checkoutUrl = paymentRes.data?.data?.checkoutUrl ?? paymentRes.data?.checkoutUrl;
        if (!checkoutUrl) {
            handleOrderError('Stripe session failed', setError, setSelectedSeats, triggerFetch);
            return;
        }
        window.location.href = checkoutUrl;
    } catch (error) {
        console.error('Guest order error:', error);
        setError(error.message);
    }
};
