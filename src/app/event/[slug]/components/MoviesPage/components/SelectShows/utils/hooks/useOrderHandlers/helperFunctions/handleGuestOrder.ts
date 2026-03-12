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
            eventId,
            showId: selectedShows,
            name,
            mobileNumber,
            email,
            total,
            discount,
            ticketItems: selectedSeats.map((seat) => ({ seatId: seat._id || seat.id, price: seat.price || 600 })),
        };

        if (promoCode) {
            orderData.promoCodeId = promoCodeId
        }

        const orderRes = await axiosPublicInstance.post('/orders', orderData);
        const orderDataPayload = orderRes.data?.data ?? orderRes.data;
        const orderId = orderDataPayload?.id;
        if (!orderId) {
            setError('Order creation failed')
            setSelectedSeats([])
            triggerFetch()
            return;
        }
        const paymentRes = await axiosPublicInstance.post('/payments/stripe/start', { orderId });
        const checkoutUrl = paymentRes.data?.data?.checkoutUrl ?? paymentRes.data?.checkoutUrl;
        if (!checkoutUrl) {
            setError('Stripe session failed');
            return;
        }
        window.location.href = checkoutUrl;
    } catch (error) {
        console.error(error);
        setError(error.message);
    }
};
