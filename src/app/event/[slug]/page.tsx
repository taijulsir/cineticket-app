"use client"
import React, { useState } from "react";
import MovieDetailHeader from "@/components/ModernUI/MovieDetailHeader";
import SeatSelection from "@/components/ModernUI/SeatSelection";
import PriceSummary from "@/components/ModernUI/PriceSummary";
import MovieCard from "@/components/ModernUI/MovieCard";
import { mockMovies } from "@/Utilities/mockData/mockMovies";
import { Play } from "lucide-react";

interface EventProps {
  params: {
    slug: string;
  };
}

export default function Event({ params }: EventProps) {
  const movie = mockMovies.find(m => m.slug === params.slug) || mockMovies[0];
  const [selectedTheater, setSelectedTheater] = useState(movie.shows[0] || { theater: "", times: [] });
  const [selectedTime, setSelectedTime] = useState(movie?.shows[0]?.times[0] || "");
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  return (
    <main className="bg-[#121212] min-h-screen pb-32">
      {/* Cinematic Header */}
      <MovieDetailHeader movie={movie} />

      <div className="px-6 md:px-12 lg:px-24 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">

            {/* Trailer Section */}
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-primary rounded-full" />
                <h2 className="text-xl font-black text-white uppercase tracking-widest">Official Trailer</h2>
              </div>
              <div className="aspect-video w-full rounded-[2.5rem] overflow-hidden border border-white/5 shadow-soft relative group">
                <iframe
                  className="w-full h-full"
                  src={movie.trailerUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent group-hover:opacity-0 transition-opacity" />
              </div>
            </section>

            {/* Showtimes Selection */}
            <section id="tickets" className="space-y-8 scroll-mt-32">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-primary rounded-full" />
                <h2 className="text-xl font-black text-white uppercase tracking-widest">Select Showtimes</h2>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  {movie.shows.map((theater: any, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setSelectedTheater(theater);
                        setSelectedTime(theater.times[0]);
                      }}
                      className={`
                        px-6 py-4 rounded-[1.5rem] border-2 transition-all text-left space-y-1.5 min-w-[200px]
                        ${selectedTheater.theater === theater.theater
                          ? 'bg-primary/10 border-primary text-primary shadow-glow'
                          : 'bg-black/40 border-white/5 text-gray-400 hover:border-white/20 hover:bg-white/5'}
                      `}
                    >
                      <p className="font-black text-xs uppercase tracking-widest">{theater.theater}</p>
                      <p className="text-[9px] opacity-80 font-bold uppercase tracking-wider">{theater.location}</p>
                    </button>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3 p-4 bg-white/5 rounded-[2rem] border border-white/5">
                  {selectedTheater?.times?.map((time, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedTime(time)}
                      className={`
                        px-8 py-4 rounded-[1.5rem] font-black text-[10px] transition-all uppercase tracking-widest
                        ${selectedTime === time
                          ? 'bg-primary text-black shadow-glow scale-105'
                          : 'bg-black/60 text-gray-400 border border-white/5 hover:border-white/20 hover:text-white'}
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Interactive Seat Selection */}
            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-primary rounded-full" />
                <h2 className="text-xl font-black text-white uppercase tracking-widest">Choose Your Seats</h2>
              </div>
              <SeatSelection onConfirm={setSelectedSeats} />
            </section>

          </div>

          {/* Sidebar Area */}
          <div className="lg:col-span-1">
            <PriceSummary
              selectedSeatsCount={selectedSeats.length}
              totalPrice={selectedSeats.reduce((acc, seat) => {
                const row = seat[0];
                if (['I', 'J'].includes(row)) return acc + 1500;
                if (['F', 'G', 'H'].includes(row)) return acc + 1000;
                return acc + 600;
              }, 0)}
            />

            {/* Related Movies */}
            <div className="mt-12 space-y-6">
              <h3 className="text-xl font-bold text-white px-2">You May Also Like</h3>
              <div className="space-y-4">
                {mockMovies.filter(m => m.id !== movie.id).slice(0, 2).map(m => (
                  <MovieCard key={m.id} movie={m} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}

