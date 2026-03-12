"use client";
import React from 'react';
import { Ticket, ShieldCheck, ArrowRight } from 'lucide-react';

interface PriceSummaryProps {
    selectedSeatsCount: number;
    totalPrice: number;
    onProceed?: () => void;
    isProcessing?: boolean;
}

const PriceSummary: React.FC<PriceSummaryProps> = ({ selectedSeatsCount, totalPrice, onProceed, isProcessing = false }) => {
    const serviceFee = selectedSeatsCount > 0 ? 50 * selectedSeatsCount : 0;
    const tax = totalPrice * 0.15;
    const grandTotal = totalPrice + serviceFee + tax;

    return (
        <div className="sticky top-24 bg-[#1a1c23] border border-white/10 rounded-3xl p-8 space-y-8 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/5 pb-6">
                <h3 className="text-white font-black text-xl tracking-tight">Price Summary</h3>
                <div className="bg-primary/20 text-primary p-2 rounded-xl">
                    <Ticket size={24} />
                </div>
            </div>

            <div className="space-y-4">
                <div className="flex justify-between items-center group">
                    <span className="text-gray-400 group-hover:text-white transition-colors">Tickets Total ({selectedSeatsCount})</span>
                    <span className="text-white font-bold">{totalPrice.toLocaleString()} BDT</span>
                </div>
                <div className="flex justify-between items-center group">
                    <span className="text-gray-400 group-hover:text-white transition-colors">Service Fee</span>
                    <span className="text-white font-bold">{serviceFee.toLocaleString()} BDT</span>
                </div>
                <div className="flex justify-between items-center group">
                    <span className="text-gray-400 group-hover:text-white transition-colors">VAT (15%)</span>
                    <span className="text-white font-bold">{tax.toLocaleString()} BDT</span>
                </div>
            </div>

            <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="flex justify-between items-end">
                <div>
                    <p className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-1">Total Amount</p>
                    <div className="text-4xl font-black text-primary tracking-tighter">
                        {grandTotal.toLocaleString()} <span className="text-xs font-normal">BDT</span>
                    </div>
                </div>
            </div>

            <div className="space-y-4 pt-4">
                <button
                    disabled={selectedSeatsCount === 0 || isProcessing}
                    onClick={onProceed}
                    className={`
            w-full py-5 rounded-2xl font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 transition-all transform
            ${selectedSeatsCount > 0 && !isProcessing
                            ? 'bg-primary text-black hover:scale-[1.02] shadow-btnHover active:scale-95'
                            : 'bg-white/5 text-gray-600 cursor-not-allowed'}
          `}
                >
                    {isProcessing ? "Processing..." : "Proceed to Pay"}
                    <ArrowRight size={18} />
                </button>

                <div className="flex items-center justify-center gap-2 text-gray-500 text-[10px] uppercase font-bold tracking-widest">
                    <ShieldCheck size={14} className="text-tersiary" />
                    Secure Payment Guarantee
                </div>
            </div>
        </div>
    );
};

export default PriceSummary;
