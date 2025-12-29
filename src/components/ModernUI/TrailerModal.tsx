"use client";
import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface TrailerModalProps {
    isOpen: boolean;
    onClose: () => void;
    trailerUrl: string;
    movieTitle: string;
}

const TrailerModal: React.FC<TrailerModalProps> = ({ isOpen, onClose, trailerUrl, movieTitle }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Convert youtube URL to embed URL if needed
    const getEmbedUrl = (url: string) => {
        if (!url) return "";
        if (url.includes("embed")) return url;
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}?autoplay=1` : url;
    };

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[10000] flex items-center justify-center p-4 md:p-8"
                >
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/95 backdrop-blur-3xl"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 30 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 30 }}
                        className="relative w-full max-w-6xl aspect-video bg-black rounded-[2.5rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.8)] border border-white/10"
                    >
                        {/* Header */}
                        <div className="absolute top-6 left-6 md:left-8 right-6 md:right-8 flex items-center justify-between z-10 pointer-events-none">
                            <div className="bg-black/60 backdrop-blur-md px-4 md:px-6 py-2 md:py-3 rounded-2xl border border-white/10 max-w-[70%]">
                                <h3 className="text-white font-black tracking-tight text-sm md:text-lg truncate">
                                    {movieTitle} <span className="text-primary ml-2 hidden sm:inline">// Official Trailer</span>
                                </h3>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-3 md:p-4 bg-white/10 hover:bg-primary hover:text-black text-white rounded-2xl border border-white/10 backdrop-blur-md transition-all pointer-events-auto active:scale-90 shadow-soft"
                            >
                                <X size={20} className="md:w-6 md:h-6" />
                            </button>
                        </div>

                        {/* YouTube Embed */}
                        <iframe
                            src={getEmbedUrl(trailerUrl)}
                            title={`${movieTitle} Trailer`}
                            className="w-full h-full"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
};

export default TrailerModal;
