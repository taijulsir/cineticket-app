"use client"
import axios from "axios";
import {  useMemo } from "react";

function useAxiosPublicInstance() {

    const axiosPublicInstance = useMemo(() => axios.create({

        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL + 'api/customerApp/public/',
       
    }), [])

    return axiosPublicInstance;
}

export default useAxiosPublicInstance;