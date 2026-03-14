"use client";
import React, { useState } from "react";
import { Ticket, Search, Clock, Calendar, MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

// Mock Data
const MOCK_BOOKINGS = [
  {
    id: "BKG-12345",
    movie: "Dune: Part Two",
    poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2JGqqUTTe.jpg",
    theater: "Cineplex IMAX Downtown",
    date: "Mar 15, 2026",
    time: "7:30 PM",
    seats: "A1, A2",
    amount: "$45.00",
    status: "Upcoming",
    paymentStatus: "Paid"
  },
  {
    id: "BKG-12344",
    movie: "Oppenheimer",
    poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    theater: "Star Galaxy Cinemas",
    date: "Feb 10, 2026",
    time: "6:00 PM",
    seats: "F12",
    amount: "$18.00",
    status: "Completed",
    paymentStatus: "Paid"
  }
];

export default function MyBookingsClient() {
  const [bookings, setBookings] = useState(MOCK_BOOKINGS); // Switch to empty array to test empty state
  const [isLoading, setIsLoading] = useState(false);

  if (isLoading) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-40 bg-white/5 rounded-[2rem] w-full"></div>
        <div className="h-40 bg-white/5 rounded-[2rem] w-full"></div>
      </div>
    );
  }

  if (bookings.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center bg-white/5 border border-dashed border-white/10 rounded-[2.5rem] min-h-[60vh]">
        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <Ticket className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-2xl font-black uppercase tracking-widest mb-4">No Bookings Yet</h2>
        <p className="text-gray-400 font-medium max-w-md mx-auto mb-8">
          You have not booked any movie tickets yet. Explore the latest blockbusters and reserve your seats now.
        </p>
        <Link href="/movies" className="px-8 py-4 bg-primary text-black font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-transform shadow-glow">
          Browse Movies
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-black uppercase tracking-tighter">My Bookings</h1>
        <p className="text-gray-400 mt-2">View and manage your ticket reservation history.</p>
      </div>

      <div className="space-y-6">
        {bookings.map((booking) => (
          <div key={booking.id} className="group flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all">
            
            {/* Thumbnail */}
            <div className="relative w-full md:w-48 h-64 md:h-auto shrink-0">
              <Image 
                src={booking.poster}
                alt={booking.movie}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent md:hidden" />
              <div className="absolute top-4 left-4 md:hidden">
                <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${
                  booking.status === 'Upcoming' ? 'bg-primary text-black' : 'bg-white/20 text-white backdrop-blur-md'
                }`}>
                  {booking.status}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-black uppercase tracking-widest mb-2">{booking.movie}</h3>
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">
                    <MapPin size={14} className="text-primary" /> {booking.theater}
                  </div>
                  <div className="flex items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5"><Calendar size={12} className="text-primary" /> {booking.date}</span>
                    <span className="flex items-center gap-1.5"><Clock size={12} className="text-primary" /> {booking.time}</span>
                  </div>
                </div>
                
                <div className="hidden md:block text-right">
                  <span className={`inline-block px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest mb-2 ${
                    booking.status === 'Upcoming' ? 'bg-primary text-black shadow-glow' : 'bg-white/10 text-white'
                  }`}>
                    {booking.status}
                  </span>
                  <p className="text-xl font-black text-white">{booking.amount}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Booking Ref</p>
                  <p className="font-bold text-sm">{booking.id}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Seats</p>
                  <p className="font-bold text-sm text-primary">{booking.seats}</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <button className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-white/10 transition-colors">
                    View Details
                  </button>
                  {booking.status === 'Upcoming' && (
                    <Link href="/my-tickets" className="px-5 py-2.5 bg-primary/10 border border-primary/20 text-primary rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-colors">
                      View Ticket
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
