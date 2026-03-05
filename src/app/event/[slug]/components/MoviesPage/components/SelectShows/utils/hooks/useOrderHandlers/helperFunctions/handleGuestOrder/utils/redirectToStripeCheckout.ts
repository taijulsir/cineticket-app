import { loadStripe } from '@stripe/stripe-js';

export const redirectToStripeCheckout = async (sessionId, setError) => {
    const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY);

    const result = await stripe.redirectToCheckout({ sessionId });

    if (result.error) {
        setError(result.error.message);
    }
};