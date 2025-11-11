import { useContext } from 'react';
import AppContext from '@/context/AppContext';


export function TotalPrice({ currencySymbol }) {
    const { total, selectedSeats } = useContext(AppContext);


    if (selectedSeats && selectedSeats.length > 0 && total !== undefined) {
        return <p className="py-3">Total Price: {currencySymbol}{total}</p>;
    }

    return null;
}
