export function handleUpdateSeats(seats, showsPrice) {
    return seats?.map((seat) => {
        const priceObj = showsPrice?.find((price) => price.status === seat.status);
        const price = seat.status === 'stair' || seat.status === 'unavailable'
            ? 0
            : priceObj
                ? priceObj.price
                : 0;
        return { ...seat, price };
    });
};
