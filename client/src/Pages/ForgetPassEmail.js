import React, { useState } from 'react'
import EmailValidation from '../js/EmailValidation';
import POST from '../js/POST';
import { useNavigate } from 'react-router-dom';
import { useGlobalcontext } from '../Features/Context';
import { ThreeDots } from 'react-loader-spinner';

export default function ForgetPassEmail() {
    let navigate=useNavigate();
    let {setbtndisable,btndisable}=useGlobalcontext();
    const[Femail,setFemail]=useState('');
    const[error,seterror]=useState('');
   async function Submit(e){
      e.preventDefault();
      setbtndisable(true);
      let result=EmailValidation(Femail);
      if(result.length === 0){
        let responce =await POST('verify-email',Femail);
        if(responce.statusCode===200 && responce.user_exist===true){
            let {resetLink}=responce;
             navigate(`${resetLink}`);
        }else{
          setTimeout(() => {
            setbtndisable(false)
            seterror(responce.error);
          }, 3000);
            // navigate('/')
        }
    
      }else{
        seterror(result.NewError);
      }

   }
   function change(e){
     setFemail({
        ...Femail,
        [e.target.name]:e.target.value
     })
   }

  return (
<>
<section className='section-all-center'>
        <div className='max-container'>
            <div className='auth-container w-[450px] p-[20px] bg-white border-2 border-slate-300 m-auto max-sm:w-[80%]'>
                <div className='head-group'>
                    <h1 className='text-2xl font-Poppins font-[600]'>Verify Email</h1>
                    <span className='text-slate-500 text-sm'>Verify your Email
                    Stay connected, stay ahead.</span>
                </div>
             <form className=" w-full"onSubmit={Submit} >
            
            
                 
       
                
                 <div className='input mb-3'>
                 <div className='input-box relative'>
                  <input type='email' className='border border-slate-400 py-2 px-2.5 w-full rounded-[2px] peer'name='email'onChange={change} required/>
                  <label className='absolute text-sm pointer-events-none  left-3 top-2 px-1 text-gray-500 peer-focus:-translate-y-5 duration-200 peer-focus:text-smpeer bg-white peer-valid:-translate-y-5'>email</label>
                 </div>
                 {error.email && <div className='error text-red-800 text-sm mb-4'>{error.email}</div>}
                 </div>                 
                 <button className='w-full py-3.5 px-2.5 bg-black text-white rounded-[4px] flex items-center justify-center'type='submit'disabled={btndisable}>
            
                                    {btndisable ?<ThreeDots visible={true} height="30"width="60"color="#4fa94d"radius="2"ariaLabel="three-dots-loading"/> :"Verify email" }
                  
                  </button>
                 {/* <span className='text-black font-Poppins text-sm py-2 flex items-center'>Alerady have an account ?<Link to="/login"className='text-indigo-600 text-[17px]'>Login</Link></span> */}
             </form>
            </div>
        </div>
    </section>
</>
  )
}
