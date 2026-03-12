import { loadStripe } from '@stripe/stripe-js';

export const redirectToStripeCheckout = async (sessionId: any, setError: any) => {
    const stripe: any = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY as string);

    const result: any = await stripe.redirectToCheckout({ sessionId });

    if ((result as any)?.error) {
        setError?.(((result as any).error as any)?.message);
    }
};