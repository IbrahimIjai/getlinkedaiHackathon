"use client";

import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import SocialsLinks from "@/components/SocialLinks";
import { MiniVerticalSeperator } from "@/assets/icons";
import Text from "@/components/Text";
import ContactCard from "./component/Contact";

export default function Footer() {
  const linksWidgets = siteConfig.FooterNavigation.usefull_links;
  const socialLinks = siteConfig.Socials;
  return (
    <footer className="w-full bg-black/20 flex flex-col p-[4rem] items-center">
      <div className="grid lg:grid-cols-3 gap-[3rem] ">
        <div className="flex gap-[2rem] lg:gap-0 flex-col h-full justify-between">
          <div className="flex flex-col">
          <Logo />
          <Text type="p" isWhite className="mt-2" text={siteConfig.footerDescription}/>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/">Terms of Use</Link>
            <MiniVerticalSeperator />
            <Link href="/">Privacy Policy</Link>
          </div>
        </div>

        <div className="lg:px-8">
          <div className="flex flex-col items-start gap-3">
          <Text type="h3" text={linksWidgets.title} />
          <div className="flex flex-col gap-3">
            {linksWidgets.items.map(({ title, href }) => (
              <Link href={href} key={title}>
                {title}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Text type="h3" text="Follow us" className="font-bold" />
            <SocialsLinks />
          </div>
          </div>
        </div>
        <ContactCard />
      </div>
      <Text type="p" text="All rights reserved. © getlinked Ltd." isWhite className="py-6 mt-6"/>
    </footer>
  );
}

{
  /* <div key={title}>
<h1 className="text-primary font-semibold text-sm">{title}</h1>
<div>
  {items.map(({ title, href }) => (
    <Link href={href ?? "/"} key={title}>
      {title}
    </Link>
  ))}
</div>
</div> */
}
