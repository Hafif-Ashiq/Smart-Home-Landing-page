import React from 'react'

const Heading = ({title,para}) => {
  return (
    <div className='flex flex-col text-black_text items-center justify-center'>
        <h2 className='sm:text-[72px] text-[48px]  font-bold font-poppins '>{title}</h2>
        <p className='text-[18px] font-poppins text-[#575757] sm:w-[50%] text-center'>{para}</p>
    </div>
  )
}

export default Heading