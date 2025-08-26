import React from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'

export default function CPanel() {
  return (
    <>
    <div className='c-panel w-full h-[100vh] bg-slate-100 flex'>

<Sidebar/>
<div className='right-con w-[calc(100%-230px)] max-sm:w-full'>
  <Header/>
    <div className='px-2.5 py-2'>

    <Outlet/>
    </div>

</div>
</div>

    </>
  )
}
