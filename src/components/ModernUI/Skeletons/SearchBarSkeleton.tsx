"use client";
import React from "react";

const SearchBarSkeleton: React.FC = () => {
    return (
        <section className="section-padding py-12 relative z-20">
            <div className="animate-pulse">
                {/* Search input skeleton */}
                <div className="bg-[#1a1a1e]/80 border border-white/5 rounded-3xl p-6 md:p-8 backdrop-blur-xl">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
                        {/* Search field */}
                        <div className="md:col-span-1 space-y-2">
                            <div className="h-2.5 w-16 bg-white/5 rounded ml-1" />
                            <div className="h-14 w-full bg-white/5 rounded-2xl" />
                        </div>

                        {/* Genre select */}
                        <div className="space-y-2">
                            <div className="h-2.5 w-12 bg-white/5 rounded ml-1" />
                            <div className="h-14 w-full bg-white/5 rounded-2xl" />
                        </div>

                        {/* Date select */}
                        <div className="space-y-2">
                            <div className="h-2.5 w-10 bg-white/5 rounded ml-1" />
                            <div className="h-14 w-full bg-white/5 rounded-2xl" />
                        </div>

                        {/* Format select */}
                        <div className="space-y-2">
                            <div className="h-2.5 w-14 bg-white/5 rounded ml-1" />
                            <div className="h-14 w-full bg-white/5 rounded-2xl" />
                        </div>
                    </div>

                    {/* Search button */}
                    <div className="mt-6 flex justify-center">
                        <div className="h-14 w-48 bg-primary/10 rounded-2xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchBarSkeleton;
