"use client";
import React from "react";

const StatsSkeleton: React.FC = () => {
    return (
        <section className="px-6 md:px-12 lg:px-24 py-20 bg-black/40 animate-pulse">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div
                        key={i}
                        className="bg-white/5 border border-white/5 p-8 rounded-3xl text-center"
                    >
                        {/* Icon */}
                        <div className="inline-flex p-4 bg-white/5 rounded-2xl mb-4">
                            <div className="w-8 h-8 bg-white/5 rounded-lg" />
                        </div>

                        {/* Number */}
                        <div className="h-8 md:h-10 w-32 bg-white/5 rounded-lg mx-auto mb-2" />

                        {/* Label */}
                        <div className="h-3 w-20 bg-white/5 rounded mx-auto" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default StatsSkeleton;
