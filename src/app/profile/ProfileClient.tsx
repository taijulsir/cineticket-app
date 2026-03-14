"use client";
import React from "react";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { MapPin, Phone, Mail, User as UserIcon, Calendar, Clock, Edit2, Shield, Ticket, Star } from "lucide-react";

export default function ProfileClient() {
  const auth = useAuth();
  const user = auth?.customer;

  if (!user) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-40 bg-white/5 rounded-[2rem] w-full"></div>
        <div className="h-64 bg-white/5 rounded-[2rem] w-full"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-black uppercase tracking-tighter">My Profile</h1>
        <p className="text-gray-400 mt-2">Manage your personal information and preferences.</p>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Total Bookings", value: "12", icon: Ticket },
          { label: "Favorite Theater", value: "Cineplex IMAX", icon: Star },
          { label: "Member Since", value: new Date().getFullYear(), icon: Calendar },
        ].map((stat, i) => (
          <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-[2rem] flex items-center gap-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <stat.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-gray-500 font-bold uppercase">{stat.label}</p>
              <p className="text-xl font-black">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Personal Info Card */}
      <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8">
          <button className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-black transition-colors flex items-center gap-2">
            <Edit2 size={14} /> Edit
          </button>
        </div>

        <h2 className="text-xl font-black uppercase tracking-widest mb-8 flex items-center gap-3">
          <div className="w-1.5 h-6 bg-primary rounded-full"></div>
          Personal Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <UserIcon size={14} /> Full Name
            </label>
            <p className="font-medium text-lg">{user.name}</p>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <Mail size={14} /> Email Address
            </label>
            <p className="font-medium text-lg">{user.email}</p>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <Phone size={14} /> Phone Number
            </label>
            <p className="font-medium text-lg">{(user as any).phone || "Not provided"}</p>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2">
              <MapPin size={14} /> Preferred City
            </label>
            <p className="font-medium text-lg">New York, NY</p>
          </div>
        </div>
      </div>

      {/* Account Security */}
      <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem]">
        <h2 className="text-xl font-black uppercase tracking-widest mb-8 flex items-center gap-3">
          <div className="w-1.5 h-6 bg-primary rounded-full"></div>
          Account Security
        </h2>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center justify-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-sm hover:border-white/30 transition-colors">
            <Shield size={18} className="text-primary" />
            Change Password
          </button>
          <button className="flex items-center justify-center gap-3 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl font-bold text-sm hover:border-white/30 transition-colors">
            <Clock size={18} className="text-primary" />
            Session History
          </button>
        </div>
      </div>
    </div>
  );
}
