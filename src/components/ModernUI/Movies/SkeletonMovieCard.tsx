"use client";
import React from "react";
import { Star, Clock } from "lucide-react";

const SkeletonMovieCard = () => {
    return (
        <div className="relative flex flex-col h-full bg-card rounded-[2rem] overflow-hidden border border-white/5 w-full animate-pulse">
            {/* Poster skeleton */}
            <div className="aspect-[2/3] shrink-0 bg-white/5" />

            {/* Rating badge skeleton */}
            <div className="absolute top-4 right-4 bg-black/40 px-2.5 py-1.5 rounded-2xl flex items-center gap-1.5">
                <Star size={14} className="text-white/10" />
                <div className="h-3 w-6 bg-white/10 rounded" />
            </div>

            {/* Details skeleton */}
            <div className="flex-1 flex flex-col justify-center p-6 space-y-3">
                <div className="flex items-center gap-3">
                    <div className="h-2.5 w-14 bg-white/10 rounded" />
                    <div className="w-1 h-1 bg-white/5 rounded-full" />
                    <div className="flex items-center gap-1.5">
                        <Clock size={12} className="text-white/5" />
                        <div className="h-2.5 w-12 bg-white/10 rounded" />
                    </div>
                </div>
                <div className="h-4 w-3/4 bg-white/10 rounded" />
            </div>
        </div>
    );
};

export default SkeletonMovieCard;
