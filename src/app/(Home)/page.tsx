"use client";
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import HeroSection from "@/components/ModernUI/HeroSection";
import SearchBar from "@/components/ModernUI/SearchBar";
import MovieSlider from "@/components/ModernUI/MovieSlider";
import UpcomingCarousel from "@/components/ModernUI/UpcomingCarousel";
import { Movie, UpcomingMovie } from "@/Utilities/mockData/mockMovies";
import { Users, Globe, MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { cineticketApi } from "@/lib/cineticketApi";
import { eventToMovie, eventToUpcomingMovie } from "@/lib/movieMapper";

import {
  HeroSkeleton,
  SearchBarSkeleton,
  MovieSliderSkeleton,
  UpcomingCarouselSkeleton,
  PromoSkeleton,
  StatsSkeleton,
  NewsletterSkeleton,
} from "@/components/ModernUI/Skeletons";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [allMovies, setAllMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<UpcomingMovie[]>([]);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const [nowSelling, upcoming] = await Promise.all([
          cineticketApi.getEvents({ status: "NOW_SELLING", type: "MOVIE", limit: 30 }),
          cineticketApi.getEvents({ status: "UPCOMING", type: "MOVIE", limit: 30 }),
        ]);
        if (!mounted) return;
        const nowSellingMovies = (nowSelling.data ?? []).map(eventToMovie);
        const upcomingEventMovies = (upcoming.data ?? []).map(eventToMovie);
        setAllMovies([...nowSellingMovies, ...upcomingEventMovies]);
        setUpcomingMovies((upcoming.data ?? []).map(eventToUpcomingMovie));
      } catch (_error) {
        setAllMovies([]);
        setUpcomingMovies([]);
      } finally {
        if (mounted) setIsLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const nowShowingMovies: Movie[] = allMovies.filter((m) => m.category === "Now Showing");
  const trendingMovies: Movie[] = allMovies.filter((m) => m.isTrending);
  const topRatedMovies: Movie[] = allMovies.filter((m) => m.isTopRated);
  const actionMovies: Movie[] = allMovies.filter((m) => (m.genres as string[]).includes("Action") || m.category === "Action");

  const stats = [
    { icon: Users, label: "Tickets Sold", value: 2000000, suffix: "+" },
    { icon: Globe, label: "Global Theaters", value: 500, suffix: "+" },
    { icon: CheckCircle2, label: "Happy Customers", value: 1500000, suffix: "" },
    { icon: MapPin, label: "Cities", value: 50, suffix: "+" },
  ];

  if (isLoading) {
    return (
      <main className="bg-[#0b0b0f] min-h-screen">
        <HeroSkeleton />
        <SearchBarSkeleton />
        <div className="py-12 space-y-4">
          <MovieSliderSkeleton title="Trending Movies" />
          <MovieSliderSkeleton title="Now Showing" />
          <UpcomingCarouselSkeleton />
          <MovieSliderSkeleton title="Top Rated" />
          <MovieSliderSkeleton title="Action Packed" />
        </div>
        <PromoSkeleton />
        <StatsSkeleton />
        <NewsletterSkeleton />
      </main>
    );
  }

  return (
    <main className="bg-[#0b0b0f] min-h-screen">
      {/* Hero Section - Auto Slider */}
      <HeroSection movies={(trendingMovies.length ? trendingMovies : nowShowingMovies).slice(0, 5)} />

      {/* Global Filter Section */}
      <section className="section-padding py-12 relative z-20">
        <SearchBar movies={allMovies} />
      </section>

      {/* Movie Sections */}
      <div className="py-12 space-y-4">
        <MovieSlider title="Trending Movies" movies={trendingMovies} />
        <MovieSlider title="Now Showing" movies={nowShowingMovies} category="now-showing" />
        <UpcomingCarousel movies={upcomingMovies} />
        <MovieSlider title="Top Rated" movies={topRatedMovies} />
        <MovieSlider title="Action Packed" movies={actionMovies} />
      </div>

      {/* Premium Promo Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-primary/20 via-black to-black border border-white/5 p-8 md:p-16"
        >
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop')] opacity-20 bg-cover bg-center" />
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                Exclusive <span className="text-primary">Movie</span> Offer
              </h2>
              <p className="text-gray-300 text-lg md:text-xl">
                Get <span className="text-white font-bold text-2xl">10% OFF</span> on your first booking.
                Use code <span className="text-primary font-black tracking-widest border-2 border-primary/30 px-3 py-1 rounded-lg ml-2">WELCOME10</span>
              </p>
              <button className="bg-primary hover:bg-white text-black px-10 py-4 rounded-2xl font-black text-lg transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(231,173,4,0.3)]">
                Claim Offer Now
              </button>
            </div>
            <div className="hidden md:block">
              <Image
                src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop"
                alt="Promo"
                width={800}
                height={500}
                className="rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Modern Stats Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 bg-black/40">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl text-center group hover:border-primary/30 transition-colors"
            >
              <div className="inline-flex p-4 bg-primary/10 rounded-2xl mb-4 group-hover:scale-110 transition-transform">
                <stat.icon size={32} className="text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-black text-white mb-2">
                <CountUp end={stat.value} duration={3} separator="," scrollSpyOnce />
                {stat.suffix}
              </div>
              <div className="text-gray-400 font-medium uppercase tracking-widest text-xs">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-padding py-16">
        <div className="bg-black/40 border border-white/10 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-10 shadow-[0_0_40px_rgba(231,173,4,0.05)] backdrop-blur-xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full pointer-events-none" />

          <div className="space-y-4 text-center md:text-left flex-1 max-w-xl relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tighter">
              Get Notified for New <span className="text-primary">Blockbusters</span>
            </h2>
            <p className="text-gray-300 text-base font-bold">
              Join <span className="text-white font-black">1.5M+ movie lovers</span> and get exclusive offers.
            </p>
          </div>

          <div className="w-full max-w-md flex flex-col sm:flex-row gap-3 p-1.5 bg-black/60 rounded-2xl backdrop-blur-md border border-white/10 shadow-soft relative z-10">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="flex-1 bg-transparent px-6 py-4 text-white placeholder:text-gray-500 outline-none font-bold text-sm"
            />
            <button className="bg-primary text-black px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_15px_rgba(231,173,4,0.3)]">
              Join Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
