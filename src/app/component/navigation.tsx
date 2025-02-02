"use client";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
</style>

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white px-8 py-3 relative lg:flex font-[open-sans] z-10">
      <div className="flex justify-between items-center w-full">
        {/* Brand Logo */}
        <Link href="#" className="text-xl
         md:text-2xl hover:text-green-400 uppercase font-bold whitespace-nowrap">
          Pakistan's hidden gems
        </Link>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-2xl focus:outline-none z-50"
        >
          {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`lg:flex md:items-center lg:space-x-8 absolute 
        sm:static font-bold  left-0 
         w-full bg-gray-800 md:text-base
         lg:bg-transparent transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link href="/" className="block px-6 py-2 hover:text-gray-400">
          Home
        </Link>
        <Link href="/contact" className="block px-6 py-2 hover:text-gray-400">
          Contact
        </Link>
        <Link href="/blog" className="block px-6 py-2 hover:text-gray-400">
          Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
