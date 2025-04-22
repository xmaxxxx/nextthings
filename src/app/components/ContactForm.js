'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [user, setUser] = useState({
    username: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState(null)

  const handleChange = e => {
    setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
      })
      if (res.ok) {
        setStatus('success')
        setUser({ username: '', email: '', phone: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full bg-gray-800 p-8 rounded-2xl shadow-lg"
    >
      {status === 'success' && (
        <p className="mb-4 text-green-400">✅ Thanks for your message! I’ll be in touch soon.</p>
      )}
      {status === 'error' && (
        <p className="mb-4 text-red-400">⚠️ Something went wrong. Please try again.</p>
      )}

      {[
        { label: 'Name', name: 'username', type: 'text', placeholder: 'Your full name' },
        { label: 'Email', name: 'email', type: 'email', placeholder: 'you@domain.com' },
        { label: 'Phone', name: 'phone', type: 'tel', placeholder: '+1 234 567‑8901' }
      ].map(field => (
        <div key={field.name} className="mb-6">
          <label htmlFor={field.name} className="block text-sm font-medium mb-2">
            {field.label}
          </label>
          <input
            id={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            required
            value={user[field.name]}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>
      ))}

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Tell me what’s on your mind..."
          required
          value={user.message}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-white text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-green-500 hover:bg-green-600 rounded-lg text-white font-semibold transition"
      >
        Send Message
      </button>
    </motion.form>
  )
}
