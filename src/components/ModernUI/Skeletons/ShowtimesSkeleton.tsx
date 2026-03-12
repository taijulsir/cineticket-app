"use client";
import React from "react";

const ShowtimesSkeleton: React.FC = () => {
  return (
    <section id="tickets" className="space-y-8 scroll-mt-32 py-8">
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-6 bg-primary rounded-full" />
        <h2 className="text-xl font-black text-white uppercase tracking-widest">Select Showtimes</h2>
      </div>

      <div className="space-y-6">
        <div className="flex flex-wrap gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-[220px] h-20 rounded-[1.5rem] bg-[#1a1a1e] border border-white/5 overflow-hidden animate-pulse">
              <div className="h-full w-full bg-white/5 rounded skeleton-gradient" />
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 p-4 bg-white/5 rounded-[2rem] border border-white/5">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-28 h-12 rounded-[1.5rem] bg-black/60 overflow-hidden animate-pulse border border-white/5">
              <div className="h-full w-full bg-white/5 rounded skeleton-gradient" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowtimesSkeleton;
