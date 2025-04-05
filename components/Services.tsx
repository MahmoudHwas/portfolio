import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Services = () => {
  return (
    <div className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]' id='services'>
        <p className='heading'>
            My <span className='text-yellow-400'>Services</span>
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center
         gap-[3rem] mt-[4rem] text-white '>
            <div data-aos="fade-right">
                <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6
                 uppercase font-semibold text-center p-[2rem]'>
                    <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8] cursor-pointer'/>
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Frontend</h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>I’m Mahmoud Hawas, a Front-end Developer skilled in JavaScript and React.js. I’ve worked on various projects, building dynamic and responsive web applications with a focus on modern, user-friendly interfaces. In addition to development, I have a keen eye for design and can work as a UI designer, creating visually appealing and intuitive layouts that enhance user experiences.</p>
                </div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="300">
                <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300 
                 uppercase font-semibold text-center p-[2rem]'>
                    <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8] cursor-pointer'/>
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Backend</h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>I’m Mahmoud Hawas, a Back-end Developer proficient in Node.js and JavaScript. I’ve developed APIs for various projects, ensuring efficient and scalable server-side solutions. With a strong understanding of MongoDB and Express, I’ve built robust backends to support dynamic applications. I take pride in writing clean, maintainable code that follows best practices, making my work both reliable and easy to extend.</p>
                </div>
            </div>
            <div data-aos="fade-left" data-aos-delay="500">
                <div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6
                 uppercase font-semibold text-center p-[2rem]'>
                    <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8] cursor-pointer'/>
                    <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>FullStack</h1>
                    <p className='text-[15px] text-[#d3d2d2] font-normal'>I’m Mahmoud Hawas, a versatile Full-stack Developer skilled in the MERN stack (MongoDB, Express.js, React.js, and Node.js). I’ve built multiple projects from scratch, handling both front-end and back-end development. On the front-end, I craft responsive, user-friendly interfaces with React.js, and I can also design intuitive UI layouts. On the back-end, I develop efficient APIs using Node.js and Express, integrated with MongoDB for robust data management. With a knack for writing clean, maintainable code, I’m capable of independently executing complete web applications that deliver seamless experiences.</p>
                </div>
            </div>
         </div>
    </div>
  )
}

export default Services
