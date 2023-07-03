import React from 'react'

const LineVector = ({left,right}) => {
  return (
    <div className={`absolute top-0 z-0 left-[11%] h-[100%] md:block hidden`}>
        <div className='w-[2px] h-[100%] bg-[#5683FB]'></div>
        <div className='rounded-full border-white border-[4px] absolute bottom-[50%] left-[-15px] w-[30px] h-[30px] bg-primary'></div>
    </div>
  )
}

export default LineVector