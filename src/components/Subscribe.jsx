import React from 'react'

const Subscribe = () => {
  return (
    <section className='my-6 sm:mx-12 md:mx-16 lg:mx-20 mx-4 text-faded_text bg-primary dark:bg-secondary rounded-[10px] font-poppins flex sm:flex-row flex-col justify-between items-center md:px-[100px] px-[40px] py-[80px] sm:gap-0 gap-[30px]'>
        <div className='flex flex-col gap-[30px] sm:justify-start justify-center sm:items-start items-center'>
            <h2 className='md:text-[48px] text-[36px] font-semibold sm:text-left text-center'>Subscribe to get Updated</h2>
            <p className='text-[18px] md:w-[80%] sm:text-left text-center'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque .</p>
        </div>
        
            <div className='flex justify-start items-center'>
                <button className='border-white border-[2px] md:px-[70px] px-[50px] text-[18px] font-semibold md:py-[24px] py-[18px] rounded-[7px] hover:bg-white hover:text-primary dark:hover:text-secondary'>Get Started</button>
            </div>
        
    </section>
  )
}

export default Subscribe