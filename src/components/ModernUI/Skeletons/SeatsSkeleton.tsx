"use client";
import React from "react";

const SeatsSkeleton: React.FC = () => {
  return (
    <section className="space-y-8 py-8">
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-6 bg-primary rounded-full" />
        <h2 className="text-xl font-black text-white uppercase tracking-widest">Choose Your Seats</h2>
      </div>

      <div className="w-full rounded-2xl bg-transparent border border-white/5 p-6">
        <div className="grid grid-cols-12 gap-2">
          {Array.from({ length: 12 * 6 }).map((_, i) => (
            <div key={i} className="h-7 rounded bg-[#1a1a1e] overflow-hidden animate-pulse">
              <div className="h-full w-full bg-white/5 rounded skeleton-gradient" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeatsSkeleton;
