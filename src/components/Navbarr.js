import React, { useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbarr = (props) => {
  const { nav, setNav, navHandler, navItems } = props;
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!sidebarRef.current.contains(event.target)) {
        setNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setNav]);
  

  return (
    <div className='flex w-full z-50 h-[60px] text-white fixed bg-gray-800'>
      {<div
        ref={sidebarRef}
        className={`fixed w-2/4  flex flex-col z-50 md:hidden overflow-hidden h-screen top-0 bg-gray-800 gap-20 transition-all ease-in-out duration-300 ${
          nav ? "translate-x-0 overflow-y-hidden" : "translate-x-[-900px]"
        }`}
      >
        <div className='flex w-full flex-col mt-10 items-center gap-5'>
          <p className=' text-white text-2xl font-extrabold'>Portfolio</p>
          <div className='h-[0.5px] w-full bg-slate-50'></div>
        </div>
        
        <div>
            {navItems.map((item) => (
              <a
                href={`#${item.title}`}
                onClick={navHandler}
                className='w-full h-10 flex cursor-pointer items-center capitalize hover:shadow-lg hover:border-t hover:border-b justify-center'
                key={item.id}
              ><ul>
                <li>{item.title}</li>
              </ul>
                
              </a>
            ))}
        </div>
       
      </div>}

      <div className='w-full flex items-center justify-between'>
      
        <div className='ml-8 font-bold text-2xl'>Portfolio</div>

        <div className='gap-4 mr-4 hidden bg-zinc- rounded-md md:flex'>
          {navItems.map((item) => (
            <ul>
              <li className='text-xl hover:bg-white hover:text-black cursor-pointer py-1 px-2 rounded-md' key={item.id}>
                <a href={`#${item.title}`}>{item.title}</a>
              </li>
            </ul>
           
          ))}
        </div>

        <div className='flex md:hidden mt-2 absolute right-0 mr-8'>
          {!nav ? (
            <div onClick={navHandler} className='cursor-pointer'>
              <AiOutlineMenu size='25px' />
            </div>
          ) : (
            <div className='cursor-pointer text-red-700'>
              <AiOutlineClose onClick={navHandler} size='25px' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbarr;
