
export function handleGetTooltipContent(seat: any, currencySymbol: string = ''): string {
    if (seat?.status === 'stair' || seat?.status === 'unavailable') {
        return seat.status.charAt(0).toUpperCase() + seat.status.slice(1);
    } else if (seat?.isBooked || seat?.isTemporaryBooked) {
        return 'Booked';
    } else {
        const price = seat?.price ? `${currencySymbol}${seat.price}` : `${currencySymbol}0`;
        return seat?.seatName
            ? `${seat.seatName} - ${price} (${seat.status})`
            : 'Unavailable';
    }
}