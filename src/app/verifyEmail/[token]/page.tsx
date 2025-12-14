"use client"
import { useEffect, useContext } from 'react';
import { useRouter } from "next/navigation";
import useAxiosAuthInstance from '@/Utilities/Hooks/AxiosInstanceHooks/useAxiosAuthInstance';
import { useAuth } from '@/context/AuthContext/AuthContext';

function Page({params}) {
    const router = useRouter();
    const axiosAuthInstance = useAxiosAuthInstance();
    const { setCustomer,setIsLoading } = useAuth();
    const { token } = params;

    useEffect(() => {     
       async function verifyEmail () {
            if (token) {
             
                try {
                    const verification = await axiosAuthInstance.patch(`verify/${token}`);
                    if (verification.data.isVerified) {
                        localStorage.setItem("customer", JSON.stringify(verification.data));
                        setCustomer(verification.data);
                        router.push("/");
                    }
                } catch (error) {
                    console.error("Error verifying email:", error);
                }
            }
        };
        verifyEmail();
    }, [router, axiosAuthInstance, setCustomer, token]);

    return (
        <div>Verified</div>
    );
}

export default Page;
