"use client";
import React from "react";

const TrailerSkeleton: React.FC = () => {
  return (
    <section className="space-y-6 py-8">
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-6 bg-primary rounded-full" />
        <h2 className="text-xl font-black text-white uppercase tracking-widest">Official Trailer</h2>
      </div>

      <div className="rounded-[2.5rem] overflow-hidden border border-white/5 bg-[#1a1a1e] animate-pulse">
        <div className="aspect-video w-full bg-white/5 rounded skeleton-gradient" />
      </div>
    </section>
  );
};

export default TrailerSkeleton;
