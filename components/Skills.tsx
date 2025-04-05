import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
        <h1 className='heading'>
            Education & <span className='text-yello-400'>Skills</span>
        </h1>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
            <div>
                <SkillsItem title="React Developer" year="2021 - 2024" description="Since 2021, I’ve been self-studying web development, mastering HTML, CSS, JavaScript, and Bootstrap. I learned through Osama Elzero’s tutorials and various YouTube resources, building a strong foundation in front-end technologies."  />
                <SkillsItem title="MERN Developer" year="2023 - 2024" description="I mastered the MERN stack (MongoDB, Express.js, React.js, Node.js) and built full-stack projects with it. This self-directed learning enabled me to create dynamic, end-to-end web applications independently." />
                <SkillsLanguage
                 skill1="html"
                 skill2="css"
                 skill3="JavaScrip"
                 skill4="Express"
                 skill5="MongoDB"
                 level1="w-[85%]"
                 level2="w-[78%]"
                 level3="w-[70%]"
                 level4="w-[80%]"
                 level5="w-[75%]"
                 />
            </div>
            <div>
                <SkillsItem title="Next Developer" year="2023 - 2024" description="In 2023, I expanded my skills by learning Next.js through various YouTube resources. This self-study enhanced my ability to build modern, server-rendered web applications efficiently."/>
                <SkillsItem title="Node Js Developer" year="2023 - 2024" description="In 2024, I self-taught Node.js and applied it to build projects and create endpoints. This hands-on experience strengthened my back-end development skills, focusing on scalable server-side solutions."/>
                <SkillsLanguage
                 skill1="React Js"
                 skill2="Next Js"
                 skill3="TypeScrip"
                 skill4="Node Js"
                 skill5="TailwindCSS"
                 level1="w-[80%]"
                 level2="w-[65%]"
                 level3="w-[60%]" 
                 level4="w-[75%]"
                 level5="w-[75%]"/>
            </div>
        </div>
    </div>
  )
}

export default Skills
