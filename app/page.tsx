"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Whoarewe from "./components/Whoarewe";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Testimony from "./components/Testimony";
import HeroCarousel from "./components/HeroCarousel";
import { motion } from "framer-motion";
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";
export default function Home() {
  const noop = () => {};
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Hero />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Whoarewe />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Services />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <HeroCarousel />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Testimony />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Footer />
      </motion.div>
      <TawkMessengerReact
        propertyId="69f3433d81f6d41c3ddd1bd9"
        widgetId="1jnf3taib"
 // Core Handlers
      onLoad={noop}
      onBeforeLoad={noop}
      onStatusChange={noop}
      // Window Handlers
      onChatMaximized={noop}
      onChatMinimized={noop}
      onChatHidden={noop}
      onChatShown={noop}
      // Messaging Handlers
      onChatStarted={noop}
      onChatFinished={noop}
      onChatMessageVisitor={noop}
      onChatMessageAgent={noop}
      onAgentJoinChat={noop}
      onAgentLeaveChat={noop}
      onUnreadCountChanged={noop}
      // Form Handlers
      onPrechatSubmit={noop}
      onOfflineSubmit={noop}
      />
    </>
  );
}
