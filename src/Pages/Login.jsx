import React from 'react'
import Template from '../Components/Cors/AuthPage/Template'
import loginImg from '../assets/Images/login.webp'
const Login = () => {


  return (

    <div className=' text-white  w-full mx-auto'>
      <div className=' max-w-maxContent mx-auto w-11/12'>
      <Template
     title="Welcome Back"
     desc1="Build skills for today, tomorrow, and beyond. Education "
     desc2="to future-proof your career."
     formType="login"
     image={loginImg}
     />
      </div>
    
    </div>
    
  )
}

export default Login