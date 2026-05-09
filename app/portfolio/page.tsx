"use client";
import Navbar from "../components/Navbar";
import React, { useState, useEffect } from "react";
import { Search, Info, X } from "lucide-react";
import Link from "next/link";

type PortfolioItem = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

// 1. Define your array of changing 3D images here.
// Put these files in your /public folder.
const heroImages = [
  "/graphic-design.png", 
  "/web-development.png",
  "/mobile-dev.png",
  "/printing-and-branding.png",
  "/digital-marketing.png",
  "/motion-design.png",
  "/business-reg.png",
  "/cyber-caf.png",
];

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Advertisement e-Flyer",
    category: "Designs",
    image: "/gallery-1.png",
    description:
      `Printing Services, Delivered to Your Door
At Pavilion, we make academic printing effortless. Whether you need textbooks, lecture slides, course materials, or questionnaires, we handle the printing and deliver directly to you — starting from just ₦10 per page.
Why choose Pavilion?
  • ✅ Affordable pricing from ₦10/page
  • ✅ Free delivery to your location in UI & UNILAG
  • ✅ Fast, reliable, and convenient
  • ✅ Order instantly via WhatsApp
Skip the print shop. Simply send your files on WhatsApp, and we’ll take care of the rest.

Material: 70gm Paper
Printing: Black and White Laserjet Printer

Delivery: 24hrs within Lagos & Ibadan, 2-3 working days for other state in Nigeria`,
  },
  {
    id: 2,
    title: "Medium Size Branded Poly Nylon (2 colours print)",
    category: "Printing",
    image: "/gallery-7.png", 
    description: `Make every purchase feel premium with our black & gold branded nylon—a perfect blend of elegance, durability, and brand visibility. Designed to stand out, the rich black finish paired with bold gold print instantly communicates class, making your packaging as valuable as the product inside.

Material: Black 20inches by 15.5inches Poly bag (Available in different colours)
Finishing: Gold Colour Screen Printing
Delivery: 3-5 working days within Lagos & Ibadan, 5-7 working days for other states in Nigeria
`,
  },
      {
    id: 3,
    title: " Pavilion Flyer",
    category: "Designs",
    image: "/gallery-3.png",
    description:
      `NEED TO PRINT ANYTHING? TALK TO PAVILION
@ PAVILION we offer the best services in all kinds of printing such as:
📌 Documents (textbook, materials, past questions, etc.) @ #10 PER PAGE T&C Applies
📌 Branding & Adverts (Business Card, letter head, Stamp, Flyer, Banner, Poster, Stickers, Nylon Prints, ID Card, etc.)
📌 Gift Items and Sourvenirs (Frames, Throw Pillows, Mugs, Customized Key holders, etc.)
🚵‍♂️🚵‍♂️ In celebration if our 7th Anniversary, evening doorstep delivery will be FREE FOR THE YEAR😎
`,
  },
    {
    id: 4,
    title: "Political Campaign Flyer Design",
    category: "Printing",
    image: "/gallery-6.png",
    description:
      `This flyer delivers a clean, professional look with strong visual hierarchy, ensuring key information is seen instantly. The balanced layout and clear candidate image build credibility and make the design easy to understand at a glance.

It also uses smart, strategic elements like the fingerprint in “VOTE” to add meaning and memorability, while the color scheme and typography reinforce trust and readability. Overall, it’s a polished, versatile design suitable for both print and digital campaigns.`,
  },
      {
    id: 5,
    title: "Political Campaign Flyer Design",
    category: "Printing",
    image: "/gallery-6.png",
    description:
      `This flyer delivers a clean, professional look with strong visual hierarchy, ensuring key information is seen instantly. The balanced layout and clear candidate image build credibility and make the design easy to understand at a glance.
It also uses smart, strategic elements like the fingerprint in “VOTE” to add meaning and memorability, while the color scheme and typography reinforce trust and readability. Overall, it’s a polished, versatile design suitable for both print and digital campaigns.`,
  },
    
];

const PavilionPortfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentHeroImageIndex, setCurrentHeroImageIndex] = useState(0);

  useEffect(() => {
    if (heroImages.length <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentHeroImageIndex((prevIndex) => 
        (prevIndex + 1) % heroImages.length
      );
    }, 5000); 

    return () => clearInterval(intervalId);
  }, []);

  const filteredItems = portfolioItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeFilter === "All" || item.category === activeFilter;
    return matchesSearch && matchesCategory;
  });

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
              Explore our portfolio today and let us help bring your ideas to life with products and solutions tailored to your vision and business goals.
            </p>
          </div>

          <div className="w-full md:w-1/2 h-64 md:h-[400px] bg-gradient-to-br from-purple-100 to-blue-50 rounded-[3rem] flex items-center justify-center relative overflow-hidden shadow-inner">
            {heroImages.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`Pavilion 3D Visual ${index + 1}`}
                className={`absolute rounded-[3rem] w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentHeroImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            
            <div className="absolute w-48 h-48 border-[20px] border-purple-200 rounded-full opacity-30 rotate-45 transform scale-125 -z-10" />
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="flex flex-wrap gap-3 mb-6">
            {["All", "Designs", "Web Dev", "Printing"].map((tab) => (
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 border-none rounded-full py-4 px-6 focus:ring-2 focus:ring-purple-400 outline-none"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-300 p-2 rounded-full text-white">
              <Search size={20} />
            </div>
          </div>
        </div>
        
        {/* CTA Bar */}
        <div className="max-w-7xl mx-auto mb-12 p-1 bg-[#dadada] rounded-2xl px-4 py-3 flex items-center gap-10 pr-8">
          <Link href="https://wa.me/+2348188549945" className="bg-gradient-to-r from-blue-200 to-blue-300 text-white px-8 py-3 rounded-full flex items-center gap-2 whitespace-nowrap hover:shadow-md transition-shadow">
            Get Yours Done <span className="text-xl">➔</span>
          </Link>
          <p className="hidden md:block text-xs text-gray-700">
            Get Your Work Done Faster And Smarter. We Provide The Tools And
            Support You Need To Turn Ideas Into Results.
          </p>
        </div>
        
        {/* Portfolio Masonry Grid */}
        <div className="max-w-7xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-8">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer break-inside-avoid inline-block w-full mb-8"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative rounded-3xl overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-[1.02]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white text-black px-6 py-2 rounded-full font-bold flex items-center gap-2">
                      <Info size={18} /> More Info
                    </span>
                  </div>
                </div>
                <p className="text-sm font-medium text-gray-500">
                  {item.title}
                </p>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-gray-500">
              No projects found matching your search.
            </div>
          )}
        </div>

     {/* More Info Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
              onClick={() => setSelectedItem(null)}
            />
            
            {/* Modal Container: Strict flex-col for mobile, flex-row for desktop */}
            <div className="relative w-full max-w-5xl bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] z-10 animate-in fade-in zoom-in duration-200">
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 sm:right-6 sm:top-6 z-50 p-2 bg-gray-100/90 hover:bg-gray-200 text-gray-800 rounded-full transition-colors shadow-sm"
              >
                <X size={20} />
              </button>

              {/* Left/Top Side: Image Area */}
              {/* On mobile, this strictly takes 40% of screen height. On desktop, it adjusts naturally. */}
              <div className="w-full md:w-1/2 h-[40vh] md:h-auto bg-gray-50 relative shrink-0 border-b md:border-b-0 md:border-r border-gray-100">
                <img
                  src={selectedItem.image}
                  className="absolute inset-0 w-full h-full object-contain p-4 md:p-8 drop-shadow-sm"
                  alt={selectedItem.title}
                />
              </div>

              {/* Right/Bottom Side: Text & Content Area */}
              {/* Takes the remaining space and handles its own scrolling */}
              <div className="w-full md:w-1/2 flex flex-col bg-white overflow-y-auto no-scrollbar relative">
                
                {/* Text Content */}
                <div className="p-6 sm:p-10 flex-1">
                  <span className="text-orange-500 font-bold text-xs sm:text-sm tracking-widest uppercase mb-2 block">
                    Project Detail
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-gray-900 leading-tight">
                    {selectedItem.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Sticky CTA Button at the bottom */}
                <div className="p-6 sm:p-10 pt-0 sticky bottom-0 bg-white border-t border-white shadow-[0_-10px_15px_-3px_rgba(255,255,255,1)]">
                  <Link 
                    href="https://wa.me/+2348188549945" 
                    className="flex justify-center items-center w-full sm:w-auto bg-gradient-to-r from-blue-200 to-blue-300 hover:from-blue-300 hover:to-blue-400 text-white px-8 py-4 rounded-full font-bold shadow-lg transition-all"
                  >
                    Get Yours Done
                  </Link>
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