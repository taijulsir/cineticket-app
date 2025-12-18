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
        event: eventId,
        name,
        mobileNumber,
        email,
        total,
        discount,
        selectedSeats,
        selectedShows,
        eventCurrency
    };

    if (promoCode) {
        payload.promoCode = promoCodeId;
    }

    return payload;
};