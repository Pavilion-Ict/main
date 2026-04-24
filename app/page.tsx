import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Whoarewe from "./components/Whoarewe";
import Services from "./components/Services";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero/>
      <Whoarewe />
      <Services />
      <Footer />
    </>
  );
}
