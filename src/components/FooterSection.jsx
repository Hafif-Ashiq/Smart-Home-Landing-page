import React from 'react'

const FooterSection = ({heading,array}) => {
  return (
    <div className='flex flex-col justify-start items-start font-poppins h-[100%] sm:gap-[55px] gap-[20px]'>
        <h2 className='text-[#2E2E2E] dark:text-faded_text text-[24px] font-semibold'>{heading}</h2>
        <div className='flex flex-col justify-between items-start gap-[20px]'>
            {array.map((item)=>(
                <a key={item.title} href={item.link} className='text-black_light dark:text-faded_text text-[18px] hover:text-secondary dark:hover:text-primary'>{item.title}</a>
            ))}
        </div>
    </div>
  )
}

export default FooterSection