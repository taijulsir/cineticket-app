import useAxiosPublicInstance from '@/Utilities/Hooks/AxiosInstanceHooks/useAxiosPublicInstance';
import { useState, useEffect } from 'react';

const useFetchShowSeatsAndPrice = (selectedShows, toggleFetch) => {
    const axiosPublicInstance = useAxiosPublicInstance();
    const [numberOfRows, setNumberOfRows] = useState('');
    const [numberOfColumns, setNumberOfColumns] = useState('');
    const [seats, setSeats] = useState([]);
    const [showsPrice, setShowsPrice] = useState([]);


    useEffect(() => {
        async function fetchShowSeatsAndPrice(id) {
            try {
                const { data } = await axiosPublicInstance.get(`/events/showSeatAndPrice/${id}`);
                setNumberOfRows(data?.shows?.hall?.numberOfRows);
                setNumberOfColumns(data?.shows?.hall?.numberOfColumns);
                setSeats(data?.showsSeats);
                setShowsPrice(data?.showsPrice);
            } catch (error) {
                console.error('Error fetching show seats and price:', error);
            }
        }

        if (selectedShows?._id ?? selectedShows) {
            fetchShowSeatsAndPrice(selectedShows?._id ?? selectedShows);
        }
    }, [selectedShows, axiosPublicInstance, toggleFetch]);

    return { numberOfRows, numberOfColumns, seats, setSeats, showsPrice };
};

export default useFetchShowSeatsAndPrice;
