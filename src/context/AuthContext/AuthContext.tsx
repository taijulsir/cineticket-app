"use client";

import { LOGIN_API, REGISTER_API, GOOGLE_LOGIN_API } from "@/Utilities/APIs/AuthAPIs/AuthAPIs";
import useAxiosPublicInstance from "@/Utilities/Hooks/AxiosInstanceHooks/useAxiosPublicInstance";


import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

interface Customer {
  id: string;
  name: string;
  email: string;
  token?: string;
}

interface AuthContextType {
  register: (customerData: any) => Promise<any>;
  login: (customerData: any) => Promise<any>;
  googleLogin: (credential: string) => Promise<any>;
  logout: () => void;
  customer: Customer | null;
  isLoading: boolean;
  setCustomer: React.Dispatch<React.SetStateAction<Customer | null>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  showModal: boolean;
  showLoginModal: boolean;
  setShowLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
  returnUrl?: string | null;
  setReturnUrl?: React.Dispatch<React.SetStateAction<string | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const axiosPublicInstance = useAxiosPublicInstance();
  const router = useRouter();
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [returnUrl, setReturnUrl] = useState<string | null>(null);

  useEffect(() => {
    const storedCustomer = localStorage.getItem("customer");
    if (storedCustomer) {
      setCustomer(JSON.parse(storedCustomer));
    }
  }, []);



  async function register(customerData: any) {
    try {
      const response = await axiosPublicInstance.post(
        REGISTER_API,
        customerData
      );

      if (response.data) {
        setCustomer(response.data);
        localStorage.setItem("customer", JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
    }
  }

  async function login(customerData: any) {
    try {
      const response = await axiosPublicInstance.post(LOGIN_API, customerData);

      if (response.data) {
        setCustomer(response.data);
        localStorage.setItem("customer", JSON.stringify(response.data));
        // router.push("/");
      }
      return response.data;
    } catch (error: any) {
      return error?.response;
    }
  }

  async function googleLogin(credential: string) {
    try {
      setIsLoading(true);
      const response = await axiosPublicInstance.post(GOOGLE_LOGIN_API, { token: credential });
      if (response.data) {
        setCustomer(response.data);
        localStorage.setItem("customer", JSON.stringify(response.data));
        const redirectTo = returnUrl || "/";
        setReturnUrl(null);
        router.push(redirectTo);
      }
      return response.data;
    } catch (error: any) {
      return error?.response;
    } finally {
      setIsLoading(false);
    }
  }

  function logout() {
    setCustomer(null);
    localStorage.removeItem("customer");
    router.push("/");
  }

  const values = {
    register,
    login,
    googleLogin,
    logout,
    customer,
    isLoading,
    setCustomer,
    setShowModal,
    showModal,
    showLoginModal,
    setShowLoginModal
  };
  // include returnUrl handlers in the provided context
  Object.assign(values, { returnUrl, setReturnUrl, setIsLoading });

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
