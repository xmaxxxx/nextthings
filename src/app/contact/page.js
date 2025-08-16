"use client";
import { motion } from "framer-motion";


import ContactCard from '@/app/components/ContactCard';
import ContactForm from '@/app/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="relative py-16 px-4 sm:px-8 lg:px-24 max-w-7xl mx-auto">
      {/* Subtle gradient/particle background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <svg width="100%" height="100%" className="absolute inset-0" style={{ opacity: 0.15 }}>
          <defs>
            <radialGradient id="contactGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="60%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#9333ea" />
            </radialGradient>
          </defs>
          <circle cx="60%" cy="40%" r="180" fill="url(#contactGrad)" />
          <circle cx="20%" cy="80%" r="90" fill="#6366f1" opacity="0.3" />
          <circle cx="80%" cy="70%" r="60" fill="#06b6d4" opacity="0.2" />
        </svg>
      </div>
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl sm:text-4xl font-extrabold text-center mb-4 text-white"
        >
          We’d love to hear <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent font-extrabold">from you</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="text-center text-gray-300 mb-12"
        >
          Whether you’ve got a question, project idea, or just want to say hello—my inbox is open.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Contact Info Cards */}
          <div className="space-y-6">
            <ContactCard icon={<Mail size={24} />} title="Email" value="amritpal29919singh@gmail.com" />
            <ContactCard icon={<Phone size={24} />} title="Phone" value="+1 (365) 883‑5997" />
            <ContactCard icon={<MapPin size={24} />} title="Location" value="Toronto, ON" />
          </div>
          {/* Right: Contact Form */}
          <ContactForm />
        </div>
      </div>
      <style jsx>{`
        .contact-gradient {
          background: linear-gradient(135deg, #06b6d4 10%, #6366f1 60%, #9333ea 100%);
        }
      `}</style>
    </section>
  );
}
