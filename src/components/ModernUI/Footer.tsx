"use client";
import React from 'react';
import Link from 'next/link';
import { Ticket, Twitter, Facebook, Instagram, Youtube, Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0b0b0f] border-t border-white/5 pt-20 pb-10 section-padding overflow-hidden relative">
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-primary/5 blur-[120px] rounded-full -mb-48" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                {/* Brand Column */}
                <div className="space-y-6">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-glow">
                            <Ticket className="text-black" size={24} />
                        </div>
                        <span className="text-white text-2xl font-black tracking-tighter">
                            Cine<span className="text-primary">T</span>icket
                        </span>
                    </Link>
                    <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-xs">
                        Your premium gateway to the cinematic world. Experience movies with the best seats and seamless booking.
                    </p>
                    <div className="flex gap-4">
                        {[Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black transition-all border border-white/5 shadow-soft">
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-6">
                    <h4 className="text-white text-xs font-black uppercase tracking-[0.2em]">Quick Links</h4>
                    <ul className="space-y-4">
                        {['Movies', 'Events', 'Cinemas', 'Offers', 'About Us'].map((item) => (
                            <li key={item}>
                                <Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm font-bold flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-primary transition-colors" />
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Discover */}
                <div className="space-y-6">
                    <h4 className="text-white text-xs font-black uppercase tracking-[0.2em]">Discover</h4>
                    <ul className="space-y-4">
                        {['Now Showing', 'Coming Soon', 'Exclusive Premiers', 'Box Office', 'News'].map((item) => (
                            <li key={item}>
                                <Link href="#" className="text-gray-500 hover:text-primary transition-colors text-sm font-bold flex items-center gap-2 group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-white/5 group-hover:bg-primary transition-colors" />
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                    <h4 className="text-white text-xs font-black uppercase tracking-[0.2em]">Contact us</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-gray-500">
                            <MapPin className="text-primary shrink-0" size={18} />
                            <span className="text-sm font-bold">123 Cinema Plaza, Film Row, Los Angeles, CA 90001</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-500">
                            <Mail className="text-primary shrink-0" size={18} />
                            <span className="text-sm font-bold">support@cineticket.com</span>
                        </li>
                        <li className="flex items-center gap-3 text-gray-500">
                            <Phone className="text-primary shrink-0" size={18} />
                            <span className="text-sm font-bold">+1 (800) CINE-TX</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="relative z-10 border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest">
                    © 2024 CineTicket. All rights reserved.
                </p>
                <div className="flex gap-8">
                    {['Terms of Service', 'Privacy Policy', 'Cookie Settings'].map((item) => (
                        <Link key={item} href="#" className="text-gray-600 hover:text-white transition-colors text-[10px] font-black uppercase tracking-widest">
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
