"use client"
import useAxiosPublicInstance from '@/Utilities/Hooks/AxiosInstanceHooks/useAxiosPublicInstance';
import AppContext from '@/context/AppContext';
import { useContext, useEffect, useState } from 'react';

function useHomeFetchHook() {
    const {toggleFetch,setIsLoading} = useContext(AppContext)
    const axiosPublicInstance = useAxiosPublicInstance()
    const [homePageData, setHomePageData] = useState(null);
    useEffect(() => {
        async function homeData() {
            const { data } = await axiosPublicInstance.get('homePageData');
            setHomePageData(data);
            setTimeout(() => {
                setIsLoading(false)
            }, 500);
           
        }
        homeData();
    }, [axiosPublicInstance,toggleFetch,setIsLoading]);

    return [homePageData]
}

export default useHomeFetchHook
