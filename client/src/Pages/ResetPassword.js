import React, { useEffect, useState } from 'react'
import ShowPassword from '../js/ShowPassword';
import POST from '../js/POST';
import { useLocation, useNavigate } from 'react-router-dom';
import ResetPassValidation from '../js/ResetPassValidation';


export default function ResetPassword() {
      let location=useLocation();
      let navigate=useNavigate();
      const[resetToken,setresetToken]=useState('');
    const[error,seterror]=useState();
    const[password,setpassword]=useState('')
      useEffect(() => {
        const verifyToken = async () => {
          let params = new URLSearchParams(location.search);
          const token = params.get("token");
      
          if (!token) {
            navigate('/login');
          } else {
            try {
              const response = await POST('verify-resetpass-token', { token });
              console.log(response);
              if(response.statusCode===200 && response.user_exist===true){
                //   navigate('/reset-pass') 
       setresetToken(token);
                }else{
                  navigate('/login');
              }
            } catch (error) {
              alert("some thing went wrong??");
            }
          }
        };
      
        verifyToken();
      }, [location.search]);
      
    

    
    async function Submit(e){
        e.preventDefault();
      let result=ResetPassValidation(password);
      seterror(result.error);
      if(result.length === 0){
         let responce=await POST('reset-password',{password,resetToken});
         if(responce.statusCode===200 && responce.passReset===true){
          alert('password updated Susseefuly')
          navigate('/login');
         }else{
            alert('some thing went wrong...');
            navigate('/singup')
         }
      }else{
        seterror(result.error);

      }
    }
    function change(e){
          setpassword({
            ...password,
            [e.target.name]:e.target.value
          })
    }
  return (
    <>
    {/* {errorTost && <ErrorTost error={}/>} */}
    <section className='section-all-center'>
        <div className='max-container'>
            <div className='auth-container w-[450px] p-[20px] bg-white border-2 border-slate-300 m-auto max-sm:w-[80%]'>
                <div className='head-group'>
                    <h1 className='text-2xl font-Poppins font-[600]'>Reset password</h1>
                    <span className='text-slate-500 text-sm'>reset password....</span>
                </div>
             <form className=" w-full" onSubmit={Submit}>
             
                
                 <div className='input mb-3'>
                 <div className='input-box relative'>
                  <input type='password' className='border border-slate-400 py-2 px-2.5 w-full rounded-[2px] peer'onChange={change} name='newpassword' required/>
                  <label className='absolute  text-sm pointer-events-none  left-3 top-2 px-1 text-gray-500 peer-focus:-translate-y-5 duration-200 peer-focus:text-smpeer bg-white peer-valid:-translate-y-5'>new password</label>
                 </div>
                 {error?.newpassword && <div className='error text-red-800 text-sm mb-4'>{error.newpassword}</div>}
                  
                 </div>
                 <div className='input mb-3'>
                 <div className='input-box relative'>
                  <input type='password' className='border border-slate-400 py-2 px-2.5 w-full rounded-[2px] peer'id='password'name='confirmpassword' onChange={change} required/>
                  <label className='absolute text-sm pointer-events-none  left-3 top-2 px-1 text-gray-500 peer-focus:-translate-y-5 duration-200 peer-focus:text-smpeer bg-white peer-valid:-translate-y-5'>confirm password</label>
                 <div> <input type='checkbox'onClick={ShowPassword}/><span className='text-sm pl-1'>show password</span> </div>
                 </div>
                 {error?.confirmpassword && <div className='error text-red-800 text-sm mb-4'>{error.confirmpassword}</div>}
                  
                 </div>
                  
                 <button className='w-full py-3.5 px-2.5 bg-black text-white rounded-[4px] flex items-center justify-center'type='submit'>
                    reset password
                  {/* {loding ?<ThreeDots visible={true} height="30"width="60"color="#4fa94d"radius="2"ariaLabel="three-dots-loading"/> :"Login securly" }
                  
                    {Okanimation && <img src={Right} className="h-8 w-8 ml-2"alt='</'/> }
                   */}
                  </button>
                  {/* <span className='text-black font-Poppins text-sm py-2 flex items-center'>do Not have an account ?<Link to="/singup"className='text-indigo-600 text-[17px]'>Singup</Link></span> */}

             </form>
            </div>
        </div>
    </section>
    
    
    
    </>
  )
}
