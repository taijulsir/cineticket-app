"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
    Mail,
    Lock,
    Eye,
    EyeOff,
    Ticket,
    ArrowRight,
    Github,
    Star,
    Zap,
    Shield,
    Bookmark,
    Tag,
} from "lucide-react";
import { motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext/AuthContext";
import { GoogleLogin } from "@react-oauth/google";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

const features = [
    {
        icon: Zap,
        title: "Book Movies Faster",
        desc: "Skip the queue — book in seconds.",
    },
    {
        icon: Bookmark,
        title: "Save Favorites",
        desc: "Track cinemas and upcoming shows.",
    },
    {
        icon: Tag,
        title: "Exclusive Offers",
        desc: "Members-only discounts and deals.",
    },
    {
        icon: Shield,
        title: "Secure Payments",
        desc: "Your transactions are always safe.",
    },
];

const SignInPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const res = await auth?.login({ email, password });
            if (res) {
                toast.success("Signed in successfully");
                const dest = auth?.returnUrl || "/";
                auth?.setReturnUrl && auth.setReturnUrl(null);
                router.push(dest);
            } else {
                toast.error("Invalid credentials");
            }
        } catch (err) {
            toast.error("Sign in failed");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#0b0b0f] pt-[72px] lg:pt-[90px] flex flex-col lg:flex-row">
            {/* ── Left Panel — Branding & Visual ────── */}
            <div className="relative lg:w-[55%] xl:w-[50%] flex-shrink-0 overflow-hidden">
                {/* Background image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1925&auto=format&fit=crop')`,
                    }}
                />
                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0b0b0f] via-[#0b0b0f]/80 to-[#0b0b0f]/95 lg:to-[#0b0b0f]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0f] via-transparent to-[#0b0b0f]/60" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 lg:p-16 min-h-[320px] lg:min-h-[calc(100vh-90px)]">
                    {/* Top — Logo */}
                    {/* <div>
                        <Link href="/" className="inline-flex items-center gap-3 group">
                            <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-glow">
                                <Ticket className="text-black" size={22} />
                            </div>
                            <span className="text-white text-2xl font-black tracking-tighter">
                                Cine<span className="text-primary">T</span>icket
                            </span>
                        </Link>
                    </div> */}

                    {/* Middle — Tagline */}
                    <div className="space-y-8 py-10 lg:py-0">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-4"
                        >
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tighter leading-[1.1]">
                                Your cinema
                                <br />
                                experience,{" "}
                                <span className="text-primary">elevated.</span>
                            </h1>
                            <p className="text-gray-500 text-sm md:text-base font-medium max-w-md leading-relaxed">
                                Sign in to access your bookings, saved theaters, and
                                exclusive member benefits.
                            </p>
                        </motion.div>

                        {/* Feature grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            className="grid grid-cols-2 gap-4 max-w-md"
                        >
                            {features.map((f, i) => (
                                <div
                                    key={i}
                                    className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.04]"
                                >
                                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                                        <f.icon size={16} className="text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-white text-xs font-bold leading-tight">
                                            {f.title}
                                        </p>
                                        <p className="text-gray-600 text-[11px] font-medium mt-0.5">
                                            {f.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Bottom — Social proof */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="hidden lg:flex items-center gap-4"
                    >
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div
                                    key={i}
                                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 border-2 border-[#0b0b0f] flex items-center justify-center"
                                >
                                    <span className="text-primary text-[9px] font-black">
                                        {String.fromCharCode(64 + i)}
                                    </span>
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="flex items-center gap-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star
                                        key={i}
                                        size={10}
                                        className="text-primary fill-primary"
                                    />
                                ))}
                            </div>
                            <p className="text-gray-500 text-[11px] font-semibold mt-0.5">
                                Loved by{" "}
                                <span className="text-white font-bold">1.5M+</span>{" "}
                                movie fans
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* ── Right Panel — Auth Form ────────────── */}
            <div className="flex-1 flex items-center justify-center px-6 py-12 lg:py-0 lg:px-12 xl:px-20">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="w-full max-w-md"
                >
                    {/* Header */}
                    <div className="space-y-2 mb-8">
                        <h2 className="text-2xl md:text-3xl font-black text-white tracking-tighter">
                            Welcome Back
                        </h2>
                        <p className="text-gray-500 text-sm font-medium">
                            Enter your credentials to access your account.
                        </p>
                    </div>

                    {/* Social Login */}
                    <div className="grid grid-cols-1 gap-3 mb-8">
                        <GoogleLogin
                            onSuccess={(credentialResponse) => {
                                const cred = credentialResponse?.credential;
                                if (cred) {
                                    auth?.googleLogin(cred).then(() => {
                                        toast.success("Signed in with Google");
                                    }).catch(() => toast.error("Google sign-in failed"));
                                } else {
                                    toast.error("Google credential missing");
                                }
                            }}
                            onError={() => toast.error("Google sign-in failed")}
                        />
                    </div>
                    {/* <button
                        type="button"
                        className="flex items-center justify-center gap-2.5 bg-white/[0.04] border border-white/[0.06] py-3.5 rounded-xl hover:bg-white/[0.08] hover:border-white/15 transition-all text-white font-bold text-sm group"
                    >
                        <Github size={18} />
                        GitHub
                    </button> */}

                    {/* Divider */}
                    <div className="relative mb-8">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/[0.06]" />
                        </div>
                        <div className="relative flex justify-center">
                            <span className="px-4 bg-[#0b0b0f] text-gray-600 text-[10px] font-black uppercase tracking-[0.2em]">
                                Or sign in with email
                            </span>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-5">
                        {/* Email */}
                        <div className="space-y-2">
                            <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em] ml-1">
                                Email Address
                            </label>
                            <div className="relative group">
                                <Mail
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-primary transition-colors"
                                    size={17}
                                />
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl py-3.5 pl-11 pr-4 text-white text-sm outline-none focus:border-primary/50 focus:bg-white/[0.05] focus:shadow-[0_0_0_3px_rgba(231,173,4,0.08)] transition-all font-medium placeholder:text-gray-700"
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center px-1">
                                <label className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">
                                    Password
                                </label>
                                <Link
                                    href="/forgetPassword"
                                    className="text-[10px] font-bold text-primary/80 hover:text-primary transition-colors uppercase tracking-widest"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                            <div className="relative group">
                                <Lock
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-primary transition-colors"
                                    size={17}
                                />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Enter your password"
                                    className="w-full bg-white/[0.03] border border-white/[0.06] rounded-xl py-3.5 pl-11 pr-12 text-white text-sm outline-none focus:border-primary/50 focus:bg-white/[0.05] focus:shadow-[0_0_0_3px_rgba(231,173,4,0.08)] transition-all font-medium placeholder:text-gray-700"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-white transition-colors"
                                >
                                    {showPassword ? (
                                        <EyeOff size={17} />
                                    ) : (
                                        <Eye size={17} />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember me */}
                        <div className="flex items-center gap-2.5">
                            <input
                                type="checkbox"
                                id="remember"
                                className="w-4 h-4 rounded bg-white/5 border border-white/10 text-primary focus:ring-primary/30 focus:ring-offset-0 cursor-pointer accent-[#E7AD04]"
                            />
                            <label
                                htmlFor="remember"
                                className="text-gray-500 text-xs font-medium cursor-pointer select-none"
                            >
                                Keep me signed in
                            </label>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-primary hover:bg-[#f5bf1a] text-black py-4 rounded-xl font-black text-sm transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 uppercase tracking-widest relative overflow-hidden"
                        >
                            {isLoading ? (
                                <>
                                    <svg
                                        className="animate-spin h-4 w-4 text-black"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                        />
                                    </svg>
                                    Signing in…
                                </>
                            ) : (
                                <>
                                    Sign In
                                    <ArrowRight size={16} />
                                </>
                            )}
                        </button>
                    </form>

                    {/* Sign up link */}
                    <p className="mt-8 text-center text-gray-600 text-sm font-medium">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/signup"
                            className="text-primary font-bold hover:underline"
                        >
                            Create one for free
                        </Link>
                    </p>

                    {/* Terms */}
                    <p className="mt-4 text-center text-gray-700 text-[11px] font-medium leading-relaxed">
                        By signing in, you agree to our{" "}
                        <Link href="#" className="text-gray-500 hover:text-white underline">
                            Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="#" className="text-gray-500 hover:text-white underline">
                            Privacy Policy
                        </Link>
                    </p>
                </motion.div>
            </div>
        </main>
    );
};

export default SignInPage;
