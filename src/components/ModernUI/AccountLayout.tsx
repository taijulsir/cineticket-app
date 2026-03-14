"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { User, Bookmark, Ticket, LogOut, Settings, Heart } from "lucide-react";
import { useAuth } from "@/context/AuthContext/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import { motion } from "framer-motion";

const SIDEBAR_LINKS = [
  { name: "Profile", href: "/profile", icon: User },
  { name: "My Bookings", href: "/my-bookings", icon: Bookmark },
  { name: "My Tickets", href: "/my-tickets", icon: Ticket },
  { name: "Saved Movies", href: "/saved-movies", icon: Heart },
  { name: "Preferences", href: "/preferences", icon: Settings },
];

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const auth = useAuth();

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-[#0b0b0f] text-white pt-28 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-8 lg:gap-12">
            
            {/* Sidebar Navigation */}
            <aside className="w-full md:w-64 lg:w-72 shrink-0">
              <div className="sticky top-32 p-6 bg-white/5 border border-white/10 rounded-[2rem] backdrop-blur-xl">
                {/* User mini profile */}
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-white/10">
                  <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center font-black text-xl shadow-glow">
                    {auth?.customer?.name?.substring(0, 1).toUpperCase() || 'U'}
                  </div>
                  <div className="overflow-hidden">
                    <h3 className="font-bold text-white truncate">{auth?.customer?.name || 'User'}</h3>
                    <p className="text-xs text-gray-400 truncate">{auth?.customer?.email}</p>
                  </div>
                </div>

                {/* Nav Links */}
                <nav className="space-y-2">
                  {SIDEBAR_LINKS.map((link) => {
                    const isActive = pathname === link.href;
                    const Icon = link.icon;
                    return (
                      <Link
                        key={link.name}
                        href={link.href}
                        className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-medium text-sm ${
                          isActive 
                            ? "bg-primary/10 text-primary border border-primary/20" 
                            : "text-gray-400 hover:text-white hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        <Icon size={18} className={isActive ? "text-primary" : "text-gray-500"} />
                        {link.name}
                      </Link>
                    );
                  })}
                </nav>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <button 
                    onClick={() => auth?.logout()} 
                    className="flex w-full items-center gap-3 px-4 py-3 rounded-2xl transition-all font-medium text-sm text-red-400 hover:bg-red-500/10"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </div>
              </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 min-w-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                {children}
              </motion.div>
            </main>
            
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}
