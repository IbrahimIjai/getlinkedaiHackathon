import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });
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
      <body className={`${inter.className} bg-background text-white`}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            {children}
            {/* <Footer/> */}
          </div>
        </Providers>
      </body>
    </html>
  );
}
