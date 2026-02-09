"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Star, Play, Ticket, Clock, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TrailerModal from "./TrailerModal";

import { Movie } from "@/Utilities/mockData/mockMovies";

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    const [isTrailerOpen, setIsTrailerOpen] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <motion.div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative flex flex-col h-full bg-[#1a1a1e] rounded-[2rem] overflow-hidden border border-white/5 transition-all duration-500 hover:border-primary/40 shadow-soft w-full mx-auto"
            >
                <div className="relative aspect-[2/3] shrink-0 overflow-hidden">
                    <img
                        src={movie.posterUrl}
                        alt={movie.title}
                        className="w-full h-full object-cover transition-transform duration-[800ms] ease-out group-hover:scale-110"
                    />

                    {/* Floating Rating Badge */}
                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1.5 rounded-2xl flex items-center gap-1.5 z-10 shadow-glow">
                        <Star size={14} className="text-primary fill-primary" />
                        <span className="text-white text-[10px] font-black">{movie.rating}</span>
                    </div>

                    {/* Hover Overlay */}
                    <Link href={`/event/${movie.slug}`}>
                        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent transition-opacity duration-500 ${isHovered ? "opacity-90" : "opacity-40"}`} />
                    </Link>

                    {/* Quick Action Container */}
                    <div className={`absolute inset-x-0 bottom-0 p-6 space-y-3 z-20 transition-all duration-500 transform ${isHovered ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                        <Link
                            href={`/event/${movie.slug}#tickets`}
                            className="w-full bg-primary hover:bg-white text-black py-4 rounded-2xl font-black text-xs flex items-center justify-center gap-2 transition-all active:scale-95 shadow-glow uppercase tracking-widest"
                        >
                            <Ticket size={16} />
                            Get Tickets
                        </Link>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setIsTrailerOpen(true)}
                                className="flex-1 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white py-3.5 rounded-xl font-black text-[9px] flex items-center justify-center gap-2 transition-all border border-white/10 active:scale-95 uppercase tracking-widest"
                            >
                                <Play size={12} fill="white" />
                                Trailer
                            </button>
                            <Link
                                href={`/event/${movie.slug}`}
                                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3.5 rounded-xl transition-all border border-white/10 active:scale-95"
                            >
                                <Info size={16} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Card Details */}
                <Link href={`/event/${movie.slug}`} className="flex-1 flex flex-col justify-center p-6 bg-gradient-to-b from-transparent to-black/20">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3 text-[9px] text-gray-500 font-black uppercase tracking-[0.2em]">
                            <span className="text-primary/80">{movie.genres?.[0]}</span>
                            <span className="w-1 h-1 bg-white/10 rounded-full"></span>
                            <div className="flex items-center gap-1.5">
                                <Clock size={12} className="text-primary/60" />
                                {movie.runtime}
                            </div>
                        </div>
                        <h3 className="text-white font-black group-hover:text-primary transition-colors text-base tracking-tight truncate px-0.5">
                            {movie.title}
                        </h3>
                    </div>
                </Link>
            </motion.div>

            <TrailerModal
                isOpen={isTrailerOpen}
                onClose={() => setIsTrailerOpen(false)}
                trailerUrl={movie.trailerUrl}
                movieTitle={movie.title}
            />
        </>
    );
};

export default MovieCard;
