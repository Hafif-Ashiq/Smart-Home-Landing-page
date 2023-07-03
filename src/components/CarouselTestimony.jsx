import React, { useState } from 'react'
import { left, right } from '../constants';
import Testimonies from './Testimonies';
const CarouselTestimony = ({array}) => {
    const [currIndex,setCurrIndex] = useState(0);

    const goToNext = (index)=>{
        index == array.length - 1 ? setCurrIndex(0) : setCurrIndex(index+ 1)
    }
    const goToPrev = (index)=>{
        index == 0 ? setCurrIndex(array.length - 1) : setCurrIndex(index - 1)
    }

  return (
    <div className='relative'>
        <div className='relative z-0'>
            <Testimonies key={array[currIndex].name} name={array[currIndex].name} job={array[currIndex].job} para={array[currIndex].para} img={array[currIndex].img} />
        </div>
        <button className='w-[40px] h-[40px] border-[1px] flex justify-center items-center rounded-full bg-white absolute top-[50%] right-[5px] translate-y-[-50%] z-1 shadow-gray-400 shadow-md' onClick={() =>goToNext(currIndex)} >
            <img src={right} alt="" />
        </button>
        <button
        className='w-[40px] h-[40px] border-[1px] flex justify-center items-center rounded-full bg-white absolute top-[50%] left-[5px] translate-y-[-50%] z-1 shadow-gray-400 shadow-md' 
        onClick={() =>goToPrev(currIndex)}>
            <img src={left} alt="" />
        </button>
    </div>
  )
}

export default CarouselTestimony