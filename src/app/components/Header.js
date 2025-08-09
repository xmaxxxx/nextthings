'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Project', href: '/project' },
    { name: 'Contact', href: '/contact' },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-8 py-6 bg-background shadow-lg relative">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <h1 className="h2 font-extrabold text-white tracking-tight hover:text-blue-400 transition-colors duration-200">
            Amritpal Singh
          </h1>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="flex justify-between items-center py-2">
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-lg font-medium text-gray-200 hover:text-blue-400 transition-colors duration-200 px-2 py-1 rounded-lg"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full bg-black bg-opacity-80 p-4 z-50">
          <ul className="flex flex-col items-center gap-6">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-lg font-medium text-white hover:text-blue-400 transition-colors duration-200 px-2 py-1 rounded-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
