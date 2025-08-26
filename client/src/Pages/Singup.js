import React, { useState } from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import ShowPassword from '../js/ShowPassword';
import SingupValidation from '../js/SingupValidation';
import POST from '../js/POST';
import Right from "../assets/right.png";
import { useGlobalcontext } from '../Features/Context';
import GoogleSingupbtn from '../Components/GoogleSingupbtn';
export default function Singup() {
  let navigate=useNavigate();
  let {Okanimation,setOkanimation}=useGlobalcontext();
    const[loding,setloding]=useState(false)
    const[error,seterror]=useState('')
    const[UserData,setUserData]=useState('');  
   async function Submit(e){
      e.preventDefault();
      
      setloding(true)
      let result=SingupValidation(UserData);
      if(result.length === 0){
       let responce= await POST('singup',UserData)
       responce.error && seterror(responce.error); 
        if(responce.statusCode===200){
            setloding(false);
            setOkanimation(true);
            setTimeout(() => {
              setOkanimation(false)
              navigate('/login');
            }, 2500);
          
        }else{
          seterror(responce.error);
          setloding(false);
        }
        
      

        }else{
          seterror(result.error);
          setloding(false);
        }
    }
    function change(e){
      setUserData({
        ...UserData,
        [e.target.name]:e.target.value
      })
    }

  return (
    <>
  
    <section className='section-all-center'>
        <div className='max-container'>
            <div className='auth-container w-[450px] p-[20px] bg-white border-2 border-slate-300 m-auto max-sm:w-[80%]'>
                <div className='head-group'>
                    <h1 className='text-2xl font-Poppins font-[600]'>Singup</h1>
                    <span className='text-slate-500 text-sm'>Create your account in seconds.
                    Stay connected, stay ahead.</span>
                </div>
             <form className=" w-full" onSubmit={Submit}>
            
            
                 
                 <div className='input mb-3'>
                 <div className='input-box relative'>
                  <input type='text' className='border border-slate-400 py-2 px-2.5 w-full rounded-[2px] peer'name='name' onChange={change} required/>
                  <label className='absolute text-sm pointer-events-none  left-3 top-2 px-1 text-gray-500 peer-focus:-translate-y-5 duration-200 peer-focus:text-smpeer bg-white peer-valid:-translate-y-5'>full name</label>
                 </div>
                  {error.name && <div className='error text-red-800 text-sm mb-4'>{error.name}</div>}
                 </div>
                 
                
                 <div className='input mb-3'>
                 <div className='input-box relative'>
                  <input type='email' className='border border-slate-400 py-2 px-2.5 w-full rounded-[2px] peer'name='email'onChange={change} required/>
                  <label className='absolute text-sm pointer-events-none  left-3 top-2 px-1 text-gray-500 peer-focus:-translate-y-5 duration-200 peer-focus:text-smpeer bg-white peer-valid:-translate-y-5'>email</label>
                 </div>
                 {error.email && <div className='error text-red-800 text-sm mb-4'>{error.email}</div>}
                 </div>
                 <div className='input mb-3'>
                 <div className='input-box relative'>
                  <input type='number' className='border border-slate-400 py-2 px-2.5 w-full rounded-[2px] peer'name='phoneNo'onChange={change} required/>
                  <label className='absolute text-sm pointer-events-none left-3 top-2 px-1 text-gray-500 peer-focus:-translate-y-5 duration-200 peer-focus:text-smpeer bg-white peer-valid:-translate-y-5'>Phone No</label>
                 </div>
                 {error.phoneNo && <div className='error text-red-800 text-sm mb-4'>{error.phoneNo}</div>}
            
                 </div>
                 <div className='input mb-3'>
                 <div className='input-box relative'>
                  <input type='password' className='border border-slate-400 py-2 px-2.5 w-full rounded-[2px] peer'id='password' name='password'onChange={change} required/>
                  <div>  <input type='checkbox'onClick={ShowPassword}/><span className='text-sm pl-1'>show password</span></div>
                  <label className='absolute text-sm pointer-events-none left-3 top-2 px-1 text-gray-500 peer-focus:-translate-y-5 duration-200 peer-focus:text-smpeer bg-white peer-valid:-translate-y-5'>password</label>
                 </div>
                 {error.password && <div className='error text-red-800 text-sm mb-4'>{error.password}</div>}
                 </div>

                  
                 <button className='w-full py-3.5 px-2.5 bg-black text-white rounded-[4px] flex items-center justify-center'type='submit'>
                  {loding ?<ThreeDots visible={true} height="30"width="60"color="#4fa94d"radius="2"ariaLabel="three-dots-loading"/> :"Singup Securly" }
                  
                 {Okanimation && <img src={Right} className="h-8 w-8 ml-2"alt='</'/> }
                  </button>
                 <span className='text-black font-Poppins text-sm py-2 flex items-center'>Alerady have an account ?<Link to="/login"className='text-indigo-600 text-[17px]'>Login</Link></span>
             </form>
             {/* <GoogleSingupbtn/> */}
            </div>
        </div>
    </section>
    
    </>
  )
}


