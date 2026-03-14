"use client";
import React, { useState, useEffect } from "react";
import { Sparkles, Calendar, MapPin, Clock, ArrowRight, Ticket, Film, Play, Info } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { cineticketApi } from "@/lib/cineticketApi";
import Image from "next/image";

const HERO_BG = "https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=2074&auto=format&fit=crop";

export default function EventsPage() {
    const [events, setEvents] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeCategory, setActiveCategory] = useState("All Events");

    const CATEGORIES = [
      "All Events", 
      "Premieres", 
      "Fan Screenings", 
      "Film Festivals", 
      "Marathons", 
      "Director Q&A"
    ];

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                // Adjust filter parameter if schema supports it
                const res = await cineticketApi.getEvents({ limit: 30 });
                setEvents(res.data || []);
            } catch (error) {
                console.error("Failed to fetch events:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchEvents();
    }, []);

    const filteredEvents = events.filter(e => {
        if (activeCategory === "All Events") return true;
        return e.type === activeCategory || (e.genres && e.genres.includes(activeCategory));
    });

    const featuredEvent = filteredEvents[0];
    const gridEvents = filteredEvents.slice(1);

    return (
        <main className="min-h-screen bg-[#0b0b0f] text-white">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-[#0b0b0f]/80 to-transparent z-10" />
                    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent z-10 opacity-70" />
                    <Image src={HERO_BG} alt="Events Hero" fill className="object-cover blur-[2px] opacity-40 mix-blend-luminosity" priority />
                </div>
                
                <div className="container relative z-20 px-4 md:px-8 mx-auto text-center max-w-7xl">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-md">
                            <Sparkles className="text-primary w-4 h-4" />
                            <span className="text-primary text-[11px] font-black uppercase tracking-[0.2em]">Exclusive Experiences</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tighter mb-6">
                            Special Cinema <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-600">Events</span>
                        </h1>
                        <p className="text-gray-400 text-base md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                            Discover premieres, fan screenings, director Q&As, and exclusive cinema experiences you won't find anywhere else.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* EVENT CATEGORY FILTERS */}
            <section className="sticky top-[80px] z-40 bg-[#0b0b0f]/90 backdrop-blur-2xl border-b border-white/5 py-4">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    <div className="flex items-center gap-3 overflow-x-auto hide-scrollbar pb-2 md:pb-0">
                        {CATEGORIES.map(category => (
                            <button 
                              key={category}
                              onClick={() => setActiveCategory(category)}
                              className={`px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all ${
                                  activeCategory === category 
                                  ? "bg-primary text-black shadow-glow scale-105" 
                                  : "bg-white/5 text-gray-400 border border-white/5 hover:border-white/20 hover:text-white"
                              }`}
                            >
                              {category}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-8 max-w-7xl py-16 md:py-24 space-y-20">
                {isLoading ? (
                     <div className="space-y-16">
                         <div className="w-full h-[500px] bg-white/5 rounded-[3rem] animate-pulse" />
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                             {[1,2,3].map(i => <div key={i} className="bg-white/5 border border-white/5 rounded-[2rem] h-[480px] animate-pulse" />)}
                         </div>
                     </div>
                ) : filteredEvents.length > 0 ? (
                    <>
                        {/* FEATURED EVENT SECTION */}
                        {featuredEvent && (
                            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative bg-white/5 border border-white/10 rounded-[3rem] overflow-hidden group">
                                <div className="absolute inset-0">
                                    <Image src={featuredEvent.bannerImage || featuredEvent.cardImage || HERO_BG} alt={featuredEvent.name} fill className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-[#0b0b0f]/80 to-transparent" />
                                    <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0f] via-[#0b0b0f]/50 to-transparent" />
                                </div>
                                
                                <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-end justify-between gap-8 h-full min-h-[500px]">
                                    <div className="max-w-2xl">
                                        <div className="inline-block px-4 py-2 bg-primary text-black text-[10px] font-black uppercase tracking-widest rounded-xl mb-6 shadow-glow">
                                            Featured Event
                                        </div>
                                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">{featuredEvent.name}</h2>
                                        
                                        <div className="flex flex-wrap items-center gap-6 text-sm font-bold uppercase tracking-widest text-gray-300 mb-8">
                                            <span className="flex items-center gap-2"><Calendar size={16} className="text-primary"/> {new Date(featuredEvent.releaseDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                                            <span className="flex items-center gap-2"><Clock size={16} className="text-primary"/> {featuredEvent.duration || "2h 30m"}</span>
                                            <span className="flex items-center gap-2"><MapPin size={16} className="text-primary"/> {featuredEvent.location || "Multiple Theaters"}</span>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-4">
                                            <Link href={`/events/${featuredEvent.slug || featuredEvent.id}`} className="px-8 py-4 bg-primary text-black font-black uppercase tracking-widest rounded-2xl hover:scale-105 transition-transform shadow-glow flex items-center gap-2 text-sm">
                                                <Ticket size={18} /> Book Event
                                            </Link>
                                            <Link href={`/events/${featuredEvent.slug || featuredEvent.id}`} className="px-8 py-4 bg-white/10 text-white font-black uppercase tracking-widest rounded-2xl hover:bg-white/20 transition-colors border border-white/10 flex items-center gap-2 text-sm">
                                                <Info size={18} /> View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* EVENT CARD GRID */}
                        {gridEvents.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                                {gridEvents.map(event => (
                                    <motion.div key={event.id} whileHover={{ y: -8, scale: 1.01 }} className="group flex flex-col bg-white/[0.02] border border-white/10 rounded-[2rem] overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#121216]">
                                            <Image src={event.cardImage || HERO_BG} alt={event.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-transparent to-transparent" />
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
                                                    {event.type || "Special Event"}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="p-6 flex-1 flex flex-col bg-gradient-to-t from-[#0b0b0f] to-[#0b0b0f]/90">
                                            <h3 className="text-xl font-black text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">{event.name}</h3>
                                            
                                            <div className="space-y-2 mb-8">
                                                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                                                    <Calendar size={14} className="text-primary/70" />
                                                    {new Date(event.releaseDate).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}
                                                </div>
                                                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
                                                    <MapPin size={14} className="text-primary/70" />
                                                    {event.location || "Select Theaters"}
                                                </div>
                                            </div>

                                            <div className="mt-auto grid grid-cols-2 gap-3">
                                                <Link href={`/events/${event.slug || event.id}`} className="flex items-center justify-center gap-2 py-3.5 bg-white/5 border border-white/10 text-white rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all">
                                                    Details
                                                </Link>
                                                <Link href={`/events/${event.slug || event.id}`} className="flex items-center justify-center gap-2 py-3.5 bg-primary text-black rounded-xl text-[10px] font-black uppercase tracking-widest hover:scale-[1.02] shadow-glow transition-all">
                                                    Reserve
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-32 text-center bg-white/5 border border-dashed border-white/10 rounded-[3rem] max-w-3xl mx-auto">
                        <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                            <Film size={40} className="text-primary" />
                        </div>
                        <h3 className="text-2xl font-black uppercase tracking-widest mb-3">No Events Found</h3>
                        <p className="text-gray-400 font-medium max-w-md mx-auto mb-8">We couldn't find any events matching your filter. Browse our regular showtimes instead.</p>
                        <Link href="/movies" className="px-8 py-4 bg-primary text-black text-sm font-black uppercase tracking-widest rounded-2xl shadow-glow hover:scale-105 transition-transform">
                            Browse Movies
                        </Link>
                    </motion.div>
                )}
            </div>
        </main>
    );
}