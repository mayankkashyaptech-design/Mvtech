import React from 'react'

export default function GoogleSingupbtn() {
  const handleGoogleSignup = () => {
    let res=window.open('http://localhost:8000/auth/google/callback', '_self');
    console.log(res)

  };
  return (
  <>
<button className='text-white font-Poppins bg-purple-500 text-center' onClick={handleGoogleSignup}>Singup with Google</button>

  </>    
  )

}
