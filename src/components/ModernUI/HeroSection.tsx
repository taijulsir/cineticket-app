"use client";
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import Link from 'next/link';
import { Play, Ticket, Star, Clock, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TrailerModal from './TrailerModal';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Movie } from '@/Utilities/mockData/mockMovies';

interface HeroSectionProps {
    movies: Movie[];
}

const HeroSection: React.FC<HeroSectionProps> = ({ movies }) => {
    const swiperRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTrailerOpen, setIsTrailerOpen] = useState(false);
    const [selectedTrailerUrl, setSelectedTrailerUrl] = useState('');
    const [selectedMovieTitle, setSelectedMovieTitle] = useState('');

    if (!movies || movies.length === 0) return null;

    // Show top 3 movies in the side panel
    const sideMovies = movies.slice(0, 3);

    return (
        <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden bg-[#0b0b0f] group">
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                effect="fade"
                autoplay={{ delay: 8000, disableOnInteraction: false }}
                loop={true}
                className="h-full w-full"
            >
                {movies.map((movie, index) => (
                    <SwiperSlide key={movie.id}>
                        {({ isActive }) => (
                            <div className="relative h-full w-full">
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    <Image
                                        src={movie.backdropUrl}
                                        alt={movie.title}
                                        fill
                                        className={`object-cover transition-transform duration-[10000ms] ease-linear ${isActive ? "scale-105" : "scale-100"}`}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-transparent to-transparent" />
                                </div>

                                {/* Content Container */}
                                <div className="relative h-full section-padding flex flex-col justify-center max-w-4xl z-10">
                                    <AnimatePresence mode="wait">
                                        {isActive && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.8, ease: "easeOut" }}
                                                className="space-y-6"
                                            >
                                                <motion.div
                                                    initial={{ opacity: 0, scale: 0.9 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: 0.2 }}
                                                    className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 backdrop-blur-md border border-primary/20 rounded-full"
                                                >
                                                    <span className="relative flex h-2 w-2">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                                    </span>
                                                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">Featured Release</span>
                                                </motion.div>

                                                <motion.h1
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.3 }}
                                                    className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-tight max-w-3xl"
                                                >
                                                    {movie.title}
                                                </motion.h1>

                                                <motion.div
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.5 }}
                                                    className="flex flex-wrap items-center gap-4 text-gray-300"
                                                >
                                                    <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
                                                        <Star className="text-primary fill-primary" size={16} />
                                                        <span className="text-sm font-black text-white">{movie.rating}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm font-bold">
                                                        <Clock size={16} className="text-primary" />
                                                        <span>{movie.runtime}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm font-bold">
                                                        <Calendar size={16} className="text-primary" />
                                                        <span>{movie.releaseDate}</span>
                                                    </div>
                                                    <span className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-black uppercase tracking-widest border border-white/10">{movie.genres?.[0]}</span>
                                                </motion.div>

                                                <motion.p
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.6 }}
                                                    className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed line-clamp-2"
                                                >
                                                    {movie.description}
                                                </motion.p>

                                                <motion.div
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: 0.7 }}
                                                    className="flex flex-wrap items-center gap-4 pt-2"
                                                >
                                                    <Link
                                                        href={`/event/${movie.slug}#tickets`}
                                                        className="bg-primary hover:bg-white text-black px-8 py-4 rounded-2xl font-black text-sm flex items-center gap-3 transition-all transform hover:scale-105 shadow-glow uppercase tracking-wider"
                                                    >
                                                        <Ticket size={20} />
                                                        Buy Tickets
                                                    </Link>
                                                    <button
                                                        onClick={() => {
                                                            setSelectedTrailerUrl(movie.trailerUrl);
                                                            setSelectedMovieTitle(movie.title);
                                                            setIsTrailerOpen(true);
                                                        }}
                                                        className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold text-sm flex items-center gap-3 border border-white/10 transition-all transform hover:scale-105 uppercase tracking-wider"
                                                    >
                                                        <Play size={20} />
                                                        Watch Trailer
                                                    </button>
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Side Cards - Bottom Right Horizontal Alignment */}
            <div className="absolute right-6 md:right-12 lg:right-24 bottom-12 z-30 hidden xl:flex flex-col items-end gap-3">
                <div className="flex items-center gap-4 mb-1">
                    <div className="h-0.5 w-12 bg-primary rounded-full" />
                    <p className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">Up Next</p>
                </div>
                <div className="flex gap-4">
                    {sideMovies.map((movie, index) => (
                            <motion.div
                            key={movie.id}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 + index * 0.1 }}
                            onClick={() => swiperRef.current?.slideToLoop(index)}
                            className={`group relative w-48 h-28 rounded-[1.5rem] overflow-hidden cursor-pointer border-2 transition-all duration-500 shadow-soft ${activeIndex === index ? "border-primary scale-105 shadow-[0_0_20px_rgba(231,173,4,0.4)]" : "border-white/5 opacity-50 hover:opacity-100 hover:border-white/20"}`}
                        >
                            <Image src={movie.backdropUrl} alt={movie.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex flex-col justify-end p-3.5">
                                <h4 className="text-white text-xs font-black truncate group-hover:text-primary transition-colors">{movie.title}</h4>
                                <div className="flex items-center justify-between mt-1">
                                    <p className="text-gray-400 text-[9px] font-bold tracking-widest uppercase">{movie.releaseDate}</p>
                                    <div className="flex items-center gap-1">
                                        <Star className="text-primary fill-primary" size={8} />
                                        <span className="text-white text-[9px] font-black">{movie.rating}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute left-6 md:left-12 lg:left-24 bottom-10 z-30 flex gap-2">
                {movies.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => swiperRef.current?.slideToLoop(index)}
                        className={`transition-all duration-500 rounded-full h-1.5 ${activeIndex === index ? "w-10 bg-primary" : "w-1.5 bg-white/10 hover:bg-white/30"}`}
                    />
                ))}
            </div>
            <TrailerModal
                isOpen={isTrailerOpen}
                onClose={() => setIsTrailerOpen(false)}
                trailerUrl={selectedTrailerUrl}
                movieTitle={selectedMovieTitle}
            />
        </section>
    );
};

export default HeroSection;
