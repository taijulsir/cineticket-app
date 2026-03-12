import useAxiosPublicInstance from "@/Utilities/Hooks/AxiosInstanceHooks/useAxiosPublicInstance";
import { useEffect, useState } from "react";

function useGetLocations(api: any) {

    const axiosPublicInstance = useAxiosPublicInstance();
    const [locations, setLocations] = useState<any[]>([])
    useEffect(() => {

        async function fetchData() {
            try {

                // Fetch countries when eventId changes
                const { data: countriesData } = await axiosPublicInstance.get(
                    `${api}`
                );
                setLocations(countriesData || []);

            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, [api]);
    return { locations }

}
export default useGetLocations
