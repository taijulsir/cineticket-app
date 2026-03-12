const { default: AppContext } = require("@/context/AppContext");
const { useContext } = require("react");

export function PromoCodeInput({
    promoCode,
    setPromoCode,
    handleApplyPromoCode,
    error,
}: {
    promoCode?: string;
    setPromoCode?: (v: string) => void;
    handleApplyPromoCode?: (total: number) => void;
    error?: any;
}) {

    const { total, isPromo, selectedSeats } = useContext(AppContext) as any;

    if (isPromo && !error) {
        return <p>Promo code applied: {promoCode}</p>;
    }

    return (
        selectedSeats && selectedSeats.length > 0 && total !== 0 && (
            <div>
                <input
                    value={promoCode}
                    onChange={(e) => setPromoCode?.(e.target.value)}
                    type="text"
                    className="border border-[#FFFFFF] text-white bg-transparent rounded-full px-4 py-2 focus:outline-none focus:ring-2"
                    placeholder="Add a promo code"
                />
                <button
                    disabled={!promoCode}
                    onClick={() => handleApplyPromoCode?.(total)}
                    type="submit"
                    className="bg-primary disabled:bg-gray-500 disabled:text-black placeholder:text-white rounded-full text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-opacity-50 ml:4 lg:ml-10 mt-2 lg:mt-0 ml-2"
                >
                    Submit
                </button>
            </div>
        )
    );
};
