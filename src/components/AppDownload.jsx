import React from 'react'
import { downloadLinks ,mobile1 } from '../constants'
import DownloadButton from './DownloadButton'

    
const AppDownload = () => {
  return (
    <section className='py-6 sm:px-12 md:px-16 lg:px-20 px-4 w-full relative flex sm:flex-row flex-col'>
        <div className='flex flex-col items-start justify-center gap-[30px] w-full'>
            <div className='md:text-[72px] text-[48px] text-black_text font-poppins font-bold flex md:justify-start md:items-start items-center justify-center flex-col w-full'>
                <h2>Download</h2>
                <h2>App</h2>
            </div>
            <p className='text-[18px] text-[#575757] md:w-[50%] md:text-left text-center'>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</p>
            <div className='flex flex-row md:justify-start md:items-start items-center justify-center gap-[40px] z-[10] w-full'>
                {downloadLinks.map((item)=>(
                    <DownloadButton key={item.id} img={item.imgLight} name={item.name} para={item.para} link={item.link} />
                ))}
            </div>
        </div>
        <div className='relative md:flex hidden'>
            <img src={mobile1} alt="" className='relative right-0 z-0 '/>
        </div>

    </section>
  )
}

export default AppDownload