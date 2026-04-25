import Image from "next/image";
import React from "react";
import AboutCard from "../components/AboutCard";
import Footer from "../components/Footer";
import Link from "next/link";
import localFont from "next/font/local";
import TeamMemberCard from "../components/TeamMemberCard";

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
        <AboutCard
          first="ABOUT "
          second="US"
          text="Thinking, Planning, Development - Pavilion is building the modern infrastructure for printing and everyday business systems in Africa. 
        We are a tech-enabled conglomerate delivering intelligent printing, digital tools, and system solutions for students, entrepreneurs, and growing businesses.
        By combining technology with everyday services, Pavilion transforms traditional printing into a structured, accessible, and scalable ecosystem and Creation"
        />
        <AboutCard
          first="OUR"
          second="PURPOSE"
          text="We believe printing and business tools should be accessible, efficient, and system-driven — not stressful, outdated, or chaotic.
        Across campuses and cities, individuals and SMEs face long queues, inconsistent quality, and disconnected systems. Pavilion exists to simplify that experience through technology, structure, and intentional design."
        />
        <AboutCard
          first="OUR"
          second="MISSION"
          text="To modernize Africa’s printing and business support ecosystem through intelligent systems and tailored solutions.
        This is not just a print service. It is infrastructure for everyday productivity."
        />
        <AboutCard
          first="OUR"
          second="VISION"
          text="A unified, tech-driven ecosystem where printing, branding, and business systems are seamless, affordable, and globally scalable."
        />
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
          <div className="flex flex-col md:flex-row gap-10 mt-10">
            <div className="w-full md:w-1/3">
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
                design, printing, branding, and product management to transform
                ideas and visions into high-performing products. With a
                multidisciplinary team and a deep understanding of both
                technology and market dynamics, we don’t just execute
                projects—we deliver solutions that work, scale, and stand the
                test of time.
              </p>
            </div>
            <div className="w-full md:w-1/3">
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
                For almost 7 years, we have consistently transformed ideas into
                impactful, high-performing products. Our journey is defined by a
                commitment to quality, innovation, and results—earning the trust
                of clients across diverse industries. With a multidisciplinary
                team and a deep understanding of both technology and market
                dynamics, we don’t just execute projects—we deliver solutions
                that work, scale, and stand the test of time.
              </p>
            </div>
            <div className="w-full md:w-1/3">
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
                on integrity, transparency and consistency. Every engagement is
                guided by a commitment to exceptional service, responsiveness,
                and attention to detail, ensuring a seamless and supportive
                experience for our clients. Backed by credible expertise, we
                deliver high-quality, results-driven solutions that are both
                accessible and tailored to meet the unique needs of each client.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-br from-blue-400 to-blue-200 rounded-2xl p-8 my-5">
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

          <div className="grid grid-cols-2 gap-4">
            <TeamMemberCard
              src="/Al-Ameen Oladejo.png"
              alt="Al-Ameen"
              name="Al-Ameen Oladejo"
              role="Founder / Product Manager"
              linkedIn="https://www.linkedin.com/in/wizdomola?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              height={100}
              width={200}
            />
            <TeamMemberCard
              src="/Wisdom_C.png"
              alt="Wisdom C. Onumaegbulam"
              name="Wisdom C. Onumaegbulam"
              role="Operation/Sales Manager & Video Editor"
              height={100}
              width={200}
              linkedIn="https://www.linkedin.com/in/wisdom-onumaegbulam-ba258131b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            />
            <TeamMemberCard
              src="/Ojie_Joseph.png"
              alt="Ojie Joseph"
              name="Ojie Joseph"
              role="Graphic and Product Design"
              height={100}
              width={200}
              linkedIn=""
            />
          </div>
        </section>
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
              className="text-white font-bold text-lg  px-5 py-3 rounded-2xl bg-linear-to-r from-yellow-100 to-pink-400"
              href=""
            >
              Contact us
            </Link>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;
