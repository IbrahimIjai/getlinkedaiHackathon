import "./globals.css";
import type { Metadata } from "next";
import {  Montserrat } from "next/font/google";
import { Providers } from "./providers";
const montserrat = Montserrat({ subsets: ["latin"] });
import Navbar from "@/views/Layout/Navbar";
import Footer from "@/views/Layout/Footer";
export const metadata: Metadata = {
  title: "GetLinkedTech Hackathon 2023",
  description:
    "Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} bg-background text-white overflow-x-hidden`}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            {children}
            <Footer/>
            {/* <div className="min-h-screen">d</div> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
