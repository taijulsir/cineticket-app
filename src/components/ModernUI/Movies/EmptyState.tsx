"use client";
import React from "react";
import { Search, RotateCcw } from "lucide-react";
import { motion } from "framer-motion";

const EmptyState = ({ onReset }: { onReset?: any }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="py-24 flex flex-col items-center justify-center text-center space-y-6"
        >
            <div className="w-28 h-28 bg-white/[0.03] border border-white/10 rounded-full flex items-center justify-center shadow-glow">
                <Search size={44} className="text-gray-600" />
            </div>
            <div className="space-y-2 max-w-sm">
                <h3 className="text-2xl font-black text-white tracking-tight">
                    No Movies Found
                </h3>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">
                    No movies match your current filters. Try adjusting your search or reset all filters.
                </p>
            </div>
            <button
                onClick={onReset}
                className="flex items-center gap-2 bg-primary/10 hover:bg-primary text-primary hover:text-black px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all duration-300 border border-primary/20 hover:border-primary active:scale-95"
            >
                <RotateCcw size={14} />
                Reset Filters
            </button>
        </motion.div>
    );
};

export default EmptyState;
