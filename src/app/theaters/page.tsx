"use client";
import React, { useState, useEffect } from "react";
import { MapPin, Search, ChevronDown, Filter, Film, MonitorPlay, Speaker, Armchair, Coffee, Info, ArrowRight, Play, Star, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cineticketApi } from "@/lib/cineticketApi";
import Image from "next/image";

// Placeholder Images
const HERO_BG = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop";

export default function TheatersPage() {
    const [theaters, setTheaters] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [activeFormat, setActiveFormat] = useState("All");

    useEffect(() => {
        const fetchTheaters = async () => {
            try {
                const res = await (cineticketApi as any).getTheaters();
                setTheaters(res.data || []);
            } catch (error) {
                console.error("Failed to fetch theaters:", error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchTheaters();
    }, []);

    const FORMATS = ["All", "2D", "3D", "IMAX", "Dolby Atmos"];
    const AMENITIES = [
      { name: "Dolby Atmos", icon: Speaker },
      { name: "Premium Recliners", icon: Armchair },
      { name: "Food Court", icon: Coffee }
    ];

    const filteredTheaters = theaters.filter(t => {
        if (searchQuery && !t.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
        
        if (activeFormat !== "All") {
            const isFormat = t.formats?.includes(activeFormat);
            const isAmenity = t.amenities?.some((a: any) => a.name === activeFormat) || t.amenities?.includes(activeFormat);
            if (!isFormat && !isAmenity) return false;
        }

        return true;
    });

    return (
        <div className="min-h-screen bg-[#0b0b0f] text-white">
            {/* HERO SECTION */}
            <section className="relative pt-32 pb-24 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0">
                   <div className="absolute inset-0 bg-black/60 z-10" />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-[#0b0b0f]/80 to-transparent z-10" />
                   <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0f] via-transparent to-[#0b0b0f] z-10" />
                   <Image src={HERO_BG} alt="Cinema Interior" fill className="object-cover blur-[2px] opacity-40 mix-blend-luminosity" priority />
                </div>
                
                <div className="container relative z-20 mx-auto px-4 md:px-8 max-w-7xl text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 backdrop-blur-md">
                            <MapPin className="text-primary w-4 h-4" />
                            <span className="text-primary text-[11px] font-black uppercase tracking-[0.2em]">Cinema Locator</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6">
                            Find Cinemas <span className="text-primary">Near You</span>
                        </h1>
                        <p className="text-gray-400 text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                            Discover CineTicket partner theaters and explore the latest blockbusters playing in your city with premium experiences.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* SEARCH + FILTER BAR */}
            <section className="sticky top-[80px] z-40 bg-[#0b0b0f]/90 backdrop-blur-2xl border-b border-white/5 py-4">
               <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                   <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                       
                       <div className="flex items-center gap-4 w-full md:w-auto">
                           <div className="relative flex-1 md:w-80">
                               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                               <input 
                                 type="text" 
                                 placeholder="Search theaters..." 
                                 value={searchQuery}
                                 onChange={(e) => setSearchQuery(e.target.value)}
                                 className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm font-medium focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all placeholder:text-gray-500"
                               />
                           </div>
                           <button className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold uppercase tracking-widest hover:bg-white/10 transition-all shrink-0">
                               City <ChevronDown className="w-4 h-4" />
                           </button>
                       </div>

                       <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
                           <div className="h-8 w-px bg-white/10 mx-2 hidden md:block"></div>
                           {FORMATS.map(f => (
                               <button 
                                 key={f}
                                 onClick={() => setActiveFormat(f)}
                                 className={`px-5 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${
                                     activeFormat === f 
                                     ? "bg-primary text-black shadow-glow scale-105" 
                                     : "bg-white/5 text-gray-400 border border-white/5 hover:border-white/20 hover:text-white"
                                 }`}
                               >
                                 {f}
                               </button>
                           ))}
                           <div className="h-8 w-px bg-white/10 mx-2 hidden md:block"></div>
                           <div className="flex items-center gap-2 border-l border-white/5 pl-2 ml-2 md:border-none md:pl-0 md:ml-0">
                               {AMENITIES.map(a => (
                                   <button 
                                     key={a.name}
                                     onClick={() => setActiveFormat(a.name)}
                                     className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all ${
                                         activeFormat === a.name 
                                         ? "bg-primary/20 text-primary border border-primary/20 scale-105" 
                                         : "bg-transparent text-gray-500 border border-dashed border-white/10 hover:border-white/20 hover:text-gray-300"
                                     }`}
                                   >
                                     <a.icon size={12} /> {a.name}
                                   </button>
                               ))}
                           </div>
                       </div>

                   </div>
               </div>
            </section>

            {/* THEATER GRID SECTION */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    {isLoading ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                            {[1, 2, 3, 4, 5, 6].map((i) => (
                                <div key={i} className="bg-white/5 border border-white/5 rounded-[2rem] h-[480px] animate-pulse" />
                            ))}
                        </div>
                    ) : filteredTheaters.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                            {filteredTheaters.map((theater) => (
                                <motion.div 
                                    key={theater.id}
                                    whileHover={{ y: -8, scale: 1.01 }}
                                    className="group flex flex-col bg-white/[0.02] border border-white/10 rounded-[2rem] overflow-hidden hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10"
                                >
                                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#121216]">
                                        <Image
                                          src={theater.images?.[0] || HERO_BG}
                                          alt={theater.name}
                                          fill
                                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-transparent to-[#0b0b0f]/20" />
                                        
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-black text-white uppercase tracking-widest flex items-center gap-1.5">
                                                <MapPin size={10} className="text-primary" /> {theater.city?.name || 'Local'}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-1 flex flex-col">
                                        <h3 className="text-xl font-black text-white mb-2 group-hover:text-primary transition-colors line-clamp-1">{theater.name}</h3>
                                        
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {(theater.formats || ["2D"]).slice(0, 3).map((f: string) => (
                                                <span key={f} className="px-2 py-1 rounded bg-white/5 text-[9px] font-black text-gray-300 uppercase tracking-widest">
                                                    {f}
                                                </span>
                                            ))}
                                            <span className="px-2 py-1 rounded bg-primary/10 text-[9px] font-black text-primary uppercase tracking-widest border border-primary/20">
                                                {theater._count?.halls || theater.halls?.length || 4} Halls
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3 mb-6">
                                            {AMENITIES.map((amenity, idx) => {
                                                const Icon = amenity.icon;
                                                return (
                                                    <div key={idx} className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:border-primary/30 group-hover:text-primary transition-colors" title={amenity.name}>
                                                        <Icon size={14} />
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className="mt-auto space-y-3">
                                            <Link href={`/theaters/${theater.slug}#showtimes`} className="w-full py-3.5 bg-primary text-black rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:scale-[1.02] shadow-glow transition-all">
                                                View Showtimes
                                            </Link>
                                            <Link href={`/theaters/${theater.slug}`} className="w-full py-3.5 bg-transparent border border-white/10 text-white rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/5 transition-all">
                                                Theater Details
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center py-32 text-center bg-white/5 border border-dashed border-white/10 rounded-[3rem] max-w-3xl mx-auto">
                            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mb-6">
                                <Film size={40} className="text-gray-500" />
                            </div>
                            <h3 className="text-2xl font-black uppercase tracking-widest mb-3">No theaters found</h3>
                            <p className="text-gray-400 font-medium max-w-md mx-auto mb-8">We couldn't find any theaters matching your criteria in this location.</p>
                            <button onClick={() => {setSearchQuery(''); setActiveFormat("All");}} className="px-8 py-4 bg-primary text-black text-sm font-black uppercase tracking-widest rounded-2xl shadow-glow hover:scale-105 transition-transform">
                                Clear Filters
                            </button>
                        </motion.div>
                    )}
                </div>
            </section>
        </div>
    );
}