'use client'

import React from 'react'
import { motion } from "framer-motion";
const testimonials = [
  { name: "Ismail Lawal", role: "Student", text: "Great delivery, Good Customer Relation and fast delivery. Highly Recommended.", date: "December 2025" },
  { name: "Oyebadejo Racheal", role: "CEO, Varsity", text: "It's Really Affordable and The Experience was Beautiful. It saved Me A Lot of Stress Especially in this Cashless Policy...", date: "December 2025" },
  { name: "Wonderful Oluwan...", role: "CEO, Soberlink", text: "Pavilion Prints Really Did A Good Job For Me. They Delivered Exactly The Print I Wanted For My Totebag...", date: "December 2025" },
  // Add more items here to make the row longer
];

const TestimonialCard = ({ item }: { item: typeof testimonials[0] }) => (
  <div className="w-[280px] bg-white p-6 rounded-2xl mx-4">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 bg-gray-200 rounded-full" /> {/* Avatar Placeholder */}
      <div>
        <h4 className="font-bold text-gray-900 leading-tight">{item.name}</h4>
        <p className="text-xs text-gray-500 uppercase tracking-wide">{item.role}</p>
      </div>
    </div>
    <p className="text-sm text-wrap text-gray-600 mb-6 italic">"{item.text}"</p>
    <p className="text-[10px] font-bold text-gray-400 uppercase">{item.date}</p>
  </div>
);

const MarqueeRow = ({ direction = "left", items }: { direction?: "left" | "right", items: any[] }) => {
  const moveX = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div className="flex overflow-hidden py-4">
      <motion.div
        animate={{ x: moveX }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
      >
        {/* We double the items to create a seamless infinite loop */}
        {[...items, ...items].map((item, idx) => (
          <TestimonialCard key={idx} item={item} />
        ))}
      </motion.div>
    </div>
  );
};
const Testimony = () => {
  return (
    <section className='bg-[#f8f8f8] pt-10'>
        <div className="max-w-7xl mx-auto px-4 md:px-13 text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tighter">
          What <span className="text-blue-200">Our Clients</span> Say:
        </h2>
        <p className="text-gray-500 text-sm mt-2">Let's See The Satisfactory Remark From Our Clients</p>
      </div>

      {/* Contained Carousel Area */}
      <div className="max-w-[1440px] mx-auto overflow-hidden">
        {/* TOP ROW: Moves Left */}
        <MarqueeRow direction="left" items={testimonials} />
        
        {/* BOTTOM ROW: Moves Right */}
        <div className="mt-4">
          <MarqueeRow direction="right" items={testimonials} />
        </div>
      </div>
    </section>
  )
}

export default Testimony