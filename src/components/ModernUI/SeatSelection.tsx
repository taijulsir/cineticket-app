"use client";
import React, { useState } from 'react';
import { Armchair, Info } from 'lucide-react';

interface SeatSelectionProps {
    onConfirm?: (seats: string[]) => void;
}

const SeatSelection: React.FC<SeatSelectionProps> = ({ onConfirm }) => {
    const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

    // Rows: A to J (10 rows)
    // Cols: 1 to 12 (12 seats per row)
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    const seatsPerRow = 12;

    const getSeatType = (row: string) => {
        if (['I', 'J'].includes(row)) return { type: 'VIP', price: 1500 };
        if (['F', 'G', 'H'].includes(row)) return { type: 'Premium', price: 1000 };
        return { type: 'Regular', price: 600 };
    };

    const isBooked = (row: string, col: number) => {
        // Mock booked seats
        const booked = ['A-5', 'A-6', 'C-10', 'E-2', 'E-3', 'H-12'];
        return booked.includes(`${row}-${col}`);
    };

    const toggleSeat = (row: string, col: number) => {
        const seatId = `${row}-${col}`;
        if (isBooked(row, col)) return;

        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(prev => prev.filter(s => s !== seatId));
        } else {
            setSelectedSeats(prev => [...prev, seatId]);
        }
    };

    return (
        <div className="space-y-12">
            {/* Legend */}
            <div className="flex flex-wrap items-center justify-center gap-8 bg-white/5 border border-white/10 p-4 rounded-2xl">
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#2a2d37] border border-white/10" />
                    <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">Available</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-primary border border-primary shadow-btnHover" />
                    <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">Selected</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-white/10 opacity-30" />
                    <span className="text-gray-400 text-xs font-bold uppercase tracking-wider">Booked</span>
                </div>
            </div>

            {/* Screen */}
            <div className="relative py-10 text-center">
                <div className="w-full h-2 bg-primary/30 blur-sm rounded-full mb-2" />
                <div className="w-3/4 mx-auto h-12 border-t-4 border-primary/20 rounded-[100%] flex items-center justify-center overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-b from-primary/10 to-transparent" />
                </div>
                <p className="text-primary text-[10px] font-black uppercase tracking-[0.5em] -mt-2">Screen this way</p>
            </div>

            {/* Seat Map */}
            <div className="overflow-x-auto pb-8 scrollbar-hide">
                <div className="min-w-[700px] flex flex-col items-center gap-3">
                    {rows.map(row => (
                        <div key={row} className="flex items-center gap-4">
                            <span className="w-6 text-gray-500 font-bold text-xs">{row}</span>
                            <div className="flex gap-2">
                                {Array.from({ length: seatsPerRow }).map((_, i) => {
                                    const col = i + 1;
                                    const seatId = `${row}-${col}`;
                                    const isSeatSelected = selectedSeats.includes(seatId);
                                    const isSeatBooked = isBooked(row, col);
                                    const seatInfo = getSeatType(row);

                                    return (
                                        <button
                                            key={col}
                                            disabled={isSeatBooked}
                                            onClick={() => toggleSeat(row, col)}
                                            className={`
                        w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center transition-all transform hover:scale-110
                        ${isSeatBooked ? 'bg-white/5 opacity-20 cursor-not-allowed' :
                                                    isSeatSelected ? 'bg-primary text-black shadow-btnHover' :
                                                        'bg-[#2a2d37] text-gray-400 hover:bg-[#353a47] border border-white/5'}
                      `}
                                            title={`${seatId} (${seatInfo.type}) - ${seatInfo.price} BDT`}
                                        >
                                            <Armchair size={16} />
                                        </button>
                                    );
                                })}
                            </div>
                            <span className="w-6 text-gray-500 font-bold text-xs">{row}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Info */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-white/5 border border-white/10 rounded-3xl">
                <div className="space-y-1">
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Selected Seats</p>
                    <div className="flex flex-wrap gap-2">
                        {selectedSeats.length > 0 ? (
                            selectedSeats.map(seat => (
                                <span key={seat} className="bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-lg font-black text-sm">
                                    {seat}
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
                        {selectedSeats.reduce((acc, seat) => acc + getSeatType(seat[0]).price, 0).toLocaleString()} <span className="text-sm font-normal text-gray-500">BDT</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeatSelection;
