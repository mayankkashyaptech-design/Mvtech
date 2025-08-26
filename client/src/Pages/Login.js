import React, { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import {jwtDecode} from "jwt-decode"
import { Link, useNavigate } from 'react-router-dom';
import Right from "../assets/right.png";
import ShowPassword from '../js/ShowPassword';
import { useGlobalcontext } from '../Features/Context';
import LoginValidation from '../js/LoginValidation';
import POST from '../js/POST';

export default function Login() {
  let {Okanimation,setOkanimation,setUser}=useGlobalcontext();
  let navigate=useNavigate();
    const[loding,setloding]=useState(false)
    const[error,seterror]=useState('')
    const[UserData,setUserData]=useState('');  
   async function Submit(e){
      e.preventDefault();
      
      setloding(true)
      let result=LoginValidation(UserData);

      if(result.length === 0){
        let responce=await POST('login',UserData);
        responce.error && seterror(responce.error); 
        if(responce.statusCode === 200){
          setloding(false);
          // console.log(jwtDecode(responce.token))
          if(localStorage.getItem('MvtechToken')){

            responce.token && localStorage.setItem('Mvtechtoken',responce.token);
          }else{
            responce.token && localStorage.setItem('Mvtechtoken',responce.token);

          }
          setOkanimation(true);
          setUser({isUserLogin:true,userInfo:jwtDecode(responce.token)});
            setTimeout(() => {
              setOkanimation(false)
              navigate('/');
            }, 2500);
          
        
      }else{
        setloding(false);
        seterror(responce.error)
      }
      


      }else{
        setloding(false);
        seterror(result.error);
      }

} 
    function change(e){
      setUserData({
        ...UserData,
        [e.target.name]:e.target.value
      })
    }

function googleLogin(){
  window.open('http://localhost:8000/auth/google/callback',"_self");
}

  return (
    <>
    <section className='section-all-center'>
        <div className='max-container'>
            <div className='auth-container w-[450px] p-[20px] bg-white border-2 border-slate-300 m-auto max-sm:w-[80%]'>
                <div className='head-group'>
                    <h1 className='text-2xl font-Poppins font-[600]'>Login</h1>
                    <span className='text-slate-500 text-sm'>login to get started.</span>
                </div>
             <form className=" w-full" onSubmit={Submit}>
             
                
                 <div className='input mb-3'>
                 <div className='input-box relative'>
                  <input type='text' className='border border-slate-400 py-2 px-2.5 w-full rounded-[2px] peer'onChange={change} name='email' required/>
                  <label className='absolute  text-sm pointer-events-none  left-3 top-2 px-1 text-gray-500 peer-focus:-translate-y-5 duration-200 peer-focus:text-smpeer bg-white peer-valid:-translate-y-5'>email</label>
                 </div>
                 {error.email && <div className='error text-red-800 text-sm mb-4'>{error.email}</div>}
                  
                 </div>
                 <div className='input mb-3'>
                 <div className='input-box relative'>
                  <input type='password' className='border border-slate-400 py-2 px-2.5 w-full rounded-[2px] peer'id='password'name='password' onChange={change} required/>
                  <label className='absolute text-sm pointer-events-none  left-3 top-2 px-1 text-gray-500 peer-focus:-translate-y-5 duration-200 peer-focus:text-smpeer bg-white peer-valid:-translate-y-5'>password</label>
                 <div> <input type='checkbox'onClick={ShowPassword}/><span className='text-sm pl-1'>show password</span> </div>
                 <div className='text-indigo-600 underline'><Link to="/verify-email">Forget Password?</Link></div>
                 </div>
                 {error.password && <div className='error text-red-800 text-sm mb-4'>{error.password}</div>}
                  
                 </div>
                  
                 <button className='w-full py-3.5 px-2.5 bg-black text-white rounded-[4px] flex items-center justify-center'type='submit'>
                  {loding ?<ThreeDots visible={true} height="30"width="60"color="#4fa94d"radius="2"ariaLabel="three-dots-loading"/> :"Login securly" }
                  
                    {Okanimation && <img src={Right} className="h-8 w-8 ml-2"alt='</'/> }
                  
                  </button>
                  <span className='text-black font-Poppins text-sm py-2 flex items-center'>do Not have an account ?<Link to="/singup"className='text-indigo-600 text-[17px]'>Singup</Link></span>
              

             </form>
              
            </div>
        </div>
    </section>
    
    </>
  )
}


