"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext/AuthContext";
import useAxiosInstance from "@/Utilities/Hooks/useAxiosInstance";
interface AppContextType {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  triggerFetch: () => void;
  toggleFetch: boolean;
  setToggleFetch: React.Dispatch<React.SetStateAction<boolean>>;
  customerUpvote: any[];
  discount: number;
  setDiscount: React.Dispatch<React.SetStateAction<number>>;
  afterDiscountTotal: number;
  setAfterDiscountTotal: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  selectedSeats: any[];
  setSelectedSeats: React.Dispatch<React.SetStateAction<any[]>>;
  isPromo: boolean;
  setIsPromo: React.Dispatch<React.SetStateAction<boolean>>;
  promoCodeId: string;
  setPromoCodeId: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const auth = useAuth();
  const customer = auth?.customer;
  const [isLoading, setIsLoading] = useState(true);
  const [toggleFetch, setToggleFetch] = useState(false);
  const [customerUpvote, setCustomerUpvote] = useState<any[]>([]);
  const [discount, setDiscount] = useState(0)
  const [afterDiscountTotal, setAfterDiscountTotal] = useState(0)
  const [total, setTotal] = useState(0)
  const [selectedSeats, setSelectedSeats] = useState<any[]>([]);
  const [isPromo, setIsPromo] = useState(false)
  const [promoCodeId, setPromoCodeId] = useState("")

  const axiosInstance = useAxiosInstance();
  function triggerFetch() {
    setToggleFetch((prevState) => !prevState);
  }

  useEffect(() => {
    if (customer) {
      const fetchAndSetCustomerUpvote = async () => {
        try {
          const { data } = await axiosInstance.get("events/customerUpvoteEvent");
          setCustomerUpvote(data);
        } catch (error) {
          console.error("Failed to fetch customer upvotes:", error);
        }
      };
      fetchAndSetCustomerUpvote();
    }
  }, [customer, axiosInstance, toggleFetch]);


  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        triggerFetch,
        toggleFetch,
        setToggleFetch,
        customerUpvote,
        discount,
        setDiscount,
        afterDiscountTotal,
        setAfterDiscountTotal,
        total,
        setTotal,
        selectedSeats,
        setSelectedSeats,
        isPromo, setIsPromo,
        promoCodeId, setPromoCodeId
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppContextProvider');
  }
  return context;
};

export { AppContextProvider };

export default AppContext;
