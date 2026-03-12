import { useContext } from "react";

import AppContext from '@/context/AppContext';
import useAxiosPublicInstance from "@/Utilities/Hooks/AxiosInstanceHooks/useAxiosPublicInstance";

function useApplyPromocode(
  promoCode?: string,
  setPromoCode?: (v: string) => void,
  error?: any,
  setError?: (v: any) => void,
  triggerFetch?: any,
  setName?: (v: string) => void,
  setEmail?: (v: string) => void,
  setMobileNumber?: (v: string) => void
) {

  const axiosPublicInstance = useAxiosPublicInstance();

  const {
    setDiscount,
    afterDiscountTotal,
    discount,
    promoCodeId,
    setPromoCodeId,
    setAfterDiscountTotal,
    isPromo,
    setIsPromo,
    selectedSeats,
    setSelectedSeats,
  } = useContext(AppContext) as any;

  const handleApplyPromoCode = async (total: number) => {
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
                setError?.(data?.message || payload?.message);
                setSelectedSeats([]);
                setName?.("");
                setEmail?.("");
                setMobileNumber?.("");
                triggerFetch?.();
            } else {
                setError?.("");
            }
        } catch (err: any) {
            if (err && err.response && err.response.data && err.response.data.message) {
                setError?.(err.response.data.message);
            } else {
                setError?.("An error occurred while applying the promo code. Please try again.");
            }
        }
    };

    const resetPromoCode = () => {
        setPromoCode?.("");
        setPromoCodeId("");
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
