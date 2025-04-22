'use client'

import React from 'react'

export default function ContactCard({ icon, title, value }) {
  return (
    <div className="flex items-start gap-4 p-4 bg-gray-700 rounded-2xl hover:bg-gray-600 transition">
      <div className="p-3 bg-green-500 rounded-lg text-white">
        {icon}
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-300">{title}</p>
        <p className="text-lg font-medium">{value}</p>
      </div>
    </div>
  )
}
