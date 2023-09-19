import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { siteConfig } from "@/config/site";
export default function Footer() {
const contactWidget = siteConfig.FooterNavigation.contact
const linksWidgets = siteConfig.FooterNavigation.usefull_links
const socialLinks = siteConfig.Socials
  return (
    <footer>
      <div>
        <Logo />
        <p>{siteConfig.footerDescription}</p>
        <div>
          <Link href="/">Terms of Use</Link>
          <Link href="/">Privacy Policy</Link>
        </div>
      </div>
      <div>
        
            <div>
            <h1 className="text-primary font-semibold text-sm">{linksWidgets.title}</h1>
                {
                    linksWidgets.items.map(({title,href})=>(
                        <Link href={href} key={title}>{title}</Link>
                    ))
                }
            </div>
            <div>
                <span>Follow us</span>
                <div>{
                    socialLinks.
                    }</div>
            </div>

      </div>
    </footer>
  );
}


{/* <div key={title}>
<h1 className="text-primary font-semibold text-sm">{title}</h1>
<div>
  {items.map(({ title, href }) => (
    <Link href={href ?? "/"} key={title}>
      {title}
    </Link>
  ))}
</div>
</div> */}