import AppContext from "@/context/AppContext";
import { useContext } from "react";

export function TotalPriceDisplay({ error, currencySymbol }: { error?: string; currencySymbol?: string }) {

    const { total } = useContext(AppContext) as any;
    return (
        <div className=" flex flex-wrap justify-between">
            {
                (total !== undefined) && (
                    <p className="py-1 self-center overflow-hidden">
                        Total Price: {currencySymbol}{total}
                    </p>
                )
            }

            {
                error && <p className="text-red-600 text-[12px]">{error}</p>
            }
        </div>
    )
}