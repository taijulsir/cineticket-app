"use client";
import React, { useState, useEffect, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, SortAsc, ChevronDown, Film, Sparkles } from "lucide-react";
import MovieCard from "@/components/ModernUI/MovieCard";
import { Movie, mockMovies, upcomingMovies } from "@/Utilities/mockData/mockMovies";
import { motion, AnimatePresence } from "framer-motion";

import SearchAutocomplete from "@/components/ModernUI/Movies/SearchAutocomplete";
import FilterSidebar from "@/components/ModernUI/Movies/FilterSidebar";
import MobileFilterDrawer from "@/components/ModernUI/Movies/MobileFilterDrawer";
import SkeletonMovieCard from "@/components/ModernUI/Movies/SkeletonMovieCard";
import EmptyState from "@/components/ModernUI/Movies/EmptyState";

/* ── Merge all movies into one browsable list ──────── */
const allMovies: Movie[] = [
    ...mockMovies,
    ...upcomingMovies.map((m) => ({
        ...m,
        category: "Coming Soon",
        rating: m.rating || "0",
        runtime: m.runtime || "TBA",
        language: (m as any).language || "English",
        format: (m as any).format || "2D",
        isTrending: false,
        isTopRated: false,
        slug: (m as any).slug || m.title.toLowerCase().replace(/ /g, "-"),
        cast: (m as any).cast || [],
        shows: [],
        description: m.description || ""
    } as Movie)),
];

interface FilterState {
    selectedGenres: string[];
    selectedLanguages: string[];
    selectedFormats: string[];
    selectedRating: number;
    selectedYears: string[];
}

/* ── Default filter state ──────────────────────────── */
const defaultFilters: FilterState = {
    selectedGenres: [],
    selectedLanguages: [],
    selectedFormats: [],
    selectedRating: 0,
    selectedYears: [],
};

/* ── Inner page (needs useSearchParams inside Suspense) */
function MoviesPageInner() {
    const searchParams = useSearchParams();
    const initialStatus = searchParams.get("filter");

    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("Popularity");
    const [statusFilter, setStatusFilter] = useState(
        initialStatus === "coming-soon" ? "Coming Soon" : initialStatus === "now-showing" ? "Now Showing" : "All"
    );
    const [filters, setFilters] = useState(defaultFilters);
    const [isLoading, setIsLoading] = useState(true);
    const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

    /* Simulate initial load */
    useEffect(() => {
        const t = setTimeout(() => setIsLoading(false), 600);
        return () => clearTimeout(t);
    }, []);

    /* Single filter setter */
    const setFilter = (key: keyof FilterState, value: any) => setFilters((prev) => ({ ...prev, [key]: value }));
    const resetFilters = () => {
        setFilters(defaultFilters);
        setSearchQuery("");
        setStatusFilter("All");
        setSortBy("Popularity");
    };

    /* ── Derived filtered & sorted list ────────────── */
    const filteredMovies = useMemo(() => {
        let result = [...allMovies];

        // Search (title + cast)
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            result = result.filter((m: Movie) => {
                const titleMatch = m.title.toLowerCase().includes(q);
                const castMatch = m.cast?.some((c: any) => c.name.toLowerCase().includes(q));
                return titleMatch || castMatch;
            });
        }

        // Status
        if (statusFilter === "Now Showing") {
            result = result.filter((m) => m.category === "Now Showing");
        } else if (statusFilter === "Coming Soon") {
            result = result.filter((m) => m.category === "Coming Soon");
        }

        // Genres (OR)
        if (filters.selectedGenres.length) {
            result = result.filter((m) => m.genres?.some((g) => filters.selectedGenres.includes(g)));
        }

        // Languages (OR)
        if (filters.selectedLanguages.length) {
            result = result.filter((m) => filters.selectedLanguages.includes(m.language));
        }

        // Formats (OR)
        if (filters.selectedFormats.length) {
            result = result.filter((m) => filters.selectedFormats.some((f) => m.format?.includes(f)));
        }

        // Rating
        if (filters.selectedRating > 0) {
            result = result.filter((m) => parseFloat(m.rating) >= filters.selectedRating);
        }

        // Years (OR)
        if (filters.selectedYears.length) {
            result = result.filter((m) => filters.selectedYears.includes(m.releaseDate?.split("-")[0]));
        }

        // Sort
        switch (sortBy) {
            case "Rating":
                result.sort((a: Movie, b: Movie) => parseFloat(b.rating) - parseFloat(a.rating));
                break;
            case "Newest":
                result.sort((a: Movie, b: Movie) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime());
                break;
            case "A-Z":
                result.sort((a: Movie, b: Movie) => a.title.localeCompare(b.title));
                break;
            default: // Popularity — trending first, then by rating
                result.sort((a: Movie, b: Movie) => (b.isTrending ? 1 : 0) - (a.isTrending ? 1 : 0) || parseFloat(b.rating) - parseFloat(a.rating));
        }

        return result;
    }, [searchQuery, statusFilter, filters, sortBy]);

    /* Count active filters for badge */
    const activeFilterCount = filters.selectedGenres.length + filters.selectedLanguages.length + filters.selectedFormats.length + filters.selectedYears.length + (filters.selectedRating > 0 ? 1 : 0);

    return (
        <main className="min-h-screen bg-[#0b0b0f]">
            {/* ── Cinematic Hero Header ───────────────── */}
            <div
                className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] bg-cover bg-center overflow-hidden"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop')`,
                }}
            >
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0f]/70 via-[#0b0b0f]/40 to-[#0b0b0f]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0f]/80 via-transparent to-[#0b0b0f]/80" />

                {/* Grain / texture */}
                <div className="absolute inset-0 bg-[#0b0b0f]/10 mix-blend-overlay" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-end pb-10 md:pb-14 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="space-y-4"
                    >
                        {/* Tag */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.15 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full"
                        >
                            <Film size={14} className="text-primary" />
                            <span className="text-white text-[10px] font-black uppercase tracking-[0.25em]">Movie Discovery</span>
                        </motion.div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.95]">
                            Browse{" "}
                            <span className="relative inline-block">
                                <span className="text-primary">Movies</span>
                                <Sparkles size={18} className="absolute -top-2 -right-5 text-primary/60 animate-pulse" />
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-gray-400 text-sm md:text-base font-medium max-w-xl leading-relaxed">
                            Discover the latest blockbusters, timeless classics, and upcoming releases — all in one place.
                        </p>

                        {/* Stats row */}
                        <div className="flex items-center gap-6 pt-1">
                            <div className="flex items-center gap-2">
                                <span className="text-primary text-lg md:text-xl font-black">{allMovies.length}</span>
                                <span className="text-gray-500 text-xs font-semibold uppercase tracking-wide">Movies</span>
                            </div>
                            <div className="w-px h-4 bg-white/10" />
                            <div className="flex items-center gap-2">
                                <span className="text-primary text-lg md:text-xl font-black">{allMovies.filter(m => m.category === "Now Showing").length}</span>
                                <span className="text-gray-500 text-xs font-semibold uppercase tracking-wide">Now Showing</span>
                            </div>
                            <div className="w-px h-4 bg-white/10" />
                            <div className="flex items-center gap-2">
                                <span className="text-primary text-lg md:text-xl font-black">{allMovies.filter(m => m.category === "Coming Soon").length}</span>
                                <span className="text-gray-500 text-xs font-semibold uppercase tracking-wide">Coming Soon</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Page Body ───────────────────────────── */}
            <div className="px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pb-20">

                {/* ── Top Sticky Toolbar ────────────────────── */}
                <div className="sticky top-[72px] z-40 -mx-4 md:-mx-8 lg:-mx-12 xl:-mx-16 2xl:-mx-20 px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-3 bg-[#0b0b0f]/80 backdrop-blur-2xl border-b border-white/5">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                        {/* Search */}
                        <SearchAutocomplete
                            movies={allMovies}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                        />

                        <div className="flex items-center gap-2 flex-shrink-0 flex-wrap">
                            {/* Status Toggle */}
                            <div className="flex items-center bg-white/[0.04] p-1 border border-white/[0.06] rounded-xl">
                                {["All", "Now Showing", "Coming Soon"].map((status) => (
                                    <button
                                        key={status}
                                        onClick={() => setStatusFilter(status)}
                                        className={`px-3 md:px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-tight transition-all whitespace-nowrap ${statusFilter === status ? "bg-primary text-black shadow-glow" : "text-gray-500 hover:text-white"}`}
                                    >
                                        {status}
                                    </button>
                                ))}
                            </div>

                            {/* Sort */}
                            <div className="relative flex-shrink-0">
                                <SortAsc className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
                                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={14} />
                                <select
                                    value={sortBy}
                                    onChange={(e) => setSortBy(e.target.value)}
                                    className="bg-white/[0.04] border border-white/[0.06] text-white py-2.5 pl-9 pr-8 rounded-xl appearance-none outline-none focus:border-primary/40 transition-all font-bold text-xs cursor-pointer"
                                >
                                    <option value="Popularity">Popularity</option>
                                    <option value="Rating">Top Rated</option>
                                    <option value="Newest">Newest</option>
                                    <option value="A-Z">A → Z</option>
                                </select>
                            </div>

                            {/* Mobile filter toggle */}
                            <button
                                onClick={() => setMobileFilterOpen(true)}
                                className="lg:hidden flex items-center gap-2 bg-white/[0.04] border border-white/[0.06] text-white px-4 py-2.5 rounded-xl font-bold text-xs transition-all hover:border-primary/40 relative"
                            >
                                <SlidersHorizontal size={14} />
                                <span className="hidden sm:inline">Filters</span>
                                {activeFilterCount > 0 && (
                                    <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-primary text-black text-[9px] font-black rounded-full flex items-center justify-center">
                                        {activeFilterCount}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Active filter pills (visible on desktop) */}
                    {activeFilterCount > 0 && (
                        <div className="hidden lg:flex items-center gap-2 mt-3 flex-wrap">
                            <span className="text-gray-600 text-[10px] font-bold uppercase tracking-widest mr-1">Active:</span>
                            {filters.selectedGenres.map((g) => (
                                <ActivePill key={g} label={g} onRemove={() => setFilter("selectedGenres", filters.selectedGenres.filter((v) => v !== g))} />
                            ))}
                            {filters.selectedLanguages.map((l) => (
                                <ActivePill key={l} label={l} onRemove={() => setFilter("selectedLanguages", filters.selectedLanguages.filter((v) => v !== l))} />
                            ))}
                            {filters.selectedFormats.map((f) => (
                                <ActivePill key={f} label={f} onRemove={() => setFilter("selectedFormats", filters.selectedFormats.filter((v) => v !== f))} />
                            ))}
                            {filters.selectedYears.map((y) => (
                                <ActivePill key={y} label={y} onRemove={() => setFilter("selectedYears", filters.selectedYears.filter((v) => v !== y))} />
                            ))}
                            {filters.selectedRating > 0 && (
                                <ActivePill label={`${filters.selectedRating}★+`} onRemove={() => setFilter("selectedRating", 0)} />
                            )}
                            <button onClick={resetFilters} className="text-primary text-[10px] font-black uppercase tracking-widest hover:text-white transition-colors ml-2">
                                Clear all
                            </button>
                        </div>
                    )}
                </div>

                {/* ── Two-Column Layout ──────────────────── */}
                <div className="flex gap-8 mt-8">
                    {/* Sidebar — desktop only */}
                    <aside className="hidden lg:block w-72 xl:w-80 flex-shrink-0">
                        <div className="sticky top-[170px] max-h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide">
                            <FilterSidebar
                                filters={filters}
                                setFilter={setFilter}
                                onReset={resetFilters}
                            />
                        </div>
                    </aside>

                    {/* Main Grid */}
                    <div className="flex-1 min-w-0">
                        {/* Result count */}
                        <div className="flex items-center justify-between mb-6">
                            <p className="text-gray-500 text-xs font-semibold">
                                Showing <span className="text-white font-bold">{filteredMovies.length}</span> movie{filteredMovies.length !== 1 ? "s" : ""}
                            </p>
                        </div>

                        {/* Loading skeleton */}
                        {isLoading ? (
                            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                                {Array.from({ length: 8 }).map((_, i) => (
                                    <SkeletonMovieCard key={i} />
                                ))}
                            </div>
                        ) : filteredMovies.length === 0 ? (
                            <EmptyState onReset={resetFilters} />
                        ) : (
                            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                                <AnimatePresence mode="popLayout">
                                    {filteredMovies.map((movie, index) => (
                                        <motion.div
                                            key={movie.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.3) }}
                                            layout
                                            className="h-full"
                                        >
                                            <MovieCard movie={movie} />
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        )}
                    </div>
                </div>

                {/* ── Mobile Filter Drawer ──────────────── */}
                <MobileFilterDrawer
                    isOpen={mobileFilterOpen}
                    onClose={() => setMobileFilterOpen(false)}
                    filters={filters}
                    setFilter={setFilter}
                    onReset={resetFilters}
                    resultCount={filteredMovies.length}
                />

            </div>{/* end .px-4 page body wrapper */}
        </main>
    );
}

/* ── Active filter pill helper ─────────────────────── */
interface ActivePillProps {
    label: string;
    onRemove: () => void;
}

function ActivePill({ label, onRemove }: ActivePillProps) {
    return (
        <button
            onClick={onRemove}
            className="flex items-center gap-1.5 bg-primary/10 text-primary border border-primary/20 px-2.5 py-1 rounded-lg text-[10px] font-bold hover:bg-primary/20 transition-all group"
        >
            {label}
            <span className="text-primary/50 group-hover:text-primary">✕</span>
        </button>
    );
}

/* ── Page wrapper with Suspense for useSearchParams ── */
const MoviesPage = () => {
    return (
        <Suspense fallback={
            <main className="min-h-screen bg-[#0b0b0f]">
                {/* Hero skeleton */}
                <div className="w-full h-[320px] sm:h-[380px] md:h-[420px] bg-gradient-to-b from-gray-800/20 to-[#0b0b0f] animate-pulse" />
                <div className="px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20 pb-20">
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mt-8">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <SkeletonMovieCard key={i} />
                        ))}
                    </div>
                </div>
            </main>
        }>
            <MoviesPageInner />
        </Suspense>
    );
};

export default MoviesPage;
