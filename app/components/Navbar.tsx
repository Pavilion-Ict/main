'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation"; // Import this

const inter = Inter({ subsets: ["latin"] });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav className={`w-full h-16 px-4 md:px-13 flex items-center justify-between text-[18px] relative ${inter.className}`}>
      <div className="flex items-center">
        <Image src="/Pavilion.svg" alt="Pavilion logo" width={100} height={100} className="md:w-[120px]" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-row gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.href} 
              href={link.href} 
              className={`relative transition-colors hover:text-blue-400 ${isActive ? 'text-blue-400 font-medium' : 'text-black'}`}
            >
              {link.name}
              {/* Active Underline */}
              {isActive && (
                <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400 rounded-full" />
              )}
            </Link>
          );
        })}
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
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link 
              key={link.href}
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className={`text-2xl font-semibold relative ${isActive ? 'text-blue-400' : ''}`}
            >
              {link.name}
              {isActive && (
                <span className="absolute left-1/2 -bottom-2 -translate-x-1/2 w-8 h-1 bg-blue-400 rounded-full" />
              )}
            </Link>
          );
        })}
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