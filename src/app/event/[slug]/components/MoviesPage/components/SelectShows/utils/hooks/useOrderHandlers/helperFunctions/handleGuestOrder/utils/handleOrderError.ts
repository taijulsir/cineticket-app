export const handleOrderError = (message, setError, setSelectedSeats, triggerFetch) => {
    setError(message);
    setSelectedSeats([]);
    triggerFetch();
};