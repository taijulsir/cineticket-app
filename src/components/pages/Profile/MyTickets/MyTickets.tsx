"use client"


import { z } from "zod";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IoSquareOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import useAxiosInstance from "@/Utilities/Hooks/useAxiosInstance";

const orders = [
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

  const [orders, setOrders] = useState([])
  const [orderItems, setOrderItems] = useState([])
  const axiosInstance = useAxiosInstance()


  useEffect(() => {
    async function fetchAndSetOrders() {
      const { data } = await axiosInstance.get("getMyOrders")
      setOrders(data?.orders)
      setOrderItems(data?.orderItems)
    }
    fetchAndSetOrders()
  }, [axiosInstance])


  return (
    <div>
      <h3 className="pb-8 text-center md:text-start">My Tickets</h3>
      <Table>
        <TableHeader>
          <TableRow>
            {/* <TableHead>Ticket ID</TableHead> */}
            <TableHead>Date</TableHead>
            <TableHead>Seat</TableHead>
            {/* <TableHead>Status</TableHead> */}
            {/* <TableHead>Pay by</TableHead> */}
            <TableHead>Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order, i) => (
            <TableRow key={order?._id}>

              <TableCell><div className="text-[#FFFFFF]">{new Date(order?.createdAt).toLocaleDateString()}</div>
              </TableCell>

              {/* <TableCell>
                <div className="text-[#FFFFFF]">{orderItems?.map(order=>order?.seat?.seatName)}</div>
              </TableCell> */}

              <TableCell>
                <div className="text-[#FFFFFF]">
                  {orderItems?.map(order => order?.seat?.seatName).join(', ').replace(/,([^,]*)$/, '.$1')}
                </div>
              </TableCell>

              <TableCell><div className="text-[#FFFFFF]">${order?.total}</div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default MyTickets;
