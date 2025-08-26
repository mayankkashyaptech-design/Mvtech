import React, { useRef } from 'react'
import { FiMenu } from "react-icons/fi";
import { useGlobalcontext } from '../Features/Context';

export default function Header() {
  let {SidebarRef}=useGlobalcontext();
  function showSidebar(){
    // console.log(SidebarRef.current.style.left)
    if(SidebarRef.current.style.left='-100%'){
      SidebarRef.current.style.left='0';
    }else{
      SidebarRef.current.style.left='-100%';
    }
  }
  return (
    <>
    
          <div className='header bg-slate-800 flex items-center justify-between py-2'>
            <div className='flex items-center justify-between w-full mx-2.5'>
            <div className='w-full max-sm:flex items-center justify-between'>
            <label htmlFor=''className='hidden max-sm:block'onClick={showSidebar}><FiMenu className='text-white text-[20px]'/></label>
              <div className='search-box flex items-center justify-self-end'>
                  <input type='text'placeholder='search by pages'className='w-full py-1 px-2 border-1'/>
           </div>
           </div>
           </div>
          </div>
    </>
  )
}
