"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Search, Filter, Calendar, Layers, ChevronDown, Clock, Star } from 'lucide-react';
import Link from 'next/link';
import { Movie, mockMovies } from '@/Utilities/mockData/mockMovies';

interface Option {
    label: string;
    value: string;
}

interface CustomSelectProps {
    icon: React.ElementType;
    label: string;
    options: Option[];
    value: string;
    onChange: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ icon: Icon, label, options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectedOption = options.find(o => o.value === value);

    return (
        <div className="space-y-2 relative" ref={dropdownRef}>
            <label className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] ml-1">
                {label}
            </label>
            <div
                className={`relative group cursor-pointer w-full bg-black/40 border ${isOpen ? 'border-primary' : 'border-white/10'} rounded-2xl py-4 pl-12 pr-10 text-white font-bold transition-all shadow-glow flex items-center select-none`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <Icon className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isOpen ? 'text-primary' : 'text-gray-500 group-hover:text-primary'}`} size={18} />
                <span className="truncate">{selectedOption ? selectedOption.label : `All ${label}s`}</span>
                <ChevronDown className={`absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 transition-transform ${isOpen ? 'rotate-180 text-primary' : ''}`} size={16} />
            </div>

            {isOpen && (
                <div className="absolute z-50 w-full mt-2 bg-[#1a1c23]/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.8)] origin-top animate-in fade-in zoom-in-95 duration-200">
                    <div className="max-h-60 overflow-y-auto custom-scrollbar py-2 border-l-2 border-primary">
                        {options.map((option, idx) => (
                            <div
                                key={idx}
                                className={`px-4 py-3 hover:bg-white/10 cursor-pointer transition-colors text-sm font-bold flex items-center gap-2 ${value === option.value ? 'text-primary' : 'text-gray-300 hover:text-white'}`}
                                onClick={() => {
                                    onChange(option.value);
                                    setIsOpen(false);
                                }}
                            >
                                {value === option.value && <div className="w-1.5 h-1.5 rounded-full bg-primary" />}
                                <span className={value === option.value ? '' : 'pl-3'}>{option.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

interface SearchBarProps {
    movies?: Movie[];
}

const SearchBar: React.FC<SearchBarProps> = ({ movies = mockMovies }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [searchResults, setSearchResults] = useState<Movie[]>([]);

    const [genre, setGenre] = useState("");
    const [date, setDate] = useState("");
    const [format, setFormat] = useState("");

    const searchRef = useRef<HTMLDivElement>(null);

    const genres = [
        { label: "All Genres", value: "" },
        { label: "Action", value: "Action" },
        { label: "Sci-Fi", value: "Sci-Fi" },
        { label: "Drama", value: "Drama" },
        { label: "Comedy", value: "Comedy" },
        { label: "Horror", value: "Horror" },
        { label: "Adventure", value: "Adventure" },
        { label: "Thriller", value: "Thriller" },
        { label: "Crime", value: "Crime" },
        { label: "Historical", value: "Historical" },
        { label: "Mystery", value: "Mystery" },
        { label: "War", value: "War" },
        { label: "Romance", value: "Romance" },
    ];

    const currentYear = new Date().getFullYear();
    const years = [
        { label: "All Years", value: "" },
        { label: String(currentYear), value: String(currentYear) },
        { label: String(currentYear - 1), value: String(currentYear - 1) },
        { label: String(currentYear - 2), value: String(currentYear - 2) },
    ];

    const formats = [
        { label: "All Formats", value: "" },
        { label: "2D Standard", value: "2D" },
        { label: "3D Experience", value: "3D" },
        { label: "IMAX 2D", value: "IMAX" },
        { label: "4DX", value: "4DX" }
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchFocused(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    useEffect(() => {
        const normalizedQuery = searchQuery.trim().toLowerCase();
        
        const filtered = movies.filter(m => {
            const matchesSearch = !normalizedQuery || m.title.toLowerCase().includes(normalizedQuery);
            
            const movieGenres = Array.isArray(m.genres) ? m.genres : [];
            const matchesGenre = !genre || movieGenres.some(g => g.toLowerCase() === genre.toLowerCase());
            
            const movieYear = m.releaseDate ? String(m.releaseDate).split('-')[0] : "";
            const matchesYear = !date || movieYear === date;

            const matchesFormat = !format || 
                (m.format && m.format.toLowerCase().includes(format.toLowerCase())) || 
                (m.category && m.category.toLowerCase().includes(format.toLowerCase()));
            
            return matchesSearch && matchesGenre && matchesYear && matchesFormat;
        });

        if (normalizedQuery || genre || date || format) {
            setSearchResults(filtered.slice(0, 4));
        } else {
            setSearchResults([]);
        }
        
    }, [searchQuery, genre, date, format, movies]);

    return (
        <div className="w-full">
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-6 md:p-8 rounded-[2rem] shadow-soft relative z-30">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Search Input with Autocomplete */}
                    <div className="space-y-2 relative" ref={searchRef}>
                        <label className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] ml-1">
                            Search Movie
                        </label>
                        <div className="relative group">
                            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${isSearchFocused || searchQuery ? 'text-primary' : 'text-gray-500 group-focus-within:text-primary'}`} size={18} />
                            <input
                                type="text"
                                placeholder="Search by title..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setIsSearchFocused(true)}
                                className={`w-full bg-black/40 border ${isSearchFocused ? 'border-primary' : 'border-white/10'} rounded-2xl py-4 pl-12 pr-4 text-white font-bold placeholder:text-gray-600 focus:outline-none transition-all shadow-glow`}
                            />
                        </div>

                        {/* Autocomplete Dropdown */}
                        {isSearchFocused && searchQuery.length > 0 && (
                            <div className="absolute top-[85px] left-0 w-full md:w-[200%] lg:w-[150%] xl:w-[400px] z-50 bg-[#1a1c23]/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] origin-top animate-in fade-in slide-in-from-top-4 duration-300">
                                <div className="p-2 space-y-1">
                                    <div className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-primary border-b border-white/5 mb-2">
                                        Top Matches
                                    </div>
                                    {searchResults.length > 0 ? (
                                        searchResults.map((movie) => (
                                            <Link
                                                key={movie.id}
                                                href={`/event/${movie.slug}`}
                                                className="flex items-center gap-4 p-3 hover:bg-white/10 rounded-xl transition-colors group"
                                            >
                                                <img src={movie.posterUrl} alt={movie.title} className="w-12 h-16 object-cover rounded-lg shadow-sm border border-white/5 group-hover:border-primary/30 transition-colors" />
                                                <div className="flex-1 min-w-0">
                                                    <h4 className="text-white text-sm font-black truncate group-hover:text-primary transition-colors">{movie.title}</h4>
                                                    <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-500 font-bold">
                                                        <span>{movie.releaseDate?.split(' ')[2] || movie.releaseDate}</span>
                                                        <span className="w-1 h-1 rounded-full bg-white/10"></span>
                                                        <div className="flex items-center gap-1">
                                                            <Star size={10} className="text-primary fill-primary" />
                                                            <span className="text-gray-400">{movie.rating}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))
                                    ) : (
                                        <div className="p-6 text-center">
                                            <p className="text-gray-500 font-bold text-sm">No movies found for "{searchQuery}"</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Genre Custom Dropdown */}
                    <CustomSelect
                        icon={Filter}
                        label="Genre"
                        options={genres}
                        value={genre}
                        onChange={setGenre}
                    />

                    {/* Year Custom Dropdown */}
                    <CustomSelect
                        icon={Calendar}
                        label="Release Year"
                        options={years}
                        value={date}
                        onChange={setDate}
                    />

                    {/* Format Custom Dropdown */}
                    <CustomSelect
                        icon={Layers}
                        label="Format"
                        options={formats}
                        value={format}
                        onChange={setFormat}
                    />
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
