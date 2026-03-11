"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import MovieCard from './MovieCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Movie } from '@/Utilities/mockData/mockMovies';

interface MovieSliderProps {
    title: string;
    movies: Movie[];
    category?: string;
}

const MovieSlider: React.FC<MovieSliderProps> = ({ title, movies, category }) => {
    if (!movies || movies.length === 0) return null;

    return (
        <section className="py-12 px-6 md:px-12 lg:px-24">
            <div className="flex items-center justify-between mb-8">
                <div className="space-y-1">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        {title}
                    </h2>
                    <div className="h-1 w-16 bg-primary rounded-full" />
                </div>
                {category && (
                    <button className="text-primary text-sm font-bold hover:underline">
                        View All
                    </button>
                )}
            </div>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={24}
                slidesPerView={2}
                navigation
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1280: {
                        slidesPerView: 5,
                    },
                }}
                className="movie-swiper !pb-12"
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id} className="!h-auto">
                        <MovieCard movie={movie} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default MovieSlider;
