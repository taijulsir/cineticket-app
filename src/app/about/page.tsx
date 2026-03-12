import Link from 'next/link';
import { Film, Clock, Star, Users, Database, CreditCard, Globe, Search } from 'lucide-react';

export const metadata = {
  title: 'About CineTicket',
  description: 'Learn about CineTicket, a modern movie ticket booking platform.',
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white/5 border border-white/5 rounded-2xl p-4 flex flex-col gap-3 hover:scale-[1.02] transition-transform overflow-hidden">
    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary">{icon}</div>
    <h4 className="text-white font-semibold text-base truncate">{title}</h4>
    <p className="text-gray-300 text-sm leading-relaxed">{desc}</p>
  </div>
);

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">
      {/* HERO / INTRO */}
      <section className="relative overflow-hidden">
        {/* cinematic background image */}
        <img src="/Assets/about/about-img.png" alt="cinema" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none" />
        <div className="bg-gradient-to-br from-[#08080a]/70 via-[#0b0b0f] to-[#0b0b0f]">
          <div className="pt-32 pb-20 relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h1 className="text-3xl md:text-5xl font-black leading-tight tracking-tight">The Future of Movie Ticket Booking</h1>
                <p className="text-gray-300 max-w-2xl text-base">
                  CineTicket is a modern cinema booking platform designed to simplify how audiences discover movies, reserve seats, and enjoy the theater experience.
                </p>

                <div className="flex flex-wrap gap-4 mt-6">
                  <Link href="/movies" className="inline-flex items-center gap-3 bg-primary text-black px-5 py-2 rounded-2xl font-bold shadow-glow hover:scale-[1.02] transition-transform text-sm">
                    Explore Movies
                  </Link>
                  <Link href="/movies" className="inline-flex items-center gap-3 border border-white/10 px-5 py-2 rounded-2xl text-white hover:bg-white/5 transition-colors text-sm">
                    View Showtimes
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="rounded-3xl overflow-hidden bg-gradient-to-tr from-black/40 to-white/2 border border-white/5 p-6">
                  <img src="/Assets/about/about-img.png" alt="cinema" className="w-full h-72 md:h-80 object-cover rounded-2xl" />
                  <div className="-mt-16 p-6 bg-gradient-to-t from-black/40 to-transparent rounded-xl">
                    <p className="text-sm text-gray-300">Cinematic experience sample</p>
                    <div className="mt-4 flex gap-4">
                      <div className="bg-white/5 px-3 py-1 rounded-lg">IMAX</div>
                      <div className="bg-white/5 px-3 py-1 rounded-lg">4DX</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold">Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              CineTicket was created to demonstrate a full-featured movie ticket booking platform. It combines modern UI design with powerful backend architecture including real-time seat selection, showtime management, and payment integration.
            </p>
            <p className="text-gray-400">
              Built with thoughtfully designed components and a production-minded backend, CineTicket showcases seat maps, admin tools, and a streamlined checkout flow.
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full rounded-2xl bg-gradient-to-br from-white/3 to-transparent border border-white/5 p-4 shadow-soft overflow-hidden">
              <img src="/Assets/about/about-modal.png" alt="Our story" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM FEATURES */}
      <section className="bg-[#070708] py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <h3 className="text-2xl font-extrabold">Platform Features</h3>
          <p className="text-gray-400 mt-2 max-w-2xl">Powerful features designed for movie-goers and cinema operators.</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                    <FeatureCard icon={<Film size={18} />} title="Movie Discovery" desc="Browse latest movies, trailers and details." />
                    <FeatureCard icon={<Users size={18} />} title="Seat Selection" desc="Interactive seat map with real-time availability." />
                    <FeatureCard icon={<Clock size={18} />} title="Showtime Scheduling" desc="Multiple theaters and showtime management." />
                    <FeatureCard icon={<CreditCard size={18} />} title="Secure Payments" desc="Integrated checkout for smooth ticket booking." />
                    <FeatureCard icon={<Search size={18} />} title="Smart Filtering" desc="Find movies by genre, language, format and rating." />
                    <FeatureCard icon={<Globe size={18} />} title="Responsive Design" desc="Fully optimized for desktop and mobile." />
                  </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-16">
        <h3 className="text-2xl font-extrabold">How CineTicket Works</h3>
        <p className="text-gray-400 mt-2 max-w-2xl">A simple flow that gets you from discovery to seats in just a few steps.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white/5 border border-white/5 rounded-2xl p-4 text-center">
            <div className="mx-auto w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary mb-2">1</div>
            <h4 className="font-semibold text-base">Discover</h4>
            <p className="text-gray-300 text-sm mt-1">Find movies, watch trailers and read reviews.</p>
          </div>

          <div className="bg-white/5 border border-white/5 rounded-2xl p-4 text-center">
            <div className="mx-auto w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary mb-2">2</div>
            <h4 className="font-semibold text-base">Select Seats</h4>
            <p className="text-gray-300 text-sm mt-1">Choose your preferred seats with live availability.</p>
          </div>

          <div className="bg-white/5 border border-white/5 rounded-2xl p-4 text-center">
            <div className="mx-auto w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-primary mb-2">3</div>
            <h4 className="font-semibold text-base">Checkout</h4>
            <p className="text-gray-300 text-sm mt-1">Secure payment and instant confirmation.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-20 text-center">
        <div className="bg-gradient-to-br from-white/3 to-transparent border border-white/5 rounded-3xl p-10">
          <h3 className="text-3xl font-extrabold">Ready to Experience CineTicket?</h3>
          <p className="text-gray-300 mt-3">Explore movies, check offers, and try the booking flow.</p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/movies" className="bg-primary text-black px-6 py-3 rounded-2xl font-bold">Browse Movies</Link>
            <Link href="/offers" className="border border-white/10 px-6 py-3 rounded-2xl">View Offers</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
// import AboutDetails from '@/components/About/AboutDetails'
// import AboutUs from '@/components/About/AboutUs'
// import Partner from '@/components/About/Partner'
// import React from 'react'

// function page() {
//   return (
//     <div className='w-10/12 mx-auto mt-[70px] lg:mt-[90px]'>
//       <AboutUs/>
//       <AboutDetails/>
//       <Partner/>
//     </div>
//   )
// }

// export default page
