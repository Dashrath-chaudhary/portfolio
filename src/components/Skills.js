import React from 'react';
import { FaReact,FaPhp,FaPython,FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandCpp } from "react-icons/tb";
import { DiNodejs } from "react-icons/di";
import { SiSpring } from "react-icons/si";

const Skills = () => {

    const skills = [
        {   className:"text-white w-[100px] ml-4 mr-4 sm:w-1/5 bg-black flex flex-col items-center justify-center hover:bg-blue-400 hover:scale-105 transition-all duration-200 flex-wrap w-full h-[150px] border rounded-md",
            icon:<FaReact size={60}/>,
            name:"React Js"
        },
        {   
            className:"text-white w-[100px] sm:w-1/5 ml-4 mr-4 bg-black flex flex-col items-center justify-center hover:bg-yellow-400 hover:scale-105 transition-all duration-200 bg-black flex flex-col items-center justify-center flex-wrap w-full  h-[150px] border rounded-md",
            icon:<IoLogoJavascript size={60}/>,
            name:"Java Script"
        },
        {
            className:"text-white w-[100px] sm:w-1/5 ml-4 mr-4 bg-black flex flex-col items-center justify-center hover:bg-blue-900 hover:scale-105 transition-all duration-200 bg-black flex flex-col items-center justify-center flex-wrap w-full h-[150px] border rounded-md",
            icon:<TbBrandCpp size={60}/>,
            name:"C++"
        },
        {
            className:"text-white w-[100px] sm:w-1/5 ml-4 mr-4 bg-black bg-black flex flex-col items-center justify-center hover:bg-green-400 hover:scale-105 transition-all duration-200 flex flex-col items-center justify-center flex-wrap w-full h-[150px] border rounded-md",
            icon:<FaPhp size={60}/>,
            name:"PHP"
        },
        {
            className:"text-white w-[100px] sm:w-1/5 ml-4 mr-4 bg-black flex flex-col items-center justify-center hover:bg-green-900 hover:scale-105 transition-all duration-200 bg-black flex flex-col items-center justify-center flex-wrap w-full h-[150px] border rounded-md",
            icon:<DiNodejs size={60}/>,
            name:"Node Js"
        },
        {
            className:"text-white w-[100px] sm:w-1/5 ml-4 mr-4 bg-black flex flex-col items-center justify-center hover:bg-red-500 hover:scale-105 transition-all duration-200 bg-black flex flex-col items-center justify-center flex-wrap w-full  h-[150px] border rounded-md",
            icon:<FaPython size={60}/>,
            name:"Python"
        },
        {
            className:"text-white w-[100px] sm:w-1/5 ml-4 mr-4 bg-black flex flex-col items-center justify-center hover:bg-violet-400 hover:scale-105 transition-all duration-200 bg-black flex flex-col items-center justify-center flex-wrap w-full  h-[150px] border rounded-md",
            icon:<FaJava size={60}/>,
            name:"Java"
        },
        {
            className:"text-white w-[100px] sm:w-1/5 ml-4 mr-4 bg-black flex flex-col items-center justify-center hover:bg-pink-400 hover:scale-105 transition-all duration-200 bg-black flex flex-col items-center justify-center flex-wrap w-full  h-[150px] border rounded-md",
            icon:<SiSpring size={60}/>,
            name:"Spring"
        }

    ]

  return (
    <div id='skills' className='text-white w-full sm:h-[750px] h-auto'>
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl font-bold mt-20 text-white text-center'>SKILLS</h1>
            <div className='h-1 w-[100px] rounded-sm bg-white'></div>
        </div>
        <div className='flex flex-wrap h-auto justify-center flex-shrink-1 mt-10 place-items-center gap-5 '>
            {
                skills.map(skill => (
                    <div className={skill.className}>
                        <div className='mb-5'>{skill.icon}</div>
                        <p>{skill.name}</p>
                    </div>
                ))
            }
        </div>
        <div className='w-full mt-[50px] h-[0.5px] bg-white'></div>
    </div>
  )
}

export default Skills