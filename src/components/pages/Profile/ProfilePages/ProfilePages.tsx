"use client";
import { useState } from "react";
import MyTickets from "../MyTickets/MyTickets";
import MyProfile from "../MyProfile/MyProfile";
import { Button } from "@/components/ui/button";
import { IoTicketSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

function ProfilePages() {
  const [active, setActive] = useState("My Tickets");
  return (
    <div className="w-10/12 mx-auto min-h-screen pt-0 md:pt-32 mt-[90px]">
      <div className="flex-row md:flex">
        <div className="w-full md:w-[18vw] pt-16">
          <div className="flex md:flex-col md:justify-start justify-between">
           <button className={`text-base flex items-center gap-6 ${active === "My Tickets" ? "text-primary" : "text-[#FFFFFF]"}`} onClick={() => setActive("My Tickets")}>
              <IoTicketSharp className="flex gap-6"/>
              My Tickets
            </button>
            <br></br>
            <button className={`text-base flex items-center gap-6 ${active === "Profile" ? "text-primary" : "text-[#FFFFFF]"}`} onClick={() => setActive("Profile")}>
              <FaUser /> Profile
            </button>
          </div>
        </div>

        <div className="flex-1 pr-0 md:pr-52">
          {active === "My Tickets" && <MyTickets />}
          {active === "Profile" && <MyProfile />}
        </div>
      </div>
    </div>
  );
}

export default ProfilePages;
