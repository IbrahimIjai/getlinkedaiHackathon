"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/classnames";
import { Button } from "@/components/shadcn/Button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/shadcn/Drawer";
import { Close, Menu } from "@/assets/icons";

export function MobileNav() {
  const segment = useSelectedLayoutSegment();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Menu />
      </SheetTrigger>
      <SheetContent side="top" className="w-full">
        <SheetClose className="border-none w-full flex justify-end">
          <Close />
        </SheetClose>
        <div className="flex flex-col items-start gap-6">
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
          <Button variant="gradient">
            <Link href="/register">Register</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

interface MobileLinkProps {
  children?: React.ReactNode;
  href: string;
  disabled?: boolean;
  segment: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileLink({
  children,
  href,
  disabled,
  segment,
  setIsOpen,
}: MobileLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "text-foreground/70 transition-colors hover:text-foreground",
        href.includes(segment) && "text-foreground",
        disabled && "pointer-events-none opacity-60"
      )}
      onClick={() => setIsOpen(false)}
    >
      {children}
    </Link>
  );
}
