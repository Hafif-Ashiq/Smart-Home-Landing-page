import React from 'react'
import { Link } from 'react-router-dom'

const DownloadButton = ({img,link,name,para}) => {
  return (
    <>
    <Link to={link} className='flex flex-row bg-black text-white md:px-[20px] px-[10px] md:py-[8px] py-[4px] items-center justify-between gap-[20px] rounded-[10px]' >
        <img src={img} alt=""  className='md:w-[40px] md:h-[40px] w-[32px] h-[32px] flex  justify-center items-center'/>
        <div className='flex flex-col items-start justify-start'>
            <p className='sm:text-[16px] text-[14px]'>{para}</p>
            <p className='sm:text-[24px] text-[18px] font-semibold'>{name}</p>
        </div>
    </Link>
    </>
  )
}

export default DownloadButton