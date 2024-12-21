'use client'
import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for the hamburger menu

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to track whether the menu is open or closed

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex items-center justify-between px-7 py-4 h-50">
      <div className="flex items-center">
        <Link href="/"><h1 className="text-3xl font-bold text-white hover:text-lime-400">Amritpal Singh</h1></Link>
        
      </div>

      <nav className="flex justify-between items-center py-4">
        {/* Desktop navigation */}
        <ul className="hidden lg:flex items-center gap-9">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/project" className="text-white hover:text-gray-300">
              Project
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile menu toggle button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white">
            {menuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`${
          menuOpen ? 'block' : 'hidden'
        } lg:hidden absolute top-0 left-0 w-full bg-black bg-opacity-80 p-4`}
      >
        <ul className="flex flex-col items-center gap-6">
          <li>
            <Link href="/" className="text-white hover:text-gray-300" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-white hover:text-gray-300" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="/project" className="text-white hover:text-gray-300" onClick={toggleMenu}>
              Project
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-300" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
