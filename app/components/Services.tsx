import { section } from "framer-motion/m";
import React from "react";
import ServiceCard from "./ServiceCard";
import localFont from "next/font/local";

const futura = localFont({
  src: "../fonts/futuramdbt_bold.otf",
  display: "swap",
  variable: "--font-futura",
});
const Services = () => {
  return (
    <section className="flex flex-col items-center gap-8 mt-20 px-6 pb-20">
      <div className="text-center space-y-4">
        <p className={`${futura.className} text-3xl md:text-4xl`}>
          OUR <span className="bg-clip-text text-transparent bg-linear-to-r from-yellow-100 to-pink-100">SERVICES</span>
        </p>
        <p className="text-center text-gray-600 max-w-2xl text-sm md:text-base">
          offering end-to-end digital, printing, and branding services for modern businesses.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 items-start justify-center w-full max-w-6xl">
          <ServiceCard ServiceText="Printing services" src="/printing.png" alt="Digital Solutions" width={200} height={100} />
          <ServiceCard ServiceText="Branding & Design" src="/branding.png" alt="Printing Services" width={200} height={100} />
          <ServiceCard ServiceText="Product Development" src="/product.png" alt="Product Development" width={200} height={100} />
          <ServiceCard ServiceText="E-Cafe Services" src="/ecafe.png" alt="E-Cafe Services" width={200} height={100} />
      </div>
    </section>
  )
};

export default Services;
