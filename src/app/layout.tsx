import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

function Navbar() {
  return (
    <nav className="flex flex-col justify-between px-24 py-5 line navbar">
      <div>
        get<span className="linked">linked</span>
      </div>
      <ul className="ul">
        <li>Timeline</li>
        <li>Overview</li>
        <li>FAQ</li>
        <li>Contact</li>
        <li className="special">Register</li>
      </ul>
    </nav>
  );
}
