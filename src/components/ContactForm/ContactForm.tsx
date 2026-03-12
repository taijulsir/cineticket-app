"use client";
import React, { useState } from 'react';
import { Mail, User, MessageSquare, Clipboard, Loader2, CheckCircle } from 'lucide-react';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = { name: '', email: '', subject: '', message: '' };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  function validate() {
    const e: Partial<FormState> = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!emailRegex.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    setErrors({});
    setSuccess(false);

    try {
      // Simulate request
      await new Promise((r) => setTimeout(r, 900));
      setSuccess(true);
      setForm(initialState);
    } catch (err) {
      setErrors({ message: 'Failed to send. Please try again.' });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-xl">
      <div className="bg-white/5 border border-white/5 rounded-2xl p-4 shadow-soft">
        <h4 className="text-lg font-semibold">Send us a message</h4>
        <p className="text-gray-300 text-xs mt-1">Our team typically responds within 1 business day.</p>

        <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4">
          <label className="flex flex-col">
            <div className="flex items-center gap-2 text-gray-300 text-xs mb-1">
              <User size={14} /> Full Name
            </div>
            <input
              value={form.name}
              onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
              className={`bg-transparent border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none ${errors.name ? 'ring-2 ring-red-500' : 'focus:ring-2 focus:ring-primary'}`}
              placeholder="Jane Doe"
            />
            {errors.name && <span className="text-xs text-red-400 mt-1">{errors.name}</span>}
          </label>

          <label className="flex flex-col">
            <div className="flex items-center gap-2 text-gray-300 text-xs mb-1">
              <Mail size={14} /> Email Address
            </div>
            <input
              value={form.email}
              onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
              className={`bg-transparent border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none ${errors.email ? 'ring-2 ring-red-500' : 'focus:ring-2 focus:ring-primary'}`}
              placeholder="you@example.com"
            />
            {errors.email && <span className="text-xs text-red-400 mt-1">{errors.email}</span>}
          </label>

          <label className="flex flex-col">
            <div className="flex items-center gap-2 text-gray-300 text-xs mb-1">
              <Clipboard size={14} /> Subject
            </div>
            <input
              value={form.subject}
              onChange={(e) => setForm((s) => ({ ...s, subject: e.target.value }))}
              className={`bg-transparent border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none ${errors.subject ? 'ring-2 ring-red-500' : 'focus:ring-2 focus:ring-primary'}`}
              placeholder="Booking help"
            />
            {errors.subject && <span className="text-xs text-red-400 mt-1">{errors.subject}</span>}
          </label>

          <label className="flex flex-col">
            <div className="flex items-center gap-2 text-gray-300 text-xs mb-1">
              <MessageSquare size={14} /> Message
            </div>
            <textarea
              value={form.message}
              onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
              rows={4}
              className={`bg-transparent border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none resize-none ${errors.message ? 'ring-2 ring-red-500' : 'focus:ring-2 focus:ring-primary'}`}
              placeholder="Tell us how we can help..."
            />
            {errors.message && <span className="text-xs text-red-400 mt-1">{errors.message}</span>}
          </label>

          <div className="flex items-center justify-between gap-4">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-3 bg-primary text-black px-4 py-2 rounded-xl font-semibold text-sm disabled:opacity-60"
            >
              {loading ? <Loader2 className="animate-spin" size={16} /> : 'Send Message'}
            </button>

            {success && (
              <div className="inline-flex items-center gap-2 text-sm text-green-300">
                <CheckCircle /> <span>Message sent. We will contact you soon.</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
