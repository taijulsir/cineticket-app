"use client"
import axios from "axios";
import { useMemo } from "react";

function useAxiosPublicInstance() {
  const axiosPublicInstance = useMemo(
    () =>
      axios.create({
        baseURL: `${(process.env.NEXT_PUBLIC_BACKEND_URL ?? "http://localhost:5001/").replace(/\/$/, "")}/api/`,
      }),
    [],
  );

  return axiosPublicInstance;
}

export default useAxiosPublicInstance;
