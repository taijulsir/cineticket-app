export const calculateTotal = (selectedSeats: any[] | undefined): number => {
    if (selectedSeats && selectedSeats.length > 0) {
        return selectedSeats.reduce((acc: number, ticket: any) => acc + (ticket.price ?? 0), 0);
    }
    return 0;
};
