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
      "A vibrant visual identity designed for campus-based creative groups.",
  },
  {
    id: 2,
    title: "Branded Packaging Nylon",
    category: "Printing",
    image: "/gallery-1.png", 
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
    
];

const PavilionPortfolio = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  
  // Changed default filter to "All" so users can see everything when they first land
  const [activeFilter, setActiveFilter] = useState("All");
  
  // NEW: State for the search query
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

  // NEW: Filter logic applying both the search query (partial match) and the category tab
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
            {/* Added "All" to the tab list */}
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
              // Tied the input value to the searchQuery state
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
        
        {/* Portfolio Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Replaced portfolioItems.map with filteredItems.map */}
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div
                key={item.id}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-4 transition-transform duration-300 group-hover:scale-[1.02]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain"
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
            // Added a fallback state if the search yields no results
            <div className="col-span-full text-center py-12 text-gray-500">
              No projects found matching your search.
            </div>
          )}
        </div>

        {/* More Info Modal */}
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setSelectedItem(null)}
            />
            <div className="relative bg-white overflow-y-auto no-scrollbar max-h-[90vh] w-full max-w-2xl rounded-[2.5rem] shadow-2xl animate-in fade-in zoom-in duration-200">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute right-6 top-6 z-10 p-2 bg-gray-100/80 backdrop-blur-sm rounded-full hover:bg-gray-200 transition-colors"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 h-64 md:h-auto">
                  <img
                    src={selectedItem.image}
                    className="w-full object-contain"
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
                  {/* Preserving newlines in description */}
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                    {selectedItem.description}
                  </p>
                  <Link href="https://wa.me/+2348188549945" className="inline-block mt-8 bg-gradient-to-r from-blue-200 to-blue-300 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-shadow">
                    Get Started
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