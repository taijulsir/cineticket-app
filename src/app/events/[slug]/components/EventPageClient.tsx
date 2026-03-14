
"use client";

import { useEffect, useState, useMemo } from "react";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Ticket, 
  Heart,
  Share2,
  Info,
  ChevronRight,
  Play,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { API_BASE, EventEntity, ShowEntity } from "@/lib/cineticketApi";
import { format, parseISO, isAfter } from "date-fns";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  event: EventEntity;
}

export default function EventPageClient({ event }: Props) {
  const [activeTab, setActiveTab] = useState<"about" | "tickets" | "gallery">("about");
  const [timeLeft, setTimeLeft] = useState<{ d: number; h: number; m: number; s: number } | null>(null);

  // Countdown timer logic
  useEffect(() => {
    const targetDate = parseISO(event.releaseDate);
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      
      if (diff <= 0) {
        setTimeLeft(null);
        return;
      }

      setTimeLeft({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / 1000 / 60) % 60),
        s: Math.floor((diff / 1000) % 60)
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [event.releaseDate]);

  // Group shows by theater
  const groupedShows = useMemo(() => {
    if (!event.shows) return [];
    const groups: Record<string, { theater: string; location: string; times: ShowEntity[] }> = {};
    
    event.shows.forEach(show => {
      const theaterName = show.theater?.name || "Main Venue";
      if (!groups[theaterName]) {
        groups[theaterName] = {
          theater: theaterName,
          location: event.location || "City Center",
          times: []
        };
      }
      groups[theaterName].times.push(show);
    });
    
    return Object.values(groups);
  }, [event.shows, event.location]);

  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <Image
          src={event.bannerImage || event.cardImage}
          alt={event.name}
          fill
          className="object-cover scale-105 blur-[2px] opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-[#0b0b0f]/60 to-transparent" />
        
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-end">
              {/* Poster */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                className="hidden lg:block relative aspect-[2/3] w-full max-w-[340px] rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl glass-card"
              >
                <Image
                  src={event.cardImage}
                  alt={event.name}
                  fill
                  className="object-cover"
                />
                {event.type && (
                  <div className="absolute top-6 left-6 px-4 py-2 bg-primary text-black font-black text-[10px] uppercase tracking-widest rounded-full shadow-glow">
                    {event.type}
                  </div>
                )}
              </motion.div>

              {/* Info */}
              <div className="lg:col-span-2 space-y-8">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="space-y-4"
                >
                  <div className="flex flex-wrap gap-3">
                    {event.genres?.map(g => (
                      <span key={g} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-wider text-gray-400">
                        {g}
                      </span>
                    ))}
                  </div>
                  <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none">
                    {event.name}
                  </h1>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-wrap items-center gap-8 text-sm font-bold uppercase tracking-widest text-gray-400"
                >
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{format(parseISO(event.releaseDate), "MMMM dd, yyyy")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{event.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>{event.location}</span>
                  </div>
                </motion.div>

                {/* Countdown Timer for Premieres */}
                {timeLeft && (
                  <motion.div 
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="inline-flex gap-4 p-6 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-xl"
                  >
                    {[
                      { l: "Days", v: timeLeft.d },
                      { l: "Hours", v: timeLeft.h },
                      { l: "Mins", v: timeLeft.m },
                      { l: "Secs", v: timeLeft.s },
                    ].map(t => (
                      <div key={t.l} className="text-center min-w-[60px]">
                        <p className="text-2xl font-black text-primary leading-none">{t.v.toString().padStart(2, '0')}</p>
                        <p className="text-[9px] font-bold uppercase tracking-widest text-gray-500 mt-1">{t.l}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="sticky top-0 z-40 bg-[#0b0b0f]/80 backdrop-blur-xl border-y border-white/5">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-8 h-20">
            {(["about", "tickets"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative h-full px-2 text-xs font-black uppercase tracking-[0.2em] transition-colors ${
                  activeTab === tab ? "text-primary" : "text-gray-500 hover:text-white"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full shadow-glow" 
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-16">
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-primary rounded-full" />
                <h2 className="text-xl font-black uppercase tracking-widest">About the Event</h2>
              </div>
              <p className="text-lg text-gray-400 leading-relaxed font-medium">
                {event.description}
              </p>
            </section>

            {/* EVENT SCHEDULE */ }
            {(activeTab === "about" || activeTab === "tickets") && (
              <section className="space-y-6 pt-8 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-primary rounded-full" />
                  <h2 className="text-xl font-black uppercase tracking-widest">Event Schedule</h2>
                </div>
                <div className="relative pl-6 border-l-2 border-white/10 space-y-8 mt-6">
                   <div className="relative">
                      <div className="absolute -left-[31px] w-4 h-4 rounded-full bg-primary/20 border-2 border-primary" />
                      <p className="text-primary font-black uppercase tracking-widest text-sm mb-1">6:30 PM</p>
                      <p className="text-white font-bold text-lg">Doors Open</p>
                      <p className="text-gray-400 text-sm">Welcome drinks and red carpet entry.</p>
                   </div>
                   <div className="relative">
                      <div className="absolute -left-[31px] w-4 h-4 rounded-full bg-white/10 border-2 border-white/30" />
                      <p className="text-gray-400 font-black uppercase tracking-widest text-sm mb-1">7:00 PM</p>
                      <p className="text-white font-bold text-lg">Movie Screening</p>
                      <p className="text-gray-400 text-sm">Exclusive premiere screening begins.</p>
                   </div>
                   <div className="relative">
                      <div className="absolute -left-[31px] w-4 h-4 rounded-full bg-white/10 border-2 border-white/30" />
                      <p className="text-gray-400 font-black uppercase tracking-widest text-sm mb-1">9:30 PM</p>
                      <p className="text-white font-bold text-lg">Director Q&A</p>
                      <p className="text-gray-400 text-sm">Interactive session with the cast and crew.</p>
                   </div>
                </div>
              </section>
            )}

            {/* RELATED MOVIE */ }
            {(activeTab === "about") && event.genres && event.genres.length > 0 && (
               <section className="space-y-6 pt-8 border-t border-white/5">
                 <div className="flex items-center gap-3">
                   <div className="w-1.5 h-6 bg-primary rounded-full" />
                   <h2 className="text-xl font-black uppercase tracking-widest">Related Movie</h2>
                 </div>
                 <div className="flex flex-col sm:flex-row gap-6 p-6 bg-white/5 border border-white/10 rounded-[2rem] items-center">
                    <div className="w-24 h-36 relative shrink-0 rounded-xl overflow-hidden shadow-lg">
                      <Image src={event.cardImage} alt="Movie Poster" fill className="object-cover" />
                    </div>
                    <div className="flex-1 space-y-3 text-center sm:text-left">
                       <h3 className="text-2xl font-black uppercase tracking-tight">{event.name}</h3>
                       <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">{event.genres.join(" • ")}</p>
                    </div>
                    <button className="px-6 py-3 bg-white/10 border border-white/20 rounded-xl flex items-center justify-center gap-2 hover:bg-white/20 transition-all font-bold text-sm">
                       <Play fill="currentColor" size={16} /> Trailer
                    </button>
                 </div>
               </section>
            )}

            {/* EVENT CTA */ }
            <section className="p-8 md:p-12 bg-primary/10 border border-primary/20 rounded-[2.5rem] text-center mt-12">
               <h2 className="text-3xl font-black uppercase tracking-tighter mb-4">Reserve Your Seat</h2>
               <p className="text-gray-300 font-medium mb-8 max-w-lg mx-auto">Don't miss out on this exclusive event. Reserve your seat and experience cinema like never before.</p>
               <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button onClick={() => setActiveTab("tickets")} className="px-8 py-4 bg-primary text-black font-black uppercase tracking-widest rounded-2xl shadow-glow hover:scale-105 transition-transform">
                     Reserve Seat
                  </button>
                  <Link href="/theaters" className="px-8 py-4 bg-transparent border border-primary/30 text-primary font-black uppercase tracking-widest rounded-2xl hover:bg-primary/10 transition-colors">
                     View Theater
                  </Link>
               </div>
            </section>

            {activeTab === "tickets" && (
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-6 bg-primary rounded-full" />
                  <h2 className="text-xl font-black uppercase tracking-widest">Available Sessions</h2>
                </div>
                
                {groupedShows.length > 0 ? (
                  <div className="space-y-6">
                    {groupedShows.map((group) => (
                      <div key={group.theater} className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-lg font-black uppercase tracking-widest">{group.theater}</h3>
                            <p className="text-xs text-gray-500 font-bold uppercase mt-1">{group.location}</p>
                          </div>
                          <Link 
                            href={`/theaters/${group.theater.toLowerCase().replace(/\s+/g, '-')}`}
                            className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline"
                          >
                            View Theater details
                          </Link>
                        </div>
                        
                        <div className="flex flex-wrap gap-3">
                          {group.times.map(show => (
                            <Link
                              key={show.id}
                              href={`/event/${event.slug}/book/${show.id}`}
                              className="group px-6 py-4 bg-black/40 border border-white/5 rounded-2xl hover:border-primary/50 transition-all text-center min-w-[120px]"
                            >
                              <p className="text-sm font-black text-white group-hover:text-primary transition-colors">
                                {show.startTime}
                              </p>
                              <p className="text-[9px] text-gray-500 font-bold uppercase mt-1">
                                {show.hall?.name || "Main Screen"}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-12 text-center bg-white/5 border border-dashed border-white/10 rounded-[2.5rem]">
                    <Ticket className="w-12 h-12 text-gray-700 mx-auto mb-4" />
                    <p className="text-gray-500 font-bold uppercase tracking-widest">No shows currently listed</p>
                  </div>
                )}
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="p-8 bg-white/5 border border-white/10 rounded-[2.5rem] space-y-8">
              <div className="space-y-2">
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Organized by</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <p className="font-black uppercase tracking-widest">{event.organizer || "CineTicket Global"}</p>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Currency</p>
                <p className="font-black text-2xl uppercase tracking-widest text-primary">{event.eventCurrency || "USD"}</p>
              </div>

              <button className="w-full py-5 bg-primary text-black font-black uppercase tracking-[0.2em] rounded-2xl shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                <Ticket className="w-5 h-5" />
                Book Now
              </button>

              <div className="flex gap-4">
                <button className="flex-1 py-4 border border-white/10 rounded-2xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-colors">
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                <button className="flex-1 py-4 border border-white/10 rounded-2xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest hover:bg-white/5 transition-colors">
                  <Heart className="w-4 h-4" />
                  Save
                </button>
              </div>
            </div>

            {/* Support Box */}
            <div className="p-8 border-2 border-primary/20 bg-primary/5 rounded-[2.5rem] flex items-start gap-4">
              <Info className="w-6 h-6 text-primary shrink-0" />
              <div className="space-y-1">
                <p className="font-black text-xs uppercase tracking-widest">Need help?</p>
                <p className="text-[11px] text-gray-400 font-bold uppercase leading-relaxed">
                  Contact our support team for exclusive corporate bookings or private screenings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
