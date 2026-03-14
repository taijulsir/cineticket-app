"use client";
import React, { useState } from "react";
import { Ticket, Calendar, Clock, MapPin, Download, Share2, QrCode } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Mock Data
const MOCK_TICKETS = [
  {
    id: "TKT-908123A",
    bookingId: "BKG-12345",
    movie: "Dune: Part Two",
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2JGqqUTTe.jpg",
    theater: "Cineplex IMAX Downtown",
    hall: "IMAX Screen 1",
    date: "Mar 15, 2026",
    time: "7:30 PM",
    seat: "A1",
    status: "Active"
  }
];

export default function MyTicketsClient() {
  const [tickets, setTickets] = useState(MOCK_TICKETS);

  if (tickets.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center bg-white/5 border border-dashed border-white/10 rounded-[2.5rem] min-h-[60vh]">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <Ticket className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-2xl font-black uppercase tracking-widest mb-4">No Active Tickets</h2>
        <p className="text-gray-400 font-medium max-w-md mx-auto mb-8">
          Your booked tickets will appear here once you complete a reservation.
        </p>
        <Link href="/movies" className="px-8 py-4 bg-primary text-black font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-transform shadow-glow">
          Explore Showtimes
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black uppercase tracking-tighter">My Tickets</h1>
        <p className="text-gray-400 mt-2">Your digital ticket wallet and passes.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="relative bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden flex flex-col group">
            {/* Cutout effect for ticket */}
            <div className="absolute top-1/2 -left-3 w-6 h-6 bg-[#0b0b0f] rounded-full border-r border-white/10 -translate-y-1/2 z-10 hidden sm:block"></div>
            <div className="absolute top-1/2 -right-3 w-6 h-6 bg-[#0b0b0f] rounded-full border-l border-white/10 -translate-y-1/2 z-10 hidden sm:block"></div>
            
            {/* Top half / Poster & Info */}
            <div className="flex p-6 border-b border-white/10 border-dashed relative">
              <div className="w-24 h-36 relative rounded-xl overflow-hidden shrink-0 shadow-lg">
                 <Image src={ticket.poster} alt={ticket.movie} fill className="object-cover" />
              </div>
              <div className="ml-6 flex-1 flex flex-col justify-center">
                 <div className="inline-block px-3 py-1 bg-primary/20 text-primary text-[10px] font-black uppercase tracking-widest rounded-lg mb-3 w-max">
                   {ticket.status}
                 </div>
                 <h3 className="text-xl font-black uppercase tracking-widest leading-tight mb-2">{ticket.movie}</h3>
                 <p className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5 mb-1">
                   <MapPin size={12} className="text-primary"/> {ticket.theater}
                 </p>
                 <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">
                   {ticket.hall}
                 </p>
              </div>
            </div>

            {/* Middle info */}
            <div className="p-6 grid grid-cols-3 gap-4 border-b border-white/10 border-dashed bg-black/20">
               <div>
                 <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Date</p>
                 <p className="text-sm font-bold">{ticket.date}</p>
               </div>
               <div>
                 <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Time</p>
                 <p className="text-sm font-bold">{ticket.time}</p>
               </div>
               <div>
                 <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Seat</p>
                 <p className="text-lg font-black text-primary leading-none">{ticket.seat}</p>
               </div>
            </div>

            {/* Bottom QR Code & Actions */}
            <div className="p-6 flex items-center justify-between bg-primary/5">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl p-1 flex items-center justify-center">
                     <QrCode className="w-full h-full text-black" />
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em] mb-0.5">Ticket ID</p>
                    <p className="text-xs font-bold font-mono tracking-widest">{ticket.id}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                   <button className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-gray-300 hover:text-primary hover:border-primary/50 transition-colors">
                     <Download size={16} />
                   </button>
                   <button className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-gray-300 hover:text-primary hover:border-primary/50 transition-colors">
                     <Share2 size={16} />
                   </button>
                </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
