import React from "react";
import Logo from "./Logo";
import { Button } from "../shadcn/Button";

import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Menu } from "@/assets/icons";
import { MobileNav } from "./MobileMenu";
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between w-full py-6 px-10 border-b border-border/20 ">
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
        <Button variant="gradient" className="hidden lg:inline-flex">Register</Button>
        <div className="lg:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
