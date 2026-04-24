import React from "react";
import localFont from "next/font/local";
const futura = localFont({
  src: "../fonts/futuramdbt_bold.otf",
  display: "swap",
  variable: "--font-futura",
});
interface AboutProps{
    first: string,
    second: string,
    text:string
}
const AboutCard = ({first, second, text}: AboutProps) => {
  return (
    <section className="max-w-[500px] mt-20 text-center">
      <h2 className={`${futura.className} text-2xl `}>{first} <span className="text-pink-200">{second}</span></h2>
      <p>
        {text}
      </p>
    </section>
  );
};

export default AboutCard;
