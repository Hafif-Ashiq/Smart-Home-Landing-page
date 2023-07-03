import React, { useEffect, useState } from 'react'
import { navLinks,menu,cross } from '../constants'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

    const [toggle,setToggle] = useState(false)
    const [navTop,setNavTop] = useState(true)

    useEffect(()=>{
        const handleScroll = () => {
            // console.log(window.scrollY)
            const scrollPos = window.scrollY
            

            if(scrollPos == 0){
                setNavTop(true)
            }
            else{
                setNavTop(false)
            }
        }

        window.addEventListener('scroll',handleScroll)

        return ()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])


  return (
    
   <nav className={`${navTop? 'sm:bg-transparent': 'sm:bg-primary'} bg-primary text-faded_text font-poppins sm:py-[16px] py-[4px] flex sm:px-12 md:px-16 lg:px-20  px-4 justify-between items-center sm:text-[18px] text-[16px] fixed top-0 z-20 w-full`}>
        <ul className='md:flex hidden justify-start lg:gap-[30px] gap-[20px] w-[35%]'>
            {navLinks.map((link)=>(
                <li key={link.id}><NavLink to={`${link.title}`}>{link.id}</NavLink></li>
            ))}
        </ul>
            <div className='md:hidden flex flex-col gap-[40px] py-6'>
            <button className='' onClick={()=> {
                setToggle(!toggle)
                
            }}>
                <img src={toggle? cross: menu} alt="" />
            </button>
        <div className={`${toggle? 'flex': 'hidden'} flex-col md:hidden gap-[40px]  h-[100vh] w-full`}>
            <ul className={`${toggle? 'flex': 'hidden'} flex-col justify-start  text-[24px] gap-[16px]`}>
                {navLinks.map((link)=>(
                    <li key={link.id}><NavLink to={link.title} onClick={()=>setToggle(!toggle)}>{link.id}</NavLink></li>
                ))}
            </ul>
            <div className={`w-full flex flex-col justify-end items-start sm:gap-[40px] gap-3`}>
            <button  className='bg-white text-black flex-1  w-[100px] py-[18px] text-center font-semibold rounded'>Login</button>
            <button  className='bg-white text-black flex-1  w-[100px] py-[18px] text-center font-semibold roun  ded'>Sign up</button>

            </div>
        </div>
            </div>
        <h2 className={`${toggle? 'hidden' : 'flex'} font-extrabold text-[2em]`}>smartHome</h2>
        <div className={`${toggle? 'hidden': 'flex'} w-[35%]  flex justify-end items-center sm:gap-[40px] gap-3`}>
            <button  className='hover:underline  sm:flex hidden'>Login</button>
            <button  className='bg-white text-black md:px-[40px] px-[10px] sm:py-[18px] py-[14px] font-semibold rounded sm:flex hidden'>Sign up</button>

        </div>
   </nav>
 
  )
}

export default Navbar