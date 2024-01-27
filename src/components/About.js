import React from 'react';
import image from "../assets/myPhoto.jpeg";
import { SiCodechef,SiLeetcode } from "react-icons/si";
import { FaGithub,FaLinkedin,FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <div id='about' className='text-white w-full sm:h-[750px] h-auto'>
        <div className='flex flex-col items-center'>
            
            <h1 className='text-2xl font-bold mt-20 text-center'>ABOUT ME</h1>
            <div className='h-1 w-[100px] rounded-sm bg-white'></div>
        </div>
        <div className='w-full flex h-auto justify-center flex-wrap gap-10 mt-20 items-center'>
            <div className='w-auto h-auto sm:border-b-[0px] border-b-[0.5px]  sm:border-r-[0.5px] px-10 flex flex-col flex-grow-1 flex-shrink-1 gap-y-4 items-center'>
                <img src={image} className='w-[200px] flex h-[200px] rounded-full border-[15px]'/>
                <div className='flex flex-col items-center'>
                    <h2>Dashrath Chaudhary</h2>
                    <div className='w-[60px] h-1 rounded-md bg-white'></div>
                </div>
                
                <div className='flex flex-col  flex-wrap mb-7 mt-2 gap-2'>
                    <a className='flex gap-3 cursor-pointer'>
                        <SiCodechef size={20} />
                        <p>CodeChef</p>
                    </a>
                    <a className='flex gap-3 cursor-pointer'>
                        <FaGithub size={20}/>
                        <p>GitHub</p>
                    </a>
                    <a className='flex gap-3 cursor-pointer'>
                        <MdEmail size={20} />
                        <p>Mail Me</p>
                    </a>
                   
                </div>
            </div>
            <div className='sm:w-[30%] w-[250px]  h-auto flex flex-col items-center flex-grow-1 flex-shrink-1 gap-y-8'>
                <p className='flex flex-wrap flex-shrink-1'>
                    Welcome to my portfolio website. My name is
                    Dashrath. I am a web developer and competitive
                    Programmer.Throughout my career, I have worked on various 
                    projects and initiatives that have helped me Sharp my skills
                    in web development. I have extensive knowledge of programming 
                    languages including C++, java, Python, Javascript, PHP, Node js,
                    ReactJs, NextJS etc. I have used my programming skills to develop
                    many project which given below.
                </p>
                <div className='flex gap-2 flex-col'>
                    <a className='flex gap-3 cursor-pointer'>
                        <SiLeetcode size={20} />
                        <p>LeetCode</p>
                    </a>
                    <a href='https://www.linkedin.com/in/dashrath-chaudhary-a64b00225/' className='flex gap-3 cursor-pointer'>
                        <FaLinkedin size={20} />
                        <p>LinkedIn</p>
                    </a>
                    <a href='https://www.instagram.com/dashrath._.20/' className='flex gap-3 cursor-pointer'>
                        <FaInstagram size={20} />
                        <p>Instagram</p>
                    </a>
                </div>
            </div>
            <div className='w-full mt-[50px] h-[0.5px] bg-white'></div>
        </div>
        
    </div>
  )
}

export default About