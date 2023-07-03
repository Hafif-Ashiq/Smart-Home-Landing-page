import React from "react";

const Testimonies = ({para,img,name,job}) => {
  return (
    <div className="p-[50px] bg-[#E7EBEE] dark:bg-secondary_dark max-w-[600px] rounded-[10px] flex flex-col items-start justify-between gap-[30px] font-poppins shadow-gray-300 dark:shadow-gray-800 shadow-lg sm:hover:bg-white sm:dark:hover:bg-[#E7EBEE] cursor-pointer h-[300px]  text-[#5F7285]  dark:text-faded_text dark:sm:hover:text-[#5F7285]">
      <p className="text-[16px] overflow-hidden text-ellipsis">{para}</p>

      <div className="flex gap-[14px]">
        <img src={img} alt="" className="w-[48px] h-[48px]"/>
        <div className="flex gap-[3px] flex-col justify-between items-start">
          <h2 className="text-secondary text-[16px] font-bold">{name}</h2>
          <p className="text-[16px] text-[#9C9EA3] ">{job}</p>
        </div>
      </div>
      
    </div>
  );
};

export default Testimonies;
