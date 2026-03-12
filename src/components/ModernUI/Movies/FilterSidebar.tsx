"use client";
import React from "react";
import { SlidersHorizontal, Layers, Globe, Film, Star, Calendar, RotateCcw } from "lucide-react";

const genres = ["Action", "Adventure", "Animation", "Comedy", "Drama", "Sci-Fi", "Thriller", "Biography", "History", "Crime", "Mystery", "War", "Romance"];
const languages = ["English", "Bangla", "Hindi", "Spanish", "French"];
const formats = ["2D", "3D", "IMAX", "4DX"];
const ratings = [
    { label: "4★ & above", value: 4 },
    { label: "3★ & above", value: 3 },
    { label: "2★ & above", value: 2 },
];
const currentYear = new Date().getFullYear();
const years = [
    String(currentYear),
    String(currentYear - 1),
    String(currentYear - 2),
    "2022",
    "2021",
    "2020",
];

const FilterSidebar = ({ filters, setFilter, onReset, className = "" }) => {
    const {
        selectedGenres = [],
        selectedLanguages = [],
        selectedFormats = [],
        selectedRating = 0,
        selectedYears = [],
    } = filters;

    const toggleArrayFilter = (key, value) => {
        const current = filters[key] || [];
        const next = current.includes(value)
            ? current.filter((v) => v !== value)
            : [...current, value];
        setFilter(key, next);
    };

    return (
        <div className={`bg-white/[0.03] border border-white/[0.06] rounded-[2rem] p-7 shadow-soft flex flex-col gap-8 ${className}`}>
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <SlidersHorizontal size={18} className="text-primary" />
                    <h3 className="text-white font-black uppercase tracking-[0.15em] text-[11px]">Filters</h3>
                </div>
                <button
                    onClick={onReset}
                    className="text-gray-500 hover:text-primary transition-colors"
                    title="Reset all filters"
                >
                    <RotateCcw size={14} />
                </button>
            </div>

            {/* Genre */}
            <FilterSection icon={<Layers size={13} />} label="Genre">
                <div className="flex flex-wrap gap-1.5">
                    {genres.map((g) => (
                        <CheckboxPill
                            key={g}
                            label={g}
                            checked={selectedGenres.includes(g)}
                            onChange={() => toggleArrayFilter("selectedGenres", g)}
                        />
                    ))}
                </div>
            </FilterSection>

            {/* Language */}
            <FilterSection icon={<Globe size={13} />} label="Language">
                <div className="space-y-1">
                    {languages.map((l) => (
                        <CheckboxRow
                            key={l}
                            label={l}
                            checked={selectedLanguages.includes(l)}
                            onChange={() => toggleArrayFilter("selectedLanguages", l)}
                        />
                    ))}
                </div>
            </FilterSection>

            {/* Format */}
            <FilterSection icon={<Film size={13} />} label="Format">
                <div className="flex flex-wrap gap-1.5">
                    {formats.map((f) => (
                        <ToggleButton
                            key={f}
                            label={f}
                            active={selectedFormats.includes(f)}
                            onClick={() => toggleArrayFilter("selectedFormats", f)}
                        />
                    ))}
                </div>
            </FilterSection>

            {/* Rating */}
            <FilterSection icon={<Star size={13} />} label="Rating">
                <div className="space-y-1">
                    {ratings.map((r) => (
                        <button
                            key={r.value}
                            onClick={() => setFilter("selectedRating", selectedRating === r.value ? 0 : r.value)}
                            className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all border ${selectedRating === r.value
                                    ? "bg-primary/10 text-primary border-primary/30"
                                    : "text-gray-400 border-transparent hover:text-white hover:bg-white/5"
                                }`}
                        >
                            {r.label}
                        </button>
                    ))}
                </div>
            </FilterSection>

            {/* Release Year */}
            <FilterSection icon={<Calendar size={13} />} label="Release Year">
                <div className="flex flex-wrap gap-1.5">
                    {years.map((y) => (
                        <ToggleButton
                            key={y}
                            label={y}
                            active={selectedYears.includes(y)}
                            onClick={() => toggleArrayFilter("selectedYears", y)}
                        />
                    ))}
                </div>
            </FilterSection>

            {/* Reset button */}
            <button
                onClick={onReset}
                className="w-full py-3.5 text-[10px] font-black uppercase tracking-[0.15em] text-primary hover:text-black hover:bg-primary transition-all duration-300 border border-white/10 hover:border-primary rounded-xl"
            >
                Reset All Filters
            </button>
        </div>
    );
};

/* ── Tiny helpers ───────────────────────────────────── */

const FilterSection = ({ icon, label, children }) => (
    <div className="space-y-3">
        <div className="flex items-center gap-2 text-gray-500 font-bold uppercase tracking-[0.15em] text-[10px]">
            {icon} {label}
        </div>
        {children}
    </div>
);

const CheckboxPill = ({ label, checked, onChange }) => (
    <button
        onClick={onChange}
        className={`px-3 py-1.5 rounded-lg text-[11px] font-semibold transition-all border ${checked
                ? "bg-primary/15 text-primary border-primary/30"
                : "bg-black/30 text-gray-500 border-white/5 hover:border-white/15 hover:text-gray-300"
            }`}
    >
        {label}
    </button>
);

const CheckboxRow = ({ label, checked, onChange }) => (
    <label className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg cursor-pointer hover:bg-white/5 transition-colors group">
        <div className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all flex-shrink-0 ${checked ? "bg-primary border-primary" : "border-white/20 group-hover:border-white/40"}`}>
            {checked && (
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4L3.5 6.5L9 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )}
        </div>
        <span className={`text-xs font-semibold transition-colors ${checked ? "text-white" : "text-gray-500 group-hover:text-gray-300"}`}>
            {label}
        </span>
    </label>
);

const ToggleButton = ({ label, active, onClick }) => (
    <button
        onClick={onClick}
        className={`px-3.5 py-2 rounded-lg text-[11px] font-bold transition-all border ${active
                ? "bg-primary text-black border-primary shadow-glow"
                : "bg-black/30 text-gray-500 border-white/5 hover:border-white/15 hover:text-gray-300"
            }`}
    >
        {label}
    </button>
);

export default FilterSidebar;
