export const handleOrderError = (message: any, setError: any, setSelectedSeats: any, triggerFetch: any) => {
    setError?.(message);
    setSelectedSeats?.([]);
    triggerFetch?.();
};