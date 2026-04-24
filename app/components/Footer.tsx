import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className=" w-full  p-15 bg-linear-to-r  from-blue-200 to-blue-300">
      <Image
        src="/logo-white.png"
        height={120}
        width={120}
        alt="Pavilion White"
      />
      <div className="flex flex-col md:flex-row justify-between mt-7 text-white">
        <div className="max-w-[400px] flex flex-col gap-4">
          <p className="font-light">
            We provide complete digital, branding, and printing solutions that
            help businesses build, launch, and grow with confidence.
          </p>
          <p className="font-bold underline">12 Akintoba St, Agbowo, Ibadan 200132, Oyo</p>
        </div>
        <div className="mt-5 md:mt-0">
          <div className="flex gap-6">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/gallery">Gallery</Link>
          </div>
          <div className="flex gap-4 md:justify-end mt-3">
            <Image
              src="/instagram.png"
              height={30}
              width={30}
              alt="Social Media Icons"
            />
            <Image
              src="/facebook.png"
              height={30}
              width={30}
              alt="Social Media Icons"
            />
            <Image
              src="/whatsapp.png"
              height={30}
              width={30}
              alt="Social Media Icons"
            />
            <Image
              src="/linkedin.png"
              height={30}
              width={30}
              alt="Social Media Icons"
            />
          </div>
        </div>
      </div>
      <div className="mt-4 mb-4 border-b border-b-white"></div>

      <div className="flex justify-between">
        <p className="text-center text-white">
          &copy; {new Date().getFullYear()} Pavilion. All rights reserved.
        </p>
        <div>
          <Link href="/" className="text-white hover:underline">
            Terms
          </Link>{" "}
          <Link href="/" className="text-white hover:underline">
            Privacy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
