'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`w-full h-16 px-4 md:px-8 flex items-center justify-between text-[18px] relative ${inter.className}`}
    >
      <div className="flex items-center">
        <Image src="/Pavilion.svg" alt="Pavilion logo" width={100} height={100} className="md:w-[120px]" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row gap-8">
        <Link href="/" className="hover:text-blue-200 transition-colors">Home</Link>
        <Link href="/gallery" className="hover:text-blue-200 transition-colors">Gallery</Link>
        <Link href="/about" className="hover:text-blue-200 transition-colors">About Us</Link>
      </div>

      <div className="hidden md:block bg-linear-to-r from-blue-200 to-blue-300 p-[1.3px] rounded-full">
        <button className="bg-white px-6 py-2 rounded-full w-full font-bold hover:bg-transparent hover:text-white transition-all cursor-pointer">
          Contact Us
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden flex flex-col justify-center items-center gap-1.5 z-50 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-black transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-semibold">Home</Link>
        <Link href="/gallery" onClick={() => setIsOpen(false)} className="text-2xl font-semibold">Gallery</Link>
        <Link href="/about" onClick={() => setIsOpen(false)} className="text-2xl font-semibold">About Us</Link>
        <div className="bg-linear-to-r from-blue-200 to-blue-300 p-[1.3px] rounded-full mt-4">
          <button className="bg-white px-8 py-3 rounded-full w-full font-bold text-xl">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
