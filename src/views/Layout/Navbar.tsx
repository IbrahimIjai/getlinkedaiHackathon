"use client"

import React from "react";
import Logo from "./Logo";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Menu } from "@/assets/icons";
import { MobileNav } from "./MobileMenu";
import { Button } from "@/components/shadcn/Button";
import { useRouter } from 'next/navigation'
export default function Navbar() {
  const router = useRouter()
  return (
    <nav className="sticky bg-background top-0 z-50 flex items-center justify-between w-full py-6 px-10 border-b border-border/20 ">
      <Logo />
      <div className="flex items-center gap-28">
        <div className="hidden lg:flex items-center justify-between">
          {siteConfig.Navigations.map(({ title, href }) => {
            return (
              <Link
                className="block px-3 py-2 text-sm hover:text-primary font-normal"
                href={href}
                key={title}
              >
                {title}
              </Link>
            );
          })}
        </div>
        <Button variant="gradient" onClick={() => router.push('/register')} className="hidden lg:inline-flex">
          Register
        </Button>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
