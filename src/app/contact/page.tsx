import React from 'react';
import ContactForm from '@/components/ContactForm/ContactForm';
import { Mail, Phone, Briefcase, Zap } from 'lucide-react';

export const metadata = {
  title: 'Contact CineTicket',
  description: 'Contact the CineTicket team for support, inquiries, or partnerships.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0f] text-white">
  <section className="pt-24 pb-12 max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-4">
            <h1 className="text-3xl font-black">Contact CineTicket</h1>
            <p className="text-gray-300">Have questions about movies, bookings, or partnerships? Our team is here to help.</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-white/5 text-primary"><Mail /></div>
                  <div>
                      <h4 className="font-semibold text-base">Customer Support</h4>
                      <a className="text-gray-300 text-xs break-words" href="mailto:support@cineticket.com">support@cineticket.com</a>
                  </div>
                </div>
              </div>

                <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-white/5 text-primary"><Briefcase /></div>
                  <div>
                      <h4 className="font-semibold text-base">Business Inquiries</h4>
                      <a className="text-gray-300 text-xs break-words" href="mailto:business@cineticket.com">business@cineticket.com</a>
                  </div>
                </div>
              </div>

                <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-white/5 text-primary"><Zap /></div>
                  <div>
                      <h4 className="font-semibold text-base">Press / Media</h4>
                      <a className="text-gray-300 text-xs break-words" href="mailto:media@cineticket.com">media@cineticket.com</a>
                  </div>
                </div>
              </div>

                <div className="bg-white/5 border border-white/5 rounded-2xl p-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-white/5 text-primary"><Phone /></div>
                  <div>
                      <h4 className="font-semibold text-base">Phone Support</h4>
                      <div className="text-gray-300 text-xs">+1 (555) 123-4567</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white/3 border border-white/5 rounded-2xl p-4">
              <h4 className="font-semibold text-base">Headquarters</h4>
              <div className="mt-2 text-gray-300">CineTicket Headquarters<br/>New York, USA</div>
              <div className="mt-4 h-40 bg-[linear-gradient(135deg,#111,#161616)] rounded-lg flex items-center justify-center text-gray-500">Map placeholder</div>
            </div>
          </div>

          <div>
            <ContactForm />

            <div className="mt-8 bg-white/5 border border-white/5 rounded-2xl p-4">
              <h4 className="font-semibold text-base">Frequently asked questions</h4>
              <ul className="mt-4 space-y-3 text-gray-300">
                <li>
                  <strong>How do I book tickets?</strong>
                  <p className="text-sm">Find a movie, choose a showtime, select seats and complete checkout.</p>
                </li>
                <li>
                  <strong>Can I cancel a booking?</strong>
                  <p className="text-sm">Cancellation policies depend on the theater and showtime.</p>
                </li>
                <li>
                  <strong>What payment methods are accepted?</strong>
                  <p className="text-sm">We support major credit cards and Stripe-backed payments.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

