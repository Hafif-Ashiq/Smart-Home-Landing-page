import React from 'react'

const FooterSection = ({heading,array}) => {
  return (
    <div className='flex flex-col justify-start items-start font-poppins h-[100%] sm:gap-[55px] gap-[20px]'>
        <h2 className='text-[#2E2E2E] text-[24px] font-semibold'>{heading}</h2>
        <div className='flex flex-col justify-between items-start gap-[20px]'>
            {array.map((item)=>(
                <a href={item.link} className='text-black_light text-[18px] hover:text-secondary'>{item.title}</a>
            ))}
        </div>
    </div>
  )
}

export default FooterSection