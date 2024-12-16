'use client'

import { Mulish } from "next/font/google";
import { useState } from "react";

const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900']
});

const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState(null);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message
        })
      });

      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: ""
        });
        setStatus('success');
      } else {
        setStatus('error');
      }

    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mt-3 mx-auto p-6 rounded-lg bg-gray-800">
      <div className="mb-6">
        <label htmlFor="username" className="block text-lg font-semibold mb-2 text-white">
          Enter your name
        </label>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Enter your name"
          className="w-full p-3 border border-gray-300 rounded-lg text-lg text-black bg-white"
          value={user.username}
          onChange={handleChange}
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-lg font-semibold mb-2 text-white">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          className="w-full p-3 border border-gray-300 rounded-lg text-lg text-black bg-white"
          value={user.email}
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block text-lg font-semibold mb-2 text-white">
          Phone Number
        </label>
        <input
          type="number"
          name="phone"
          id="phone"
          placeholder="Enter your phone"
          className="w-full p-3 border border-gray-300 rounded-lg text-lg text-black bg-white"
          value={user.phone}
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-lg font-semibold mb-2 text-white">
          Message
        </label>
        <textarea
          name="message"
          id="message"
          rows="5"
          placeholder="Enter your Message"
          className="w-full p-3 border border-gray-300 rounded-lg text-lg text-black bg-white"
          value={user.message}
          onChange={handleChange}
          required
          autoComplete="off"
        />
      </div>

      <div>
        {status === 'success' && <p className="text-green-500 mb-4">Thank you for your message!</p>}
        {status === 'error' && <p className="text-red-500 mb-4">There was an error submitting your message. Please try again.</p>}

        <button
          type="submit"
          className="w-full p-3 bg-green-500 text-white text-lg rounded-lg hover:bg-green-600 focus:outline-none"
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
