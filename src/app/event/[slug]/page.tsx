"use client";
import React, { useEffect, useMemo, useState } from "react";
import MovieDetailHeader from "@/components/ModernUI/MovieDetailHeader";
import SeatSelection from "@/components/ModernUI/SeatSelection";
import PriceSummary from "@/components/ModernUI/PriceSummary";
import MovieCard from "@/components/ModernUI/MovieCard";
import MoviePageSkeleton from "@/components/ModernUI/MoviePageSkeleton";
import { cineticketApi, type EventEntity, type SeatMapRow } from "@/lib/cineticketApi";
import { eventToMovie } from "@/lib/movieMapper";

interface EventProps {
  params: { slug: string };
}

type GroupedShow = {
  theaterId: string;
  theater: string;
  location: string;
  times: Array<{ id: string; label: string }>;
};

export default async function Event({ params }: EventProps) {
  const { slug } = await params;
  const [event, setEvent] = useState<EventEntity | null>(null);
  const [relatedEvents, setRelatedEvents] = useState<EventEntity[]>([]);
  const [groupedShows, setGroupedShows] = useState<GroupedShow[]>([]);
  const [selectedGroup, setSelectedGroup] = useState<GroupedShow | null>(null);
  const [selectedShowId, setSelectedShowId] = useState<string>("");
  const [seatRows, setSeatRows] = useState<SeatMapRow[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<Array<{ id: string; label: string; price: number; type: string }>>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isPaying, setIsPaying] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        setIsLoading(true);
        const [eventRes, relatedRes] = await Promise.all([
          cineticketApi.getEventBySlug(slug),
          cineticketApi.getRelatedEvents(slug),
        ]);
        if (!mounted) return;
        setEvent(eventRes);
        setRelatedEvents(relatedRes ?? []);
        const groupsMap = new Map<string, GroupedShow>();
        (eventRes.shows ?? []).forEach((show) => {
          const theaterId = show.theater?.id ?? "unknown";
          const key = theaterId;
          if (!groupsMap.has(key)) {
            groupsMap.set(key, {
              theaterId,
              theater: show.theater?.name ?? "Theater",
              location: show.hall?.name ?? "",
              times: [],
            });
          }
          const date = new Date(show.date).toLocaleDateString();
          groupsMap.get(key)!.times.push({ id: show.id, label: `${show.startTime} (${date})` });
        });
        const groups = Array.from(groupsMap.values());
        setGroupedShows(groups);
        const firstGroup = groups[0] ?? null;
        setSelectedGroup(firstGroup);
        const firstShow = firstGroup?.times?.[0]?.id ?? "";
        setSelectedShowId(firstShow);
      } catch (_error) {
        if (!mounted) return;
        setEvent(null);
      } finally {
        if (mounted) setIsLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, [slug]);

  useEffect(() => {
    let mounted = true;
    async function loadSeatMap() {
      if (!selectedShowId) return;
      try {
        const response = await cineticketApi.getShowSeatMap(selectedShowId);
        if (!mounted) return;
        setSeatRows(
          (response.rows ?? []).map((row) => ({
            row: String(row.row),
            seats: (row.seats ?? []).map((seat) => ({
              id: seat.hallSeatId ?? seat.id,
              label: seat.seatName ?? seat.label ?? "Seat",
              state: (seat.status ?? seat.state ?? "AVAILABLE") as any,
              type: (seat.seatType ?? seat.type ?? "STANDARD") as any,
            })),
          })),
        );
      } catch (_error) {
        if (mounted) setSeatRows([]);
      }
    }
    loadSeatMap();
    return () => {
      mounted = false;
    };
  }, [selectedShowId]);

  const movie = useMemo(() => (event ? eventToMovie(event) : null), [event]);
  const relatedMovies = useMemo(() => relatedEvents.map(eventToMovie).slice(0, 2), [relatedEvents]);
  const totalPrice = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);

  const handleProceedPayment = async () => {
    if (!event || !selectedShowId || selectedSeats.length === 0) {
      window.alert("Please choose a show and select seats first.");
      return;
    }
    try {
      setIsPaying(true);
      const order = await cineticketApi.createOrder({
        eventId: event.id,
        showId: selectedShowId,
        total: totalPrice,
        paymentMethod: "stripe",
        ticketItems: selectedSeats.map((seat) => ({ seatId: seat.id, price: seat.price })),
      });
      const orderId = order?.id ?? order?.data?.id;
      if (!orderId) throw new Error("Order creation failed");
      const paymentSession = await cineticketApi.startStripePayment({ orderId, eventSlug: slug });
      const checkoutUrl = paymentSession?.checkoutUrl ?? paymentSession?.data?.checkoutUrl;
      if (!checkoutUrl) throw new Error("Payment session failed");
      window.location.href = checkoutUrl;
    } catch (error: any) {
      window.alert(error?.message ?? "Unable to process payment");
    } finally {
      setIsPaying(false);
    }
  };

  if (isLoading) return <MoviePageSkeleton />;
  if (!movie) return <main className="min-h-screen bg-[#121212] text-white flex items-center justify-center">Movie not found.</main>;

  return (
    <main className="bg-[#121212] min-h-screen pb-32">
      <MovieDetailHeader movie={movie} />
      <div className="px-6 md:px-12 lg:px-24 -mt-20 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <section className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-primary rounded-full" />
                <h2 className="text-xl font-black text-white uppercase tracking-widest">Official Trailer</h2>
              </div>
              <div className="aspect-video w-full rounded-[2.5rem] overflow-hidden border border-white/5 shadow-soft relative group">
                <iframe
                  className="w-full h-full"
                  src={movie.trailerUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </section>

            <section id="tickets" className="space-y-8 scroll-mt-32">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-primary rounded-full" />
                <h2 className="text-xl font-black text-white uppercase tracking-widest">Select Showtimes</h2>
              </div>
              <div className="space-y-6">
                <div className="flex flex-wrap gap-4">
                  {groupedShows.map((theaterGroup) => (
                    <button
                      key={theaterGroup.theaterId}
                      onClick={() => {
                        setSelectedGroup(theaterGroup);
                        setSelectedShowId(theaterGroup.times[0]?.id ?? "");
                        setSelectedSeats([]);
                      }}
                      className={`
                        px-6 py-4 rounded-[1.5rem] border-2 transition-all text-left space-y-1.5 min-w-[220px]
                        ${selectedGroup?.theaterId === theaterGroup.theaterId
                          ? "bg-primary/10 border-primary text-primary shadow-glow"
                          : "bg-black/40 border-white/5 text-gray-400 hover:border-white/20 hover:bg-white/5"}
                      `}
                    >
                      <p className="font-black text-xs uppercase tracking-widest">{theaterGroup.theater}</p>
                      <p className="text-[9px] opacity-80 font-bold uppercase tracking-wider">{theaterGroup.location}</p>
                    </button>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 p-4 bg-white/5 rounded-[2rem] border border-white/5">
                  {(selectedGroup?.times ?? []).map((time) => (
                    <button
                      key={time.id}
                      onClick={() => {
                        setSelectedShowId(time.id);
                        setSelectedSeats([]);
                      }}
                      className={`
                        px-8 py-4 rounded-[1.5rem] font-black text-[10px] transition-all uppercase tracking-widest
                        ${selectedShowId === time.id
                          ? "bg-primary text-black shadow-glow scale-105"
                          : "bg-black/60 text-gray-400 border border-white/5 hover:border-white/20 hover:text-white"}
                      `}
                    >
                      {time.label}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            <section className="space-y-8">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-6 bg-primary rounded-full" />
                <h2 className="text-xl font-black text-white uppercase tracking-widest">Choose Your Seats</h2>
              </div>
              <SeatSelection
                rows={seatRows as any}
                onConfirm={() => { }}
                onSelectionChange={(seats) => setSelectedSeats(seats)}
              />
            </section>
          </div>

          <div className="lg:col-span-1">
            <PriceSummary
              selectedSeatsCount={selectedSeats.length}
              totalPrice={totalPrice}
              onProceed={handleProceedPayment}
              isProcessing={isPaying}
            />
            <div className="mt-12 space-y-6">
              <h3 className="text-xl font-bold text-white px-2">You May Also Like</h3>
              <div className="space-y-4">
                {relatedMovies.map((item) => (
                  <MovieCard key={item.id} movie={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
