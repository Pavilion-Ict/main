"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

interface CarouselProps {
    color: string;
    header: string;
    text: string;
    image: string;
}

const HERO_DATA: CarouselProps[] = [
    {
        color: "blue",
        header: "TRY OUR QUALITY MERCHANDISING SERVICE",
        text: "Pavilion is a technology-driven company offering end-to-end digital printing.",
        image: "/group.png"
    },
    {
        color: "blue",
        header: "DESIGNING EXPERIENCES. BUILDING SOLUTIONS.",
        text: "Innovative design tailored to your brand's unique needs and growth.",
        image: "/group-2.png"
    },
    {
        color: "white",
        header: "EVERYTHING YOUR BUSINESS NEEDS IN ONE PLACE",
        text: "From branding to digital execution, we handle it all.",
        image: "/group-3.png"
    },
        {
        color: "blue",
        header: "Complete Digital Services, Built for Growth.",
        text: "Pavilion  is a technology-driven company offering end-to-end digital, printing,.",
        image: "/group-2.png"
    }
];

const CarouselItem = ({ color, header, text, image }: CarouselProps) => {
    return (
        <div className={`
            ${color === "blue" ? "bg-linear-to-br from-blue-200 to-blue-300 text-white" : "bg-white text-black"} 
            flex flex-col md:flex-row items-center rounded-3xl overflow-hidden shadow-xl min-h-[500px] transition-all duration-500
        `}>
            
            {/* Image Container: Now uses 'fill' to occupy full height/width of its parent */}
            <div className="relative w-full md:w-1/2 h-[300px] md:h-full min-h-[500px]">
                <Image 
                    src={image} 
                    alt='Pavilion' 
                    fill
                    className='object-cover' // Change to 'object-contain' if you don't want the edges cropped
                    priority // Helps with LCP performance
                />
            </div>

            {/* Text Content: Responsive padding and alignment */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col gap-4">
                <h2 className="text-2xl  uppercase- md:text-4xl lg:text-5xl font-bold uppercase leading-tight">
                    {header}
                </h2>
                <p className="text-sm md:text-base opacity-90 max-w-md">
                    {text}
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                    <Link 
                        className='px-8 py-3 bg-blue-200 hover:bg-blue-400 transition-colors rounded-lg font-semibold text-white inline-block' 
                        href="/gallery"
                    >
                        EXPLORE
                    </Link>
                    <Link className="text-sm underline font-medium" href="/gallery">
                        See Our Works
                    </Link>
                </div>
            </div>
        </div>
    );
};

const HeroCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % HERO_DATA.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className='w-full max-w-7xl mx-auto px-4 py-10 flex flex-col items-center gap-8'>
            <div className="w-full">
                <CarouselItem {...HERO_DATA[currentIndex]} />
            </div>
            
            {/* Interactive Dots */}
            <div className="flex gap-3">
                {HERO_DATA.map((_, index) => (
                    <button 
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-3 rounded-full transition-all duration-300 ${
                            currentIndex === index ? "bg-blue-400 w-8" : "bg-gray-300 w-3"
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;