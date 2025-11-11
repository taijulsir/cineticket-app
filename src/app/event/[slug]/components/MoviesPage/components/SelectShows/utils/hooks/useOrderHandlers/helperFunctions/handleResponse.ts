export function handleResponse(res, setSelectedSeats, router, eventSlug,triggerFetch,setError) {
    if (res.data.error) {
        setError(res.data.message)
        setSelectedSeats([])
        triggerFetch()
        return;
    }
    if (res.status === 201) {
        setSelectedSeats([]);
        router.push(`/payment-success/${eventSlug}`);
    }
};
