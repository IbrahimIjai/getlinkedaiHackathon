
import { PhoneIcon, LocationIcon, InstagramIcon, LinkedlnIcon, TwitterIcon, FacebookIcon } from "@/assets/icons";

const links = {
  instagram: "https://instagram.com/getlinkedai",
  twitter: "https://twitter.com/getlinkedai",
  facebook: "https://facebook.com/getlinkedai",
  linkedln: "https://linkedln.com/getlinkedai",
};

export const siteConfig = {
  name: "GetLinkedAi",
  siteDscription:
    "One stop solution for all your defi and NFT dapp and investment management",
  footerDescription: "Getlinked Tech Hackathon is a technology innovation program established by a group of organizations with the aim of showcasing young and talented individuals in the field of technology",
  
 
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
  FooterNavigation: {
    usefull_links:{
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
    contact:  {
      title: "Contact Us",
      items: [
        {
          type: "phone",
          icon: PhoneIcon,
          load: "+234 679 81819",
        },
        {
          type: "location",
          href: LocationIcon,
          load: "27,Alara Street Yaba 100012 Lagos State",
        },
      ],
    },
  },
  Socials: [
    {
      label: "Instagram",
      icon: InstagramIcon,
      href: "https://instagram.com/getlinkedai",
    },
    {
      label: "Twitter",
      icon: TwitterIcon,
      href: "https://twitter.com/getlinkedai",
    },
    {
      label: "Facebook",
      icon: FacebookIcon,
      href: "https://facebook.com/getlinkedai/",
    },
    {
      label: "Linkedln",
      icon: LinkedlnIcon,
      href: "https://linked.com/getlinkedai",
    },
  ],
};
