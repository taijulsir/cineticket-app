import { loadStripe } from '@stripe/stripe-js';

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
    triggerFetch
}) => {
    
    try {
        
        const orderData = {
            event: eventId,
            name,
            mobileNumber,
            email,
            total,
            discount,
            selectedSeats,
            selectedShows,
        };

        if (promoCode) {
            orderData.promoCode = promoCodeId
        }

        // const res = await axiosPublicInstance.post('/orders/guest/payment-intent', orderData);
        const res = await axiosPublicInstance.post('/guestPayments/createPaymentCheckoutSession', orderData);

        if (res.data.error) {
            setError(res.data.message)
            setSelectedSeats([])
            triggerFetch()
            return;
        }
        const sessionID = res.data.id;
        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY);

        const result = await stripe.redirectToCheckout({ sessionId: sessionID });

        if (result.error) {
            setError(result.error.message);
        }
    } catch (error) {
        console.error(error);
        setError(error.message);
    }
};