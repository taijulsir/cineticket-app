export function handleBuyTickets({
    customer,
    isPromo,
    total,
    afterDiscountTotal,
    createCustomerOrderAfterTotalZero,
    createGuestOrderAfterTotalZero,
    handleCustomerOrder,
    handleGuestOrder
}: { customer?: any; isPromo?: boolean; total?: number; afterDiscountTotal?: number; createCustomerOrderAfterTotalZero?: any; createGuestOrderAfterTotalZero?: any; handleCustomerOrder?: any; handleGuestOrder?: any }) {
    const isCustomer = customer !== null;
    const isGuest = customer === null;

    if (isPromo) {
        if (isCustomer) {
            if (afterDiscountTotal === 0) return createCustomerOrderAfterTotalZero;
            return handleCustomerOrder;
        }

        if (isGuest) {
            if (afterDiscountTotal === 0) return createGuestOrderAfterTotalZero;
            return handleGuestOrder;
        }
        
    } else {
        if (isCustomer) {
            if (total === 0) return createCustomerOrderAfterTotalZero;
            return handleCustomerOrder;
        }

        if (isGuest) {
            if (total === 0) return createGuestOrderAfterTotalZero;
            return handleGuestOrder;
        }
    }

    return () => { }; // fallback no-op
};
