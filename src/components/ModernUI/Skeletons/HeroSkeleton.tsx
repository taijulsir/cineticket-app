"use client";
import React from "react";

const HeroSkeleton: React.FC = () => {
    return (
        <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden bg-[#0b0b0f] animate-pulse">
            {/* Background shimmer */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1e] via-[#252528] to-[#1a1a1e]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-transparent to-transparent" />

            {/* Content skeleton */}
            <div className="relative h-full section-padding flex flex-col justify-center max-w-4xl z-10 space-y-6">
                {/* Badge */}
                <div className="h-8 w-44 bg-white/5 rounded-full" />

                {/* Title lines */}
                <div className="space-y-3">
                    <div className="h-12 md:h-16 w-3/4 bg-white/5 rounded-2xl" />
                    <div className="h-12 md:h-16 w-1/2 bg-white/5 rounded-2xl" />
                </div>

                {/* Meta row */}
                <div className="flex items-center gap-4">
                    <div className="h-9 w-20 bg-white/5 rounded-xl" />
                    <div className="h-5 w-24 bg-white/5 rounded-lg" />
                    <div className="h-5 w-28 bg-white/5 rounded-lg" />
                    <div className="h-7 w-16 bg-white/5 rounded-lg" />
                </div>

                {/* Description */}
                <div className="space-y-2 max-w-xl">
                    <div className="h-4 w-full bg-white/5 rounded" />
                    <div className="h-4 w-4/5 bg-white/5 rounded" />
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-4 pt-2">
                    <div className="h-14 w-44 bg-primary/10 rounded-2xl" />
                    <div className="h-14 w-44 bg-white/5 rounded-2xl border border-white/5" />
                </div>
            </div>

            {/* Side cards skeleton (desktop) */}
            <div className="absolute right-6 md:right-12 lg:right-24 bottom-12 z-30 hidden xl:flex flex-col items-end gap-3">
                <div className="h-3 w-24 bg-white/5 rounded mb-1" />
                <div className="flex gap-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="w-48 h-28 rounded-[1.5rem] bg-white/5 border border-white/5" />
                    ))}
                </div>
            </div>

            {/* Slide indicators */}
            <div className="absolute left-6 md:left-12 lg:left-24 bottom-10 z-30 flex gap-2">
                <div className="h-1.5 w-10 bg-white/10 rounded-full" />
                {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-1.5 w-1.5 bg-white/5 rounded-full" />
                ))}
            </div>
        </section>
    );
};

export default HeroSkeleton;
