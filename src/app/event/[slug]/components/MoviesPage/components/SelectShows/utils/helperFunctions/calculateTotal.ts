export const calculateTotal = (selectedSeats) => {
    if (selectedSeats && selectedSeats.length > 0) {
        return selectedSeats.reduce((acc, ticket) => acc + ticket.price, 0);
    }
    return 0;
};
