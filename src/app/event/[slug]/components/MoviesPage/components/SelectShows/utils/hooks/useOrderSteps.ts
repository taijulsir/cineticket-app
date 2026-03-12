import { useState, useEffect, useContext } from 'react';
import { calculateTotal } from '../helperFunctions/calculateTotal';
import AppContext from '@/context/AppContext';

function useOrderSteps(shows: any, selectedShows: any, setSelectedShows: any, selectedTheater: any, setError: any) {

    const { setTotal, selectedSeats, setSelectedSeats } = useContext(AppContext) as any;
    const steps = ['Customer Info', 'Shipping Info'];
    const [currentStep, setCurrentStep] = useState(1);
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [promoCode, setPromoCode] = useState('');

    useEffect(() => {
        if (shows && shows.length > 0) {
            setSelectedShows(shows);
        }
    }, [shows]);

    useEffect(() => {
        setSelectedSeats([]);
        setError("")
    }, [selectedShows, selectedTheater]);

    useEffect(() => {
        const totalPrice = calculateTotal(selectedSeats);
        setTotal(totalPrice);
    }, [selectedSeats, calculateTotal]);





    return {
        steps,
        currentStep,
        setCurrentStep,
        name,
        setName,
        mobileNumber,
        setMobileNumber,
        email,
        setEmail,
        promoCode,
        setPromoCode,

    };
};

export default useOrderSteps;
