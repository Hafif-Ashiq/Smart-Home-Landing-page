import React from "react";
import Heading from "./Heading";
import { logos } from "../constants";



const Clients = () => {

    
      
  return (
    <section className="py-6 sm:px-12 md:px-16 lg:px-20 px-4">
      <Heading
        title={"Our Clients"}
        para={
          "Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage."
        }
      />

      <div className="flex  flex-wrap justify-center gap-[30px] items-center py-[20px] md:my-[80px] my-[20px] bg-[#FAFAFA] dark:bg-secondary_dark rounded-[20px]">
        {logos.map((logo) => (
          <div
            key={logo}
            className="md:w-[260px] w-[120px] md:h-[110px] px-[20px] h-[90px] bg-white flex justify-center items-center  shadow-gray-200 shadow-md dark:shadow-gray-800 rounded-[14px]"
          >
            <img src={logo} alt="" className="sm:w-full w-[90px] h-[80%]" />
          </div>
        ))}
      </div>

      
    </section>
  );
};

export default Clients;
