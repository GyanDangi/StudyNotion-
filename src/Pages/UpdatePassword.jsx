import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaEye,FaEyeSlash } from "react-icons/fa6";
import { BiArrowBack } from 'react-icons/bi';
import { resetPassword } from '../services/operations/authAPI';
const UpdatePassword = () => {

	const dispatch = useDispatch();
	const location = useLocation();
	const [formData,setFormData]= useState({
		password:"",
		confirmPassword:"",
	})
	const [showPassword,setShowPassword]= useState(false);
	const [showConfirmPassword,setShowConfirmPassword]= useState(false);
	const {loading}= useSelector((state)=>state.auth);
	const handleOnChange =(e)=>{
		setFormData((prevData)=>(
			{
				...prevData,
				[e.target.name]:e.target.value,
			}
		))
	}
	
	const {password,confirmPassword}=formData;
	const navigate = useNavigate();

	const handleOnSubmit=(e)=>{
		e.preventDefault();
		const token= location.pathname.split('/').at(-1);
		dispatch(resetPassword(password,confirmPassword,token,navigate))
	}
  return (
    <div className=' h-screen max-w-maxContent  mx-auto w-[508px] flex flex-col  items-center justify-center text-white gap-4'>
	{
		loading ? ("Loading..."):
				(<div className='flex flex-col gap-4'>
					<h1 className='text-left font-semibold text-3xl'>Choose New Password</h1>
					<p className=''>Almost done. Enter your new password and youre all set.</p>
					<form onSubmit={handleOnSubmit} >
					   
					   <label className='relative flex flex-col gap-1 '>
						<p>New Password <sup className='text-pink-500'>*</sup></p>
						<input 
						className='bg-[#161D29] w-full p-3 rounded-md'
						style={{
							boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
						   }}
						required
						type={showPassword ?"text":"password"}
						name='password'
						value={formData.password} 
						placeholder='New Password'
						onChange={handleOnChange}/>
						<span
						 className="absolute right-3 top-[38px] z-[10] cursor-pointer "
						onClick={()=>setShowPassword((prev)=>!prev)}
						>
							{
								showPassword ? (<FaEyeSlash fontSize={24}/>):(<FaEye fontSize={24}/>)
							}</span>
					   </label>

					   <label className='relative flex flex-col gap-1 mt-4'>
						<p>Confirm New Password <sup className='text-pink-500'>*</sup></p>
						<input 
						className='bg-[#161D29] w-full p-3 rounded-md'
						style={{
							boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
						   }}
						required
						type={showConfirmPassword ?"text":"password"}
						name='confirmPassword'
						value={formData.confirmPassword} 
						placeholder='Cofirm New Password'
						onChange={handleOnChange}/>
						<span
						 className="absolute right-3 top-[38px] z-[10] cursor-pointer"
						onClick={()=>setShowConfirmPassword((prev)=>!prev)}
						>
							{
								showConfirmPassword ? (<FaEyeSlash fontSize={24}/>):(<FaEye fontSize={24}/>)
							}</span>
					   </label>
					   <button className='w-full mt-3 bg-yellow-50 text-black font-semibold p-2 rounded-md'>
							Reset Password
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

export default UpdatePassword