
'use client'

import React from 'react'
import {motion} from 'framer-motion';
import Image from 'next/image';


interface BreathableImageProps{
    src:string;
    alt:string;
    width:number;
    height:number;
    className?:string;
}

const BreathableImage = ({src, alt, width, height, className}: BreathableImageProps) => {
  return (
    <motion.div
     animate={{ scale: [1, 1.05, 1] }}
      transition={{
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
      }}
        className={className}

      >
     

        <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
    </motion.div>
  )
}

export default BreathableImage