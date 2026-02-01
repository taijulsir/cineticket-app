"use client";
import React from "react";

const UpcomingCarouselSkeleton: React.FC = () => {
    return (
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-white/5 relative overflow-hidden animate-pulse">
            {/* Top line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/5 to-transparent" />

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div className="space-y-3">
                    <div className="h-3 w-24 bg-white/5 rounded" />
                    <div className="space-y-2">
                        <div className="h-10 md:h-12 w-72 bg-white/5 rounded-xl" />
                        <div className="h-10 md:h-12 w-48 bg-white/5 rounded-xl" />
                    </div>
                </div>
                <div className="h-4 w-32 bg-white/5 rounded" />
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="bg-[#1a1a1e] rounded-3xl overflow-hidden border border-white/5">
                        {/* Poster */}
                        <div className="aspect-[2/3] relative bg-white/5">
                            {/* Bell button */}
                            <div className="absolute top-4 right-4 w-11 h-11 bg-black/40 rounded-2xl" />

                            {/* Bottom content */}
                            <div className="absolute bottom-4 left-4 right-4 space-y-3">
                                <div className="h-2.5 w-24 bg-white/10 rounded" />
                                <div className="h-5 w-3/4 bg-white/10 rounded" />
                                <div className="h-3 w-1/2 bg-white/10 rounded" />
                            </div>
                        </div>

                        {/* Notify button */}
                        <div className="p-4 bg-black/40 border-t border-white/5">
                            <div className="w-full h-11 bg-white/5 rounded-xl" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UpcomingCarouselSkeleton;
