import { useContext, useMemo } from 'react';



import AppContext from '@/context/AppContext';
import { handleUpdateSeats } from '../helperFunctions/handleUpdateSeats';
import { handleGetTooltipContent } from '../helperFunctions/handleGetTooltipContent';
import { handleSeatClick } from '../helperFunctions/handleSeatClick';

const useSeatManagement = (seats: any[] | undefined, showsPrice: any, currencySymbol?: string) => {
    const { setSelectedSeats } = useContext(AppContext) as any;

    const updatedSeats = useMemo(() => {
        return handleUpdateSeats(seats, showsPrice);
    }, [seats, showsPrice]);

    const handleSeatClickWrapper = (seat: any) => {
        handleSeatClick(seat, setSelectedSeats);
    };

    const getTooltipContent = (seat: any) => {
        return handleGetTooltipContent(seat, currencySymbol);
    };
    return {
        updatedSeats,
        handleSeatClickWrapper,
        getTooltipContent,
    };
};

export default useSeatManagement;
