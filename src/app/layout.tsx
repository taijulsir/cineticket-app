import { AuthContextProvider } from "@/context/AuthContext/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/ModernUI/Navbar";
import Footer from "@/components/ModernUI/Footer";
import GoogleAnalytics from "@/config/GoogleAnalytics";
import FacebookPixel from "@/config/FacebookPixel";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata = {
  title: {
    default: "CineTicket – Experience Cinema Like Never Before",
    template: "%s | CineTicket"
  },
  description: "CineTicket is your premium gateway to the latest blockbusters, trailers, and exclusive cinema events. Book tickets instantly with our modern, seamless booking platform.",
  keywords: ["movie tickets", "cinema", "showtimes", "blockbusters", "trailers", "CineTicket"],
  openGraph: {
    title: "CineTicket – Movie Tickets & Showtimes",
    description: "Book your favorite movies instantly on CineTicket. Modern UI, seamless booking experience.",
    url: "https://cineticket.vercel.app",
    siteName: "CineTicket",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body>
          <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}>
          <AuthContextProvider>
            <AppContextProvider>
            <FacebookPixel />
            <GoogleAnalytics />
            <Navbar />
            {children}
            <Footer />
            <Toaster
              position="top-right"
              reverseOrder={false}
            />
          </AppContextProvider>
        </AuthContextProvider>
        </GoogleOAuthProvider>
      </body>
    </html>
  );
}
