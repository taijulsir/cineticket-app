"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, User, Menu, X, Ticket, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
    name: string;
    href: string;
}

interface NavGroup {
    name: string;
    links?: NavLink[];
    href?: string;
}

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navGroups: NavGroup[] = [
        {
            name: "Movies",
            links: [
                { name: "All Movies", href: "/movies" },
                { name: "Now Showing", href: "/movies?filter=now-showing" },
                { name: "Coming Soon", href: "/movies?filter=coming-soon" },
            ],
        },
        {
            name: "Explore",
            links: [
                { name: "Theaters", href: "/theaters" },
                { name: "Events", href: "/events" },
            ],
        },
        { name: "Offers", href: "/offers" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? "bg-black/80 backdrop-blur-lg border-b border-white/10 py-3"
                : "bg-transparent py-5"
                }`}
        >
            <div className="px-6 md:px-12 lg:px-24 flex items-center justify-between">
                {/* Logo & Navigation Container */}
                <div className="flex items-center gap-12">
                    {/* Logo - Fixed alignment and spacing */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-lg shrink-0">
                            <Ticket className="text-black" size={24} />
                        </div>
                        <span className="text-white text-2xl font-bold tracking-tighter whitespace-nowrap">
                            Cine<span className="text-primary text-3xl font-black">T</span>icket
                        </span>
                    </Link>

                    {/* Desktop Navigation - Fixed "Movies" spacing via gap-12 container */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navGroups.map((group) => (
                            <div
                                key={group.name}
                                className="relative group/nav"
                                onMouseEnter={() => group.links && setActiveDropdown(group.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {group.links ? (
                                    <button className="flex items-center gap-1.5 text-gray-300 hover:text-primary transition-colors text-sm font-bold tracking-wide uppercase py-2">
                                        {group.name}
                                        <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === group.name ? "rotate-180" : ""}`} />
                                    </button>
                                ) : (
                                    <Link
                                        href={group.href || '#'}
                                        className="text-gray-300 hover:text-primary transition-colors text-sm font-bold tracking-wide uppercase py-2"
                                    >
                                        {group.name}
                                    </Link>
                                )}

                                {/* Dropdown Menu */}
                                {group.links && (
                                    <AnimatePresence>
                                        {activeDropdown === group.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                className="absolute top-full left-0 w-48 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl py-2 z-50"
                                            >
                                                {group.links.map((link) => (
                                                    <Link
                                                        key={link.name}
                                                        href={link.href}
                                                        className="block px-6 py-3 text-sm font-medium text-gray-300 hover:text-primary hover:bg-white/5 transition-all"
                                                    >
                                                        {link.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side Actions */}
                <div className="flex items-center gap-6">
                    <button className="p-2 text-gray-300 hover:text-primary transition-colors">
                        <Search size={22} />
                    </button>

                    <Link
                        href="/signin"
                        className="hidden md:flex items-center gap-2 p-2 text-gray-300 hover:text-primary transition-colors whitespace-nowrap"
                    >
                        <User size={22} />
                        <span className="text-sm font-bold">Sign In</span>
                    </Link>

                    {/* Book Tickets Button - Fixed text wrapping */}
                    <Link
                        href="/movies?filter=now-showing"
                        className="hidden sm:block bg-primary hover:bg-white text-black px-8 py-3 rounded-full font-black text-sm transition-all duration-300 shadow-[0_0_20px_rgba(231,173,4,0.3)] hover:shadow-[0_0_25px_rgba(231,173,4,0.5)] active:scale-95 whitespace-nowrap uppercase tracking-wider"
                    >
                        Book Tickets
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 lg:hidden overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-8">
                            {navGroups.map((group) => (
                                <div key={group.name} className="flex flex-col gap-4">
                                    {group.links ? (
                                        <>
                                            <span className="text-gray-500 text-xs font-black uppercase tracking-[0.2em]">
                                                {group.name}
                                            </span>
                                            <div className="flex flex-col gap-4 pl-4 border-l border-white/10">
                                                {group.links.map((link) => (
                                                    <Link
                                                        key={link.name}
                                                        href={link.href}
                                                        className="text-white text-xl font-bold hover:text-primary transition-colors"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {link.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={group.href || '#'}
                                            className="text-white text-2xl font-black uppercase tracking-tighter hover:text-primary transition-colors"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                        >
                                            {group.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <div className="pt-8 border-t border-white/10 flex flex-col gap-6">
                                <Link
                                    href="/signin"
                                    className="flex items-center gap-3 text-white text-xl font-bold hover:text-primary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <User size={24} />
                                    Sign In
                                </Link>
                                <Link
                                    href="/movies?filter=now-showing"
                                    className="w-full bg-primary text-black py-4 rounded-2xl font-black text-center uppercase tracking-widest shadow-lg"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Book Tickets
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
