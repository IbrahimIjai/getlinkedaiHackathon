
import {
  SiDiscord,
  SiTelegram,
  SiTwitter,
  SiGithub,
  SiReddit,
} from "react-icons/si";

const links = {
  instagram: "https://instagram.com/getlinkedai",
  twitter: "https://twitter.com/getlinkedai",
  facebook: "https://facebook.com/getlinkedai",
  linkedln: "https://linkedln.com/getlinkedai",
};

export const siteConfig = {
  name: "GetLinkedAi",
  description:
    "One stop solution for all your defi and NFT dapp and investment management",
  Navigations: [
    {
      title: "Timeline",
      href: "/timeline",
      //   items: [
      //   ],
    },
    {
      title: "Overview",
      href: "/overview",
    },
    {
      title: "FAQs",
      href: "/faq",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  FooterNavigation: [
    {
      title: "Useful Links",
      items: [
        {
          title: "Overview",
          href: "/overview",
        },
        {
          title: "Timeline",
          href: "/timeline",
        },
        {
          title: "Register",
          href: "/register",
        },
        {
          title: "FAQs",
          href: "/faq",
        },
        {
          title: "Register",
          href: "/register",
        },
      ],
    },
    {
      title: "Contact Us",
      items: [
        {
          typw: "phone",
          icon: "phone",
          load: "+234 679 81819",
        },
        {
          title: "location",
          href: "locationIcon",
          load: "27,Alara Street Yaba 100012 Lagos State",
        },
      ],
    },
  ],
  Socials: [
    {
      label: "Instagram",
      icon: "Instagram Icon",
      href: "https://discord.gg/pancakeswap",
    },
    {
      label: "Twitter",
      icon: SiTwitter,
      href: "https://discord.gg/pancakeswap",
    },
    {
      label: "Facebook",
      icon: "facebookIcon",
      href: "https://github.com/pancakeswap/",
    },
    {
      label: "Linkedln",
      icon: "linkedinIcon",
      href: "https://discord.gg/pancakeswap",
    },
  ],
};
