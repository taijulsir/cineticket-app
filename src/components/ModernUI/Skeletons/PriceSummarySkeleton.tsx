"use client";
import React from "react";

const PriceSummarySkeleton: React.FC = () => {
  return (
    <div className="w-full bg-[#1a1a1e] rounded-2xl border border-white/5 p-6 overflow-hidden animate-pulse">
      <div className="h-6 w-40 mb-4 bg-white/5 rounded skeleton-gradient" />
      <div className="space-y-3">
        <div className="h-3 w-full bg-white/5 rounded skeleton-gradient" />
        <div className="h-3 w-3/4 bg-white/5 rounded skeleton-gradient" />
        <div className="h-10 w-full bg-white/5 rounded skeleton-gradient" />
      </div>

      <div className="mt-6 border-t border-white/5 pt-6">
        <div className="h-12 w-full bg-white/5 rounded skeleton-gradient" />
        <div className="h-12 w-full bg-white/5 rounded mt-4 skeleton-gradient" />
      </div>
    </div>
  );
};

export default PriceSummarySkeleton;
