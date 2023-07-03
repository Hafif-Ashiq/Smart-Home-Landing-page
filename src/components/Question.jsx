import React, { useState } from 'react'

import { minus, plus } from '../constants'

const Question = ({question,answer}) => {
    const [extended,setExtended] = useState(false)
  return (
    <div className={`w-full sm:px-[50px] px-[20px] sm:py-[35px] py-[18px] font-poppins ${extended ? 'bg-white' : 'bg-faded_text'} flex flex-col gap-[30px] justify-center  items-start shadow-lg shadow-gray-100 rounded-[10px]` } >
      <button className='flex gap-[30px] justify-start items-center cursor-pointer' onClick={() => setExtended(!extended)}> 
        <img src={extended ? minus : plus} alt="" className={`cursor-pointer`} />
        <p className='text-black_text sm:text-[22px] text-[18px] text-left'>{question}</p>
      </button>

      
        {/* <p className={`text-[#575757] text-[18px] ${extended? 'scale-y-100 opacity-1 block' : 'scale-y-0 opacity-0 hidden'} origin-top transition-transform delay-[2s] duration-100 ease-out` }>{answer}</p> */}
     
      <p className={`text-[#575757]  sm:text-[18px] text-[16px] ${extended ? 'block' : 'hidden'} pl-[66px] transition-all duration-100 ease-out` }>{answer}</p>
    </div>
  );
};

export default Question;
