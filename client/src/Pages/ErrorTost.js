import React from 'react'
import { useGlobalcontext } from '../Features/Context'

export default function ErrorTost({error}) {
  // let {seterorTost}=useGlobalcontext();
  return (
    <>
    
     <div className='error-tost min-w-[40%] bg-red-400 '>
      <div className='error p-[10px]'>
       <h2 className='text-black font-Poppins'>{error.title}</h2>
       <div className='error-text text-[15px] text-gray-500 font-Poppins'>
        {error.discription}
        </div>   
      </div>
      </div>  
    
    </>
  )
}
