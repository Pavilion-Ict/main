import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import localFont from "next/font/local";

const futura = localFont({
  src: "../fonts/futuramdbt_bold.otf",
  display: "swap",
  variable: "--font-futura",
});

interface TeamMemberProps {
  src: string
  alt: string
  name: string
  role: string
  linkedIn: string
  width: number
  height: number
}

const TeamMemberCard = ({ src, alt, name, role, linkedIn, width, height }: TeamMemberProps) => {
  return (
    <div className="bg-white/10 border border-white/15 rounded-2xl overflow-hidden hover:-translate-y-1 transition-transform duration-200 group">
      <div className="w-full aspect-[4/3] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-none object-top transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-3">
        <p className={`${futura.variable} font-extrabold text-base text-white mb-0.5`}>{name}</p>
        <p className="text-white/60 text-xs mb-3">{role}</p>
        {linkedIn ? (
          <Link
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-amber-400 to-pink-500 text-white text-xs  font-bold pr-8  pl-4 py-1.5 rounded-bl-2xl hover:opacity-90 transition-opacity"
          >
            LinkedIn
          </Link>
        ) : (
          <span className="inline-block bg-gradient-to-r from-amber-400 to-pink-500 text-white text-xs font-bold pr-8  pl-4 rounded-bl-2xl px-4 py-1.5 opacity-50 cursor-not-allowed">
            LinkedIn
          </span>
        )}
      </div>
    </div>
  )
}

export default TeamMemberCard