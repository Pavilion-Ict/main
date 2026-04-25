"use client";
import Navbar from "../components/Navbar";   
type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: " Advertisement e-Flyer",
    category: "Designs",
    image: "/gallery-1.png",
    description:
      "A vibrant visual identity designed for campus-based creative groups.",
  },
  {
    id: 2,
    title: "Fast and Steady",
    category: "Branding",
    image: "/path-to-cheetah.jpg",
    description:
      "Brand identity focusing on speed and reliability for logistics.",
  },
  // Add more items here...
];

import React, { useState } from "react";
import { Search, Info, X } from "lucide-react";

const PavilionPortfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [activeFilter, setActiveFilter] = useState("Designs");

  return (
    <>
       <Navbar />

    <div className="min-h-screen bg-white font-['Montserrat'] text-[#1a1a1a] p-8 md:p-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
            CHECK OUT <br />
            OUR {""}
            <span className="text-transparent bg-clip-text bg-blue-200">
              PORTFOLIO
            </span>
          </h1>
          <p className=" max-w-md">
            Explore A Collection Of Strategic Designs Crafted By The Talent
            Behind Our Most Successful Products.
          </p>
        </div>

        {/* Abstract 3D Shape Placeholder */}
        <div className="w-full md:w-1/2 h-64 bg-gradient-to-br from-purple-100 to-blue-50 rounded-[3rem] flex items-center justify-center relative overflow-hidden">
          <div className="w-48 h-48 border-[20px] border-purple-200 rounded-full opacity-50 rotate-45 transform scale-125" />
          {/* Use your actual 3D image here */}
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-wrap gap-3 mb-6">
          {["Designs", "Web Dev", "Printing"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeFilter === tab
                  ? "bg-black text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="relative max-w-xl">
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full bg-gray-100 border-none rounded-full py-4 px-6 focus:ring-2 focus:ring-purple-400 outline-none"
          />
          <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-orange-500 p-2 rounded-full text-white">
            <Search size={20} />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mb-12 p-1 bg-[#dadada] rounded-2xl px-4 py-3 flex items-center gap-10 pr-8">
        <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-3 rounded-full  flex items-center gap-2">
          Get Yours Done <span className="text-xl">➔</span>
        </button>
        <p className="hidden md:block text-xs ">
          Get Your Work Done Faster And Smarter. We Provide The Tools And
          Support You Need To Turn Ideas Into Results.
        </p>
      </div>
      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            className="group cursor-pointer"
            onClick={() => setSelectedItem(item)}
          >
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-4 bg-gray-100 shadow-sm transition-transform duration-300 group-hover:scale-[1.02]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="bg-white text-black px-6 py-2 rounded-full font-bold flex items-center gap-2">
                  <Info size={18} /> More Info
                </span>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-500">
              Pavilion {item.category}
            </p>
          </div>
        ))}
      </div>

      {/* More Info Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          />
          <div className="relative bg-white w-full max-w-2xl rounded-[2.5rem] overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute right-6 top-6 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 h-64 md:h-auto">
                <img
                  src={selectedItem.image}
                  className="w-full h-full object-cover"
                  alt={selectedItem.title}
                />
              </div>
              <div className="p-10 md:w-1/2">
                <span className="text-orange-500 font-bold text-sm tracking-widest uppercase">
                  Project Detail
                </span>
                <h2 className="text-3xl font-extrabold mt-2 mb-4">
                  {selectedItem.title}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {selectedItem.description}
                </p>
                <button className="mt-8 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-shadow">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    
    </>
     
  );
};

export default PavilionPortfolio;
