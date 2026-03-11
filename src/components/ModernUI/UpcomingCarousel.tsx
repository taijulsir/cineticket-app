"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Bell, Calendar, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { UpcomingMovie } from '@/Utilities/mockData/mockMovies';

interface UpcomingCarouselProps {
    movies: UpcomingMovie[];
}

const UpcomingCarousel: React.FC<UpcomingCarouselProps> = ({ movies }) => {
    if (!movies || movies.length === 0) return null;

    return (
        <section className="py-20 px-6 md:px-12 lg:px-24 bg-white/5 relative overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                <div className="space-y-2">
                    <span className="text-primary text-xs font-bold uppercase tracking-widest">Coming Soon</span>
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter">
                        Most Anticipated <br /> Releases
                    </h2>
                </div>
                <button className="group flex items-center gap-2 text-gray-400 hover:text-primary transition-colors font-bold uppercase tracking-widest text-xs">
                    View All Calendar
                    <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1.2}
                navigation
                autoplay={{ delay: 5000 }}
                breakpoints={{
                    640: { slidesPerView: 2.2 },
                    1024: { slidesPerView: 3.2 },
                    1280: { slidesPerView: 4.2 },
                }}
                className="upcoming-swiper !pb-12 overflow-visible"
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <motion.div
                            whileHover={{ y: -10 }}
                            className="group relative bg-[#1a1a1e] rounded-3xl overflow-hidden border border-white/5 transition-all duration-500 hover:border-primary/20"
                        >
                            <div className="aspect-[2/3] relative overflow-hidden">
                                <img
                                    src={movie.posterUrl}
                                    alt={movie.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1e] via-transparent to-transparent opacity-80" />

                                <button className="absolute top-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-2xl border border-white/10 text-white hover:text-primary transition-colors group/btn">
                                    <Bell size={20} className="group-hover/btn:animate-bounce" />
                                </button>

                                <div className="absolute bottom-4 left-4 right-4 space-y-3">
                                    <div className="flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-widest">
                                        <Calendar size={12} />
                                        {movie.releaseDate}
                                    </div>
                                    <h3 className="text-white text-xl font-black leading-tight group-hover:text-primary transition-colors">
                                        {movie.title}
                                    </h3>
                                    <p className="text-gray-400 text-xs font-medium">
                                        {movie.genres?.join(" • ")}
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 bg-black/40 border-t border-white/5">
                                <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-primary hover:text-black text-white font-bold text-xs uppercase tracking-widest transition-all duration-300">
                                    Notify Me
                                </button>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default UpcomingCarousel;
