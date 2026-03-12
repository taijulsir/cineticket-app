"use client";
import React from 'react';
import MovieCard from './MovieCard';

const MovieGrid = ({ movies, title }: { movies?: any[]; title?: any }) => {
    return (
        <section className="py-12 px-6 md:px-12 lg:px-24 space-y-8">
            <div className="flex items-center justify-between">
                <div className="space-y-1">
                    <h2 className="text-3xl font-bold text-white tracking-tight">
                        {title}
                    </h2>
                    <div className="h-1 w-20 bg-primary rounded-full" />
                </div>
                <button className="text-primary hover:text-primary/80 font-medium text-sm transition-colors">
                    View All →
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
                {movies?.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </section>
    );
};

export default MovieGrid;
