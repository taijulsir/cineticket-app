import { useContext } from "react";

import AppContext from '@/context/AppContext';
import useAxiosPublicInstance from "@/Utilities/Hooks/AxiosInstanceHooks/useAxiosPublicInstance";

function useApplyPromocode(promoCode, setPromoCode, error, setError, triggerFetch, setName, setEmail, setMobileNumber) {

    const axiosPublicInstance = useAxiosPublicInstance();

    const { setDiscount, afterDiscountTotal, discount, promoCodeId, setPromoCodeId, setAfterDiscountTotal, isPromo, setIsPromo, selectedSeats, setSelectedSeats } = useContext(AppContext)

    const handleApplyPromoCode = async (total) => {
        try {
            const { data } = await axiosPublicInstance.post("/promo-codes/apply", {
                promoCode,
                totalPrice: total,
                selectedSeats
            });
            const payload = data?.data ?? data;

            setDiscount(payload?.discount || 0);
            setAfterDiscountTotal(payload?.totalPrice || 0);
            setIsPromo(true);
            setPromoCodeId(payload?.promoCodeId || '');

            if (data?.success === false || payload?.error) {
                setError(data?.message || payload?.message);
                setSelectedSeats([])
                setName("")
                setEmail("")
                setMobileNumber("")
                triggerFetch()
            } else {
                setError("")
            }
        } catch (error) {
            if (
                error.response &&
                error.response.data &&
                error.response.data.message
            ) {
                setError(error.response.data.message);
            } else {
                setError("An error occurred while applying the promo code. Please try again.");
            }
        }
    };

    const resetPromoCode = () => {
        setPromoCode('');
        setPromoCodeId('');
        setDiscount(0);
        setAfterDiscountTotal(0);
        setIsPromo(false);
        // setError('');
    };

    return {
        promoCode,
        setPromoCode,
        error,
        discount,
        afterDiscountTotal,
        promoCodeId,
        isPromo,
        handleApplyPromoCode,
        resetPromoCode,
    };
};

export default useApplyPromocode;
