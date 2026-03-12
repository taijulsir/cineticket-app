"use client";
import React from 'react';
import { Star, Clock, Calendar, Globe, Share2, Heart } from 'lucide-react';

import { Movie } from '@/Utilities/mockData/mockMovies';

interface MovieDetailHeaderProps {
    movie: Movie;
}

const MovieDetailHeader: React.FC<MovieDetailHeaderProps> = ({ movie }) => {
    if (!movie) return null;

    /* Dynamically scale heading size based on title length */
    const titleLength = movie.title?.length || 0;
    const titleSizeClass =
        titleLength > 40
            ? "text-2xl sm:text-3xl md:text-4xl"
            : titleLength > 25
                ? "text-3xl sm:text-4xl md:text-5xl"
                : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl";

    return (
        <div className="relative min-h-[70vh] w-full flex items-end pb-12">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-cover bg-top"
                style={{ backgroundImage: `url(${movie.backdropUrl})` }}
            >
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/80 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#121212] via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 px-6 md:px-12 lg:px-24 w-full">
                <div className="flex flex-col md:flex-row gap-10 items-end">
                    {/* Poster */}
                    <div className="hidden md:block w-64 md:mt-[76px] flex-none animate-in fade-in slide-in-from-bottom-10 duration-700">
                        <img
                            src={movie.posterUrl}
                            alt={movie.title}
                            className="w-full rounded-2xl shadow-2xl border border-white/10"
                        />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0 space-y-6 animate-in fade-in slide-in-from-left-10 duration-700">
                        <div className="space-y-4">
                            <div className="flex flex-wrap items-center gap-3 text-primary font-bold text-sm tracking-widest uppercase mb-2">
                                <span className="bg-primary/20 px-3 py-1 rounded-lg border border-primary/30">{movie.format}</span>
                                <span>•</span>
                                <span>{movie.genres.join(", ")}</span>
                            </div>
                            <h1 className={`${titleSizeClass} font-black text-white tracking-tighter leading-[1.1] py-1 break-words`}>
                                {movie.title}
                            </h1>
                            {movie.tagline && (
                                <p className="text-gray-400 text-base md:text-lg italic font-medium">"{movie.tagline}"</p>
                            )}
                        </div>

                        <div className="flex flex-wrap items-center gap-4 md:gap-6 text-gray-300">
                            <div className="flex items-center gap-2">
                                <Star className="text-primary fill-primary" size={20} />
                                <span className="text-white font-bold text-xl">{movie.rating}</span>
                                <span className="text-gray-500 text-sm">/ 10</span>
                            </div>
                            <div className="w-[1px] h-6 bg-white/10 hidden sm:block" />
                            <div className="flex items-center gap-2">
                                <Clock size={18} className="text-primary" />
                                <span className="font-medium text-sm md:text-base">{movie.runtime}</span>
                            </div>
                            <div className="w-[1px] h-6 bg-white/10 hidden sm:block" />
                            <div className="flex items-center gap-2">
                                <Calendar size={18} className="text-primary" />
                                <span className="font-medium text-sm md:text-base">{movie.releaseDate}</span>
                            </div>
                            <div className="w-[1px] h-6 bg-white/10 hidden sm:block" />
                            <div className="flex items-center gap-2">
                                <Globe size={18} className="text-primary" />
                                <span className="font-medium text-sm md:text-base">{movie.language}</span>
                            </div>
                        </div>

                        <p className="text-gray-400 max-w-3xl leading-relaxed text-base md:text-lg">
                            {movie.description}
                        </p>

                        <div className="flex items-center gap-4 pt-4">
                            <button className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/5 transition-all hover:scale-110">
                                <Heart size={24} className="text-white" />
                            </button>
                            <button className="bg-white/10 hover:bg-white/20 p-4 rounded-2xl border border-white/5 transition-all hover:scale-110">
                                <Share2 size={24} className="text-white" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailHeader;
