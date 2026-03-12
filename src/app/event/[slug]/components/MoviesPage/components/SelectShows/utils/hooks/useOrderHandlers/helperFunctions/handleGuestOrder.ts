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
}: any) => {
    try {
        const orderData: any = {
            eventId,
            showId: selectedShows,
            name,
            mobileNumber,
            email,
            total,
            discount,
            ticketItems: (selectedSeats || []).map((seat: any) => ({ seatId: seat._id || seat.id, price: seat.price || 600 })),
        };

        if (promoCode) {
            orderData.promoCodeId = promoCodeId;
        }

        const orderRes: any = await axiosPublicInstance.post('/orders', orderData);
        const orderDataPayload: any = (orderRes.data?.data ?? orderRes.data) as any;
        const orderId = orderDataPayload?.id;
        if (!orderId) {
            setError?.('Order creation failed');
            setSelectedSeats?.([]);
            triggerFetch?.();
            return;
        }
        const paymentRes: any = await axiosPublicInstance.post('/payments/stripe/start', { orderId });
        const checkoutUrl = (paymentRes.data?.data?.checkoutUrl ?? paymentRes.data?.checkoutUrl) as any;
        if (!checkoutUrl) {
            setError?.('Stripe session failed');
            return;
        }
        if (typeof window !== 'undefined') {
            window.location.href = checkoutUrl;
        }
    } catch (error) {
        console.error(error);
        setError?.(((error as any)?.message) || String(error));
    }
};
