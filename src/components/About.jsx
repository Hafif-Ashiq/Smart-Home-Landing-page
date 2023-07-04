import React from 'react'
import Heading from './Heading'
import AboutSection from './AboutSection'
import mobile1 from '../assets/mobile1.png'
import { aboutInfo } from '../constants'


const About = () => {

    const changePosition = (index) => {
        return index%2!=0 ? 'sm:flex-row-reverse': ''
    }

    

  return (
    <section className='py-[80px] sm:px-12 md:px-16 lg:px-20 px-4' id='about'>
        <Heading 
        title={"About Us"} 
        
        />
        <div className='flex-col gap-0 flex'>
            {aboutInfo.map((item,index)=>(
                <AboutSection key={item.title} img={item.img} title={item.title} para={item.para} css={changePosition(index)} />
            ))}
        </div>
        
        {/* <AboutSection img={mobile1} title={"Smart Home's  Smart Services"} 
        para={"Ye am depending propriety sweetness distrusts belonging collected. Smiling mention he in thought equally musical. Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage."}
        /> */}
    </section>
  )
}

export default About