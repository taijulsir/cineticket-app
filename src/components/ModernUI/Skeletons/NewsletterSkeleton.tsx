"use client";
import React from "react";

const NewsletterSkeleton: React.FC = () => {
    return (
        <section className="section-padding py-16 animate-pulse">
            <div className="bg-[#1a1a1e]/60 border border-white/5 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Left content */}
                <div className="space-y-4 text-center md:text-left flex-1 max-w-xl">
                    <div className="space-y-3">
                        <div className="h-8 md:h-10 w-3/4 bg-white/5 rounded-xl mx-auto md:mx-0" />
                        <div className="h-8 md:h-10 w-1/2 bg-white/5 rounded-xl mx-auto md:mx-0" />
                    </div>
                    <div className="h-4 w-2/3 bg-white/5 rounded mx-auto md:mx-0" />
                </div>

                {/* Right input area */}
                <div className="w-full max-w-md bg-black/40 rounded-2xl border border-white/5 p-1.5">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="flex-1 h-14 bg-white/5 rounded-xl" />
                        <div className="h-14 w-32 bg-primary/10 rounded-xl" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsletterSkeleton;
