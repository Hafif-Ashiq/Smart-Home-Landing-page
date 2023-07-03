import React from 'react'
import { bgDownArrow, downArrow, downloadLinks,purpleVector } from '../constants'
import { Link } from 'react-router-dom'
import DownloadButton from './DownloadButton'



const Download = ({to}) => {
  return (
    <div className=' relative flex flex-col justify-center py-[20px] '>
        <div className='relative md:flex hidden justify-end items-center bottom-[]  h-[400px] w-full z-10'>
            
            <img src={bgDownArrow} className='absolute top-[40px] right-0 ' alt="" />
            <Link to={to} className='absolute top-[72px] right-[114px] w-[62px] h-[62px] flex items-center justify-center rounded bg-white shadow-md shadow-black'>
                <img src={downArrow} alt="" />
            
            </Link>
        </div>
        <div className='flex flex-row justify-center items-end gap-[40px] z-[10]'>
        {downloadLinks.map((item)=>(
            <DownloadButton key={item.id} img={item.imgLight} name={item.name} para={item.para} link={item.link} />
        ))}
        </div>
        <img src={purpleVector} alt=""  className='absolute top-[40px] right-0 z-0 w-[50%]'/>
    </div>
  )
}

export default Download