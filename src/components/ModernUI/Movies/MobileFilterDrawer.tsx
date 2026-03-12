"use client";
import React from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FilterSidebar from "./FilterSidebar";

const MobileFilterDrawer = ({ isOpen, onClose, filters, setFilter, onReset, resultCount }: { isOpen?: any; onClose?: any; filters?: any; setFilter?: any; onReset?: any; resultCount?: any }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100]"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "-100%" }}
                        transition={{ type: "spring", damping: 28, stiffness: 300 }}
                        className="fixed top-0 left-0 bottom-0 w-[85%] max-w-[380px] bg-[#0e0e13] z-[101] flex flex-col"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-white/5">
                            <h3 className="text-white font-black text-sm uppercase tracking-widest">Filters</h3>
                            <button
                                onClick={onClose}
                                className="p-2 bg-white/5 hover:bg-white/10 rounded-xl transition-colors text-gray-400 hover:text-white"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Scrollable filters */}
                        <div className="flex-1 overflow-y-auto px-2 py-4">
                            <FilterSidebar
                                filters={filters}
                                setFilter={setFilter}
                                onReset={onReset}
                                className="border-0 bg-transparent shadow-none p-4"
                            />
                        </div>

                        {/* Apply button */}
                        <div className="px-6 py-4 border-t border-white/5">
                            <button
                                onClick={onClose}
                                className="w-full bg-primary hover:bg-primary/90 text-black py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all active:scale-[0.98]"
                            >
                                Show {resultCount} Movie{resultCount !== 1 ? "s" : ""}
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default MobileFilterDrawer;
