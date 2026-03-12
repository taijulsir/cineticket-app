export function handleResponse(res: any, setSelectedSeats: any, router: any, eventSlug: any, triggerFetch: any, setError: any) {
    if ((res.data as any)?.error) {
        setError?.(((res.data as any)?.message));
        setSelectedSeats?.([]);
        triggerFetch?.();
        return;
    }
    if ((res as any)?.status === 201) {
        setSelectedSeats?.([]);
        router?.push(`/payment-success/${eventSlug}`);
    }
};
