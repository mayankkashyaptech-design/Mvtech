import React from 'react'

export default function Card({img}) {
  return (
    <>
     <div className='card min-w-[350px]  m-[0 10px 30px 20px] rounded-tl-[5px] rounded-tr-[5px] overflow-hidden '>
      <div className='img-con'>
        <img src={img}alt=''className='w-full h-[300px]'/>
      </div>
      <div className='details-con px-2.5 py-5 bg-blue-950'>
        <div className='title text-white'>
            <h3 >cost effectiveinthe futher in the different</h3>
        </div>
      </div>
    </div>
    
    
    </>
  )
}
