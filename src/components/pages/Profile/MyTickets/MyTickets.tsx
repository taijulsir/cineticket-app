"use client"


import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

import {
  Table as TableAny,
  TableBody as TableBodyAny,
  TableCaption as TableCaptionAny,
  TableCell as TableCellAny,
  TableFooter as TableFooterAny,
  TableHead as TableHeadAny,
  TableHeader as TableHeaderAny,
  TableRow as TableRowAny,
} from "@/components/ui/table";
import { IoSquareOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import useAxiosInstance from "@/Utilities/Hooks/useAxiosInstance";

const sampleOrders = [
  {
    invoice: "#35622A",
    paymentStatus: "May 5, 4:12PM",
    totalAmount: "$250.00",
    paymentMethod: "A7",
    status: "Active",
    pay: "Card",
  },
  {
    invoice: "#35622A",
    paymentStatus: "May 5, 4:12PM",
    totalAmount: "$150.00",
    paymentMethod: "A7",
    status: "Active",
    pay: "Card",
  },
  {
    invoice: "#35622A",
    paymentStatus: "May 5, 4:12PM",
    totalAmount: "$350.00",
    paymentMethod: "A7",
    status: "Active",
    pay: "Card",
  },
  {
    invoice: "#35622A",
    paymentStatus: "May 5, 4:12PM",
    totalAmount: "$450.00",
    paymentMethod: "A7",
    status: "Active",
    pay: "Card",
  },
  {
    invoice: "#35622A",
    paymentStatus: "May 5, 4:12PM",
    totalAmount: "$550.00",
    paymentMethod: "A7",
    status: "Active",
    pay: "Card",
  },
];
function MyTickets() {

  const [orders, setOrders] = useState<any[]>([])
  const [orderItems, setOrderItems] = useState<any[]>([])
  const axiosInstance = useAxiosInstance()


  useEffect(() => {
    async function fetchAndSetOrders() {
      const { data } = await axiosInstance.get("orders")
      const ordersData = data?.data ?? data?.orders ?? []
  setOrders(ordersData)
  setOrderItems(ordersData.flatMap((order: any) => order?.items ?? []))
    }
    fetchAndSetOrders()
  }, [axiosInstance])


  return (
    <div>
      <h3 className="pb-8 text-center md:text-start">My Tickets</h3>
      <div className="space-y-4">
        {orders.map((order: any) => (
          <div key={order?._id} className="p-4 bg-[#0e0e13] border border-white/5 rounded-lg">
            <div className="text-[#FFFFFF] font-bold">{new Date(order?.createdAt).toLocaleDateString()}</div>
            <div className="text-[#FFFFFF] mt-2">
              {orderItems?.map((it: any) => it?.seat?.seatName).join(', ').replace(/,([^,]*)$/, '.$1')}
            </div>
            <div className="text-[#FFFFFF] mt-2">${order?.total}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyTickets;
