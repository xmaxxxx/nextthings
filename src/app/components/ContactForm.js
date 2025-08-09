"use client"

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Simulate success for UI demo
    setStatus("success");
    setUser({ username: "", email: "", phone: "", message: "" });
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background rounded-2xl shadow-xl p-8 flex flex-col gap-6 border border-gray-800"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="username" className="text-sm font-semibold text-gray-300">Name</label>
        <input
          type="text"
          name="username"
          id="username"
          value={user.username}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="Your Name"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-semibold text-gray-300">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={handleChange}
          required
          className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="you@email.com"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-sm font-semibold text-gray-300">Phone</label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={user.phone}
          onChange={handleChange}
          className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="Your Phone Number"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-semibold text-gray-300">Message</label>
        <textarea
          name="message"
          id="message"
          value={user.message}
          onChange={handleChange}
          required
          rows={4}
          className="px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
          placeholder="Type your message..."
        />
      </div>
      <button
        type="submit"
        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        Send Message
      </button>
      {status === "success" && (
        <div className="text-green-500 text-center font-semibold mt-2">Message sent! Thank you for reaching out.</div>
      )}
      {status === "error" && (
        <div className="text-red-500 text-center font-semibold mt-2">Something went wrong. Please try again.</div>
      )}
    </motion.form>
  );
}
