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
}: any) => {
    try {

        const orderData: any = createOrderPayload({
            name, mobileNumber, email,
            total, discount,
            eventId, selectedShows, selectedSeats,
            promoCode, promoCodeId, eventCurrency
        })


        const orderRes: any = await axiosPublicInstance.post('/orders', orderData);
        const orderPayload: any = orderRes.data?.data ?? orderRes.data;
        const orderId = orderPayload?.id;
        if (!orderId) {
            handleOrderError('Order creation failed', setError, setSelectedSeats, triggerFetch);
            return;
        }

        const paymentRes: any = await axiosPublicInstance.post('/payments/stripe/start', { orderId });
        const checkoutUrl = (paymentRes.data?.data?.checkoutUrl ?? paymentRes.data?.checkoutUrl) as any;
        if (!checkoutUrl) {
            handleOrderError('Stripe session failed', setError, setSelectedSeats, triggerFetch);
            return;
        }
        if (typeof window !== 'undefined') {
            window.location.href = checkoutUrl;
        }
    } catch (error) {
        console.error('Guest order error:', error);
        setError?.(((error as any)?.message) || String(error));
    }
};
