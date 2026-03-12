import { useState, useEffect } from 'react';
import useAxiosPublicInstance from '@/Utilities/Hooks/AxiosInstanceHooks/useAxiosPublicInstance';


function useFetchAndSetSingleEventData (slug) {
    const [event, setEvent] = useState("");
    const [ads, setAds] = useState([]);
    const [statistics,setStatistics] = useState("")

    const axiosPublicInstance = useAxiosPublicInstance();

    useEffect(() => {
        async function fetchEventData() {
            try {
                const [eventRes, adsRes] = await Promise.all([
                    axiosPublicInstance.get(`events/${slug}`),
                    axiosPublicInstance.get(`ads`),
                ]);
                const eventData = eventRes.data?.data ?? eventRes.data;
                setEvent(eventData);
                const theaters = new Set((eventData?.shows ?? []).map((show) => show.theaterId));
                const halls = new Set((eventData?.shows ?? []).map((show) => show.hallId));
                setStatistics({ totalHalls: halls.size, totalCities: 0, totalTheaters: theaters.size })
                setAds(adsRes.data?.data ?? adsRes.data);
            } catch (error) {
                console.error('Error fetching event data:', error);
            }
        }

        if (slug) {
            fetchEventData();
        }
    }, [slug, axiosPublicInstance]);

    return { event, ads ,statistics};
};

export default useFetchAndSetSingleEventData;
