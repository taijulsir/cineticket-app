"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    Tag,
    Ticket,
    Star,
    Zap,
    Clock,
    Copy,
    Check,
    Popcorn,
    Crown,
    GraduationCap,
    Calendar,
    Percent,
    Gift,
    ChevronDown,
    ChevronUp,
    Sparkles,
    ArrowRight,
    Film,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Offer Data ────────────────────────────────────── */
const offers = [
    {
        id: 1,
        title: "Early Bird Special",
        description: "Get 20% off on premium tickets when you book 3 days in advance. Perfect for planners who never miss a premiere.",
        code: "EARLY20",
        discount: "20% OFF",
        validUntil: "Dec 31, 2026",
        color: "from-blue-500/20 via-blue-800/10 to-transparent",
        accentColor: "text-blue-400",
        badgeBg: "bg-blue-500/20 border-blue-500/30",
        icon: Clock,
        category: "Ticket Discounts",
    },
    {
        id: 2,
        title: "Blockbuster Weekend",
        description: "Buy 2 get 1 free on all IMAX movies this weekend. Grab your crew and hit the big screen!",
        code: "B2G1IMAX",
        discount: "BUY 2 GET 1",
        validUntil: "Every Weekend",
        color: "from-primary/20 via-amber-800/10 to-transparent",
        accentColor: "text-primary",
        badgeBg: "bg-primary/20 border-primary/30",
        icon: Ticket,
        category: "Weekend Deals",
    },
    {
        id: 3,
        title: "VIP Experience Upgrade",
        description: "Upgrade to VIP recliners for the price of standard seating on weekdays. Luxury for less.",
        code: "WEEKDAYVIP",
        discount: "FREE UPGRADE",
        validUntil: "Mon — Thu",
        color: "from-purple-500/20 via-purple-800/10 to-transparent",
        accentColor: "text-purple-400",
        badgeBg: "bg-purple-500/20 border-purple-500/30",
        icon: Crown,
        category: "Premium Upgrades",
    },
    {
        id: 4,
        title: "Student Discount",
        description: "Flash your student ID and get flat 30% off on all tickets and snacks. Study hard, watch harder.",
        code: "STUDENT30",
        discount: "30% OFF",
        validUntil: "Always Valid",
        color: "from-green-500/20 via-green-800/10 to-transparent",
        accentColor: "text-green-400",
        badgeBg: "bg-green-500/20 border-green-500/30",
        icon: GraduationCap,
        category: "Student Offers",
    },
    {
        id: 5,
        title: "Popcorn Combo Deal",
        description: "Large popcorn + 2 drinks at just $9.99 when you book any movie ticket online.",
        code: "SNACK999",
        discount: "$9.99 COMBO",
        validUntil: "Mar 31, 2026",
        color: "from-orange-500/20 via-orange-800/10 to-transparent",
        accentColor: "text-orange-400",
        badgeBg: "bg-orange-500/20 border-orange-500/30",
        icon: Popcorn,
        category: "Food & Snacks",
    },
    {
        id: 6,
        title: "First Booking Bonus",
        description: "New to CineTicket? Enjoy 15% off on your very first ticket booking. Welcome aboard!",
        code: "WELCOME15",
        discount: "15% OFF",
        validUntil: "One-Time Use",
        color: "from-pink-500/20 via-pink-800/10 to-transparent",
        accentColor: "text-pink-400",
        badgeBg: "bg-pink-500/20 border-pink-500/30",
        icon: Gift,
        category: "Ticket Discounts",
    },
    {
        id: 7,
        title: "Midweek Escape",
        description: "Flat 25% off on all shows from Tuesday to Thursday. Beat the crowd and save.",
        code: "MIDWEEK25",
        discount: "25% OFF",
        validUntil: "Tue — Thu",
        color: "from-cyan-500/20 via-cyan-800/10 to-transparent",
        accentColor: "text-cyan-400",
        badgeBg: "bg-cyan-500/20 border-cyan-500/30",
        icon: Calendar,
        category: "Ticket Discounts",
    },
    {
        id: 8,
        title: "Family Pack",
        description: "Book 4 or more tickets and get 20% off the total. Perfect for family movie nights!",
        code: "FAMILY20",
        discount: "20% OFF",
        validUntil: "Dec 31, 2026",
        color: "from-teal-500/20 via-teal-800/10 to-transparent",
        accentColor: "text-teal-400",
        badgeBg: "bg-teal-500/20 border-teal-500/30",
        icon: Star,
        category: "Weekend Deals",
    },
];

const filterTabs = [
    "All Offers",
    "Ticket Discounts",
    "Food & Snacks",
    "Premium Upgrades",
    "Student Offers",
    "Weekend Deals",
];

const faqItems = [
    {
        q: "How do I redeem an offer?",
        a: "Copy the promo code and paste it at checkout when booking your tickets on CineTicket. The discount will be applied automatically.",
    },
    {
        q: "Can I combine multiple offers?",
        a: "Only one promo code can be used per transaction. Choose the best deal that suits your booking.",
    },
    {
        q: "Are there any restrictions?",
        a: "Some offers are limited to specific days, formats, or ticket types. Check the offer details and validity period before applying.",
    },
    {
        q: "What if my code doesn't work?",
        a: "Make sure the code hasn't expired and meets the minimum requirements. If issues persist, contact our support team.",
    },
];

/* ─── Offer Coupon Card ─────────────────────────────── */
function OfferCoupon({ offer, index }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(offer.code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            layout
            className="group relative h-full"
        >
            <div className={`relative h-full bg-gradient-to-br ${offer.color} bg-[#1a1a1e] border border-white/[0.06] rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/15 hover:shadow-[0_0_40px_rgba(0,0,0,0.5)]`}>
                {/* Ticket notch effect */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-[#0b0b0f] rounded-full border-r border-white/[0.06]" />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-6 h-6 bg-[#0b0b0f] rounded-full border-l border-white/[0.06]" />

                {/* Top section */}
                <div className="p-6 pb-5 space-y-4">
                    {/* Icon + discount badge row */}
                    <div className="flex items-start justify-between">
                        <div className={`p-3 rounded-2xl ${offer.badgeBg} border backdrop-blur-sm`}>
                            <offer.icon size={22} className={offer.accentColor} />
                        </div>
                        <span className={`${offer.badgeBg} border backdrop-blur-sm px-3.5 py-1.5 rounded-xl text-[11px] font-black ${offer.accentColor} tracking-wide`}>
                            {offer.discount}
                        </span>
                    </div>

                    {/* Title & description */}
                    <div className="space-y-2">
                        <h3 className="text-lg font-black text-white tracking-tight group-hover:text-primary transition-colors leading-tight">
                            {offer.title}
                        </h3>
                        <p className="text-gray-500 text-[13px] font-medium leading-relaxed line-clamp-2">
                            {offer.description}
                        </p>
                    </div>

                    {/* Validity */}
                    <div className="flex items-center gap-2">
                        <Clock size={12} className="text-gray-600" />
                        <span className="text-gray-600 text-[11px] font-bold">
                            {offer.validUntil}
                        </span>
                    </div>
                </div>

                {/* Dashed divider */}
                <div className="relative mx-5">
                    <div className="border-t border-dashed border-white/10" />
                </div>

                {/* Bottom section — code & actions */}
                <div className="p-6 pt-5 space-y-4">
                    {/* Promo code bar */}
                    <div className="flex items-center gap-2">
                        <div className="flex-1 bg-black/40 border border-dashed border-white/10 rounded-xl flex items-center justify-between p-1 pl-4 group-hover:border-primary/30 transition-colors">
                            <span className="text-primary text-xs font-black tracking-[0.15em] truncate">
                                {offer.code}
                            </span>
                            <button
                                onClick={handleCopy}
                                className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all active:scale-95 ${
                                    copied
                                        ? "bg-green-500/20 text-green-400"
                                        : "bg-white/10 hover:bg-white/15 text-white"
                                }`}
                            >
                                {copied ? <Check size={12} /> : <Copy size={12} />}
                                {copied ? "Copied" : "Copy"}
                            </button>
                        </div>
                    </div>

                    {/* CTA */}
                    <Link
                        href="/movies"
                        className="w-full flex items-center justify-center gap-2 bg-white/[0.06] hover:bg-primary hover:text-black text-white py-3.5 rounded-xl font-black text-[11px] uppercase tracking-widest transition-all duration-300 border border-white/[0.06] hover:border-primary group/btn"
                    >
                        Use Offer
                        <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                </div>
            </div>
        </motion.div>
    );
}

/* ─── FAQ Accordion Item ────────────────────────────── */
function FaqItem({ item, index }) {
    const [open, setOpen] = useState(false);
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
        >
            <button
                onClick={() => setOpen(!open)}
                className="w-full flex items-center justify-between py-5 text-left group"
            >
                <span className="text-white font-bold text-sm group-hover:text-primary transition-colors pr-4">
                    {item.q}
                </span>
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    {open ? (
                        <ChevronUp size={16} className="text-primary" />
                    ) : (
                        <ChevronDown size={16} className="text-gray-500" />
                    )}
                </div>
            </button>
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-500 text-sm font-medium leading-relaxed pb-5 pl-0.5">
                            {item.a}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="border-b border-white/5" />
        </motion.div>
    );
}

/* ─── Main Page ─────────────────────────────────────── */
export default function OffersPage() {
    const [activeTab, setActiveTab] = useState("All Offers");

    const filteredOffers =
        activeTab === "All Offers"
            ? offers
            : offers.filter((o) => o.category === activeTab);

    return (
        <main className="bg-[#0b0b0f] min-h-screen">
            {/* ── Hero Header ────────────────────────── */}
            <div
                className="relative w-full pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-cover bg-center"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=2070&auto=format&fit=crop')`,
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0f]/80 via-[#0b0b0f]/60 to-[#0b0b0f]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0f]/90 via-transparent to-[#0b0b0f]/90" />

                <div className="relative z-10 px-6 md:px-12 lg:px-24 text-center space-y-5 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/10 rounded-full mx-auto"
                    >
                        <Zap size={14} className="text-primary fill-primary" />
                        <span className="text-white text-[10px] font-black uppercase tracking-[0.25em]">
                            Promotions Hub
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter"
                    >
                        Exclusive Movie{" "}
                        <span className="text-primary">Deals</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 font-medium text-base md:text-lg max-w-xl mx-auto leading-relaxed"
                    >
                        Save on tickets, snacks, and premium experiences. Grab a
                        deal before it expires!
                    </motion.p>

                    {/* Quick stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center justify-center gap-6 pt-2"
                    >
                        <div className="flex items-center gap-2">
                            <span className="text-primary text-xl font-black">{offers.length}</span>
                            <span className="text-gray-500 text-xs font-semibold uppercase tracking-wide">Active Deals</span>
                        </div>
                        <div className="w-px h-4 bg-white/10" />
                        <div className="flex items-center gap-2">
                            <span className="text-primary text-xl font-black">50%</span>
                            <span className="text-gray-500 text-xs font-semibold uppercase tracking-wide">Max Savings</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Featured Offer Banner ──────────────── */}
            <div className="px-6 md:px-12 lg:px-24 -mt-6 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="relative bg-gradient-to-r from-primary/20 via-primary/5 to-transparent border border-primary/20 rounded-3xl p-8 md:p-10 overflow-hidden group"
                >
                    {/* Background deco */}
                    <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 blur-[100px] rounded-full pointer-events-none" />
                    <div className="absolute -right-4 -bottom-4 opacity-[0.04]">
                        <Ticket size={200} className="text-primary" />
                    </div>

                    <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="space-y-3 flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full">
                                <Sparkles size={12} className="text-primary" />
                                <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em]">
                                    Featured Deal
                                </span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter">
                                Weekend Special —{" "}
                                <span className="text-primary">Buy 2, Get 1 Free</span>
                            </h2>
                            <p className="text-gray-400 text-sm font-medium max-w-lg leading-relaxed">
                                This weekend only — bring your friends, buy 2 IMAX
                                tickets and get a 3rd ticket completely free. Use code
                                below at checkout.
                            </p>
                            <div className="flex items-center gap-3 pt-1">
                                <div className="bg-black/40 border border-dashed border-primary/30 rounded-xl px-4 py-2.5">
                                    <span className="text-primary text-sm font-black tracking-[0.15em]">
                                        B2G1IMAX
                                    </span>
                                </div>
                                <Link
                                    href="/movies"
                                    className="bg-primary hover:bg-white text-black px-6 py-2.5 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-glow hover:scale-105 active:scale-95 flex items-center gap-2"
                                >
                                    Claim Now
                                    <ArrowRight size={14} />
                                </Link>
                            </div>
                        </div>

                        {/* Large discount badge */}
                        <div className="hidden md:flex flex-col items-center justify-center w-32 h-32 bg-primary/10 border-2 border-dashed border-primary/30 rounded-full flex-shrink-0">
                            <span className="text-primary text-3xl font-black leading-none">FREE</span>
                            <span className="text-primary/60 text-[10px] font-bold uppercase tracking-widest mt-1">Ticket</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* ── Filter Tabs ────────────────────────── */}
            <div className="px-6 md:px-12 lg:px-24 pt-12 pb-2">
                <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-2">
                    {filterTabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`whitespace-nowrap px-5 py-2.5 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all duration-300 border ${
                                activeTab === tab
                                    ? "bg-primary text-black border-primary shadow-glow"
                                    : "bg-white/[0.04] text-gray-500 border-white/[0.06] hover:text-white hover:border-white/15"
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* ── Offers Grid ────────────────────────── */}
            <div className="px-6 md:px-12 lg:px-24 py-10">
                <AnimatePresence mode="popLayout">
                    {filteredOffers.length > 0 ? (
                        <motion.div
                            layout
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
                        >
                            {filteredOffers.map((offer, i) => (
                                <OfferCoupon key={offer.id} offer={offer} index={i} />
                            ))}
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-20 space-y-4"
                        >
                            <Tag size={48} className="text-gray-700 mx-auto" />
                            <p className="text-gray-500 font-bold">
                                No offers in this category yet.
                            </p>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* ── Terms & FAQ Section ────────────────── */}
            <section className="px-6 md:px-12 lg:px-24 py-16 border-t border-white/5">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12 space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                            <Film size={12} className="text-primary" />
                            <span className="text-white text-[10px] font-black uppercase tracking-[0.2em]">
                                Help Center
                            </span>
                        </div>
                        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter">
                            Frequently Asked{" "}
                            <span className="text-primary">Questions</span>
                        </h2>
                        <p className="text-gray-500 text-sm font-medium">
                            Everything you need to know about our promotions.
                        </p>
                    </div>

                    <div>
                        {faqItems.map((item, i) => (
                            <FaqItem key={i} item={item} index={i} />
                        ))}
                    </div>

                    {/* Fine print */}
                    <div className="mt-12 p-6 bg-white/[0.02] border border-white/5 rounded-2xl">
                        <h4 className="text-white text-xs font-black uppercase tracking-widest mb-3">
                            Terms & Conditions
                        </h4>
                        <ul className="text-gray-600 text-xs font-medium space-y-2 leading-relaxed list-disc list-inside">
                            <li>All offers are subject to availability and may change without notice.</li>
                            <li>Only one promo code can be applied per transaction.</li>
                            <li>CineTicket reserves the right to modify or discontinue offers at any time.</li>
                            <li>Student offers require a valid student ID at the venue.</li>
                            <li>Offers cannot be combined with other promotions or loyalty rewards.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}
