'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Project', href: '/project' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="flex items-center justify-between px-7 py-4 h-50">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="/">
          <h1 className="text-3xl font-bold text-white hover:text-gray-300">
            Amritpal Singh
          </h1>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <nav className="flex justify-between items-center py-4">
        <ul className="hidden lg:flex items-center gap-9">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-white hover:text-gray-300 transition duration-300"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } lg:hidden absolute top-0 left-0 w-full bg-black bg-opacity-80 p-4`}
      >
        <ul className="flex flex-col items-center gap-6">
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="text-white hover:text-gray-300 transition duration-300"
                onClick={toggleMenu}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
