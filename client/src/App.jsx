import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Singup from './Pages/Singup'
import Login from './Pages/Login'
import ProctectedRoute from './Features/ProctectedRoute'
import Profile from './Pages/Profile'
import BookMeeting from './Pages/BookMeeting'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import { useGlobalcontext } from './Features/Context'
import Services from './Pages/Services'
import ForgetPassEmail from './Pages/ForgetPassEmail'
import ResetPassword from './Pages/ResetPassword'
import ErrorTost from './Pages/ErrorTost'
import ServiceForm from './Pages/ServiceForm'
import PageWrapper from './Components/PageWrapper'
import { AnimatePresence } from 'framer-motion'
import ThemeToggle from './Components/ThemeToggle'
import ScrollToTopButton from './Components/ScrollToTop'
import FAQPage from './Pages/Faq'
import SetPasswordPage from './Pages/SetPasswordPage'


function App() {
  let {User}=useGlobalcontext();
  let {pathname}=useLocation();
  
  useEffect(()=>{
  
    window.scroll({top:0,behavior:"smooth"})
  
  },[pathname])
    let {seterorTost,errorTost}=useGlobalcontext();
  
return(
  <>
  {/* <Navbar/> */}
  {/* {User.isUserLogin && <Navbar/>} */}

  {/* <div className='all-page-here'>
    <div className='overflow-hidden'> */}
    {/* <ThemeToggle/> */}
      <AnimatePresence>
    {/* <PageWrapper> */}
  <Routes location={location} key={location.pathname}>
    <Route element={<ProctectedRoute/>}>
    <Route path='/'element={<Home/>}/>
    <Route path='/about'element={<About/>}/>
<Route path='/profile'element={<Profile/>}/>
<Route path='/book-meeting'element={<BookMeeting/>}/>
<Route path='/contact'element={<Contact/>}/>
<Route path='/services'element={<Services/>}/>
<Route path='/services/service-category'element={<ServiceForm/>}/>
<Route path='/faq'element={<FAQPage/>}/>
</Route>
    
    {/* {User.isUserLogin===false &&  */}
    {/* <> */}
<Route path='/set-password/:id'element={<SetPasswordPage/>}/>
     <Route path='/singup'element={<Singup/>}/>
    <Route path='/login'element={<Login/>}/>
    <Route path='/verify-email'element={<ForgetPassEmail/>}/>
    <Route path='/reset-pass'element={<ResetPassword/>}/>
    {/* </> */}
{/* } */}
 {/* <Route path='*'element={<><h1>page not found...</h1></>}/> */}
  </Routes>
  <ScrollToTopButton/>
  {/* </PageWrapper> */}
  </AnimatePresence>
  {/* </div> */}
  {/* // </div> */}
  {/* {User.isUserLogin && <Footer/> } */}
  {/* <Footer/> */}
  </>

)
}

export default App
