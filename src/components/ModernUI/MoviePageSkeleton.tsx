"use client";

import React from "react";
import HeroSkeleton from "@/components/ModernUI/Skeletons/HeroSkeleton";
import MovieSliderSkeleton from "@/components/ModernUI/Skeletons/MovieSliderSkeleton";
import TrailerSkeleton from "@/components/ModernUI/Skeletons/TrailerSkeleton";
import ShowtimesSkeleton from "@/components/ModernUI/Skeletons/ShowtimesSkeleton";
import SeatsSkeleton from "@/components/ModernUI/Skeletons/SeatsSkeleton";
import PriceSummarySkeleton from "@/components/ModernUI/Skeletons/PriceSummarySkeleton";
import Skeleton from "@/components/Skeleton/Skeleton";

const MoviePageSkeleton: React.FC = () => {
  return (
    <div className="bg-[#0b0b0f] min-h-screen text-white">
      {/* Keep the movie page structure but apply homepage skeleton tokens (shimmer/pulse) */}
      <HeroSkeleton />

      <div className="px-6 md:px-12 lg:px-24 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <TrailerSkeleton />
            <ShowtimesSkeleton />
            <SeatsSkeleton />
          </div>

          <aside className="lg:col-span-1 space-y-8">
            <PriceSummarySkeleton />

            <div className="mt-6">
              <h3 className="text-xl font-bold text-white px-2">You May Also Like</h3>
              {/* Reuse movie slider skeleton which already uses the homepage tokens */}
              <MovieSliderSkeleton />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default MoviePageSkeleton;
