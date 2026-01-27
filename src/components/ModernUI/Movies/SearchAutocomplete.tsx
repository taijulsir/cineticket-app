"use client";
import React, { useState, useRef, useEffect } from "react";
import { Search, X, Star } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const SearchAutocomplete = ({ movies, searchQuery, setSearchQuery }) => {
    const [isFocused, setIsFocused] = useState(false);
    const wrapperRef = useRef(null);

    const suggestions = searchQuery.length >= 2
        ? movies.filter((m) => {
            const q = searchQuery.toLowerCase();
            const titleMatch = m.title.toLowerCase().includes(q);
            const castMatch = m.cast?.some((c) => c.name.toLowerCase().includes(q));
            return titleMatch || castMatch;
        }).slice(0, 6)
        : [];

    const showDropdown = isFocused && suggestions.length > 0;

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setIsFocused(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={wrapperRef} className="relative flex-1 w-full">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none z-10" size={18} />
            <input
                type="text"
                placeholder="Search by title, actor, director..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsFocused(true)}
                className="w-full bg-black/40 border border-white/10 rounded-2xl py-3.5 pl-12 pr-10 text-white outline-none focus:border-primary/50 transition-all font-semibold text-sm placeholder:text-gray-600"
            />
            {searchQuery && (
                <button
                    onClick={() => { setSearchQuery(""); setIsFocused(false); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                >
                    <X size={16} />
                </button>
            )}

            <AnimatePresence>
                {showDropdown && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-[#1a1a1e] border border-white/10 rounded-2xl overflow-hidden shadow-soft z-50 max-h-[360px] overflow-y-auto"
                    >
                        {suggestions.map((movie) => (
                            <Link
                                key={movie.id}
                                href={`/event/${movie.slug}`}
                                onClick={() => setIsFocused(false)}
                                className="flex items-center gap-3.5 px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-b-0 group"
                            >
                                <img
                                    src={movie.posterUrl}
                                    alt={movie.title}
                                    className="w-10 h-14 object-cover rounded-lg flex-shrink-0"
                                />
                                <div className="flex-1 min-w-0">
                                    <p className="text-white text-sm font-bold truncate group-hover:text-primary transition-colors">
                                        {movie.title}
                                    </p>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <span className="text-gray-500 text-xs">{movie.releaseDate?.split("-")[0]}</span>
                                        <span className="w-1 h-1 bg-white/10 rounded-full" />
                                        <div className="flex items-center gap-1">
                                            <Star size={10} className="text-primary fill-primary" />
                                            <span className="text-gray-400 text-xs font-semibold">{movie.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default SearchAutocomplete;
