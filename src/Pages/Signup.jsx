import React from "react";
import Template from "../Components/Cors/AuthPage/Template";
import signupImage from '../assets/Images/signup.webp'


const Signup = () => {
  return (
    <div className=' text-white  w-full mx-auto'>
      <div className=' max-w-maxContent mx-auto w-11/12'>
      <Template
     title="Welcome Back"
     desc1="Build skills for today, tomorrow, and beyond. Education "
     desc2="to future-proof your career."
     formType="signup"
     image={signupImage}
     />
      </div>
    
    </div>
  );
};

export default Signup;
