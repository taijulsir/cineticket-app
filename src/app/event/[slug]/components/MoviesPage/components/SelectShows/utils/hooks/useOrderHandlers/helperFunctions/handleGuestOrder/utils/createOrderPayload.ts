export function createOrderPayload({
    eventId,
    name,
    mobileNumber,
    email,
    total,
    discount,
    selectedSeats,
    selectedShows,
    promoCode,
    promoCodeId,
    eventCurrency

}) {
    const payload = {
        eventId,
        showId: selectedShows,
        name,
        mobileNumber,
        email,
        total,
        discount,
        ticketItems: (selectedSeats ?? []).map((seat) => ({
            seatId: seat?._id ?? seat?.id,
            price: seat?.price ?? 600,
        })),
        eventCurrency
    };

    if (promoCode) {
        payload.promoCodeId = promoCodeId;
    }

    return payload;
};
