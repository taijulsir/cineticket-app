"use client";
import React, { useMemo, useState } from "react";
import { Armchair } from "lucide-react";

type SeatState = "AVAILABLE" | "RESERVED" | "BOOKED" | "BLOCKED";
type SeatType = "STANDARD" | "VIP" | "PREMIUM" | "WHEELCHAIR" | "RECLINER" | "KIDS" | "UNAVAILABLE" | "STAIR";

type SeatCell = {
  id: string;
  label: string;
  state: SeatState;
  type: SeatType;
};

type SeatRow = {
  row: string;
  seats: SeatCell[];
};

interface SeatSelectionProps {
  rows?: SeatRow[];
  onConfirm?: (seats: string[]) => void;
  onSelectionChange?: (seats: Array<{ id: string; label: string; price: number; type: string }>) => void;
}

const priceByType: Record<string, number> = {
  VIP: 1500,
  PREMIUM: 1100,
  RECLINER: 1200,
  WHEELCHAIR: 700,
  KIDS: 500,
  STANDARD: 600,
  UNAVAILABLE: 0,
  STAIR: 0,
};

function isBlocked(state: SeatState) {
  return state === "BOOKED" || state === "BLOCKED" || state === "RESERVED";
}

const fallbackRows: SeatRow[] = ["A", "B", "C", "D", "E"].map((row) => ({
  row,
  seats: Array.from({ length: 10 }).map((_, index) => ({
    id: `${row}-${index + 1}`,
    label: `${row}${index + 1}`,
    state: "AVAILABLE" as SeatState,
    type: "STANDARD" as SeatType,
  })),
}));

const SeatSelection: React.FC<SeatSelectionProps> = ({ rows, onConfirm, onSelectionChange }) => {
  const [selectedSeatIds, setSelectedSeatIds] = useState<string[]>([]);
  const seatRows = rows?.length ? rows : fallbackRows;
  const seatIndex = useMemo(() => {
    const map = new Map<string, SeatCell>();
    seatRows.forEach((row) => row.seats.forEach((seat) => map.set(seat.id, seat)));
    return map;
  }, [seatRows]);

  const selectedSeats = selectedSeatIds
    .map((id) => seatIndex.get(id))
    .filter(Boolean)
    .map((seat) => ({
      id: seat!.id,
      label: seat!.label,
      type: seat!.type,
      price: priceByType[seat!.type] ?? 600,
    }));

  const toggleSeat = (seat: SeatCell) => {
    if (isBlocked(seat.state)) return;
    const next = selectedSeatIds.includes(seat.id)
      ? selectedSeatIds.filter((id) => id !== seat.id)
      : [...selectedSeatIds, seat.id];
    setSelectedSeatIds(next);
    const nextLabels = next
      .map((id) => seatIndex.get(id))
      .filter(Boolean)
      .map((item) => item!.label);
    onConfirm?.(nextLabels);
    const nextDetails = next
      .map((id) => seatIndex.get(id))
      .filter(Boolean)
      .map((item) => ({
        id: item!.id,
        label: item!.label,
        type: item!.type,
        price: priceByType[item!.type] ?? 600,
      }));
    onSelectionChange?.(nextDetails);
  };

  return (
    <div className="space-y-12">
      <div className="flex flex-wrap items-center justify-center gap-8 bg-white/5 border border-white/10 p-4 rounded-2xl">
        <Legend color="bg-[#2a2d37] border-white/10" label="Available" />
        <Legend color="bg-primary border-primary" label="Selected" />
        <Legend color="bg-white/10 opacity-30" label="Booked/Reserved" />
      </div>

      <div className="relative py-10 text-center">
        <div className="w-full h-2 bg-primary/30 blur-sm rounded-full mb-2" />
        <div className="w-3/4 mx-auto h-12 border-t-4 border-primary/20 rounded-[100%] flex items-center justify-center overflow-hidden">
          <div className="w-full h-full bg-gradient-to-b from-primary/10 to-transparent" />
        </div>
        <p className="text-primary text-[10px] font-black uppercase tracking-[0.5em] -mt-2">Screen this way</p>
      </div>

      <div className="overflow-x-auto pb-8 scrollbar-hide">
        <div className="min-w-[700px] flex flex-col items-center gap-3">
          {seatRows.map((row) => (
            <div key={row.row} className="flex items-center gap-4">
              <span className="w-6 text-gray-500 font-bold text-xs">{row.row}</span>
              <div className="flex gap-2">
                {row.seats.map((seat) => {
                  const selected = selectedSeatIds.includes(seat.id);
                  const blocked = isBlocked(seat.state);
                  return (
                    <button
                      key={seat.id}
                      disabled={blocked}
                      onClick={() => toggleSeat(seat)}
                      className={`
                        w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-all transform hover:scale-110
                        ${blocked
                          ? "bg-white/5 opacity-20 cursor-not-allowed"
                          : selected
                            ? "bg-primary text-black shadow-btnHover"
                            : "bg-[#2a2d37] text-gray-400 hover:bg-[#353a47] border border-white/5"}
                      `}
                      title={`${seat.label} (${seat.type}) - ${(priceByType[seat.type] ?? 600).toLocaleString()} BDT`}
                    >
                      <Armchair size={16} />
                    </button>
                  );
                })}
              </div>
              <span className="w-6 text-gray-500 font-bold text-xs">{row.row}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl">
        <div className="space-y-1">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Selected Seats</p>
          <div className="flex flex-wrap gap-2">
            {selectedSeats.length ? (
              selectedSeats.map((seat) => (
                <span key={seat.id} className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-lg font-black text-sm">
                  {seat.label}
                </span>
              ))
            ) : (
              <span className="text-gray-500 italic text-sm">No seats selected</span>
            )}
          </div>
        </div>
        <div className="text-center md:text-right">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-1">Total Estimated Price</p>
          <div className="text-3xl font-black text-white">
            {selectedSeats.reduce((sum, seat) => sum + seat.price, 0).toLocaleString()}{" "}
            <span className="text-sm font-normal text-gray-500">BDT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-6 h-6 rounded border ${color}`} />
      <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">{label}</span>
    </div>
  );
}

export default SeatSelection;
