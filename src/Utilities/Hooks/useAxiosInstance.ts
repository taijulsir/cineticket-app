import { useAuth } from "@/context/AuthContext/AuthContext";
import axios from "axios";
import { useMemo } from "react";

function useAxiosInstance() {

    const {customer} = useAuth()

    const  axiosInstance = useMemo(() => axios.create({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL + 'api/customerApp/protected/',
        headers: {
            Authorization: `Bearer ${customer?.token}`
        }
    }), [customer?.token])

    return axiosInstance
}

export default useAxiosInstance;
