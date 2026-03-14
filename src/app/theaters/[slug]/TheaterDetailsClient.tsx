"use client";
import React, { useState, useEffect } from "react";
import { 
    MapPin, 
    Info, 
    Layers, 
    Film, 
    Coffee, 
    Wind, 
    Smartphone, 
    Tv, 
    ChevronRight,
    Calendar,
    Clock,
    Ticket
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cineticketApi } from "@/lib/cineticketApi";

/* ── Asset Mappings ────────────────────────────────── */
const amenityIcons: Record<string, any> = {
    "Cafe": Coffee,
    "Food": Coffee,
    "AC": Wind,
    "Mobile Entry": Smartphone,
    "IMAX": Tv,
    "Parking": MapPin,
};

const formatColors: Record<string, string> = {
    "2D": "bg-blue-500/10 text-blue-400 border-blue-500/20",
    "3D": "bg-purple-500/10 text-purple-400 border-purple-500/20",
    "IMAX": "bg-primary/10 text-primary border-primary/20",
    "4DX": "bg-red-500/10 text-red-400 border-red-500/20",
};

/* ── Theater Details Client Component ──────────────── */
export default function TheaterDetailsClient({ initialTheater }: { initialTheater: any }) {
    const [theater] = useState(initialTheater);
    const [shows, setShows] = useState<any[]>([]);
    const [isLoadingShows, setIsLoadingShows] = useState(true);

    useEffect(() => {
        const fetchShows = async () => {
            try {
                const res = await (cineticketApi as any).getTheaterShows(theater.id);
                setShows(res || []);
            } catch (error) {
                console.error("Failed to fetch theater shows:", error);
            } finally {
                setIsLoadingShows(false);
            }
        };
        fetchShows();
    }, [theater.id]);

    // Group shows by movie
    const groupedByMovie = shows.reduce((acc: any, show: any) => {
        const movieId = show.event.id;
        if (!acc[movieId]) {
            acc[movieId] = {
                event: show.event,
                times: []
            };
        }
        acc[movieId].times.push(show);
        return acc;
    }, {});

    return (
        <main className="min-h-screen bg-background pb-32">
            {/* ── Hero / Header ─────────────────────────── */}
            <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
                <div className="absolute inset-0">
                    <img 
                        src={theater.images?.[0] || 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop'} 
                        alt={theater.name}
                        className="w-full h-full object-cover brightness-[0.3]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                </div>

                <div className="container relative z-10 h-full flex flex-col justify-end px-6 pb-16 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex flex-wrap gap-2 mb-6">
                            {theater.formats?.map((f: string) => (
                                <span key={f} className={`px-3 py-1 rounded-full border text-[10px] font-black uppercase tracking-widest ${formatColors[f] || 'bg-white/10 text-white border-white/10'}`}>
                                    {f}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter mb-4">
                            {theater.name}
                        </h1>
                        <div className="flex items-center gap-2 text-gray-400 font-medium text-sm md:text-base">
                            <MapPin size={18} className="text-primary" />
                            {theater.address}, {theater.city?.name}
                        </div>
                    </motion.div>
                </div>
            </section>

            <div className="container px-6 mx-auto mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                    {/* ── Left Side: Showtimes ──────────────── */}
                    <div className="lg:col-span-2 space-y-16">
                        <section id="showtimes">
                            <div className="flex items-center justify-between mb-8">
                                <h2 className="text-3xl font-black text-white tracking-tight">Now Playing</h2>
                                <div className="hidden md:flex items-center gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                                    <span className="flex items-center gap-1.5"><Calendar size={14} /> Today</span>
                                    <span className="flex items-center gap-1.5"><Clock size={14} /> Local Time</span>
                                </div>
                            </div>

                            {isLoadingShows ? (
                                <div className="space-y-6">
                                    {[1, 2, 3].map(i => <div key={i} className="h-48 bg-white/5 rounded-3xl animate-pulse" />)}
                                </div>
                            ) : Object.keys(groupedByMovie).length > 0 ? (
                                <div className="space-y-8">
                                    {Object.values(groupedByMovie).map((group: any) => (
                                        <motion.div 
                                            key={group.event.id}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            className="bg-white/[0.02] border border-white/[0.05] rounded-[2.5rem] p-6 md:p-8 hover:border-primary/20 transition-all group"
                                        >
                                            <div className="flex flex-col md:flex-row gap-8">
                                                <div className="w-full md:w-32 aspect-[2/3] rounded-2xl overflow-hidden flex-shrink-0 shadow-2xl">
                                                    <img src={group.event.cardImage} alt={group.event.name} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-black text-white mb-2 group-hover:text-primary transition-colors italic uppercase tracking-tight">
                                                        {group.event.name}
                                                    </h3>
                                                    <div className="flex flex-wrap gap-4 text-xs font-bold text-gray-500 uppercase mb-8">
                                                        <span className="px-2 py-1 rounded bg-white/5">2D</span>
                                                        <span className="px-2 py-1 rounded bg-white/5">English</span>
                                                        <span className="flex items-center gap-1 text-primary"><Ticket size={14} /> Fast Filling</span>
                                                    </div>
                                                    
                                                    <div className="flex flex-wrap gap-3">
                                                        {group.times.map((show: any) => (
                                                            <Link 
                                                                key={show.id}
                                                                href={`/event/${group.event.slug}`}
                                                                className="px-6 py-3 rounded-xl bg-white/5 border border-white/5 hover:border-primary hover:bg-primary hover:text-black text-white text-sm font-black transition-all"
                                                            >
                                                                {show.startTime}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            ) : (
                                <div className="py-20 text-center bg-white/[0.02] rounded-[3rem] border border-dashed border-white/10">
                                    <h3 className="text-xl font-bold text-gray-500">No shows scheduled for today</h3>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* ── Right Side: Info & Amenities ──────── */}
                    <div className="space-y-12">
                        <section className="bg-white/[0.03] border border-white/[0.06] rounded-[2.5rem] p-8">
                            <h3 className="text-xl font-black text-white mb-8 uppercase tracking-widest flex items-center gap-3">
                                <div className="w-1.5 h-5 bg-primary rounded-full" />
                                Theater Info
                            </h3>
                            
                            <div className="space-y-8">
                                <div>
                                    <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest block mb-2">Description</label>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {theater.description || "Experience cinema at its finest with state-of-the-art projection and sound systems."}
                                    </p>
                                </div>

                                <div>
                                    <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest block mb-4">Amenities</label>
                                    <div className="grid grid-cols-2 gap-4">
                                        {theater.amenities?.map((am: string) => {
                                            const Icon = amenityIcons[am] || Layers;
                                            return (
                                                <div key={am} className="flex items-center gap-3 text-gray-400">
                                                    <div className="p-2 rounded-lg bg-white/5 text-primary">
                                                        <Icon size={16} />
                                                    </div>
                                                    <span className="text-xs font-bold">{am}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/5">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="text-gray-500 font-bold uppercase tracking-widest text-[10px]">Total Screens</span>
                                        <span className="text-white font-black">{theater.halls?.length || 0} Halls</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
