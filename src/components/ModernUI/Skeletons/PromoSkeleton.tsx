"use client";
import React from "react";

const PromoSkeleton: React.FC = () => {
    return (
        <section className="px-6 md:px-12 lg:px-24 py-20 animate-pulse">
            <div className="relative rounded-[2.5rem] overflow-hidden bg-[#1a1a1e] border border-white/5 p-8 md:p-16">
                {/* Content grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        {/* Title */}
                        <div className="space-y-3">
                            <div className="h-10 md:h-14 w-3/4 bg-white/5 rounded-xl" />
                            <div className="h-10 md:h-14 w-1/2 bg-white/5 rounded-xl" />
                        </div>

                        {/* Description */}
                        <div className="space-y-2">
                            <div className="h-5 w-full bg-white/5 rounded" />
                            <div className="h-5 w-2/3 bg-white/5 rounded" />
                        </div>

                        {/* Button */}
                        <div className="h-14 w-48 bg-primary/10 rounded-2xl" />
                    </div>

                    {/* Image placeholder */}
                    <div className="hidden md:block">
                        <div className="w-full aspect-[4/3] bg-white/5 rounded-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PromoSkeleton;
