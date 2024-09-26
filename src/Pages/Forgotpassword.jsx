import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { BiArrowBack } from "react-icons/bi";
import { getPasswordResetToken } from '../services/operations/authAPI';

const Forgotpassword = () => {

const dispatch = useDispatch();
const {loading}= useSelector((state) =>state.auth);
const [emailSent, setEmailSent]= useState(false);
const [email,setEmail]= useState("");
const handleOnSubmit= (e)=>{
  e.preventDefault();
  dispatch(getPasswordResetToken(email,setEmailSent))
}

  return (
    <div className='h-screen max-w-maxContent  mx-auto w-[508px] flex flex-col items-center justify-center text-white'>{
      
        loading ? (<div>Loading...</div>):
        (<div className=' flex flex-col gap-4'>

            <h1 className=' text-3xl font-semibold'>{
              !emailSent ? ("Reset your password"):("Check email")
              }</h1>
            <p className=' text-[#AFB2BF]'>
              {
                !emailSent? "Have no fear. We’ll email you instructions to reset your password. If you dont have access to your email we can try account recovery "
                :`We have sent the reset email to ${email}`
              }
            </p>
            <form onSubmit={handleOnSubmit} className='flex flex-col gap-4'>
              {
              !emailSent && (
                <label>
                  <p className=' text-richblack-300 font-semibold mb-2'>Email Address <sup className='text-pink-500'>*</sup></p>
                  <input type="email"
                  className='bg-[#161D29] w-full p-3 rounded-md'
                  name='email'
                  value={email}
                  style={{
                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                  }}
                  placeholder='Enter Your Email Address'
                  onChange={(e)=>setEmail(e.target.value)} />

                </label>
              )
              }

              <button className=' bg-yellow-50 text-black font-semibold p-2 rounded-md'>
                {
                !emailSent ?"Reset Password":"Resend Email"
                }
              </button>
            </form>
            <div>
              <NavLink className=" ml-3  flex flex-row items-center gap-2" to='/login'>
              <BiArrowBack />
                  <p>Back to Login</p>
              </NavLink>
            </div>

        </div>)
      
      }</div>
  )
}

export default Forgotpassword