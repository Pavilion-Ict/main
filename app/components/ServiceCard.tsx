import Image from 'next/image'
import React from 'react'

interface ServiceCardProps{
    ServiceText:string;
    src:string;
    alt:string;
    width:number;
    height:number;
}

const ServiceCard = ({ ServiceText, src, alt, width, height }: ServiceCardProps) => {
  return (
    <div className='flex flex-col items-center gap-4 text-center group w-full'>
        <div className='overflow-hidden rounded-xl w-full'>
            <Image 
              src={src} 
              alt={alt} 
              width={width} 
              height={height} 
              className='w-full h-auto transition-transform duration-300 group-hover:scale-110'
            />
        </div>
        <p className='font-semibold text-lg'>{ServiceText}</p>
    </div>
  )
}

export default ServiceCard