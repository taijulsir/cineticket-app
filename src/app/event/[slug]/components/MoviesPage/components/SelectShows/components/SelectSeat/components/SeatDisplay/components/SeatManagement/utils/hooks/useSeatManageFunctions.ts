import { useContext, useMemo } from 'react';



import AppContext from '@/context/AppContext';
import { handleUpdateSeats } from '../helperFunctions/handleUpdateSeats';
import { handleGetTooltipContent } from '../helperFunctions/handleGetTooltipContent';
import { handleSeatClick } from '../helperFunctions/handleSeatClick';

const useSeatManagement = (seats, showsPrice, currencySymbol) => {
    const { setSelectedSeats } = useContext(AppContext);

    const updatedSeats = useMemo(() => {
        return handleUpdateSeats(seats, showsPrice);
    }, [seats, showsPrice]);

    const handleSeatClickWrapper = (seat) => {
        handleSeatClick(seat, setSelectedSeats)
    }

    const getTooltipContent = (seat) => {
        return handleGetTooltipContent(seat,currencySymbol)
    }
    return {
        updatedSeats,
        handleSeatClickWrapper,
        getTooltipContent,
    };
};

export default useSeatManagement;
