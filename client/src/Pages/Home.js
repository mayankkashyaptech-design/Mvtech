import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRightLong } from 'react-icons/fa6'
import Coursole from '../Components/Coursole'
import { useGlobalcontext } from '../Features/Context'
import SubscribeBanner from '../Components/SubscribeBanner'
import HelpCenter from '../Bits-content/HelpCenter'
import Titleanimate from '../Features/animation/Titleanimate'

export default function Home() {
    let {User}=useGlobalcontext();
    // console.log(User)
  return (
    <>
   <section className='section-center   banner relative '>
        <div className='max-container mx-auto bg--100 '>
       
            <div className='banner-con '>
                <div className='b-box'>
               <div className='head-group'>
                <p className='sub-title'>A CRE capital markets advisory firm.</p>
  <Titleanimate>

                <div className='head-text'>
                    <h1 className='topic text-[4rem] font-[800] leading-[70px] max-sm:text-[3.4rem] '>Reliable & Safe <br/>Lift Solutions   Elevate with Us!</h1>
                </div>
  </Titleanimate>
                <div className='para-text-con my-2.5 flex'>
                    <p className='para-text  '>Commercial mortgage experts with 20 years of market knowledge and a reliable 5-step loan process.<br/>
                        years of market knowledge and a reliable 5-step loan process.</p>
                </div>
                <div  className='btn-con'>
                    <Link to="/"className='py-2.5 px-5 bg-black rounded-full inline-flex group items-center'><span className='text-white'>Learn More</span><FaArrowRightLong className='text-white font-[20px] bg-slate-700 p-[5px] text-[20px] rounded-full ml-1.5 animate-pulse'/></Link>
                    {/* <DisplayBtn  path={"/"} text={'Book A Meeting'}icon={<FaArrowRightLong className='i'/>}/> */}
                </div>
                </div>
                </div>    
               
            </div>
        </div>
    </section>
    <Coursole/>
    <HelpCenter/>
    
    {/* <SubscribeBanner/> */}
    {/* <section className='section-center'>

    </section> */}

    </>
  )
}
