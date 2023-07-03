import React from 'react'

const AboutSection = ({img,title,para,css}) => {
  return (
    <div className={`flex sm:flex-row ${css} items-center justify-center w-full flex-col  gap-[40px]`}>
        <div className='relative flex-1 flex items-center justify-center'>
            <img src={img} alt="" className='relative z-10 sm:left-[50%] sm:translate-x-[-42%]'/>
            <div className='absolute w-[90%] bg-primary bottom-[25%] z-0 h-[40%] rounded-[10px]' />
        </div>
        <div className={`flex-1 flex flex-col sm:items-start items-center justify-center relative z-10 gap-[35px]  `}>
            <h2 className='md:text-[48px] text-[36px] text-secondary font-bold sm:text-left text-center'>{title}</h2>
            <p className='md:text-[24px] text-[18px
            ] text-black_text sm:text-left text-center'>{para}</p>
            <button className='bg-transparent px-[43px] py-[18px] border-secondary border-[1px] font-semibold text-[18px] rounded hover:bg-secondary hover:text-white '>Learn More</button>
        </div>
    </div>
  )
}

export default AboutSection