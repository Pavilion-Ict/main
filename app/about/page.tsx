"use client";

import Image from "next/image";
import React from "react";
import AboutCard from "../components/AboutCard";
import Footer from "../components/Footer";
import Link from "next/link";
import localFont from "next/font/local";
import TeamMemberCard from "../components/TeamMemberCard";
import { motion } from "framer-motion";
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    whileinview: {
      staggerChildren: 0.3,
      delaychildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
  transition:{duration:0.5, ease:"easeout"}
};
const futura = localFont({
  src: "../fonts/futuramdbt_bold.otf",
  display: "swap",
  variable: "--font-futura",
});

const AboutPage = () => {
  return (
    <>
      <div className="padding-container flex flex-col items-center">
        <Image
          className="w-full rounded-4xl"
          src="/group-work.svg"
          height={200}
          width={200}
          alt="Pavilion office"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AboutCard
            first="ABOUT "
            second="US"
            text="Thinking, Planning, Development - Pavilion is building the modern infrastructure for printing and everyday business systems in Africa. 
        We are a tech-enabled conglomerate delivering intelligent printing, digital tools, and system solutions for students, entrepreneurs, and growing businesses.
        By combining technology with everyday services, Pavilion transforms traditional printing into a structured, accessible, and scalable ecosystem and Creation"
          />
        </motion.div>
        <motion.div
        
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AboutCard
            first="OUR"
            second="PURPOSE"
            text="We believe printing and business tools should be accessible, efficient, and system-driven — not stressful, outdated, or chaotic.
        Across campuses and cities, individuals and SMEs face long queues, inconsistent quality, and disconnected systems. Pavilion exists to simplify that experience through technology, structure, and intentional design."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AboutCard
            first="OUR"
            second="MISSION"
            text="To modernize Africa’s printing and business support ecosystem through intelligent systems and tailored solutions.
        This is not just a print service. It is infrastructure for everyday productivity."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <AboutCard
            first="OUR"
            second="VISION"
            text="A unified, tech-driven ecosystem where printing, branding, and business systems are seamless, affordable, and globally scalable."
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <section className="mt-20">
            <div className="flex flex-col items-center">
              <h2 className={`${futura.className} text-4xl`}>WHY CHOOSE</h2>
              <Image
                src="/pavilion.svg"
                height={220}
                width={220}
                alt="Paviilion Logo"
              />
              <p>
                Explore how Pavilion drives impact through these core solutions.
              </p>
            </div>
            <motion.ul variants={container} initial="hidden" animate="show" className="flex flex-col md:flex-row gap-10 mt-10">
              <motion.li variants={item} className="w-full md:w-1/3">
                <Image
                  src="/team-image-1.png"
                  height={2000}
                  width={2000}
                  alt="Team"
                  className="w-full"
                />
                <h2 className="font-bold text-lg">Expert Team</h2>
                <p>
                  Our team brings together expertise in software development,
                  design, printing, branding, and product management to
                  transform ideas and visions into high-performing products.
                  With a multidisciplinary team and a deep understanding of both
                  technology and market dynamics, we don’t just execute
                  projects—we deliver solutions that work, scale, and stand the
                  test of time.
                </p>
              </motion.li>
              <motion.li variants={item} className="w-full md:w-1/3">
                <Image
                  src="/team-image-2.png"
                  height={2000}
                  width={2000}
                  alt="Team"
                  className="w-full"
                />
                <h2 className="font-bold text-lg">
                  Nearly a Decade of Delivering Excellence
                </h2>
                <p>
                  For almost 7 years, we have consistently transformed ideas
                  into impactful, high-performing products. Our journey is
                  defined by a commitment to quality, innovation, and
                  results—earning the trust of clients across diverse
                  industries. With a multidisciplinary team and a deep
                  understanding of both technology and market dynamics, we don’t
                  just execute projects—we deliver solutions that work, scale,
                  and stand the test of time.
                </p>
              </motion.li>
              <motion.li variants={item} className="w-full md:w-1/3">
                <Image
                  src="/team-image-3.png"
                  height={2000}
                  width={2000}
                  alt="Team"
                  className="w-full"
                />
                <h2 className="font-bold text-lg">Client Centered Systems</h2>
                <p>
                  We operate a trusted and reliable client-centered system built
                  on integrity, transparency and consistency. Every engagement
                  is guided by a commitment to exceptional service,
                  responsiveness, and attention to detail, ensuring a seamless
                  and supportive experience for our clients. Backed by credible
                  expertise, we deliver high-quality, results-driven solutions
                  that are both accessible and tailored to meet the unique needs
                  of each client.
                </p>
              </motion.li>
            </motion.ul>
          </section>
        </motion.div>

        <section className="bg-gradient-to-br from-blue-200 to-blue-300 rounded-2xl p-8 my-5">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold uppercase tracking-widest text-white mb-2">
              Meet Our Team
            </h2>
            <p className="text-sm text-white/70 max-w-sm mx-auto leading-relaxed">
              Our team is built to turn ideas into successful, market-ready
              products. With a strong blend of strategy, creativity, and
              execution, we don't just plan—we deliver.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TeamMemberCard
              src="/Al-Ameen Oladejo.png"
              alt="Al-Ameen"
              name="Al-Ameen Oladejo"
              role="Founder / Product Manager"
              email=""
              height={100}
              width={200}
              position={1}
            />
            <TeamMemberCard
              src="/Wisdom_C.png"
              alt="Wisdom C. Onumaegbulam"
              name="Wisdom C. Onumaegbulam"
              role="Operation/Sales Manager & Video Editor"
              height={100}
              width={200}
              position={1}
              email=""
            />
            <TeamMemberCard
              src="/Ajadi_Ire.png"
              alt="Ajadi_Ire"
              name="Ajadi Ireanuoluwa Heritage"
              role="Lead Product Developer"
              height={100}
              width={200}
              email="ireanuoluwah@gmail.com"
              position={2}
            />
            <TeamMemberCard
              src="/Ojie_Joseph.png"
              alt="Ojie Joseph"
              name="Ojie Joseph"
              role="Graphic and Product Design"
              height={100}
              width={200}
              email=""
              position={2}
            />
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <section className="max-w-[500px] mt-10 text-center">
            <h2 className={`${futura.className} text-5xl`}>GET STARTED TODAY</h2>
            <p>
            Step into a smarter ecosystem for printing and everyday business
            solutions. Pavilion combines technology with practical services to
            help students, entrepreneurs, and businesses operate more
            efficiently. Ready to begin? Send us a message today.
          </p>
          <br />

          <div className="mt-5 mb-20  ">
            <Link
              className="text-white font-semibold text-lg px-7 py-3 rounded-2xl bg-linear-to-r from-yellow-100 to-pink-400"
              href="https://wa.me/+2348188549945"
            >
              Contact us
            </Link>
          </div>
        </section>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
