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
                const { data } = await axiosPublicInstance.get(`events/singleEvent/${slug}`);
                setEvent(data?.event);
                setStatistics({totalHalls: data?.totalHalls , totalCities: data?.totalCities, totalTheaters: data?.totalTheaters})
                setAds(data?.ads);
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
