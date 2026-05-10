"use client";
import Navbar from "../components/Navbar";
import React, { useEffect } from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  useEffect(() => {
    // Prevent injecting the script multiple times during re-renders
    if (document.getElementById("tawk-script")) return;

    // Set up Tawk.to API for embedded mode
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    (window as any).Tawk_LoadStart = new Date();
    
    // Tell Tawk.to to embed itself inside the div with this ID
    (window as any).Tawk_API.embedded = "tawk-embed-container";

    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    
    // ⚠️ IMPORTANT: Replace this URL with your actual Tawk.to widget src
    // You can find this in your Tawk.to Dashboard -> Administration -> Chat Widget
    s1.src = "https://embed.tawk.to/69f3433d81f6d41c3ddd1bd9/1jnf3taib"; 
    
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s1.id = "tawk-script";
    
    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    } else {
      document.head.appendChild(s1);
    }
  }, []);

  return (
    <>
      <Navbar />

      {/* Main Page Container */}
      <div className="min-h-screen bg-gray-50 font-['Montserrat'] text-[#1a1a1a] flex items-center justify-center p-4 md:p-12">
        
        {/* Card Container */}
        <div className="max-w-6xl w-full bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[700px]">
          
          {/* Left Side: Contact Information */}
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col relative overflow-hidden bg-white">
            
            {/* Background decorative faint circles (optional, to mimic screenshot vibe) */}
            <div className="absolute top-0 right-0 w-64 h-64 border-[40px] border-gray-50 rounded-full -translate-y-1/2 translate-x-1/3 opacity-50 pointer-events-none" />
            <div className="absolute bottom-0 right-10 w-48 h-48 border-[30px] border-blue-50 rounded-full translate-y-1/3 opacity-50 pointer-events-none" />

            <div className="relative z-10">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-gray-900">
                Get in Touch
              </h1>
              <p className="text-gray-500 mb-12 text-sm md:text-base">
                You can reach out via the contacts below
              </p>

              <div className="space-y-8 flex-1">
                {/* Phone */}
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-linear-to-r from-blue-400 to-blue-200 rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
                    <Phone size={24} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Phone Number</p>
                    <p className="text-lg font-bold text-gray-900">
                      (+234) 818 854 9945
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-linear-to-r from-blue-400 to-blue-200 rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
                    <Mail size={24} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Email</p>
                    <p className="text-lg font-bold text-gray-900">
                      hello@pavilionict.com
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-linear-to-r from-blue-400 to-blue-200 rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
                    <MapPin size={24} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Map Street</p>
                    <p className="text-lg font-bold text-gray-900 leading-snug">
                      12 Akintoba Street (Opposite UI), <br /> Agbowo, Ibadan
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp Link */}
              <div className="mt-12 pt-8 border-t border-gray-100">
                <Link
                  href="https://wa.me/+2348188549945"
                  className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors"
                >
                  <MessageCircle size={20} className="text-green-500" />
                  Chat on WhatsApp
                </Link>
              </div>
            </div>
          </div>

          {/* Right Side: Embedded Tawk.to Chat */}
          {/* I matched the soft pink background from the screenshot, but you can change 'bg-[#ffdce5]' to 'bg-blue-50' if you prefer Pavilion colors */}
         <div className="w-full md:w-1/2 bg-blue-50 p-8 md:p-16 flex flex-col">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-gray-900 text-center md:text-left">
              Live Chat Support
            </h2>
            
            <div className="flex-1 min-h-[450px] w-full bg-white rounded-2xl shadow-inner overflow-hidden border border-white/50 relative">
              {/* Fallback loading text underneath the iframe just in case network is slow */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 -z-10">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-8 h-8 border-4 border-gray-200 border-t-blue-400 rounded-full animate-spin" />
                  <p className="text-sm font-medium">Connecting to chat...</p>
                </div>
              </div>

              {/* ⚠️ REPLACE THIS SRC WITH YOUR DIRECT CHAT LINK */}
              <iframe 
                src="https://tawk.to/chat/69f3433d81f6d41c3ddd1bd9/1jnf3taib"
                className="w-full h-full border-0 bg-transparent"
                title="Pavilion Live Chat"
              />
            </div>
            </div>
            </div>
      </div>
    </>
  );
};

export default ContactPage;