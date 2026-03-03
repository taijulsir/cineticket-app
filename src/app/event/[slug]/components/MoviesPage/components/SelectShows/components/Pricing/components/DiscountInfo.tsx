import AppContext from "@/context/AppContext";
import { useContext } from "react";

export function DiscountInfo({ currencySymbol }) {

    const { discount, afterDiscountTotal } = useContext(AppContext)
    return discount > 0 ? (
        <p className="py-3">
            You are getting a discount of {currencySymbol}{discount}. Now the total price is {currencySymbol}{afterDiscountTotal}.
        </p>
    ) : null;
};
