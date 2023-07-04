import React from 'react'
import Heading from './Heading'
import Testimonies from './Testimonies'
import { testimoniesArray,purpleVector   } from '../constants'

import CarouselTestimony from './CarouselTestimony'


const Testimonials = () => {
    // const testimony = testimoniesArray[0]
    return (
    <section className='py-[80px] pb-[100px] sm:px-12 md:px-16 lg:px-20 px-4' id='testimonials'>
        <Heading 
        title={"Testimonials"}
        para={
            "Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage."
        }
        />
        <div className='sm:flex hidden flex-wrap justify-center gap-4 pt-[100px] '>
            {testimoniesArray.map((testimony) =>(
                <Testimonies key={testimony.name} name={testimony.name} job={testimony.job} para={testimony.para} img={testimony.img} />

            ))}
        </div>
        <div className='sm:hidden flex justify-center gap-4 pt-[100px] '>
            {/* <carousel />   */}
            <CarouselTestimony array={testimoniesArray} />
        </div>

        {/* <div className='flex justify-center '>
            <img src={testimonyVector} alt="" />
        </div> */}
            <img src={purpleVector} alt=""  className='absolute right-0 z-0 w-[40%]'/>
    </section>
  )
}

export default Testimonials