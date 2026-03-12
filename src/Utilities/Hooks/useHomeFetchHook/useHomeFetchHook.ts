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
            const [events, heroSliders, ads, socialLinks] = await Promise.all([
                axiosPublicInstance.get('events?status=NOW_SELLING&limit=20'),
                axiosPublicInstance.get('hero-sliders'),
                axiosPublicInstance.get('ads'),
                axiosPublicInstance.get('social-links'),
            ]);
            setHomePageData({
                events: events.data?.data ?? events.data,
                heroSliders: heroSliders.data?.data ?? heroSliders.data,
                ads: ads.data?.data ?? ads.data,
                socialLinks: socialLinks.data?.data ?? socialLinks.data,
            });
            setTimeout(() => {
                setIsLoading(false)
            }, 500);
           
        }
        homeData();
    }, [axiosPublicInstance,toggleFetch,setIsLoading]);

    return [homePageData]
}

export default useHomeFetchHook
