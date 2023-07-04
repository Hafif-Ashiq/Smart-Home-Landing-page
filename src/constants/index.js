import cross from "../assets/cross.svg";
import menu from "../assets/menu.svg";
import facebookLogo from "../assets/facebookLogo.svg";
import instagramLogo from "../assets/instagramLogo.svg";
import twitterLogo from "../assets/twitterLogo.svg";
import linkedInLogo from "../assets/linkedInLogo.svg";
import HeroImage from "../assets/HeroImage.png";
import bgDownArrow from "../assets/bgDownArrow.svg";
import downArrow from "../assets/downArrow.svg";
import circleTop from "../assets/circleTop.svg";
import apple from "../assets/apple.svg";
import appleLight from "../assets/appleLight.svg";
import google from "../assets/google.svg";
import purpleVector from "../assets/purpleVector.svg";
import mobile1 from "../assets/mobile1.png";
import mobile2 from "../assets/mobile2.png";
import mobile3 from "../assets/mobile3.png";

import logo1 from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import logo3 from "../assets/logo3.svg";
import logo4 from "../assets/logo4.svg";
import logo5 from "../assets/logo5.svg";
import logo6 from "../assets/logo6.svg";
import logo7 from "../assets/logo7.svg";
import logo8 from "../assets/logo8.svg";

import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import testimonyVector from "../assets/testimonyVector.svg";

import plus from "../assets/plus.svg";
import minus from "../assets/minus.svg";

import left from "../assets/left.svg";
import right from "../assets/right.svg";

import lightMode from "../assets/lightMode.svg"
import darkMode from "../assets/darkMode.svg"

const navLinks = [
  {
    id: "Home",
    title: "",
  },
  {
    id: "About",
    title: "about",
  },
  {
    id: "Testimonials",
    title: "testimonials",
  },
  {
    id: "FAQs",
    title: "FAQs",
  },
];

const heroPara =
  "Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.";

const socialLinks = [
  {
    id: "facebook",
    link: "https://www.facebook.com",
    logo: facebookLogo,
  },
  {
    id: "instagram",
    link: "https://www.instagram.com",
    logo: instagramLogo,
  },
  {
    id: "twitter",
    link: "https://www.twitter.com",
    logo: twitterLogo,
  },
  {
    id: "linkedin",
    link: "https://www.linkedin.com",
    logo: linkedInLogo,
  },
];

const downloadLinks = [
  {
    id: "apple",
    link: "http://www.apple.com",
    img: apple,
    imgLight: appleLight,
    name: "Apple Store",
    para: "Download on the",
  },
  {
    id: "google",
    link: "http://www.googleplay.com",
    img: google,
    imgLight: google,
    name: "Google Play",
    para: "GET IT ON",
  },
];

const aboutInfo = [
  {
    img: mobile1,
    title: "Smart Home's  Smart Services",
    para: "Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.",
  },
  {
    img: mobile3,
    title: "What app can do to your Appliences?",
    para: "Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.",
  },
  {
    img: mobile3,
    title: "Control Electric Appliences",
    para: "Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.",
  },
];

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];

const testimoniesArray = [
  {
    name: "Chan",
    job: "Product Designer",
    img: person1,
    para: " our company, we do ongoing research with our target audience. This includes 30-45 minute phone interviews. It was difficult to conduct the interview, really listen, and ask good follow up questions",
  },
  {
    name: "Scopic Software",
    job: "Custom IT Solutions Firm",
    img: person2,
    para: "We meet new clients and more often than not establish long-term business relationships, all through Guru. The flexibility in how projects can be structured",
  },
  {
    name: "Russell Lee",
    job: "Writer",
    img: person3,
    para: "It is easy to communicate with clients through their message system and their SafePay feature ensures that all funds are secured prior to any work being done.",
  },
  {
    name: "Solace Engineers Inc.",
    job: "Engineering Firm",
    img: person4,
    para: "At SOLACE Engineers, we provide engineering solutions and other services on various freelancing platforms. Among them all, Guru is the best and our first choice to invite clients.",
  },
];

const questions = [
  {
    id: 1,
    question: "What is a smart home and how does it work?",
    answer:
      "A smart home is a connected residence where devices and systems can be controlled remotely or through voice commands. It uses technology like Wi-Fi and IoT to enable communication and automation between devices.",
  },
  {
    id: 2,
    question: "What are the benefits of having a smart home?",
    answer:
      "Having a smart home offers numerous benefits. It provides convenience by allowing you to control and monitor devices from anywhere using a smartphone or voice commands. Smart homes also promote energy efficiency by optimizing energy usage and reducing utility bills. ",
  },
  {
    id: 3,
    question: "Can I control my smart home when I'm away from home?",
    answer:
      "Yes, you can control your smart home from anywhere with an internet connection. Using a smartphone app or web interface, you can remotely manage and monitor your devices, adjust settings, and receive notifications or alerts. This allows you to stay connected and in control of your home even when you're not physically present.",
  },
  {
    id: 4,
    question: "Can I integrate my existing devices into a smart home system?",
    answer:
      "Yes, many existing devices can be integrated into a smart home system if they are compatible with popular protocols like Wi-Fi, Zigbee, or Z-Wave. Check compatibility and ensure your smart home hub or platform supports the necessary protocols for integration.",
  },
];

const Categories = [
  {
    title: "Product Management",
    link: ""
  },
  {
    title: "Design / Creatives",
    link: ""
  },
  {
    title: "Education & Training",
    link: ""
  },
  {
    title: "UI/UX Designers",
    link: ""
  },
  {
    title: "Development",
    link: ""
  },
  {
    title: "Customer Support",
    link: ""
  },
]

const About = [
  
    {
      title: "About Us",
      link: ""
    },
    {
      title: "Partnerships",
      link: ""
    },
    {
      title: "Finance Experts",
      link: ""
    },
    {
      title: "Product Manager",
      link: ""
    },
    {
      title: "Project Management",
      link: ""
    },
    {
      title: "The Team",
      link: ""
    },
  
]

const Follow =[
  {
    title: "Facebook",
    link: ""
  },
  {
    title: "Twitter",
    link: ""
  },
  {
    title: "Instagram",
    link: ""
  },
  {
    title: "LinkedIn",
    link: ""
  },
]

export {
  navLinks,
  menu,
  cross,
  heroPara,
  socialLinks,
  HeroImage,
  bgDownArrow,
  downArrow,
  downloadLinks,
  purpleVector,
  aboutInfo,
  logos,
  testimoniesArray,
  testimonyVector,
  questions,
  plus,
  minus,
  mobile1,
  Categories,
  Follow,
  About,
  left,
  right,
  lightMode,
  darkMode,
  circleTop
};
