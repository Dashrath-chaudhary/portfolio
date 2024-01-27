import React from 'react';


const Contact = () => {
  return (
    <div id='contact' className='text-white w-full sm:h-[550px] mt-10 sm:mt-[-60px] h-auto'>
        <div className='text-white flex flex-col items-center'>
        <h1 className='text-2xl font-bold '>Have Any Question?</h1>
            <div className='h-1 w-[100px] rounded-sm bg-white'></div>
        </div>
        <div>
        <form action="https://formspree.io/f/xjvnganb" method="POST" className='flex flex-col gap-3 mt-10 mb-7 items-center w-full h-auto'>

            <div className='w-1/2 sm:w-1/3 flex flex-col'>
                <label className='font-bold text-blue-white text-3xl ' for="name">Name<sup className='text-red-700'>*</sup>:</label>
                <input className='placeholder-black mt-2 w-full p-1 text-black bg-zinc-400 border-b-2 rounded-md' type="text" id="name" name="name" placeholder='Enter Name...' required/>
            </div>
            
            <div className='w-1/2 sm:w-1/3 flex flex-col'>
                <label className='font-bold text-blue-white text-3xl ' for="email">Email<sup className='text-red-700 -p-4'>*</sup>:</label>
                <input className='w-full mt-2 p-1 placeholder-black text-black bg-zinc-400 border-b-2 rounded-md' type="email" id="email" name="email" placeholder='someone@example.com' required/>
            </div>
            
            <div className='w-1/2 sm:w-1/3 flex flex-col'>
                <label className='font-bold text-blue-white text-3xl ' for="message">Question?<sup className='text-red-700'>*</sup>:</label>
                <textarea className='w-full mt-2 p-1 text-black placeholder-black bg-zinc-400 border-b-2 rounded-md' id="message" name="message" rows="4" placeholder='Write Something...' required></textarea>
            </div>
            
            <div className='w-1/2 sm:w-1/3'>
                <button className='w-full bg-white text-black hover:font-bold rounded-md p-2 mt-2 hover:shadow-lg hover:shadow-zinc-500/50' type="submit">SEND</button>
            </div>
            
        </form>

        </div>
    </div>
  )
}

export default Contact