import { useContext, useEffect } from "react";

import AppContext from "@/context/AppContext";
import useApplyPromocode from "./utils/hooks/useApplyPromocode";
import PricingWrapper from "./components/PricingWrapper";
import { TotalPrice } from "./components/TotalPrice";
import { DiscountInfo } from "./components/DiscountInfo";
import { PromoCodeInput } from "./components/PromoCodeInput";
import { ErrorMessage } from "./components/ErrorMessage";


function Pricing({
  promoCode,
  currencySymbol,
  setPromoCode,
  setError,
  error,
  triggerFetch,
  setName, setEmail, setMobileNumber
}) {

  const { total } = useContext(AppContext)

  const { handleApplyPromoCode, resetPromoCode } = useApplyPromocode(promoCode, setPromoCode, error, setError, triggerFetch, setName, setEmail, setMobileNumber)

  useEffect(() => {
    resetPromoCode()
  }, [total])

  return (

    <PricingWrapper>
      <TotalPrice currencySymbol = {currencySymbol}/>
      <DiscountInfo  currencySymbol = {currencySymbol}/>
      <PromoCodeInput
        promoCode={promoCode}
        setPromoCode={setPromoCode}
        handleApplyPromoCode={handleApplyPromoCode}
        error={error}
      />
      <ErrorMessage error={error} />
    </PricingWrapper>
  );
}

export default Pricing;
