'use client";'

import { section } from "framer-motion/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import localFont from "next/font/local";
import BreathableImage from "./BreathableImage";
const futura = localFont({
  src: "../fonts/futuramdbt_bold.otf",
  display: "swap",
  variable: "--font-futura",
});
const Whoarewe = () => {
  return (
    <section className="flex flex-col lg:flex-row relative items-center justify-center mt-20 px-6 gap-10 lg:gap-20">
      <BreathableImage 
          src="/Ellipse.png"
          alt="Ellipse image"
          width={80}
          height={80}
          className="absolute top-0 left-0 z-10 hidden lg:block"
      />
      <BreathableImage 
          src="/Star-2.png"
          alt="Star image"
          width={40}
          height={40}
          className="absolute top-20 right-10 lg:right-70 z-10"
      />
      <BreathableImage 
          src="/Rectangle-11.png"
          alt="Rectangle image"
          width={60}
          height={60}
          className="absolute bottom-[-30px] left-10 lg:left-150 z-10"
      />

      <div className="w-full lg:w-1/2 flex justify-center">
        <Image 
          src="/whoarewe.png" 
          alt="Who are we" 
          width={500} 
          height={300} 
          className="w-full max-w-[500px] h-auto rounded-2xl shadow-lg"
        />
      </div>

      <div className="w-full lg:w-1/2 gap-4 flex flex-col justify-center text-center lg:text-left">
        <h2 className={`${futura.className} text-3xl md:text-4xl`}>
          WHO ARE <span className="text-blue-200">WE?</span>
        </h2>
        <p className="text-base md:text-lg max-w-[500px] mx-auto lg:mx-0 text-gray-700 leading-relaxed">
          Pavilion is a technology-driven company offering end-to-end digital,
          printing, and branding services for modern businesses.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 mt-4 items-center justify-center lg:justify-start">
          <Link
            href="https://wa.me/+2348188549945"
            className="w-full sm:w-auto text-center bg-linear-to-r from-blue-200 to-blue-300 font-semibold text-white px-8 py-4 text-base md:text-lg rounded-lg hover:shadow-lg transition-all"
          >
            Book A Consultation
          </Link>
          <Link href="/gallery" className="font-semibold text-base md:text-lg hover:underline decoration-blue-200 decoration-2 underline-offset-4">
            See our works
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Whoarewe;
