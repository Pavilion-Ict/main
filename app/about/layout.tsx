import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "../components/Navbar";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Pavilion",
  description: "Pavilion prints annd ICT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
  );
}
