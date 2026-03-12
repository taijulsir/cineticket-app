import { useState, useEffect } from "react";
import useAxiosPublicInstance from "@/Utilities/Hooks/AxiosInstanceHooks/useAxiosPublicInstance";

function useFetchData(url: any, dependencies: any[] = []) {
    const axiosPublicInstance: any = useAxiosPublicInstance();
    const [data, setData] = useState<any[]>([]);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axiosPublicInstance.get(url);
                setData(data);
            } catch (error) {
                setError("Error fetching data");
                console.error("Error fetching data:", error);
            }
        };

        if (url) {
            fetchData();
        }
    }, dependencies);

    return { data, error };
};

export default useFetchData;
