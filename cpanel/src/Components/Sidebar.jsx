import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io";
import MenuList from '../Js/MenuList';
import { useGlobalcontext } from '../Features/Context';


export default function Sidebar() {
    let {SidebarRef}=useGlobalcontext();
    function RenderSubmenus(submenus){
        return (
            <ul className='bg-slate-700 submenu hidden'>
                {submenus.map((element,idx)=>{
                    let {name,path}=element;
                    return(
                        <li key={idx} className=''><Link to={path}className='flex py-3 items-center px-2.5'><span className='text-white font-Poppins text-[14px]'>{name}</span></Link></li>
                    )
                })}
            </ul>
        )
    }

    function showSubmenu(e){
        let submenu=e.target.querySelector('ul');
        if(!submenu) return

        if(submenu.style.display==='none' || !submenu.style.display){
          submenu.style.display="block";
        }else{
          submenu.style.display="none";

        }
        console.log(submenu);

    }
  return (
   <>
   <div className='side-bar w-[230px] bg-slate-800 h-full max-sm:fixed left-[-100%]'ref={SidebarRef}>
    <div className='main-conyainer '>
    <div className='logo text-2xl text-center py-2 bg-slate-600'>
        <span className='font-Alfa-Slab-One text-violet-600'>MV</span>
        <span className='text-black'>tech.</span>
    </div>
    <div className='menu-list mt-2.5 px-2'>
        <ul>
            {MenuList.map((element,idx)=>{
                let {name}=element;
                return(

                    <li key={idx} onClick={showSubmenu}><Link to="/" className='flex items-center py-2 justify-between pointer-events-none'><span className='text text-white font-Poppins'>{name}</span> 
                    {element.submenus && <IoIosArrowDown className='flex text-[20px] text-white '/>} 
                    
                    </Link>
                    {element.submenus && RenderSubmenus(element.submenus)}
                    </li>
                )
            })}

        </ul>
    </div>

   </div>
   </div>
   
   
   </>
  )
}
