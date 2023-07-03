import React from "react";
import { HeroImage, circleTop, heroPara, socialLinks } from "../constants";
import LineVector from "./lineVector";

const Hero = () => {
  return (
    <section className="bg-primary dark:bg-secondary text-faded_text font-poppins relative pt-[90px] pb-6 sm:px-12 md:px-16 lg:px-20 px-4">
      <div className="flex flex-col relative z-10 justify-center items-center">
        <h2 className="sm:text-[72px] text-[48px] font-extrabold ">Smart Home</h2>
        <h2 className="sm:text-[72px] text-[48px] font-extrabold ">Application</h2>
        <p className="md:w-[40%] pt-6 text-center text-[18px]">{heroPara}</p>
        <div className={`absolute md:flex hidden top-[90%] justify-center w-full items-center z-10 pt-[40px]`}>
            <img src={HeroImage} alt="" className="" />
        </div>
      </div>
      <div className="z-20">
      

      
        <ul className="flex md:flex-col md:justify-start justify-around md:py-0 py-[20px] items-start px-8 md:gap-[40px] gap-0 relative z-10">
          {socialLinks.map((link) => (
            <li
              key={link.id}
              className="flex gap-[10px] items-center md:w-[190px] group"
            >
              <a
                href={link.link}
                className="w-[40px] h-[40px] border-white border-[1px] rounded-full flex items-center justify-center"
              >
                <img src={link.logo} alt="" className="" />
              </a>
              <p className="md:group-hover:flex hidden w-[120px] bg-white text-black items-center justify-center h-[40px] rounded-[10px] font-semibold">
                {link.id}
              </p>
            </li>
          ))}
        </ul>
        
      </div>
      <div className={`absolute md:flex hidden top-0 right-0 z-0 `}>
            <img src={circleTop} alt="" className="" />
        </div>
      <LineVector />
    </section>
  );
};

export default Hero;
