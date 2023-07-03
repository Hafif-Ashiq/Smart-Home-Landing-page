import React from "react";
import FooterSection from "./FooterSection";
import { About, Categories, Follow } from "../constants";

const Footer = () => {
  return (
    <section className="pt-[140px] font-poppins flex flex-col gap-[120px] ">
      <div className="flex lg:flex-row flex-col justify-between  gap-[40px] sm:px-12 md:px-16 lg:px-20 px-4 ">
        <div className="flex flex-col justify-center items-start gap-[20px]">
          <h2 className="text-black_text dark:text-faded_text  font-bold text-[32px] ">smartHome</h2>
          <p className="text-black_light dark:text-faded_text text-[16px] w-[70%]">
            Automate your entire healthcare hiring, onboarding and compliance
            with a true technology platform.
          </p>
          <div className="flex gap-[10px] py-[10px]">
            <input
              type="email"
              name=""
              id=""
              placeholder="Email Address"
              className="text-[14px] px-[22px] py-[14px] rounded-[5px] bg-faded_text dark:bg-back_dark border-[1px] border-[#E7EBEE] dark:border-secondary_dark dark:caret-white"
            />
            <button className="border-secondary dark:border-primary dark:text-faded_text border-[1px] px-[22px] text-[14px]  py-[14px] rounded-[5px] hover:bg-secondary dark:hover:bg-primary hover:text-white">
              Register
            </button>
          </div>
        </div>
        <div className="flex sm:flex-nowrap flex-wrap gap-[20px] gap-y-[40px] justify-bwtween items-center">
            <FooterSection heading={"CATEGORIES"} array={Categories} />
            <FooterSection heading={"ABOUT"} array={About} />
          <FooterSection heading={"Follow Us"} array={Follow} />
        </div>
      </div>
      <div className="bg-secondary dark:bg-primary py-[36px] flex justify-center items-center text-white font-[24px] sm:px-12 md:px-16 lg:px-20 px-4 ">
      Copyright © 2021 all rights reserved smartHome
      </div>
    </section>
  );
};

export default Footer;
