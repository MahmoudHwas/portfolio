import React from 'react'
import  Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'


const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center" id='home'>
    <Particle />
    
    <div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
    <div>
    <h1 className='text-[35px] md:text[50px] text-white font-bold'>
            Hi IM <span className='text-yellow-300'>Mahmoud </span>
            </h1>
            <TextEffect />
            <p className='mt-[1.5rem] text-[20px] text-[#ffffff92]'> 
            I’m Mahmoud Hawas, a passionate Front-end and Back-end Developer skilled in JavaScript and Node.js. I specialize in building dynamic
             and responsive web applications using modern technologies like React, Express, and MongoDB.
              Although I don’t have formal experience with companies yet, I’ve honed my skills through hands-on projects, focusing on creating efficient,
               user-friendly solutions. I’m eager to leverage my knowledge and enthusiasm to contribute to innovative teams and grow as a developer.
            </p>
            <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem]
                 text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                  <p> <a href="/MahmoudHawas.pdf" download >Download CV</a></p>
                  <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black' />
                </button>

            </div>
    </div>
    <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]'>
      <Image src='/images/u1.jpg'  alt='the developer' layout='fill' className='object-cover rounded-full'/>
    </div>
    </div>
    </div>
  )
}

export default Hero
