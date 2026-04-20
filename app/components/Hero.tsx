'use client'
import React from "react";
import localFont from "next/font/local";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Navbar";
import {motion} from  'framer-motion';
import BreathableImage from "./BreathableImage";
import { div } from "framer-motion/client";
const futura = localFont({
  src: "../fonts/futuramdbt_bold.otf",
  display: "swap",
  variable: "--font-futura",
});
const Hero = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="relative m-2 md:m-5 rounded-2xl bg-[#d9d9d9]/25 pb-20 lg:pb-0">
        <Navbar />
        <div className="flex flex-col lg:flex-row gap-8 px-4 md:pl-8 mt-10">
          <div className="w-full lg:w-1/2 pt-5 lg:pt-10 text-center lg:text-left">
            <div className="relative w-fit mx-auto lg:mx-0">
              <h1 className={`${futura.className} text-4xl md:text-5xl lg:text-7xl leading-tight`}>
                THE{" "}
                <span className="text-blue-200 ">
                  PRINT & <br className="hidden lg:block" /> TECH
                </span>{" "}
                BRAND <br className="hidden lg:block" /> BUILT FOR YOU
              </h1>
            
              <BreathableImage
                className="absolute top-[-50px] lg:top-[-260px] left-[-10px] lg:left-[-20px]"
                src="/Star-2.png"
                alt="Hero image"
                width={30}
                height={30}
                // lg:width={50}
              />
              <BreathableImage
                className="absolute top-[-30px] lg:top-[-120px] right-[-10px] lg:right-[30px]"
                src="/Star-1.png"
                alt="Hero image"
                width={30}
                height={30}
              />
              <BreathableImage 
                src="/Rectangle-11.png"
                alt="Hero image"
                width={60}
                height={60}
                className="absolute right-0 lg:right-40 bottom-[-20px] lg:bottom-[60px] hidden md:block"
              />
            </div>
            <p className="mt-6 text-base md:text-lg max-w-xl mx-auto lg:mx-0 text-gray-700">
              We provide complete digital, branding, and printing solutions that
              help businesses build, launch, and grow with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 mt-8 items-center justify-center lg:justify-start">
              <Link
                href="/contact"
                className="w-full sm:w-auto text-center bg-linear-to-r from-blue-200 to-blue-300 font-semibold text-white px-8 py-4 rounded-lg hover:shadow-lg transition-all"
              >
                Book A Consultation
              </Link>
              <Link href="/gallery" className="font-semibold hover:underline decoration-blue-200 decoration-2 underline-offset-4">
                See our works
              </Link>
            </div>
          </div>
          <div className="relative flex w-full lg:w-1/2 items-end justify-center lg:justify-end mt-10 lg:mt-0">
            <Image
              src="/hero-image.svg"
              alt="Hero image"
              width={600}
              height={450}
              className="w-[90%] md:w-[80%] lg:w-full h-auto rounded-br-2xl"
              priority
            />
          </div>
        </div>

        {/* TRUSTED BY Section */}
        <div className="flex flex-col absolute bg-linear-to-r from-blue-400 to-blue-200 w-[95%] lg:w-[80%] min-h-[100px] lg:h-[120px] rounded-xl bottom-[-60px] lg:bottom-[-30px] left-[2.5%] lg:left-[10%] py-4 px-2 shadow-xl z-20">
          <div className="flex items-center justify-center gap-2 mb-2 lg:mb-4">
            <div className="w-8 md:w-12 border-t border-[#4293EF]" ></div>
            <p className="text-white italic text-xs md:text-sm font-medium tracking-widest uppercase">TRUSTED BY</p>
            <div className="w-8 md:w-12 border-t border-[#4293EF]"></div>
          </div>
          <div className="flex flex-wrap items-center gap-4 md:gap-8 lg:gap-10 w-full justify-center opacity-90">
            <Image src="/aiesec.png" alt="Aiesec logo" width={100} height={40} className="h-6 md:h-10 lg:h-12 w-auto object-contain" />
            <Image src="/jci.png" alt="JCI logo" width={60} height={40} className="h-6 md:h-10 lg:h-12 w-auto object-contain" />
            <Image src="/trophy.png" alt="Trophy logo" width={60} height={40} className="h-6 md:h-10 lg:h-12 w-auto object-contain" />
            <Image src="/landrite.png" alt="Landrite logo" width={80} height={40} className="h-6 md:h-10 lg:h-12 w-auto object-contain" />
            <Image src="/ui.png" alt="UI logo" width={100} height={40} className="h-6 md:h-10 lg:h-12 w-auto object-contain" />
            <Image src="/jj.png" alt="JJ Classics logo" width={60} height={40} className="h-6 md:h-10 lg:h-12 w-auto object-contain" />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="border border-blue-200 rounded-xl flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10 p-6 md:p-8 mt-24 lg:mt-20 w-[90%] lg:w-[70%] mx-auto">
        <div className="flex gap-4 items-center">
          <Image src="/laurel.png" alt="Laurel" width={50} height={50} className="md:w-[60px]" />
          <p className={`${futura.className} text-sm md:text-base bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-300 font-bold uppercase tracking-tight`}>
            7 YEARS OF HIGH <br className="hidden md:block" /> QUALITY SERVICE
          </p>
        </div>
        <div className="hidden md:block h-12 border-l border-blue-200"></div>
        <div className="flex gap-4 items-center">
          <Image src="/heart.png" alt="Heart" width={50} height={50} className="md:w-[60px]" />
          <h2 className={`${futura.className} text-sm md:text-base bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-300 font-bold uppercase tracking-tight`}>
            200+ SATISFIED <br className="hidden md:block" /> CUSTOMERS
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
