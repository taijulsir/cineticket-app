"use client"
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function ContactDetails() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col h-full justify-center"
    >
      <motion.div variants={itemVariants} className="mb-8">
        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Get In Touch</span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4">Contact Us</h1>
        <p className="text-gray-400 text-lg leading-relaxed max-w-md">
          We&apos;d love to hear from you! Whether you have questions about our films, need assistance with tickets, or want to collaborate, feel free to reach out.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 mb-10">
        <motion.div variants={itemVariants} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300">
          <div className="flex justify-start items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-1">Email</p>
              <Link href="mailto:info@cineticket.com" className="text-white text-lg hover:text-primary transition-colors">info@cineticket.com</Link>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300">
          <div className="flex justify-start items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-1">Phone</p>
              <Link href="tel:+61406063058" className="text-white text-lg hover:text-primary transition-colors">+61 406 063 058</Link>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors duration-300">
          <div className="flex justify-start items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-primary/20 text-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-primary group-hover:text-black transition-all duration-300">
              <MapPin size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-1">Location</p>
              <p className="text-white text-lg">Denham Court, NSW 2565, Australia</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Contact Form Button */}
      <motion.div variants={itemVariants}>
        <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-primary hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(231,173,4,0.4)]">
          <Send size={18} />
          Send Us A Message
        </button>
      </motion.div>
    </motion.div>
  )
}

export default ContactDetails