export function handleUpdateSeats(seats: any[] | undefined, showsPrice: any): any[] | undefined {
    return seats?.map((seat: any) => {
        const priceObj = showsPrice?.find((price: any) => price.status === seat.status);
        const price = seat.status === 'stair' || seat.status === 'unavailable'
            ? 0
            : priceObj
                ? priceObj.price
                : 0;
        return { ...seat, price };
    });
}
