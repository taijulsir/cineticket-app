import { loadStripe } from '@stripe/stripe-js';

export const handleCustomerOrder = async ({
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
    axiosInstance,
    triggerFetch,
    eventCurrency
}: any) => {
    try {
        const orderData: any = {
            event: eventId,
            name,
            mobileNumber,
            email,
            total,
            discount,
            selectedSeats,
            selectedShows,
            eventCurrency
        };

        if (promoCode) {
            orderData.promoCode = promoCodeId;
        }

        const res: any = await axiosInstance.post('/payment-intent', orderData);
        if ((res.data as any)?.error) {
            setError?.((res.data as any)?.message);
            setSelectedSeats?.([]);
            triggerFetch?.();
            return;
        }
        const sessionID = (res.data as any)?.id;
        const stripe: any = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY as string);

        const result: any = await stripe.redirectToCheckout({ sessionId: sessionID });

        if ((result as any)?.error) {
            setError?.(((result as any).error as any)?.message);
        }
    } catch (error) {
        console.error(error);
        setError?.(((error as any)?.message) || String(error));
    }
};