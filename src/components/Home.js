import React from 'react';
import image from "../assets/myPhoto.jpeg";

const Home = ({selectedItem}) => {


  return (
    <div id='home'>
      <div className='flex justify-center flex-wrap flex-shrink-1 items-center sm:w-full sm:h-[750px] mt-20 sm:mt-0 w-full h-auto gap-8'>
        <div>
          <img src={image} className='w-[300px] h-[300px] rounded-full flex border-white border-[30px] flex-shrink-1 '/>
        </div>
        <div className='text-white flex flex-col items-center'>
          <h2 className='font-bold text-4xl'>Hello I'm</h2>
          <h2 className='font-bold text-4xl'>Dashrath Chaudhary</h2>
          <p className='mt-2'>I am <span className='underline underline-offset-1'>Web-Developer</span></p>
          <div className='flex  gap-2 mt-3 flex-wrap'>
            <a href={`#${selectedItem.title}`} className='bg-zinc-700 py-1 px-2 rounded-md hover:scale-105'> <button >CONTACT ME</button></a>
            <button className='bg-zinc-100 py-1 text-black px-2 rounded-md hover:scale-105'>RESUME</button>
          </div>
        </div>
      </div>
      <div className='w-full mt-10 h-[0.5px] bg-white'></div>
    </div>
  )
}

export default Home