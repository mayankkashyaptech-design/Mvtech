import React from 'react'
import { useGlobalcontext } from './Context'
import { Navigate, Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import PageWrapper from '../Components/PageWrapper';
import SubscribeBanner from '../Components/SubscribeBanner';
import TagsSection from '../Components/Tags';

export default function ProctectedRoute() {
    let {User}=useGlobalcontext();
  return (
   User.isUserLogin?<>
   <Navbar/> 
    <PageWrapper>
   <div className='all-page-here'>
   <div className='overflow-hidden'>
    <Outlet/>
    {/* <TagsSection/>s */}
    <SubscribeBanner/>
   </div>
   </div>
      </PageWrapper>    
   
   <Footer/>
   
   </>
   :<Navigate to="/login"/>
  )
}
