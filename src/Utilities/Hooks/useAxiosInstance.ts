import { useAuth } from "@/context/AuthContext/AuthContext";
import axios from "axios";
import { useMemo } from "react";

function useAxiosInstance() {
  const auth = useAuth() as any;
  const customer = auth?.customer;

  const axiosInstance = useMemo(
    () =>
      axios.create({
        baseURL: `${(process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5001/").replace(/\/$/, "")}/api/`,
        headers: customer?.token ? { Authorization: `Bearer ${customer.token}` } : {},
      }),
    [customer?.token],
  );

  return axiosInstance;
}

export default useAxiosInstance;
