import React from 'react'
import  Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'


const Hero = () => {
  return (
    <div className="min-h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center" id="home">
    <Particle />
    <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[3rem] min-h-0 py-6 flex flex-col justify-center">
      <div className="flex flex-col justify-center">
        <h1 className="text-[35px] md:text-[50px] text-white font-bold">
          Hi IM <span className="text-yellow-300">Mahmoud</span>
        </h1>
        <TextEffect />
        <p className="mt-[1.5rem] text-[18px] sm:text-[20px] text-[#ffffff92]">
          I’m Mahmoud Hawas, a passionate Front-end and Back-end Developer skilled in JavaScript and Node.js. I specialize in building dynamic
          and responsive web applications using modern technologies like React, Express, and MongoDB. Although I don’t have formal experience
          with companies yet, I’ve honed my skills through hands-on projects, focusing on creating efficient, user-friendly solutions. I’m eager
          to leverage my knowledge and enthusiasm to contribute to innovative teams and grow as a developer.
        </p>
        <div className="mt-[2rem] flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6 items-center">
          <button className="px-6 sm:px-8 py-[1rem] hover:bg-yellow-400 transition-all duration-200 text-[18px] sm:text-[20px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-3 whitespace-nowrap min-w-[180px] sm:min-w-[220px]">
            <p>
              <a href="/MahmoudHawas.pdf" download>Download CV</a>
            </p>
            <ArrowDownTrayIcon className="w-6 h-6 text-black" />
          </button>
        </div>
      </div>
      <div className="w-[300px] sm:w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[300px] sm:h-[500px]">
        <Image src="/images/u1.jpg" alt="the developer" layout="fill" className="object-cover rounded-full" />
      </div>
    </div>
  </div>
  )
}

export default Hero
