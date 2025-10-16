"use client"
import axios from "axios";
import {  useMemo } from "react";

function useAxiosAuthInstance() {

    const axiosAuthInstance = useMemo(() => axios.create({

        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL + 'api/customerApp/public/auth/',
       
    }), [])

    return axiosAuthInstance;
}

export default useAxiosAuthInstance;