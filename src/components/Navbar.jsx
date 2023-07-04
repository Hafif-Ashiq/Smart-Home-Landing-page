import React, { useEffect, useState } from "react";
import { navLinks, menu, cross, lightMode, darkMode } from "../constants";


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navTop, setNavTop] = useState(true);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.scrollY)
      const scrollPos = window.scrollY;

      if (scrollPos == 0) {
        setNavTop(true);
      } else {
        setNavTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <nav className={`${navTop? 'sm:bg-transparent dark:sm:bg-transparent': 'sm:bg-primary dark:sm:bg-secondary'} bg-primary dark:bg-secondary text-faded_text font-poppins sm:py-[16px] py-[4px] flex md:px-12 lg:px-20  px-4 justify-between items-center sm:text-[18px] text-[16px] fixed top-0 z-20 w-full`}>

    {/* <nav
      className={`${
        navTop ? "sm:bg-transparent" : "sm:bg-primary dark:sm:bg-secondary" } 
         text-faded_text font-poppins sm:py-[16px] py-[4px] flex sm:px-12 md:px-16 lg:px-20  px-4 justify-between items-center sm:text-[18px] text-[16px] fixed top-0 z-20 w-full`
        }
    > */}
      <ul className="md:flex hidden justify-start lg:gap-[30px] gap-[20px] w-[35%]">
        {navLinks.map((link) => (
          <li key={link.id}>  
            <a href={`#${link.title}`}>{link.id}</a>
          </li>
        ))}
      </ul>
      <div className="md:hidden flex flex-col gap-[40px] py-6 ">
        <button
          className=""
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <img src={toggle ? cross : menu} alt="" />
        </button>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } flex-col justify-start items-center md:hidden gap-[100px] bg-primary dark:bg-secondary h-[100vh] w-[100vw]`}
        >
          <ul
            className={`${
              toggle ? "flex" : "hidden"
            } flex-col justify-center items-center  text-[24px] gap-[60px] underline `}
          >
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={`#${link.title}`} onClick={() => setToggle(!toggle)}>
                  {link.id}
                </a>
              </li>
            ))}
          </ul>
          <div
            className={`flex flex-row justify-end items-start sm:gap-[40px] gap-3`}
          >
            <button className="bg-white text-black flex-1  w-[100px] py-[18px] text-center font-semibold rounded">
              Login
            </button>
            <button className="bg-white text-black flex-1  w-[100px] py-[18px] text-center font-semibold roun  ded">
              Sign up
            </button>
          </div>
        </div>
      </div>
      <h2 className={`${toggle ? "hidden" : "flex"} font-extrabold text-[2em]`}>
        smartHome
      </h2>
      <div
        className={`w-[35%]  flex justify-end items-center sm:gap-[40px] gap-3`}
      >
        <button className="w-[30px] h-[30px]" onClick={() => handleTheme()}>
          <img src={theme === "dark" ? lightMode : darkMode} alt="" />
        </button>
        <button
          className={`${
            toggle ? "hidden" : "flex"
          } hover:underline  sm:flex hidden`}
        >
          Login
        </button>
        <button
          className={`${
            toggle ? "hidden" : "flex"
          } bg-white text-black md:px-[40px] px-[10px] sm:py-[18px] py-[14px] font-semibold rounded sm:flex hidden`}
        >
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
