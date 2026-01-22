"use client";
import React from "react";
import { Star, Clock } from "lucide-react";

const MovieCardSkeleton: React.FC = () => {
    return (
        <div className="relative flex flex-col bg-[#1a1a1e] rounded-[2rem] overflow-hidden border border-white/5 w-full animate-pulse h-full">
            {/* Poster skeleton */}
            <div className="aspect-[2/3] shrink-0 bg-white/5" />

            {/* Rating badge */}
            <div className="absolute top-4 right-4 bg-black/40 px-2.5 py-1.5 rounded-2xl flex items-center gap-1.5">
                <Star size={14} className="text-white/10" />
                <div className="h-3 w-6 bg-white/10 rounded" />
            </div>

            {/* Details */}
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

interface MovieSliderSkeletonProps {
    title?: string;
}

const MovieSliderSkeleton: React.FC<MovieSliderSkeletonProps> = ({ title = "" }) => {
    return (
        <section className="py-12 px-6 md:px-12 lg:px-24 animate-pulse">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div className="space-y-2">
                    {title ? (
                        <h2 className="text-2xl md:text-3xl font-bold text-white/10 tracking-tight">
                            {title}
                        </h2>
                    ) : (
                        <div className="h-8 w-48 bg-white/5 rounded-xl" />
                    )}
                    <div className="h-1 w-16 bg-white/5 rounded-full" />
                </div>
                <div className="h-4 w-16 bg-white/5 rounded" />
            </div>

            {/* Cards row */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {Array.from({ length: 5 }).map((_, i) => (
                    <MovieCardSkeleton key={i} />
                ))}
            </div>
        </section>
    );
};

export default MovieSliderSkeleton;
