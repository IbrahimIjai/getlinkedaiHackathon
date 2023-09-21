
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
  
  FaQs:[
    {
      value: 1,
      question:"Can I work on a project I started before the hackathon?",
      answer: "Yes, you can continue with your pre-existing project as long as it aligns with the hackathon's theme and rules."
    },
    {
      value: 2,
      question:"What happens if I need help during the hackathon?",
      answer:"Don't worry! We have mentors and a dedicated support team available 24/7 to assist you with any questions or challenges you encounter."
    },
    {
      value: 3,
      question:"What happens if I don't have an idea for a project?",
      answer:"No problem! You can join a team or brainstorm with fellow participants to come up with an exciting project idea during the hackathon."
    },
    {
      value: 4,
      question:"Can I join a team or do I have to come with one?",
      answer:"You can absolutely join a team! We encourage collaboration, and if you don't have a team, we'll help you find one with similar interests"
    },
    {
      value: 5,
      question:"What happens after the hackathon ends",
      answer:"After the hackathon, you can continue working on your project independently or with your team. We also have post-event resources and opportunities to showcase your work"
    },
    {
      value: 6,
      question:"Can I work on a project I started before the hackathon?",
      answer:"Yes, you are allowed to work on a project that you initiated before the hackathon, as long as it adheres to the hackathon's guidelines and rules"
    },
  ],
 
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
