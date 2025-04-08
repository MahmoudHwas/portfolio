import { Bars3Icon } from "@heroicons/react/16/solid"
import React from "react"

interface Prpos {
  openNav:() => void;
}

const Nav = ({openNav} : Prpos) => {
  return (
    <div className=" w-[100%] fixed z-[1000] top-0 h-[10vh] bg-[#141c27] shadow-md ">
          <div className="flex items-center justify-between h-[100%] w-[80%] mx-auto">
            <h1 className="flex-[0.6] cursour-pointer text-[25px] text-white font-bold">WEB 
              <span className="text-yellow-300">DEV</span>
            </h1>
            <div className="nav-link"><a href="#home">HOME</a></div>
            <div className="nav-link"><a href="#about">ABOUT</a></div>
            <div className="nav-link"><a href="#services">SERVICES</a></div>
            <div className="nav-link"><a href="#projects">PROJECTS</a></div>
            <div className="nav-link"><a href="#blog">BLOG</a></div>
            <div className="nav-link"><a href="#contact">CONTACT</a></div>
            <div onClick={openNav}>
              <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
            </div>
          </div>
    </div>
  )
}

export default Nav
